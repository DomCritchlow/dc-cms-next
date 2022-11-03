import matter from 'gray-matter'

export async function aboutme(){
    const aboutURL = "https://raw.githubusercontent.com/DomCritchlow/dc-cms-content/work/about.md";

    const aboutMD = await fetch(aboutURL)
                            .then((response) => response.text())
                            .then((data) => matter(data))
    
    return [aboutMD.content, aboutMD.data];
}