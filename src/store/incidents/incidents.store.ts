


import { create } from 'zustand'
import { incidentsApi } from '../../api/incidentsApi';

export interface Incident {
    ID_incidencia: number;
    asunto: string;
    detalle: string;
    imagen: string | null; 
    estado: 'pendiente' | 'en proceso' | 'resuelto'; 
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
  
interface RespuestaServidor {
    message: string;
    incidencias: Incident[];
}

interface IncidentsState {
    isLoading: boolean;
    incidents: RespuestaServidor | null;
    getIncidents: () => Promise<void>;
    filterByState: (state:string) => Promise<void>;
    searchIncident: (query:string) => Promise<void>;
}

export const useIncidentsStore = create<IncidentsState>()((set) => ({

    isLoading:false,
    incidents:null,

    getIncidents: async () => {
        set({ isLoading: true });
        try {
            const { data } = await incidentsApi.get<RespuestaServidor>('/incidents');
            set({ incidents: data, isLoading: false });
        } catch (error) {
            console.error('Error al cargar incidentes:', error);
            set({ isLoading: false });
        }
    },

    //Filters

    filterByState: async (state) => {
        set({ isLoading: true });
        try {
            const { data } = await incidentsApi.get<RespuestaServidor>(`/incidents/filter/${state}`);
            console.log(data);
            set({ incidents: data, isLoading: false });
        } catch (error) {
            console.error('Error al filtrar incidentes:', error);
            set({ isLoading: false });
        }
    },

    searchIncident: async (query) => {
        set({ isLoading: true });
        try {
            const { data } = await incidentsApi.get<RespuestaServidor>(`/incidents/search?asunto=${query}`);
            console.log(data);
            set({ incidents: data, isLoading: false });
        } catch (error) {
            console.error('Error al encontrar incidentes:', error);
            set({ isLoading: false });
        }
    },


}));