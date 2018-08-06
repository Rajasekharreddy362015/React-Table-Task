import React, { Component } from 'react'
import PersonForms from './Table_Form'

class PersonList extends Component {
    constructor() {
        super();

        this.state = {
            "Persons": [],
            latestId: 1
        }
        this.handleRemoveRow = this.handleRemoveRow.bind(this);
    }

    getPerson = (newperson) => {
        console.log('getting from child component person deatails', newperson)
        let newPerson = Object.assign({}, newperson, { personId: this.state.latestId })
        let newPersonList = [...this.state.Persons, newPerson]
        this.setState({
            Persons: newPersonList,
            latestId: this.state.latestId + 1
        })

    }

    handleRemoveRow = () => {
        this.setState({
            Persons: this.state.Persons.slice(0, -1)
        });
    };


    componentDidUpdate() {
        localStorage.setItem('_increment', JSON.stringify(this.state))
    }
    componentDidMount() {
        const data = localStorage.getItem('_increment')
        if (data) {
            this.setState(newperson => {
                return JSON.parse(data)
            })
        }
    }

    render() {
        const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };

        return (
            <div className="ui container">
                <h3 className="App" style={{ color: "#fc1515" }}>Person Information</h3>
                <table className="table table-bordered">
                    <thead style={{ background: "#8b660c", color: "#fcddb5" }}>
                        <tr>
                            <th>Serial No</th>
                            <th>Person Name</th>
                            <th>Created On</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ background: "#96cccc" }}>
                        {this.state.Persons.map(data =>
                            <tr key={data.personId} >
                                <td>{data.personId}</td>
                                <td>{data.personName}</td>
                                <td>{(new Date()).toLocaleDateString('en-US', DATE_OPTIONS)}</td>
                                <td>


                                    <button className="btn btn-danger"
                                        onClick={() => this.handleRemoveRow(data)}
                                    >Remove</button>
                                </td>

                            </tr>
                        )}


                    </tbody>
                </table>

                <div className="row">
                    <div className="two wide column col-sm-6">
                        <PersonForms addPerson={this.getPerson} />
                    </div>

                </div>

            </div>
        )
    }
}
export default PersonList;