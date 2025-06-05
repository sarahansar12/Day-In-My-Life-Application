const params = new URLSearchParams(window.location.search);
const date = params.get("date");

if (date) {
  document.getElementById("upload-date").value = date;

  const heading = document.createElement("h2");
  heading.textContent = `Uploading for: ${date}`;
  document.body.insertBefore(heading, document.body.children[1]);
}