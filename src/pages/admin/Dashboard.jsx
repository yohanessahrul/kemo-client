import React, { Component } from 'react';
// import history from '../../history';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../../components/admin/SideBarMenu';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                  <Row style={{ background: '#04251b' }}>
                    <SideBarMenu/>
                    <Col md="10" style={{ background: 'white' }}>
                      <div style={{ padding: '50px 5%' }}>
                        <h1>Dashboard</h1>
                      </div>
                    </Col>
                  </Row>
                </Container>
            </div>
        );
    }
}

export default Dashboard;