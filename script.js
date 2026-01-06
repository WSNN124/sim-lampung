const namaWilayah = document.getElementById("nama-wilayah");
const deskripsiWilayah = document.getElementById("deskripsi-wilayah");
const wilayahContainer = document.getElementById("wilayah-container");
// Data wilayah dan deskripsinya
const wilayahData = {
  lampung_timur: {
    nama: "Lampung Timur",
    deskripsi:
      "Lampung Timur adalah kabupaten di Provinsi Lampung, Indonesia. Ibu kotanya adalah Kecamatan Sukadana. Kabupaten Lampung Timur memiliki total luas wilayah 5.325,03 km² dan jumlah penduduk sebanyak 1.101.977 jiwa (2021).Kabupaten ini memiliki semboyan 'Bumei Tuwah Bepadan'. Sebelumnya, Kabupaten Lampung Timur bagian dari Kabupaten Lampung Tengah. Lampung Timur terdapat Taman Nasional Way Kambas yaitu taman nasional berupa kawasan wilayah dataran rendah dan pesisir. Taman nasional ini terdapat gajah sumatra.",
  },
  lampung_utara: {
    nama: "Lampung Utara",
    deskripsi:
      "Kabupaten Lampung Utara adalah kabupaten di Provinsi Lampung, Indonesia. Ibu kota kabupaten ini terletak di Kecamatan Kotabumi. Jumlah penduduk kabupaten Lampung Utara pada pertengahan tahun 2024 sebanyak 672.594 jiwa, dengan kepadatan 234 jiwa/km2. Kabupaten ini sebelumnya merupakan salah satu kabupaten terluas dan terbesar di Provinsi Lampung yang sekarang meliputi Kabupaten Lampung Utara sebagai induknya, Kabupaten Way Kanan, Kabupaten Lampung Barat yang kemudian memekarkan wilayahnya menjadi Kabupaten Pesisir Barat, dan Kabupaten Tulang Bawang yang kemudian memekarkan wilayahnya menjadi Kabupaten Tulang Bawang Barat dan Kabupaten Mesuji.",
  },
  way_kanan: {
    nama: "Way Kanan",
    deskripsi:
      "Kabupaten Way Kanan adalah kabupaten di provinsi Lampung, Indonesia. Kabupaten Way Kanan merupakan salah satu pemekaran dari Kabupaten Lampung Utara. Ibu kota Way Kanan berada di Blambangan Umpu. Kabupaten Way Kanan berbatasan langsung dengan tiga kabupaten di provinsi Sumatera Selatan, yakni Kabupaten Ogan Komering Ulu Timur, Kabupaten Ogan Komering Ulu Selatan, dan Kabupaten Ogan Komering Ilir. Pada pertengahan 2024, jumlah penduduk kabupaten ini sebanyak 493.071 jiwa.",
  },
  tulang_bawang_barat: {
    nama: "Tulang Bawang Barat",
    deskripsi:
      "Kabupaten Tulang Bawang Barat adalah kabupaten di Provinsi Lampung, Indonesia. Ibu kotanya adalah Panaragan. Kabupaten ini diresmikan oleh Menteri Dalam Negeri Indonesia, Mardiyanto, pada 29 Oktober 2008, sebagai pecahan dari Kabupaten Tulang Bawang. Kabupaten Tulang Bawang Barat terdiri dari 9 kecamatan, 3 kelurahan, dan 93 tiyuh (desa). Pada tahun 2017, jumlah penduduknya mencapai 268.119 jiwa dengan luas wilayah 1.201,00 km² dan sebaran penduduk 223 jiwa/km².",
  },
  mesuji: {
    nama: "Mesuji",
    deskripsi:
      "Mesuji adalah kabupaten di Provinsi Lampung, Indonesia. Ibu kotanya adalah Wiralaga Mulya. Kabupaten Mesuji terletak di ujung timur laut wilayah Provinsi Lampung yang berbatasan langsung dengan Provinsi Sumatera Selatan. Mesuji merupakan kabupaten dengan jarak terjauh dari Kota Bandar Lampung yang merupakan ibukota Provinsi Lampung. Nama Mesuji diambil dari Sungai Mesuji yang membatasi wilayah Lampung dengan Sumatera Selatan. Kabupaten Mesuji berbatasan dengan Kecamatan Mesuji di Kabupaten Ogan Komering Ilir, Sumatera Selatan yang juga memakai nama sungai ini.",
  },
  tulang_bawang: {
    nama: "Tulang Bawang",
    deskripsi:
      "Kabupaten Tulang Bawang adalah kabupaten di Provinsi Lampung, Indonesia. Ibu kotanya adalah Kecamatan Menggala. Kabupaten Tulang Bawang memiliki luas wilayah sebesar 3.466,32 km, dengan penduduk sebanyak 433.570 jiwa (2024). Secara umum wilayah Kabupaten Tulang Bawang berada di dataran rendah. Ketinggian wilayah ini bervariasi antara 2 Mdpl s/d 44 Mdpl. Nama Tulang Bawang diambil dari Sungai Tulang Bawang yang mengalir di wilayah ini dan melintasi ibukota kabupaten di Menggala. Komoditas perikanan tambak berada di wilayah pesisir seperti kawasan Bumi Dipasena, Kecamatan Rawajitu Timur. Pada masa kejayaannya di tahun 1990an, Bumi Dipasena dikenal sebagai salah satu penghasil udang terbesar di Asia Tenggara.",
  },
  lampung_tengah: {
    nama: "Lampung Tengah",
    deskripsi:
      "Lampung Tengah merupakan salah satu kabupaten yang ada di Provinsi Lampung, Indonesia. Kabupaten ini beribu kota di kecamatan Gunung Sugih. Kabupaten ini memiliki luas wilayah 4.559,57 km² dan jumlah penduduk sebanyak 1.373.773 jiwa (30 Juni 2023). Lampung Tengah merupakan salah satu kabupaten yang terkurung daratan (landlocked) di provinsi Lampung. Kabupaten Lampung Tengah terletak sekitar 57,85 kilometer dari Kota Bandar Lampung. Kabupaten Lampung Tengah dulunya merupakan kabupaten terluas kedua di Lampung, hingga diterbitkan UU Nomor 12 tahun 1999 yang memecah kabupaten ini menjadi beberapa daerah lain sehingga luasnya menjadi lebih kecil. Kabupaten ini dulunya meliputi Kabupaten Lampung Tengah, Kabupaten Lampung Timur, dan Kota Metro. Kota Metro sendiri adalah ibukota Lampung Tengah sebelum pemekaran. Salah satu komoditas Lampung Tengah adalah gula karena di wilayah ini beroperasi beberapa perusahaan besar seperti PT. Gunung Madu Plantation (GMP) dan PT. Gula Putih Mataram yang mengelola ribuan hektar kebun tebu di Lampung Tengah. PT. GMP adalah pelopor produksi gula di luar Pulau Jawa pada tahun 1979 untuk memenuhi kebutuhan gula yang semakin meningkat",
  },
  metro: {
    nama: "Metro",
    deskripsi:
      "Kota Metro adalah kota di Provinsi Lampung, Indonesia. Kota ini berjarak sekitar 52 km dari ibu kota provinsi, yaitu Kota Bandar Lampung, serta merupakan kota terbesar kedua di Provinsi Lampung. Kota Metro masuk dalam daftar 10 kota di Indonesia dengan biaya hidup terendah ke-9 di Indonesia serta urutan kedua di Pulau Sumatra berdasarkan Survei BPS tahun 2017. Kota Metro juga ditetapkan sebagai Pusat Kegiatan Wilayah (PKW) karena memiliki potensi dan kondisi yang besar, serta didukung oleh sarana dan prasarana yang memadai. Kota Metro juga diharapkan dapat mengurangi beban Kota Bandar Lampung sebagai ibu kota Provinsi Lampung.Nantinya Kota Metro menjadi bagian dari target cetak biru Kementerian Pekerjaan Umum Dan Perumahan Rakyat Republik Indonesia dalam kawasan strategis pengembangan kota metropolitan Bandar Lampung Raya.",
  },
  tanggamus: {
    nama: "Tanggamus",
    deskripsi:
      "Kabupaten Tanggamus adalah salah satu kabupaten yang terletak di Provinsi Lampung, Indonesia. Ibu kota Tanggamus berada di Kecamatan Kota Agung. Kabupaten Tanggamus memiliki luas wilayah 4.654,98 Km² dengan jumlah penduduk sebesar 638.652 jiwa pada pertengahan tahun 2024 dan kepadatan penduduk 225 jiwa/km². Kabupaten Tanggamus diresmikan berdasarkan Undang-Undang Nomor 2 Tahun 1997, tanggal 21 Maret 1997. Kabupaten Tanggamus tepatnya terletak di Pekon Kampung Baru Kecamatan Kota Agung Timur.",
  },
  pesawaran: {
    nama: "Pesawaran",
    deskripsi:
      "Kabupaten Pesawaran adalah kabupaten di Provinsi Lampung, Indonesia. Ibu kota Kabupaten Pesawaran adalah Gedong Tataan. Kabupaten ini diresmikan pada tanggal 2 November 2007 berdasarkan Undang-Undang Republik Indonesia Nomor 33 Tahun 2007 tentang Pembentukan Kabupaten Pesawaran. Semula kabupaten ini merupakan bagian dari Kabupaten Lampung Selatan. Daerah ini kaya akan sumberdaya alam pertanian, perkebunan dan kehutanan. Jumlah penduduk kabupaten Pesawaran pada akhir tahun 2024 sebanyak 501.047 jiwa.",
  },
  pringsewu: {
    nama: "Pringsewu",
    deskripsi:
      "Kabupaten Pringsewu adalah kabupaten di Provinsi Lampung, Indonesia. Ibu Kota Pringsewu adalah Kecamatan Pringsewu. Kabupaten ini disahkan dalam Rapat Paripurna DPR tanggal 29 Oktober 2008 yang merupakan hasil pemekaran dari Kabupaten Tanggamus. Pringsewu terletak sekitar 37 kilometer sebelah Barat dari Kota Bandar Lampung yang merupakan Ibu kota provinsi, 270 kilometer Barat Laut Jakarta, serta 330 kilometer Barat Daya Kota Palembang. Hingga akhir Juni tahun 2023, jumlah penduduk di kabupaten Pringsewu sebanyak 433.624 jiwa.",
  },

  lampung_barat: {
    nama: "Lampung Barat",
    deskripsi:
      "Kabupaten Lampung Barat adalah kabupaten di Provinsi Lampung, Indonesia. Ibu kotanya adalah di Liwa, yang meliputi wilayah kecamatan Balik Bukit. Kabupaten ini dibentuk berdasarkan Undang-Undang Nomor 6 Tahun 1991 tanggal 16 Agustus 1991 yang merupakan hasil pemekaran dari Kabupaten Lampung Utara. Pada pertengahan tahun 2024, jumlah penduduk Lampung Barat sebanyak 312.376 jiwa, dengan kepadatan 249 jiwa/km2. Kabupaten ini dominan dengan perbukitan serta memiliki perkebunan kopi yang sangat luas. Daerah pegunungan yang merupakan punggung Bukit Barisan di kawasan Batu Brak, ditempati oleh vulkanik quarter dari beberapa formasi. Daerah ini berada pada ketinggian 500 - > 1000 mdpl. Daerah ini dilalui oleh Belahan Semaka, dengan lebar zona sebesar ± 20 Km. Pada beberapa tempat salah satunya di Kecamatan Suoh, Bandar Negeri Suoh, Lampung Barat dijumpai beberapa aktivitas vulkanik dan pemunculan panas bumi.",
  },

  pesisir_barat: {
    nama: "Pesisir Barat",
    deskripsi:
      "Kabupaten Pesisir Barat merupakan salah satu kabupaten yang terletak di Provinsi Lampung, Indonesia. Ibu kota Kabupaten Pesisir Barat adalah Krui. Kabupaten Pesisir Barat disahkan berdasarkan Undang-undang Nomor 22 Tahun 2012 tentang Pembentukan Kabupaten Pesisir Barat Provinsi Lampung pada tanggal 25 Oktober 2012 dan kemudian diresmikan pada tanggal 22 April 2013.Sehingga, kabupaten ini merupakan kabupaten termuda di Provinsi Lampung. Pada tahun 2020, jumlah penduduk Kabupaten Pesisir Barat dihuni sedikitnya oleh 164.453 jiwa. Wilayah Pesisir Barat terdiri dari beberapa bagian. Di wilayah timur kabupaten ini terdapat Taman Nasional Bukit Barisan Selatan. Sedangkan di wilayah baratnya adalah lautan dengan pantai yang indah dan masih asri seperti Pantai Batu Tihang. Beberapa pantai seperti Tanjung Setia memiliki ombak yang tinggi sehingga menjadi lokasi ajang selancar internasional tahunan seperti Krui Pro yang diadakan World Surf League.",
  },
  lampung_selatan: {
    nama: "Lampung Selatan",
    deskripsi:
      "Kabupaten Lampung Selatan adalah kabupaten di Provinsi Lampung, Indonesia. Ibu kota kabupaten ini terletak di kecamatan Kalianda. Kabupaten ini memiliki luas wilayah 2.109,74 km² dan penduduk sebanyak 1.124.683 jiwa (2024), dengan kepadatan 530 jiwa/km². Di bagian Selatan wilayah kabupaten Lampung Selatan yang juga ujung Pulau Sumatra terdapat sebuah Pelabuhan Penyeberangan Bakauheni, yang merupakan tempat transit penduduk dari Pulau Jawa ke Sumatra dan sebaliknya. Dengan demikian Pelabuhan Bakauheni merupakan pintu gerbang Pulau Sumatra bagian Selatan.[10] Jarak antara Pelabuhan Bakauheni (Lampung Selatan) dengan Pelabuhan Merak (Provinsi Banten) kurang lebih 30 kilometer, dengan waktu tempuh kapal penyeberangan sekitar 1,5 jam.",
  },
  bandar_lampung: {
    nama: "Bandar Lampung",
    deskripsi:
      "Kota Bandar Lampung (sebelumnya bernama Tanjungkarang-Telukbetung) adalah sebuah kota sekaligus menjadi ibu kota provinsi di Provinsi Lampung, Indonesia. Jumlah penduduk Kota Bandar Lampung pada pertengahan tahun 2024 sebanyak 1.073.451 jiwa. Dengan kepadatan 5.400/km², Kota Bandar Lampung merupakan salah satu kota terpadat di Pulau Sumatra. Secara geografis, kota ini merupakan gerbang utama Pulau Sumatra, tepatnya kurang lebih 165 km sebelah barat laut Jakarta, memiliki andil penting dalam jalur transportasi darat dan aktivitas pendistribusian logistik dari Pulau Jawa menuju Pulau Sumatra maupun sebaliknya.",
  },
};

// Fungsi untuk memperbarui informasi wilayah

const pathPeta = document.querySelectorAll("#petaWilayah path");

pathPeta.forEach((path) => {
  path.addEventListener("click", () => {
    const wilayahId = path.id;
    if (wilayahData[wilayahId]) {
      namaWilayah.textContent = wilayahData[wilayahId].nama;
      deskripsiWilayah.textContent = wilayahData[wilayahId].deskripsi;
    }
  });
});

// Sidebar Kanan Toggle
const sideBarRightToggle = document.querySelector("#sidebar-right-toggle");
const sideBarRight = document.querySelector("#sidebar-right");
const overlay = document.getElementById("overlay");

sideBarRightToggle.addEventListener("click", function () {
  sideBarRight.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});

overlay.addEventListener("click", (e) => {
  if (
    !sideBarRightToggle.contains(e.target) &&
    !sideBarRight.contains(e.target)
  ) {
    sideBarRight.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
});

// Sidebar Kiri Toggle
const sideBarLeftToggle = document.querySelector("#sidebar-left-toggle");
const sideBarLeft = document.querySelector("#sidebar-left");

sideBarLeftToggle.addEventListener("click", function () {
  sideBarLeft.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});

overlay.addEventListener("click", (e) => {
  if (
    !sideBarLeftToggle.contains(e.target) &&
    !sideBarLeft.contains(e.target)
  ) {
    sideBarLeft.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
});
// Navbar Toggle
const headerToggle = document.querySelector("#header-toggle");
const header = document.querySelector("#header");

headerToggle.addEventListener("click", function () {
  header.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});

overlay.addEventListener("click", (e) => {
  if (!headerToggle.contains(e.target) && !header.contains(e.target)) {
    header.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
});

const homeToggle = document.querySelectorAll(".nav-toggle");

homeToggle.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    const targetId = toggle.dataset.target;
    const menu = document.getElementById(targetId);
    if (!menu) return;

    if (window.innerWidth < 1024) {
      e.preventDefault();

      menu.classList.toggle("max-h-0");
      menu.classList.toggle("max-h-200");
    }

    document.querySelectorAll(".nav-menu").forEach((m) => {
      if (m !== menu) {
        m.classList.remove("open");
        m.classList.remove("max-h-200");
        m.classList.add("max-h-0");
      }
    });

    menu.classList.toggle("open");
  });
});
