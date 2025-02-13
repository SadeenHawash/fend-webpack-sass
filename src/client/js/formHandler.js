function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  // Get user input from the form
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");

  // Fetch data from an external API
  fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      // Display API response in the UI
      document.getElementById("results").innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.body}</p>
        `;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById(
        "results"
      ).innerHTML = `<p style="color:red;">Error fetching data</p>`;
    });
}

export { handleSubmit };

// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     checkForName(formText)

//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8080/test')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// }

// export { handleSubmit }
