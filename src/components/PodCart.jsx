import React from 'react';
// import REACT_APP_API_KEY from '.././.env';

 class PodCart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      food: [],
      food1: [],
      food2: [],
      food3: [],
      food4: []
    };
  }

  componentDidMount() {
      fetch(`https://api.currentsapi.services/v1/latest-news?apiKey=${process.env.REACT_APP_API_KEY}&language=en&category=food`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            food: result.news[0].description,
            food1: result.news[1].description,
            food2: result.news[2].description,
            food3: result.news[3].description,
            food4: result.news[4].description,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
    render(){


      const { error, isLoaded } = this.state;
     if (error) {
       return <div>Error: {error.message}</div>;
     } else if (!isLoaded) {
       return <div>Loading...</div>;
     } else {
       return (
         <div>
         <h1>The Most Criminally underrated Restaurants in Portland</h1>
         <p> By Colman Currie</p>
         <ul>
         <h2 style={{fontWeight: "bold"}}>1) Merendero Estrela</h2><p>7129 SE 82nd Ave Open 11:30A-10P Daily</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/RbaNmpkenZteM99aBXJ0kQ/o.jpg" alt="reel" />
          <h4> {this.state.food} </h4>
          <h2 style={{fontWeight: "bold"}}>2) MF Tasty</h2><p>3927 N Williams Ave Open 11:30A-8:30P Fri-Mon</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/l6jqFUgqU2DikWbRWxnWYg/l.jpg" alt="reel" />
          <h4> {this.state.food1} </h4>
          <h2 style={{fontWeight: "bold"}}>3) Korean Twist</h2><p>5th & Oak downtown Open 11A-5P Mon-Sat| </p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/PrumJmCT945JhIn3hvklRQ/l.jpg" alt="reel" />
          <h4> {this.state.food2} </h4>
          <h2 style={{fontWeight: "bold"}}>4) JoJo</h2><p>3582 SE Powell Blvd Open 11A-7P Daily</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/sZ6ba74oTuOVVJKOrY0P_Q/l.jpg" alt="reel" />
          <h4> {this.state.food3} </h4>
          <h2 style={{fontWeight: "bold"}}>5) Pablano Pepper</h2><p>6035 NE Halsey St Open 12P-10P Daily</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/19cvmX0wmbIwlDcyLCBvcA/o.jpg" alt="reel" />
          <h4> {this.state.food4} </h4>
         </ul>
         </div>
       );
     }
   }
 }

export default PodCart
