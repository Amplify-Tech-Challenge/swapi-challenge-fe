export default async (req, res) => {
  const { id } = req.query;

  try {
    const request = await fetch(
      `https://swapi.dev/api/people/${id}`
    );
    const data = await request.json();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ data })
    res.end();
  } catch (e) {
    res.status(400).end();
  }
};
