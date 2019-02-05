import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import firebase from 'firebase'

import Header from '../Header'
import Main from '../Main'
import Login from '../Login'
import Profile from '../Profile'


class App extends Component {
    constructor() {
        super()

        this.state ={
            user: null
        }
        this.handleOnAuth = this.handleOnAuth.bind(this)
        this.handleLogout = this.handleLogout.bind(this)

    }

    componentWillMount () {
        firebase.auth().onAuthStateChanged(user => {
            (user) ? this.setState({ user }) : this.setState({ user: null })
        })
    }

    handleOnAuth () {
        const provider = new firebase.auth.GithubAuthProvider()

        firebase.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesión`))
            .catch(error => console.error(`Error: ${error.code}: ${error.message}`))
    }

    handleLogout () {
        firebase.auth().signOut()
            .then(() => console.log('Te has desconectado correctamente'))
            .catch(() => console.error('Un Error ocurrió'))
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route
                        path="/"
                        exact
                        render = {() => (this.state.user) ?
                            <Main
                                user={this.state.user}
                                onLogout={this.handleLogout}
                            /> :
                            <Login onAuth={this.handleOnAuth} />}
                    />
                    <Route
                        path='/profile'
                        render = {() =>
                            <Profile
                                picture={this.state.user.photoURL}
                                username={this.state.user.email.split('@')[0]}
                                displayName={this.state.user.displayName}
                                location={this.state.user.location}
                                emailAddress={this.state.user.email}
                            />}
                    />
                    <Route
                        path='/user/:username'
                        render={ ({match}) =>
                            <Profile
                                displayName={match.params.username}
                                username={match.params.username}
                            />}
                    />
                </div>
            </Router>
        )
    }
}

export default App
