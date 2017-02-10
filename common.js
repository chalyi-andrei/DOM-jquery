//Анимация по клику
$('.j-button1').on('click', function(){
    $('.main__img1').animate({width: '+=100'})
        .animate({margin: '+=100'})
        .animate({opacity: '0.5'}, {queue: false})
        .animate({opacity: '1'})
        .animate({width: '-=100'}); // queue - паралельное выполнение
});


// Манипуляция с DOM
//1. Создание/удаление
var $counter = 0;
$('.j-button2').on('click', function(){
    $counter++;
    $myDiv = $('<input class="test">'); // создать новый элемент
    $myDiv.attr('placeholder' ,$counter);
    $('.main').append($myDiv);
});

$('.j-button3').on('click', function(){
    var $myDiv = $('.test'); // удалить последний элемент
    $myDiv.last().remove();
});

$('.j-button4').on('click', function(){
    var $number = $('.main__delete').val();
    var $myDiv = $('.test'); // удалить произвольный элемент
    $myDiv.eq($number - 1).remove();
});