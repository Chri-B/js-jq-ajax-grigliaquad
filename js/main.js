// SCOPO DEL GIOCO: Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function() {
    // utilizzo hendlebars per creare la griglia
    var source = $('#grid-template').html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < 36; i++) {
        $('.griglia').append(template);
    }

    // al click sul quadrato corrispondente appare il colore in base al numero random generato
    $('.square').click(function() {

        var that = $(this);

        $.ajax({
            url:'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=9&items=1',
            method: 'GET',
            success: function (data) {
                var numeroRandom = data.response;
                esito(numeroRandom, that);
            },
            error: function () {
                alert('ERRORE');
            }
        });
    })




    function esito(numRand, elementClicked) {
        if (numRand <= 5) {
            // $(elementClicked).removeClass('yellow');
            // $(elementClicked).removeClass('green');
            elementClicked.addClass('yellow').removeClass('green');
            elementClicked.children('p').text(numRand);
        } else {
            // $(elementClicked).removeClass('green');
            // $(elementClicked).removeClass('yellow');
            elementClicked.addClass('green').removeClass('yellow');
            elementClicked.children('p').text(numRand);
        }
    }
});
