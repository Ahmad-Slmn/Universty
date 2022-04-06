document.querySelector(".fa-bars").onclick = function () {

    document.querySelector(".links").classList.toggle("show")
}

document.querySelector(".fa-times").onclick = function () {

    document.querySelector(".links").classList.remove("show")
}
document.querySelectorAll("nav ul li a").forEach(links => {


    links.addEventListener("click", (e) => {

        document.querySelector(".links").classList.remove("show")

    })


})

window.onscroll = function () {
    // Show The Arrow-up If Window scrollY Is >= 700 
    if (window.scrollY >= 600) {

        document.querySelector(".fa-arrow-up").style.display = "block"

    } else {
        document.querySelector(".fa-arrow-up").style.display = "none"
    }
}

// Go To Top
document.querySelector(".fa-arrow-up").onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
