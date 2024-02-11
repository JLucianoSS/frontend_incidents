

import { create } from 'zustand'
import { incidentsApi } from '../../api/incidentsApi';


interface Type {
    ID_tipo: number;
    nombre_tipo: string;
  }
interface TypesState {
    isLoading: boolean;
    types: Type[] | null;
    getTypesIncidents: () => Promise<void>;
}
  
export const useTypesStore = create<TypesState>()((set) => ({

    isLoading:false,
    types:null,

    getTypesIncidents: async () => {
        set({ isLoading: true });
        try {
            const { data } = await incidentsApi.get('/incidents/types');
            set({ types: data, isLoading: false });
        } catch (error) {
            console.error('Error al cargar types:', error);
            set({ isLoading: false });
        }
    },

}));