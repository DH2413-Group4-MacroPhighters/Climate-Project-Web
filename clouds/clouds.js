// Get all cloud elements
var cloud = $('.cloud');

//animte the elements
function animate() {
    setInterval(function(){

		//moving down
        cloud.animate(
			{top:'+=20'},
			{duration: 1500},
				);

		//moving up
		cloud.animate(
			{top:'-=20'},
			{duration: 1500}
				);
         });
   }

animate();