class Pies{
    imie: string;
    wiek: number;
    czyWybiegany: boolean;
    liczbaPosilkow: number[] = [];
    zabawka: Zabawka[] = [];
    wlasciciel: Osoba;


    constructor(imie = '', czyWybiegany = false){
        this.imie = imie;
        this.czyWybiegany = czyWybiegany;
    }

    pobierzWiekLudzki() {
        return this.wiek * 4;
    }

    spacer(){
        console.log('Zaczynamy spacer z ' + this.imie + '.');
        this.czyWybiegany = !this.czyWybiegany;
    }

    zmienDane(noweImie: string, nowyWiek: number){
        this.imie = noweImie;
        this.wiek = nowyWiek;
    }

    dodajLiczbePosilkow(liczbaPosilkow: number){
        this.liczbaPosilkow.push(liczbaPosilkow);
    }

    pobierzLiczbePosilkow(){
        return this.liczbaPosilkow;
    }

    pobierzNajwiekszePosilki(){
        return this.liczbaPosilkow.filter(this.wiekszeNizTrzy)
    }

    wiekszeNizTrzy(liczbaPosilkow: number){
        return liczbaPosilkow > 3;
    }

    dodajZabawke(nowaZabawka: Zabawka){
        this.zabawka.push(nowaZabawka);
    }

    wydrukujWszystkieZabawki(){
        this.zabawka.map(this.iterujZabawki);
    }

    iterujZabawki(zabawka: Zabawka){
        console.log(zabawka);
    }

    usunZabawke(index: number){
        delete this.zabawka[index];
    }

    usunZabawke2(zabawkaDoUsuniecia: Zabawka) {
        this.zabawka = this.zabawka.filter(item => item.name !== zabawkaDoUsuniecia.name);
    }

    pobierzDaneWlasciciela(){
        return this.wlasciciel.imie + ' ' + this.wlasciciel.nazwisko;
    }
}

class Zabawka {
    id: number;
    name: string;


    constructor(id = 0, name = ''){
        this.id = id;
        this.name = name;
    }
}

class Osoba{
    imie: string;
    nazwisko: string;
}

const azor = new Pies();
azor.imie = "Azor";
azor.wiek = 5;
azor.czyWybiegany = false;




const ares = new Pies();
ares.imie = "Ares";
ares.wiek = 17;
ares.czyWybiegany = true;
console.log(ares.pobierzWiekLudzki());
ares.spacer();
ares.zmienDane('Borys',13);
ares.dodajLiczbePosilkow(5);
ares.dodajLiczbePosilkow(8);
ares.dodajLiczbePosilkow(2);
ares.dodajLiczbePosilkow(1);
console.log(ares.pobierzLiczbePosilkow());
console.log(ares.pobierzNajwiekszePosilki());

const pola = new Pies();
pola.imie = "Pola";
pola.wiek = 7;
pola.czyWybiegany = true;

const Wojtek = new Osoba;
Wojtek.imie = 'Wojtek';
Wojtek.nazwisko = 'Łojkowski';

pola.wlasciciel = Wojtek;
console.log(pola.pobierzDaneWlasciciela());

const reksio = new Pies("Reksio",true);
reksio.wiek = 2;

let kółko = new Zabawka;
kółko.id = 1;
kółko.name = 'kółko';

let misiek = new Zabawka;
misiek.id = 2;
misiek.name = 'misiek';

let piłka = new Zabawka;
piłka.id = 3;
piłka.name = 'piłka';

ares.dodajZabawke(kółko);
ares.dodajZabawke(misiek);
ares.dodajZabawke(piłka);
ares.wydrukujWszystkieZabawki();
ares.usunZabawke(1);
console.log(ares.zabawka);

