
function isPalindrome(str){
    const clearStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(clearStr);
    const reversedStr = clearStr.split('').reverse().join('');//the split is used to dive the str in to char array and the reverse is used to revserse the array " and the join is used to for the sring of reveesed char array"
    console.log(reversedStr);
    return clearStr === reversedStr;
}



function palindromeChecker(){
    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');

    if(isPalindrome(inputText.value)){
        result.textContent = `"${inputText.value}" is palindrome.`;
    }else{
        result.textContent = `"${inputText.value}" is not a palindrome.`;
    }

}








document.getElementById("checkbutton").addEventListener("click",palindromeChecker);