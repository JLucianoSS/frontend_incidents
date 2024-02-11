export interface Incident {
    ID_incidencia: number;
    asunto: string;
    detalle: string;
    estado: string;
    fecha_reporte: string;
    ID_usuario: number;
    ID_tipo: number;
    tipo: {
      nombre_tipo: string;
    };
    usuario: {
      nombre: string;
    };
  }
  
  export interface IncidentsTableProps {
    incidents: { incidencias: Incident[] } | null;
    usuario: {
      user: {
        rol: string;
        ID_usuario: number;
      };
    } | null;
  }