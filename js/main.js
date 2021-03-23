document.getElementById('change-theme-btn').addEventListener('click', function () {
  let darkThemeEnabled = document.body.classList.toggle('dark-theme');
  localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});

if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
  document.body.classList.add('dark-theme');
}

/* select option */

  let project = document.getElementById("mySelect")
  //document.getElementById("select").innerHTML = "You selected: " + project;
  project.addEventListener('change', ()=>{
    console.log(project.value)
    if(project.value !== "all-project"){
  document.getElementById("select").textContent = 'You selected: '}
 else{
  document.getElementById("select").textContent = ''
 }
  document.querySelectorAll(".app").forEach(app =>{
    console.log("app")
    console.log(app)
    if(project.value === 'all-project'){
   app.classList.remove("invisible")
   app.classList.remove("visible")
    } else if(project.value === app.classList[1]){
      console.log("we are here")
      app.classList.remove("invisible")
      app.classList.add("visible")
    
    }else{
      app.classList.remove("visible")
      app.classList.add("invisible")
    }
  })
  
  })
