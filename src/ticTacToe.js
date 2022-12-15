import React, { useState,useEffect } from 'react'
import closeIcon from './icons/icons-close.svg'
import roundIcon from './icons/icons-round.svg'
import restartIcon from './icons/icons-restart.svg'
import "./ticTacToe.css";


export default function TicTacToe() {
    const [checkedCells,setCheckedCells] = useState([]);
    const [playerWins,setPlayerWins] = useState(false);
    const [Draw,setDraw] = useState(false);
    const [AIWins,setAIWins] = useState(false);
    const possibleChance=[['1','5','9'],['3','5','7'],['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9']];

    
    
    function restart() {
        setDraw(false);
        setPlayerWins(false);
        setAIWins(false);
        setCheckedCells([]);
        document.querySelectorAll(".ticTacToe_mark").forEach(item => item.classList.remove("showMark"))
    }

    
    useEffect(() => {
        if(checkedCells.length > 4){
            let playerChance=checkedCells.filter(item => item.value === 0).map((item)=>item.id);
            let AIChance=checkedCells.filter(item => item.value === 1).map((item)=>item.id);
            possibleChance.forEach((item)=>{
                let Pres = !item.some(val => playerChance.indexOf(val) === -1);
                if(Pres){
                    setPlayerWins(true);
                }
            })
            if(!playerWins){
            possibleChance.forEach((item)=>{
                let Pres = !item.some(val => AIChance.indexOf(val) === -1);
                if(Pres){
                    setAIWins(true);
                }
            })}
            
        }

        if (!playerWins && checkedCells.length && checkedCells.length < 8){ 
            if (checkedCells[checkedCells.length - 1].value===0) {
              autoPlay();
          }
        }
        if (!playerWins && !AIWins && checkedCells.length === 9){ 
            setDraw(true);
        }
    }, [checkedCells]);

    function generateRandom(filledIds) {
        let num = Math.floor(Math.random() * 9) + 1;
        return (filledIds.includes(`${num}`)) ? generateRandom(filledIds) : `${num}`;
    }
    function autoPlay() {
       let filledIds=checkedCells.map((item)=>item.id)
       const autoClickedCell=generateRandom(filledIds);
       setCheckedCells([
           ...checkedCells,
           {id:autoClickedCell,value:1}
        ]);
       document.getElementById(autoClickedCell).lastChild.classList.add('showMark');
    }


    const TicTacToeClick=(e)=>{
     if(e.target.id){
       const clickedCell=e.target.id;
       let filledIds=checkedCells.map((item)=>item.id)

       if(!filledIds.includes(clickedCell)){
         setCheckedCells([
              ...checkedCells,
             {id:clickedCell,value:0}
           ]);
         document.getElementById(e.target.id).firstChild.classList.add('showMark');
        }
      }
    } 
    
    


  return (
    <div className='ticTacToe'>
    <div className='ticTacToe_window'>
        <div className='ticTacToe_grid'>
            <div id={1} className='ticTacToe_cell' onClick={(e)=>{TicTacToeClick(e)}}>
             <img className='ticTacToe_mark' src={closeIcon} alt='icon'/>
             <img className='ticTacToe_mark' src={roundIcon} alt='icon'/>
            </div>
            <div id={2} className='ticTacToe_cell' onClick={(e)=>{TicTacToeClick(e)}}>
             <img className='ticTacToe_mark' src={closeIcon} alt='icon'/>
            <img className='ticTacToe_mark' src={roundIcon} alt='icon'/>
            </div>
            <div id={3} className='ticTacToe_cell' onClick={(e)=>{TicTacToeClick(e)}}>
             <img className='ticTacToe_mark' src={closeIcon} alt='icon'/>
            <img className='ticTacToe_mark' src={roundIcon} alt='icon'/>
            </div>
            <div id={4} className='ticTacToe_cell' onClick={(e)=>{TicTacToeClick(e)}}>
             <img className='ticTacToe_mark' src={closeIcon} alt='icon'/>
            <img className='ticTacToe_mark' src={roundIcon} alt='icon'/>
            </div>
            <div id={5} className='ticTacToe_cell' onClick={(e)=>{TicTacToeClick(e)}}>
             <img className='ticTacToe_mark' src={closeIcon} alt='icon'/>
            <img className='ticTacToe_mark' src={roundIcon} alt='icon'/>
            </div>
            <div id={6} className='ticTacToe_cell' onClick={(e)=>{TicTacToeClick(e)}}>
             <img className='ticTacToe_mark' src={closeIcon} alt='icon'/>
            <img className='ticTacToe_mark' src={roundIcon} alt='icon'/>
            </div>
            <div id={7} className='ticTacToe_cell' onClick={(e)=>{TicTacToeClick(e)}}>
             <img className='ticTacToe_mark' src={closeIcon} alt='icon'/>
            <img className='ticTacToe_mark' src={roundIcon} alt='icon'/>
            </div>
            <div id={8} className='ticTacToe_cell' onClick={(e)=>{TicTacToeClick(e)}}>
             <img className='ticTacToe_mark' src={closeIcon} alt='icon'/>
            <img className='ticTacToe_mark' src={roundIcon} alt='icon'/>
            </div>
            <div id={9} className='ticTacToe_cell' onClick={(e)=>{TicTacToeClick(e)}}>
             <img className='ticTacToe_mark' src={closeIcon} alt='icon'/>
             <img className='ticTacToe_mark' src={roundIcon} alt='icon'/>
            </div>
        </div>
       <div className= {`ticTacToe_wrapper ${
        (playerWins || AIWins || Draw) ? 'show_wrapper' : ''
      }`}>
        {playerWins?<p className='ticTacToe_wrapper_mssg'>You Won :)</p>:AIWins?<p className='ticTacToe_wrapper_mssg tryAgain'>Try Again :(</p>:<p className='ticTacToe_wrapper_mssg Draw'>Draw !!</p>}
        <div className='restart'>
          <img className='restartIcon' src={restartIcon} alt='icon' onClick={() => restart()}/>
          <p className='ticTacToe_wrapper_mssg' >Restart!</p>
        </div>
       </div>
       </div>
       <div className='ticTacToe_window_hide'>
        <h1>Tic-Tac-Toe</h1>
       </div>
    </div>
  )
}
