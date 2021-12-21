import { Suspense } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ErrorBoundary } from "react-error-boundary";
import { RouteNames } from ".";
import { Loading } from "shared";
import { Main } from "components/layout/";
import ErrorFallBack from "components/error.fallback/error.fallback";
import { Champions } from "./lazy.imports";
import Winners from "components/winners/winners";
const history = createBrowserHistory();

function AppRoutes() {
  return (
    <Router history={history}>
      {/* 
          If the component failed to render then the error boundary will 
          handle that case and the whole app will not crash
      */}
      <Suspense fallback={<Loading />}>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <Main>
            <Switch>
              <Route exact path={RouteNames.Default}>
                <Champions />
              </Route>
              <Route exact path={RouteNames.Winners}>
                <Winners />
              </Route>
              {/* Route not match case */}
              <Route
                path="*"
                render={() => (
                  <Redirect
                    to={{
                      pathname: RouteNames.Default,
                    }}
                  />
                )}
              />
            </Switch>
          </Main>
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
}

export { AppRoutes };
