let aboutOffset = $("#about").offset().top;
// console.log(itemOffset);
$(window).scroll(function(){

    let wScroll= $(window).scrollTop();
    // console.log(wScroll);
    if( wScroll > aboutOffset){
        $("#navbarItems").css("backgroundColor","rgb(0, 0, 0,0.2)");
        $(".arrowup").fadeIn(500);
    }
    else{
        $("#navbarItems").css("backgroundColor","rgb(255,255,255,0.7)");
        $(".arrowup").fadeOut(500);
    }
    
});
$("a").click(function () { 
   let aHref= $(this).attr("href");
   let linkOffset = $(aHref).offset().top;
   $("html,body").animate({scrollTop:linkOffset},500);
});
// background-optin
$(".backgrounditem").click(function () { 
    let backgroundSrc = $(this).attr("src");
    $(".homeitem").css("backgroundImage",`url(${backgroundSrc})`);
});

// colore-option
let colorItems =$(".coloritem");
colorItems.eq(0).css("backgroundColor", "teal");
colorItems.eq(1).css("backgroundColor", "brown");
colorItems.eq(2).css("backgroundColor", "cornflowerblue");
colorItems.eq(3).css("backgroundColor", "hotpink");
colorItems.eq(4).css("backgroundColor", "darkgoldenrod");
colorItems.eq(5).css("backgroundColor", "black");
colorItems.click(function () { 
   let boxColor= $(this).css("backgroundColor");
    $("body").css("color",boxColor);
});
$("#optionBox i").click(function () { 
    let boxWidth=$(".option").innerWidth();
    if($("#optionBox").css("left")=="0px"){
        $("#optionBox").animate({left:`-${boxWidth}`},1000)

    }
    else{
        $("#optionBox").animate({left:`0px`},1000)

    }
    
});

$("#btnUp").click(function () { 
    $("html,body").animate({scrollTop:'0'},1000);
});



$(".imgItems").click(function(){
    let imgSrc = $(this).attr('src');
    $("#mainImg").attr('src' , imgSrc);
})


$(".productList").animate({width:'100%'},1000 ,function(){
    $(".productList").slideDown(1000 , function(){
        $(".productList h2").fadeIn(1000 ,function(){
            $(".productList .col-md-3").slideDown(1500)
        })
    })
})

$(document).ready(function () {
    $(".loading").fadeOut(5000 ,function(){
        $("body").css("overflow","auto")
    });
});