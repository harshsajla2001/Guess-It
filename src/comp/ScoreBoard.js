import React from 'react'

export default function ScoreBoard(props) {

  const handleClick = () => {
    props.setShowscore("invisible")
    props.setBtn(false)
    props.setPoint(0)
  }
  return (
    <div className={`${props.showScore} container-lg bg-primary border border-primary position-absolute top-50 start-50 translate-middle p-5 text-light`}>
      <h1><strong>Your total score <br /> {props.point}</strong> </h1>
      <button type="button" className=' btn btn-light  btn-primary my-2' onClick={handleClick} >Play again </button>

    </div>
  )
}