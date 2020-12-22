$("#btn").click(function() {

    $.ajax({
        method: "POST",
        url: "lista.php"
    })
    .done(function(msg){
        let resultado = JSON.parse(msg)
        
        for (var i = 0; i < resultado.length; i++) {
            $(".list").append("<li>" + resultado[i] + "</li>")
        }
    })

    //O método then() retorna uma Promise. Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa.
    // .then(sucesso, falha)

    // function sucesso(msg){
    //     var resultado = JSON.parse(msg)
        
    //         for (var i = 0; i < resultado.length; i++) {
    //             $(".list").append("<li>" + resultado[i] + "</li>")
    //         }
    // }

    // function falha(msg) {
    //     alert("falha")
    // }

    // **************************************************************************
    // FORMA SIMPLIFICADA DE RECEBER DADOS PELO AJAX VIA GET / POST
    // $.post( "lista.php", function( msg ) {
    //     let resultado = JSON.parse(msg)
    //     // console.log(resultado)
    //     for (var i = 0; i < resultado.length; i++) {
    //         $(".list").append("<li>" + resultado[i] + "</li>")
    //     }

    // })

});