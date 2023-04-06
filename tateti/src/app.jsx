import React,{useState} from 'react';
import Square from './square.jsx';
import './css/app.css';
function App(){
    const [state,setState]=useState(Array(9).fill(null));
    const [turnoX,setTurnoX]=useState(true);
    const [winner,setWinner]=useState(null);
   
    function handleClick(i){
        if (state[i] || calculateWinner(state)) {
            setWinner(calculateWinner(state));
            
            return;
          }

        const copia=state.slice();
        if(copia[i]){
            return
        }
        copia[i]=turnoX ? 'x' : 'o';
      
        
        setState(copia);
        setTurnoX(!turnoX);
    }
    function reset(){
        setState(Array(9).fill(null));
        setTurnoX(true);
        setWinner(null);
    }
    return(
        <div>
            <section>
            <Square value={state[0]} handleClick={()=>{handleClick(0)}}/>
            <Square value={state[1]} handleClick={()=>{handleClick(1)}}/>
            <Square value={state[2]} handleClick={()=>{handleClick(2)}}/>
            </section>
            <section>
            <Square value={state[3]} handleClick={()=>{handleClick(3)}}/>
            <Square value={state[4]} handleClick={()=>{handleClick(4)}}/>
            <Square value={state[5]} handleClick={()=>{handleClick(5)}}/>
            </section>
            <section>
            <Square value={state[6]} handleClick={()=>{handleClick(6)}}/>
            <Square value={state[7]} handleClick={()=>{handleClick(7)}}/>
            <Square value={state[8]} handleClick={()=>{handleClick(8)}}/>
            </section>
            {winner ? <h1>Ganador {winner}!</h1> : <h1>A jugar!</h1>}
            <button className='reset' onClick={reset}>reset</button>
        </div>
    );
}

function calculateWinner(state) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  }

export default App;