var nav = $("#nav ul li");
var cont = $("#contents > div");

// when you click the button on the header menu
nav.click(function(e){
    e.preventDefault();    //blocks the function of #, doesn't move on
    var target = $(this);  //saves the info about which button you clicked in the var
    var index = target.index();
    alert(index);
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
});
