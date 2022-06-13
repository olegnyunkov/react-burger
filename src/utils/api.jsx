import {
  getIngredientsFailed,
  getIngredientsRequest,
  getIngredientsSuccess,
  getOrderRequest,
  getOrderSuccess,
  getOrderFailed
} from "../services/actions/actions";

const baseUrl = 'https://norma.nomoreparties.space/api';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(new Error(res.status))
}

//запрос ингрединтов на сервер
export const getIngredients = () => {
  return function (dispatch) {
    dispatch(getIngredientsRequest());

    fetch(baseUrl + '/ingredients', {
      headers: {'Content-Type': 'application/json'}
    }).then(checkResponse).then(res => {
      res.success ? dispatch(getIngredientsSuccess(res.data)) : dispatch(getIngredientsFailed())
    }).catch(err => {
      dispatch(getIngredientsFailed())
      console.log(err)
    })
  }
}

//запрос номера заказа на сервер
export const getOrder = (orderDataId) => {
  return function (dispatch) {
    dispatch(getOrderRequest());

    fetch(baseUrl + '/orders', {
      method: 'POST',
      body: JSON.stringify({'ingredients': orderDataId}),
      headers: {'Content-Type': 'application/json'}
    }).then(checkResponse).then(res => {
      res.success ? dispatch(getOrderSuccess(res)) : dispatch(getOrderFailed())
    }).catch(err => {
      dispatch(getOrderFailed())
      console.log(err)
    })
  }
}
