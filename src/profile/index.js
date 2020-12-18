import React from "react";
import { Route, Switch } from "react-router-dom";

import { Archive } from "./Archive";
import { Update } from "./Update";

function Profile({ match }) {
  const { path } = match;

  return (
    <div className="p-4">
      <div className="container">
        <Switch>
          <Route exact path={path} component={Archive} />
          <Route path={`${path}/update`} component={Update} />
        </Switch>
      </div>
    </div>
  );
}

export { Profile };
