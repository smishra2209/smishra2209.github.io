
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


	$("#navbar-collapse ul li a[href^='#']").on('click', function(e) {
   	e.preventDefault();
   	var hash = this.hash;
   	$('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){
       window.location.hash = hash;
     });

});

    

    $("html,body").animate({scrollTop: 0},"slide-top-slow");

    
    function closeVideo() {
    	$('#videoOverlay').css("visibility","hidden");
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
    	$('#videoOverlay').css("visibility","visible");
    	player.loadVideoById('OcVE6rQ9_FU');
    }

    function closeinfo(){
    	$('#infoOverlay').css("visibility","hidden");
    }
     function closecontact(){
    	$('#contactOverlay').css("visibility","hidden");
    }

    function openInfo(){
    	$('#infoOverlay').css("visibility","visible");
    }
     function openContact(){
    	$('#contactOverlay').css("visibility","visible");
    }
    
    $('#ajax-contact').submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();
    var formData = $('#ajax-contact').serialize();
    $.ajax({
    type: "POST",
    url: $('#ajax-contact').attr('action'),
    data: formData
	}).done(function(response) {
    
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
	}).fail(function(data) {
    
});
});
   
