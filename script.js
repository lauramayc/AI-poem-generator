function displayPoem(response) {
  response.data.answer;

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-input");

  let ApiKey = "a6ee8503c8fee7b4f4c3ocbtac96961d";
  let prompt = "Write a poem about " + instructionInput.value;
  let context =
    "You are a poet. Write a poem based on the user's input. use htlm and use </br> for new lines in the poem and for a new verse use <p>";
  let ApiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${ApiKey}`;

  axios.get(ApiURL).then(displayPoem);
  let load = document.querySelector("#poem");
  load.innerHTML = `Making a poem about ${instructionInput.value}... <div class="loader"></div>`;

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
