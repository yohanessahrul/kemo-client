import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../../components/admin/SideBarMenu';
import FormArtikelTambah from '../../components/admin/FormArtikelTambah';

class ArtikelTambah extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <SideBarMenu/>
            <Col md="10">
              <FormArtikelTambah/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ArtikelTambah;