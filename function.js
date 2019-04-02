
function munculkanAngkaDua() {
    return 2
}

var tampung = munculkanAngkaDua();
console.log(tampung)

function munculkanAngkaDuak() {
    if (3 > 5) {
        return ('lebih kecil');
    } else {
        return ('lebih besar');
    }
}

var tampungs = munculkanAngkaDuak();
console.log(tampungs)

function TambahDua(angka) {
    return angka + 2 + 9
}

var tampung = TambahDua(4)
console.log(tampung)

function tampilkanAngka(angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua
}

console.log(tampilkanAngka(5, 3))

function tampilkanAngka(angka = 1) {
    return angka
}

console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
console.log(tampilkanAngka())


var fungsiPenambahan = function (angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua
}

console.log(fungsiPenambahan(2, 4))

var fungsiPenambahan = function (angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua
}

console.log(fungsiPenambahan(2, 4));

function Penambahans(angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua
}
console.log(fungsiPenambahans(2, 4))