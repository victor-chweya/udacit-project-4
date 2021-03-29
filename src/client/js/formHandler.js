function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText);
    console.log("::: Form Submitted :::")
    Client.postData('http://localhost:8081/api', {text: formText})
    .then(function(res) {
        
        document.getElementById("results").innerHTML = `Agreement: ${res.agreement}`;
        
    })
    
};


export { handleSubmit }
