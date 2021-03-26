document.getElementById('change-theme-btn').addEventListener('click', function () {
  let darkThemeEnabled = document.body.classList.toggle('dark-theme');
  localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});

// Ooooh I love that you are using local storage to persist some application state!
// Very cool.
if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
  document.body.classList.add('dark-theme');
}

/* select option */

// Try to stick to consistent use of white space. It will make your code easier to read!
// You could try formatting with the Prettier VS Code extension?

  let project = document.getElementById("mySelect")
  //document.getElementById("select").innerHTML = "You selected: " + project;
  project.addEventListener('change', ()=>{
    console.log(project.value) // remove console logs!
    if(project.value !== "all-project"){
  document.getElementById("select").textContent = 'You selected: '}
 else{
  document.getElementById("select").textContent = ''
 }
    // It seems like a lot of things other than just your project description have the .app class
    // Could you write a selector that only grabs the relevent DOM nodes?
  document.querySelectorAll(".app").forEach(app =>{
    console.log("app") // remove this!
    console.log(app) // ... and this
    if(project.value === 'all-project'){
   app.classList.remove("invisible")
   app.classList.remove("visible")
    } else if(project.value === app.classList[1]){ // This could break easily! Try not to rely on the precise order of class names in classList.
      console.log("we are here")
      app.classList.remove("invisible")
      app.classList.add("visible")
    
    }else{
      app.classList.remove("visible")
      app.classList.add("invisible")
    }
  })
  
  })
