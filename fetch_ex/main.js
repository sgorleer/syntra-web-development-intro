const promiseCategory = fetch("https://api.chucknorris.io/jokes/categories");

promiseCategory
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomIndex = Math.floor(Math.random() * 15 + 1);
    randomCategory = data[randomIndex];
  })
  .then(() => {
    const additionalFetch = fetch(
      `https://api.chucknorris.io/jokes/random?category=${randomCategory}`
    );
    return additionalFetch;
  })
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(randomCategory);
    console.log(data.value);
  })
  .catch(() => {
    console.log("error");
  });

/*
const promiseJoke = fetch(
  `https://api.chucknorris.io/jokes/categories=${firstCategory}`
);

promiseJoke.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.value);
    return data.value;
}
*/

/*
  .then(function(response) {
    return response.json(); 
}) // Getting the raw JSON data
.then(function(data) {
*/
