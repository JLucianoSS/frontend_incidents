
import { create } from "zustand";
import { incidentsApi } from "../../api/incidentsApi";

interface UpdateIncidentState {
    isLoading: boolean;
    incidentUpdated: object
    updateIncident: (id:number,incident:object) => Promise<void>
}


export const useUpdateIncident = create<UpdateIncidentState>()((set) => ({

    isLoading:false,
    incidentUpdated:{},

    updateIncident: async (id, incident) => {
        set({ isLoading: true });
        try {
            const { data } = await incidentsApi.patch(`/incident/${id}`,incident);
            set({ incidentUpdated: data, });
        } catch (error) {
            console.error('Error al actualizar  el incidente:', error);
        }
    },

}));