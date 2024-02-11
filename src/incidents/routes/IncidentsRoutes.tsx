import { Route, Switch } from "wouter";
import { TareasPage } from "../pages";
import { Navbar } from "../../ui/components";


export const IncidentsRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/tareas" component={TareasPage} />
        {/* <Route path="/*" component={ IncidentsRoutes }/> */}
      </Switch>
    </>
  );
};



