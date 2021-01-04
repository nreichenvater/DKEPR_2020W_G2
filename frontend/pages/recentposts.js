import React, { Component } from 'react';
import Link from 'next/link';
import withAuth from '../components/auth/withAuth';

class Recentposts extends Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true
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
                                <Link href="/"><a href="#" className="sidemenulistentry">Feed / Post Erstellen</a></Link>
                                <Link href="/recentposts"><a href="#" className="sidemenulistentry selected">Aktuelle Posts</a></Link>
                                <Link href="/personalposts"><a href="#" className="sidemenulistentry">Meine Posts</a></Link>
                                <a href="#" className="sidemenulistentry">Freunde</a>
                                <a href="#" className="sidemenulistentry">Suche</a>
                            </div>
                        </div>
                        <div className="contentdiv">
                            <div className="feeddiv">
                            <div className="postheading">Aktuell</div>
                               <div className="post">
                                    <img src="/images/015-smile-1.png" loading="lazy" alt="" className="image emoti posted" />
                                    <div className="postcontentdiv">
                                        <div className="postedbydiv">
                                            Nicola Reichenvater
                                        </div>
                                        <div className="posteddatediv">
                                            20.10.2020 - 16:19
                                        </div>
                                        <div class="postseparator" />
                                        <div className="postedtextdiv">
                                            Happy am Programmieren!
                                        </div>
                                    </div>
                               </div>
                               <div className="postheading">Früher</div>
                               <div className="post">
                                    <img src="/images/015-smile-1.png" loading="lazy" alt="" className="image emoti posted" />
                                    <div className="postcontentdiv">
                                        <div className="postedbydiv">
                                            Nicola Reichenvater
                                        </div>
                                        <div className="posteddatediv">
                                            10.10.2020 - 16:19
                                        </div>
                                        <div class="postseparator" />
                                        <div className="postedtextdiv">
                                            Saul Goodman
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blank" />
            </div>
        )
    }
}

export default withAuth(Recentposts);