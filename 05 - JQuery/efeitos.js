$(document).ready(function(){
    $("#fadeIn").click(function(){
        $("#div").fadeIn();
    });

    $("#fadeOut").click(function(){
        $("#div").fadeOut();
    });

    $("#fadeToggle").click(function(){
        $("#div").fadeToggle();
    });

    $("#fadeTo1").click(function(){
        $("#div").fadeTo("fast",0.5);
    })

    $("#fadeTo2").click(function(){
        $("#div").fadeTo("fast",1.0);
    });

    $("#hide").click(function(){
        $("#div").hide();
    });

    $("#show").click(function(){
        $("#div").show();
    });

    $("#toggle").click(function(){
        $("#div").toggle();
    });

    $("#slideDown").click(function(){
        $("#div").slideDown();
    });

    $("#slideUp").click(function(){
        $("#div").slideUp();
    });

    $("#slideToggle").click(function(){
        $("#div").slideToggle();
    });

    $("#animate1").click(function(){
        $("#div").animate({
            "border-width":"5px",
            "margin-top":"100px"
        });
    });

    $("#animate2").click(function(){
        $("#div").animate({
            "border-width":"1px",
            "margin-top":"0"
        });
    });
})