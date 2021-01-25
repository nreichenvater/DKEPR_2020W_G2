import React, { Component } from 'react';
import Link from 'next/link';
import API from '../api';
import Auth from '../components/auth/authservice';
import withAuth from '../components/auth/withAuth';
import Router from 'next/router';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true,
            posts: [],
            persons: [],
            searchText: "",
        }
    }

    handleChange = (e) => {
        if(e){
            e.preventDefault();
        }
        if(e.target.id === "searchInput"){
            this.setState({ searchText: e.target.value, persons: [], posts: [] }, () => {
                const headers = Object.create({
                    headers: {
                        searchingUser: localStorage.getItem("user"),
                        searchString: this.state.searchText
                    }
                });
                if(this.state.searchText.length > 0){
                    API.get('/search', headers)
                    .then(res => {
                        if(res.status === 200){
                            const posts = res.data.searchResultPosts;
                            const persons = res.data.searchResultUsers;
                            posts.sort(function(a, b){return b._id.timestamp - a._id.timestamp});
                            this.setState({ posts, persons }, () => console.log(this.state.posts));
                            console.log(res);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
                }
            });
        }
    }

    update = (e) => {
        if(e){
            e.preventDefault();
        }
        const headers = Object.create({
            headers: {
                searchingUser: localStorage.getItem("user"),
                searchString: this.state.searchText
            }
        });
        if(this.state.searchText.length > 0){
            API.get('/search', headers)
            .then(res => {
                if(res.status === 200){
                    const posts = res.data.searchResultPosts;
                    const persons = res.data.searchResultUsers;
                    posts.sort(function(a, b){return b._id.timestamp - a._id.timestamp});
                    this.setState({ posts, persons });
                    console.log(res);
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
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
        if(type === "buttonFollow"){
            const body = {
                callingUserId: localStorage.getItem('user'),
                followUserId: name
            }
            API.post('/follow', body, Auth.getHeader())
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
        else if(type === "buttonUnfollow"){
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
                                <Link href="/friends"><a href="#" className="sidemenulistentry">Freunde</a></Link>
                                <Link href="/search"><a href="#" className="sidemenulistentry selected">Suche</a></Link>
                                <Link href="/settings"><a href="#" className="sidemenulistentry">Einstellungen</a></Link>
                            </div>
                        </div>
                        <div className="contentdiv">
                            <div className="createpostdiv">
                                <form className="createpostform">
                                    <input className="defaulttextfield input search" id="searchInput" onChange={this.handleChange} type="text" placeHolder="Wonach suchst du?" />
                                </form>
                            </div>
                            <div className="feeddiv">
                                {
                                    this.state.persons.length > 0 ?
                                    (
                                        <div className="postheading">Personen</div>
                                    ) : (
                                        <div />
                                    )
                                }
                                {
                                    this.state.persons.map(person => (
                                        <div className="person">
                                            <div className="postcontentdiv">
                                                <div className="postedtextdiv">
                                                    {person.username}
                                                </div>
                                            </div>
                                                {
                                                    person.username != undefined && person.followed ?
                                                    (
                                                        <div className="button w-button" id="buttonUnfollow" name={person.username} onClick={this.follow}>Entfolgen</div>
                                                    ) : (
                                                        <div className="button w-button" id="buttonFollow" name={person.username} onClick={this.follow}>Folgen</div>
                                                    )
                                                }
                                        </div>
                                    ))
                                }
                                {
                                    this.state.posts.length > 0 ?
                                    (
                                        <div className="postheading">Posts</div>
                                    ) : (
                                        <div />
                                    )
                                }
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

export default withAuth(Search);