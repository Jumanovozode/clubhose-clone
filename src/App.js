import './App.css';
import PlanLayout from './pages/Layouts/Planlayout';
import Welcome from './pages/Welcome';
import { BrowserRouter as Router, Route, Routes }  from "react-router-dom"
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import Username from './pages/Username';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';
import Explore from './pages/Explore'
import Profile from './pages/Profile'


function App() {
  return (
    <Router>
      {/* <Route exact path={[
        '/',
        '/invite',
        '/get_username',
        '/code_confirm',
        '/allow_notification',
      ]}/> */}
        
      
        <PlanLayout>  
          <Routes>
        <Route exact path="/" element={<Welcome/>}/>
          
        <Route exact path="/invite" element={<PhoneConfirmation/>}/>
        <Route exact path="/code_confirm" element={<CodeConfirm/>}/>
        {/* <Route exact path="/get_username" element={<Username/>}/> */}
        <Route exact path="/allow-notification" element={<AllowNotification/>}/>
        </Routes> 
        
        </PlanLayout>
        
        
        {/* <Route exact path={["/home", "/explore"]}> */}
           <AppLayout>
             <Routes>
             <Route exact path="/home" element={<Home/>}/>
             <Route exact path="/explore" element={<Explore/>}/>
             <Route exact path="/profile" element={<Profile/>}/>

             </Routes>

            </AppLayout>
        {/* </Route> */}
        
        
    </Router>
  );
}

export default App;
