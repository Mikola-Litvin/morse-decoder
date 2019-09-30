const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
  let letter = [];
  let code = "";
  let pattern = /^\*/;
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.substr(i, 10));
  }
  for (let i = 0; i < arr.length; i++) {
    if (pattern.test(arr[i])) {
      arr[i] = " ";
    }
    else {
      for (let j = 0; j < arr[i].length; j += 2) {
        code += arr[i].substr(j, 2);
        if (code === "10") {
          letter.push(".");
        }
        if (code === "11") {
          letter.push("-");
        }
        code = "";
      }
      arr[i] = MORSE_TABLE[letter.join('')];
      letter.length = 0;
    }
  }
  return arr.join('');
}

module.exports = {
    decode
}