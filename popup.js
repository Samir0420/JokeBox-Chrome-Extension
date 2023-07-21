// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
  
    // Get references to the 'Get Joke' button and the container element to display the joke
    var getJokeButton = document.getElementById('getJokeButton');
    var jokeContainer = document.getElementById('jokeContainer');
  
    // Add a click event listener to the 'Get Joke' button and call the 'getJoke()' function when clicked
    getJokeButton.addEventListener('click', function() {
      getJoke();
    });
  
    // Define the limit (number of jokes) and the API URL to retrieve the jokes
    function getJoke() {
      var limit = 1; // Default value: 1 joke
      var apiKey = ; // Replace with your API Ninjas API key
      var apiUrl = `https://api.api-ninjas.com/v1/jokes?limit=${limit}`; //apiUrl will be available on API Ninjas website
  
      fetch(apiUrl, {
        headers: {
          'X-Api-Key': apiKey
        }
      })
        // Convert the response to JSON format
        .then(response => response.json())
  
        // Extract the joke from the response data
        .then(data => {
          if (data.length > 0) 
          {
            var joke = data[0].joke;
  
            // Display the joke in the jokeContainer element
            jokeContainer.innerText = joke;
            
          } 
          
          // Display a message when no jokes are available
          else 
          {
            jokeContainer.innerText = 'No jokes found';
            
          }
        })

        // Handle any errors that occur during the fetch request
        .catch(error => {
          console.error('Error:', error);
          jokeContainer.innerText = 'Error occurred while fetching a joke';
          
        });
    }
  });
  
