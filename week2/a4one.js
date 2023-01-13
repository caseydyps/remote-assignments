const btnUpdate = document.querySelector('.banner');
btnUpdate.addEventListener('click', () => { //show wording when click welcome banner
    const headline = document.getElementById('headline');
    headline.textContent = "Have a Good Time!";
    console.log("you clicked");
});