function filterPalindromes (words) {
 
 var arr = [];
 var flag = true;
 // loop through the array of words to find the palindrome one.
 for(var i = 0 ; i < words.length; i++){
  // define variable to loop from the end to start.
   var wordLength = words[i].length-1;
   // loop through the letters inside the word.
   for(var j = 0 ; j < words[i].length; j++){
     console.log(words[i][wordLength])
     // check if the first letter in the word is equal to the last one.
     if(words[i][j].toLowerCase() === words[i][wordLength].toLowerCase()){
      // if so change the flag state.
       flag = true;
     }
     else{
       flag = false;
     }
     // go to next last word.
     wordLength--;
   }
   if(flag === true){
    // as soon as there are equal words add the word to the array.
     arr.push(words[i])
   }
 }
 // return the array that contained all the palindrome words.
 return arr;
}