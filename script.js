var channelName = 'HowToPlayCA';

$(document).ready(function()
                 {
    $.get(
        "https://www.googleapis.com/youtube/v3/channels",{
            part: 'contentDetails',
            id: 'UC1VDpWpOf36CuP9fowyDZtQ',
            key: 'AIzaSyC1qeQOUKy7dNZPbiv0U_x9N3UZqQNqzRc'},
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
            key: 'AIzaSyC1qeQOUKy7dNZPbiv0U_x9N3UZqQNqzRc'},
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