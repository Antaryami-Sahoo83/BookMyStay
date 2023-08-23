function handleSignOut() {
  const pDiv = document.getElementById("parentDiv");
  if (JSON.parse(localStorage.getItem("token"))) {
    localStorage.removeItem("token");
    localStorage.removeItem("obj");
    window.location.href = "./src/signin/signin.html";
  }
}
