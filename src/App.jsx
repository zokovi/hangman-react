import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Button from './Button';
import Hangman from './Hangman';
import Letter from './Letter';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import WinPopup from './WinPopup';
import randomWords from 'random-words';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

function App() {
  const loseCount = 7;
  const [count, setCount] = useState(0);
  const [tryCount, setTryCount] = useState(0);
  const [word, setWord] = useState(randomWords().toUpperCase());
  const [letters, setLetters] = useState(word.split(''));
  const [win , setWin] = useState(false);
  const [lose , setLose] = useState(false);


  const [wordsLetterDict, setWordsLetterDict] = useState(
    word.split('').reduce((acc, letter) => {
      acc[letter] = false;
      return acc;
    }, {})
  );

  const [alphabetDict, setAlphabetDict] = useState(alphabet.reduce((acc, letter) => {
      acc[letter] = false;
      return acc;
    }, {})
  );

  // CHECK WIN
  useEffect(() => {
    if (Object.values(wordsLetterDict).every(value => value)) {
      setWin(true);
    };
  }, [...Object.values(wordsLetterDict)]);

  // check lose
  useEffect(() => {
    if (tryCount === loseCount) {
      setLose(true);
    }; 
  }, [tryCount]);



  function handleClickLetter(e) {
    const letter = e.target.getAttribute('letter');

    if (Object.values(wordsLetterDict).every(value => value)) {
      setWin(true);
      return;
    };

    if (tryCount === loseCount) {
      setLose(true);
      return;
    };
    
    // do nothing if letter is already clicked
    if (alphabetDict[letter]) {
      return;
    }

    setAlphabetDict(alphabetDict => {
      alphabetDict[letter] = true;
      return alphabetDict;
    });

    setWordsLetterDict(wordsLetterDict => {
      if (Object.keys(wordsLetterDict).includes(letter)) {
        wordsLetterDict[letter] = true;
      }
      return wordsLetterDict;
    });

    if (!word.includes(letter)) {
      setTryCount(tryCount => tryCount + 1);
    };

    setCount(count => count + 1);
  }

  return (
      <div className="App">
        {/* <WinPopup win={win} setWin={setWin}/> */}
        
        <div className="title">
          <h1>HANGMAN</h1>
        </div>

        <div className="hangman">
          <Hangman 
            tryCount={tryCount} 
            key="hangman" 
            win={win}
            loseCount={loseCount}
            lose={lose}
          />
        </div>

        <div className="word">
          {letters.map((letter, i) => (
            <Letter 
              letter={letter} 
              alphabetDict={alphabetDict} 
              tryCount={tryCount}
              loseCount={loseCount}
              key={`letter-${i}-${letter}`}
            />
          ))}
        </div>

        <div className="buttons">
          {alphabet.map((letter) => (
            <Button 
              letter={letter} 
              key={letter} 
              alphabetDict={alphabetDict} 
              wordsLetterDict={wordsLetterDict}
              handleClickLetter={handleClickLetter}
            />
          ))}
        </div>

      </div>
  )
}

export default App

// letter dict for each word alphabet: {a: true}
// array of the letters in the word