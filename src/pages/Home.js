import React, { useState, useEffect } from "react";
import Cards from "../components/Card";
import { getToilets } from "../services/toilet";

const Home = () => {
  const [toilets, setToilets] = useState([])

  useEffect(() => {
    getToilets().then((data) => {
      setToilets(data)
    })
  }, [])
  
  return (
    <div className="home">
			<Cards data={toilets} />
			<p>รออีก ... นาที</p>
    </div>
  );
};

export default Home;
