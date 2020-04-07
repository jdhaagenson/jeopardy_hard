import React, {Component} from 'react';
import './Contact.css'

class Contact extends Component{
    state = {
        submitted:false,
        formData : {
            firstName: '',
            lastName: ''
        }
    }
    handleChange = e => {
        const formData = {...this.state.formData}
        formData[e.target.name] = e.target.value
        this.setState({formData:formData})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({submitted:true})
    }
    handleReset = e => {
        this.setState({
            submitted:false,
            formData: {
                firstName:'',
                lastName:''
            }
        })
    }
    render(){
        if (this.state.submitted) {
            return(
                <div className="Contact">
                    <p>Thank you, {this.state.formData.firstName}, for submitting the form.</p>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            )
        }
        return (
        <div className="Contact">
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={this.handleChange}
                        value={this.state.formData.firstName}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={this.handleChange}
                        value={this.state.formData.lastName}
                    />
                </div>
                <button>Submit Form</button>
            </form>
            <div>
                {this.state.formData.firstName}
                {this.state.formData.lastName}
            </div>
        </div>
        )
    }
}

export default Contact;