
export default async function handler(req, res) {
    const aboutMD = await retrieveAboutMD();
    res.status(200).json(aboutMD)
  }
  

async function retrieveAboutMD(){
    const aboutURL = "https://raw.githubusercontent.com/DomCritchlow/dc-cms-content/work/about.md"
    const aboutMD = fetch(aboutURL).then((response) => response.text())

    return aboutMD;
}