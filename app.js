window.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('formularz')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
            var mail = document.getElementById('mailbox');
            var password = document.getElementById('passwordbox');
            var mailFeedback = document.getElementById("mail-feedback");
            var passwordFeedback = document.getElementById("password-feedback");
            var labelFeedback = document.getElementById('label')
            var placeholderFeedback = document.getElementById('placeholder')

            if(validate.empty(mail.value)) {
                mailFeedback.innerText="Pole e-mail nie może byc puste.";
                mailFeedback.classList.remove('hidden')
                mail.classList.add('parowka')
                mail.classList.add('.p::-webkit-input-placeholder')
                mail.classList.add('has-error')
                labelFeedback.classList.remove('label')
                labelFeedback.classList.add('paroweczka')
            }

            if(validate.isMail(mail.value)) {
                mailFeedback.innerText="To nie jest prawidłowy format e-maila";
                mailFeedback.classList.remove('hidden')
                mail.classList.add('parowka')
                labelFeedback.classList.remove('label')
                labelFeedback.classList.add('paroweczka')
            }

            if(validate.minLength(password.value, 6)) {
                passwordFeedback.innerText="hasło jest za krótkie";
                passwordFeedback.classList.remove('hidden')
                password.classList.add('parowka')
                labelFeedback.classList.remove('label')
                labelFeedback.classList.add('paroweczka')

            }


            
    });
})



var validate = {
    empty: function(value) {
        return !value.length 
    },

    isMail: function(value) {
        return /^(?=(\".*?\"|[^\r\n\"]+)@)(?!.*?@(\..*?\.|\..*?|.*?\.|.{256,})$)(?=(.*?@([a-z0-9\-]{1,63}\.)+|^)[a-z0-9\-\.]{1,64}$)((?!\.|^.*?\.{2,}.*?@)[a-z0-9_\-\.\"!#$%&'*+ \/=?^`{|}~]{1,64}@(?<!\.@)(?!\-|.*?(\.\.|@).*?)([^\.]{1,63}|([a-z0-9\-\.]{1,63})+)(?<!\-)\.[a-z\d\-]{2,24})$/.test(value);
    },

    minLength: function(value, min) {
        return value.length >= min
    }
}


