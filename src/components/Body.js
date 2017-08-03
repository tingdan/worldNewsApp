import React, { Component } from 'react'
import Loader from 'halogen/PulseLoader'

import { connect} from 'react-redux'

class Body extends Component {

    renderNews(news){
        return news.map(onenew => {
            return (
                <div className="col-md-6 col-xs-12 newsFrame">
                    <img src={onenew.urlToImage} alt={onenew.title} className="newImg img-responsive" />
                    <h4 className="newTitle"><a href={onenew.url}>{onenew.title}</a></h4>
                    <p className="newAuthor">{onenew.author}</p>

                </div>
            )
        })
    }

    render() {
        if(this.props.news.length === 0){
            return (
                <div >
                    <Loader color="black" size="40px" margin="20px"/>
                    <h3>Realtime Top News Web Application</h3>
                    <h4> from various news agencies</h4>
                    <div className="navbar navbar-default navbar-fixed-bottom">
                        <p className="footer">Developed by Ting Danni with React & Redux</p>
                    </div>

                </div>
            )
        } else {
            return (
                <div>
                    <div className="row">
                        {this.renderNews(this.props.news)}

                    </div>
                    <div className="navbar navbar-default navbar-fixed-bottom">
                        <p className="footer">Developed by Ting Danni with React & Redux</p>
                    </div>
                </div>

            )
        }


    }
}

function mapStateToProps(state) {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps)(Body);
