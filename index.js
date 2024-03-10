//console.log('funguju!');

const htmlSkill = Number(prompt("Vyplňte úroveň znalostí HTML."));
const cssSkill = Number(prompt("Vyplňte úroveň znalostí CSS."));
const JavaScriptSkill = Number(prompt("Vyplňte úroveň znalostí JavaScript."));

if (htmlSkill <= 100) {
    let updateSkill = document.querySelector("#skill1 .skill__value")
    updateSkill.textContent = `${htmlSkill}/100`
    const updateHtml = document.querySelector("#skill1 .skill__progress")
    updateHtml.style.width = `${htmlSkill}%`
} else {
    document.body.innerHTML = "Neplatná hodnota pro dovednost HTML. Zadejte prosím číslo v rozsahu 0-100."
}

if (htmlSkill <= 100) {
    let updateSkill = document.querySelector("#skill2 .skill__value")
    updateSkill.textContent = `${cssSkill}/100`
    const updateCss = document.querySelector("#skill2 .skill__progress")
    updateCss.style.width = `${cssSkill}%`
} else {
    document.body.innerHTML = "Neplatná hodnota pro dovednost CSS. Zadejte prosím číslo v rozsahu 0-100."
}

if (htmlSkill <= 100) {
    let updateSkill = document.querySelector("#skill3 .skill__value")
    updateSkill.textContent = `${JavaScriptSkill}/100`
    const updateJavaScript = document.querySelector("#skill3 .skill__progress")
    updateJavaScript.style.width = `${JavaScriptSkill}%`
} else {
    document.body.innerHTML = "Neplatná hodnota pro dovednost JavaScript. Zadejte prosím číslo v rozsahu 0-100."
}