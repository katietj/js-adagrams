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
};

// Do not remove this line or your tests will break!
export default Adagrams;
