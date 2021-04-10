import getCharacters from "../../../utils/getCharacters";

export default async (req, res) => {
  try {
    const data = await getCharacters("test");
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ data });
    res.end();
  } catch (e) {
    res.status(400).end();
  }
};
