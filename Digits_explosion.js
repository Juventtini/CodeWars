/* Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value. */
function explode(s) {
    let newString = '';
    for (let i = 0; i < s.length; i++) {
        newString += s[i].repeat(s[i])
    }
  return newString;
}
console.log(explode('102269'))
