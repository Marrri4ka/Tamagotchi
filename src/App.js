import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Switch, Route, withRouter} from 'react-router-dom';
import NewPost from './components/NewPost';


class App extends React.Component {

  onLike = element => {
  const newmessageList = [...this.state.messageList];
  const index = newmessageList.indexOf(element);
  newmessageList[index].mood++;
  this.setState({ messageList: newmessageList });
};

onDisLike = element => {
const newmessageList = [...this.state.messageList];
const index = newmessageList.indexOf(element);
newmessageList[index].food++;
this.setState({ messageList: newmessageList });
};
onBed = element => {
const newmessageList = [...this.state.messageList];
const index = newmessageList.indexOf(element);
newmessageList[index].sleep++;
this.setState({ messageList: newmessageList });
};

onDelete = element => {
const newmessageList = [...this.state.messageList];
const index = newmessageList.indexOf(element);
newmessageList.splice(index,1);
this.setState({ messageList: newmessageList });
};



  constructor (props){
    super(props);
    this.state = {
      messageList: []
    }
    this.onNewCreation = this.onNewCreation.bind(this);
  };
  onNewCreation(message, timeOpen, pokemon){
    message.mood = 100;
    message.food=80;
    message.sleep= 60;
    message.timeOpen = timeOpen;
    message.pokemon = pokemon;



    var newMessageList = this.state.messageList.slice();
    newMessageList.push(message);
    this.setState({messageList: newMessageList});


  }

  render() {
    const oldState = this.state;
    setTimeout(()=> this.setState({oldState}),1000);
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><Home allMessages={this.state.messageList} onLike={this.onLike} onDisLike={this.onDisLike} onDelete={this.onDelete} onBed={this.onBed}/>}/>
          <Route path='/forum' render={()=><NewPost onNewCreationProperty={this.onNewCreation}/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
