"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[179],{825:(c,z,s)=>{var r=s(497),e=s(743),f=s(156),o=s(253);let p=(()=>{class n{constructor(){this.fiszekStany=[new o.x,new o.x,new o.x,new o.x,new o.x,new o.x,new o.x],this.fiszka_F=new Set([1,2,3,4,5,6]),this.fiszka_T=0}odczytaj(i){return this.fiszekStany[i].asObservable()}zainicjuj(i,t){this.fiszekStany[i].next(t)}zmieniaj(i){if(this.fiszka_T!=i){this.fiszka_F.delete(i),this.fiszka_F.add(this.fiszka_T),this.fiszka_T=i,this.fiszekStany[i].next(!0);for(let t of this.fiszka_F)this.fiszekStany[t].next(!1)}}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var k=s(666);let u=(()=>{class n{constructor(i){this.stanFiszek=i,this.id=0,this.wers1="",this.wers2="",this.stan=!1}ngOnInit(){0==this.id&&(this.stan=!0),this.stanFiszek.zainicjuj(this.id,this.stan),this.stanFiszek.odczytaj(this.id).subscribe(i=>{this.stan=i})}zmianaStanuFiszki(){this.stanFiszek.zmieniaj(this.id)}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["fifak-fiszka"]],inputs:{id:"id",wers1:"wers1",wers2:"wers2"},decls:5,vars:3,consts:[[1,"fiszka",3,"ngClass","click"],[1,"noselect","wers","wers1"],[1,"noselect","wers","wers2"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return t.zmianaStanuFiszki()}),e.TgZ(1,"h3",1),e._uU(2),e.qZA(),e.TgZ(3,"h5",2),e._uU(4),e.qZA()()),2&i&&(e.Q6J("ngClass",t.stan?"stan_T":"stan_F"),e.xp6(2),e.Oqu(t.wers1),e.xp6(2),e.Oqu(t.wers2))},dependencies:[k.mk],styles:[".stan_F[_ngcontent-%COMP%]{background-color:#6da562}.stan_F[_ngcontent-%COMP%]   .wers[_ngcontent-%COMP%]{color:#3d5437}.stan_T[_ngcontent-%COMP%]{background-color:#3d5437}.stan_T[_ngcontent-%COMP%]   .wers[_ngcontent-%COMP%]{color:#6da562}.fiszka[_ngcontent-%COMP%]{margin:2px;padding:3px;height:50px;width:150px;-moz-border-top-right-radius:15px;border-top-right-radius:15px;-moz-border-bottom-right-radius:15px;border-bottom-right-radius:15px;cursor:pointer;display:grid;gap:1px;grid-template-columns:auto;grid-template-rows:auto auto}.fiszka[_ngcontent-%COMP%]:hover{background-color:#3d5437;border:solid rgb(73,35,17) 1px}.fiszka[_ngcontent-%COMP%]:hover   .wers[_ngcontent-%COMP%]{color:#6da562}.fiszka[_ngcontent-%COMP%]:active{border:solid rgb(160,57,74) 1px}.fiszka[_ngcontent-%COMP%]   .wers[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;margin:0;padding:0}"]}),n})(),w=(()=>{class n{constructor(){this.idn=0,this.txt="",this.stan2=!1}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fifak-sztuczka1"]],inputs:{idn:"idn",txt:"txt"},decls:5,vars:2,consts:[[1,"fiszka-box"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&i&&(e.xp6(2),e.hij("komponent txt: ",t.txt," "),e.xp6(2),e.hij("komponent idn: ",t.idn," "))},styles:[".main[_ngcontent-%COMP%]{margin:0;padding:0;height:100%;width:100%;border:solid violet 3px}.ss[_ngcontent-%COMP%]{overflow-y:auto}"]}),n})(),m=(()=>{class n{constructor(){this.idn=0,this.txt=""}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fifak-sztuczka2"]],inputs:{idn:"idn",txt:"txt"},decls:5,vars:2,consts:[[1,"fiszka-box"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&i&&(e.xp6(2),e.hij("komponent txt: ",t.txt," "),e.xp6(2),e.hij("komponent idn: ",t.idn," "))}}),n})(),l=(()=>{class n{constructor(){this.idn=0,this.txt=""}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fifak-sztuczka3"]],inputs:{idn:"idn",txt:"txt"},decls:5,vars:2,consts:[[1,"fiszka-box"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&i&&(e.xp6(2),e.hij("komponent txt: ",t.txt," "),e.xp6(2),e.hij("komponent idn: ",t.idn," "))}}),n})(),y=(()=>{class n{constructor(){this.idn=0,this.txt="",this.p_1_a="Geneteka, to pr\u0119\u017cnie przyrastaj\u0105ca baza zindeksowanych akt: wyznaniowych ksi\u0105g metrykalnych i stanu cywilnego, producentem Geneteki sensu largo jest rzesza wolontariuszy indeksuj\u0105cy wybrane przez siebie ksi\u0119gi metrykalne, jak i wybrane informacje. Cechami wsp\xf3lnymi dla wszystkich rekord\xf3w s\u0105: rok w kt\xf3rym akt powsta\u0142, parafia/urz\u0105d sporz\u0105dzaj\u0105ca akt, miejscowo\u015b\u0107, w przypadku aktu: narodzin/chrztu/zgonu, zazwyczaj uzyskujemy imiona dziecka, nazwisko i imiona ojca oraz matki; (czasami w uwagach uzyskujemy pe\u0142n\u0105 dat\u0119 urodzenia oraz chrztu, adres, przy zmar\u0142ych wiek osoby, rzadko kiedy poznajemy dziadk\xf3w dziecka lub inne koligacje; natomiast w przypadku aktu ma\u0142\u017ce\u0144stwa zazwyczaj jest pan m\u0142ody i panna m\u0142oda z imienia i nazwiska, czasami te\u017c dok\u0142adna data i adres, oraz wiek podczas zawarcia ma\u0142\u017ce\u0144stwa,czy informacja o tym czy byli wdowcami, jak i informacje o rodzicach ma\u0142\u017conk\xf3w. Jak zapewne pa\u0144stwo wiedz\u0105,zdecydowana wi\u0119kszo\u015b\u0107 akt\xf3w posiada jeszcze inne wa\u017cne informacje o osobach jak chocia\u017cby statut i/lub zaw\xf3d os\xf3b, i r\xf3\u017cne inne..",this.p_1_b="Obecno\u015b\u0107 Geneteki w sieci, wraz z darmowym do\u0144 dost\u0119pem z dowolnego miejsca na \u015bwiecie oraz nierzadkie podlinkowanie skan\xf3w konkretnych,do poszczeg\xf3lnych rekord\xf3w, jest nieocenion\u0105 pomoc\u0105 genealogiczn\u0105, w niekt\xf3rych przypadkach niesamowicie przyspieszaj\u0105c\u0105 wst\u0119pn\u0105 kewrendend\u0119 genealogiczn\u0105, cho\u0107 ostatnich czasy (rok 2022) niemal\u017ce ka\u017cdego dnia przybywa \u015brednio 8 indeks\xf3w dotycz\u0105cych r\xf3\u017cnych miejscowo\u015bci jaki r\xf3\u017cnych okres\xf3w rocznik\xf3w i wyzna\u0144, nale\u017cy pami\u0119ta\u0107 i\u017c brak szukanego rekordu z jakiegokolwiek miejsca,nawet w przypadku gdy s\u0105 indexy z danego rocznika, nie determinuje tego \u017ce dane wydarzenie miejsca nie mia\u0142o, bowiem w niekt\xf3rych parafiach tworzonych by\u0142o r\xf3wnolegle kilka ksi\u0105g dla r\xf3\u017cnych cz\u0119\u015bci/przysi\xf3\u0142k\xf3w/itp, r\xf3wnie\u017c na uwadze mie\u0107 trzeba czy dana ksi\u0119ga to unikat, czy duplikat, sporo ksi\u0105g kt\xf3ra dotrwa\u0142a do dzisiejszych czas\xf3w s\u0105 to kopie, poprzednich kopii a trzeba pami\u0119ta\u0107 i\u017c ksero to wynalazek z II po\u0142owy XX wieku (!! prosze nie kserowa\u0107 starodr\xf3k\xf3w \u015bwiat\u0142o ostre je niszczy), ksi\u0119gi by\u0142y przepisywane i nierzadko skutkowa\u0142o to powstaniem r\xf3\u017cnych nie\u015bcis\u0142o\u015bci jak i powa\u017cniejszych b\u0142\u0119d\xf3w. Geneteka jest tylko jedn\u0105 spo\u015br\xf3d wielu tego typu baz, pozwol\u0119 sobie wymieni\u0107 inne przyk\u0142ady takie jak baza LubGens, baza Pomorskiego TG, \u201cPozna\u0144 Project\u201d, czy \u201cBasia\u201d (WTG Gniazdo);",this.p_1_c="Przyj\u0119ta przez PTG metodologia sprawia i\u017c w bazie b\u0142\u0119d\xf3w bez liku jest, tre\u015b\u0107 nades\u0142anego przez wolontariusza indeksu jest zamieszczana bez jakiegokolwiek sprawdzenia (moim skromnym zdaniem indeksy tworzone winny by\u0107 w tr\xf3jkach, lub co najmniej parach - pierwszy/a wykonuje najci\u0119\u017csz\u0105 robot\u0119, drugi/a sprawdza zgodno\u015b\u0107 indeksu z \u017ar\xf3d\u0142em, ewentualnie trzeci/a dokonuje drugiego sprawdzenia - w\xf3wczas b\u0142\u0119d\xf3w by\u0142oby jak na lekarstwo). Spo\u015br\xf3d grubych b\u0142\u0119d\xf3w na szcz\u0119\u015bcie niecz\u0119stych s\u0105 r\xf3\u017cnorakie roszady wpisanie do z\u0142ej rubryki przeczytanej tre\u015bci - w przegl\u0105daniu ca\u0142ej parafii wyszukuj\u0105c r\xf3\u017cnych fragmentarycznych danych jak chocia\u017cby np rodzic\xf3w po imionach zamiast nazwisk, lub po innym kluczu mo\u017cna niekiedy wy\u0142apa\u0107 takie b\u0142\u0119dnie zindeksowane rekordy, niestety zasadnicza ich ilo\u015b\u0107 nie zostanie przez beneficjenta bazy odnaleziona); do grubych zalicz\u0119 jeszcze np. pomylenie p\u0142ci (spotka\u0142em si\u0119 z Tomaszem zamiast Teresy) czy b\u0142\u0119dn\u0105 interpretacje imienia (bowiem wi\u0119kszo\u015b\u0107 indeksuj\u0105cych wpisuje wsp\xf3\u0142czesny polski wariant imienia, niekt\xf3re niepospolite imiona zdecydowanie zaskakuj\u0105 sporo indeksuj\u0105cych, w konsekwencji powstaj\u0105 potworki lub przypisywane s\u0105 podobnie brzmi\u0105ce, niekt\xf3rzy te\u017c nie radz\u0105 sobie z odmian\u0105 nazwisk przez przypadki i przez osoby panna/m\u0119\u017catka zw\u0142aszcza w \u0142acinie, r\xf3wnie\u017c dawnych ludowych wariantach polszczyzny. Z drobnych b\u0142\u0119d\xf3w kt\xf3re niekoniecznie s\u0105 win\u0105 indeksuj\u0105cego,wymieni\u0107 nale\u017cy, wszelkie przeinaczenia nazwisk, jak multi wariantowo\u015b\u0107 w obr\u0119bie parafii, skrybowie spisywali ze s\u0142uchu, ponadto by\u0142y okresy pisania 'y' zamiast 'i' czy 'j', w pewnych obszarach p\u0142ynnie spotykamy si\u0119 z 'ty' zamiast 'ci'  ina opak, cz\u0119sto wyst\u0119puje oboczno\u015b\u0107 przy sufiksach 'owski' = 'oski' = 'ocki', te\u017c wp\u0142yw W\u0119gierki pisanie 'ss' zamiast 's' (tu zdarza si\u0119 \u017ce ligatur\u0119 drugiego 's', indeksuj\u0105cy traktuj\u0105 czasem jako '\u0142' czasem), jak i '\u015b' jako 'sz', tudzie\u017c '\u0105' jako 'om' i 'on', jak i oboczno\u015b\u0107 sufiksu 'wicz' do 'wic', '\u0107' do 'cz', tak jak szereg podobnych,pojawiaj\u0105cych si\u0119 zapis\xf3w wp\u0142ywaj\u0105cych na konieczno\u015b\u0107 wyszukiwania wielu wariant\xf3w danego nazwiska. Dodatkowo utrudnia nierzadko beznadziejny charakter pisma,kt\xf3ry jest zbyt ozdobny, zbyt niechlujny, tudzie\u017c zdegradowanych np.wilgoci\u0105 przez stulecia/dekady z\u0142ego archiwizowania.",this.p_2_a="Serwis 'Geneteka' dzia\u0142a wzgl\u0119dnie sprawnie, jednak\u017ce przy g\u0142\u0119bszych badaniach uci\u0105\u017cliwe s\u0105 ukryte informacje pod symbolami literki 'i',aby je pozna\u0107 ka\u017cdorazowo trzeba najecha\u0107 na ikon\u0119,nie mo\u017cna ich ani zaznaczy\u0107 ani te\u017c skopiowa\u0107, jak i wyszuka\u0107..; Niemo\u017cliwym jest te\u017c bardziej z\u0142o\u017cone filtrowanie czy  sortowanie, takie jakie znamy chocia\u017cby z Google-Sheet/MS-Excell.       Aby temu zaradzi\u0107, powsta\u0142 m\xf3j skrypt, Kt\xf3ry niestety nie jest  trywialny, pewnie niejeden z was rzeknie  i\u017c jest to zbyt skomplikowane lub wymaga zbyt wielkiego nak\u0142adu czasu, jednak\u017ce mnie niezwykle u\u0142atwi\u0142o,  oszcz\u0119dzaj\u0105c na analizy mn\xf3stwo czasu.",this.p_2_b=""}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fifak-geneteka-opis"]],inputs:{idn:"idn",txt:"txt"},decls:14,vars:5,consts:[[1,"fiszka-box"],[1,"karta"],[1,"akapit"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3),e.qZA(),e.TgZ(4,"p",2),e._uU(5),e.qZA()(),e.TgZ(6,"div",1)(7,"p",2),e._uU(8),e.qZA()(),e.TgZ(9,"div",1)(10,"p",2),e._uU(11),e.qZA(),e.TgZ(12,"p",2),e._uU(13),e.qZA()()()),2&i&&(e.xp6(3),e.Oqu(t.p_1_a),e.xp6(2),e.Oqu(t.p_1_b),e.xp6(3),e.Oqu(t.p_1_c),e.xp6(3),e.Oqu(t.p_2_a),e.xp6(2),e.Oqu(t.p_2_b))},styles:[".fiszka-box[_ngcontent-%COMP%]{display:grid;gap:2px}@media (max-width: 1199px){.fiszka-box[_ngcontent-%COMP%]{grid-auto-flow:row}}@media (min-width: 1200px){.fiszka-box[_ngcontent-%COMP%]{grid-auto-flow:column}}.karta[_ngcontent-%COMP%]{background-color:#f0f8ff65;margin:6px;padding:10px;border-radius:25px}"]}),n})(),g=(()=>{class n{constructor(){this.idn=0,this.txt=""}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fifak-geneteka-baza"]],inputs:{idn:"idn",txt:"txt"},decls:5,vars:2,consts:[[1,"fiszka-box"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&i&&(e.xp6(2),e.hij("komponent txt: ",t.txt," "),e.xp6(2),e.hij("komponent idn: ",t.idn," "))}}),n})(),h=(()=>{class n{constructor(){this.idn=0,this.txt=""}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fifak-geneteka-mapa"]],inputs:{idn:"idn",txt:"txt"},decls:5,vars:2,consts:[[1,"fiszka-box"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&i&&(e.xp6(2),e.hij("komponent txt: ",t.txt," "),e.xp6(2),e.hij("komponent idn: ",t.idn," "))}}),n})(),_=(()=>{class n{constructor(){this.idn=0,this.txt=""}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fifak-geneteka-pomoc"]],inputs:{idn:"idn",txt:"txt"},decls:5,vars:2,consts:[[1,"fiszka-box"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&i&&(e.xp6(2),e.hij("komponent txt: ",t.txt," "),e.xp6(2),e.hij("komponent idn: ",t.idn," "))}}),n})();function b(n,a){if(1&n&&e._UZ(0,"fifak-fiszka",5),2&n){const i=a.$implicit;e.Q6J("id",i.id)("wers1",i.wers1)("wers2",i.wers2)}}function x(n,a){1&n&&e._UZ(0,"fifak-geneteka-opis",6),2&n&&e.Q6J("txt","opis")("idn",3)}function j(n,a){1&n&&e._UZ(0,"fifak-geneteka-mapa",6),2&n&&e.Q6J("txt","mapa")("idn",4)}function C(n,a){1&n&&e._UZ(0,"fifak-geneteka-baza",6),2&n&&e.Q6J("txt","baza")("idn",5)}function O(n,a){1&n&&e._UZ(0,"fifak-geneteka-pomoc",6),2&n&&e.Q6J("txt","help")("idn",6)}function T(n,a){1&n&&e._UZ(0,"fifak-sztuczka1",6),2&n&&e.Q6J("txt","tik1")("idn",0)}function P(n,a){1&n&&e._UZ(0,"fifak-sztuczka2",6),2&n&&e.Q6J("txt","tik2")("idn",1)}function M(n,a){1&n&&e._UZ(0,"fifak-sztuczka3",6),2&n&&e.Q6J("txt","tik3")("idn",2)}let Z=(()=>{class n{constructor(i){this.stanSekcji=i,this.fiszki=[{id:3,stan:!1,wers1:"WST\u0118P",wers2:"baza \u201eGeneTeka\u201d"},{id:4,stan:!1,wers1:"ZAKRES",wers2:"baza \u201eGeneTeka\u201d"},{id:5,stan:!1,wers1:"ZAS\xd3B",wers2:"baza \u201eGeneTeka\u201d"},{id:6,stan:!1,wers1:"PORADNIK",wers2:"baza \u201eGeneTeka\u201d"},{id:0,stan:!0,wers1:"sztuczka 1",wers2:"\u201eFifakom-GeneTeka\u201d"},{id:1,stan:!1,wers1:"sztuczka 2",wers2:"\u201eFifakom-GeneTeka\u201d"},{id:2,stan:!1,wers1:"sztuczka 3",wers2:"\u201eFifakom-GeneTeka\u201d"}]}ngOnInit(){for(const i in this.fiszki)Object.prototype.hasOwnProperty.call(this.fiszki,i)&&this.stanSekcji.odczytaj(this.fiszki[i].id).subscribe(d=>{this.fiszki[i].stan=d})}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["fifak-fiszki"]],decls:11,vars:8,consts:[[1,"fiszki"],[1,"fiszki-nav"],["class","krata3",3,"id","wers1","wers2",4,"ngFor","ngForOf"],[1,"fiszki-box"],[3,"txt","idn",4,"ngIf"],[1,"krata3",3,"id","wers1","wers2"],[3,"txt","idn"]],template:function(i,t){1&i&&(e.TgZ(0,"figure",0)(1,"div",1),e.YNc(2,b,1,3,"fifak-fiszka",2),e.qZA(),e.TgZ(3,"div",3),e.YNc(4,x,1,2,"fifak-geneteka-opis",4),e.YNc(5,j,1,2,"fifak-geneteka-mapa",4),e.YNc(6,C,1,2,"fifak-geneteka-baza",4),e.YNc(7,O,1,2,"fifak-geneteka-pomoc",4),e.YNc(8,T,1,2,"fifak-sztuczka1",4),e.YNc(9,P,1,2,"fifak-sztuczka2",4),e.YNc(10,M,1,2,"fifak-sztuczka3",4),e.qZA()()),2&i&&(e.xp6(2),e.Q6J("ngForOf",t.fiszki),e.xp6(2),e.Q6J("ngIf",t.fiszki[0].stan),e.xp6(1),e.Q6J("ngIf",t.fiszki[1].stan),e.xp6(1),e.Q6J("ngIf",t.fiszki[2].stan),e.xp6(1),e.Q6J("ngIf",t.fiszki[3].stan),e.xp6(1),e.Q6J("ngIf",t.fiszki[4].stan),e.xp6(1),e.Q6J("ngIf",t.fiszki[5].stan),e.xp6(1),e.Q6J("ngIf",t.fiszki[6].stan))},dependencies:[k.sg,k.O5,u,w,m,l,y,g,h,_],styles:[".noselect[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}",".fiszki[_ngcontent-%COMP%]{margin:0;padding:0;height:100%;width:100%;overflow:hidden;display:flex;flex-flow:row nowrap;justify-content:space-between;background-color:#4e7346}.fiszki[_ngcontent-%COMP%]   .fiszki-nav[_ngcontent-%COMP%]{flex-basis:154px;background-color:#ffffff0d}.fiszki[_ngcontent-%COMP%]   .fiszki-box[_ngcontent-%COMP%]{background-color:#0000000d;flex:1 1 auto;display:flex;flex-flow:row nowrap;justify-content:space-between;overflow:hidden;padding:5px}.fiszki[_ngcontent-%COMP%]   .fiszki-box[_ngcontent-%COMP%]   fifak-sztuczka1[_ngcontent-%COMP%], .fiszki[_ngcontent-%COMP%]   .fiszki-box[_ngcontent-%COMP%]   fifak-sztuczka2[_ngcontent-%COMP%], .fiszki[_ngcontent-%COMP%]   .fiszki-box[_ngcontent-%COMP%]   fifak-sztuczka3[_ngcontent-%COMP%], .fiszki[_ngcontent-%COMP%]   .fiszki-box[_ngcontent-%COMP%]   fifak-geneteka-opis[_ngcontent-%COMP%], .fiszki[_ngcontent-%COMP%]   .fiszki-box[_ngcontent-%COMP%]   fifak-geneteka-mapa[_ngcontent-%COMP%], .fiszki[_ngcontent-%COMP%]   .fiszki-box[_ngcontent-%COMP%]   fifak-geneteka-baza[_ngcontent-%COMP%], .fiszki[_ngcontent-%COMP%]   .fiszki-box[_ngcontent-%COMP%]   fifak-geneteka-pomoc[_ngcontent-%COMP%]{margin:0;padding:0;height:100%;width:100%;overflow:auto}"]}),n})(),v=(()=>{class n{constructor(){this.title="github-geneteka-fifakom"}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fifak-root"]],decls:2,vars:0,consts:[[1,"krata2"]],template:function(i,t){1&i&&(e.TgZ(0,"main"),e._UZ(1,"fifak-fiszki",0),e.qZA())},dependencies:[Z],styles:["[_nghost-%COMP%]{font-family:Bona Nova,serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:17px;box-sizing:border-box}main[_ngcontent-%COMP%]{box-sizing:border-box;overflow:clip;margin:0;padding:0;height:100%;width:100%;flex:1 1 auto}"]}),n})(),F=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n,bootstrap:[v]}),n.\u0275inj=e.cJS({providers:[],imports:[r.b2,f.u5]}),n})();(0,e.G48)(),r.q6().bootstrapModule(F).catch(n=>console.error(n))}},c=>{c.O(0,[736],()=>c(c.s=825)),c.O()}]);
//# sourceMappingURL=main.af6d726facf6e756.js.map