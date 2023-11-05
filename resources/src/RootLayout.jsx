import { NavLink,Outlet} from "react-router-dom"


export default function RootLayout() {
  return (
    <div className="root-layout">
             <header>
       <nav>
        <h1>Name</h1>
         <NavLink to="/">Home</NavLink>
         <NavLink to="about">About</NavLink>
         <NavLink to="help">Help</NavLink>
         <NavLink to="careers">Profile</NavLink>
       </nav>
    
     </header>
       <main></main>
       <Outlet/>
    </div>
  )
}
