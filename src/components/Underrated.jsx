import React from 'react';
import './Underrated.css';

class Underrated extends React.Component {

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


      const { error, isLoaded, items } = this.state;
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
         <h2 style={{fontWeight: "bold"}}>1) Reel M Inn</h2><p>2430 SE Division St Open 10A-2:30A Daily</p><img className="underratedImage" src="https://b.zmtcdn.com/data/reviews_photos/58b/73212a6ac218308b340daa8e93c5358b_1469133319.JPG" alt="reel" />
          <h4> {this.state.food} </h4>
          <h2 style={{fontWeight: "bold"}}>2) Roscoes</h2><p>8105 SE Stark St Open 11A-2:30A Daily</p><img className="underratedImage" src="https://media-cdn.tripadvisor.com/media/photo-p/07/9e/c9/9f/roscoe-s.jpg" alt="reel" />
          <h4> {this.state.food1} </h4>
          <h2 style={{fontWeight: "bold"}}>3) Chameleon</h2><p>2000 NE 40th Ave Open 5P-10P Wed-Sat</p><img className="underratedImage" src="https://images.squarespace-cdn.com/content/v1/57e08d703e00beb79cb24df8/1493246929340-6K6Z5TWPXTRQ56SBMEPK/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/Deck+3.jpg" alt="reel" />
          <h4> {this.state.food2} </h4>
          <h2 style={{fontWeight: "bold"}}>4) Please Louise</h2><p>1505 NW 21st Ave Open 11A-10P Tue-Sat, 4P-10P Sun/Mon</p><img className="underratedImage" src="https://images.squarespace-cdn.com/content/v1/587fdaa63a041192c3f3b6fc/1484885963268-TUK7R2WC80Q8NHU2OIY6/ke17ZwdGBToddI8pDm48kHsP6h8ITLpzppVA9b8GOgt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQnys2-58Jn-eukW1UFae4kMRF6JsQQSjrbz6STkd2Ul9Aa7pjcgczeZz4RiAJynZQ/Please+Louise+Pizza+portland+pacific+northwest+food+photography+photographer-6.jpg?format=1500w" alt="reel" />
          <h4> {this.state.food3} </h4>
          <h2 style={{fontWeight: "bold"}}>5) The Waiting Room</h2><p>22327 NW Kearney St Open 4P-9P Tue-Sat</p><img className="underratedImage" src="https://portlandfoodanddrink.com/wp-content/uploads/2016/05/the-waiting-room-portland-patio.jpg" alt="reel" />
          <h4> {this.state.food4} </h4>
         </ul>
         </div>
       );
     }
   }
 }

export default Underrated
