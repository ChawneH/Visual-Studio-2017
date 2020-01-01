})(jQuery);
console.log('it works')
$(document).ready(function(){
    $('.submit').click(function(event){
    
        console.log('Clicked Button')
        var email= $('.email').val()
        var name= $('.name').val()
        var name= $('.subject').val()
        var message= $('.message').val()

        if(.name.isEmpty)
        event.preventDefault()
    })
})
