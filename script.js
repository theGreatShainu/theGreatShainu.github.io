var channelName = 'HowToPlayCA';

$(document).ready(function()
                 {
    $.get(
        "https://www.googleapis.com/youtube/v3/channels",{
            part: 'contentDetails',
            id: channelName,
            key: 'AIzaSyBwiAp0jc-W7Z2NhjoRsDgvGogcgW-XTLg'},
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
            playlistId: pid,
            key: 'AIzaSyBwiAp0jc-W7Z2NhjoRsDgvGogcgW-XTLg'},
            function(data){
                var output;
                $.each(data.items, function(i,item){
                    console.log(item);
                    videTitle = item.snippet.title;
                    
                    output ='<li>'+videTitle+'</li>';
                    
                    $('#results').append(output);
                    
                })
            }
       );
    }
});