import React from 'react'

export default function Letter({letter, alphabetDict, tryCount, loseCount}) {

  function printLetter() {
    if (alphabetDict[letter]) {
      return letter;
    } else if (tryCount >= loseCount) {
      return letter;
    } else {
      return "_";
    }
  }

  return (
    <div className="letter">
        {printLetter()}
    </div>
  )
}
