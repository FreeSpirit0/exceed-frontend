import React, { useState, useEffect } from "react"
import Cards from "../components/Card"
import { getToilets } from "../services/toilet"
import { ConvertTimeTo24 } from "../components/ConvertTime"

const Home = () => {
  const [toilets, setToilets] = useState([])
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  )

  useEffect(() => {
    getToilets().then((data) => {
      setToilets(data)
      setCurrentTime(new Date().toLocaleTimeString())
    })
  }, [])

  return (
    <div className="home">
      <h1 className="toilet-status">Toilet Status</h1>
      <h2 className="local-time">
        Current Time: {ConvertTimeTo24(currentTime)}
      </h2>
      <Cards data={toilets} />
      <p>รออีก ... นาที</p>
    </div>
  )
}

export default Home
