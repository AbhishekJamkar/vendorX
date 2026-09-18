export const isPresentInFavorites=(favorites,business)=>{
    for(let item of favorites){
      if(business.id===item.id)return true
    }
    return false;
  }