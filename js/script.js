  <script>
    feather.replace(); // Memunculkan ikon Feather

    // Logika Hamburger Menu
    const navbarNav = document.querySelector('.navbar-nav');
    const hamburger = document.querySelector('#hamburger-menu');

    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      navbarNav.classList.toggle('active'); // Menambahkan/menghapus class 'active'
    });

    // Menutup menu jika klik di luar
    document.addEventListener('click', function(e) {
      if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
      }
    });
  </script>
  // --- LOGIKA OPENING ANIMATION (PRELOADER) ---
// Menunggu sampai seluruh halaman (termasuk gambar) selesai dimuat
window.addEventListener('load', function() {
  
  // Memberikan waktu tambahan 2 detik agar pengunjung bisa melihat animasi kepiting
  setTimeout(function() {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('preloader-hidden');
  }, 2000); // Angka 2000 = 2 detik. Bisa Anda ubah sesuai selera (misal 3000 untuk 3 detik)

});