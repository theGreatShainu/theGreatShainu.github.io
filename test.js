var channelName = 'HowToPlayCA'

$(document).ready(function(){
$.get(
    "https://www.googleapis.com/youtube/v3/channels",{
    part: 'contentDetails',
    forUsername: channelName,
    key: 'AIzaSyCKMSjcXn-__iO9AzZMO2EOBmjg9uhUbhY'}
    function(data){
    $.each(data.items, function(i,item){
        console.log(item);
        pid = item.contentDetails.relatedPlaylists.uploads;
        getVids(pid);
        })
    }
    );
    
    function getVids(pid){
        $.get(
    "https://www.googleapis.com/youtube/v3/playlistItems",{
    part: 'snippet',
    maxResults: 10,
    key: 'AIzaSyCKMSjcXn-__iO9AzZMO2EOBmjg9uhUbhY'}
    function(data){
    $.each(data.items, function(i,item){
        console.log(item);
        videoTitle = item.snippet.title;
        videoID = item.snippet.resourceId.videoId;
        
        output = '<li><iframe src \"//www.youtube.com/embed/'+videoId+"\"></iframe></li>';
        $('#results').append(output);
        })
    }
    ); 
    }
});