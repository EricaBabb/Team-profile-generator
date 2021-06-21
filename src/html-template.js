// const generateHtml = team => {
//     for (let i = 0; i <= teamLength; i++){
//       if (team[i].getRole === 'Manager') {
//         return ''
//     }
//       else if (team[i].getRole === 'Engineer'){
//         return console.log('engineer')
//       }
//       else {
//         return console.log('intern')
//       }
//     }
// }

const generateProjects = profilesArr => {
 
    return `
    <header>My Team</header>
    ${profilesArr
        .filter(({ manager }) => manager)
        .map(({ name, id, email, officeNumber}) => {
            return `
    <div class="container">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <ul class="card-text">
            <li>${id}</li>
            <li>${email}</li>
            <li>${officeNumber}</li>
        </ul>
    </div>
</div>`;
          })}

          ${profilesArr
            .filter(({ engineer }) => engineer)
            .map(({ name, id, email, github}) => {
                return `
        <div class="container">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <ul class="card-text">
                <li>${id}</li>
                <li>${email}</li>
                <li>${github}</li>
            </ul>
        </div>
    </div>`;
              })}

          ${profilesArr
            .filter(({ intern }) => intern)
            .map(({ name, id, email, school}) => {
                return `
        <div class="container">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <ul class="card-text">
                <li>${id}</li>
                <li>${email}</li>
                <li>${school}</li>
            </ul>
        </div>
    </div>`;
              })}
      
    `;
  };
