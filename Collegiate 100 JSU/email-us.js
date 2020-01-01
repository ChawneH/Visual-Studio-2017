/*('email-us') .submit(function(e){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    if(!name.value || !email.value || !message.value){
        alert.error('Please Check Entries')
    } else{
        e.preventDefault()
        (this).get(0).reset()
        alert.succes('Message Sent')
    }
})*//**/ */
console.log('it works')
$(document).ready(function(){
    $('.submit').click(function(event){
    
        console.log('Clicked Button')
        var email= $('.email').val()
        var name= $('.name').val()
        var message= $('.message').val()

        if(.name.isEmpty)
        event.preventDefault()
    })
})