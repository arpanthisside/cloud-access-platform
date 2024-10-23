
  document.addEventListener('scroll', function() {
    var fadeInSections = document.querySelectorAll('.cloud-edu');

    fadeInSections.forEach(function(section) {
      var sectionPosition = section.getBoundingClientRect().top;
      var screenPosition = window.innerHeight / 2;

      if (sectionPosition < screenPosition) {
        section.classList.add('fade-in');
      }
    });
  });

  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}