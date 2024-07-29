// agregamos el DOMContentLoaded para que el script ese ejecute una vez el contenido del DOM este disponible
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggle-projects');
    const projectList = document.getElementById('project-list');

    function toggleProjects() {
        if (projectList.style.display === 'none' || projectList.style.display === '') {
            projectList.style.display = 'block';
        } else {
            projectList.style.display = 'none';
        }
    }

    toggleButton.addEventListener('click', toggleProjects);
});