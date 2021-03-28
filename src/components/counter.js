import React, { Component } from 'react'
import {connect} from "react-redux"

class counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}
function mapStateToProps(state){
    return { counter: state.counterReducer }
}

export default connect(mapStateToProps)(counter);