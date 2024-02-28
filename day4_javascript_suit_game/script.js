function playGame(pilihanPemain) {
    const pilihanKomputer = getPilihanKomputer();
    const hasil = bandingkanPilihan(pilihanPemain, pilihanKomputer);
    document.getElementById('result').innerText = hasil;
}

function getPilihanKomputer() {
    const randomNumber = Math.random();
    console.log('Angka random:', randomNumber);
    var pilihanKomputer = ''
    if (randomNumber <= 0.3) {
        pilihanKomputer = 'gunting'
    } else if (randomNumber > 0.3 && randomNumber < 0.6) {
        pilihanKomputer = 'batu'
    } else {
        pilihanKomputer = 'kertas'
    }

    return pilihanKomputer
}

function bandingkanPilihan(pilihanPemain, pilihanKomputer) {
    if (pilihanPemain === pilihanKomputer) {
        return 'Seri! Keduanya memilih ' + pilihanPemain + '.';
    } else if (
        (pilihanPemain === 'batu' && pilihanKomputer === 'gunting') ||
        (pilihanPemain === 'gunting' && pilihanKomputer === 'kertas') ||
        (pilihanPemain === 'kertas' && pilihanKomputer === 'batu')
    ) {
        return 'Anda Menang! Pilihan Anda ' + pilihanPemain + ' mengalahkan pilihan komputer ' + pilihanKomputer + '.';
    } else {
        return 'Anda Kalah! Pilihan komputer ' + pilihanKomputer + ' mengalahkan pilihan Anda ' + pilihanPemain + '.';
    }
}
