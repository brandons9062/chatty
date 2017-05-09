const express = require('express');
const bodyParser = require('body-parser');
const dateFormat = require('dateformat');
const app = express();

app.use(express.static('assets'))
app.use(bodyParser.json())

let now = new Date();

let messages = [
    {
        message:"first",
        time:dateFormat(now, "h:MM TT")
    },
    {
        message:"second",
        time:dateFormat(now, "h:MM TT")
    },
    {
        message:"third",
        time:dateFormat(now, "h:MM TT")
    }
];

app.get('/messages', function(request, response, next){
    response.status(200).json({messages:messages});
})

app.post('/messages', function(request, response, next){
    console.log(request.body);
    messages.push({message:request.body.message, time:dateFormat(new Date(), "h:MM TT")});
    response.status(200).json({messages:messages});
})

app.listen(3000);
