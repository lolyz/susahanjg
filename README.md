# RatuFileSaver2
Bot menghasilkan tautan yang dapat dibagikan di dalam telegram untuk video, photo, dokumen dan bisa berbagi secara grup.
<hr>

Instalasi yang dibutuhkan
1. NGINX</br>
2. SSL</br>
3. Domain</br>
4. NodeJS</br>
5. PM2 <code>npm install -g pm2</code></br>
6. NPM yang dibutuhkan. Jangan lupa pasang di tempat package.json disimpan difolder BOT</br>
<code>npm install filsaverobot</code></br>
<code>npm install dotenv</code></br>
<code>npm install mongodb</code></br>
<code>npm install nodemon</code></br>
<code>npm install telegraf</code></br>
<hr>

Detail yang diperlukan.

<b>~ WINDOWS ~</b></br>
<b>LANGKAH 1</b></br>
- NGINX</br>
Sebelum anda pasang BOT download dulu nginx versi windows <a href="https://nginx.org/en/download.html">di sini</a>.</br>
Setelah download selesai extraxt zip dan pindahkan ke folder C:\ dan jangan lupa rename nama folder nginxnya menjadi "nginx". Jalankan nginxnya di cmd dengan perintah berikut.

    C:\nginx\.\nginx.exe -s start

<b>LANGKAH 2</b></br>
- SSL</br>
Buat terlebih dahulu SSL dan pastikan Anda punya ip publik dan domain yang terhubung ke server dan bisa diakses darimana saja.</br>

Karena servernya Windows kami menyarankan Anda membuat ssl di web ini <a href="https://punchsalad.com/ssl-certificate-generator/">Free SSL Certificate Generator</a> dan tutorial ada disini <a href="https://punchsalad.com/ssl-certificate/install-lets-encrypt-godaddy/#chapter2">Tutorial</a>. Lewatkan pada bagian tutorial cpanel, download file yang dibutuhkan disana dan taruh di folder C:\nginx\html lalu akses tautan vertifikasi untuk mendaptkan .crt dan .key. dan simpan ke folder C:\nginx\ssl.</br>

Buka file di folder nginx-conf yang sudah Anda unduh lalu buka lagi folder windows dan buka file bot.conf menggunakan editor di windows. Anda akan melihat kode dibawah, ganti tulisan <b>MY_DOMAIN</b> dengan domain Anda, karena kami sudah menempatkan PATH folder ssl maka tinggal Anda taruh saja sesuai dengan PATH yang kami tulis.


    server {
        listen 80;
        server_name MY_DOMAIN;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl;
        server_name MY_DOMAIN;

        error_log C:/nginx/bot.error.log error;

        ssl_session_timeout 5m;

        ssl_certificate C:/nginx/html/ssl/ca-bundle.crt;
        ssl_certificate_key C:/nginx/html/ssl/private-key.key;

        location / {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            proxy_pass http://localhost:8443;
        }
    }


Jika sudah di ganti pindahkan semua isi yang ada di folder windows tadi ke folder C:\nginx\conf lalu di cmd ketik ini.
    
    C:\nginx\.\nginx.exe -s reload

<b>LANGKAH 3</b></br>
config.js</br>
Pemasangan ada di file config.js</br>

<code>DOMAIN</code> - Domain didapat dari saat anda setting nginx tadi.</br>
<code>PORT</code> - Port didapat dari saat anda setting nginx tadi.</br>
<code>TOKEN</code> - Dapatkan Token Bot dari Bot father.</br>
<code>ADMIN</code> - ID Akun Anda (jika Anda tidak dapat menemukannya menggunakan bot seperti @getmyid_bot).</br>
<code>Jika ada tambahan ADMIN1 dan ADMIN2 tulis sesuai contoh yang ada di code dan tinggal tambah angka di belakangnya</code>

    ADMIN: '',
    ADMIN1: '',
    ADMIN2: '',

<code>BOTUSERNAME</code> - Nama pengguna bot Anda tanpa '@' dan harus huruf kecil.</br>
<code>DB_URL</code> - Buat akun di https://www.mongodb.com/cloud/atlas , nama database - RatuMediaFile ,nama collection - RatuFileBackup.Klik Connect dan pilih 'Hubungkan aplikasi Anda'.copy tautan dan ganti "< password >" dengan kata sandi pengguna yang memiliki akses ke DB dan ganti "myFirstDatabase" untuk "RatuMediaFile". Kalau mau ubah sesuai keinginan nama databasenya ada di folder config.</br>
<code>LOG_CHANNEL</code> - buat saluran pribadi dan dapatkan ID saluran (jika Anda tidak dapat meneruskan ID saluran apa pun dari saluran ke @getidsbot itu mungkin terlihat seperti -1001234567899).</br>

<b>LANGKAH 4</b></br>
Pindahkan beberapa yang di folder BOT</br>
Pastikan ini pindah semua ke PATH C:\nginx\html\hooks\bot</br>
- database</br>
- config</br>
- package-lock.json</br>
- package.json</br>
- help.js</br>
- config.js</br>
- index.js</br>
<hr>

Jangan lupa gunakan perintah ini untuk jalankan BOTnya. Pastikan sudah ada di folder bot, kalau belum ketik <code>cd C:\nginx\html\hooks\bot pm2 start index.js --name ratufilesaver --watch --ignore-watch="node_modules"</code>
<hr>

<h1>Berikut adalah beberapa perintah dan penggunaan admin.</h1></br>

~ Bagaimana pengguna melarang, unban dan kick dari BOT dan Grup.
<code>/ban</code> userID caption jika ada.</br>
<code>/banchat</code> userID (pribadi).</br>
<code>/unban</code> userID.</br>
<code>/unbanchat</code> userID (pribadi).</br>
<code>/kick</code> userID.</br>
<b>Dapatkan UserID dari saluran log.</b></br>

~ Bagaimana cara menggunakan pin dan unpin di grup.</br>
<code>/pin</code> reply ke pesan yang mau di pin.</br>
<code>/unpin</code> reply ke pesan yang mau di unpin.</br>

~ Bagaimana cara kirim pesan ke pengguna dari grup.</br>
<code>/send</code> pesan. kirim pesan di grup.</br>

~ Bagaimana cara kirim pesan ke pengguna dari BOT.</br>
<code>/sendchat</code> userID pesan. kirim ke pengguna melalui BOT.</br>
<h2>Cara Menghapus File Dari Bot.</h2></br>
Anda dapat menghapus file 3 cara.</br>

  ⚫ Hapus file individual dengan file_id.

  ⚫ Hapus semua file Kirim oleh pengguna.

  ⚫ Hapus semua file Kirim ke BOT.

~ Hapus file individual dengan file_id.</br>
<code>/rem</code> file_id.</br>
<b>Ini akan menghapus file satu per satu saat Anda memberikan file_id, dapatkan file_id dari saluran log.</b></br>

~ Hapus file grup dengan mediaId.</br>
<code>/remgrp</code> mediaId.</br>
<b> Ini akan menghapus media dalam grup, dapatkan mediaId dari saluran log).</b></br>

~ Hapus semua file Kirim oleh pengguna.</br>
<code>/remall</code> userID.</br>
<b>Anda dapat menghapus semua file dikirim oleh pengguna tertentu jika pengguna mengirim konten atau spam yang kasar, dapatkan userid dari saluran log).</b>

~ Hapus semua file Kirim ke B0T.</br>
<code>/clear</code></br>
<b>Ini akan menghapus semua file yang dikirim ke BOT secara permanen).</b></br>

<h2>Kirim pesan ke pengguna</h2>

<code>/broadcast</code> Pesan Anda akan dikirim ke pengguna.</br>
<b>Anda dapat menyiarkan pesan teks ke pengguna Anda, pesan akan dikirim dari pengguna terakhir bergabung untuk pertama-tama bergabung dengan pengguna untuk mengurangi spam. Cobalah untuk tidak mengirim terlalu banyak pesan sekaligus jika Anda memiliki sejumlah besar pengguna).</b>

<h2>Cara Mengetahui Total Pengguna BOT.</h2>

<code>/stats</code></br>
<b>Anda akan mendapatkan total pengguna memulai BOT Anda, data waktu nyata akan diperbarui setelah siaran yang berhasil.</b>
<hr>

<b>Jika Anda ingin mendukung saya, ikuti saya di GitHub sebagai dukungan.</b>

//Update

HISTORY 8
1. Perbaikan penulisan URL gabung grup/channel tinggal tulis name-https://t.me/test

HISTORY 7
1. Perbaikan dalam list grup untuk melakukan perintah didalam grup.
2. Kirim media secara grup.
3. Hapus media secara grup.

HISTORY 6
1. Kirim pesan ke pengguna melalui BOT.

HISTORY 5
1. Kirim pesan ke pengguna melalui grup.

HISTORY 4
1. BOT mendukung kick, ban, unban dan ada pesan pribadi.
2. BOT mendukung pin dan unpin.

HISTORY 3
1. Perbaikan penulisan file_name.
2. Perbaikan pencarian media.

HISTORY 2
1. Function teks disederhanakan.
2. Mendeteksi jika belum ada nama akun akan dikosongkan.
3. Admin bisa menggunakan BOT tanpa masuk channel/grup.
4. Ada log channel untuk mengetahui siapa yang ngirim dan apa deskripsi filenya.

HISTORY 1
1. Ada join channel/grup terlebih dahulu saat start, pastikan id channel/grup di ganti pada index.js dan bot harus jadi admin di grup/channel.
2. Terdapat penambahan untuk menghilangkan null supaya tidak terlihat saat tampil.
3. Ada get ID untuk cek ID akun Anda.
4. Ada pesan bot belum dimasukkan ke channel/grup tujuan.
