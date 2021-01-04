import React, { Component } from 'react';
import Link from 'next/link';
import API from '../api';
import Auth from '../components/auth/authservice';
import withAuth from '../components/auth/withAuth';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true,
            posts: [],
            moodText: "",
        }
    }

    componentDidMount(){

        localStorage.setItem('user', 'seppHati1');

        let body = {
            userId: "seppHati1"
        }
        
        API.post('/feed', body, Auth.getHeader())
        .then(res => {
            if(res.status === 200){
                const posts = res.data;
                this.setState({ posts }, () => console.log(this.state.posts));
                console.log(res);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleChange = (e) => {
        if(e){
            e.preventDefault();
        }
        if(e.target.id === "moodInput"){
            this.setState({ moodText: e.target.value }, () => console.log(this.state.moodText));
        }
    }

    createPost = (e) => {
        if(e){
            e.preventDefault();
        }
        
        const mood = e.currentTarget.id;

        let bodyTwo = {
            userid: localStorage.getItem('user'),
            post: this.state.moodText,
            mood,
            hashtags: ["#homeoffice","#corona"]
        }

        API.post('/post', bodyTwo, Auth.getHeader())
        .then(res => {
            if(res.status === 200){
                console.log("bast");
                document.getElementById("moodInput").value = "";
                this.refreshPosts();
            }
        })
        .catch(err => {
            console.log("bast ned");
        })
    }

    refreshPosts() {
        console.log("do jetza");
        let body = {
            userId: "seppHati1"
        }
        
        API.post('/feed', body, Auth.getHeader())
        .then(res => {
            if(res.status === 200){
                const posts = res.data;
                this.setState({ posts }, () => console.log(this.state.posts));
                console.log(res);
            }
        })
        .catch(err => {
            console.log(err);
        });
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
                                {
                                    this.state.loggedIn ?
                                    <li className="headermenuitem">Ausloggen</li>
                                    : <div><li className="headermenuitem fat">Registrieren</li><li className="headermenuitem">Einloggen</li></div>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="defaultsection main">
                    <div class="defaultcontainer index">
                        <div className="sidemenudiv">
                            <div className="sidemenulist">
                                <Link href="/"><a href="#" className="sidemenulistentry selected">Feed / Post Erstellen</a></Link>
                                <Link href="/recentposts"><a href="#" className="sidemenulistentry">Aktuelle Posts</a></Link>
                                <Link href="/personalposts"><a href="#" className="sidemenulistentry">Meine Posts</a></Link>
                                <a href="#" className="sidemenulistentry">Freunde</a>
                                <a href="#" className="sidemenulistentry">Suche</a>
                            </div>
                        </div>
                        <div className="contentdiv">
                            <div className="createpostdiv">
                                <form className="createpostform">
                                    <img id="usericon" src="/images/UserIcon.png" loading="lazy" alt="" className="image thumbnail" />
                                    <input className="defaulttextfield input createpost" id="moodInput" onChange={this.handleChange} type="text" placeHolder="Wie fühlst du dich?" />
                                </form>
                                <div class="createpostseparator" />
                                <div className="chooseemotidiv">
                                    <a href="#" onClick={this.createPost} id="happy">
                                        <img id="usericon" src="/images/015-smile-1.png" loading="lazy" alt="" className="image emoti choose" />
                                    </a>
                                    <a href="#" onClick={this.createPost} id="neutral">
                                        <img id="usericon" src="/images/034-neutral.png" loading="lazy" alt="" className="image emoti choose" />
                                    </a>
                                    <a href="#" onClick={this.createPost} id="sad">
                                        <img id="usericon" src="/images/021-sad.png" loading="lazy" alt="" className="image emoti choose" />
                                    </a>
                                </div>
                            </div>
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

export default withAuth(Home);