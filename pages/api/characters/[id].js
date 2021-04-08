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
  return character
}