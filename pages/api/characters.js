import getCharacters from "../../utils/getCharacters";

export default async (req, res) => {
  try {
    const response = await getCharacters("test");
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ data: response });

  } catch (e) {
    res.status(400).end();
  }
};