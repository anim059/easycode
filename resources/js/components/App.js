import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route,Switch } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import R_possoft from './Pages/Software/R_possoft'
import Retail_pos from './Pages/Software/Retail_pos'
import Account from './Pages/Software/Account'
import CustomizeERP from './Pages/Software/CustomizeERP'
import Automobile from './Pages/Software/Automobile'
import PayRoll from './Pages/Software/PayRoll'
import TradingPos from './Pages/Software/TradingPos'
import RealState from './Pages/Software/RealState'
import ReadyERP from './Pages/Software/ReadyERP'
import SchoolManage from './Pages/Software/SchoolManage'
import ProjectManagement from './Pages/Software/ProjectManagement'
import DigitalMarket from './Pages/Service/DigitalMarket'
import WebsiteEcom from './Pages/Service/WebsiteEcom'
import SimpleReactLightbox from 'simple-react-lightbox'



function App() {
    return (
      
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route   path="/about">
             <About/>
          </Route>
          <Route  path="/contact">
             <Contact/>
          </Route>
          <Route  path="/rpos">
             <SimpleReactLightbox>
                <R_possoft/> 
             </SimpleReactLightbox>
          </Route>
          <Route  path="/retailPos">
             <Retail_pos/>
          </Route>
          <Route   path="/Account">
             <Account/>
          </Route>
          <Route  path="/CustomizeERP">
             <CustomizeERP/>
          </Route>
          <Route  path="/Automobile">
             <Automobile/>
          </Route>
          <Route  path="/PayRoll">
             <PayRoll/>
          </Route>
          <Route   path="/TradingPos">
             <TradingPos/>
          </Route>
          <Route  path="/ReadyERP">
             <ReadyERP/>
          </Route>
          <Route  path="/SchoolManage">
             <SchoolManage/>
          </Route>
          <Route  path="/RealState">
             <RealState/>
          </Route>
          <Route  path="/ProjectManagement">
             <ProjectManagement/>
          </Route>
          <Route  path="/DigitalMarket">
             <DigitalMarket/>
          </Route>
          <Route  path="/WebsiteEcom">
             <WebsiteEcom/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
