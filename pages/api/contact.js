export default async (req, res) => {
  const { number } = req.body;
  try {
    res.status(200).send("Скоро перезвоним");
  } catch (error) {
    res.status(500).send("Что-то пошло не так");
  }
};
