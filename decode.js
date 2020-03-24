module.exports.decode = (input) => {
  const {encryptedMessage, key} = input;
  let decryptedMessage = '';
  for(let iterator = 0; iterator < encryptedMessage.length; iterator++) {
    let letterAscii = encryptedMessage.charCodeAt(iterator);
    if(letterAscii > 64 && letterAscii < 91) {
      let newLetterAscii = (letterAscii - key);
      if(newLetterAscii > 64 && newLetterAscii < 91)    
        decryptedMessage += String.fromCharCode(newLetterAscii);
      else {
        newLetterAscii = 90 - (65 - newLetterAscii) + 1;
        decryptedMessage += String.fromCharCode(newLetterAscii);
      }
    } else {
      decryptedMessage += String.fromCharCode(letterAscii);
    }
  }
  return decryptedMessage;
}