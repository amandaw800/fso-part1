import {useState} from 'react'


const Statistics = ({goodCount, badCount, neutralCount}) => {
  const total = goodCount + badCount + neutralCount
  

  const calculateAvgScore = () => total ? (goodCount - badCount) / total : 0;

  return (
    <div>
      <div>
        all {total}
      </div>
      <div>
        average {calculateAvgScore()}
      </div>
      
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
      <div>
      good {good} 
      </div>
      <div>
        neutral {neutral}
      </div>
      <div>
         bad {bad}
      </div>

      <Statistics goodCount={good} badCount={bad} neutralCount={neutral}/>
    </div>
  )

}


export default App