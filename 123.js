const date = new Date(2027, 5, 26);
/*
*nazwa funkcji: dopiszZero
*opis: dopisuje zero do liczby ktora jest mniej niz 10
*parametry: x-liczba
*zwracamy ta sama liczbe ale z zerem na poczatku jezeli jest mniejsza od 10
*autor: Yaroslav Dmytruk
*/
function dopiszZero(liczba) {
    if (liczba < 10) {
        return "0" + liczba;
    }
    return String(liczba);
}
/*
*nazwa funkcji: pokazZegar
*opis: pobiera dane godziny, minuty oraz sekundy po czym pokazuje je w postaci zegara
*parametry: g-godziny
*m-minuty
*s-sekundy
*zwracamy podane godziny, minuty i sekudny w postaci zegara
*autor: Yaroslav Dmytruk
*/
function pokazZegar() {
    const teraz = new Date();
    const godziny = dopiszZero(teraz.getHours());
    const minuty = dopiszZero(teraz.getMinutes());
    const sekundy = dopiszZero(teraz.getSeconds());

    document.getElementById("zegar").textContent = godziny + ":" + minuty + ":" + sekundy;
}

function pokazDate() {
    const teraz = new Date();
    document.getElementById("data").textContent =
        teraz.toLocaleDateString("pl-PL");
}

function policz(dataOd, dataDo) {
    const roznicaMs = dataDo - dataOd;
    return Math.ceil(roznicaMs / 86400000);
}

function pokazDni() {
    document.getElementById("dni").textContent =
        policz(new Date(), date);
}

function dzienTygodnia() {
    const teraz = new Date();
    document.getElementById("dzien").textContent =
        teraz.toLocaleDateString("pl-PL", { weekday: "long" });
}

dzienTygodnia();
pokazDate();
pokazZegar();
pokazDni();

setInterval(pokazZegar, 1000);