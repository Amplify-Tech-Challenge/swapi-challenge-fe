import { fetchQuery, baseUrl } from "../../../utils/fetchQuery";

export default async (req, res) => {
  const { id } = req.query;

  try {
    const request = await fetch(
      `https://swapi.dev/api/people/${id}`
    );
    const data = await request.json();

    
    const compiledData = buildCharacterDetails(data)


    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ data: compiledData })
    res.end();
  } catch (e) {
    res.status(400).end();
  }
};

const buildCharacterDetails = (character) => {
  // get properties w/endpoints
  // get properties w/array of endpoints
  const {homeworld, films, species, vehicles, starships} = character
  const endpoints = [homeworld, films, species, vehicles, starships]

  const fetchedPropertyData = endpoints.map(property => {
    if (checkType(property)) {

    }
  })

  console.log(fetchedPropertyData)

  let compiled = character

  if (compiled.homeworld) {
    const homeworld = "test"
    compiled.homeworld = homeworld
  }

  console.log(compiled.homeworld)

  return compiled
}

const checkType = (property) => {
  if (Array.isArray(property) && property.length) {
    console.log('valid array of endpoints')
    return "array"
  } else if (typeof property === 'string' && property.split('/')[0] === 'http:') {
    console.log('valid single endpoint')
    return "string"
  } else {
    console.log('no endpoints')
    return false
  }
}