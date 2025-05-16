// Data testimoni klien
const testimonialData = [
  {
    name: "Nadia Rahma",
    role: "Founder LocalCraft",
    photo: "https://i.imgur.com/yYc6pFs.jpg",
    quote: "Layanannya sangat cepat, komunikatif, dan hasil web-nya sesuai yang saya bayangkan!"
  },
  {
    name: "Rizky Firmansyah",
    role: "CEO FastLegal",
    photo: "https://i.imgur.com/5ZC3b3a.jpg",
    quote: "Respons cepat dan profesional! Sudah 3 project kami kerjakan bersama tim ini."
  },
  {
    name: "Siti Alifah",
    role: "Owner BatikNu",
    photo: "https://i.imgur.com/7cMGF0Y.jpg",
    quote: "Terima kasih sudah bantu saya punya website toko online yang menarik dan mudah digunakan!"
  }
];

// Ambil elemen DOM
let current = 0;
const card = document.getElementById("testimonialCard");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Fungsi untuk menampilkan testimoni berdasarkan index
function showTestimonial(index) {
  const { name, role, photo, quote } = testimonialData[index];
  card.innerHTML = `
    <img src="${photo}" alt="${name}">
    <h3>${name}</h3>
    <h4>${role}</h4>
    <p>"${quote}"</p>
  `;
}

// Event untuk tombol Previous
prevBtn.addEventListener("click", () => {
  current = (current - 1 + testimonialData.length) % testimonialData.length;
  showTestimonial(current);
});

// Event untuk tombol Next
nextBtn.addEventListener("click", () => {
  current = (current + 1) % testimonialData.length;
  showTestimonial(current);
});

// Tampilkan pertama kali saat load
showTestimonial(current);
