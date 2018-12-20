import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../../components/admin/SideBarMenu';
import FormGalleryTambah from '../../components/admin/FormGalleryTambah';

class GalleryTambah extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <SideBarMenu/>
          <Col md="10">
            <FormGalleryTambah/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GalleryTambah;