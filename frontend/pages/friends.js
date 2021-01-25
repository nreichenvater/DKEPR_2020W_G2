import React, { Component } from 'react';
import Link from 'next/link';
import API from '../api';
import Auth from '../components/auth/authservice';
import withAuth from '../components/auth/withAuth';
import Router from 'next/router';

class Friends extends Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true,
            persons: []
        }
    }

    componentDidMount(){
        
        API.get('/followed', Auth.getHeader())
        .then(res => {
            if(res.status === 200){
                console.log(res);
                const persons = res.data;
                this.setState({ persons });
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    update = (e) => {
        if(e){
            e.preventDefault();
        }
        API.get('/followed', Auth.getHeader())
        .then(res => {
            if(res.status === 200){
                console.log(res);
                const persons = res.data;
                this.setState({ persons });
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    logOut = (e) => {
        if(e){
            e.preventDefault();
        }
        localStorage.removeItem("Authorization");
        localStorage.removeItem("user");
        Router.push("/login");
    }

    follow = (e) => {
        if(e){
            e.preventDefault();
        }
        const type = e.target.id;
        const name = e.target.getAttribute('name');

        if(type === "buttonUnfollow"){
            const body = {
                callingUserId: localStorage.getItem('user'),
                unfollowUserId: name
            }
            API.post('/unfollow', body, Auth.getHeader())
            .then(res => {
                if(res.status === 200){
                    console.log(res);
                    this.update();
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
    }


    render(){
        return(
            <div className="page">
                <div id="HeaderSection" class="defaultsection header">
                    <div class="defaultcontainer header">
                        <div class="navigationdiv nomarginbottom">
                            <Link href="/"><a href="#" className="logo">Mooder</a></Link>
                            <div class="headerspace" />
                            <ul className="headermenu">
                                <li className="headermenuitem">Hallo, {localStorage.getItem("user")}!</li>
                                <li><a className="headermenuitem" onClick={this.logOut} >Ausloggen</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="defaultsection main">
                    <div class="defaultcontainer index">
                        <div className="sidemenudiv">
                            <div className="sidemenulist">
                                <Link href="/"><a href="#" className="sidemenulistentry">Feed / Post Erstellen</a></Link>
                                <Link href="/recentposts"><a href="#" className="sidemenulistentry">Aktuelle Posts</a></Link>
                                <Link href="/personalposts"><a href="#" className="sidemenulistentry">Meine Posts</a></Link>
                                <Link href="/friends"><a href="#" className="sidemenulistentry selected">Freunde</a></Link>
                                <Link href="/search"><a href="#" className="sidemenulistentry">Suche</a></Link>
                                <Link href="/settings"><a href="#" className="sidemenulistentry">Einstellungen</a></Link>
                            </div>
                        </div>
                        <div className="contentdiv">
                            <div className="feeddiv">
                            {
                                    this.state.persons.length > 0 ?
                                    (
                                        <div className="postheading">Personen denen du folgst</div>
                                    ) : (
                                        <div className="postheading">Du folgst noch niemandem</div>
                                    )
                                }
                                {
                                    this.state.persons.map(person => (
                                        <div className="person">
                                            <div className="postcontentdiv">
                                                <div className="postedtextdiv">
                                                    {person}
                                                </div>
                                            </div>
                                                <div className="button w-button" id="buttonUnfollow" name={person} onClick={this.follow}>Entfolgen</div> 
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blank" />
            </div>
        )
    }
}

export default withAuth(Friends);