import matter from 'gray-matter'

export async function getAbout(prod){

    const aboutURL = process.env.CONTENTREPO + getState(prod) + "/" + process.env.ABOUTFILE

    const aboutMD = await fetch(aboutURL)
                            .then((response) => response.text())
                            .then((data) => matter(data))
    
    return [aboutMD.content, aboutMD.data];
}

export async function getUserProfile(){
    
    const userURL = process.env.USERAPIURL + process.env.USERNAME;
    const userProfile = fetch(userURL).then((response) => response.json())
  
    return userProfile;
  }

export async function getUserProfilePicture(){
    return getUserProfile().then((data)=>data.avatar_url)
}

export async function getArticleList(prod){

    //const contentURL = process.env.CONTENTREPO
    const contentURL = "https://api.github.com/repos/domcritchlow/dc-cms-content/contents/articles"
    const articleUrlLis = await fetch(contentURL+`?ref=${getState(prod)}`).then((response) => response.json())
                                                                    .then((content)=> content.map(function(item){
                                                                        return item.download_url}))
    
    const articleDetailList = await Promise.all(articleUrlLis.map(async (item) => {
                               const response = await getArticleDetail(item);
                      return response;
    }))
    return articleDetailList
}

export async function getArticleDetail(link){

    const documentDetails = await fetch(link).then((response) => response.text())
                                                .then((data) => matter(data).data)
                                                .then(function(item){
                                                    var combined = item
                                                    combined.download_url = link
                                                    return combined
                                                    })
    
    return documentDetails
}



// util functions
function getState(prod){
    let state = ""
    if(prod){
        state = process.env.LIVE
    }else{
        state = process.env.DRAFT
    }
    //console.log(state)
    return state
}