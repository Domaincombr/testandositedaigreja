const btsabe = document.querySelectorAll(".btsabe");
const txtevents = document.querySelectorAll(".txtevents");

btsabe.forEach((button, index) => {
    button.addEventListener("click", function() {
        txtevents[index].classList.toggle("txteventsmaior");
    });
});
