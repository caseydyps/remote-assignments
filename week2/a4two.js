const menuShow = document.querySelector('.menubar');
const mobilenav = document.querySelector('.mobile_nav');

menuShow.addEventListener('click', () => { //show sidebar
    mobilenav.style.display=('block');
    console.log("you clicked menubar");
    const exit = document.querySelector('button');//exit sidebar
    exit.addEventListener('click', () => {
        mobilenav.style.display=('none');
    });

});
