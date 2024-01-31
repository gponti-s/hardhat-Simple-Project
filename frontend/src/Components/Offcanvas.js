import ListGroup from "./ListGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Offcanvas({toggleMenu, allRoutes}) {
  const [selectedItem, setSelectedItem] = useState(" ");
  const navigate = useNavigate();


  function handleClickItem(item){
    setSelectedItem(item);
    console.log(item);
    if(item === "About"){ // TO DO: refactor this condition
      item = " ";
    }
    const path = `/${item.toLowerCase()}`;
    navigate(path);
    toggleMenu();
    console.log(allRoutes);
  }

  return (
    <div
      class="offcanvas offcanvas-start show text-bg-dark"
      tabindex="-1"
      id="offcanvasDark"
      aria-labelledby="offcanvasDarkLabel"
    >
      <div class="offcanvas-header">
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvasDark"
          aria-label="Close"
          onClick={toggleMenu}
        ></button>
      </div>
      <div class="offcanvas-body">
        <ListGroup title={"Guilherme Seletti"} subtitle={"Portifolio"} items={["About", "Articles"]} handleClickItem={handleClickItem}/>
        {/* <p>Place offcanvas content here.</p> */}
      </div>
    </div>
  );
}

export default Offcanvas;
