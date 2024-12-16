const text2 = "Nabillatul Syahbandi Ardyansal"; // Teks yang akan ditampilkan
let index = 0;

function type() {
    if (index < text2.length) {
        document.getElementById("typing").innerHTML += text2.charAt(index);
        index++;
        setTimeout(type, 100); // Kecepatan mengetik (dalam milidetik)
    }
}

window.onload = function() {
    type(); // Memulai animasi mengetik saat halaman dimuat
};