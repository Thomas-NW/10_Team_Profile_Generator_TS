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

  // The code below is the more elgant way to create the html file. 
  // Below is a code the requires splitting the html in top and bottom part and concatenate it with the "result" of the inquirer.

  var fullHtml = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
   <meta name="robots" content="noindex">

  <!-- robots and noindex tells the browser that the page should not be found via search engines -->
  <!--rel attribute defines the relationship that the linked resource has to the document from which it’s referenced. In most cases, this resource will simply be “stylesheet“, which means, not surprisingly, “the referenced document is a style sheet.” -->
  <!-- <link rel="stylesheet" href="./assets/css/reset.css" /> -->
  <!-- <link rel="stylesheet" type="text/css" media="screen" href="./assets/css/stylesheet.css"> -->

  <title>Team Profile Generator</title>
</head>
<body>
  <header class="sticky-top bg-primary py-3 text-center m-3">
    <h1 class='text-light'>Team Library</h1>
  </header>
  <main class="m-3">

      ${result}

  </main>


  <script src="../src/script.js"></script>

</body>
</html>
`

        // This code  requires splitting the html in top and bottom part and concatenate it with the "result" of the inquirer.
        // I kep this code here, since this was the first working code.

        // var top = `<!DOCTYPE html>
        // <html lang="en">

        // <head>
        //   <meta charset="UTF-8">
        //   <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //   <meta name="viewport" content="width=device-width, initial-scale=1.0">

        //   <!-- robots and noindex tells the browser that the page should not be found via search engines -->
        //   <meta name="robots" content="noindex">

        //   <!--rel attribute defines the relationship that the linked resource has to the document from which it’s referenced. In most cases, this resource will simply be “stylesheet“, which means, not surprisingly, “the referenced document is a style sheet.” -->
        //   <!-- <link rel="stylesheet" href="./assets/css/reset.css" /> -->
        //   <link rel="stylesheet" type="text/css" media="screen" href="./assets/css/stylesheet.css">
        //   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        //     integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        //   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        //     integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        //   <title>Team Profile Generator</title>
        // </head>
        // <body>
        //   <header class="jumbotron sticky-top bg-secondary py-3 text-center mb-2">
        //     <h1 class='text-light'>Team Profile Library</h1>
        //   </header>
        //   <main>
        // `

        // var buttom = `
        // </main class="m-3">


        // <script src="script.js"></script>

        // </body>

        // </html>
        // `
        // The expression below is required to run the code above
        // var fullHtml = top + result + buttom;
        // return fullHtml;

  // This return calls var fullHtml to call the result object to be displayed.  
  return fullHtml;

}



const genManager = manager => {

  return `  
  <div class="card border-primary mt-2" style="width: 18rem; display: inline-block">
    <div class="card-header text-white bg-primary">
      <h2 class="text-*-left; text-uppercase">${manager.name}</h2>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> Manager</li>
      <li class="list-group-item"> ID: ${manager.id}</li>
      <li class="list-group-item"> Email: <a href="mailto:${manager.email}"> ${manager.email}</a></li>
      <li class="list-group-item"> Phone: ${manager.officeNumber}</li>
    </ul>
  </div>
  `
}

const genEngineer = engineer => {

  return `  
  <div class="card border-primary mt-2" style="width: 18rem; display: inline-block">
    <div class="card-header text-white bg-success">
      <h2 class="text-*-left; text-uppercase">${engineer.name}</h2>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Engineer</li>
      <li class="list-group-item"> ID: ${engineer.id}</li>
      <li class="list-group-item"> Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></li>
      <li class="list-group-item"> gitHub: ${engineer.github}</li>
    </ul>
  </div>
  `
}

const genIntern = intern => {

  return `
  <div class="card border-primary mt-2" style="width: 18rem; display: inline-block">
    <div class="card-header text-white bg-warning">
      <h2 class="text-*-left; text-uppercase">${intern.name}</h2>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Intern</li>
      <li class="list-group-item"> ID: ${intern.id}</li>
      <li class="list-group-item"> Email: <a href="mailto:${intern.email}"> ${intern.email}</a></li>
      <li class="list-group-item"> School: ${intern.school}</li>
    </ul>
  </div>
  `
}


module.exports = genHtml

