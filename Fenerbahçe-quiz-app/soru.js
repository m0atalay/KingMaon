function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Fenerbahçenin en erken yaşta kaptanlık pazubandını takan isim kimdir?", { a: "Volkan Demirel", b: "Ömer Faruk Beyaz", c: "Arda Güler" , d: "Gökhan Gönül" }, "b"),
    new Soru("2-Fenerbahçe de en çok başkanlık yapan isim kimdir?", { a: "Aziz Yıldırım", b: "Ali Koç", c: "Lefter Küçükandonyadis" }, "a"),
    new Soru("3-Şükrü Saraçoğlunun kapasitesi kaç kişiliktir?", { a: "48.145 kişi", b: "48.526 kişi", c: "50.530 kişi" }, "c"),
    new Soru("4-En son inşa edilen tribünümüz hangisidir?", { a: "Kale arkadası", b: "Okul Açık Tribünü", c: "Fenerium Tribünü" }, "c")
];