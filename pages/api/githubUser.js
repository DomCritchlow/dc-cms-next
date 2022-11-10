import { getUserProfile } from "../../lib/api"


export default async function handler(req, res) {
  const userProfile = await getUserProfile()
  res.status(200).json(userProfile)
}
