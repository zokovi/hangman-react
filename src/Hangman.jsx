import React from 'react'

export default function Hangman({tryCount, win, loseCount, lose}) {
  function calcDisplay(count, morethan) {
    if (count > morethan) {
      return "block";
    } 
    if (win) {
      return "block";
    }

    return "none";
  }

  function calcDisplayClass(count, morethan) {
    if (count > morethan) {
      return " show";
    } 
    if (win) {
      return " show";
    }

    return "";
  }

  function playAgain(){
    window.location.reload();
  }

  return (
    <>
      {/* Try count = {tryCount} */}

      <svg height="250" width="260" stroke="white" viewBox='30 0 290 260'>
        <g id="body" 
          stroke={lose ? 'red' : "white"}
          transform={win ? "translate(0, 60)" : ""}
        >
          <g id="head">
            <circle cx="200" cy="80" r="20" strokeWidth="4" 
              fill="black" 
              className={'hangmanBody' + calcDisplayClass(tryCount, 0)}
            />
            <g id="eyes" 
              transform='translate(0, -4)' 
              className={'hangmanBody' + calcDisplayClass(tryCount, 1)}
            >
              <g id="rEyes" >
                <circle cx="193" cy="80" r="4"/>
                <circle cx="207" cy="80" r="4"/>
              </g>
              <g id="xEyes" className="hide" display={lose ? 'block' : "none"} >
                <line x1="190" y1="78" x2="196" y2="84"/>
                <line x1="204" y1="78" x2="210" y2="84"/>
                <line x1="190" y1="84" x2="196" y2="78"/>
                <line x1="204" y1="84" x2="210" y2="78"/>
              </g>
            </g>
            <path d="m 211 86 c -4 6 -18 6 -22 0"   
              stroke='white' fill='white'
              display={win ? 'block' : 'none'}
            />
          </g>

          <line  x1="200" y1="100" x2="200" y2="150" 
            className={'hangmanBody' + calcDisplayClass(tryCount, 2)}
          />
          <line id="armL" x1="200" y1="120" x2="170" y2="140" 
            className={'hangmanBody' + calcDisplayClass(tryCount, 3)}
          />
          <line id="armR" x1="200" y1="120" x2="230" y2="140"
            className={'hangmanBody' + calcDisplayClass(tryCount, 4)} 
          />
          <line id="legL" x1="200" y1="150" x2="180" y2="190" 
            className={'hangmanBody' + calcDisplayClass(tryCount, 5)}
          />
          <line id="legR" x1="200" y1="150" x2="220" y2="190" 
            className={'hangmanBody' + calcDisplayClass(tryCount, 6)}
          />
        </g>

        <line x1="10" y1="250" x2="150" y2="250" />
        <line id="floor" x1="150" y1="250" x2="250" y2="250" 
          display={win ? 'block' : 'none'}
        />

        <line x1="250" y1="250" x2="390" y2="250" />
        <line x1="100" y1="250" x2="100" y2="20" />
        <line x1="100" y1="20" x2="200" y2="20" />
        <line id="rope" x1="200" y1="20" x2="200" y2="57" />
      </svg>

      <span 
        style={{color: "red", fontSize: "2rem", display: lose ? "block" : "none", margin: "1rem 0 0 0rem"}}
      >
        Sorry, you lose!
      </span>

      <span 
        style={{color: "#00FF00", fontSize: "2rem", display: win ? "block" : "none", margin: "1rem 0 0 0rem"}}
      >
        You win! You saved him!
      </span>

      <a href='#' onClick={playAgain} 
        style={{
          display: win || lose ? "block" : "none", 
          margin: "1rem 0 0 0",
          color: "white",
          textDecoration: "underline",
        }}
      >
        Play again?
      </a>

    </>
  )
}
