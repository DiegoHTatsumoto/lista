$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const inputAssunto = $('#input').val();
        const novaLinha = $('<li></li>').text(inputAssunto);

        $(novaLinha).appendTo('ul');
        $('#input').val(''); 

        $('ul').on('click', 'li', function(){

            $(this).toggleClass('through');
        })

    });
});