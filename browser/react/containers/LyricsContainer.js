import React from 'react';
import Store from '../store';
import Lyrics from '../components/Lyrics';
import {setLyrics} from '../action-creators/lyrics';
import axios from 'axios';



class LyricsContainer extends React.Component {
  constructor(){
    super();
    this.state = Object.assign({
                  artistQuery: '',
                  songQuery: ''
                }, Store.getState().lyrics)
    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.state)
  }

  setArtist(artist) {
    this.setState({artistQuery: artist})
  }

  setSong(song) {
    this.setState({songQuery: song})
  }

  handleSubmit() {
    const artist = this.state.artistQuery;
    const song = this.state.songQuery;

    Store.dispatch(setLyrics(artist, song));
  }

  componentDidMount() {
    this.unsubscribe = Store.subscribe(() => {
      this.setState(Store.getState().lyrics)
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }



  render() {
    return (
      <Lyrics setArtist={this.setArtist} setSong={this.setSong}
              text={this.state.text} artistQuery={this.state.artistQuery}
              songQuery={this.state.songQuery} handleSubmit={this.handleSubmit}/>
      )
  }
}

export default LyricsContainer
