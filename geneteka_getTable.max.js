(function (konfiguracja) {
    let tabelaNowa = konfiguracja.obiekt_T_czy_Tabela_F ? {} : [];
    (function (aktyCzego, nrZero, aktyCzego_prefix, obiektZamiastTabelicy, nazwaPola) {
        // odczytywanie danych
        function zczytajKomorki(thisRow) {
            function korektaKomorki(a) {
                if (typeof a !== "undefined") {
                    a = a.trim();
                    a = a == "" ? null : a.replace("\r", "\r ");
                } else {
                    a = null;
                }
                return a;
            } 
            let resultat = [];
            resultat.push(korektaKomorki(thisRow.find("td:eq(0)").text()));
            resultat.push(korektaKomorki(thisRow.find("td:eq(0)").find("img[src='images/i.png']").attr("title")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(1)").text()));
            resultat.push(korektaKomorki(thisRow.find("td:eq(1)").find("img[src='images/i.png']").attr("title")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(2)").text()));
            resultat.push(korektaKomorki(thisRow.find("td:eq(2)").find("img[src='images/i.png']").attr("title")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(3)").text()));
            resultat.push(korektaKomorki(thisRow.find("td:eq(3)").find("img[src='images/i.png']").attr("title")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(4)").text()));
            resultat.push(korektaKomorki(thisRow.find("td:eq(4)").find("img[src='images/i.png']").attr("title")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(5)").text()));
            resultat.push(korektaKomorki(thisRow.find("td:eq(5)").find("img[src='images/i.png']").attr("title")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(6)").text()));
            resultat.push(korektaKomorki(thisRow.find("td:eq(6)").find("img[src='images/i.png']").attr("title")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(7)").text()));
            resultat.push(korektaKomorki(thisRow.find("td:eq(7)").find("img[src='images/i.png']").attr("title")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(8)").text()));
            resultat.push(korektaKomorki(thisRow.find("td:eq(8)").find("img[src='images/i.png']").attr("title")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(9)").find("img[src='images/i.png']").attr("title")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(9)").find("img[src='images/z.png']").attr("title")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(9)").find("img[src='images/z.png']").parent().attr("href")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(9)").find("img[src='images/a.png']").attr("title")));            
            resultat.push(korektaKomorki(thisRow.find("td:eq(9)").find("img[src='images/a.png']").parent().attr("href")));
            resultat.push(korektaKomorki(thisRow.find("td:eq(9)").find("img[src='images/s.png']").parent().attr("href")));
            return resultat;
        }
        // żąglerka danymi
        function utworzRekord(wierszJSON, nrPozycji, aktCzego) {
            let rekordNowy = {};            
            rekordNowy.lp = nrPozycji;
            wierszJSON.forEach((zawart, index) => {
                rekordNowy[aktCzego + "_" + nazwaPola[index]] = zawart;
            });
            return rekordNowy;
        }
        // zasadnicze przetwarzanie danych
        $(`#table_${aktyCzego} tr`).each((nrWiersza, wierszHTML) => {
            if (nrWiersza != 0 && obiektZamiastTabelicy) { 
                tabelaNowa[nrZero + nrWiersza] = utworzRekord(zczytajKomorki($(wierszHTML)), nrZero + nrWiersza, aktyCzego_prefix); 
            } else if (nrWiersza != 0 && !obiektZamiastTabelicy) {
                tabelaNowa.push(utworzRekord(zczytajKomorki($(wierszHTML)), nrZero + nrWiersza, aktyCzego_prefix));
            }
        });
    })(konfiguracja.typ, konfiguracja.nrPozycjiZero, konfiguracja.typNazwa, konfiguracja.obiekt_T_czy_Tabela_F, konfiguracja.pole);
    //  proces przygotowania do zapisu i zapis
    (function (zawartoscPliku, nazwaPliku){
        let link = document.createElement("a");
        link.setAttribute('download', nazwaPliku);
        link.setAttribute('href', window.URL.createObjectURL(zawartoscPliku));
        //?      link.download = nazwaPliku;
        //?      link.href = window.URL.createObjectURL(zawartoscPliku);
        document.body.appendChild(link);
        link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");
        link.click();  
        //?      URL.revokeObjectURL(link.href);
        document.body.removeChild(link);          
    })((new Blob([JSON.stringify(tabelaNowa, null, konfiguracja.czytelnoscPliku)], {type : 'application/json'})), konfiguracja.nazwaPliku);

    console.log(tabelaNowa);
})((function () {
    let tenTyp = $("ul[class='tabs']").find("li[class='active']").attr("data-key");
    let taStrona = parseInt($($("a[class='paginate_button current']")[0]).text());
    let kolumny = [
        ['rok', 'przypis_rok', 'aktNr', 'przypis_aktNr', 'imionaMeza', 'przypis_imionaMeza', 'nazwiskoMeza', 'przypis_nazwiskoMeza', 'rodziceMeza', 'przypis_rodziceMeza', 'imionaZony', 'przypis_imionaZony', 'nazwiskoZony', 'przypis_nazwiskoZony', 'rodziceZony', 'przypis_rodziceZony', 'parafia', 'przypis_parafia', 'przypisy', 'archiwum', 'wwwArchiwum', 'odczytywacz', 'wwwOdczytywacza', 'wwwSkan'],
        ['rok', 'przypis_rok', 'aktNr', 'przypis_aktNr', 'imiona', 'przypis_imiona', 'nazwisko', 'przypis_nazwisko', 'imionaOJCA', 'przypis_imionaOJCA', 'imionaMATKI', 'przypis_imionaMATKI', 'nazwiskoMATKI', 'przypis_nazwiskoMATKI', 'parafia', 'przypis_parafia', 'miejscowosc', 'przypis_miejscowosc', 'przypisy', 'archiwum', 'wwwArchiwum', 'odczytywacz', 'wwwOdczytywacza', 'wwwSkan']
    ];
    let obiekt_zamiast_tabeli = false;
    return {
        typ: tenTyp,
        typNazwa: 's' == tenTyp ? 'aktMA' : 'b' == tenTyp ? 'aktUR' : 'aktZG',
        nrPozycjiZero: (taStrona - 1) * 50,
        nazwaPliku: `${$("select[id='sel_w']").find("option[selected='selected']").text()}_${$("span[id='select2-sel_rid-container']").attr("title")}_${'s' == tenTyp ? 'aktMA' : 'b' == tenTyp ? 'aktUR' : 'aktZG'}_${taStrona.toString().padStart(4, "0")}.${obiekt_zamiast_tabeli ? '({})' : '([])'}.v${new Date().toISOString().replace(/T|\-|\:|\./g, '')}.json`,
        pole:  's' == tenTyp ? kolumny[0] : kolumny[1],        
        /* czytelnoscPliku:  compress : 0 | pretty '\t' or 4 */
        czytelnoscPliku: '\t',
        obiekt_T_czy_Tabela_F: obiekt_zamiast_tabeli       
    };
})());
