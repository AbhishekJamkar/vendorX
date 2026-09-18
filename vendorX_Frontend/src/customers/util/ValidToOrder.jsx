export function isValid(cartItems){
    console.log("cartItems -------------- ",cartItems[0].product?.business.id)
    const businessId=cartItems[0]?.product?.business.id
   
    for(let item of cartItems){
        console.log("item ---- ", item.business?.id)
      if(item.product?.business.id!==businessId){
        return false;
      }
    }
    return true
  }