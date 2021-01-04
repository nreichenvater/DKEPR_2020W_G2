import React, { Component } from 'react';
import Router from 'next/router';
import Auth from './authservice';

export default function withAuth(SecuredComponent){
    return class Authenticated extends Component{

        constructor(props){
            super(props);
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount(){
            let loggedInPromise = Auth.isLoggedIn();
            
            loggedInPromise.then(function(res){ 
                if(!res){
                    Router.push("/login");
                }
            });
            
            this.setState({ loggedIn: true });
        }

        render(){
            return (
                <div>
                    {
                        !this.state.loggedIn ?
                        <div className="loadingdiv">Loading...</div>
                        : <SecuredComponent {...this.props} />
                    }
                </div>
            )
        }
    }
}