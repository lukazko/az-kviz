# az-kviz
Webová aplikace na motivy AZ kvízu pro hrací večery s přáteli.

## Ovládání
- Ovládá moderátor hry
- Na první obrazovce se zvolí jaký typ hry se má spustit
- Po zvolení políčka se zobrazí otázka a spustí se časomíra 30s
    - Pokud vyprší čas a otázka není zodpovězena ani jedním z hráčů, moderátor klikne na tlačítko "neuhodl" a pole se obarví jako náhradní
    - Pokud jeden z hráčů uhodné, moderátor klikne na příslušné tlačítko "uhodl" s hráčovou barvou
- Dokud je otevřená nějaká z otázek a není řádně uzavřena, nejde kliknout na jinou
- V pravém dolním rohu je tlačítko, kterým se jde vrátit zpět na úvodní obrazovku (pozor poté se již nelze vrátit do rozehrané hry!)
- Bankomat si ovládá sám vítězný hráč
- Tlačítkem "start" spustí losování a poté má možnost 3x tlačítkem "stop" vybrat svou výhru

## Známé chyby & omezení
- Layout není responzivní, je nutné spustit na displeji s minimálně 1200 horizontálními pixely
- Otázky prozatím napsány natvrdo v kódu
- Není vyřešena automatická signalizace výhry jednoho z hráčů
- Pouze semifinále zatím
- Provizoní bankomat přidán, výhry je zatím potřeba napsat natvrdo do kódu
- Pro změnu otázek či výher je potřeba jít do adresáře scripts a v příslušných souborech upravit otázku/výhru

