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

export function updateHeroes(){
    return{
        type: 'UPDATE_FETCH-HERO',
        payload: 

        axios({
            method: 'put',
            url: 'http://192.168.0.31:5000/api/heroes:id',
            data: []
        })
    }
}


