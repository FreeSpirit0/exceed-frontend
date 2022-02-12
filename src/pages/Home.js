import React, { useState, useEffect } from "react";
import Cards from "../components/Card";
import { getToilets } from "../services/toilet";
import getFormatTime from "../utils/time";

const Home = () => {
  const [toilets, setToilets] = useState([]);
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      getToilets().then((data) => {
        setToilets(data);
        setEstimate(
          toilets
            .map((toilet) => (toilet.status ? 0 : toilet.time_est))
            .reduce((partialSum, a) => partialSum + a, 0)
        );
      }),
      2000
    );

    return () => clearInterval(intervalId);
  }, [toilets]);

  return (
    <div className="home">
      <h1 className="toilet-status">Toilet Status</h1>
      <Cards data={toilets} />
      <p>รออีก {getFormatTime(estimate / toilets.filter(toilet => !toilet.status).length)}</p>
    </div>
  );
};

export default Home;
