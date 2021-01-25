exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar aine|22*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting!`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
「 *AINE BOT* 」

◪ *INFO DEVELOPER*
  ❏ Nama: Muhammad Ridwan Reynaldy
  ❏ Ig: https://instagram.com/anemio999
  ❏ Fb: https://facebook.com/ridwan228
  ----------------------------------
◪ *INFO AINEBOT*
  ❏ Nama: AINEBOT 
  ❏ Nomor: wa.me/6289654360447
  ❏ Nomor: wa.me/12022926988
  ❏ Fb: https://facebook.com/ainneboot
  ----------------------------------
◪ *YOUR INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Nama: ${pushname}
  ❏ Uang mu : Rp${uangku}
  ❏ Nomer: ${sender.split("@")[0]}
  ❏ XP: ${getLevelingXp(sender)}/${reqXp}
  ❏ Level: ${getLevelingLevel(sender)}
  ❏ User register : ${_registered.length}

            *Rules* - *Simple*
▬▭▬▭▬▭▬▭▬▭▬▭▬
  ❏ *Spam : Auto Block!*
  ❏ *Beri Jeda 5detik Saat Menggunakannya!!*
  ❏ *Bug/Error Harap Cht Owner!*
  ❏ *Untuk Memastikan Bot Off Atau On*
  ❏ *Ketik ${prefix}bot*
  ❏ *Harap Sabar Dengan Bug²nya!*
  ❏ *Gunakan Bot Sebaik-baiknya!*
▬▭▬▭▬▭▬▭▬▭▬▭▬

◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}snk
  ├─ ❏ ${prefix}lpr 
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}gcainebot
◪ *MAKER*
  │
  ├─ ❏ ${prefix}nulis
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  ├─ ❏ ${prefix}toimg
  ├─ ❏ ${prefix}bplogo
  ├─ ❏ ${prefix}swlogo
  ├─ ❏ ${prefix}swlogo2
  ├─ ❏ ${prefix}text3d
  ├─ ❏ ${prefix}thunder
  ├─ ❏ ${prefix}glitch
  ├─ ❏ ${prefix}cloudsky
  ├─ ❏ ${prefix}quotemaker
  ├─ ❏ ${prefix}blood
  ├─ ❏ ${prefix}realcloud
  ├─ ❏ ${prefix}metaldark
  ├─ ❏ ${prefix}dropwater
  ├─ ❏ ${prefix}phlogo
  ├─ ❏ ${prefix}grenneon
  ├─ ❏ ${prefix}neontext
  ├─ ❏ ${prefix}toxic
  ├─ ❏ ${prefix}sumery
  ├─ ❏ ${prefix}firework
  ├─ ❏ ${prefix}lava
  ├─ ❏ ${prefix}vinta
  └─ ❏ ${prefix}summer
◪ *MEDIA*
  │
  ├─ ❏ ${prefix}beritahoax
  ├─ ❏ ${prefix}jadwaltvnow
  └─ ❏ ${prefix}trendtwit
◪ *OTHER FITUR*
  │
  ├─ ❏ ${prefix}ssweb
  ├─ ❏ ${prefix}hilih [teks]
  ├─ ❏ ${prefix}alay [teks]
  ├─ ❏ ${prefix}wiki [teks]
  ├─ ❏ ${prefix}kbbi [teks]
  ├─ ❏ ${prefix}map [teks]
  ├─ ❏ ${prefix}fml
  ├─ ❏ ${prefix}lirik [teks]
  ├─ ❏ ${prefix}brainly [teks]
  ├─ ❏ ${prefix}chord [teks]
  ├─ ❏ ${prefix}katabijak
  ├─ ❏ ${prefix}pantun
  ├─ ❏ ${prefix}faktaunik
  ├─ ❏ ${prefix}tafsirmimpi
  ├─ ❏ ${prefix}apkpure [teks]
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}animequotes
  └─ ❏ ${prefix}artinama [teks]
◪ *KERANG AJAIB*
  │
  ├─ ❏ ${prefix}gantengcek
  ├─ ❏ ${prefix}cantikcek
  ├─ ❏ ${prefix}watak
  ├─ ❏ ${prefix}hobby
  ├─ ❏ ${prefix}apakah
  ├─ ❏ ${prefix}kapankah
  ├─ ❏ ${prefix}rate
  └─ ❏ ${prefix}bisakah
◪ *DOWNLOADER*
  │
  ├─ ❏ ${prefix}pinterest [teks]
  ├─ ❏ ${prefix}ytmp3 [link]
  ├─ ❏ ${prefix}ytmp4 [link]
  ├─ ❏ ${prefix}fototiktok
  └─ ❏ ${prefix}joox [teks]
◪ *MEME*
  │
  ├─ ❏ ${prefix}meme ❌
  └─ ❏ ${prefix}memeindo ❌
◪ *RANDOM PICTUE*
  │ *ANIME*
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}neko
  ├─ ❏ ${prefix}waifu
  ├─ ❏ ${prefix}animecry
  ├─ ❏ ${prefix}animehug
  ├─ ❏ ${prefix}osakana
  ├─ ❏ ${prefix}naruto
  ├─ ❏ ${prefix}anime
  ├─ ❏ ${prefix}husbu
  ├─ ❏ ${prefix}animegirl
  ├─ ❏ ${prefix}animeboy
  ├─ ❏ ${prefix}nekonime
  │
  │ *RANDOM KPOP*
  ├─ ❏ ${prefix}randomkpop
  │
  │ *CARTOON*
  ├─ ❏ ${prefix}doraemon
  ├─ ❏ ${prefix}pokemon
  │
  │ *ANIMAL*
  ├─ ❏ ${prefix}anjing
  ├─ ❏ ${prefix}kucing
  ├─ ❏ ${prefix}hamster
  ├─ ❏ ${prefix}kelinci
  │
  │ *TRANSPORT*
  ├─ ❏ ${prefix}mobil
  ├─ ❏ ${prefix}motor
  ├─ ❏ ${prefix}sepeda
  │
  │ *AESTHETIC*
  ├─ ❏ ${prefix}aesthetic
  ├─ ❏ ${prefix}bluesky
  ├─ ❏ ${prefix}flower
  ├─ ❏ ${prefix}icecream
  ├─ ❏ ${prefix}pemandangan
  │
  │ *QUOTES*
  ├─ ❏ ${prefix}quotesid
  ├─ ❏ ${prefix}quotesen
  ├─ ❏ ${prefix}katakata
  ├─ ❏ ${prefix}motivasi
  ├─ ❏ ${prefix}kehidupan
  └─ ❏ ${prefix}islami
◪ *LIMIT*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}buylimit
  └─ ❏ ${prefix}dompet
◪ *GROUP*
  │
  ├─ ❏ ${prefix}promote [@tag]
  ├─ ❏ ${prefix}demote [@tag]
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}say [hello]
  ├─ ❏ ${prefix}grouplist
  ├─ ❏ ${prefix}add [62]
  ├─ ❏ ${prefix}kick [@tag]
  ├─ ❏ ${prefix}setname
  ├─ ❏ ${prefix}setdesc
  ├─ ❏ ${prefix}setpp
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}linkgc
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}grup [buka/tutup)
  ├─ ❏ ${prefix}welcome [1/0]
  ├─ ❏ ${prefix}nsfw [1/0]
  ├─ ❏ ${prefix}leveling [1/0]
  └─ ❏ ${prefix}simih [1/0]
◪ *SOUND*
  │
  ├─ ❏ ${prefix}play [teks]
  └─ ❏ ${prefix}tts
◪ *ISLAM*
  │
  └─ ❏ ${prefix}quran
◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk
  └─ ❏ ${prefix}igstalk
◪ *WIBU*
  │
  ├─ ❏ ${prefix}neonime
  ├─ ❏ ${prefix}wait
◪ *18+ Nsfw*
  |
  ├─ ❏ ${prefix}randomhentai
  └─ ❏ ${prefix}nsfwneko
◪ *FUN*
  │
  ├─ ❏ ${prefix}truth
  ├─ ❏ ${prefix}dare
  ├─ ❏ ${prefix}slap
  └─ ❏ ${prefix}simi
◪ *INFORMATION*
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  ├─ ❏ ${prefix}infogempa
  ├─ ❏ ${prefix}infocuaca
  ├─ ❏ ${prefix}infonomor
  └─ ❏ ${prefix}covid
◪ *OWNER*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}unblock
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}kickall
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}bcgc
  ├─ ❏ ${prefix}clone
  └─ ❏ ${prefix}clearall
◪ *OTHER*
  │
  ├─ ❏ ${prefix}send
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}qrcode
  ├─ ❏ ${prefix}afk
  └─ ❏ ${prefix}timer

◪ *POWERED BY AINEBOT*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
  ❏ Nama : ${pushname}
  ❏ Nomer : wa.me/${sender.split("@")[0]}
  ❏ Xp : ${getLevelingXp(sender)}
  ❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}`
}
 
exports.limitend = (pushname, prefix) => {
	return`*Maaf ${pushname} limit kamu sudah habis*\n*Ingin mendapatkan limit harap hubungi kami.*\n *Ketik ${prefix}owner`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level melalui group atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/eneble atau 0/diseble`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}`
}
