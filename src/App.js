import React, {Component, useState } from "react";
import './App.css';
import axios from 'axios';
import Header from './components/Header.jsx';
import HomeBody from './components/HomeBody.jsx';
import KoreanFood from './components/KoreanFood.jsx';
import Tipping from './components/Tipping.jsx';
import PodCart from './components/PodCart.jsx';
import Rez from './components/Rez.jsx';
import Underrated from './components/Underrated.jsx';
import FeedHeat from './components/FeedHeat.jsx';
import RestaurantGuide from './components/RestaurantGuide.jsx';
import { Switch, Route } from 'react-router-dom';
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'
import Home from './components/Home.jsx';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      user: {}

    };
  }
  componentDidMount() {
    this.loginStatus()
  }

    loginStatus = () => {
      axios.get('http://localhost:3001/logged_in', {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
    }

    handleLogin = (data) => {
        this.setState({
          isLoggedIn: true,
          user: data.user
        })
      }

    handleLogout = () => {
        this.setState({
        isLoggedIn: false,
        user: {}
        })
      }

  render() {
     return (
        <div>
        <div className="App">
          < Header />
              <Switch>
              <Route path='/homeBody' component={HomeBody} />
              <Route path='/koreanFood' component={KoreanFood} />
              <Route path='/tipping' component={Tipping} />
              <Route path='/rez' component={Rez} />
              <Route path='/feedheat' component={FeedHeat} />
              <Route path='/underrated' component={Underrated} />
              <Route path='/podcart' component={PodCart} />
              <Route exact path='/' component={HomeBody} />
              <Route path='/restaurantguide' component={RestaurantGuide} />
              <Route
                  exact path='/'
                  render={props => (
                  <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
                  )}
                />
                <Route
                   exact path='/login'
                  render={props => (
                  <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
                  )}
                />
                <Route
                   exact path='/signup'
                  render={props => (
                  <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
                  )}
                  />
            </Switch>
          </div>
        </div>
      );
    }
}
export default App;
