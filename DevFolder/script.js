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

  <!-- robots and noindex tells the browser that the page should not be found via search engines -->
  <meta name="robots" content="noindex">

  <!--rel attribute defines the relationship that the linked resource has to the document from which it’s referenced. In most cases, this resource will simply be “stylesheet“, which means, not surprisingly, “the referenced document is a style sheet.” -->
  <!-- <link rel="stylesheet" href="./assets/css/reset.css" /> -->
  <link rel="stylesheet" type="text/css" media="screen" href="./assets/css/stylesheet.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
  <title>Team Profile Generator</title>
</head>
<body>
  <header class="jumbotron sticky-top bg-primary py-3 text-center mb-2">
    <h1 class='text-light'>Team Profile Library</h1>
  </header>
  <main>
${result}

</main>


<script src="script.js"></script>

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
//   <header class="jumbotron sticky-top bg-primary py-3 text-center mb-2">
//     <h1 class='text-light'>Team Profile Library</h1>
//   </header>
//   <main>
// `

// var buttom = `
// </main>


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

