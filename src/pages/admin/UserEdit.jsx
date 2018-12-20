import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../../components/admin/SideBarMenu';
import FormEditUSer from '../../components/admin/FormEditUser';

class UserEdit extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <SideBarMenu/>
            <Col md="10">
              <FormEditUSer/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserEdit;