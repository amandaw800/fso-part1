import {useState} from 'react'


const Statistics = ({goodCount, badCount, neutralCount}) => {
  const total = goodCount + badCount + neutralCount
  const calculateAvgScore = () => total ? (goodCount - badCount) / total : 0
  const positivePercent = () => total ? goodCount / total : 0

  if(total === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <StatisticLine text="good" value={goodCount}/>
      <StatisticLine text="neutral" value={neutralCount}/>
      <StatisticLine text="bad" value={badCount}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={calculateAvgScore()}/>
      <StatisticLine text="positive" value={positivePercent()}/>
    
    </div>
  )
    
}

const StatisticLine = ({text, value}) => {

  if(text === "positive"){
    return (
      <div>
        {text} {value} %
      </div>
    )
  }

  return (
    <div>
      {text} {value}

    </div>
  )

}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {setGood(good+1)}
  const handleNeutral = () => {setNeutral(neutral+1)}
  const handleBad = () => {setBad(bad+1)}

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text='neutral'/>
      <Button onClick={handleBad} text="bad"/>
      
      <h2>Statistics</h2>


      <Statistics goodCount={good} badCount={bad} neutralCount={neutral}/>
    </div>
  )

}


export default App