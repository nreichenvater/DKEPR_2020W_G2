import React, { Component } from 'react';
import Link from 'next/link';
import withAuth from '../components/auth/withAuth';
import API from '../api';
import Auth from '../components/auth/authservice';
import Router from 'next/router';

class Personalposts extends Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true,
            posts: []
        }
    }

    componentDidMount(){
        
        API.get('/posts', Auth.getHeader())
        .then(res => {
            if(res.status === 200){
                const posts = res.data;
                posts.sort(function(a, b){return b._id.timestamp - a._id.timestamp});
                this.setState({ posts });
                console.log(res);
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
                                <Link href="/personalposts"><a href="#" className="sidemenulistentry selected">Meine Posts</a></Link>
                                <Link href="/friends"><a href="#" className="sidemenulistentry">Freunde</a></Link>
                                <Link href="/search"><a href="#" className="sidemenulistentry">Suche</a></Link>
                                <Link href="/settings"><a href="#" className="sidemenulistentry">Einstellungen</a></Link>
                            </div>
                        </div>
                        <div className="contentdiv">
                            <div className="feeddiv">
                            {
                                    this.state.posts.map(post => (
                                        <div className="post">
                                                {
                                                    post.mood === "happy" ? (
                                                        <img 
                                                            src="/images/015-smile-1.png"
                                                            loading="lazy" 
                                                            alt="" 
                                                            className="image emoti posted" 
                                                        />
                                                    ) : post.mood === "neutral" ? (
                                                        <img 
                                                            src="/images/034-neutral.png"
                                                            loading="lazy" 
                                                            alt="" 
                                                            className="image emoti posted" 
                                                        />
                                                    ) : post.mood === "sad" ? (
                                                        <img 
                                                        src="/images/021-sad.png"
                                                        loading="lazy" 
                                                        alt="" 
                                                        className="image emoti posted" 
                                                        />
                                                    ) : (
                                                        <div />
                                                    )
                                                }
                                            <div className="postcontentdiv">
                                                <div className="postedbydiv">
                                                    {post.userid}
                                                </div>
                                                <div className="posteddatediv">
                                                    {post.timestamp}
                                                </div>
                                                <div class="postseparator" />
                                                <div className="postedtextdiv">
                                                    {post.post}
                                                </div>
                                            </div>
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

export default withAuth(Personalposts);