import React from 'react'

export default function Button({letter, handleClickLetter, wordsLetterDict, alphabetDict}) {

  function returnClass() {
    let name = "key";

    if (wordsLetterDict[letter]) {
      name += " correct";
    } else if (alphabetDict[letter]) {
      name += " active";
    }

    return name;
  }

  return (
    <button 
      className={returnClass()}
      onClick={handleClickLetter} 
      letter={letter}
    >

      {letter}

    </button>
  )
}
