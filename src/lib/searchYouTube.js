var searchYouTube = (options, callback) => { 
  //var addStuff = this;
  let {query, max, key} = options;
  
  $.ajax({
  
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'maxResults': max,
      'part': 'snippet',
      'q': query,
      'type': 'video',
      'key': key
    },
    success: function (data) {
      callback(data.items);
    // function callback(dataItems) {
    //  this.setState({currentVideo: dataItems[0]})  
    // }
      
    },
    error: function (data) {
    }
  });
};

window.searchYouTube = searchYouTube;
