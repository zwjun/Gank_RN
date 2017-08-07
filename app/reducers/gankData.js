/*
 * @Author: JUN 
 * @Date: 2017-08-01 09:25:57 
 */
import actionTypes from '../actions/actionsTypes';
const initialState = {
  images: [],
  news: [],
  type: ''
}

const gankData = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case actionTypes.GANK_RECEIVE_IMAGE:
      const images = state.images;
      images.push(...payload);
      return Object.assign({}, state, {
        images
      });
    case actionTypes.GANK_RECEIVE_NEWS:
      return Object.assign({}, state, {
        news: payload
      });
    
    default:
      return state
  }
}

export default gankData;