const callBtn = document.querySelector('.footer-inner');


callBtn.addEventListener('click', () => { //show hidden box
    const showBox = document.querySelector('#hiddenbox');
    showBox.style.display=('flex');
    console.log("show the box");
});
