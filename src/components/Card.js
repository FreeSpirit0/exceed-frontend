import React, { useState, useEffect } from 'react'
import { FaDoorOpen, FaToilet } from 'react-icons/fa'

const Card = ({ data }) => {
  const [elapsed, setElapsed] = useState(data.startTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsed(elapsed + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [elapsed])

  return (
    <div className="card">
      <header>
        <h1>ห้อง {data.id}</h1>
      </header>
      {data.isEmpty ? <FaDoorOpen name="toilet" /> : <FaToilet name="toilet" />}

      <p className={data.isEmpty ? 'empty' : 'used'}>
        <font color="black" className="status">
          สถานะ:
        </font>
        {data.isEmpty ? 'ว่าง' : 'ไม่ว่าง'}
      </p>
      {data.isEmpty ? (
        ''
      ) : (
        <div className="word">
          <p className="time-in">
            เริ่มเข้าใช้งานตั้งแต่: {data.startTime} วินาที
          </p>
          <p className="time-out">เวลาที่ใช้: {elapsed} วินาที</p>
          <p className="time-estimate">ใช้เวลาเสร็จสิ้นประมาณ: xxx วินาที</p>
        </div>
      )}
    </div>
  )
}

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
