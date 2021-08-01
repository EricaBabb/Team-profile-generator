const generateHtml = team => {
  
  let template = ""
  for (let i = 0; i < team.length; i++){
    if (team[i].getRole() === 'Manager') {
       template += generateManager(team[i])
  }
    else if (team[i].getRole() === 'Engineer'){
      template += generateEngineer(team[i])
    }
    else {
      template += generateIntern(team[i])
    }
  }
  return template
}

const generateManager = manager => {
          return `
  <div class="container">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <ul class="card-text">
          <li>${manager.id}</li>
          <li>${manager.email}</li>
          <li>${manager.officeNumber}</li>
      </ul>
  </div>
</div>`
}
const generateEngineer = engineer => {
          return `
  <div class="container">
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <ul class="card-text">
          <li>${engineer.id}</li>
          <li>${engineer.email}</li>
          <li>${engineer.github}</li>
      </ul>
  </div>
</div>`
}
const generateIntern = intern => {
          return `
  <div class="container">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <ul class="card-text">
          <li>${intern.id}</li>
          <li>${intern.email}</li>
          <li>${intern.school}</li>
      </ul>
  </div>
</div>`
}

//           ${profilesArr
//             .filter(({ intern }) => intern)
//             .map(({ name, id, email, school}) => {
//                 return `
//         <div class="container">
//           <div class="card-body">
//             <h5 class="card-title">${name}</h5>
//             <ul class="card-text">
//                 <li>${id}</li>
//                 <li>${email}</li>
//                 <li>${school}</li>
//             </ul>
//         </div>
//     </div>`;
//               })}
      
//     `;
//   };

  
module.exports = team => {
  return ` <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row"></div>
              <div class="team-area col-12 d-flex justify-content-center">
${generateHtml(team)}
</div>
        </div>
    </div>
</body>
</html>`
}