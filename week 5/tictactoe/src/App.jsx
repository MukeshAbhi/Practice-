import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import e from 'cors';

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [xisnext, setXisNext] = useState(true)

  function onBoxClick(i){
    const newBox = boxes.slice();
    if(boxes[i] || calculateWinner(boxes)) {
      return;
    }
    if (xisnext){
      newBox[i] = "X";
    } else{
      newBox[i] = "O";
    }
    setBoxes(newBox);
    setXisNext(!xisnext);
  }

  const winner = calculateWinner(boxes);
  console.log(winner);
  let status;
  if(winner){
    status = "Winner :" + winner;
    console.log(status);
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board'>
        <div className='row' >
          <Box value={boxes[0]} clickHandler={() => onBoxClick(0)} />
          <Box value={boxes[1]} clickHandler={() => onBoxClick(1)} />
          <Box value={boxes[2]} clickHandler={() => onBoxClick(2)} />
        </div>
        <div className='row'>
          <Box value={boxes[3]} clickHandler={() => onBoxClick(3)} />
          <Box value={boxes[4]} clickHandler={() => onBoxClick(4)} />
          <Box value={boxes[5]} clickHandler={() => onBoxClick(5)} />
        </div>
        <div className='row'>
          <Box value={boxes[6]} clickHandler={() => onBoxClick(6)} />
          <Box value={boxes[7]} clickHandler={() => onBoxClick(7)} />
          <Box value={boxes[8]} clickHandler={() => onBoxClick(8)} />
        </div>
      </div>
    </>
  )
}


function Box({value,clickHandler}){
  return <button className='unit-box' onClick={clickHandler}>{value}</button>
}

function calculateWinner(boxes){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for ( let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i]
    if( boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]){
      return boxes[a];
    }
  }
  return null;
  
}
export default App
