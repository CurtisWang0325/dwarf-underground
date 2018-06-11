import React, { Component } from 'react'
import MainArticle from './MainArticle'
import Ads from './Ads'
import OtherLinks from './OtherLinks'

class Body extends Component{
    render(){
        return (
            <main className="expanded row">
                <MainArticle />
                <Ads />
                <OtherLinks />
            </main>
           )
    }
}

export default Body