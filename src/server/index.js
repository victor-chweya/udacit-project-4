const dotenv = require('dotenv')
dotenv.config();

const apiKey = process.env.API_KEY
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require("node-fetch"); // https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
const cors = require('cors')


const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))


app.use(express.static('dist'))

// console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})


// POST Route
app.post('/api', async function(req, res) {
    let text = req.body.text;
    console.log(`You entered: ${text}`);
    const fetchURL = baseURL+apiKey+"&lang=en&of=json&txt="+text

    const getSentiment = async ()=>{

        const res = await fetch(fetchURL) //(baseURL+animal+key)
        try {
    
        const data = await res.json();
        console.log(data)
        return data;
        }  catch(error) {
        console.log("error iliopatikana", error);
        // appropriately handle the error
        }
    }
    const sentiment = await getSentiment()
    res.send(sentiment)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
