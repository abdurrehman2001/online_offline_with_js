//   jese hi net connect milega forn msg show ho jaega

var target = document.querySelector('#box');

window.addEventListener('offline', () => {
    target.innerHTML = "You're Offline";
    target.style.backgroundColor = "red";
});
window.addEventListener('online', () => {
    target.innerHTML = "You're Online";
    target.style.backgroundColor = "lightgreen";
});

//  ye condition hai bs ye check krne k liye k user on h k off ye return true ya false krta hai 

// if(navigator.onLine){

// }
// navigator.onLine ? window.addEventListener('offline', () => {
//     target.innerHTML = "You're Offline";
//     target.style.backgroundColor = "red";
// }) : window.addEventListener('online', () => {
//     target.innerHTML = "You're Online";
//     target.style.backgroundColor = "lightgreen";
// });

// 