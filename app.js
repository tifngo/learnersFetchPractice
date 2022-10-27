/*
    In this activity, you will be making a simple fetch api call to the url provided to request some data stored there.
    In the first stage of this challenge, your task is to use the provided code to make the fetch request and then console log the data.
    If your team has time, update our code using the async/await keywords!
*/

function makeCall() {
  // Use the fetch api to display some simple user data to the console!
 const url = "https://reqres.in/api/users";  

  
  fetch(url) // call the fetch api with the correct input argument! two primary cases where you need a second argument (POST, deleting, update, read and endpoint requires verification)...basically other than GET. First argument is always needed.
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    }) // convert the returned data into a json using the object's built-in methods. Type of argument it's expecting is a callback function. .then will be called when there is a successful resolved.
    .then(robert => {
      const myData = robert.data[2];
      console.log(myData);
    }) // use the resulting json to display some of our user information in the console.
    .catch(console.log); // console.log an error message in case something goes wrong.

};

