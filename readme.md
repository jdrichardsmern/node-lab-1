**Node Express & Form Lab**<br />
**Lab 01 Instructions**

1.  Navigate to the space where you want to work on this lab in your terminal
2.  Go to the https://github.com/jdrichardsmern/node-lab-1 in the browser
3.  In the upper right corner click on the 'Clone or download' green button
4.  Copy the address
5.  In your terminal type git clone
6.  Hit the space bar and paste the rest of the address
7.  change into the node-lab-1 directory
8.  In your terminal, Initialize your Node project
9.  In your terminal, Install your most basic dependencies (this will include
    package.json)
10. In your terminal, Install express
11. In your terminal, create your main file (suggested(index.js or app.js))
12. From your terminal, open your folder in VSCode
13. Create your express server in your main file. Remember to:
    a. require your dependencies
    b. create a new express app by declaring your app variable and invoking the
    express function
    c. declare the port you want the app to run on
    d. create a root GET request route that sends a string to the browser saying `Hello Express Server on port ${port}`
    e. create a way for you app to listen for the port you created and have it also log in the console: `This server is running on port ${port}`

14. Start your server. Check both your terminal
    message and your browser (you may also check Postman)
15. Install morgan, body-parser and ejs npm packages from your terminal
    HINT:
    Either stop your server and install the packages
    OR
    If you are running nodemon, create a different tab window to install packages.
    New window must be pointed to the same directory as your project.
16. Require morgan in your main file
17. Add code that is listed below to tell Node to use morgan. Remember this code must
    be placed above all of your api calls code (i.e. above any app.get or app.post
    codes).
    CODE TO ADD: `app.use(morgan("dev"));` (do not use the back ticks)
18. Start your server if it is not running
19. Reload your browser a few times
20. Check your terminal. You should see something like
    `GET / 304 5.800 ms - -`
21. This says that you made a GET request to your root (/) folder, give you a status
    code and lets you know how long the request took.
22. Require body-parser in your main file by decalring the variable bodyParser and
    requiring the package.
23. Add code below so that body-parser can be used by Node.
    Do not include the back ticks and make sure the code is placed above your api calls (app.get or app.post):
    `app.use(bodyParser.urlencoded({ extended: false }));`
    `app.use(bodyParser.json());`
24. Create a new GET request with an endpoint called signup. Send the string 'Signup
    Route' to the browser
25. Test the route in your browser.
26. Create a POST request route with an endpoint called user.
27. Inside the callback function, decalare a user variable for the req.body object.
    Then add a JSON response for req.body object setting the object name to the same name as the variable:

    `const user = req.body; res.json({ user: user });`

28. Now test your POST request in Postman
    a. Switch your request from GET to POST
    b. Switch to Body instead of Authorization
    c. Choose the 'raw' radio button
    d. Next to that use the dropdown to change from text to JSON
    e. Create a JSON object or use the one below:

    `{ "name":"Anthony", "age":25, "carowner":true }`

    f. Click on Send Button.
    g. You should see an object with a user key and the value being the object you
    created

29. Declare an ejs variable and require the ejs package in your main file
30. Declare a path variable and require the built-in node module named path
31. Create a directory in your root folder called views
32. Create three files in your Views directory: index.js, error.js, and signup.js
33. Use the code below to create a view engine and point to the views folder.
    This should be placed directly below the app.use code.

    `app.set("views", path.join(__dirname, "views"));`
    `app.set("view engine", "ejs");`

34. In your index.js file create an h1 tag saying:
    "Hello (name variable), This is the index page"
35. In your main file delete the res.send line and instead render the index page.
36. In you render argument, remember to include an object with a name key and your name
37. Test the root page in your browser or in Postman
38. Create a GET request with a wildcard enpoint route
    It MUST be placed below all other requests.
    This route should render the error page in the callback function
39. Go to your error page and create an h1 tag that says:
    "OOPS! The page you requested does not exist"
40. Test this route by using an invalid endpoint either
    in the URL address bar of the browser OR in Postman
41. Create a form in your signup.ejs file (no css needed)
42. Each input should have a label

43. The form inputs should include:
    a. First Name (required)
    b. Last Name (required)
    c. Email (required)
    d. Phone (required)
    e. Car Rental Type label
    f. Dropdown with a list of car types
    g. Contact preference label
    h. Radio buttons for email, phone, and text
    i. label for Special Requests
    j. Box where the user can write in all of their added request information
    k. each input must have a name in order to hook on to your post request route
    l. a submit button
    m. form should connect to the signup endpoint and have the proper request.
44. In the signup POST request in your main folder:
    a. Declare a variable user for the req.body
    b. Respond with the JSON that contains an object containing the key,value pairs for each of the inputs from your form. The object below is not the whole code but gives an idea of what goes in the object inside the JSON response. The nameYourKey and nameOfYourInput stated below, while not required, should probably be identical

        {
            nameYourKey: user.nameOfYourInput,
            nameYourKey: user.nameOfYourInput
        }

45. If your server isn't running start your server and navigate to the signup endpoint.
46. Enter information into the inputs
47. If you are successful your browser will navigate to the user endpoint and display all of the JSON information in the browser.
48. Now in your main folder change the JSON object inside the /user post route to just user.
    It is ES6 and is the equivalent of returning {user:user} in the object. You should still have
    the user req.body variable as well.
