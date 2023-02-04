window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden")
    loader.addEventListener("transitonend", () => {
        document.body.removeChild("loader");
    })
})
