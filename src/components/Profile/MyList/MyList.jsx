import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MyList = () => {

const user = useSelector(state => state.user)
console.log(user)

  return (
    <div>
      Мой Лист
    </div>
  );
}

export default MyList;
