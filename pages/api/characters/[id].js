import { fetchQuery, baseUrl } from "../../../utils/fetchQuery";

export default async (req, res) => {
  const { id } = req.query;

  try {
    const request = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await request.json();
    const compiledData = await buildCharacterDetails(data);

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(JSON.stringify({ data: compiledData }));
    res.end();

  } catch (e) {
    res.status(400).end();
  }
};

const buildCharacterDetails = async character => {
  // TODO refactor to check w/object.keys, push into array
  const { homeworld, films, species, vehicles, starships } = character;
  const endpoints = [
    { homeworld },
    { films },
    { species },
    { vehicles },
    { starships },
  ];

  //TODO pop out empty/invalid arrays
  //TODO consider purposeful breaks
  // get only whats asked

  await endpoints.reduce(
    async (promises, objProperty) => {
      const newObj = await promises
      const key = Object.keys(objProperty);
      const endpoint = objProperty[key];

      if (checkType(endpoint) === "array") {
        const compiledArray = await endpoint.reduce(async (promises, el) => {
          const acc = await promises
          const data = await fetchQuery(null, null, el);
          acc.push(data)
          return acc
        }, [])
        newObj[key] = compiledArray

      } else if (checkType(endpoint) === "string") {
        const data = await fetchQuery(null, null, endpoint);
        newObj[key] = data
      } 
      return newObj;
    }, 
  character);

  console.log("character", character);
  return character;
};

const checkType = propertyValue => {
  if (Array.isArray(propertyValue) && propertyValue.length) {
    console.log("valid array of endpoints");
    return "array";

  } else if (typeof propertyValue === "string" && propertyValue.split("/")[0] === "http:") {
    console.log("valid single endpoint");
    return "string";

  } else {
    console.log("no endpoints");
    return false;
  }
};
