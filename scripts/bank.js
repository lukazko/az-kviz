let id;
let timer;
let win;
let countStop = 0;
let cashmachine = document.createElement("audio");
let select = document.createElement("audio");

// Zvuk odkrytí výhry
$(document).ready(function() {   
    cashmachine.src = "sound/cashmachine.mp3";
    cashmachine.volume = 0.5;
    cashmachine.autoPlay = false;
    cashmachine.preLoad = true;
    cashmachine.controls = true;
    cashmachine.currentTime = 0.5;

    select.src = "sound/select.mp3";
    select.volume = 0.5;
    select.autoPlay = false;
    select.preLoad = true;
    select.controls = true;
    select.currentTime = 0;
});

function start() {
   
    if (countStop == 3) {
        return;
    }

    select.play();

    $('.hexa').removeClass('blank2');
    $('#' + (id - 1)).removeClass('blank');
    $('.question').text('Zastav bankomat na libovolném poli zmáčknutím stop.');
    id = 1;
    timer = setInterval(function () {

        if ($('#' + id).hasClass('blank')) {
            $('.hexa').removeClass('blank2');
            $('#' + id).addClass('blank2');
        }

        if (id === 19) {
            id = 1; 
        }
        else {
            id++;
        }
    }, 500);

}

function stop() {

    if (countStop == 3) {
        return;
    }
    
    countStop++;
    cashmachine.play();
    cashmachine.currentTime = 0.5;

    switch (id) {
        case 1:
            win = 'Voňavý stromeček Mironet';
            break;
        case 2:
            win = '1 porci domácí cukrové vaty';
            break;
        case 3:
            win = 'Prague Economic Papers 2/2017';
            break;
        case 4:
            win = 'Respirátor FFP2';
            break;
        case 5:
            win = 'Balíček kondomů';
            break;
        case 6:
            win = 'Psí vakcínu';
            break;
        case 7:
            win = 'Bluetooth sluchátka';
            break;
        case 8:
            win = 'Politická ekonomie 3/2015';
            break;
        case 9:
            win = 'Playmobil postavičku';
            break;
        case 10:
            win = '1 porci domácí cukrové vaty';
            break;
        case 11:
            win = '1 porci domácí cukrové vaty';
            break;
        case 12:
            win = 'Nafukovacího jednorožce';
            break;
        case 13:
            win = 'Psí pamlsky';
            break;
        case 14:
            win = 'Voňavý stromeček Mironet';
            break;
        case 15:
            win = '1 porci domácí cukrové vaty';
            break;
        case 16:
            win = 'Playmobil postavičku';
            break;
        case 17:
            win = 'Balíček kondomů';
            break;
        case 18:
            win = 'Voňavý stromeček Mironet';
            break;
        case 19:
            win = '1 porci domácí cukrové vaty';
            break;
    }

    $('#' + (id - 1)).removeClass('blank blank2');

    if (countStop == 1) {
        $('.st-win').text(win);
    }
    else if (countStop == 2) {
        $('.nd-win').text(win);
    }
    else {
        $('.rd-win').text(win);
        $('.question').text('Gratulujeme k výhře!');
        clearInterval(timer);
    }

}