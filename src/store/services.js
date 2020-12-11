import axios from "axios"
const newdemoConnector = axios.create({
  baseURL:
    "https://crowdbotics.atlassian.net/jira/software/projects/PLAT/boards/32",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
