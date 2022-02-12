import React from 'react'
import Cards from '../components/Card'

const Home = () => {
  const sample_toilet = [
    {
      id: '1',
      isEmpty: true,
      startTime: 0,
    },
    {
      id: '2',
      isEmpty: false,
      startTime: 0,
    },
    {
      id: '3',
      isEmpty: false,
      startTime: 0,
    },
  ]
  return (
    <div>
      <h1 className="toilet-status">Toilet Status</h1>
      <div className="home">
        <Cards data={sample_toilet} />
        <p className="estimate">รออีก ... นาที</p>
      </div>
    </div>
  )
}

export default Home
