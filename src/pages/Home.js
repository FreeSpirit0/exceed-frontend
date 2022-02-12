import React, { useState, useEffect } from "react";
import Cards from "../components/Card";
import {ConvertTimeTo24} from "../components/ConvertTime"
import { getToilets } from "../services/toilet";
import getFormatTime from "../utils/time";

const Home = () => {
  const [toilets, setToilets] = useState([]);
  const [estimate, setEstimate] = useState(0);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  console.log(toilets.every(Boolean))
  useEffect(() => {
    const intervalId = setInterval(
      getToilets().then((data) => {
        setToilets(data);
        setEstimate(
          toilets
            .map((toilet) => (toilet.status ? 0 : toilet.time_est))
            .reduce((partialSum, a) => partialSum + a, 0)
        );
        setCurrentTime(new Date().toLocaleTimeString());
      }),
      2000
    );

    return () => clearInterval(intervalId);
  }, [toilets]);

  return (
    <div className="home">
      <h1 className="toilet-status">Toilet Status</h1>
      <h2 className="local-time">
        Current Time: {ConvertTimeTo24(currentTime)}
      </h2>
      <Cards data={toilets} />
      {toilets.map(toilet => toilet.status).some(Boolean) ? <p>มีว่าง</p> : <p>รออีก {getFormatTime(estimate / 3)}</p>}
    </div>
  );
};

export default Home;
