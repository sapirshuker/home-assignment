require('dotenv').config({path:'process.env'})
const express = require('express');
const { version } = require('./package.json');
const os = require('os');
const usage = require('cpu-percentage');
const Twitter = require('twitter');
const PORT  = process.env.PORT || 3000;
const app = express();
app.use(express.json());


const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    bearer_token: process.env.BEARER_TOKEN
  });



app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
  
  app.get('/health', (request, response) => {
    var start = usage();
    var myHealth = new Object();
    myHealth.memUsage= ((os.totalmem()-os.freemem())/os.totalmem())*100
    myHealth.OSName= os.platform() == 'win32' ? 'Windows' : os.platform()
    myHealth.version = version
    myHealth.cpuUsage = start['percent'];
    response.json(myHealth);
});
 
  
app.get('/tweets', (request, response) => {
    var param = request.query['query']
    return  JSON.stringify(client.get('search/tweets', {q: param, count: '10', max_result: '10'}, function(error, tweets, response_twitter) {
        let match = [];
        for (var i in tweets.statuses) {
            match.push({create_time:tweets.statuses[i].created_at,user:tweets.statuses[i].user.screen_name,status:tweets.statuses[i].text})}
        return response.send(JSON.stringify(match))
     }))
});
