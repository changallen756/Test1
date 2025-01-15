const p1=document.querySelector('.sideBtn');
function back1(){
    if (!(p1.classList.contains('show'))){
        p1.classList.toggle('show');
    }
}
function back2(){
    if (p1.classList.contains('show')) {
        p1.classList.toggle('show');
     }
}
     