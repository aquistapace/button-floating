import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "../pages/Home"
import ButtonFloatingSimple from "../pages/ButtonFloatingSimple"
import ButtonFloatingWithModal from "../pages/ButtonFloatingWithModal"


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/prototipo1" exact component={ButtonFloatingSimple} />
      <Route path="/prototipo2" exact component={ButtonFloatingWithModal} />
    </Switch>
  );
};

export default Routes;
