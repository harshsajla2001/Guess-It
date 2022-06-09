import React, { useState, useMemo} from 'react'
import './App.css';
import NavBar from './comp/NavBar';
import Guess from './comp/Guess';
import Alert from './comp/Alert';
import ScoreBoard from './comp/ScoreBoard';

function App() {
  const [alert, setAlert] = useState(null);
  const [point, setPoint] = useState(0)
  const [showScore, setShowscore] = useState("invisible")
  const [btn, setBtn] = useState(false);
  let score = () => {
    setPoint(point + 1)
  }
  let showAlert = (message, type) => {

    setAlert({
      msg: message,
      typ: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }
  const randomNumber = useMemo(() => { return Math.floor((Math.random() * 10) + 1); }, [point])
  console.log("randomNumber " + randomNumber);
  return (
    <div className="App">
      <NavBar />
      <Alert showAlert={showAlert} alert={alert} />
      <ScoreBoard setBtn={setBtn} setPoint={setPoint} point={point} showScore={showScore} setShowscore={setShowscore} />
      <Guess btn={btn} setBtn={setBtn} point={point} setPoint={setPoint} randomNumber={randomNumber} score={score} showAlert={showAlert} setShowscore={setShowscore} />
    </div>

  );
}

export default App