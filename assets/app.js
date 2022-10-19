window.addEventListener('DOMContentLoaded', function(e) {
   const form = document.getElementById('formularz')
   form.addEventListener('submit', (e) => {
       e.preventDefault();
           var mail = document.getElementById('mailbox');
           console.log("e-mail: "+mail.value);
           var password = document.getElementById('passwordbox');
           console.log("haslo: "+password.value);
           var mailFeedback = document.getElementById("mail-feedback");
           var passwordFeedback = document.getElementById("password-feedback");
           var labelFeedback = document.getElementById('label');
           var labelFeedback2 = document.getElementById('label2');

           if(validate.empty(mail.value)) {
               mailFeedback.innerText="Pole e-mail nie może byc puste.";
               mailFeedback.classList.remove('hidden')
               mail.classList.add('parowka')
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
               passwordFeedback.innerText="To hasło jest za krótkie.";
               passwordFeedback.classList.remove('hidden')
               password.classList.add('parowka')
               labelFeedback2.classList.remove('label')
               labelFeedback2.classList.add('paroweczka')
           }

           
   });
})



var validate = {
   empty: function(value) {
       return !value.length 
   },

   minLength: function(value, min) {
       return value.length <= min
   },
   isMail: function(mail) {
      var re = /\S+@\S+\.\S+/;
      return re.test(mail);
   },

   loading: function(loading){

   }

}

