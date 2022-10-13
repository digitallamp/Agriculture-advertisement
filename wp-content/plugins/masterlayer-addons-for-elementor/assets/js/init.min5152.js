!function($){"use strict";var a=function(){if($().magnificPopup){var a=$(".popup-video");a.length&&new IntersectionObserver(function(b,c){b.forEach(function(b){b.isIntersecting&&(a.magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!0}),c.unobserve(b.target))})}).observe(a.get(0))}},b=function(){if($().magnificPopup){var a=$(".master-galleries");a.length&&new IntersectionObserver(function(b,c){b.forEach(function(b){b.isIntersecting&&(a.each(function(){$(this).find(".zoom-popup-mfp").magnificPopup({disableOn:700,type:"image",gallery:{enabled:!0},mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!0})}),c.unobserve(b.target))})}).observe(a.get(0))}},c=function(){$(".elementor-invisible").length&&$(".elementor-invisible").each(function(c,a){var b=$(a);new IntersectionObserver(function(a,c){a.forEach(function(e){if(e.isIntersecting){var a=b.data("settings");if(void 0!==a&&"undefined"!==a&&null!==a){if(a.hasOwnProperty("_animation")||a.hasOwnProperty("animation")){var f="",d=0;a.hasOwnProperty("_animation")?(f=a._animation,d=a._animation_delay):(f=a.animation,d=a.animation_delay),d||(d=0),b.removeAttr("data-settings").addClass("master-animation"),setTimeout(function(){b.hasClass("animated")||(b.removeClass("elementor-invisible").addClass("animated "+f),setTimeout(function(){b.addClass("animate")},1e3))},d+300)}else b.addClass("no-animate")}else b.addClass("no-animate");c.unobserve(e.target)}})}).observe(b.get(0))})};$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/mae-button.default",function(a){if(a.find(".master-button.btn-hover-2").length){var b=a.find(".master-button.btn-hover-2");new IntersectionObserver(function(a,c){a.forEach(function(a){a.isIntersecting&&(b.mouseenter(function(a){var c=b.offset(),d=a.pageX-c.left,e=a.pageY-c.top;b.find(".bg-hover").css({left:d,top:e})}),b.mouseleave(function(a){var c=b.offset(),d=a.pageX-c.left,e=a.pageY-c.top;b.find(".bg-hover").css({left:d,top:e})}),c.unobserve(a.target))})}).observe(b.get(0))}}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-pie-chart.default",function(a){a.find(".master-pie-chart").masterPieChart()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-counter.default",function(a){var b=a.find(".master-counter").get(0);new IntersectionObserver(function(b,c){b.forEach(function(b){if(b.isIntersecting){let d=a.find(".master-counter").data("format");a.find(".number").countTo({speed:a.find(".number").data("time"),formatter:function(a,b){switch(d){case"separator":return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");case"decimal":return a.toFixed(2);case"both":return a.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");default:return a}}}),c.unobserve(b.target)}})}).observe(b)}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-tabs.default",function(a){var b=a.find(".tab-link").length;a.find(".tab-link-wrap li").css("max-width",100/b+"%").first().addClass("active"),a.find(".tab-content").first().addClass("active"),a.find(".tab-link-wrap li").on("click",function(){var a=$(this),b=a.attr("data-tab");a.addClass("active").siblings().removeClass("active").closest(".master-tabs").find(".tab-content").removeClass("active").hide(),$("#"+b).addClass("active").fadeIn("slow")})}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-accordion.default",function(a){var c={easing:"easeOutExpo",duration:300},b=a.find(".master-accordions").find(".item");b.each(function(d,a){$(a).is(".active")&&$(a).children(".content").show(),$(a).find(".title").on("click",function(){var a=b.eq(d);a.is(".active")||(a.siblings(".active").removeClass("active").children(".content").slideToggle(c),a.addClass("active").children(".content").slideToggle(c))})})}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-progress-bar.default",function(b){var a=b,c=a.find(".progress"),d=a.find(".percent"),e=c.data("percent");new IntersectionObserver(function(a,b){a.forEach(function(a){a.isIntersecting&&(c.css({width:e},"slow"),d.css({width:e},"slow"),b.unobserve(a.target))})}).observe(a.get(0))}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-testimonial-vertical-slider.default",function(a){a.find(".master-vertical-slider").masterVerticalSlider()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-slider.default",function(a){a.find(".master-slider").masterSlider()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-creative-slider.default",function(a){a.find(".master-creative-slider").masterSlider()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-project-carousel.default",function(a){a.find(".master-carousel-box").masterCarouselBox();var c=a.find(".thumb").addClass("master-animation"),b=a.find(".master-carousel-box");new IntersectionObserver(function(a,b){a.forEach(function(a){a.isIntersecting&&(c.addClass("reveal revealBottom2"),b.unobserve(a.target))})}).observe(b.get(0))}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-project-related.default",function(a){a.find(".master-carousel-box").masterCarouselBox();var c=a.find(".thumb").addClass("master-animation"),b=a.find(".master-carousel-box");new IntersectionObserver(function(a,b){a.forEach(function(a){a.isIntersecting&&(c.addClass("reveal revealBottom2"),b.unobserve(a.target))})}).observe(b.get(0))}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-testimonial-carousel.default",function(a){a.find(".master-carousel-box").masterCarouselBox()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-carousel-box.default",function(a){a.find(".master-carousel-box").masterCarouselBox()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-svg-drawing.default",function(a){var c=a.find("path");a.find("clipPath").length&&(c=a.find("svg > path"));var d=a.find(".master-svg-drawing").data("duration"),b=a.find(".master-svg-drawing").data("delay"),e=0;d?d/=1e3:d=1,b?b/=1e3:b=.3;var f=gsap.timeline({paused:!0,delay:b});c.each(function(c,b){var a=b.getTotalLength();e+=a,gsap.set(b,{strokeDasharray:a,strokeDashoffset:a,opacity:0})}),c.each(function(c,a){var b=a.getTotalLength();f.set(a,{opacity:1}),f.to(a,b/e*d,{strokeDashoffset:0})}),a.appear(function(){f.play()})}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-team-carousel.default",function(a){a.find(".master-carousel-box").masterCarouselBox();var c=a.find(".thumb").addClass("master-animation"),b=a.find(".master-carousel-box");new IntersectionObserver(function(a,b){a.forEach(function(a){a.isIntersecting&&(c.addClass("reveal revealBottom2"),b.unobserve(a.target))})}).observe(b.get(0))}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-gallery-carousel.default",function(a){a.find(".master-carousel-box").masterCarouselBox()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-news-carousel.default",function(a){a.find(".master-carousel-box").masterCarouselBox();var c=a.find(".image-wrap").addClass("master-animation"),b=a.find(".master-carousel-box");new IntersectionObserver(function(a,b){a.forEach(function(a){a.isIntersecting&&(c.addClass("reveal revealBottom2"),b.unobserve(a.target))})}).observe(b.get(0))}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-partner-carousel.default",function(a){a.find(".master-carousel-box").masterCarouselBox()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-news-grid.default",function(a){a.find(".master-portfolio").masterPortfolio()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-project-grid.default",function(a){a.find(".master-portfolio").masterPortfolio()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-gallery-grid.default",function(a){a.find(".master-portfolio").masterPortfolio()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-news-block.default",function(a){var b=a.find(".master-news");b.each(function(c,a){$(a).on("mouseenter",function(){b.removeClass("active"),$(a).addClass("active")})})}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-text-box-grid.default",function(b){var a=b.find(".grid-container").data("active"),c=b.find(".master-text-box");"none"===a||isNaN(a)||c.eq(a-1).addClass("active"),c.each(function(d,b){$(b).on("mouseenter",function(){c.removeClass("active"),$(b).addClass("active")}),"none"==a&&$(b).on("mouseleave",function(){$(b).removeClass("active")})})}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-gallery-stack.default",function(a){var b=function(){a.waitForImages(function(){var d=[],b=a.find(".master-gallery-stack"),c=b.find('[data-calcheight="yes"]');c.length&&c.each(function(e,b){var a=$(b).data("top");if(a||(a="0px"),a.indexOf("%")>=0){var c=$(b).height()/(100-parseFloat(a))*100;isNaN(c)&&(c=0),d.push(c)}else d.push(parseInt(a)+$(b).height())}),b.css("min-height",Math.max.apply(null,d))})};b(),new IntersectionObserver(function(c,d){c.forEach(function(e){if(e.isIntersecting){if($(window).on("resize",function(){b()}),a.find(".master-animation").length&&new IntersectionObserver(function(b,c){b.forEach(function(b){b.isIntersecting&&(a.find(".master-animation").each(function(b,a){$(a).addClass($(a).data("animation"))}),c.unobserve(b.target))})}).observe(a.get(0)),a.find(".parallax-hover").length&&!matchMedia("only screen and (max-width: 991px)").matches){var c=a;a.parents(".section-parallax-hover").length&&(c=a.parents(".section-parallax-hover")),c.on("mousemove",function(b){a.find(".parallax-hover").each(function(h,c){var a=$(c).data("range"),e=$(c).data("direction"),d=c.getBoundingClientRect(),f=b.clientX-d.x-d.width/2,g=b.clientY-d.y-d.height/2;a?a/=10:a=0,"opposite"==e&&(a*=-1),gsap.to(c,1,{x:f*a,y:g*a,ease:"Expo.easeOut",overwrite:"all"})})}),c.on("mouseleave",function(c){var b=a.find(".parallax-hover");gsap.to(b,1,{x:0,y:0,ease:"Expo.easeOut",overwrite:"all"})})}d.unobserve(e.target)}})},{rootMargin:"200px 0px 200px 0px"}).observe(a.get(0))}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-png-dots.default",function(a){matchMedia("only screen and (max-width: 991px)").matches||a.find(".master-png-dots").masterPngDots()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-globe.default",function(a){matchMedia("only screen and (max-width: 991px)").matches||a.find(".master-globe").masterGlobe()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-particles.default",function(a){a.css("position","static"),matchMedia("only screen and (max-width: 991px)").matches||a.find(".master-particles").masterParticles()}),elementorFrontend.hooks.addAction("frontend/element_ready/section",function(a){if(a.is(".elementor-top-section")&&a.not(".elementor-section-stretched")){var c=parseInt(a.find("> .elementor-container").css("max-width"))-30,b=function(){if(c&&c>1170){a.addClass("custom-section");var d=$(".agrios-container").width(),b=$(window).width()-30,e=-((b-d-(b-c))/2);c>d?b>c?a.css({width:c,left:e+"px"}):(e=-((b-d)/2),a.css({width:b,left:e+"px"})):a.css({width:b,left:"15px"})}};b(),$(window).on("resize",function(){b()})}}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-image-morphing.default",function(a){a.find(".master-image-morphing").masterImageMorphing()}),elementorFrontend.hooks.addAction("frontend/element_ready/mae-megamenu.default",function(a){a.find(".agrios-menu .custom-megamenu").each(function(b,c){var a=function(){let a=-$(c).find(">a>span").offset().left-10;$(c).find("> .sub-menu").css("left",a+"px")};a(),$(window).on("resize",function(){a()})})}),c(),a(),b()})}(jQuery)