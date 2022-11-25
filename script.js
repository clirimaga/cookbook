const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

const alert1 = function() {
    alert('Visit us on www.Cookbook.com')
};

const alert2 = function() {
    alert('Call us: +49 176 1234567')
}
btn1.addEventListener('click', alert1)
btn2.addEventListener('click', alert2)


function myFunction() {
    window.print();
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });