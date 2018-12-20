import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../../components/admin/SideBarMenu';
import ContentAdminGallery from '../../components/admin/ContentAdminGallery';

class Gallery extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <SideBarMenu/>
            <Col md="10">
              <ContentAdminGallery/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Gallery;