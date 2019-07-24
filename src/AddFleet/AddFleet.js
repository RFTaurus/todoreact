import React, {Component} from 'react';
import './AddFleet.css';

class AddFleet extends Component {
    // Note : Container have a Model Inside

    // Model
    state = {
        name: null,
        age: null,
        shipClass: null,
    }

    // Method
    changeData = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitData = (e) => {
        e.preventDefault();
        this.props.addFleet(this.state);
    }

    // Rendered Component
    render(){
        return(
            <div className="add-fleet">
                <h2>Add Your New Fleet</h2>
                <form onSubmit={this.submitData}>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" onChange={this.changeData} />
                    <br/>
                    <label htmlFor="age">Age : </label>
                    <input type="number" id="age" onChange={this.changeData} />
                    <br/>
                    <label htmlFor="shipClass">Ship Class : </label>
                    <input type="text" id="shipClass" onChange={this.changeData} />
                    <br/>
                    <button type="submit">Add Fleet</button>
                </form>
                <br/>
            </div>
        );
    }            
}

export default AddFleet;