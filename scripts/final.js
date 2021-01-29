let blackCounter = 0;
let timer;
let countdown = document.createElement("audio");
let correct = document.createElement("audio");
let wrong = document.createElement("audio");

$(document).ready(function () {
    // Zvuk odpočtu
    countdown.src = "sound/countdown.mp3";
    countdown.volume = 0.5;
    countdown.autoPlay = false;
    countdown.preLoad = true;
    countdown.controls = true;
    countdown.currentTime = 0.5;

    // Zvuk správné odpovědi
    correct.src = "sound/correct.mp3";
    correct.volume = 0.2;
    correct.autoPlay = false;
    correct.preLoad = true;
    correct.controls = true;
    correct.currentTime = 0.9;

    // Zvuk špatné odpovědi
    wrong.src = "sound/wrong.mp3";
    wrong.volume = 0.2;
    wrong.autoPlay = false;
    wrong.preLoad = true;
    wrong.controls = true;
    wrong.currentTime = 0.1;
});


// Zobrazení otázky po kliknutí na pole
function getQuestion(id) {

    if ($('.blank2').length > 0) {
        return;
    }

    wrong.pause(); // Zastavení případných zvuků z odpovědí
    countdown.play(); // Spuštění zvuku odpočtu

    // Vynulování timeru, pokud ještě nestihl dojít na 0
    $(".timer").text(30);
    clearInterval(timer);

    // Větev pro nezodpovězené otázky
    if ($('#' + id).hasClass('blank') == true) {

        $('#' + id).removeClass('blank')
        $('#' + id).addClass('blank2')
        $('.questId').text(id);
        $('.buttons').show();
        $('.initials').show();

        let timeleft = 30;
        timer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(timer);
                $(".timer").text(0);
            } else {
                $(".timer").text(timeleft);
            }

            timeleft -= 1;
        }, 1000);

        switch (id) {

            case 1:
                $('.initials').html('<p>A</p>'); //Albion
                $('.question').text('Jaký je starořecký název pro britské ostrovy, jenž je dnes používán zejména jako básnický výraz pro Anglii?');
                break;

            case 2:
                $('.initials').html('<p>B</p>'); //Botticelli
                $('.question').text('Jaké je příjmení slavného italského renesančního malíře mimo jiného autora obrazu Primavera?');
                break;

            case 3:
                $('.initials').html('<p>C</p>'); //
                $('.question').text('?');
                break;

            case 4:
                $('.initials').html('<p>Č</p>'); //
                $('.question').text('?');
                break;

            case 5:
                $('.initials').html('<p>D</p>'); //Demagog
                $('.question').text('Jak se jmenuje český nezávislý factcheckingový projekt, který se zaměřuje na ověřování faktických tvrzení českých politiků?');
                break;

            case 6:
                $('.initials').html('<p>E</p>'); //Echinacea
                $('.question').text('Jaké je latinské rodové jméno byliny v češtině známé jako Třepatka nachová?');
                break;

            case 7:
                $('.initials').html('<p>F</p>'); //fujara
                $('.question').text('Je to slovenský lidový dřevěný dechový hudební nástroj. Jde o obdobu gotické basové trojdírkové píšťaly, které byly velmi známé a hojně rozšířeny v Evropě ve 12. až 13. století. Jak se nazývá??');
                break;

            case 8:
                $('.initials').html('<p>G</p>'); //
                $('.question').text('?');
                break;

            case 9:
                $('.initials').html('<p>H</p>'); //
                $('.question').text('?');
                break;

            case 10:
                $('.initials').html('<p>Ch</p>'); //
                $('.question').text('?');
                break;

            case 11:
                $('.initials').html('<p>I</p>'); //
                $('.question').text('?');
                break;

            case 12:
                $('.initials').html('<p>J</p>'); //
                $('.question').text('?');
                break;

            case 13:
                $('.initials').html('<p>K</p>'); //Kodamové
                $('.question').text('Jak se v japonské kultuře nazývají malí duchové obývající stromy?');
                break;

            case 14:
                $('.initials').html('<p>L</p>'); //
                $('.question').text('?');
                break;

            case 15:
                $('.initials').html('<p>M</p>'); //Mormoni
                $('.question').text('Jak se nazývá americké duchovní společenství vycházející z křesťanství, založené v 19. století vyšinutým a nadrženým "prorokem" Josephem Smithem?');
                break;

            case 16:
                $('.initials').html('<p>N</p>'); //
                $('.question').text('?');
                break;

            case 17:
                $('.initials').html('<p>O</p>'); //
                $('.question').text('?');
                break;

            case 18:
                $('.initials').html('<p>PO</p>'); //puštík obecný
                $('.question').text('Jak se jmenuje noční pták běžně se vyskytující na českém území?');
                break;

            case 19:
                $('.initials').html('<p>R</p>'); //Rupie
                $('.question').text('Jak se nazývá indické státní platidlo přijímané také v Bhútánu či Nepálu?');
                break;

            case 20:
                $('.initials').html('<p>S</p>'); //
                $('.question').text('?');
                break;

            case 21:
                $('.initials').html('<p>Š</p>'); //štěrk
                $('.question').text('Jak bychom mohli přeložit německé slovo der Schotter do češtiny?');
                break;

            case 22:
                $('.initials').html('<p>T</p>'); //
                $('.question').text('?');
                break;

            case 23:
                $('.initials').html('<p>U</p>'); //
                $('.question').text('?');
                break;

            case 24:
                $('.initials').html('<p>V</p>'); //
                $('.question').text('?');
                break;

            case 25:
                $('.initials').html('<p>W</p>'); //webinář
                $('.question').text('Jak se nazývá živá forma online komunikace/výuky, která probíhá prostřednictvím internetu nejčastěji přes webový prohlížeč?');
                break;

            case 26:
                $('.initials').html('<p>Y</p>'); //
                $('.question').text('?');
                break;

            case 27:
                $('.initials').html('<p>ZU</p>'); //zakázané uvolnění
                $('.question').text('Jak se v ledním hokeji říká situaci, kdy hráč jakkoli odehraje puk z vlastní poloviny ledové plochy tak, že bez dotyku dalšího hráče přejede až za branku soupeře?');
                break;

            case 28:
                $('.initials').html('<p>Ž</p>'); //žerzej
                $('.question').text('Jaké je všeobecné označení pro lehké až středně těžké pleteniny.?');
                break;
        }
    }

    else if ($('#' + id).hasClass('black') == true) {

        $('#' + id).removeClass('black');
        $('#' + id).addClass('blank2');
        $('.questId').text(id);
        $('.buttons').show();
        $('.initials').show();

        let timeleft = 30;
        timer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(timer);
                $(".timer").text(0);
            } else {
                $(".timer").text(timeleft);
            }
            timeleft -= 1;
        }, 1000);

        $('.initials').html('<p>' + id + '</p>');

        switch (blackCounter) {

            case 0:
                $('.question').text('Populární česká hra AZ kvíz je k vidění na televizních obrazovkách od 2. ledna 1996.'); //ne 97
                break;

            case 1:
                $('.question').text('Film Pán prstenů: Návrat krále byl nominován na 10 Oscarů a všech deset nominací proměnil.'); //ne 11
                break;

            case 2:
                $('.question').text('Město Písek je rozděleno na celkem 5 katastrálních území.'); //ano
                break;

            case 3:
                $('.question').text('Youtube kanál Kluka s kamením byl založen 16. 4. 2016.'); //ano
                break;

            case 4:
                $('.question').text('Americký prezident se volí na 4leté funkční období narozdíl od např. českého, který zastává úřad 5 let.'); //ano
                break;

            case 5:
                $('.question').text('Počet nahlášených znásilnění v ČR dle dat Policie ČR od roku 2011 vytrvale stoupá.'); //ne, fluktuuje, spíše klesá
                break;

            case 6:
                $('.question').text('Právnické osoby v ČR aktuálně podléhají 20% sazbě daně z příjmu.'); //ne 19
                break;

            case 7:
                $('.question').text('Firma AT&T je druhým největším dodavatelem mobilních telefonů a největším dodavatelem pevných linek v USA.'); //ano
                break;

            case 8:
                $('.question').text('.'); //
                break;

            case 9:
                $('.question').text('.'); //
                break;

            case 10:
                $('.question').text('.'); //
                break;

            case 11:
                $('.question').text('.'); //
                break;

            case 12:
                $('.question').text('.'); //
                break;
        }
    }
}

function answer(color) {

    countdown.pause(); // Případně zastavení zvuku 
    countdown.currentTime = 0.5; // Přetočení na začátek

    // Ošetření, aby každá náhradní otázka byla jiná
    if ($('#' + $('.questId').text()).hasClass('prevBlack') == true) {
        blackCounter++;

        if (blackCounter > 12) {
            blackCounter = 0;
        }
    }

    $('#' + $('.questId').text()).removeClass("blank blank2 black");

    switch (color) {

        case 1:
            correct.play();
            correct.currentTime = 0.9;
            $('#' + $('.questId').text()).addClass("blue");
            break;

        case 2:
            correct.play();
            correct.currentTime = 0.9;
            $('#' + $('.questId').text()).addClass("orange");
            break;

        case 3:
            wrong.play();
            wrong.currentTime = 0.1;
            $('#' + $('.questId').text()).addClass("black prevBlack");
            break;

    }

    $('.buttons').hide();
    $('.initials').hide();
    $('.question').text('Zvolte další pole.');

}

