import React , { Component} from 'react';
import {Switch,Route} from 'react-router-dom'; 
import './tailwind.css'; 
import Home from "./pages/Home"  
import Default from "./pages/Default" 
import Layanan from "./pages/Layanan" 
import Galeri from "./pages/Galeri"  
import Kontak from "./pages/Kontak"  


class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/layanan" component={Layanan} /> 
          {/* <Route exact path="/galeri" component={Galeri} />   */}
          <Route exact path="/hubungi-kami" component={Kontak} />  
          <Route component={Default} />
        </Switch> 
 
        
      </React.Fragment>
    );
  }
}

export default App;