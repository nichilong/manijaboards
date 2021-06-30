const card = document.querySelector('.card');
const container = document.querySelector('.container');
const retrofuture = document.querySelector('.retrofuture');
const retrofuturebg = document.querySelector('.retrofuturebg');
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circle3');
const circle4 = document.querySelector('.circle4');

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25 ;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    retrofuturebg.style.transform = "translateZ(20px)";
    retrofuture.style.transform = "translateZ(250px)rotateZ(90deg)";
    circle1.style.transform = "translateZ(150px)";
    circle2.style.transform = "translateZ(180px)";
    circle3.style.transform = "translateZ(200px)";
    circle4.style.transform = "translateZ(210px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    retrofuturebg.style.transform = "translateZ(0px)";
    retrofuture.style.transform = "translateZ(0px) rotateZ(138deg)";
    circle1.style.transform = "translateZ(0px)";
    circle2.style.transform = "translateZ(0px)";
    circle3.style.transform = "translateZ(0px)";
    circle4.style.transform = "translateZ(0px)";
      });

      
const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".navchange");
const landing = document.querySelector ("landing")
const sectionOneOptions = {
    rootMargin:"0px 0px -500px 0px"
};  
    const sectionOneObserver = new IntersectionObserver 
    (function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                nav.classList.add("nav-scrolled");
            } else {
                nav.classList.remove("nav-scrolled");
            }
        });
    },
sectionOneOptions);
sectionOneObserver.observe(sectionOne);
function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "abierto") {
      x.className += " cerrado";
    } else {
      x.className = "abierto";
    }
  };
  function togel() {
    var x = document.getElementById("nav");
    if (x.className === "abierto") {
      x.className += " abierto";
    } else {
      x.className = "abierto";
    }
  }
  
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}
 
/*   <script>
  $(window).on('resize', function() {
     var win = $(this);
     if (win.width() < 600) {
     
         $('#change').addClass('media');
         $('#change').removeClass('navchange');
         
         } else {
         $('#change').removeClass('media');
         $('#change').addClass('navchange');

         }
});
</script> */

