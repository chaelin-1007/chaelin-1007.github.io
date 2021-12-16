$(document).ready(function(){
    let header = $("#header"),
        oneDepth = $("#gnb > li"),
        oneDepthM = $("#gnbM > li"),
        sec = $("#mainContent .sec"),
        paging = $(".paging ul li a"),
        pf = $(".pfWrap  .pf");

        console.log(pf);
        console.log(paging);
        console.log("모바일메뉴");
        console.log(oneDepthM);

        oneDepthM.click(function(){
          let index = $(this).index();
          console.log("클릭한 모바일 메뉴 li의 인덱스 번호 알아오기");
          console.log(indexNum);
          sec.eq(indexNum);
        });

    oneDepth.click(function(){
        let indexNum = $(this).index(),
            secOffsetTop = sec.eq(indexNum).offset().top;

        $("html, body").animate({"scrollTop" : secOffsetTop},600);

        $(this).addClass("on");
        $(this).siblings("li").removeClass("on");
        
    }); // oneDepth click 내용 끝

    /* paging */
    paging.click(function(){
        paging.removeClass("on");
        $(this).addClass("on");

        let idx = $(this).parent("li").index();
        console.log(idx);

        let pfOffSEtTop = pf.eq(idx).offset().top;

        $("html,body").animate({"scrollTop":pfOffSEtTop},600);

    });
    
    // 윈도우 스크롤하면
    $(window).scroll(function(){
      let windowScroll = $(window).scrollTop();
          windowScroll2 = $(window).scrollTop() + 50;

      console.log( "실제 스크롤된 값 " + windowScroll);
      console.log( "실제 스크롤된 값에 100을 더해준 값 " + windowScroll2);

      if( windowScroll >= 120 ){
        header.addClass("fixed");  
      }else{
        header.removeClass("fixed"); 
      }

      sec.each(function(index){
        let secOffsetTop = sec.eq(index).offset().top;

        if( windowScroll2 >= secOffsetTop ){
            oneDepth.removeClass("on");
            oneDepth.eq(index).addClass("on");
        }
      });

    }); // window scroll 내용 끝

    // 모바일 메뉴
    let btnOpen = $("#headerM .btn_open"),
        menuAreaM = $("#menuAreaM"),
        btnClose = menuAreaM.children(".btn_close");
    
    btnOpen.click(function(){
        menuAreaM.animate({"right" : "0"},600);
    });

    btnClose.click(function(){
        menuAreaM.animate({"right" : "-80%"},600);
    });

    // swiper
    var mainSwiper = new Swiper("#mainVisual", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
  });
});