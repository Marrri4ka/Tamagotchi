import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import ReactDOM from 'react-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './styles.css';
import Moment from 'moment';

class Home extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(



      <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <Link to ='/forum'><a class="nav-link" href="#">Tamagotchi</a></Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div>
        {this.props.allMessages.map((element)=>
          <div>
          <li>{element.message}</li>
            <span>Mood:{element.mood}</span>
            <span>Food:{element.food}</span>
            <span>Sleep:{element.sleep}</span>
            <span>timeOpen:{element.timeOpen.from (new Moment(), true)}</span>

            <br/>

          <button onClick={()=>this.props.onLike(element)}>Play</button>
          <button onClick={()=>this.props.onDisLike(element)}>Feed</button>
          <button onClick={()=>this.props.onBed(element)}>Go to bed</button>
          <button onClick={()=>this.props.onDelete(element)}>Delete</button>
          </div>
        )}
      </div>
    </div>
    )
  }
}


Home.propTypes={
  allMessages: PropTypes.array,
  onLike: PropTypes.func,
  onDisLike: PropTypes.func,
  onDelete: PropTypes.func,
  onBed: PropTypes.func

}


export default withRouter(Home);
