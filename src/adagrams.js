const Adagrams = {
  drawLetters() {
    let letterPool = [
     'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
     'B', 'B',
     'C', 'C',
     'D', 'D', 'D', 'D',
     'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
     'F', 'F',
     'G', 'G', 'G',
     'H', 'H',
     'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
     'J',
     'K',
     'L', 'L', 'L', 'L',
     'M', 'M',
     'N', 'N', 'N', 'N', 'N', 'N',
     'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
     'P', 'P',
     'Q',
     'R', 'R', 'R', 'R', 'R', 'R',
     'S', 'S', 'S', 'S',
     'T', 'T', 'T', 'T', 'T', 'T',
     'U', 'U', 'U', 'U',
     'V', 'V',
     'W', 'W',
     'X',
     'Y', 'Y',
     'Z'
   ];

   let drawnLetters = []

    for (let i = 0; i < 10; i++){
      let randomLetter = letterPool[Math.floor(Math.random()*letterPool.length)];
      letterPool.splice(letterPool.indexOf(randomLetter), 1);
       drawnLetters.push(randomLetter);
    }

  return   drawnLetters

  },
  usesAvailableLetters(input, lettersInHand) {
    let valid = true;
    let inputCharacters = input.toUpperCase().split('');
    let newHand = lettersInHand.map(letter => letter);

    inputCharacters.forEach((letter) =>{
      if ((newHand).includes(letter)){
        newHand.splice(newHand.indexOf(letter), 1);
      } else {
        valid = false;
      }
  });
  return valid;
},

scoreWord(word){
  const letterScores = {
      "A": 1,
      "E": 1,
      "I": 1,
      "O": 1,
      "U": 1,
      "L": 1,
      "N": 1,
      "R": 1,
      "S": 1,
      "T": 1,
      "D": 2,
      "G": 2,
      "B": 3,
      "C": 3,
      "M": 3,
      "P": 3,
      "F": 4,
      "H": 4,
      "V": 4,
      "W": 4,
      "Y": 4,
      "K": 5,
      "J": 8,
      "X": 8,
      "Q": 10,
      "Z": 10
  }

  const letters = word.toUpperCase().split("");
  let score = 0;

  for (const letter of letters){
    score += letterScores[letter]
  }
  if(word.length >= 7){
    score += 8;
  }
  return score;
},

highestScoreFrom(words){
  
}

};

// Do not remove this line or your tests will break!
export default Adagrams;
