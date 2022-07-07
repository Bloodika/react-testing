import React, {Component} from 'react';
import {getNextCat} from "../Util/api";

class ClassBasedComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cat: {picture: ""}
        }
    }

    getNextPicture = () => {
        getNextCat().then(res => {
            this.setState({cat: {picture: res.data.file}})
        }).catch(err => console.log(`error: ${err}`))
    }

    render() {
        return (
            <>
                <img src={this.state.cat.picture} alt={"kitty"}/>
                <button onClick={this.getNextPicture}>Next</button>
            </>
        );
    }
}

export default ClassBasedComponent;
