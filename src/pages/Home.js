import React, { useState, useEffect } from "react";
import Cards from "../components/Card";
import { getToilets } from "../services/toilet";

const Home = () => {
  const [toilets, setToilets] = useState([])
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleDateString())

  useEffect(() => {
    getToilets().then((data) => {
      setToilets(data)
      setCurrentTime(new Date().toLocaleDateString())
    })
  }, [])
  
  return (
    <div className="home">
      <h1 className="toilet-status">Toilet Status</h1>
			<Cards data={toilets} />
			<p>รออีก ... นาที</p>
    </div>
  )
}

export default Home
