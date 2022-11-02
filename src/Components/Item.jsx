import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-4">
                            <div className="card bg-light border-0 h-100">
                                <div className='card-body text-center p-4'>
                                    <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                    <i class="fa-solid fa-album-collection-circle-user"></i>
                                    </div>
                                    <h2>Fresh new layout</h2>
                                    <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card bg-light border-0 h-100">
                                <div className='card-body text-center p-4'>
                                    <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                        <i className="fa-solid fa-cloud-arrow-down"></i>
                                    </div>
                                    <h2>Free to download</h2>
                                    <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card bg-light border-0 h-100">
                                <div className='card-body text-center p-4'>
                                    <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                        <i className="fa-solid fa-cloud-arrow-down"></i>
                                    </div>
                                    <h2>Jumbotron hero header</h2>
                                    <p>The heroic part of this template is the jumbotron hero header!</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4">
                            <div className="card bg-light border-0 h-100">
                                <div className='card-body text-center p-4'>
                                    <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                        <i className="fa-solid fa-cloud-arrow-down"></i>
                                    </div>
                                    <h2>Feature boxes</h2>
                                    <p>We've created some custom feature boxes using Bootstrap icons!</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card bg-light border-0 h-100">
                                <div className='card-body text-center p-4'>
                                    <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                        <i className="fa-solid fa-cloud-arrow-down"></i>
                                    </div>
                                    <h2>Simple clean code</h2>
                                    <p>We keep our dependencies up to date and squash bugs as they come!</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card bg-light border-0 h-100">
                                <div className='card-body text-center p-4'>
                                    <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                        <i className="fa-solid fa-cloud-arrow-down"></i>
                                    </div>
                                    <h2>A name you trust</h2>
                                    <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
