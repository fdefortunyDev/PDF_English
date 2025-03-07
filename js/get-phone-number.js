fetch("https://ipinfo.io/json?token=efccb43b4ccc59")
.then((response) => response.json())
.then((data) => {
    const pais = data.country;
    const btnWpp = document.getElementsByClassName("tel");
    for (let i = 0; i < btnWpp.length; i++) {
        if (pais === "UY") {
            btnWpp[i].setAttribute("href", "https://wa.me/+59897076838");
        } else {
            btnWpp[i].setAttribute("href", "https://wa.me/+5491126943816");
        }   
    }
})
.catch((error) => {
});