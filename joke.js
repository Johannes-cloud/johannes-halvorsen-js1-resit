const jokeUrl = "https://api.noroff.dev/api/v1/jokes/";

const getJokeId = () => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get("id");
};

const fetchJoke = async (id) => {
  const response = await fetch(jokeUrl + id, {
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
};

const displayJoke = async (id) => {
  const joke = await fetchJoke(id);
  const jokeContainer = document.getElementById("joke");
  jokeContainer.innerHTML = `
    <p>Type: ${joke.type}</p>
    <h2>${joke.setup}</h2>
    <h2 id="punchline" style="display: none;">${joke.punchline}</h2>
    `;

  const revealButton = document.getElementById("reveal-button");
  revealButton.addEventListener("click", () => {
    const punchline = document.getElementById("punchline");
    punchline.style.display = "block";
  });
};

const jokeId = getJokeId();
displayJoke(jokeId);
