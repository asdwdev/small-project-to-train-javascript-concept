<<<<<<< HEAD
let perpustakaan = [
  {
    judul: "tower of god",
    penulis: "siu",
    tahun: 2010,
  },
  {
    judul: "noblesse",
    penulis: "son jeho & lee kwangsu",
    tahun: 2007,
  },
  {
    judul: "the god of highschool",
    penulis: "yongje park",
    tahun: 2011,
  },
  {
    judul: "sweet home",
    penulis: "kim carnby & hwang young-chan",
    tahun: 2017,
  },
  {
    judul: "true beauty",
    penulis: "yaongyi",
    tahun: 2018,
  },
  {
    judul: "lookism",
    penulis: "taejun park",
    tahun: 2014,
  },
  {
    judul: "bastard",
    penulis: "kim carnby & hwang young-chan",
    tahun: 2014,
  },
];

console.log("DAFTAR BUKU DI PERPUSTAKAAN:");

perpustakaan.forEach((buku) => {
  console.log(`${buku.judul} - ${buku.penulis} - ${buku.tahun}`);
});

console.log("\nBUKU SETELAH TAHUN 2020");

let bukuSetelah2020 = perpustakaan.filter((buku) => buku.tahun > 2020);

if (bukuSetelah2020.length !== 0) {
  bukuSetelah2020.forEach((buku) => {
    console.log(`${buku.judul} - ${buku.penulis} - ${buku.tahun}`);
  });
} else {
  console.log("buku setelah tahun 2020 tidak ditemukan.");
=======
let nilai = [100, 98, 95, 97, 99];

nilai.forEach((n, i) => {
  console.log("nilai " + (i + 1) + ": " + n);
});

let total = nilai.reduce((acc, n) => acc + n, 0);
let rataRata = total / nilai.length;
console.log("rata-rata: " + rataRata);

if (rataRata >= 80) {
  console.log("predikat a");
} else if (rataRata >= 75) {
  console.log("predikat b");
} else {
  console.log("predikat c");
>>>>>>> 88d47696976e13b38bc34c4cfed76454f6ce6bed
}
