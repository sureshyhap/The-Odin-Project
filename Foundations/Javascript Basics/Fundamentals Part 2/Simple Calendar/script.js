const select = document.querySelector("select");
const h1 = document.querySelector("h1");
const list = document.querySelector("ul");

function createCalendar(days, monthNameChoice) {
    list.innerHTML = "";
    h1.textContent = monthNameChoice;
    for (let i = 1; i <= days; ++i) {
        const listItem = document.createElement("li");
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

select.addEventListener("change", () => {
    const choice = +select.value;
    const MONTHS = [
        "", "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    let month = MONTHS[choice];
    let days;
    switch (choice) {
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
        case 0:
            days = 0;
            break;
        default:
            days = 31;
    }
    createCalendar(days, month);
});