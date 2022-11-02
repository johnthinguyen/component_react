import React, { Component } from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import Item from './Item'

export default class BaiTapThucHanh extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Item />
                <Footer />
            </div>
        )
    }
}
