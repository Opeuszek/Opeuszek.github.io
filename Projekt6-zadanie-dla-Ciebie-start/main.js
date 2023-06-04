const add = document.querySelector(".add");
const clean = document.querySelector(".clean");
const showAdvice = document.querySelector(".showAdvice");
const showOptions = document.querySelector(".showOptions");
const h1 = document.querySelector("h1");
const advice = [];
const possibilites = [];

const input = document.querySelector("input");

const added = (e) => {
    e.preventDefault();

    let advices = input.value;
    if (advices.length) {
        for (let name of advice) {
            if (name === advices) {
                alert("Juz jest dodana taka sama wartość");
                input.value = "";
                return;
            }
        }
        advice.push(advices);
        possibilites.push(advices);
        alert(`Dodałeś ${advices}.`);
    }
    input.value = "";
};

const clear = (e) => {
    e.preventDefault();
    advice.splice(0, advice.length);
    possibilites.splice(0, possibilites.length);
    h1.textContent = "";
};

const show = (e) => {
    e.preventDefault();
    const number = Math.floor(Math.random() * advice.length);
    h1.textContent = advice[number];
};

const options = (e) => {
    e.preventDefault();
    let text = "";
    if (possibilites.length) {
        possibilites.forEach((poss) => {
            text += poss + " ";
        });
        alert(`Możliwe opcje to: ${text.replace(" ", " - - - ")}`);
    } else if (!possibilites.length) {
        alert("Brak możliwości");
    }
};
add.addEventListener("click", added);

clean.addEventListener("click", clear);

showAdvice.addEventListener("click", show);

showOptions.addEventListener("click", options);
