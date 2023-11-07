
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Explore from "./pages/Explore";



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
     <Route index element={<Home/>}/>
     <Route path="create" element={<Create/>}/>
     <Route path="explore" element={<Explore/>}/>
    </Route>
  )
)





function App() {
  return (
 <RouterProvider router={router}/>
  );
}

export default App;
