import { create } from "zustand";
import { incidentsApi } from "../../api/incidentsApi";



interface CreateIncidentState {
    isLoading: boolean;
    incidentSent: object
    postIncident: (incident:object) => Promise<void>
}


export const useCreateIncidentStore = create<CreateIncidentState>()((set) => ({

    isLoading:false,
    incidentSent:{},

    postIncident: async (incident:object) => {
        set({ isLoading: true });
        try {
            const { data } = await incidentsApi.post('/incident/create', incident);
            set({ incidentSent: data, });
        } catch (error) {
            console.error('Error al enviar el incidente:', error);
        }
    },

}));