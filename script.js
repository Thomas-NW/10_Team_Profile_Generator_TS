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
    <container class="controw">
    <section class="colayout">
      <div class="background">
      <h1 class="headh1" >Name ${manager.name}</h1>
      </div>
      <div >
        <p class="par1">Role: ${manager.role}</p>
        <p class="par1">ID: ${manager.id}</p>
        <p class="par1">Email: ${manager.email}</p>
        <p class="par1">Office Phone: ${manager.officeNumber}</p>
      </div>
    </section>
  </container>
`
}

const genEngineer = engineer => {

    return ` 
    <container class="controw">
    <section class="colayout">
      <div class="background">
      <h1 class="headh1" >Name ${engineer.name}</h1>
      </div>
      <div >
        <p class="par1">Role: ${engineer.role}</p>
        <p class="par1">ID: ${engineer.id}</p>
        <p class="par1">Email: ${engineer.email}</p>
        <p class="par1">gitHub: ${engineer.github}</p>
      </div>
    </section>
  </container>
 `
}
const genIntern = intern => {

    return `
    <container class="controw">
    <section class="colayout">
      <div class="background">
      <h1 class="headh1" >Name ${intern.name}</h1>
      </div>
      <div >
        <p class="par1">Role: ${intern.role}</p>
        <p class="par1">ID: ${intern.id}</p>
        <p class="par1">Email: ${intern.email}</p>
        <p class="par1">School: ${intern.school}</p>
      </div>
    </section>
  </container>
`
}



module.exports = genHtml