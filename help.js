module.exports.bothelp = `Halo, kami adalah BOT File Saver. Kami akan terus memperbarui BOT kami, jika kalian menyukainya silakan <b>Sewa BOT</b>.`;

module.exports.botcommand = `<h1>Berikut adalah beberapa perintah dan penggunaan admin.</h1>

~ Bagaimana pengguna melarang, unban dan kick dari BOT dan group.
<b>/ban</b> userID caption jika ada.
<b>/banchat</b> userID (pribadi).
<b>/unban</b> userID.
<b>/unbanchat</b> userID (pribadi).
<b>/kick</b> userID.
<b>Dapatkan UserID dari saluran log.</b>

~ Bagaimana cara menggunakan pin dan unpin di group.
<b>/pin</b> reply ke pesan yang mau di pin.
<b>/unpin</b> reply ke pesan yang mau di unpin.

~ Bagaimana cara kirim pesan ke pengguna dari group.
<b>/send</b> pesan. kirim pesan di group.

~ Bagaimana cara kirim pesan ke pengguna dari BOT.
<b>/sendchat</b> userID pesan. kirim ke pengguna melalui BOT.
<b>Cara Menghapus File Dari Bot.</b>
Anda dapat menghapus file 3 cara.

  ⚫ Hapus file individual dengan file_id.

  ⚫ Hapus semua file Kirim oleh pengguna.

  ⚫ Hapus semua file Kirim ke BOT.

~ Hapus file individual dengan file_id.
<b>/rem</b> file_id.
<b>Ini akan menghapus file satu per satu saat Anda memberikan file_id, dapatkan file_id dari saluran log.</b>

~ Hapus file group dengan mediaId.
<b>/remgrp</b> mediaId.
<b>Ini akan menghapus media dalam group, dapatkan mediaId dari saluran log).</b>

~ Hapus semua file Kirim oleh pengguna.
<b>/remall</b> userID.
<b>Anda dapat menghapus semua file dikirim oleh pengguna tertentu jika pengguna mengirim konten atau spam yang kasar, dapatkan userid dari saluran log).</b>

~ Hapus semua file Kirim ke B0T.
<b>/clear</b>
<b>Ini akan menghapus semua file yang dikirim ke BOT secara permanen).</b>

<b>Kirim pesan ke pengguna</b>

<b>/broadcast</b> Pesan Anda akan dikirim ke pengguna.
<b>Anda dapat menyiarkan pesan teks ke pengguna Anda, pesan akan dikirim dari pengguna terakhir bergabung untuk pertama-tama bergabung dengan pengguna untuk mengurangi spam. Cobalah untuk tidak mengirim terlalu banyak pesan sekaligus jika Anda memiliki sejumlah besar pengguna).</b>

<b>Cara Mengetahui Total Pengguna BOT.</b>

<b>/stats</b>
<b>Anda akan mendapatkan total pengguna memulai BOT Anda, data waktu nyata akan diperbarui setelah siaran yang berhasil.</b>
`;

module.exports.sewabot = `<u>Anda butuh BOT File Saver, silakan cek harga dibawah</u>
\n<u>HARGA</u>\nRp 60.000 - BULAN
\n<u>KEUNTUNGAN</u>\n1. Menggunanakan database dengan kapasitas unmetered.\n2. Menggunakan server terbaik di Singapura.\n3. Ketika server gangguan BOT bisa jalan otomatis.\n4. Jika ada masalah pada BOT team kami siap bantu.
\n<u>Fitur</u>\n1. Bisa ban, unban, kick di grup maupun chat BOT.\n2. Bisa send chat ke pengguna di grup maupun chat BOT.\n3. Ada statistik.\n4. Bisa hapus media satu persatu.\n5. Bisa hapus media secara album.\n6. Bisa kirim media satu persatu atau secara album.\n7. Ada join channel saat belum gabung atau saat maksa ngirim media.\n8. Jika BOT belum masuk Group/Channel akan ada informasi BOT belum masuk Group/Channel.
\nSilakan hubungi <a href="https://t.me/sorahearts">Team Support</a> untuk mendapatkan layanan ini.
`;

//module.exports.install = `Silakan pilih cara install nya, bisa Heroku dan bisa komputer sendiri.`;

//module.exports.botinstall1 = `<u>BOT akan memberitahu Anda cara install</u>
//\nDownload dulu file nya <a href='https://github.com/BimoSora/RatuFileSaver'>DI SINI</a>
//\n<a href='https://heroku.com/deploy?template=https://github.com/BimoSora/RatuFileSaver'>TEMPLATE</a>\nGanti tautan dengan template github Anda.
//\n<a href='https://youtu.be/zw_ijvhzomI'>Klik di sini untuk menonton cara meng-host</a>
//\n<b>~ Detail yang diperlukan ~</b>\n<b>TOKEN</b> - Dapatkan Token BOT dari BOT father.\n<b>DOMAIN</b> - Sama dengan nama aplikasi yang Anda masukkan di Heroku.\n<b>ADMIN</b> - ID Akun Anda (jika Anda tidak dapat menemukannya menggunakan BOT seperti @getmyid_BOT).\n<b>Jika ada tambahan ADMIN1 dan ADMIN2 tulis sesuai contoh yang ada di config Heroku dan tinggal kasih angka di belakangnya</b>\n<b>BOTUSERNAME</b> - Nama pengguna BOT Anda tanpa '@'.\n<b>DB_URL</b> - Buat akun di <a href='https://www.mongodb.com/cloud/atlas'>MongoDB Atlas</a> , nama database - RatuMediaFile ,nama collection - RatuFileBackup.Klik Connect dan pilih 'Hubungkan aplikasi Anda'.copy tautan dan ganti 'password' dengan kata sandi pengguna yang memiliki akses ke DB dan ganti 'myFirstDatabase' untuk 'RatuMediaFile'. Kalau mau ubah sesuai keinginan nama databasenya ada di folder config.\n<b>LOG_CHANNEL</b> - buat saluran pribadi dan dapatkan ID saluran (jika Anda tidak dapat meneruskan ID saluran apa pun dari saluran ke @getidsBOT itu mungkin terlihat seperti -1001234567899).
//`;

//module.exports.botinstall2 = `<u>BOT akan memberitahu Anda cara install</u>
//\nDownload dulu file nya <a href='https://github.com/BimoSora/RatuFileSaver2'>DI SINI</a>
//\nInstalasi yang dibutuhkan\nNodeJS\nPM2 <b>npm install -g pm2</b>\nNPM yang dibutuhkan. Jangan lupa pasang di tempat package.json disimpan difolder BOT\n1. npm install filsaveroBOT\n2. npm install dotenv\n3. npm install mongodb\n4. npm install nodemon\n5. npm install telegraf
//\n<b>~ Detail yang diperlukan ~</b>\nPemasangan ada di file config.js\n<b>TOKEN</b> - Dapatkan Token BOT dari BOT father.\n<b>ADMIN</b> - ID Akun Anda (jika Anda tidak dapat menemukannya menggunakan BOT seperti @getmyid_BOT).\n<b>Jika ada tambahan ADMIN1 dan ADMIN2 tulis sesuai contoh yang ada di b dan tinggal tambah angka di belakangnya</b>\n<b>BOTUSERNAME</b> - Nama pengguna BOT Anda tanpa '@'.\n<b>DB_URL</b> - Buat akun di <a href='https://www.mongodb.com/cloud/atlas'>MongoDB Atlas</a> , nama database - RatuMediaFile ,nama collection - RatuFileBackup.Klik Connect dan pilih 'Hubungkan aplikasi Anda'.copy tautan dan ganti 'password' dengan kata sandi pengguna yang memiliki akses ke DB dan ganti 'myFirstDatabase' untuk 'RatuMediaFile'. Kalau mau ubah sesuai keinginan nama databasenya ada di folder config.\n<b>LOG_CHANNEL</b> - buat saluran pribadi dan dapatkan ID saluran (jika Anda tidak dapat meneruskan ID saluran apa pun dari saluran ke @getidsBOT itu mungkin terlihat seperti -1001234567899).
//\nJangan lupa gunakan perintah ini untuk jalankan BOTnya. Pastikan sudah ada di folder BOT, kalau belum ketik cd /namafolder <b>pm2 start index.js --name ratufilesaver --watch --ignore-watch="node_modules"</b>
//`;
