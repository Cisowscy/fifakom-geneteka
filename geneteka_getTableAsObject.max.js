(function (konfiguracja) {
        let tabelaNowa = {};
        // utworzTabele
        (function (aktyCzego, nrZero, aktyCzego_prefix) {

            function zczytajKomorki(thisRow) {
                function korektaKomorki(a) {
                    return (
                        "undefined" == typeof a
                            ? (a = null)
                            : ((a = a.trim()), (a = "" == a ? null : a.replace(/\\r/g, "\r  "))),
                        a
                    );
                }
                /*function korektaKomorki(q) {
                    if (typeof q !== "undefined") {
                        q = q.trim();
                        q = q == "" ? null : q.replace("\r", "\r ");
                    } else {
                        q = null;
                    }
                    return q;
                } */
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
                resultat.push(korektaKomorki(thisRow.find("td:eq(9)").find("img[src='images/s.png']").parent().attr("href")));
                return resultat;
            }

            function utworzRekord(wierszJSON, nrPozycji, aktCzego) {
                let rekordNowy = {};

                //rekordNowy.lp = nrPozycji;
                //wierszJSON.forEach((v, i) => {
                //    rekordNowy[aktCzego + "_" + konfiguracja.pole[i]] = v;
                //});
                //return rekordNowy;

                return (
                    (rekordNowy.lp = nrPozycji),
                    wierszJSON.forEach((v, i) => {
                        rekordNowy[aktCzego + "_" + konfiguracja.pole[i]] = v;
                    }),
                    rekordNowy
                );

            }

            $(`#table_${aktyCzego} tr`).each((nrWiersza, wierszHTML) => {
                0 != nrWiersza && (tabelaNowa[nrZero + nrWiersza] = utworzRekord(zczytajKomorki($(wierszHTML)), nrZero + nrWiersza, aktyCzego_prefix));
                /* if (nrWiersza != 0) {
                    tabelaNowa[nrZero + nrWiersza] = utworzRekord(zczytajKomorki($(wierszHTML)), nrZero + nrWiersza, aktyCzego_prefix);
                } */
            });
        })(konfiguracja.typ, konfiguracja.nrPozycjiZero, konfiguracja.typNazwa);
        //  zapiszTabele
        (function (zawartoscPliku, nazwaPliku){
            let link = document.createElement("a");
            link.setAttribute('download', nazwaPliku);
            link.setAttribute('href', window.URL.createObjectURL(zawartoscPliku));
            //      link.download = nazwaPliku;
            //      link.href = window.URL.createObjectURL(zawartoscPliku);

            document.body.appendChild(link);

            link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");
            link.click();  
            //URL.revokeObjectURL(link.href);
            document.body.removeChild(link);  
        
        })((new Blob([JSON.stringify(tabelaNowa, null, konfiguracja.czytelnoscPliku)], {type : 'application/json'})), konfiguracja.nazwaPliku);

        console.log(tabelaNowa);
    })((function () {
        let tenTyp = $("ul[class='tabs']").find("li[class='active']").attr("data-key");
        let kolumny = [
            ['rok', 'przypis_rok', 'aktNr', 'przypis_aktNr', 'imionaMeza', 'przypis_imionaMeza', 'nazwiskoMeza', 'przypis_nazwiskoMeza', 'rodziceMeza', 'przypis_rodziceMeza', 'imionaZony', 'przypis_imionaZony', 'nazwiskoZony', 'przypis_nazwiskoZony', 'rodziceZony', 'przypis_rodziceZony', 'parafia', 'przypis_parafia', 'przypisy', 'archiwum', 'wwwArchiwum', 'odczytywal', 'wwwSkan'],
            ['rok', 'przypis_rok', 'aktNr', 'przypis_aktNr', 'imiona', 'przypis_imiona', 'nazwisko', 'przypis_nazwisko', 'imionaOJCA', 'przypis_imionaOJCA', 'imionaMATKI', 'przypis_imionaMATKI', 'nazwiskoMATKI', 'przypis_nazwiskoMATKI', 'parafia', 'przypis_parafia', 'miejscowosc', 'przypis_miejscowosc', 'przypisy', 'archiwum', 'wwwArchiwum', 'odczytywal', 'wwwSkan']
        ];
        return {
            typ: tenTyp,
            typNazwa: 's' == tenTyp ? 'aktMA' : 'b' == tenTyp ? 'aktUR' : 'aktZG',
            nrPozycjiZero: (parseInt($("a[class='paginate_button current']").attr("data-dt-idx")) - 1) * 50,
            nazwaPliku: `${$("select[id='sel_w']").find("option[selected='selected']").text()}_${$("span[id='select2-sel_rid-container']").attr("title")}_${tenTyp}_${$("a[class='paginate_button current']").attr("data-dt-idx")}_${new Date().toISOString().replace(/T|\:|\./g, '-')}.json`,
            pole:  's' == tenTyp ? kolumny[0] : kolumny[1],        
            /* czytelnoscPliku:  compress : 0 | pretty '\t' or 4 */
            czytelnoscPliku: '\t'        
        }
    })());
