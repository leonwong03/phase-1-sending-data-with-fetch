//makes a POST request to /users with a name and email
//await submitData( name, email )
function submitData(userName, userEmail){
    const formatObject = {
        //.post( '/users' )
        method: "POST",
        //let headers
        headers: {
            //Add Headers(web)
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        //let reqBody
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
   
    };
    //Send the POST Request(web)
    return fetch("http://localhost:3000/users", formatObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    //(web says console.log(object) but i got error, in indexTest.js it expect(document.body.innerHTML))
      document.body.innerHTML = object.id
  })
  //(web) When Things Go Wrong: Using catch()
  .catch(function (error) {
    alert("Unauthorized Access!");
    document.body.innerHTML="Unauthorized Access!"
    console.log(error.message);
    });
}
submitData("Sam", "sam@sam.com");