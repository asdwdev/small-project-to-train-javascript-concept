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
}
