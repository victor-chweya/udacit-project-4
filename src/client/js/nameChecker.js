function checkForName(inputText) {
    // console.log("::: Running checkForText :::", inputText);
    if(inputText.length == 0){
        alert('Please enter a Sentence we analyse')
        return false; 
    }
    return true;

};

export { checkForName };
