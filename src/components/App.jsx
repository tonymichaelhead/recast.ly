class App extends React.Component {
  constructor(props) {
    super(props);
    //searchYouTube();   
    this.state = {
      currentVideo: exampleVideoData[0],
      currentList: exampleVideoData
    };
  }

  click(video) {
    this.setState({
      currentVideo: video
    }); 

  }

  componentDidMount() {
    let options = {
      query: 'thug life cat',
      max: 10,
      key: YOUTUBE_API_KEY
    };

    this.props.searchYouTube(options, function(dataItems) {
      this.setState({
        currentList: dataItems, 
        currentVideo: dataItems[0]
      });  
    }.bind(this));
    //this.setState({currentVideo: this.props.searchYouTube()}})
  }

  onType(term) {
    let options = {
      query: term,
      max: 10,
      key: YOUTUBE_API_KEY
    };

    this.props.searchYouTube(options, function(dataItems) {
      this.setState({
        currentList: dataItems, 
        currentVideo: dataItems[0]        
      });
    }.bind(this));
  }

  render() {
    return (
      <div>
        <Nav onType={this.onType.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.currentList} click={this.click.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
