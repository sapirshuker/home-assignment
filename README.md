# Sapir Shuker Home Assignment

### API
my service should include the following API:

##### 1. GET /tweets?query=YOUR_STRING
This endpoint should get a string and return the 10 latest tweets from according to YOUR_STRING

##### 2. GET /health
This endpoint should return a health check of your service:
1. OS name - Darwin/Windows/etc.
2. Language/platform version - Your Node.js version for example
3. Memory usage of your machine (Percentage value)
4. CPU usage of your machine (Percentage value)

#### Docker Instructions
1. Download the git repo to your computer
2. Open command line to the folder 
3. Enter the command: build -t assignment .
4.  Enter the command: docker run -dp 3000:3000 assignment

#### Github
Make sure to host all your code on Github repository, including your Dockerfile and a README file. 

Your README file should include:
1. A link to your live API on Heroku
2. Any required documantion for your API and how to use them.
3. Instructions about how to run your service locally with Docker.

### Deployment
Your service should be deployed to [Heroku](https://www.heroku.com/) with a Docker container.
My Link to the API: