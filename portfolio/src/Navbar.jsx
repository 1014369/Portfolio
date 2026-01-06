//Navbar.jsx
const Navbar=(props) =>{
    return(
       <nav className="navbar">
        <h2 className="logo">Portfolio</h2>
        <ul className="nav-links">
        <li>
            <a href="#home">Home</a></li>
            <li> <a href="#about">About</a></li> 
               <li><a href="#skills">Skills</a></li>
           
        </ul>
        </nav>
    
    );
};
export default Navbar;