import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import EmployeesList from "./Pages/EmployeesList/EmployeesList";
import NotFound from "./Pages/NotFound/NotFound";
import {Routes, Route} from 'react-router-dom'

function Router() {
  return (
   <>
   <Header/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="employeesList" element={<EmployeesList/>}/>
     <Route path="*" element={<NotFound />} />
   </Routes>
   </>
  );
}

export default Router;
