
const card=[]
 const handleCard=(state=card ,action)=>{
    const product=action.payload
    switch(action.type){
        case "ADDITEM":
            const exit=state.find((x)=>x.id===product.id)
            if(exit){
                return state.map((x)=>
                x.id===product.id?{...x, qty:x.qty+1}:x
                )
            }else{
                const product=action.payload
                return [
                    ...state, {...product, qty:1}
                ]
            }

         
        case "DELLITEM":
            const exit1=state.find((x)=>x.id===product.id)
            if(exit1.qty===1){
                return state.filter((x)=>x.id!==product.id)
            }else{
                return state.map((x)=>
                x.id===product.id?{...x, qty:x.qty-1}:x
                )
            }


        case "DELCARDALL":
            return state.filter((x)=>x.id!==product.id)

        case "ALLDELLITEM":
            return state=[]
        default :

             return state
    }
}
export default handleCard;