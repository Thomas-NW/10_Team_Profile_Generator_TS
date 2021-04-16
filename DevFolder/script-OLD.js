const genHtml = team => {
  var result = "";
  var team = [];
  var cards = [];

  for (let i = 0; i < team.length; i++) {

    if (team[i].getRole() === "manager") {
      cards.push(`  
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
      )
    }
    else if (team[i].getRole() === "egnineer") {
      cards.push(`
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
      )
    }

    else if (element.getRole() === "intern") {
      cards.push(`
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
      )
    }
  }
// }


var html = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">

  <link rel="stylesheet" type="text/css" media="screen" href="./assets/css/stylesheet.css">


  <title>Team Profile Generator</title>
</head>

<body>

<header>
  <h1>Team Profile Library</h1>
</header>

  <main id="content">

${cards}
  </main>


  <script src="script.js"></script>
  
  </body>
  
  </html>


`

}

module.exports = html