// SCOPO DEL GIOCO: Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function() {


    $('.square').click(function() {
        var that = $(this);
        $.ajax({
            url:'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=9&items=1',
            method: 'GET',
            success: function (data) {
                var numeroRandom = data.response;
                esito(numeroRandom, that);
                $(that).children("p").text(numeroRandom);
            },
            error: function () {
                alert('ERRORE');
            }
        });
    })




    function esito(numRand, elementClicked) {
        if (numRand <= 5) {
            $(elementClicked).addClass('yellow');
        } else {
            $(elementClicked).addClass('green');
        }
    }
});
