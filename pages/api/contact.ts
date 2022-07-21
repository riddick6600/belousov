import type { NextApiRequest, NextApiResponse } from "next";
const fs = require("fs");

export default (req: NextApiRequest, res: NextApiResponse) => {
  fs.appendFile(
    "/var/log/phones.log",
    `Телефон ${req.body.number}\n`,
    () => {
      res.status(200).json({ status: "ok" });
    },
    () => {
      res.status(500).json({ status: "Fail to save file" });
    }
  );
};
