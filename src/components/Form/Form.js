import React, { Component } from 'react';
import './Form.css'


class AutoCharity extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    };

    render() {
        return (
            <form className={"AutoCharity"} onSubmit={this.handleSubmit}>


                    <input className={"checkbox"} type="checkbox" value={this.state.value} onChange={this.handleChange}/>

                    <label className={"AutoCharityTextStyle"}>Пожертвовать автоматически</label>


            </form>
        );
    }
}

export default AutoCharity;