import React from "react";
import Cards from "../components/Card";

const Home = () => {
  const sample_toilet = [
    {
      id: "1",
      isEmpty: true,
      startTime: 0,
    },
    {
      id: "2",
      isEmpty: false,
      startTime: 0,
    },
		{
      id: "3",
      isEmpty: false,
      startTime: 0,
    }
  ];
  return (
    <div className="home">
			<Cards data={sample_toilet} />
			<p>รออีก ... นาที</p>
    </div>
  );
};

export default Home;
