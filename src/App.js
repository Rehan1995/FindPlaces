import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className = "container">
      <div className = "row">
      <div className = "col-md-8">
      <form >
                
      <fieldset>
        <legend>Search nearby places</legend>
        <div class="form-group row">

          <div className ="col-md-10">
            <div className="form-group row">
              <label className="col-sm-4" htmlFor="exampleInputEmail1">Place</label>
            </div>
            <div class="col-sm-8">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search here"/>
            </div>
          </div>
        </div>

        <div className>
          <div className >
            <button className ="btn btn-primary"> search </button>
          </div>
        </div>
      </fieldset>
           
        </form>
          </div>
            <div className = "col-md-4">
              <h2> saved places </h2> 
          </div>
        </div>
      </div>
       
    );
  }
}

export default App;
