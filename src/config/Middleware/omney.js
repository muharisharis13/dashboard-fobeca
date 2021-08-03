import { cookiesRemove } from '../Cookies'
import { MakeGet, RenewToken } from '../FunctionAPI'
import moment from 'moment'

export const Middleware_API_omney = dispatch => action => {
  switch (action.type) {
    case "API_ADJUST_STOCK":
      dispatch({ type: 'LOADING', loading: true })
      dispatch({ type: 'PASSING', passing: [] })
      MakeGet({
        url: `/stock/adjustment/list?outlet_id=${action.id}${action.start ? `&start_date=${moment(action.start).format('YYYY-MM-DD')}` : ''}${action.end ? `&end_date=${moment(action.end).format('YYYY-MM-DD')}` : ''}`
      })
        .then(res => {
          // console.log('ini adjust : ', res)
          if (res.error) {
            alert(res.error)
            cookiesRemove({ key: 'token' })
            RenewToken()
            dispatch({
              type: 'LOADING', loading: false
            })
          }
          else if (res.status) {
            dispatch({ type: 'PASSING', passing: res.data })

            dispatch({
              type: 'LOADING', loading: false
            })
          }
        })
      break;
    case "API_GET_CART":
      dispatch({
        type: 'LOADING', loading: true
      })


      MakeGet({
        url: `/outlet/inCharge`
      })
        .then(res => {
          // console.log('ini incharger', res)
          if (res.error) {
            alert(res.error)
            cookiesRemove({ key: 'token' })
            RenewToken()
            dispatch({
              type: 'LOADING', loading: false
            })
          }
          else if (res.status) {
            dispatch({ type: 'SET_CART', datacart: res.outlets })

            dispatch({
              type: 'LOADING', loading: false
            })
          }
          // window.location.reload(false)
        })
      break;
    default:
      alert('please check Middleware omney')
  }
}