import { useEffect } from "react";
import { useIncidentsStore } from "../../../store";
import { SearchBar,FilterByState, FloatingButton } from "../../components";
import { userInLocalStorage } from "../../../utils";
import { Alert, Loading } from "../../../ui/components";
import IncidentsTable from "../../components/IncidentsTable/IncidentsTable";


export const TareasPage = () => {
  const isLoading = useIncidentsStore((state) => state.isLoading);
  const incidents = useIncidentsStore((state) => state.incidents);
  const getIncidents = useIncidentsStore((state) => state.getIncidents);
  const filterByState = useIncidentsStore((state) => state.filterByState);
  const usuario = userInLocalStorage();

  const handleStateChange = (selectedState: string) => {
    // console.log(`Estado seleccionado: ${selectedState}`);
    if(selectedState === 'Todos') return getIncidents();
    filterByState(selectedState);
  };

  useEffect(() => {
    getIncidents();
  }, []);


  console.log(incidents)

  return (
    <>
      <SearchBar />
      <FilterByState handleStateChange={handleStateChange}/>
      {
        incidents?.incidencias.length !== 0
          ? (isLoading 
              ? <Loading />
              : <IncidentsTable incidents={incidents} usuario={usuario}/>)
          : <Alert message="No hay incidencias para mostrar"/>
      }
      {
        usuario?.user.rol === 'admin' ? <FloatingButton/> : ''
      }
    </>
  );
};
