import React, { useState, useEffect } from 'react'
import { FaDoorOpen, FaToilet } from 'react-icons/fa'
import getFormatTime from "../utils/time";

const Card = ({ data }) => {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsed(elapsed + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [elapsed])

  return (
    <div className="card">
      <header>
        <h1>ห้อง {data.room}</h1>
      </header>
      {data.status ? <FaDoorOpen name="toilet" /> : <FaToilet name="toilet" />}

      <p className={data.status ? 'empty' : 'used'}>
        <font color="black" className="status">
          สถานะ:
        </font>
        {data.status ? 'ว่าง' : 'ไม่ว่าง'}
      </p>
      {data.status ? (
        ''
      ) : (
        <div className="word">
          <p className="time-in">
            เริ่มเข้าใช้งานตั้งแต่: {data.time_arr}
          </p>
          <p className="time-out">เวลาที่ใช้: {getFormatTime(elapsed)} </p>
          <p className="time-estimate">ใช้เวลาเสร็จสิ้นประมาณ: xxx</p>
        </div>
      )}
    </div>
  );
};

const Cards = ({ data }) => {
  console.log(data)
  return (
    <div className="toilet-list">
      {data.map((toilet) => (
        <Card key={toilet.id} data={toilet} />
      ))}
    </div>
  )
}

export default Cards
