import React from 'react';
import Home from './components/Home';
import Form from './components/Form';
import ProductList from "./components/productList"
import NavBar from './components/NavBar'
import Person from './components/Person'
import {Route,Switch} from "react-router-dom"
import Login from "./components/Login"
import Movie from "./components/Movie"
import Clock from "./components/Clock"
import DogApp from './components/DogApp';
import ReactUploadImage from "./components/ReactUploadImage"

import './App.css';

function App() {
  return (
    <div className="App">
         <NavBar/>

    <Switch>
        <Route exact path={"/"}>
          <Home/>
        </Route>
        <Route path={"/people/:id"}>
          <Person/>
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route path={"/movie"}>
          <Movie/>
        </Route>
        <Route path={"/clock"}>
          <Clock/>
        </Route>
        <Route path={"/form"} component={Form}/>
        <Route path={"/dogs"} component={DogApp} />
          {/* <Home/> */}
        <Route path={"/product"} component={ProductList}/>;
        <Route path={"/uploadImg"}>
          <ReactUploadImage />
        </Route>

        <Route path="*" render={()=>(<div>no path was enter</div>)}/>{/* handle function or error page aka 404 page*/}
    </Switch>


      {/* <ProductList/> */}
      {/* <Form/> */}
    </div>
  );
}

export default App;
