export const addCard=(product)=>{
    return {
        type:"ADDITEM",
        payload:product
    }

}
export const delCard=(product)=>{
    return {
        type:"DELLITEM",
        payload:product
    }

}