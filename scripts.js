document.getElementById('input').addEventListener('click', function() {
    const form = document.getElementById('inputan');
    const nama = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const repass = form.repass.value;


    let isValid = true;

    if (nama === '' || nama == null) {
        const errorElement = document.getElementById('errnama');
        errorElement.innerHTML = '<p class="error" style="margin-bottom: 13px;">Nama tidak boleh kosong.</p>';
        isValid = false;
    }
    if (!email.endsWith('@webmail.uad.ac.id')) {
        const errorElement = document.getElementById('erremail');
        errorElement.innerHTML = '<p class="error">Email harus berakhir dengan "@webmail.uad.ac.id".</p>';
        isValid = false;
    }
    if (pass.length < 8) {
        const errorElement = document.getElementById('errpassword');
        errorElement.innerHTML = '<p class="error">Password harus memiliki setidaknya 8 karakter.</p>';
        isValid = false;
    }
    if (pass === "password" || pass == 12345678) {
        const errorElement = document.getElementById('errpassword');
        errorElement.innerHTML = '<p class="error">Password terlalu lemah.</p>';
        isValid = false;
    }
    if (pass !== repass) {
        const errorElement = document.getElementById('errrepassword');
        errorElement.innerHTML = '<p class="error">Password dan konfirmasi password tidak cocok.</p>';
        isValid = false;
    }

    if (isValid) {
        alert('Formulir berhasil disubmit!');
        location.reload();
    }
});

document.getElementById('name').addEventListener('input', function() {
    const errorElement = document.getElementById('errnama');
    errorElement.innerHTML = '';
});

document.getElementById('email').addEventListener('input', function() {
    const errorElement = document.getElementById('erremail');
    if (this.value.endsWith('@webmail.uad.ac.id')) {
        errorElement.innerHTML = '';
    }
});

document.getElementById('pass').addEventListener('input', function() {
    const errorElement = document.getElementById('errpassword');
    if (this.value.length >= 5) {
        errorElement.innerHTML = '';
    }
});

document.getElementById('repass').addEventListener('input', function() {
    const errorElement = document.getElementById('errrepassword');
    const pass = document.getElementById('pass').value;
    if (this.value === pass) {
        errorElement.innerHTML = '';
    }
});

document.getElementById('reset').addEventListener('click', function(){
    location.reload();
});
