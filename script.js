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
    
});