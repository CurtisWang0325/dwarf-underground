import React, { Component } from 'react'
import ArticleHead from './ArticleHead'
import ArticleBody from './ArticleBody'
import ArticleLinks from './ArticleLinks'

class MainArticle extends Component{
    render() {
        return (
            <div className="large-8 medium-12 columns article">
              <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>

              <ArticleHead />
              <ArticleBody />
              <ArticleLinks />
            </div>
          
        )
    }
}

export default MainArticle