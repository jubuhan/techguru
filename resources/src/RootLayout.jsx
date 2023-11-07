import { NavLink,Outlet} from "react-router-dom"


export default function RootLayout() {
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
}
