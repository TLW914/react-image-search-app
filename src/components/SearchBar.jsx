import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    getRandomColor = () => {

        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      //this arrow function solves for binding value of this to this function
      //can also handle this by using an arrow function below, e.g. 
        //<form onSubmit={(event)=>{this.onFormSubmit(event)}} className="ui form"></form>
      onFormSubmit = (event) => {
          event.preventDefault();
          //callback is the onSubmit prop
          this.props.onSubmit(this.state.term)
            console.log(this.state.term)
      }
    
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                        <input 
                        type="text" 
                        placeholder="search here" 
                        value={this.state.term} 
                        onChange={(e)=> this.setState({term: e.target.value.toUpperCase()})}
                        style={{color: this.getRandomColor()}}
                        ></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;

//one way of solving this losing binding
// constructor(props){
//     this.drive=this.drive.bind(this)
// }
//is controlled with this approach (uncontrolled approach below did not initialize state)

// state = {
//     term: '';
// }

// value={this.state.term} onChange={(e)=> this.setState({term: e.target.value})}



//was uncontrolled with below approach //source of truth was in html element not in react component
//input was the only thing that knew the value of what was typed in...react only knew when it was happening

//arrow function approach could have been used above for one-time use where don't have to create another method on the class
// onChange={(event)=>console.log(event.target.value)}
//same as onChange={(e)=>console.log(event.target.value)}
//same as onChange={this.onInputChange}

  // onInputChange(event){
    //     console.log(event.target.value)
    // }