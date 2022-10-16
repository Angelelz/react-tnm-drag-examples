import React, { useState } from "react";
import { useDrag } from "react-tnm-drag";
import {
  DispatchDragObject,
  DragElementHook,
  DragOptionsNoContainer,
  DragState,
} from "react-tnm-drag/lib/types/types";
import "./App.css";

type Item = {
  id: number;
  name: string;
  done: boolean;
};

interface ItemProps {
  item: Item;
  index: number;
  dragState: DragState<DragOptionsNoContainer<Item>>;
  dragDispatch: React.Dispatch<DispatchDragObject<DragOptionsNoContainer<Item>>>;
  setArray: React.Dispatch<React.SetStateAction<Item[]>>;
  useDragElement: DragElementHook;
}

const itemList: Item[] = [
  {
    id: 1,
    name: " 1️⃣ Create react app 🚀",
    done: false,
  },
  {
    id: 2,
    name: " 2️⃣ Delete everything 🗑️",
    done: false,
  },
  {
    id: 3,
    name: " 3️⃣ Start from scratch 🤦🏽",
    done: false,
  },
  {
    id: 4,
    name: " 4️⃣ Install drag and drop package ❤️",
    done: false,
  },
  {
    id: 5,
    name: " 5️⃣ Create an awesone web app 🕸️",
    done: false,
  },
  {
    id: 6,
    name: " 6️⃣ Profit... 💰",
    done: false,
  },
];

function App() {
  const [array, setArray] = useState(itemList);
  
  const dragProps = useDrag({elementArray: array});
  
  return (
    <div className="App">
      <h4>Click and hold (Or tap and hold) to start dragging</h4>
      <div className="container">
        Container
        {array.map((item, index) => {
          return (
            <ItemComponent
              item={item}
              index={index}
              {...dragProps}
              key={item.id}
              setArray={setArray}
            />
          );
        })}
      </div>
    </div>
  );
}

function ItemComponent(props: ItemProps) {
  
  const dragElementProps = props.useDragElement<number, HTMLDivElement>(
    props.item.id,
    props.index,
    props.setArray
  );

  return (
    <div
      {...dragElementProps}
      className="item"
    >
      <p className="text">{props.item.name}</p>
    </div>
  );
}

export default App;
