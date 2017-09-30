import _ from 'lodash';
import { FETCH_POSTS , FETCH_POST , CREATE_POST , DELETE_POST } from '../actions';

console.log("Inside Post Reducer"+ FETCH_POSTS)

export default function(state ={},action) {
    switch (action.type) {
        case FETCH_POST:
            return { ...state , [action.payload.data.id] : action.payload.data };
        case FETCH_POSTS:
            let data = _.mapKeys(action.payload.data,'id');
            return data
        case CREATE_POST:
            return null;
        case DELETE_POST:
            return _.omit(state,action.payload);
        default:
            return state;
    }
}