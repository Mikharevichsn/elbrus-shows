import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getContent } from '../redux/action';
import { Button } from 'reactstrap';

export const Content = () => {
  const cat = useSelector((state) => state.content);   //Ссылка на хранилище

  const dispatch = useDispatch() 

  useEffect(() => {        //useEffect для загрузки контента при внедрение этого компонента
  dispatch(getContent())
  }, [dispatch]);
  
  return (
    <>
   <Button onClick = { (e) => {e.preventDefault();  dispatch(getContent())}}>Button</Button>
  <div>{  <img style={{  width: "600px", height: "500px"}} alt=" Cat" src={cat} />}</div>
  </>
  );
}

export default Content