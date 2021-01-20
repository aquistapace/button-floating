import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "../pages/Home"
import ButtonFloatingSimple from "../pages/ButtonFloatingSimple"
import ButtonFloatingWithModal from "../pages/ButtonFloatingWithModal"
import ButtonFloatingWithIcon from "../pages/ButtonFloatingWithIcon"
import ButtonFloatingWithIconWithModal from "../pages/ButtonFloatingWithIconWithModal"


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      
      <Route path="/prototipo1" exact component={ButtonFloatingSimple} />
      <Route path="/prototipo2" exact component={ButtonFloatingWithModal} />
      <Route path="/prototipo3" exact component={ButtonFloatingWithIcon} />
      <Route path="/prototipo4" exact component={ButtonFloatingWithIconWithModal} />
    </Switch>
  );
};

export default Routes;
