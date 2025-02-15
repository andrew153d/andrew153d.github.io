//index.js

const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});

document.getElementById('download-btn').addEventListener('click', function () {
    const resumeURL = 'https://raw.githubusercontent.com/andrew153d/andrew153d.github.io/main/Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = 'resume.pdf';
    link.click();
});


document.getElementById('scroll-btn').addEventListener('click', function () {
    const gallery = document.querySelector('.portfolio-gallery');
    gallery.scrollBy({ left: 350, behavior: 'smooth' });
});