import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        return (
            <h1>Hello, World</h1>
        )
    }
}

function select(state) {
    return ({
        data: state
    })
}
export default connect(select)(App)
