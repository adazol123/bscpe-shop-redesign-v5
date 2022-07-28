// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  query?: Partial<{
    [key: string]: string | string[];
  }>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({
      name: "John Does",
      query: req.query,
    });
  }
  if (req.method === "POST") {
    console.log(req.method);
    res.send({ name: "Hello" });
  }
}
