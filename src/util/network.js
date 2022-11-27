const serverUrl = process.env.SERVER_HOST || 'http://localhost:5000';

console.log("Server host now is " + serverUrl)

export const authenticate = (email, password) => {
  return fetch(serverUrl + '/auth', {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    //make sure to serialize your JSON body
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(response => response.json())
}

export const fetchUserInfo = (user_id) => {
  return fetch(serverUrl + '/users/' + user_id).then(response => response.json())
}

export const updateUserInfo = (user_id, name, about) => {
  return fetch(serverUrl + '/users', {
    method: "put",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    //make sure to serialize your JSON body
    body: JSON.stringify({
      id: user_id,
      name: name,
      about: about
    })
  }).then(response => response.json())
}

export const fetchUserDirections = (user_id) => {
  return fetch(serverUrl + '/users/' + user_id + '/directions').then(response => response.json())
}

export const fetchAllDirections = () => {
  return fetch(serverUrl + '/directions/').then(response => response.json())
}

export const addUserDirection = (user_id, dir_id) => {
  return fetch(serverUrl + '/users/'+user_id+'/directions', {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    //make sure to serialize your JSON body
    body: JSON.stringify({
      direction_id: dir_id
    })
  }).then(response => response.json())
}

export const removeUserDirection = (user_id, dir_id) => {
  return fetch(serverUrl + '/users/'+user_id+'/directions', {
    method: "delete",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    //make sure to serialize your JSON body
    body: JSON.stringify({
      direction_id: dir_id
    })
  }).then(response => response.json())
}

export const fetchSchema = (schema) => {
  return fetch(serverUrl + '/schemas/'+schema+'.json').then(response => response.json())
}