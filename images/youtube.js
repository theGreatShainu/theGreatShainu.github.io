var apiKey='AIzaSyC1qeQOUKy7dNZPbiv0U_x9N3UZqQNqzRc';
var channelId='UC1VDpWpOf36CuP9fowyDZtQ'; //channel id

$(document).ready(function(){

	$.get(
		"https://www.googleapis.com/youtube/v3/channels", {
			part:'contentDetails',
			id:channelId,
			key:apiKey },
			function(data) {
				$.each(data.items, function(i,item){
					pid=item.contentDetails.relatedPlaylists.uploads;
					fetchVideo(pid);
				});
			}
	);
	function fetchVideo(pid) {
		$.get(
			"https://www.googleapis.com/youtube/v3/playlistItems", {
				part:'snippet',
				maxResults:50,
				playlistId:pid,
				key:'AIzaSyC1qeQOUKy7dNZPbiv0U_x9N3UZqQNqzRc' },
				function(data) {
					$.each(data.items, function(i,item){
						var vid_title=item.snippet.title;
						var vid_thumb=item.snippet.thumbnails.medium.url;
						var vid_id=item.snippet.resourceId.videoId;
						var vid_container=$('#videos');
						var videoEle='<div class="video vidEle" data-id="'+vid_id+'">'+
								        '<a href="#top">'+
								          '<img class="v-img" src="'+vid_thumb+'"/>'+
								          '<i class="play-btn fa fa-play"></i>'+
								          '<div class="v-title">'+vid_title+'</div>'+
								        //'</a>'+
								      '</div>'
						vid_container.append(videoEle);
					});
				}
		);
	}

 	$(document).on('click','.vidEle',function(){
 		$('#player_vid').attr('src','https://www.youtube.com/embed/'+$(this).data('id')+'?autoplay=1');
 		$('')
 	});
});
