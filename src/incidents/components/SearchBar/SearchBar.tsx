import React, { useEffect, useState } from 'react';
import { useIncidentsStore } from '../../../store';

export const SearchBar: React.FC = () => {

  const searchIncident = useIncidentsStore((state) => state.searchIncident);
  const getIncidents = useIncidentsStore((state) => state.getIncidents);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    console.log(value)
    searchIncident(searchTerm);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes agregar lógica para realizar la búsqueda con el término actual (searchTerm)
    console.log('Búsqueda realizada:', searchTerm);
  };

  useEffect(() => {
   
    if(searchTerm.length === 0) {
      getIncidents();

    }
  }, [searchTerm])
  

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card p-2 mt-4" style={{ width: '500px' }}>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};