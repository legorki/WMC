let serverUrl;

if (document.location.hostname === "localhost") {
  serverUrl = document.location.origin + ":8443";
} else {
  serverUrl = document.location.origin + "/api";
}

const successModalElement = document.getElementById("modalSuccess");
const failureModalElement = document.getElementById("modalFailure");

const databaseErrorModalElement = document.getElementById("modalDatabaseError");
const databaseErrorSqlElement = document.getElementById("sqlQuery");

const formElement = document.getElementById("form");
const usernameElement = formElement.elements["username"];
const passwordElement = formElement.elements["password"];
const submitElement = formElement.elements["submit"];

const flagElement = document.getElementById("flag");

formElement.addEventListener("submit", async event => {
  event.preventDefault();
  submitElement.setAttribute("disabled", "disabled");

  const credentialsObject = {username: usernameElement.value, password: passwordElement.value};
  const result = await fetch(serverUrl + "/login", {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentialsObject),
  });
  const bodyJson = await result.json();

  if (bodyJson?.sessionKey != null) {
    // Auth successful
    const flagResponse = await fetch(serverUrl + "/flag", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const flag = (await flagResponse.json()).flag;
    flagElement.innerText = flag;

    successModalElement.style.display = "block";
  } else if (bodyJson?.message != null && bodyJson?.message !== "Invalid credentials") {
    // Auth failed due to malformed SQL query
    databaseErrorSqlElement.innerText = bodyJson.message;
    databaseErrorModalElement.style.display = "block";
  } else {
    // Auth failed
    failureModalElement.style.display = "block";
  }

  submitElement.removeAttribute("disabled");
});