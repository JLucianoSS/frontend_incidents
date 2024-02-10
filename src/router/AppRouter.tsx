import { Route, Switch } from "wouter";
import { LoginPage } from "../auth/pages";
import { IncidentsRoutes } from "../incidents/routes/IncidentsRoutes";

export const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/*" component={ IncidentsRoutes }/>
      </Switch>
    </>
  );
};
