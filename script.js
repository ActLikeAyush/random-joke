fetch(' https://hindi-jokes-api.onrender.com/jokes?api_key=463779afaf2f3ec341b966431857')
.then(data => data.json())
.then( jokeData => {
  const jokeText= jokeData.jokeContent;
  const jokeName= jokeData.created_by
  const joke = document.getElementById('joke');
  joke.innerHTML = jokeText;
 
})
