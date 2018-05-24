$(document).ready(function(){
    $('.slider').slider();
    $('.parallax').parallax();
    $(".button-collapse").sideNav();
  });

var options = [
  {selector: '.who-we-help-fade', offset: 0, callback: 'Materialize.fadeInImage(".who-we-help-fade")' },
  {selector: '.clients-fade', offset: 0, callback: 'Materialize.fadeInImage(".clients-fade")' }
];

Materialize.scrollFire(options);  