import React from 'react'
import Dock from 'react-dock'


import FaClose from 'react-icons/lib/fa/close'
import FaNewspaperO from 'react-icons/lib/fa/newspaper-o'

import { connect } from 'react-redux'

import {changeNews, changeAgency} from '../actions'

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isVisible: false
        }

    }

    render() {
        console.log(this.props.currentAgency);
        return (
            <div>
                <Dock position="top" isVisible={this.state.isVisible}>
                    <h3>Select News Agency</h3>
                    <img className="agency-small-logo"
                        src="./images/bbc.png"
                        onClick={() => {
                            this.props.onChangeNews("bbc-news");
                            this.props.onChangeAgency("bbc");
                            this.setState({ isVisible: !this.state.isVisible});
                        }
                    }/>
                    <img className="agency-small-logo"
                        src="./images/cnn.png"
                        onClick={() => {
                            this.props.onChangeNews("cnn");
                            this.props.onChangeAgency("cnn");
                            this.setState({ isVisible: !this.state.isVisible});
                        }
                    }
                    />
                    <img className="agency-small-logo"
                        src="./images/espn.png"
                        onClick={() => {
                            this.props.onChangeNews("espn");
                            this.props.onChangeAgency("espn");
                            this.setState({ isVisible: !this.state.isVisible});
                        }
                    }/>

                    <img className="agency-small-logo"
                        src="./images/four-four-two.png"
                        onClick={() => {
                            this.props.onChangeNews("four-four-two");
                            this.props.onChangeAgency("four-four-two");
                            this.setState({ isVisible: !this.state.isVisible});
                        }
                    }/>

                    <img className="agency-small-logo"
                        src="./images/the-new-york-times.png"
                        onClick={() => {
                            this.props.onChangeNews("the-new-york-times");
                            this.props.onChangeAgency("the-new-york-times");
                            this.setState({ isVisible: !this.state.isVisible});
                        }
                    }/>

                    <img className="agency-small-logo"
                        src="./images/reuters.png"
                        onClick={() => {
                            this.props.onChangeNews("reuters");
                            this.props.onChangeAgency("reuters");
                            this.setState({ isVisible: !this.state.isVisible});
                        }
                    }/>

                    <FaClose
                        className="pull-right"
                        size={70}

                        onClick={() => this.setState({ isVisible: !this.state.isVisible})}/>


                </Dock>
                <img className="img-responsive" style={{height:"140px", width:"60%", margin:'auto'}} src={this.props.currentAgency.imgLogo}/>
                <br /><br />
                <button className="btn btn-default" onClick={() => this.setState({ isVisible: !this.state.isVisible})}>
                    <FaNewspaperO size={30}/> Choose News AGENCY
                </button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentAgency: state.currentAgency
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeNews: agency => {
            dispatch(changeNews(agency))
        },
        onChangeAgency: agency => {
            dispatch(changeAgency(agency))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
