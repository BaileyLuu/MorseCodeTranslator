function translator(plainText){
  document.getElementById("myText").value = "";
  const morseCode = [
  //A       B      C       D      E     F     G
    ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.." , ".----", "..---", "...--", "....-", "....", "-....", "--...", "---..", "----.", "-----"]

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    var text = "";
    for(var i = 0; i < plainText.length; i++){
      for(var j =0; j < alphabet.length; j++){
        if(plainText[i].toUpperCase() == alphabet[j]){
          text += morseCode[j] + " ";
          
        
        }
      }
    }
    document.getElementById("statement").innerHTML =  "\"" + plainText + "\" in Morse Code is..."
    document.getElementById("morseCode").innerHTML = text;
}
function decryption(morseCode){
  document.getElementById("MCText").value = "";
   const morseCode2 = [
  //A       B      C       D      E     F     G
    ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.." , ".----", "..---", "...--", "....-", "....", "-....", "--...", "---..", "----.", "-----"]

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    morseCode += " ";
    var MCode = "";
    var finalText = "";
    for(var i = 0; i < morseCode.length; i++){
      if(morseCode[i] != " " ){
        MCode += morseCode[i];
      }else{
        
        MCode += "";
        for(var j = 0; j < morseCode2.length; j++){
          if(MCode == morseCode2[j]){
            finalText += alphabet[j];
            MCode = "";
            
          }
        }
        
      }
      
    }
document.getElementById("statement").innerHTML =  "\"" + morseCode + "\" in Plaintext is..."
    document.getElementById("morseCode").innerHTML = finalText;
}