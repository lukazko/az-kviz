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
                $('.initials').html('<p>L</p>'); //Lush
                $('.question').text('Jak se jmenuje známý britský řetězec prodávající ekologicky a eticky vyráběnou kosmetiku?');
                break;

            case 2:
                $('.initials').html('<p>M</p>'); //Minecraft
                $('.question').text('Jak se jmenuje populární počítačová hra s otevřeným světem plným kostiček?');
                break;

            case 3:
                $('.initials').html('<p>HtH</p>'); //Highway to Hell
                $('.question').text('Jak se jmenuje šesté studiové album skupiny AC/DC nesoucí stejný název jako jeden z největších hitů tohoto alba?');
                break;

            case 4:
                $('.initials').html('<p>FM</p>'); //Ferda mravenec
                $('.question').text('Jak se jmenuje sympatická hmyzí postavička z komiksů a knih Ondřeje Sekory?');
                break;

            case 5:
                $('.initials').html('<p>A</p>'); //Amazon
                $('.question').text('Jak se jmenuje internetový portál založený Jeffem Bezosem původně sloužící jako internetové knihkupectví, dnes jako přeprodejce vesměs čehokoliv?');
                break;

            case 6:
                $('.initials').html('<p>P</p>'); //pulsar
                $('.question').text('Jakým slovem se nazývá rychle rotující neutronová hvězda přerušovaně vysílající rádiové záření?');
                break;

            case 7:
                $('.initials').html('<p>B</p>'); //Becherovka
                $('.question').text('Jaký je název bylinného likéru pocházejícího z Karlových Varů, který je shodou náhod oblíbenou pochutinou našeho prezidenta?');
                break;

            case 8:
                $('.initials').html('<p>K</p>'); //Kronos
                $('.question').text('Jak se jmenoval jeden ze starořeckých titánů, charakteristický tím, že požíral své vlastní děti?');
                break;

            case 9:
                $('.initials').html('<p>TT</p>'); //Týnuš Třešničková
                $('.question').text('Jak se jmenuje česká beauty Youtuberka, která se v Turecku nachomýtla k explozi v baru a nyní už kvůli tomu není tak moc beauty?');
                break;

            case 10:
                $('.initials').html('<p>S</p>'); //synekdocha
                $('.question').text('Jak se v čestině nazývá jeden z tropů, při kterém dochází k záměně části za celek nebo naopak celku za část?');
                break;

            case 11:
                $('.initials').html('<p>KP</p>'); //královská postupka
                $('.question').text('Jak se do češtiny překládá název nejsilnější kombinace karet, které lze dosáhnout ve hře Texas Holdem Poker?');
                break;

            case 12:
                $('.initials').html('<p>F</p>'); //Filadelfie
                $('.question').text('Jak se jmenuje největší město amerického federálního státu Pensylvánie, ve kterém byly mimo jiné sepsány Deklarace nezávislosti a Ústava Spojených států?');
                break;

            case 13:
                $('.initials').html('<p>S</p>'); //svítivost
                $('.question').text('Jak se jmenuje fyzikální veličina udávající prostorovou hustotu světelného toku zdroje v různých směrech?');
                break;

            case 14:
                $('.initials').html('<p>R</p>'); //Reels
                $('.question').text('Jaký je název instagramové funkce umožňující nahrávat a editovat 15sekundová videa, jež má být odpovědí na stále populárnější službu TikTok?');
                break;

            case 15:
                $('.initials').html('<p>J</p>'); //Jacuzzi
                $('.question').text('Jak se jmenuje nejpopulárnější firma vyrábějící vířivé hydromasážní vany, jejíž název se zároveň vžil i jako běžné označení tohoto typu van?');
                break;

            case 16:
                $('.initials').html('<p>D</p>'); //diskriminant
                $('.question').text('Jak se v matematice říká polynomu, pomocí něhož můžeme vypočítat řešení obecné kvadratické rovnice, případně určit, zda rovnice má řešení a kolik takových řešení má?');
                break;

            case 17:
                $('.initials').html('<p>VO</p>'); //veverka obecná
                $('.question').text('Jak se jmenuje středně velký hlodavec obývající široké území v rozmezí od západní Evropy až po východní Asii?');
                break;

            case 18:
                $('.initials').html('<p>BM</p>'); //Bayern Mnichov
                $('.question').text('Jak se jmenuje fotbalový tým, který tento rok zvítězil v Lize mistrů a odnesl si tak již 6. titul v této soutěži?');
                break;

            case 19:
                $('.initials').html('<p>R</p>'); //Roklinka
                $('.question').text('Jak se nazývalo horské útočiště, ve kterém v knihách a filmech Pán prstenů sídlí Elrond Půlelf?');
                break;

            case 20:
                $('.initials').html('<p>PvH</p>'); //Paul von Hindenburg
                $('.question').text('Jak se jmenoval v pořadí 2. prezident Německa, významná osobnost 1. světové války, po němž byla mimo jiné pojmenována slavná vzducholoď?');
                break;

            case 21:
                $('.initials').html('<p>OP</p>'); //Orlická přehrada
                $('.question').text('Jak se jmenuje místo v Česku, jež se na začátku 90. let proslavilo tím, že sloužilo jako úkryt těl zavražděných podnikatelů?');
                break;

            case 22:
                $('.initials').html('<p>KJ</p>'); //Koněpruské jeskyně
                $('.question').text('Jak se nazývá rozsáhlý jeskynní systém nacházející se 5 km od obce Broumov?');
                break;

            case 23:
                $('.initials').html('<p>Ch</p>'); //Chlestakov
                $('.question').text('Jaké je příjmení hlavní postavy v Gogolově divadelní hře Revizor?');
                break;

            case 24:
                $('.initials').html('<p>T</p>'); //Theremin
                $('.question').text('Jak se jmenuje elektronický hudební nástroj vynalezený v roce 1920 a unikátní tím, že jde o první hudební nástroj, na který se hraje, aniž by se ho hráč jakkoli dotýkal?');
                break;

            case 25:
                $('.initials').html('<p>M</p>'); //minaret
                $('.question').text('Jak se nazývá věžovitá stavba, nejčastěji štíhlého okurkovitého tvaru, vysoká v průměru okolo 15 metrů, jež je součástí jistých náboženských budov (a také vily Tomia Okamury)?');
                break;

            case 26:
                $('.initials').html('<p>F</p>'); //flamenco
                $('.question').text('Jak se nazývá hudebně taneční kultura, jejíž centrem je Španělsko a charakteristickým nástrojem k tanci jsou kastaněty??');
                break;

            case 27:
                $('.initials').html('<p>O</p>'); //Orion
                $('.question').text('Který český rapper má stejnou přezdívku jako je název jedné ze značek tuzemské čokolády?');
                break;

            case 28:
                $('.initials').html('<p>CC</p>'); //Courtney Cox
                $('.question').text('Jak se jmenuje představitelka Moniky z populárního amerického seriálu Přátelé?');
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
                $('.question').text('Filip Král měl dle svých slov sex na stromě více než jednou.'); //ano
                break;

            case 1:
                $('.question').text('Seriál American Horror Story má celkem 10 sérií.'); //ne
                break;

            case 2:
                $('.question').text('Název koronavirů je odvozen od glykoproteinových výběžků na povrchu, které v mikroskopu vypadají jako koróna.'); //ano
                break;

            case 3:
                $('.question').text('Transsibiřská magistrála je nejdelší železniční tratí na světě a měří více než 9000 km.'); //ano
                break;

            case 4:
                $('.question').text('Alpské pohoří vzniklo v geologickém období nazývaném jako druhohory.'); //ne
                break;

            case 5:
                $('.question').text('Rok 2020 je podle čínského kalendáře rokem psa.'); //ne
                break;

            case 6:
                $('.question').text('Číslo 6869 není prvočíslo.'); //ne
                break;

            case 7:
                $('.question').text('Americká občanská válka začala oficiálně v dubnu roku 1861.'); //ano
                break;

            case 8:
                $('.question').text('Zakladatel módní značky Versace byl zavražděn před svou rezidencí v Miami.'); //ano
                break;

            case 9:
                $('.question').text('Jméno protokolu pro bezdrátovou komunikaci Bluetooth je odvozeno od jména dánského krále Haralda Modrozuba.'); //ano
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

        if (blackCounter > 9) {
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

