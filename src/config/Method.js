export const MethodPost = (token, data) => {
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

export const MethodGet = ({ token }) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    }
  }
}

