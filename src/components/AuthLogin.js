import React from 'react';

class AuthLogin extends React.Component {
    state= {
        isSignedIn: null
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '440335756733-2earc6g8t6q3ps1jtho0mh9n77ajoca8.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        })
    }

    onAuthChange=()=>{
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }

    onSignIn= () => {
        this.auth.signIn();
    }

    onSignOut= () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null;
        }else if(this.state.isSignedIn) {
            return <div onClick={this.onSignOut}>Sign Out</div>
        } else {
            return <div onClick={this.onSignIn}>Sign In</div>
        }
    }
    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default AuthLogin;