import { useState } from "react";
import "../Style.css"


function ListGroup({title, subtitle, items, handleClickItem}) {

  //   const handleClick = (event) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // function handleClick(item){
  //   setSelectedIndex(item);
  //   console.log(item);
  // }

  return (
    <>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      <ul className="list-group" >
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }            
            key={item}
            onClick={() => { handleClickItem(item); }}
            // onClick={() => handleClick(item)}
          >
            {item}
          </li>
        ))}
        {/* <button onClick={handleClick}></button> */}
      </ul>
    </>
  );
}

export default ListGroup;
