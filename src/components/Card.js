import React, { useState, useEffect } from "react";
import { FaDoorOpen, FaToilet } from "react-icons/fa";
import getFormatTime, { parseTime } from "../utils/time";

const Card = ({ data }) => {
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsed(elapsed + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [elapsed]);

  return (
    <div className="card">
      <header>
        <h1>ห้อง {data.room}</h1>
      </header>
      {data.status ? <FaDoorOpen name="toilet" /> : <FaToilet name="toilet" />}
      <p className={data.status ? "empty" : "used"}>
        {data.status ? "ว่าง" : "ไม่ว่าง"}
      </p>
      {data.status ? (
        ""
      ) : (
        <div>
          <p>เข้าไปตอน: {data.time_arr}</p>
          <p>เข้าไปแล้ว: {getFormatTime(elapsed)}</p>
          <p>(น่า)จะว่างตอน</p>
        </div>
      )}
    </div>
  );
};

const Cards = ({ data }) => {
  return (
    <div className="toilet-list">
      {data.map((toilet) => (
        <Card key={toilet.id} data={toilet} />
      ))}
    </div>
  );
};

export default Cards;
