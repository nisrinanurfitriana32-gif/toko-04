
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const cartCount = document.getElementById("cart-count");

let jumlahKeranjang = 0;

menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

const menuLinks = navbar.querySelectorAll("a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
});

const tombolKeranjang = document.querySelectorAll(".add-cart");

tombolKeranjang.forEach(function (button) {

    button.addEventListener("click", function () {

        jumlahKeranjang++;

        cartCount.textContent = jumlahKeranjang;

        const namaGaun = button.dataset.name;

        alert(namaGaun + " berhasil ditambahkan ke keranjang!");

    });
    const formSaran = document.getElementById("formSaran");

formSaran.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const saran = document.getElementById("saran").value;

    const pesan = document.getElementById("pesanSaran");

    pesan.textContent = "Terima kasih! Saran Anda berhasil dikirim.";

    console.log("Email pelanggan:", email);
    console.log("Saran pelanggan:", saran);

    formSaran.reset();
});

});
