import React, { Component } from 'react';
import history from '../history';
import alertify from 'alertifyjs';
import { 
  Button,
 } from 'reactstrap';


class Dashboard extends Component {
    constructor() {
      super()
      this.state = {
        email: '',
      }
      this.logout = this.logout.bind(this)
    }
    componentDidMount(){
      if (!localStorage.getItem('token')) {
        history.push('/login')
      }
    }
    logout () {
      alertify.confirm('Logout', 'Apakah anda ingin benr-benar keluar?', function(){
        
        localStorage.removeItem('token');
        setTimeout(function() {
          history.push('/')
        }, 2000)

        alertify.success('Anda berhasil keluar')

      }, function(){ alertify.error('Cancel')});


    }
    render() {
        return (
            <div>
                <h1>Dashboard Page</h1>
                <p>Selamat datang dihalaman dashboard !!<b></b></p>
                <Button onClick={this.logout}>Logout</Button>
            </div>
        );
    }
}

export default Dashboard;