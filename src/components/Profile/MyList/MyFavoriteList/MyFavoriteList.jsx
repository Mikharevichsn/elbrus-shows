import React, { useEffect } from "react";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move
} from "react-grid-dnd";
import './style.css'
import { useSelector } from "react-redux";
export const MyFavoriteList = () => {

  const user = useSelector(state => state.user)

  console.log(user)

  const [items, setItems] = React.useState({
    left: [
      // { id: 1, name: "ben" },
      // { id: 2, name: "joe" },
      // { id: 3, name: "jason" },
      // { id: 4, name: "chris" },
      // { id: 5, name: "heather" },
      // { id: 6, name: "Richard" }
    ],
    right: [
      { id: 7, name: "george" },
      { id: 8, name: "rupert" },
      { id: 9, name: "alice" },
      { id: 10, name: "katherine" },
      { id: 11, name: "pam" },
      { id: 12, name: "katie" }
    ]
  });

  // useEffect(() => {
  //   const FavoriteList = user.favoriteList
  //   setItems(state => [...state, ...FavoriteList])
  // }, [])
  

  useEffect(() => {
 
  }, [])

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
        [targetId]: result[1]
      });
    }

    const result = swap(items[sourceId], sourceIndex, targetIndex);
    return setItems({
      ...items,
      [sourceId]: result
    });
  }

  return (
    <GridContextProvider onChange={onChange}>
      <div className="containerGrid">
        <GridDropZone
          className="dropzone left"
          id="left"
          boxesPerRow={4}
          rowHeight={70}
        >
          {items.left.map(item => (
            <GridItem key={item.name}>
              <div className="grid-item">
                <div className="grid-item-content">
                  {item.name[0].toUpperCase()}
                </div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
        <GridDropZone
          className="dropzone right"
          id="right"
          boxesPerRow={4}
          rowHeight={70}
        >
          {items.right.map(item => (
            <GridItem key={item.name}>
              <div className="grid-item">
                <div className="grid-item-content">
                  {item.name}
                </div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </div>
    </GridContextProvider>
  );
}

export default MyFavoriteList