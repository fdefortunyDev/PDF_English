const year = new Date().getFullYear();

const copyrights = document.getElementsByClassName("copyright");
for (let i = 0; i < copyrights.length; i++) {
    copyrights[i].innerHTML = `© PDF English. Copyrigth ${year} All Rights Reserved.`;
}

const yearElements = document.getElementsByClassName("addYear");
for (let i = 0; i < yearElements.length; i++) {
    yearElements[i].innerHTML += ` ${year}`;
}

const lastYearElements = document.getElementsByClassName("addLastYear");
for (let i = 0; i < lastYearElements.length; i++) {
    lastYearElements[i].innerHTML += ` ${year - 1}.`;
}