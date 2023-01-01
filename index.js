const jokesUrl = "https://api.noroff.dev/api/v1/jokes";

const fetchJokes = async (type) => {
  try {
    let url = type ? `${jokesUrl}?type=${type}` : jokesUrl;
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const displayJokes = async (type) => {
  try {
    const jokes = await fetchJokes(type);
    const jokesContainer = document.getElementById("jokes");
    console.log(jokes);
    jokesContainer.innerHTML = "";
    jokes.forEach((joke) => {
      const jokeContainer = document.createElement("div");
      jokeContainer.innerHTML = `
        <p>Type: ${joke.type}</p>
        <h2>${joke.setup}</h2>
        <a href="joke.html?id=${joke.id}">View punchline</a>
      `;
      jokesContainer.appendChild(jokeContainer);
    });
  } catch (error) {
    console.error(error);
  }
};

const generalButton = document.getElementById("general-button");
generalButton.addEventListener("click", () => displayJokes("general"));

const programmingButton = document.getElementById("programming-button");
programmingButton.addEventListener("click", () => displayJokes("programming"));

displayJokes();
