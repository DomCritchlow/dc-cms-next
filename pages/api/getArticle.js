import { getArticleDetail } from "../../lib/api";

export default async function handler(req, res) {
    const link = "https://raw.githubusercontent.com/DomCritchlow/dc-cms-content/main/articles/how-the-pentagon-could-think-about-software-development.md"
    const content = await getArticleDetail(link);
    res.status(200).json(content)
  }
  
