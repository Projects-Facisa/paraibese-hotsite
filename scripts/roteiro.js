document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.timeline-details a');
  
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSpan = document.getElementById(targetId);
  
        if (targetSpan && targetSpan.classList.contains('roteiro-place')) {

          targetSpan.classList.remove('brilhar');

          void targetSpan.offsetWidth;
  
          targetSpan.classList.add('brilhar');

          const targetPosition = targetSpan.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = targetPosition - (window.innerHeight / 2) + (targetSpan.offsetHeight / 2);
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  