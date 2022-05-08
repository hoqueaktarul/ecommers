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
export const delcardfull=(product)=>{
    return{
        type:"DELCARDALL",
        payload:product
    }
}
export const alldelCard=(product)=>{
    return {
        type:"ALLDELLITEM",
        payload:product
    }

}