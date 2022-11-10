import { getArticleList } from "../../lib/api";

export default async function handler(req, res) {
    
    const content = await getArticleList (true);
    res.status(200).json(content)
  }
  
