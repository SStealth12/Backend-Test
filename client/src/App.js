import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import List from "./pages/list/list"
import Searchres from "./pages/searchres/Searchres"
import Service from "./pages/service/Service"
import Mylist from "./pages/mylist/Mylist";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listings" element={<List/>}/>
        <Route path="/mylistings" element={<Mylist/>}/>
        <Route path="/listings/search" element={<Searchres/>}/>
        <Route path="/listings/:id" element={<Service/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
