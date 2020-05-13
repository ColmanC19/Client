import React from 'react';


  class Rez extends React.Component {
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
          <h1>Hard to find a last minute group spot? Did your hunger just kick in? Find a great walk-in spot here!</h1>
          <p> By Colman Currie</p>
          <ul>
          <h2 style={{fontWeight: "bold"}}>1) Pepper Box Cafe</h2><p>932 Se Morrison St Open 8A-3P Everyday except Tue</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/S8PJeuST5NipTq5clj0eog/l.jpg" alt="reel" />
           <h4> {this.state.food} </h4>
           <h2 style={{fontWeight: "bold"}}>2) Baerlic Beer Garden and Food Pod</h2><p>6035 NE Halsey Open Noon-10P Daily</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/ttX904k_kknOz6e4lDbVSA/l.jpg" alt="reel" />
           <h4> {this.state.food1} </h4>
           <h2 style={{fontWeight: "bold"}}>3) Lardo</h2><p>1212 SE Hawthorne St or 1205 SW Washington St Open 11A-10P Daily </p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/8PEZlaxIAZP9tZH7Ib_k6Q/o.jpg" alt="reel" />
           <h4> {this.state.food2} </h4>
           <h2 style={{fontWeight: "bold"}}>4) Baby Doll Pizza</h2><p>2835 SE Stark St Open 11A-2A Daily</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/UOlBQGlwqqE9MjWPXunfmg/l.jpg" alt="reel" />
           <h4> {this.state.food3} </h4>
           <h2 style={{fontWeight: "bold"}}>5) Double Dragon</h2><p>1235 SE Division St Open 12P-12A Daily</p><img className="underratedImage" src="https://s3-media0.fl.yelpcdn.com/bphoto/P_u1T1oACtudtzGQ33erSA/o.jpg" alt="reel" />
           <h4> {this.state.food4} </h4>
          </ul>
          </div>
        );
      }
    }
  }

export default Rez
