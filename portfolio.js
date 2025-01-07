// agregamos el DOMContentLoaded para que el script ese ejecute una vez el contenido del DOM este disponible
document.addEventListener("DOMContentLoaded", (event) => {
  const toggleButton = document.getElementById("toggle-projects");
  const projectList = document.getElementById("project-list");

  function toggleProjects() {
    if (
      projectList.style.display === "none" ||
      projectList.style.display === ""
    ) {
      projectList.style.display = "block";
    } else {
      projectList.style.display = "none";
    }
  }

  toggleButton.addEventListener("click", toggleProjects);
});

// document.addEventListener('DOMContentLoaded', (event) => {
//     const augmentSkills = document.getElementById('augment-skills');
//     const skillsList = document.getElementById('skills-list');

//     function aumentSkills () {
//         if (skillsList.style.fontSize === '48px') {
//             skillsList.style.fontSize = '72px';
//         } else {
//             skillsList.style.fontSize = '48px';
//         }
//     }
//     augmentSkills.addEventListener('click', aumentSkills);
// });

document.addEventListener("DOMContentLoaded", (event) => {
  const skills = document.getElementsByClassName("skill");

  for (let i = 0; i < skills.length; i++) {
    // Aumentar tamaño al hacer hover
    skills[i].addEventListener("mouseover", function () {
      this.style.transform = "scale(1.4)"; // Aumenta el tamaño al 120%
      this.style.transition = "transform 0.3s"; // Suaviza la transición
    });

    // Restaurar tamaño al salir del hover
    skills[i].addEventListener("mouseout", function () {
      this.style.transform = "scale(1)"; // Vuelve al tamaño original
    });
  }
});
