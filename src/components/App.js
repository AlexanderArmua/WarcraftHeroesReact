import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";
import Badges from "../pages/Badges";
import Landing from "../pages/Landing";

import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route
            exact
            path="/badges/:heroId"
            component={BadgeDetailsContainer}
          />
          <Route exact path="/badges/edit/:heroId" component={BadgeEdit} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
