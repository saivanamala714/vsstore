
const ADD_ITEM = 'ADD_ITEM'
const GET_ITEM = 'GET_ITEM'
const GET_ALL = 'GET_ALL'

export function addItem(item){
   return {type:ADD_ITEM, item}
}

export function getItem(id){
    return {type:GET_ITEM, id}
}

function getAll(){
    return {type:GET_ALL}
}