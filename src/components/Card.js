import React, {useState, useEffect} from 'react'
import { FaDoorOpen, FaToilet } from "react-icons/fa" 

const Card = ({ data }) => {
	const [elapsed, setElapsed] = useState(data.startTime)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setElapsed(elapsed + 1)
		}, 1000)
		return () => clearInterval(intervalId); 
	}, [elapsed])

	return (
    <div className="card">
        <header>
            <h1>ห้อง {data.id}</h1>
        </header>
        {data.isEmpty ? <FaDoorOpen name="toilet"/> : <FaToilet name="toilet"/>}
        <p className={data.isEmpty ? "empty" : "used"}>
            {data.isEmpty ? "ว่าง" : "ไม่ว่าง"}
        </p>
				{data.isEmpty ? '' : <div>
					<p>เข้าไปตอน: {data.startTime}</p>
					<p>เข้าไปแล้ว: {elapsed}</p>
					<p>(น่า)จะว่างตอน</p>
				</div>}
    </div>
  )
}

const Cards = ({ data }) => {
    console.log(data)
    return (
        <div className="toilet-list">
            {data.map(toilet => <Card key={toilet.id} data={toilet} />)}
        </div>
    )
}

export default Cards