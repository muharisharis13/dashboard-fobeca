import { MakeDelete, MakeGet, MakeGetimage, MakePost, MakePostWithImage } from '../FunctionAPIWareHouse'
import { MakeGetomney, RenewToken } from '../FunctionAPI'
import { cookiesRemove } from '../Cookies'

export const MiddleWare_API_WareHouse = dispatch => action => {
  switch (action.type) {
    case "API_GET_LIST_INSTOCK":
      dispatch({
        type: 'LOADING', loading: true
      })

      MakeGet({
        url: '/stock/in_stock',
      })
        .then(res => {
          // console.log(res)
          dispatch({ type: 'PASSING', passing: res })
          dispatch({
            type: 'LOADING', loading: false
          })
        })
      break;
    case "API_POST_ADD_STOCK":
      dispatch({
        type: 'LOADING_BTN', loadingButton: true
      })

      MakePost({
        url: '/stock/in_stock',
        data: action.data
      })
        .then(res => {
          // console.log(res)
          // dispatch({ type: 'PASSING', passing: res })
          window.location.reload(false)
          dispatch({
            type: 'LOADING_BTN', loadingButton: false
          })
        })
      break;
    case "API_DELETE_STOCK":
      dispatch({
        type: 'LOADING_BTN', loadingButton: true
      })

      MakeDelete({
        url: `/stock/in_stock/${action.id}`
      })
        .then(res => {
          // console.log(res)
          // dispatch({ type: 'PASSING', passing: res })
          window.location.reload(false)
          dispatch({
            type: 'LOADING_BTN', loadingButton: false
          })
        })
      break;
    case "API_UPDATE_STOCK":
      dispatch({
        type: 'LOADING_BTN', loadingButton: true
      })

      MakePost({
        url: `/stock/in_stock/${action.id}`,
        data: action.data
      })
        .then(res => {
          // console.log(res)
          // dispatch({ type: 'PASSING', passing: res })
          window.location.reload(false)
          dispatch({
            type: 'LOADING_BTN', loadingButton: false
          })
        })
      break;
    case "API_GET_CURRENT_STOCK":
      dispatch({
        type: 'LOADING', loading: true
      })


      MakeGet({
        url: `/stock/current_stock`
      })
        .then(res => {
          // console.log(res)
          dispatch({ type: 'PASSING', passing: res })
          // window.location.reload(false)
          dispatch({
            type: 'LOADING', loading: false
          })
        })
      break;
    case "API_GET_COURIER2":
      dispatch({
        type: 'LOADING', loading: true
      })


      MakeGet({
        url: `/couriers`
      })
        .then(res => {
          console.log('ini courier : ', res)
          dispatch({ type: 'SET_COURIER', datacourier: res, datacourierTemp: res })
          dispatch({
            type: 'LOADING', loading: false
          })
        })
      break;
    case "API_DELETE_COURIER":
      dispatch({
        type: 'LOADING_BTN', loadingButton: true
      })


      MakeDelete({
        url: `/couriers/${action.id}`
      })
        .then(res => {
          if (res) {
            alert('Success Delete Courier')
            window.location.href = "/Courier"
          }
          else {
            alert(`error function API`)
          }
          dispatch({
            type: 'LOADING_BTN', loadingButton: false
          })
        })
      break;
    case "API_POST_UPDATE_COURIER":
      dispatch({
        type: 'LOADING_BTN', loadingButton: true
      })


      MakePost({
        url: `/couriers/${action.id}`,
        data: action.data
      })
        .then(res => {
          console.log('update courier : ', res)
          if (res) {
            if (res.data) {
              alert(res.success)
            }
            window.location.href = "/Courier"
          }
          else {
            alert(`error function API`)
          }
          dispatch({
            type: 'LOADING_BTN', loadingButton: false
          })
        })
      break;
    case "API_GET_CART":
      dispatch({
        type: 'LOADING', loading: true
      })


      MakeGetomney({
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
    case "API_POST_OUTSTOCK":
      dispatch({
        type: 'LOADING', loading: true
      })

      MakePost({
        url: `/stock/out_stock`,
        data: action.data
      })
        .then(res => {
          // console.log(res)
          // dispatch({ type: 'SET_CART', datacart: res })
          // alert('Success Save Out Stock', res.carts_id)
          window.location.href = "/Stock/outstock"
          dispatch({
            type: 'LOADING', loading: false
          })
        })
      break;
    case "API_GET_OUT_STOCK":
      dispatch({
        type: 'LOADING', loading: true
      })


      MakeGet({
        url: `/stock/out_stock/${action.id}`,
      })
        .then(res => {
          // console.log(JSON.stringify(res))
          // dispatch({ type: 'SET_CART', datacart: res })"
          dispatch({
            type: 'LOADING', loading: false
          })
        })
      break;
    case "API_GET_DELIVERY_OUTSTOCK":
      dispatch({
        type: 'LOADING', loading: true
      })


      MakeGet({
        url: `/stock/out_stock`
      })
        .then(res => {
          console.log('ini hasil DO', res)
          dispatch({ type: 'PASSING', passing: res })
          // window.location.reload(false)
          dispatch({
            type: 'LOADING', loading: false
          })
        })
      break;
    case "API_POST_DELIVERY_STATUS":
      dispatch({
        type: 'LOADING', loading: true
      })


      MakePost({
        url: `/stock/out_stock/${action.id}`,
        data: action.status
      })
        .then(res => {
          // console.log(res)
          // dispatch({ type: 'PASSING', passing: res })
          // window.location.reload(false)
          if (res) {
            alert('Success Change Status')
            window.location.reload(false)
          }
          dispatch({
            type: 'LOADING', loading: false
          })
        })
      break;
    case "API_GET_COURIER":
      dispatch({
        type: 'LOADING', loading: true
      })


      MakeGet({
        url: `/couriers`
      })
        .then(res => {
          // console.log(res)
          dispatch({ type: 'SET_COURIER', datacourier: res })
          // window.location.reload(false)
          dispatch({
            type: 'LOADING', loading: false
          })
        })
      break;
    case "API_POST_ADD_COURIER":
      dispatch({
        type: 'LOADING', loading: true
      })


      MakePostWithImage({
        url: `/couriers`,
        data: action.data
      })
        .then(res => {
          // console.log('response image : ', res)
          if (res.full_name) {
            alert('Success Create Courier : ', res.full_name)
            window.location.reload(false)
          }

          dispatch({
            type: 'LOADING', loading: false
          })
        })
      break;
    case "API_GET_VIEW_IMAGE_KTP":
      MakeGetimage({
        url: `/uploads/ktp/${action.nama_file}`
      })
        .then(res => {
          // console.log(res)
          dispatch({
            type: 'IDENTITY',
            identity: res
          })
        })
      break;
    case "API_GET_VIEW_IMAGE_PHOTO":
      MakeGetimage({
        url: `/uploads/photo/${action.nama_file}`
      })
        .then(res => {

          dispatch({
            type: 'PHOTO',
            photo: res
          })
        })
      break;
    case "API_GET_PURCHASING":
      MakeGet({
        url: `/purchasing`
      })
        .then(res => {
          console.log(res)
          // dispatch({
          //   type: 'SET_PURCHASING',
          //   datapurchasing: res,
          //   datapurchasingTemp: res
          // })
        })
      break;
    case "API_POST_ADD_PURCHASING":
      dispatch({ type: 'LOADING_BTN', loadingButton: true })
      MakePostWithImage({
        url: `/purchasing`,
        data: action.data
      })
        .then(res => {
          console.log(res)
          if (res) {
            if (res.date) {
              alert(`Success Add Purchasing , ${res.date}`)
              window.location.href = '/Purchasing'
            }
            else {
              alert('please check method')
            }
          }
          dispatch({ type: 'LOADING_BTN', loadingButton: false })
        })
      break;
    case "API_POST_UPDATE_PURCHASING_WO_IMAGE":
      dispatch({ type: 'LOADING_BTN', loadingButton: true })
      MakePost({
        url: `/purchasing/updatepurchasing?id=${action.id}`,
        data: action.data
      })
        .then(res => {
          console.log(res)
          if (res) {
            if (res.data) {
              alert(res.success)
              window.location.href = '/Purchasing'
            }
            else {
              alert('please check method')
            }
          }
          dispatch({ type: 'LOADING_BTN', loadingButton: false })
        })
      break;
    case "API_POST_DELETE_PURCHASING":
      dispatch({ type: 'LOADING_BTN', loadingButton: true })
      MakeDelete({
        url: `/purchasing/deletepurchasing?id=${action.id}`
      })
        .then(res => {
          console.log(res)
          if (res) {
            if (res.data) {
              alert(res.success)
              window.location.href = '/Purchasing'
            }
            else {
              alert('please check method')
            }
          }
          dispatch({ type: 'LOADING_BTN', loadingButton: false })
        })
      break;
    default:
      alert('please check Middleware')
  }
}