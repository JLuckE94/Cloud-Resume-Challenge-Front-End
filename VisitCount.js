import React, { Component } from 'react'
import axios from 'axios'

export class VisitCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: -1,
            errorMsg: null
        }
    }

    componentDidMount() {
        axios.get('https://yp6svl2pt7.execute-api.us-east-1.amazonaws.com/Test/get')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMsg:'Error retreiving data'})
        })
    }

    render (){
        const { posts, errorMsg } = this.state
        return (
            <div style={{color:'white'}}>
                Number of Visits{' '}
                {
                    posts > 0?
                    posts:
                    null
                }
                {errorMsg? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}
