import axios from "axios"

export async function getToilets() {
    const res = await axios.get("https://ecourse.cpe.ku.ac.th/exceed02/api/room/status/all")
    return res.data
  }