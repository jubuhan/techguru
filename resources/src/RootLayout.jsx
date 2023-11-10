


/*export default function RootLayout() {
  return (
    <div className="root-layout">
             <header>
       <nav>
        <h1>WriteNest</h1>
        

       </nav>
    
     </header>
       <main></main>
       <Outlet/>
    </div>
  )
}*/
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css"; // Import your CSS file for styling

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 className="site-name">WriteNest</h1>
        </nav>
      </header>
      <main></main>
      <Outlet />
    </div>
  );
}
