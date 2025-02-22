document.addEventListener('DOMContentLoaded', () => {
  const eventsGrid = document.querySelector('.events-grid');
  const sampleEvents = [
    { sport: 'Clipsexx Việt Nam', teams: 'Lakers vs Celtics', time: 'Live', link: 'https://campusmanagement.com/clipsexx-viet-nam/' },
    { sport: 'Phim Sex Việt Nam Mới', teams: 'Lakers vs Celtics', time: 'Live', link: 'https://campusmanagement.com/phim-sex-viet-nam-moi/' },
	{ sport: 'Phim Sex Việt Nam Không Che', teams: 'Lakers vs Celtics', time: 'Live', link: 'https://campusmanagement.com/phim-sex-viet-nam-khong-che/' },
	
  ];

  function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <h3>${event.sport}</h3>
      <div class="live-indicator">
        ${event.time === 'Live' 
            ? `<a href="${event.link}" class="live-link"><span class="live-dot"></span> LIVE</a>` 
            : event.time}
      </div>
    `;
    return card;
  }

  sampleEvents.forEach(event => {
    eventsGrid.appendChild(createEventCard(event));
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Header scroll animation
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  });

  // Hover effect for plan cards
  document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const searchBar = document.getElementById('search-bar');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  searchBar.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const events = document.querySelectorAll('.event-card');

    events.forEach(event => {
      const eventText = event.textContent.toLowerCase();
      if (eventText.includes(query)) {
        event.style.display = 'block';
      } else {
        event.style.display = 'none';
      }
    });
  });
});
