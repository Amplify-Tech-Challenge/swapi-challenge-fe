import { fetchQuery, baseUrl } from "../../../utils/fetchQuery";

export default async (req, res) => {
  const { id } = req.query;

  try {
    const request = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await request.json();
    const compiledData = buildCharacterDetails(data);

    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ data: compiledData });
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

  const fetchedPropertyData = await endpoints.reduce(
    async (promises, objProperty) => {
      const key = Object.keys(objProperty);
      const endpoint = objProperty[key];
      const newFetchedData = await promises;

      if (checkType(endpoint) === "array") {
        // parse out each item in the array
        // fetchedPropertyData
      } else if (checkType(endpoint) === "string") {
        const data = await fetchQuery(null, null, endpoint);
        // console.log('key', key);
        // console.log('data', data);
        newFetchedData.push({ [key]: data });
      } else {
      }
      return promises;
    },
    []
  );

  // console.log("compiled accumulator", fetchedPropertyData);

  const compiled = { ...character, ...fetchedPropertyData };

  console.log("fetched properties", ...fetchedPropertyData);
  console.log("character", character);
  console.log("compiled character", compiled);

  return compiled;
};

const checkType = propertyValue => {
  // let key = Object.keys(objProperty)
  // if (Array.isArray(objProperty[key]) && objProperty[key].length) {
  if (Array.isArray(propertyValue) && propertyValue.length) {
    console.log("valid array of endpoints");
    return "array";

    // } else if (typeof objProperty[key] === 'string' && objProperty[key].split('/')[0] === 'http:') {
  } else if (
    typeof propertyValue === "string" &&
    propertyValue.split("/")[0] === "http:"
  ) {
    console.log("valid single endpoint");
    return "string";
  } else {
    console.log("no endpoints");
    return false;
  }
};
