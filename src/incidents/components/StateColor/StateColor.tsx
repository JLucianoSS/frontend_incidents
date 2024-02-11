import React from 'react';

interface StateWithColorProps {
  estado: string
}

export const StateColor: React.FC<StateWithColorProps> = ({ estado }) => {
  const getColorAndShadow = (): { color: string;  } => {
    switch (estado) {
      case 'Pendiente':
        return { color: 'red' };
      case 'En proceso':
        return { color: 'yellow'  };
      case 'Resuelto':
        return { color: 'green' };
      default:
        return { color: 'gray'};
    }
  };

  const { color } = getColorAndShadow();

  return (
    <div
      style={{
        display:'flex',
        justifyContent:'center',
        backgroundColor: color,
        borderRadius: '1rem',
        padding: '5px 8px ',
        color:'white'
        
      }}
    >
      {estado}
    </div>
  );
};