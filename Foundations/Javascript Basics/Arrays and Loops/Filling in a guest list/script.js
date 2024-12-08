let fill_in_guest_list = () => {
    const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    const admitted = document.querySelector(".admitted");
    const refused = document.querySelector(".refused");
    /*
    const admitted = [];
    const refused = [];
    */
    for (const person of people) {
        if (person === "Phil" || person === "Lola") {
            // refused.push(person);
            refused.textContent += person + ", ";
        }
        else {
            // admitted.push(person);
            admitted.textContent += person + ", ";
        }
    }
    refused.textContent = refused.textContent.trim().slice(0, -1) + ".";    
    admitted.textContent = admitted.textContent.trim().slice(0, -1) + ".";    
}

fill_in_guest_list();