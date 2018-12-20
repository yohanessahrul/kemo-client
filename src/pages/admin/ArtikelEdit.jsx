import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../../components/admin/SideBarMenu';
import FormArtikelEdit from '../../components/admin/FormArtikelEdit';

class ArtikelEdit extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <SideBarMenu/>
            <Col md="10">
              <FormArtikelEdit/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ArtikelEdit;