import type { NextApiRequest, NextApiResponse } from "next";
const fs = require("fs");

const templateUrl =
  "https://za-it.bitrix24.ru/rest/1/ae0hygmqx539sfic/crm.lead.add.json";

//?FIELDS[TITLE]=Заявка с сайта&FIELDS[PHONE][0][VALUE]=

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const fetchUrl = new URL(templateUrl);
  fetchUrl.searchParams.append("FIELDS[TITLE]", "Заявка с сайта");
  fetchUrl.searchParams.append("FIELDS[PHONE][0][VALUE]", req.body.number);
  const response = await fetch(fetchUrl.toString());
  res.status(200).json({ status: "ok" });
  return null;
};
