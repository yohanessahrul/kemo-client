import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
  } from 'reactstrap';

import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';
import Navigation from '../components/Navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticleByIdAction } from '../actions/action.artikel';

class ArtikelPageById extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      currentArticle: null
    }
  }

  componentDidMount () {
    let id = window.location.pathname.split('/')[2];
    let token = localStorage.getItem('token');
    this.props.getArticleByIdAction(id, token);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      isLoading: true,
      currentArticle: nextProps.state.reducerArticle.readArticle
    })
  }

  render() {
    const { slideSection } = this.props.lang.home;
    if (this.state.isLoading) {
      return (
        <div>
          <div className="headerWrap">
            <Navigation lang={this.props.lang.menu}/>
          </div>
          <FixedButtonDaftarMobile btnlang={slideSection.btnDaftarMobile}/>
          <Container style={{ paddingBottom: '100px' }}>
            <div className="marginTop"></div>
            <Row>
              <Col>
                <Container style={{ }}>
                  
                </Container>
              </Col>
            </Row>
            <Row>
              <Col md="8">
                <h1>{this.state.currentArticle.judul}</h1>
                <img src={this.state.currentArticle.img}/>
                {/* {JSON.stringify(this.state.currentArticle.isi)} */}
                <div dangerouslySetInnerHTML={{ __html: this.state.currentArticle.isi }}></div>
              </Col>
            </Row>
          </Container>
      </div>  
    );
    } else {
      return (<div>Loading..</div>)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getArticleByIdAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtikelPageById);