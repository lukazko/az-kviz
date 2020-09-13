let blackCounter = 0;

function getQuestion(id) {

    if ($('#' + id).hasClass('blank') == true) {

        $('#' + id).removeClass('blank')
        $('#' + id).addClass('blank2')
        $('.questId').text(id);
        $('.buttons').show();
        $('.initials').show();

        let timeleft = 30;
        let timer = setInterval(function () {
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
                $('.question').text('Pod jakým uměleckým jménem vystupuje Jaroslav Poskočil, mezi jehož hity patří rappové písně jako Pindisfildis, Dvanácterák či Parket?');
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
                $('.question').text('Mezi jakými dvěmi možnostmi se rozhodovali myslivci při přípavě uloveného kance ve filmu Slavnosti sněženek?');
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
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 13:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 14:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 15:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 16:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 17:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 18:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 19:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 20:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 21:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 22:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 23:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 24:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 25:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 26:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 27:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
                break;

            case 28:
                $('.initials').html('<p>B</p>');
                $('.question').text('Jak se jmenuje kocour, kterého vlastní známý český youtuber FiziStyle?');
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
        let timer = setInterval(function () {
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
                $('.question').text('Ganymed je název jednoho ze Saturnových měsíců.');
                break;

            case 1:
                $('.question').text('Sopka Pico de Teide ležící na ostrově Tenerife je nejvyšší horou Španělského království.');
                break;

            case 2:
                $('.question').text('Lucie Palkaninová - přítelkyně zpěváka Bohuše Matuše - se narodila v roce 2003.');
                break;

            case 3:
                $('.question').text('Vratislav I. je nejstarším historicky doloženým českým panovníkem.');
                break;

            case 4:
                $('.question').text('K dnešnímu dni se na ČSFD.cz nachází více než 3 filmy s hodnocení vyšším než 95 %.');
                break;
        }
    }
}

function answer(color) {

    if ($('#' + $('.questId').text()).hasClass('prevBlack') == true) {
        blackCounter++;
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
    $(".timer").text(30);
}

