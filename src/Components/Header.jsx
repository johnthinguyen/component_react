import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div >
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container  d-flex justify-content-between">
                        <a class="navbar-brand text-white">Start Bootstrap
                        </a>
                        <div class="navbar-nav">
                            <a class="nav-link text-white">Home</a>
                            <a class="nav-link ">About</a>
                            <a class="nav-link ">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
