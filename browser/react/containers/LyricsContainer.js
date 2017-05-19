import React from 'react';
import Store from '../store';
import Lyrics from '../components/Lyrics';



class LyricsContainer extends React.Component {
  constructor(){
    super();
    this.state = Store.getState();
  }

  componentDidMount() {
    let this.unsubscribe = Store.subscribe(() => {
      console.log('something updated')
      this.setState(Store.getState())
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }



  render() {
    <h1>Just a container, more to come!</h1>
  }
}

export default LyricsContainer
