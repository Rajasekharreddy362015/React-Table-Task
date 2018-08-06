import React, { Component } from 'react'

class PersonForms extends Component {
    constructor() {
        super()
        this.state = {
            productName: ''
            
        }
    }
    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state)
        this.resetForm();

    }
    
    resetForm() {
        this.setState({
            personName: ''
        })
    }
    
    render() {
        return (
            <div className="ui container-fluid" style={{background: "#b6aaaa", padding: 20 ,marginBottom: 15}}>
                <h3 style={{color: "#e6fcfc"}}> Person Details </h3><br />
                <form className="ui form" onSubmit={this.handleSubmit} >
                    <div className="field">
                        <label style={{color: "black"}}>Person Name :&nbsp;</label>
                        <input type="text" name="personName" placeholder="Person Name"
                            onChange={this.handleChange}
                            value={this.state.personName} style={{borderRadius: 10, padding: 5, background: "#fcf7f7"}} />
                    </div><br />
                    
                    <button className="btn btn-success" type="submit" style={{borderRadius: 10}}>Submit</button>
                </form>
            </div>
        )
    }
}
export default PersonForms;