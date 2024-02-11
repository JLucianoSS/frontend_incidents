import React, { useState } from 'react';

interface FilterByStateProps {
  handleStateChange: (state: string) => void;
}

export const FilterByState: React.FC<FilterByStateProps> = ({ handleStateChange }) => {
  const [selectedState, setSelectedState] = useState<string>('Todos');

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'1.5rem'
  };

  const radioStyles: React.CSSProperties = {
    marginRight: '10px',
    padding: '5px 10px',
    borderRadius: '5px',
  };

  return (
    <div style={containerStyles}>
      <label style={{ ...radioStyles, backgroundColor: 'white' }}>
        <input
          type="radio"
          value="Todos"
          checked={selectedState === 'Todos'}
          onChange={() => {
            setSelectedState('Todos');
            handleStateChange('Todos');
          }}
        />
        Todos
      </label>

      <label style={{ ...radioStyles, backgroundColor: 'red', color: 'white' }}>
        <input
          type="radio"
          value="pendiente"
          checked={selectedState === 'pendiente'}
          onChange={() => {
            setSelectedState('pendiente');
            handleStateChange('pendiente');
          }}
        />
        Pendiente
      </label>

      <label style={{ ...radioStyles, backgroundColor: 'yellow' }}>
        <input
          type="radio"
          value="en proceso"
          checked={selectedState === 'en proceso'}
          onChange={() => {
            setSelectedState('en proceso');
            handleStateChange('en proceso');
          }}
        />
        En proceso
      </label>

      <label style={{ ...radioStyles, backgroundColor: 'green', color: 'white' }}>
        <input
          type="radio"
          value="resuelto"
          checked={selectedState === 'resuelto'}
          onChange={() => {
            setSelectedState('resuelto');
            handleStateChange('resuelto');
          }}
        />
        Resuelto
      </label>
    </div>
  );
};