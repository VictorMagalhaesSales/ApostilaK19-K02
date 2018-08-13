$(document).ready(function() {
    console.log("ready");

    $(window).resize(function(){
        var largura = $(window).width();
        var altura = $(window).height();
        console.log("resize: (" + largura + ", " + altura + ")");
    });

    $(window).scroll(function(){
        var x = $(window).scrollLeft();
        var y = $(window).scrollTop();
        console.log("scroll: (" + x + ", " + y + ")");
    });

    $("*").focus(function(){
        var tagName = this.tagName;
        var id = this.id;
         console.log("focus: (" + tagName + ", #" + id + ")");
    });

    $("*").focusin(function(){
        var tagName = this.tagName;
        var id = this.id;
         console.log("focusin: (" + tagName + ", #" + id + ")");
    });

    $("*").blur(function(){
        var tagName = this.tagName;
        var id = this.id;
         console.log("blur: (" + tagName + ", #" + id + ")");
    });

    $("*").focusout(function(){
        var tagName = this.tagName;
        var id = this.id;
        console.log("focusout: (" + tagName + ", #" + id + ")");
    });

    $("input").select(function(){
         console.log("select: (" + window.getSelection() + ")");
    });

    $("input").change(function(){
         console.log("change: (" + $(this).val() + ")");
    });

    $("input").keydown(function(event){
         console.log("keydown: (" + event.which + ")");
    });

    $("input").keypress(function(event){
        console.log("keypress: (" + event.which + ")");
    })

    $("input").keyup(function(event){
         console.log("keyup: (" + event.which + ")");
    })

    $("#div1").click(function(event){
        console.log("click . (" + event.pageX + ", " + event.pageY + ") ");
    })

    $("#div1").dblclick(function(event){
        console.log("dblclick . (" + event.pageX + ", " + event.pageY + ") ");
    })

    $("#div1").mousedown(function(event){
        console.log("mousedown: (" + event.pageX + ", " + event.pageY + ")");
    })

    $("#div1").mouseup(function(event){
        console.log("mouseup: (" + event.pageX + ", " + event.pageY + ")");
    })

    $("#div1").mouseenter(function(event){
        console.log("mouseenter. (" + event.pageX + ", " + event.pageY + ")");
    })

    $("#div1").mouseleave(function(event){
        console.log("mouseleave. (" + event.pageX + ", " + event.pageY + ")");
    })

    $("#div1").hover(function(event){
         console.log("hover: (" + event.pageX + ", " + event.pageY + ")");
    })

    $("#div1").mouseover(function(event){
         console.log("mouseover: (" + event.pageX + ", " + event.pageY + ")");
    })

    $("#div1").mouseout(function(event){
         console.log("mouseout: (" + event.pageX + ", " + event.pageY + ")");
    })

    $("#div1").mousemove(function(event){
         console.log("mousemove: (" + event.pageX + ", " + event.pageY + ")");
    })
    
});