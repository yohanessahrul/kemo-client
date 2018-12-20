import React, { Component } from 'react';
// import history from '../../history';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../../components/admin/SideBarMenu';
import ContentAdminArtikel from '../../components/admin/ContentAdminArtikel';

class Artikel extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <SideBarMenu/>
            <Col md="10">
              <ContentAdminArtikel/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Artikel;