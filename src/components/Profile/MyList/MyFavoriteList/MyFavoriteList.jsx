import React, { useEffect } from 'react';
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from 'react-grid-dnd';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import { addBookmark, addLike, addArrBookmarks, addArrLikes } from '../../../../redux/action';



export const MyFavoriteList = () => {
  const user = useSelector((state) => state.user);
const dispatch = useDispatch()



  const [items, setItems] = React.useState({
    left: [],
    right: [],
  });

  const [check, setCheck] = React.useState(false)
 
  const onClickSaveState = (arr) => {
    return arr.map(el => el.allInfo)
    
    
  }


  console.log('items>>>>>>', items);

  useEffect(() => {
    const favoriteList = user.favoriteList.map((el, i) => ({
      allInfo: el,
      id: i + 1,
      poster: el.nameRu,
    }));
    setItems((state) => ({ ...state, left: [...favoriteList] }));
  }, []);

  useEffect(() => {
    const wishList = user.wishList.map((el, i) => ({
      allInfo: el,
      id: i + 1,
      poster: el.nameRu,
    }));
    setItems((state) => ({ ...state, right: [...wishList] }));
  }, []);


useEffect(() => {
  const wishList = user.wishList.map((el, i) => ({
    allInfo: el,
    id: i + 1,
    poster: el.nameRu,
  }));
  setItems((state) => ({ ...state, right: [...wishList] }));
}, [check])

useEffect(() => {
  const favoriteList = user.favoriteList.map((el, i) => ({
    allInfo: el,
    id: i + 1,
    poster: el.nameRu,
  }));
  setItems((state) => ({ ...state, left: [...favoriteList] }));
}, [check])



  console.log(items);

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    if (targetId) {
      const result = move(
        items[sourceId],
        items[targetId],
        sourceIndex,
        targetIndex
      );
      return setItems({
        ...items,
        [sourceId]: result[0],
        [targetId]: result[1],
      });
    }

    const result = swap(items[sourceId], sourceIndex, targetIndex);
    return setItems({
      ...items,
      [sourceId]: result,
    });
  }

  return (
    <>
      <Row>
        <Col>
          <h4>Любимые фильмы</h4>
        </Col>
        <Col>
          <h4>Хочу посмотреть</h4>
        </Col>
      </Row>

      <GridContextProvider onChange={onChange}>
        <div className="containerGrid">
          <GridDropZone
            className="dropzone left"
            id="left"
            boxesPerRow={3}
            rowHeight={100}
          >
            {items.left &&
              items.left.map((item) => (
                <GridItem key={Math.random() * (200 - 1) + 1}>
                  <div className="grid-item">
                    <div className="grid-item-content">
                      <div>{item.poster}</div>
                    </div>
                  </div>
                </GridItem>
              ))}
          </GridDropZone>

          <GridDropZone
            className="dropzone right"
            id="right"
            boxesPerRow={3}
            rowHeight={100}
          >
            {items.right &&
              items.right.map((item) => (
                <GridItem key={Math.random() * (200 - 1) + 1}>
                  <div className="grid-item">
                    <div className="grid-item-content">{item.poster}</div>
                  </div>
                </GridItem>
              ))}
          </GridDropZone>
        </div>
        <Button onClick = {() =>{ dispatch(addArrBookmarks(onClickSaveState(items.right))); dispatch(addArrLikes(onClickSaveState(items.left))); setCheck(state => !state)}}>Сохранить</Button>
      </GridContextProvider>
    </>
  );
};

export default MyFavoriteList;
