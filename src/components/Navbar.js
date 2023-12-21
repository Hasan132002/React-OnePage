// import React from 'react';

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Services</li>
//         <li>Portfolio</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
