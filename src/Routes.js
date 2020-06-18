import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// View Components
import Home from './core/Home';
import Signup from './core/Signup'
import Signin from './core/Signin'
import AddVideogame from './core/AddVideogame'
import AddCategory from './core/AddCategory'

// Functional Components

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/addcategory" exact component={AddCategory}/>
        <Route path="/addvideogame" exact component={AddVideogame}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;