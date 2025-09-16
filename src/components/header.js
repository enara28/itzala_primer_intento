import React, { Component } from "react"

export default class Header extends Component {
    render() {
        return (
            <div className="header-container-wrapper">
                <div className="logo-wrapper">Logo goes here</div>
                <div className="profile-wrapper">Profile</div>
                <div className="log-in-wrapper">Log in</div>
            </div>
        )
    }
}