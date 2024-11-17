# Getting Started with Fetch data from GIT api - This project we fetch selective data
### To fetch all the data, you opt for API RESTFUL with all the data in JSON format.
### Author: Liz W. Wachira
This project we fetch selective data. Else you can opt for API RESTFUL with all the data in JSON format. 
Here are the key takeaways from "Fetching data with Hooks":

Fetching Data: Learn how to fetch data from an external API using the GitHub API as an example.
useState and useEffect: Use useState to handle the data and useEffect to make the API call.
API Request: Make an HTTP request using fetch, convert the response to JSON, and update the state with the fetched data.
Avoiding Multiple Requests: Ensure the API request is made only once when the application first renders by passing an empty array to useEffect.

These points will help you understand how to effectively fetch and manage data in a React application.

### `npm start`
### ` Local to remote GIT repo`
git init -b main
git add .
 git commit -m "First commit"
 git remote add origin git@github.com:*your_username*/my-react-app.git
 git remote -v //verify repo
 git push origin main