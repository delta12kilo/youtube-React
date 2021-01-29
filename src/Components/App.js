import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import SearchTerm from './searchTerm';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
import './App.css';

const keys = 'AIzaSyCq3OtH5FhgeyHKUB-XN9NSWcrz9tLdhfY';

class App extends React.Component {

    state = { videos: [], term: '', selectedvideo : null };


    componentDidMount() {
        this.onTermSubmit('Apex')
    }

    onTermSubmit = async term => {
        // console.log(term);
        const response = await youtube.get('/search',{
            params:{
                q: term,
                part: 'snippet',
                maxResults:10,
                type: 'video',
                key: keys
            }
        });
        this.setState({
            videos: response.data.items,
            term: term,
            selectedvideo: response.data.items[0]
        });
    };

    onVideoSelect = (vedio) => {
        // console.log('on video select: ',vedio);
        this.setState({selectedvideo: vedio})
    };

    render() {
        return (
            <div className="ui container">
                <div className="heading">
                    <h1>
                        YouTube
                    </h1>
                </div>
                <SearchBar
                    onFormSubmit={this.onTermSubmit}
                />
                <SearchTerm 
                    termss={this.state.term} 
                />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail
                                video={this.state.selectedvideo}
                            />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos} 
                            />
                        </div>
                    
                    </div>
                </div>
                
            </div>
        );
    }

}

export default App;