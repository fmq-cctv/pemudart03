    const buttonShowMore = document.getElementById('show-more');
    const buttonShowLess = document.getElementById('show-less');
    const kgtn = document.querySelectorAll('.bngks-program');

    buttonShowMore.addEventListener('click', () => {
        kgtn.forEach((item) => {
            item.classList.add('visible'); // Tampilkan semua produk
        });
        buttonShowMore.style.display = 'none'; // Sembunyikan tombol "Lihat Lebih Banyak"
        buttonShowLess.style.display = 'block'; // Tampilkan tombol "Lihat Lebih Sedikit"
    });

    buttonShowLess.addEventListener('click', () => {
        kgtn.forEach((item, index) => {
            if (index >= 1) {
                item.classList.remove('visible'); // Sembunyikan produk tambahan
            }
        });
        buttonShowMore.style.display = 'block'; // Tampilkan tombol "Lihat Lebih Banyak"
        buttonShowLess.style.display = 'none'; // Sembunyikan tombol "Lihat Lebih Sedikit"
    });