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
}
