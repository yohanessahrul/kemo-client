import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../../components/admin/SideBarMenu';
import FormTambahUser from '../../components/admin/FormTambahUser';

class UserTambah extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <SideBarMenu/>
            <Col md="10">
              <FormTambahUser/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserTambah;