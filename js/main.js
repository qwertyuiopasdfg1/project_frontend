//FAQ Expansion Model
const pluse = document.querySelectorAll('.main-title');
pluse.forEach((item,i) => {

        let nextClasss = item.nextElementSibling;
        
        item.addEventListener('click',function () {
            if(nextClasss.style.display == "")
        {
            nextClasss.style.display = "block";
        }
            this.classList.toggle('active');
            let nextClass = this.nextElementSibling;
            
            if (nextClass.style.display == "block") {
                nextClass.style.display = "none";
                if(item.childNodes[1].childNodes[0].classList.value == 'fas fa-minus')
                {
                    item.childNodes[1].childNodes[0].classList.value = 'fas fa-plus'
                }
                else if(item.childNodes[1].childNodes[0].classList.value == 'fas fa-plus')
                {
                    item.childNodes[1].childNodes[0].classList.value = 'fas fa-minus'
                }
                
            } else if (nextClass.style.display == "none") {
                nextClass.style.display = "block";
                if(item.childNodes[1].childNodes[0].classList.value == 'fas fa-minus')
                {
                    item.childNodes[1].childNodes[0].classList.value = 'fas fa-plus'
                }
                else if(item.childNodes[1].childNodes[0].classList.value == 'fas fa-plus')
                {
                    item.childNodes[1].childNodes[0].classList.value = 'fas fa-minus'
                }
            }
        });
});



//Navbar link active
var coll = document.getElementsByClassName("nav-link");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


//FAQ left box visability
function spreads() {
    document.getElementById("spreads").classList.value = "";
    document.getElementById("disease").classList.value = 'hidden';
    document.getElementById("protects").classList.value = 'hidden';
    document.getElementById("symptom").classList.value = 'hidden';
    document.getElementById("outbreak").classList.value = 'hidden';
    document.getElementById("busters").classList.value = 'hidden';
  }
  function disease() {
    document.getElementById("disease").classList.value = "";
    document.getElementById("spreads").classList.value = 'hidden';
    document.getElementById("protects").classList.value = 'hidden';
    document.getElementById("symptom").classList.value = 'hidden';
    document.getElementById("outbreak").classList.value = 'hidden';
    document.getElementById("busters").classList.value = 'hidden';
  }
  function protects() {
    document.getElementById("protects").classList.value = "";
    document.getElementById("disease").classList.value = 'hidden';
    document.getElementById("spreads").classList.value = 'hidden';
    document.getElementById("symptom").classList.value = 'hidden';
    document.getElementById("outbreak").classList.value = 'hidden';
    document.getElementById("busters").classList.value = 'hidden';
  }
  function symptom() {
    document.getElementById("symptom").classList.value = "";
    document.getElementById("disease").classList.value = 'hidden';
    document.getElementById("protects").classList.value = 'hidden';
    document.getElementById("spreads").classList.value = 'hidden';
    document.getElementById("outbreak").classList.value = 'hidden';
    document.getElementById("busters").classList.value = 'hidden';
  }
  function outbreak() {
    document.getElementById("outbreak").classList.value = "";
    document.getElementById("disease").classList.value = 'hidden';
    document.getElementById("protects").classList.value = 'hidden';
    document.getElementById("symptom").classList.value = 'hidden';
    document.getElementById("spreads").classList.value = 'hidden';
    document.getElementById("busters").classList.value = 'hidden';
  }
  function busters() {
    document.getElementById("busters").classList.value = "";
    document.getElementById("disease").classList.value = 'hidden';
    document.getElementById("protects").classList.value = 'hidden';
    document.getElementById("symptom").classList.value = 'hidden';
    document.getElementById("outbreak").classList.value = 'hidden';
    document.getElementById("spreads").classList.value = 'hidden';
  }


// Back to top function
let scrollToTop = document.querySelector(".scroll-to-top")
let bodyScroll = document.querySelector("html,body")
window.addEventListener("scroll", () => {
    if (bodyScroll.scrollTop >= 100) {
        scrollToTop.style.display = "block"
        scrollToTop.addEventListener("click", () => {
            bodyScroll.scrollTo(0, 0)
        })
    } else {
        scrollToTop.style.display = "none"
    }
})

 