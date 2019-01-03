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

import { Helmet } from 'react-helmet';

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
      console.log('Tipe judul ==> ', typeof this.state.currentArticle.judul)
      return (
        <div>
          <Helmet>
            <title>{`${this.state.currentArticle.judul}`}</title>
            <meta name="description" content={`${this.state.currentArticle.isi.replace(/(<([^>]+)>)/ig,"").substring(0, 200)}`} data-react-helmet="true" />
            <meta name="keywords" content="perjalanan medis" data-react-helmet="true" />
            <meta name="author" content="PT Vitamin Masyarakat Sehat" data-react-helmet="true" />

            <meta property="og:url" content="http://kemodijakarta.com" data-react-helmet="true" />
            <meta property="og:title" content={`${this.state.currentArticle.judul}`} data-react-helmet="true" />
            <meta property="og:image" content={`${this.state.currentArticle.img}`} data-react-helmet="true" />
            <meta property="og:description" content={`${this.state.currentArticle.isi.replace(/(<([^>]+)>)/ig,"").substring(0, 200)}`} data-react-helmet="true" />
          </Helmet>
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
                <img src={this.state.currentArticle.img} alt={this.state.currentArticle.img}/>
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