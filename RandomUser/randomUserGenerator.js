//show users in DOM
const showRandomUserData = (randomUser) => {
  document.getElementById("name").innerHTML = `
    ${randomUser.results[0].name.first}
    ${randomUser.results[0].name.last}
    ${randomUser.results[0].name.title}`;

  document.getElementById("age").innerHTML = `${randomUser.results[0].dob.age}`;
  document.getElementById("email").innerHTML = `${randomUser.results[0].email}`;
  document.getElementById("phone").innerHTML = `${randomUser.results[0].phone}`;
};

//get user from random users
const generatorUser = async () => {
  //waiting for response  
  const response = await fetch("https://randomuser.me/api");
  //convert response to json
  const jsonResponse = await response.json();
  //call funtion to display the object with param.
  showRandomUserData(jsonResponse);
};

generatorUser();
