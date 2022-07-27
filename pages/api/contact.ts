import type { NextApiRequest, NextApiResponse } from "next";
const fs = require("fs");

const templateUrl = new URL(
  "https://za-it.bitrix24.ru/rest/1/ae0hygmqx539sfic/crm.lead.add.json"
);
templateUrl.searchParams.append("FIELDS[TITLE]", "Заявка с сайта");

//?FIELDS[TITLE]=Заявка с сайта&FIELDS[PHONE][0][VALUE]=

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const fetchUrl = templateUrl;
  fetchUrl.searchParams.append("FIELDS[PHONE][0][VALUE]", req.body.number);
  const response = await fetch(fetchUrl);
  res.status(200).json({ status: "ok" });
};
