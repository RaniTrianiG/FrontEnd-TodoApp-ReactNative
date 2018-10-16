// ini untuk get function dari folder actions

 const initialState = {
     fetching: false,
     fetched: false,
     error: null,
     heroes: []
 }

 const dataheroes = function(state = initialState, action){
     switch(action.type){
         case 'FETCH_HERO_PENDING' :
            return {...state, fetching: true};
         break;
         case 'FETCH_HERO_FULFILLED' :
            return {...state, fetching: false, fetched: true, heroes : action.payload.data};
         break;
        case 'FETCH_HERO_REJECTED' :
            return {...state, error: action.payload};
        break;
        case 'CREATE_FETCH_HERO_PENDING' :
            return {...state, fetching: true};
        break;
        case 'CREATE_FETCH_HERO_FULFILLED' :
        return {...state, fetching: false, fetched: true, heroes : [...state.heroes, action.payload.data]};
        break;
        case 'CREATE_FETCH_HERO_REJECTED' :
            return {...state, error: action.payload};
        break;
        case 'UPDATE_FECTH_HERO_PENDING' :
            return {...state, fetching: true};
        break;
        case 'UPDATE_FETCH_HERO_FULFILLED' :
            return {...state, fetching: false, fetched: true, heroes : action.payload.data};
        break;
        case 'UPDATE_FETCH_HERO_REJECTED' :
            return {...state, error: action.payload};
        break;
        default :
     }
     return state;
 }
 export default dataheroes;