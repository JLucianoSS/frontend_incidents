import { Route, Switch } from "wouter";
import { navigate } from "wouter/use-browser-location";
import { TareasPage } from "../pages";
import { Navbar } from "../../ui/components";


export const IncidentsRoutes = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/tareas" component={TareasPage} />
      <Route path="/*">
        {() => {
          navigate("/tareas");
          return null;
        }}
      </Route>
    </Switch>
  </>
);



