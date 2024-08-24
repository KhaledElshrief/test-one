
// arrow nav icon 
let arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow) => {

    arrow.addEventListener("click", (e) => {
        //selecting main parent of arrow
        let arrowParent = e.target.parentElement.parentElement.parentElement;

        arrowParent.classList.toggle("showMenu");
    });

});


// close & open menu
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");

sidebarBtn.addEventListener("click", () => {

    sidebar.classList.toggle("close");
    sidebar.classList.toggle("open");
});