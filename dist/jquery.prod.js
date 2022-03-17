
jQuery(document).ready(function(e){for(var i=[],a=[4,6,8,10],
m=0;m<document.getElementsByClassName("bubbles").length;m++)
i.push(m);function g(e){return e[Math.floor(Math.random()*e.length)];
}setInterval(function(){var e=g(a);document.getElementByClassName("bubbles").append('<div class="individual-bubble" style="left: '+g(i)+"px; width: "+e+"px; height:"+e+'px;"></div>'),
document.getElementByClassName("individual-bubble").animate({bottom:"100%",opacity:"-=0.7"},
3e3,function(){
this.remove();
}
);

}, 350);
});