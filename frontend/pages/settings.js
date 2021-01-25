import React, { Component } from 'react';
import Link from 'next/link';
import withAuth from '../components/auth/withAuth';
import API from '../api';
import Auth from '../components/auth/authservice';
import Router from 'next/router';

class Settings extends Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true,
            posts: []
        }
    }

    componentDidMount(){
        
        API.get('/visibility', Auth.getHeader())
        .then(res => {
            if(res.status === 200){
                console.log(res);
                const visible = res.data;
                console.log(visible);
                if(visible){
                    document.getElementById('radioPublic').checked = true;
                    //document.getElementById('radioPrivate').checked = false;
                }
                else {
                    //document.getElementById('radioPublic').checked = false;
                    document.getElementById('radioPrivate').checked = true;
                }
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

    handleRadio = (e) => {
        let visible = true;
        if(document.getElementById('radioPublic').checked){
            visible = true;
        }
        else if(document.getElementById('radioPrivate').checked){
            visible = false;
        }
        const body = {
            visible: visible
        }

        API.patch('/visibility', body, Auth.getHeader())
        .then(res => {
            if(res.status === 200){
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
                                <Link href="/search"><a href="#" className="sidemenulistentry">Suche</a></Link>
                                <Link href="/settings"><a href="#" className="sidemenulistentry selected">Einstellungen</a></Link>
                            </div>
                        </div>
                        <div className="contentdiv">
                            <div className="feeddiv">
                                <div class="descriptiontext marginbottom margintop">Wenn dein Konto privat ist, kannst weder du, noch Posts von dir öffentlich gefunden werden, außer von deinen Followern.</div>
                                <label class="settingsradiobutton">
                                    <input type="radio" onClick={this.handleRadio.bind(this)} data-name="Radio" id="radioPublic" name="radioPrivate" value="Radio" class="radio" />
                                    <span class="radio span">Öffentliches Konto</span>
                                </label>
                                <label class="settingsradiobutton">
                                    <input type="radio" onClick={this.handleRadio.bind(this)} data-name="Radio" id="radioPrivate" name="radioPrivate" value="Radio" class="radio" />
                                    <span class="radio span">Privates Konto</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blank" />
            </div>
        )
    }
}

export default withAuth(Settings);