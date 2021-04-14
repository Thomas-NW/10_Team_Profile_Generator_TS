const genHtml = team => {
  var result = "";

  for (let i = 0; i < team.length; i++) {
    const element = team[i];

    console.log("element", element);

    if (element.getRole() === "manager") {
      result += genManager(element)
    }

    if (element.getRole() === "engineer") {
      result += genEngineer(element)
    }

    if (element.getRole() === "intern") {
      result += genIntern(element)
    }
  }
  return result;
}



const genManager = manager => {

  return `  
    <div class="card border border-primary" style="width: 18rem; display: inline-block">
      <div class="card-header bg-primary ">
        <h1 class="text-center text-dark text-uppercase">${manager.name}</h1>
      </div>   
      <div class="bg-light">   
        <p class="text-dark"><i class="fas fa-crosshairs"" style="margin-right: 0.5vw;"></i>Manager</p>
        <p class="text-dark">Role: IN TESTING</p>
        <p class="text-dark">ID: ${manager.id}</p>
        <p class="text-dark">Email: <a href="mailto:${manager.email}">${manager.email}</p>
        <p class="text-dark">Phone: ${manager.officeNumber}</p>
      </div>
    </div>
  `
}

const genEngineer = engineer => {

    return `
    <div class="card border border-primary" style="width: 18rem; display: inline-block">
    <div class="card-header text-dark bg-primary ">
      <h1 class="text-center text-uppercase">${engineer.name}</h1>
    </div>   
    <div class="bg-light">   
      <p class="text-dark"><i class="fab fa-wpbeginner" style="margin-right: 0.5vw;"></i>Egnineer</p>
      <p class="text-dark">Role: IN TESTING</p>
      <p class="text-dark">ID: ${engineer.id}</p>
      <p class="text-dark">Email: <a href="mailto:${engineer.email}">${engineer.email}</p>
      <p class="text-dark">gitHub: ${engineer.github}</p>
    </div>
  </div>
  `
}
const genIntern = intern => {

    return `
    <div class="card border border-primary" style="width: 18rem; display: inline-block">
    <div class="card-header bg-primary ">
      <h1 class="text-center text-dark text-uppercase">${intern.name}</h1>
    </div>   
    <div class="bg-light">   
      <p class="text-dark"><i class="fas fa-american-sign-language-interpreting" style="margin-right: 0.5vw;"></i>Intern</p>
      <p class="text-dark">Role: IN TESTING</p>
      <p class="text-dark">ID: ${intern.id}</p>
      <p class="text-dark">Email: <a href="mailto:${intern.email}">${intern.email}</p>
      <p class="text-dark">School: ${intern.school}</p>
    </div>
  </div>

  `
}

module.exports = genHtml

