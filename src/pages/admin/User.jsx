import React, { Component } from 'react';
// import history from '../../history';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../../components/admin/SideBarMenu';
import ContentAdminUser from '../../components/admin/ContentAdminUser';

class User extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <SideBarMenu/>
            <Col md="10">
              <ContentAdminUser/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default User;