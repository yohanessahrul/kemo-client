import history from '../history';
import axios from 'axios';
import alertify from 'alertifyjs';

const baseIpServer = 'http://localhost:8000';

export function loginAction (email, password) {
  return dispatch => {
    axios.post(`${baseIpServer}/api/user/login`, {
      email: email,
      password: password
    })
      .then((response) => {
        if (response.data.msg !== 'passwordIncorrect') {
          localStorage.setItem('token', response.data.token)
          dispatch(adminUserLogin(response.data));
          history.push('/admin/dashboard');
          alertify.success('Anda bergasil login');
        } else {
          alertify.alert('Password Incorrect', 'Silahkan isikan kembali password anda dengan benar')
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export function addNewUser (username, email, password, token) {
  return dispatch => {
    axios.post(`${baseIpServer}/api/user/registeruser`, {
      username: username,
      email: email,
      password: password,
    }, {
      headers: { token: token }
    })
      .then((response) => {
        if (response.data.msg !== 'emailMustUnique' ) {
          history.push('/admin/user');
          alertify.success('Anda berhasil menambahkan user baru!')
        } else {
          alertify.alert('Conflict', 'Email yang anda daftarkan sudah dipakai didalam sistem kami, cobalah gunakan email lain')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function getAllUserAction () {
  return dispatch => {
    axios.get(`${baseIpServer}/api/user/getallusers`, {
      headers: { token: localStorage.getItem('token') }
    })
      .then((response) => {
        dispatch(adminGetAllUser(response.data.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function getUserByIdAction (id, token) {
  return dispatch => {
    axios.get(`${baseIpServer}/api/user/getuserbyid/${id}`, {
      headers: { token: token }
    })
      .then((response) => {
        dispatch(adminGetUserById(response.data.data));
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function updateUserAction (id, role, token) {
  return dispatch => {
    axios.put(`${baseIpServer}/api/user/changeprofileuser/${id}`, {
      role: role
    }, {
      headers: { token: token }
    })
      .then((response) => {
        if (response.data.msg === 'Change role profile success') {
          history.push('/admin/user');
          alertify.success(`Anda berhasil mengubah role dari user ${response.data.data.username}`)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function deleteUserAction (id, token) {
  return dispatch => {
    axios.delete(`${baseIpServer}/api/user/deleteuser/${id}`, {
      headers: { token: token }
    })
      .then((response) => {
        dispatch(adminGetAllUser(response.data.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function adminUserLogin (payload) {
  return {
    type: 'USER_LOGIN',
    payload: payload
  }
}

export function adminGetAllUser (payload) {
  return {
    type: 'ADMIN_GET_ALL_USER',
    payload: payload
  }
}

export function adminGetUserById (payload) {
  return {
    type: 'READ_USER_BY_ID',
    payload: payload
  }
}