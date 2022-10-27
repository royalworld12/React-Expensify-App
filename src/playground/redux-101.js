import { createStore } from "redux";

const increamentCount = ({increamentBy = 1} = {}) => {
 return {
    type : 'INCREAMENT',
    increamentBy
 }
}

const decreamentCount = ({decreamentBy = 1} = {}) => {
  return {
    type : 'DECREAMENT',
    decreamentBy
  }
}

const store = createStore((state = {count: 0},action) => {
    switch (action.type) {
        case 'INCREAMENT':

            return {
                count : state.count + action.increamentBy
            }
        case 'DECREAMENT':
            return {
                count : state.count - action.decreamentBy
            }
        case 'RESET':
            return {
                count : 0
            }
        default:
            return state;
    }
})


const unsubscribe = store.subscribe(() =>{
    console.log(store.getState())
})

store.dispatch(increamentCount({increamentBy : 5}))

store.dispatch(increamentCount())

store.dispatch({
    type : 'RESET'
})

store.dispatch(decreamentCount({decreamentBy : 4}))
