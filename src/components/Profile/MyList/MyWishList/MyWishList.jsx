import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



const MyWishList = () => {
  
const user = useSelector(state => state.user)
console.log(user)
  return (
    <div>
      
    </div>
  );
}

export default MyWishList;
