import '../App.css';


function Appbar({toggleMenu}){

    return(
        <div className="appbar">
            <img 
            style={{ height: '30px', cursor:'pointer'}} 
            src="/images/burger-bar.png"
            alt="Burger Icon"
            onClick={toggleMenu} />
            Appbar Content
        </div>
        
    );
}

export default Appbar;