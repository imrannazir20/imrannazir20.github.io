document.getElementById('change-theme-btn').addEventListener('click', function () {
  let darkThemeEnabled = document.body.classList.toggle('dark-theme');
  localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});

if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
  document.body.classList.add('dark-theme');
}

/* select option */
function myFunction() {
  const project = document.getElementById("mySelect").value;
  document.getElementById("select").innerHTML = "You selected: " + project;
}