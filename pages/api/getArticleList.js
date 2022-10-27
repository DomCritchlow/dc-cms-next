
export default async function handler(req, res) {
    const branch = "main"
    const content = await retrieveContentArticleFolder(branch);
    res.status(200).json(content)
  }
  

async function retrieveContentArticleFolder(branch){

    const contentURL = "https://api.github.com/repos/domcritchlow/dc-cms-content/contents/articles"
    const content = fetch(contentURL+`?ref=${branch}`).then((response) => response.json())

    return content;
}
