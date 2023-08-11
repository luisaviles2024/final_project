// const image = document.getElementById("clickableImage");

// image.addEventListener("click", function() {
//   window.location.href = "https://www.houstonchronicle.com/news/houston-texas/education/article/hisd-walkout-protest-takeover-17880084.php";
// });

const image = document.getElementById("clickableImage");

image.addEventListener("click", function() {
  window.open("https://www.houstonchronicle.com/news/houston-texas/education/article/hisd-walkout-protest-takeover-17880084.php", "_blank");
});


document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });
 
  
  
  
  
  
  