
	window.sr = ScrollReveal({
		reset: true
	});
	window.sr2 = ScrollReveal({
		reset: false
	});
	sr.reveal('.slide-top-slow',
		{
			duration:1000, 
			origin: 'top',
			distance: '50px'
		}
	);
	sr.reveal('.slide-top-fast',
		{
			duration:1000, 
			origin: 'top',
			distance: '100px'
		}
	);
	sr.reveal('.slide-left',
		{
			duration:1000, 
			origin: 'left',
			distance: '100px',
			delay:500
		}
	);
	sr.reveal('.slide-right',
		{
			duration:1000, 
			origin: 'right',
			distance: '100px',
			delay:500
		}
	);
	sr.reveal('.skills-section',{
		duration:500,
		origin: 'bottom'
	});
	sr2.reveal('.slide-nav-left',
		{
			duration:700,
			origin: 'left',
			distance: '50px'
		}
	);
	sr2.reveal('.slide-nav-left-one',
		{
			duration:700,
			origin: 'left',
			distance: '100px'
		}
	);
	sr2.reveal('.slide-nav-left-two',
		{
			duration:700,
			origin: 'left',
			distance: '150px'
		}
	);
	sr2.reveal('.slide-nav-left-three',
		{
			duration:700,
			origin: 'left',
			distance: '200px'
		}
	);
	sr2.reveal('.slide-nav-left-four',
		{
			duration:700,
			origin: 'left',
			distance: '250px'
		}
	);
	sr2.reveal('.slide-nav-left-five',
		{
			duration:700,
			origin: 'left',
			distance: '300px'
		}
	);

	$("#navbar-collapse ul li a[href^='#']").on('click', function(e) {
   	e.preventDefault();
   	var hash = this.hash;
   	$('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){
       window.location.hash = hash;
     });

});
	

	$(document).ready(function(){
		
      $(window).scroll(function() { 

      	$("#my-navbar").removeClass("nav-bar-purple");
      	$("#my-navbar").removeClass("nav-bar-blue");
      	$("#my-navbar").removeClass("nav-bar-green");
      	$("#my-navbar").removeClass("nav-bar-bluegray");
      	$("#my-navbar").removeClass("nav-bar-gray");
      	$("#my-navbar").removeClass("nav-bar-greenblue");
      	$("#my-navbar").removeClass("nav-bar-origin");

        if ($(document).scrollTop() > 4060) { 
          $("#my-navbar").addClass("nav-bar-greenblue");
        }
        else if ($(document).scrollTop() > 3360) { 
          $("#my-navbar").addClass("nav-bar-blue");
        }else if ($(document).scrollTop() > 2710) { 
          $("#my-navbar").addClass("nav-bar-gray"); 
        }else if ($(document).scrollTop() > 2060) {
          $("#my-navbar").addClass("nav-bar-green");
        }else if ($(document).scrollTop() > 1360) { 
          $("#my-navbar").addClass("nav-bar-bluegray");
        }else if ($(document).scrollTop() > 660) { 
          $("#my-navbar").addClass("nav-bar-purple"); 
        }
        else if ($(document).scrollTop() > 20) { 
          $("#my-navbar").addClass("nav-bar-origin"); 
        } else {
          
        }
      });
    });

    $("html,body").animate({scrollTop: 0},"slide-top-slow");

    
    function closeVideo() {
    	$('.overlay').css("visibility","hidden");
    }

      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '600',
          width: '800',
          videoId: 'M7lc1UVf-VE'
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
      function openVideo(key){
    	$('.overlay').css("visibility","visible");
    	player.loadVideoById('OcVE6rQ9_FU');
    }
   