
window.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('formularz')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
            var mail = document.getElementById('mailbox');
            console.log(mail.value);
            var haslo = document.getElementById('passwordbox');
            console.log(haslo.value);

            
    })


})
