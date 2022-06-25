import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import LoginPage from './LoginPage'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <LoginPage />
            </div>
        )
    }
}