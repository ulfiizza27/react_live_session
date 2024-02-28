// let gaji = 6000000;

// if (gaji !== 6000000) {
//   console.log("Gaji anda diatas UMR");
// } else {
//   console.log("Gaji anda dibawah UMR");
// }

// let akreditasi = "B";

// if (akreditasi === "A") {
//   console.log("Universitas sangat bagus");
// } else if (akreditasi === "B") {
//   console.log("Universitas bagus");
// } else {
//   console.log("Universitas kurang bagus");
// }

// let rangkuman_nilai = [76,87,46,90,56,100,99,79,95];

// console.log(rangkuman_nilai.includes(56));

// if (!rangkuman_nilai.includes(56)) {
//   console.log("Nilai Betul");
// } else {
//   console.log("Nilai Salah");
// }

//Ternary Operator

// let nilai = 65;

// const apakahLulus = nilai > 70 ? "Lulus" : "Tidak Lulus";

// console.log(apakahLulus);

// Looping

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let angka = 10;
// for (i = 1; i <= angka; i++){
//     if (i % 2 === 1) {
//         console.log(i + ' adalah ganjil');
//     } else {
//         console.log(i + ' adalah genap');
//     }
// }

// const statusRes = "warning";

// switch (statusRes) {
//     case "success":
//         console.log("ini proses sukses");
//         break;
//     case "pending":
//         console.log("ini proses pending");
//         break;
//     case "failed":
//         console.log("ini proses gagal");
//         break;
//     default:
//         console.log("status tidak valid");
//         break;
//     }

// function

// function hitungLuasSegitiga(alas, tinggi) {
//     console.log((alas * tinggi) / 2);
// }

// hitungLuasSegitiga(10, 5);


// function hitungLuasSegitiga(alas, tinggi) {
//     return (alas * tinggi) / 2;
// }

// console.log(hitungLuasSegitiga(2, 5));

// const hitungLuasLingkaran = (jariJari) => {
//     return 3.14 * jariJari * jariJari;
// }

// console.log(hitungLuasLingkaran(7));

// function a(q,w,e,r,t,y,u,i,o,p) {
//     return `${q} ${w} ${e} ${r} ${t} ${y} ${u} ${i} ${o} ${p}`
// }

// console.log(a("Hallo", "Semuanya", "Apa", "Kabar", "Kalian", "Semua", "Saya", "Harap", "Baik", "Semua"));

// function hitungNilai(nilai, cb) {
//     if (nilai <= 65) {
//         cb{"tidak lolos "}
//     } else {
//         cb{"lolos"}
//     }
// }

// console.log(hitungNilai(45));

const buttonElHello = document.getElementById("hello-btn");
buttonElHello.addEventListener("click", function() {
    alert("Hello World");
});