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
    // Link to the resume file in your repository (raw content)
    const resumeURL = 'https://github.com/andrew153d/Resume/blob/main/Resume.pdf';

    const link = document.createElement('a');
    link.href = resumeURL; // Directly link to the raw file hosted in your repository
    link.download = 'resume.pdf'; // The name of the file when downloaded
    link.click(); // Trigger the download
  });
