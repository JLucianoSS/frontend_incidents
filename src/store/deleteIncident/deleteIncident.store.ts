
import { create } from "zustand";
import { incidentsApi } from "../../api/incidentsApi";



interface DeleteIncidentState {
    isLoading: boolean;
    incidentDeleted: object
    deleteIncident: (id:number) => Promise<void>
}


export const useDeleteIncident = create<DeleteIncidentState>()((set) => ({

    isLoading:false,
    incidentDeleted:{},

    deleteIncident: async (id) => {
        set({ isLoading: true });
        try {
            const { data } = await incidentsApi.delete(`/incident/${id}`);
            set({ incidentDeleted: data, });
        } catch (error) {
            console.error('Error al enviar el incidente:', error);
        }
    },

}));