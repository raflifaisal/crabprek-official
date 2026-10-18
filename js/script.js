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