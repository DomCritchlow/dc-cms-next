
export default async function handler(req, res) {
  const userProfile = await makeUserProfileCall("domcritchlow")
  res.status(200).json(userProfile)
}

async function makeUserProfileCall(userName){
  const githubUserUrl = "https://api.github.com/users/";
  const userURL = githubUserUrl + userName;
  const userProfile = fetch(userURL).then((response) => response.json())

  return userProfile;
}