$(document).ready(function(){
    $("input[type='text'][required]").css({
        "background-color":"yellow"
    });

    $("label:first").css({
        "color": "red"
    });

    $("label:last").css({
        "color": "blue"
    });

    $("li:even").css({
        "background-color":"gray"
    });

    $("input:eq(1)").css({
        "background-color":"green"
    });

    $(":header").css({
        "color":"darkgreen"
    });
});