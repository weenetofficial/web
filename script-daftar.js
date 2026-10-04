// ===== SHARED JS FOR REGISTRATION PAGES =====

function toggleAddon(el) {
    el.classList.toggle('selected');
    const cb = el.querySelector('input[type="checkbox"]');
    cb.checked = !cb.checked;
}

function submitForm(e) {
    e.preventDefault();
    if (!document.getElementById('agree').checked) {
        alert('Harap setujui Syarat & Ketentuan terlebih dahulu.');
        return;
    }
    document.getElementById('successModal').classList.add('active');
}

function sendToWA() {
    const form = document.getElementById('regForm');
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (!document.getElementById('agree').checked) {
        alert('Harap setujui Syarat & Ketentuan terlebih dahulu.');
        return;
    }

    const paket = document.getElementById('paketNama').value;
    const harga = document.getElementById('paketHarga').value;
    const speed = document.getElementById('paketSpeed').value;
    const nama = document.getElementById('nama').value;
    const nik = document.getElementById('nik').value;
    const wa = document.getElementById('wa').value;
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value;
    const kelurahan = document.getElementById('kelurahan').value;
    const kecamatan = document.getElementById('kecamatan').value;
    const kota = document.getElementById('kota').value;
    const kodepos = document.getElementById('kodepos').value;
    const tanggal = document.getElementById('tanggal').value;
    const waktu = document.getElementById('waktu').value;
    const catatan = document.getElementById('catatan').value;

    const addons = [];
    document.querySelectorAll('.addon-item.selected input[type="checkbox"]').forEach(cb => {
        addons.push(cb.value);
    });

    let msg = `🌐 *PENDAFTARAN WEENET*\n\n`;
    msg += `📦 *Paket:* ${paket}\n`;
    msg += `⚡ *Kecepatan:* ${speed}\n`;
    msg += `💰 *Harga:* ${harga}\n\n`;
    msg += `👤 *DATA PELANGGAN*\n`;
    msg += `Nama: ${nama}\n`;
    msg += `NIK: ${nik}\n`;
    msg += `WhatsApp: ${wa}\n`;
    if (email) msg += `Email: ${email}\n`;
    msg += `\n📍 *ALAMAT PEMASANGAN*\n`;
    msg += `${alamat}\n`;
    msg += `Kel. ${kelurahan}, Kec. ${kecamatan}\n`;
    msg += `${kota}`;
    if (kodepos) msg += ` ${kodepos}`;
    msg += `\n`;
    if (addons.length > 0) {
        msg += `\n➕ *LAYANAN TAMBAHAN*\n`;
        addons.forEach(a => msg += `• ${a}\n`);
    }
    if (tanggal || waktu) {
        msg += `\n📅 *JADWAL PEMASANGAN*\n`;
        if (tanggal) msg += `Tanggal: ${tanggal}\n`;
        if (waktu) msg += `Waktu: ${waktu}\n`;
    }
    if (catatan) msg += `\n📝 *CATATAN*\n${catatan}\n`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/6285123117516?text=${encoded}`, '_blank');
}

// Close modal on outside click
document.getElementById('successModal').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('active');
});

// Set min date to today
const today = new Date().toISOString().split('T')[0];
const tanggalInput = document.getElementById('tanggal');
if (tanggalInput) tanggalInput.setAttribute('min', today);
