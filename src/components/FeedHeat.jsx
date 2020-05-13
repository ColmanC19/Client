import React from 'react';

class FeedHeat extends React.Component {

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
           <h2 style={{fontWeight: "bold"}}>1) Laurelhurst Market</h2><p>3155 E Burnside St Open 10A-10P Daily</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/47x9XcpB7mgKWtn5MuvDew/l.jpg" alt="reel" />
            <h4> {this.state.food} </h4>
            <h2 style={{fontWeight: "bold"}}>2) Delores</h2><p>1401 SE Morrison St
            Ste 117 Open 5P-9:30P Daily</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/FiHdq57t3EBjh9jbStADQQ/l.jpg" alt="reel" />
            <h4> {this.state.food1} </h4>
            <h2 style={{fontWeight: "bold"}}>3) Lardo</h2><p>1212 SE Hawthorne St or 1205 SW Washington St Open 11A-10P Daily </p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/8PEZlaxIAZP9tZH7Ib_k6Q/o.jpg" alt="reel" />
            <h4> {this.state.food2} </h4>
            <h2 style={{fontWeight: "bold"}}>4) Frank's Noodle House</h2><p>822 NE Broadway St Open 11A-3P & 5P-9P Mon-Sat</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/2aen_VbcD1ZEHIpQxnA1vQ/l.jpg" alt="reel" />
            <h4> {this.state.food3} </h4>
            <h2 style={{fontWeight: "bold"}}>5) Carne</h2><p>2512 NE Broadway Open 5P-10P Tue-Thu, 5P-11:30p Fri/Sat</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/EPOuefqUwoLsAkrR3OpRqQ/l.jpg" alt="reel" />
            <h4> {this.state.food4} </h4>
            <h2 style={{fontWeight: "bold"}}>5) Grassa</h2><p>1205 SW Washington Open 11A-10P Daily</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/61QFNz9NPD9gePe3wkgVJg/l.jpg" alt="reel" />
            <h4> {this.state.food4} </h4>
           </ul>
           </div>
         );
       }
     }
   }

export default FeedHeat
