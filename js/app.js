
let counter = 0;
setInterval(() => {
    const percentageNumber = document.querySelector('.number');
    const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (counter !== percentageNumberValue) {
        counter++;
        percentageNumber.innerHTML = `${counter}%`;
    }
}, 50);


// open(() => {
//     window.location.href("https://www.miguelbrown.cl")
// },);
