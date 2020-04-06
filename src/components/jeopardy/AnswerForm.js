import React, {Component } from 'react';

class AnswerForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            answer: ''
        }
    }
    handleChange = e => {
        this.setState({
            answer: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.checkAnswer(this.state.answer);
        this.setState({
            answer: ''
        });
    }
    render() {
        return (
            <div className="AnswerForm">
                <form onSubmit={}>
                    <input
                        type="text"
                        name="answer"
                        placeholder="Answer"
                        onChange={this.handleChange}
                    />
                    <button
                        onSubmit={}
                    >Go</button>
                </form>
            </div>
        )
    }
}

export default AnswerForm