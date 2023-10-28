const orderState = {allOrdersDetails:[]}

export default function allOrdersReducer(state=orderState,action){
    const {type,payload} = action
    if(type === "orders"){
        return{...state,...payload}
    }return state
}
