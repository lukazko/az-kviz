let blackCounter = 0;
let timer;

function getQuestion(id) {

    if ($('.blank2').length > 0) {
        return;
    }

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
                $('.initials').html('<p>SR</p>');
                $('.question').text('Pod jakým uměleckým jménem vystupuje Prokop Vejda, mezi jehož hity patří rappové písně jako Pindisfildis, Dvanácterák či Parket?');
                break;

            case 2:
                $('.initials').html('<p>M</p>');
                $('.question').text('Jak se jmenoval ruský vědec, který objevil a navrhl - dodnes nejpoužívanější - schéma uspořádání chemických prvků do periodické tabulky?');
                break;

            case 3:
                $('.initials').html('<p>D</p>');
                $('.question').text('Jak se jmenuje známá povídková kniha Giovanniho Boccaccia plná zvrhlého sexu a dalších oplzlostí?');
                break;

            case 4:
                $('.initials').html('<p>VM</p>');
                $('.question').text('Jak se nazývá nejvyšší vrchol Píseckých hor, označovaný mimo jiné za domov skřítka Pimona?');
                break;

            case 5:
                $('.initials').html('<p>L</p>');
                $('.question').text('Jaké je přijmení běloruského diktátora působícího jako hlava státu od roku 1994 až do dnes?');
                break;

            case 6:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 7:
                $('.initials').html('<p>A</p>');
                $('.question').text('Jakým cizím slovem popisujeme nesobecký způsob myšlení a cítění?');
                break;

            case 8:
                $('.initials').html('<p>P</p>');
                $('.question').text('Jaký je název akčního filmu Christophera Nolana z roku 2010, ve kterém hraje hlavní roli Leonardo DiCaprio?');
                break;

            case 9:
                $('.initials').html('<p>ŠaZ</p>');
                $('.question').text('Mezi jakými dvěmi možnostmi příloh se rozhodovali myslivci při přípavě uloveného kance ve filmu Slavnosti sněženek?');
                break;

            case 10:
                $('.initials').html('<p>K</p>');
                $('.question').text('Jaké je křestní jméno nejmladšího ze sourozenců Kardashian/Jenner, kteří vystupovali v televizní show Keeping Up with the Kardashians?');
                break;

            case 11:
                $('.initials').html('<p>P</p>');
                $('.question').text('Jak bychom do češtiny přeložili slovenské slovo bielizeň?');
                break;

            case 12:
                $('.initials').html('<p>I</p>');
                $('.question').text('Jaká sexuální menšina se skrývá pod písmenkem I ve známé zkratce LGBTQIA?');
                break;

            case 13:
                $('.initials').html('<p>VV</p>');
                $('.question').text('Jaké bylo původní jméno oblíbeného portálu pro výměnu oblečení Vinted.cz?');
                break;

            case 14:
                $('.initials').html('<p>E</p>');
                $('.question').text('Jak se nazývá básnická figura, která je založena na opakování stejného slova nebo slovních spojení za sebou v jednom verši?');
                break;

            case 15:
                $('.initials').html('<p>RČ</p>');
                $('.question').text('Jak se nazývá číselný obor zahrnující čísla, která lze vyjádřit zlomkem, jež nemají nekonečný desetinný rozvoj, nebo jejichž rozvoj je periodický?');
                break;

            case 16:
                $('.initials').html('<p>M</p>');
                $('.question').text('Jak se jmenuje počítačová firma, kterou pomohl v roce 1975 spoluzaložit dnes již zesnuvší Paul Allen?');
                break;

            case 17:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se v ostravském nářečí nazývá zaměstnání zahrnující důlní práce a těžbu nerostných surovin?');
                break;

            case 18:
                $('.initials').html('<p>L</p>');
                $('.question').text('Jak bychom do češtiny přeložili polské slovíčko pizdojebka?');
                break;

            case 19:
                $('.initials').html('<p>S</p>');
                $('.question').text('Jaký je název největšího ostrova ve Středozemním moři?');
                break;

            case 20:
                $('.initials').html('<p>C</p>');
                $('.question').text('Jak jmenuje česká internetová firma na níž vznikla kontroverzní reklama s psem Bobíkem?');
                break;

            case 21:
                $('.initials').html('<p>Ch</p>');
                $('.question').text('Do jakého živočišného řádu patří příslušníci čeledí lenochodovitých?');
                break;

            case 22:
                $('.initials').html('<p>MV</p>');
                $('.question').text('Jaké je jméno a příjmení současného předsedy Senátu ČR, který nedávno navštívil Tchaj-wan?');
                break;

            case 23:
                $('.initials').html('<p>C</p>');
                $('.question').text('Jaký je český náze v chemického prvku v latině označovaného jako Stannum?');
                break;

            case 24:
                $('.initials').html('<p>T</p>');
                $('.question').text('V jakém městě by se měly příští rok konat Letní olympijské hry?');
                break;

            case 25:
                $('.initials').html('<p>PH</p>');
                $('.question').text('Jak se celým jménem jmenuje moderátor, který spolu s Leošem Marešem uvádí Ranní show na Evropě 2?');
                break;

            case 26:
                $('.initials').html('<p>A</p>');
                $('.question').text('Z jaké země pocházela známá řeholnice a humanitární pracovnice Matka Tereza?');
                break;

            case 27:
                $('.initials').html('<p>K</p>');
                $('.question').text('Jaká populární česká skupina vydala v nedávné době poněkud cringe píseň o Milanu Barošovi?');
                break;

            case 28:
                $('.initials').html('<p>RG</p>');
                $('.question').text('Jak se celým jménem jmenuje představitel filmového čaroděje Ronalda Bilius Weasleyho?');
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
                $('.question').text('Ganymed je název jednoho ze Saturnových měsíců.'); //ne
                break;

            case 1:
                $('.question').text('Sopka Pico de Teide ležící na ostrově Tenerife je nejvyšší horou Španělského království.'); //ano
                break;

            case 2:
                $('.question').text('Lucie Palkaninová - přítelkyně zpěváka Bohuše Matuše - se narodila v roce 2003.'); //ano
                break;

            case 3:
                $('.question').text('Vratislav I. je nejstarším historicky doloženým českým panovníkem.'); //ne
                break;

            case 4:
                $('.question').text('K dnešnímu dni se na ČSFD.cz nachází více než 3 filmy s hodnocení vyšším než 95 %.'); //ne
                break;

            case 5:
                $('.question').text('Délka Maratonského běhu činí 42,195 km.'); //ano
                break;

            case 6:
                $('.question').text('Nejsledovanějším videem na Youtube (k dnešnímu dni) je píseň Ed Sheeran – Shape of You.'); //ne
                break;

            case 7:
                $('.question').text('Průměrná velikost lidského penisu při erekci je dle posledních studií 13,12 cm.'); //ano
                break;

            case 8:
                $('.question').text('Hradec Králové je sídlo samosprávného Královéhradeckého kraje a územního Východočeského kraje.'); //ano
                break;

            case 9:
                $('.question').text('Mikuláš Ferjenčík je aktuálním předsedou rozpočtového výboru Poslanecké sněmovny ČR.');
                break;
        }
    }
}

function answer(color) {

    // Ošetření, aby každá náhradní otázka byla jiná
    if ($('#' + $('.questId').text()).hasClass('prevBlack') == true) {
        blackCounter++;
        
        if (blackCounter>9) {
            blackCounter = 0;
        }
    }

    $('#' + $('.questId').text()).removeClass("blank blank2 black");

    switch (color) {

        case 1:
            $('#' + $('.questId').text()).addClass("blue");
            break;

        case 2:
            $('#' + $('.questId').text()).addClass("orange");
            break;

        case 3:
            $('#' + $('.questId').text()).addClass("black prevBlack");
            break;

    }

    $('.buttons').hide();
    $('.initials').hide();
    $('.question').text('Zvolte další pole.');

}

