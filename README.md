# short_url

This is a shorturl  wbsite with basic frontend and backend , uses mongo as database.
To run the progam use split terminal.
In first "cd frontend" and then "npm start"
In second "cd backend" and then "node index.js"

The frontend has an input feild which requires a link and a button when the button is clicked it sends a posyt requested to backend where a shorturl in created from  shortid method and created a redirect url with timestamps of on click which can be seen anayltics based on shortid.
The shortid and url and made using url schema in mongoose.

If shortid is created it will give the shortid else it gives out error "can not be created".

controllers/url.js creates shortid in newshort function and creates the display of analyis in analytics function.
models/url.js creates the schema for shortid redirect url and timestamps for all the clicks.
roter/url.js creates routes for the get and post methods and exported to index.js
connect.js helps in connection of congoose and upload the url to database.
App.js contains all the frontend handling and code sends all the request to backend etc.
index.js combines all the other modules together and aids in their performance also setting up the port 8001 for running the backend at a location.
