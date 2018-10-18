// ini untuk deklarasi function/actions

import axios from 'axios';

export function fetchHeroes(){
    return{
    type: 'FETCH_HERO',
    payload: axios.get('http://192.168.0.31:5000/api/heroes/')
    };
}

export function createHeroes(data){
    return{
        type:'CREATE_FETCH_HERO',
        payload: 

        axios({
            method: 'post',
            url: 'http://192.168.0.31:5000/api/heroes/',
            data: data
          })
    };
}

export function updateHeroes(data){
    return{
        type: 'UPDATE_FETCH_HERO',
        payload: 

        axios({
            method: 'put',
            url: 'http://192.168.0.31:5000/api/heroes/${data._id}',
            data: data
        })
    }
}

export function deleteHeroes(data){
    return{
        type: 'DELETE_FETCH_HERO',
        payload: 

        axios({
            method: 'delete',
            url : 'http://192.168.0.31:5000/api/heroes/${data._id}',
            data: data
        })

    }
}


