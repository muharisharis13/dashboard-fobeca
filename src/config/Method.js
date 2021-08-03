

export const MethodPost = (token, data, secret) => {
  if (secret) {
    return {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "secret": `${secret}`
      },
      body: JSON.stringify(data)
    }
  }
  else {

    return {
      method: 'POST',
      headers: {
        "x-access-token": `${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  }
}

export const MethodPostWithImage = ({ secret, data }) => {
  let myHeader = new Headers()
  myHeader.append("secret", `${secret}`)
  return {
    method: 'POST',
    headers: myHeader,
    body: data,
  }
}

export const MethodDelete = ({ token, secret }) => {
  if (secret) {
    return {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'secret': `${secret}`
      }
    }
  }
}

export const MethodPatch = ({ secret, data }) => {
  if (secret) {
    return {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'secret': `${secret}`
      },
      data: JSON.stringify(data)
    }
  }
}

export const MethodGet = ({ token, secret }) => {
  if (secret) {
    return {
      headers: {
        "secret": `${secret}`
      }
    }
  }
  else {
    return {
      headers: {
        "x-access-token": `${token}`,
      }
    }
  }
}


