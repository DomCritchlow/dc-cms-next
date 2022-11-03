import { aboutme } from "../../lib/api";

export default async function handler(req, res) {
    const [content, data] = await aboutme()
    res.status(200).json({content: content, data: data})
  }