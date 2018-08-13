$(document).ready(function(){
    $("input[type='submit']").click(function(){
        var x = $("#x").val();
        var y = $("#y").val();

        $.post("ajax.php", {"x": x, "y": y})
        .done(function(soma){
            $("#resultado").html(soma);
        })

        return false;
    })
})