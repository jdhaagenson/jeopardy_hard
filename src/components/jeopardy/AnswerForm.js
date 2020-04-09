import React, {Component } from 'react';

class AnswerForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            answer: ''
        }
    }
    handleChange = e => {
        // e.preventDefault()
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
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="answerbox"
                        type="text"
                        name="answer"
                        placeholder="Answer"
                        onChange={this.handleChange}
                        value={this.state.answer}
                    />
                    <button
                        type="submit"
                    >Go</button>
                </form>
            </div>
        )
    }
}

export default AnswerForm