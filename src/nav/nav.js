import './nav.css'

// Instantiates the Navbar for each page
const navContainer = document.getElementById('nav-flex');

const disabledLink = `<div class="nav-link disabled"><i class="bi bi-dot"></i></div>`;
const activeLink = (href, biClass, text) => `<a href="${href}" class="nav-link"><i class="bi ${biClass}"></i><span>${text}</span></a>`

navContainer.innerHTML = `
    <nav>
        ${window.location.pathname === '/' ? disabledLink : activeLink('/', 'bi-house-fill', 'Home')}
        ${window.location.pathname === '/resume' ? disabledLink : activeLink('/resume', 'bi-briefcase-fill', 'Resume')}
        ${window.location.pathname === '/projects' ? disabledLink : activeLink('/projects', 'bi-lightbulb-fill', 'Projects')}
        ${window.location.pathname === '/skills' ? disabledLink : activeLink('/skills', 'bi-check2-circle', 'Skills')}
        ${window.location.pathname === '/about' ? disabledLink : activeLink('/about', 'bi-person-fill', 'About')}
    </nav>
`