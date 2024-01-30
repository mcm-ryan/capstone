import React from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

export const TicTacToe = () => {
  return (
    <div classname='container'>
        <h1 classname='title'>Tic Tac Toe</h1>
        <div classname='board'>

        </div>
        <button className="reset">Reset Board</button>
    </div>
  )
}
