import React, { useState } from 'react'

function Guess(props) {

  const [inputNumber, setInputNumber] = useState(" ");
  const [img, setImg] = useState("/question.gif");
  const [count, setCount] = useState(10);


  const clicks = () => {
    if (count == 1) {
      props.setShowscore("visible")
      props.setBtn(true)

      setInterval(() => {
        setCount(10)
      }, 1000);
    }
    else {
      setCount(count - 1)
    }
  }
  const handleOnChange = (event) => {
    setInputNumber(event.target.value);
  }
  const restart = () => {
    setTimeout(() => {
      setInputNumber(" ")
      setImg("/question.gif");
    }, 2000);
  }

  const camparing = () => {
    clicks()
    if (props.randomNumber == inputNumber) {
      setImg("/right.gif")
      props.showAlert(" Your guessed it right!", "success")
      props.score()
      restart()
    }
    else if (inputNumber > props.randomNumber) {
      props.showAlert(" Try smaller number", "danger")
      setImg("/wrong.gif")
      restart()
    }
    else {
      props.showAlert(" Try greater number", "danger")
      setImg("/wrong.gif")
      restart()
    }
  }

  return (
    <div>
      <div className='container-sm my-5 py-1 border '>
        <div className="my-3 fs-3">Score {props.point}</div>
        <img src={img} alt="" className='img-thumbnail' />
        <br />
        <div className="mt-2 fs-3">clicks you have {count}</div>
        <br />
        <input className='my-2 ' type="number" value={inputNumber} onChange={handleOnChange} placeholder="Enter your guess" />
        <br />
        <button disabled={props.btn} type="button" className=' btn btn-primary  btn-lg my-2' onClick={camparing}>Try your luck </button>

      </div>
    </div>
  )
}

export default Guess