const show_api = async (api_url) => {
  const card = document.querySelector(".card-wrap");

  await fetch(api_url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (let x in data) {
        card.insertAdjacentHTML(
          "beforeend",
          `<div class="card-item">
            <div class="id">
              <p>User Id: ${data[x].userId}</p>
              <p>Id: ${data[x].id}</p>
            </div>
            <h2>Title: ${data[x].title}</h2>
            <p>Body: ${data[x].body}</p>
        </div>`
        );
      }
    })
    .catch((error) => {
      document.write("No Data Available.");
      console.log(error);
    });
};

show_api("https://jsonplaceholder.typicode.com/posts");
