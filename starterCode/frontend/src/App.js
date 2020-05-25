import React, {Fragment}  from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      team: [],
      tempuserID: 333333333,
      templeader1: 1,
      templeader2: 1,
      templeader3: 1,
      deluserID: 333333333,
      success: true
    }
  }
  
  componentDidMount() {
    fetch('/team')
      .then(res => res.json())
      .then((t) => {this.setState({ team: t.info }) });
  }
  
  getData() {
    fetch('/team')
      .then(res => res.json())
      .then((t) => { this.setState({ team: t.info}) });
  }
  
  postData(){
    //let data = 
    let options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/team', options);
    window.location.reload(false);
  }

  // Implement updating leaders on click
  updateData(x) {
    //let newLeader = 
    //let data =
    let options = {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/team', options);
    window.location.reload(false);
  }

  deleteData() {
    //let data = 
    let options ={
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/team', options);
    window.location.reload(false);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Puzzle and Dragons Leader Finder</h1>
        <div id="addBox">
          <h2>Add Listing</h2>
          <form onSubmit={()=>{this.postData()}}>
            <label for="tempuserID">Enter ID:</label><br/>
            <input type="text" name="tempuserID" value={this.state.tempuserID} onChange={this.handleChange}></input><br/>
            <label for="templeader1">Enter Leader 1:</label><br/>
            <input type="text" name="templeader1" value={this.state.templeader1} onChange={this.handleChange}></input><br/>
            <label for="templeader2">Enter Leader 2:</label><br/>
            <input type="text" name="templeader2" value={this.state.templeader2} onChange={this.handleChange}></input><br/>
            <label for="templeader3">Enter Leader 3:</label><br/>
            <input type="text" name="templeader3" value={this.state.templeader3} onChange={this.handleChange}></input><br/>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
        <div id="addBox">
          <h2>Remove Listing</h2>
          <form onSubmit={()=>{this.deleteData()}}>
            <label for="deluserID">Enter ID:</label><br/>
            <input type="text" name="deluserID" value={this.state.deluserID} onChange={this.handleChange}></input><br/>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
          {this.state.team.map(t =>
            <div class="card">
              <table>
                <tr><th>ID: {t.userID}</th></tr>
                <TeamImgs team={t} self={this}/>
                <TeamIDs team={t} self={this}/>
            </table>
            </div>
          )}
      </div>
    );
  }
}


class TeamImgs extends React.Component {
  render() {
    var leader1 = this.props.team.leader1;
    var leader2 = this.props.team.leader2;
    var leader3 = this.props.team.leader3;
    var self = this.props.self;
    var result = [];
    // Finish implementation of adding images ("http://puzzledragonx.com/en/img/book/" + number + ".png")
    result.push(
      <tr>
        <td><img></img></td>
        <td><img></img></td>
        <td><img></img></td>
      </tr>
    )
    return(result);
  }
}

class TeamIDs extends React.Component {
  render() {
    var leader1 = this.props.team.leader1;
    var leader2 = this.props.team.leader2;
    var leader3 = this.props.team.leader3;
    var self = this.props.self;
    var result = [];
    // Finish implementation of displaying current leader numbers
    result.push(
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    )
    return(result);
  }
}

export default App;
