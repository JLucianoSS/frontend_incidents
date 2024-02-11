import { create } from 'zustand'
import { incidentsApi } from '../../api/incidentsApi';




interface UserState {
    isLoading: boolean;
    user: RespuestaServidor | null;
    getUser: (validateUser: object) => Promise<void>;
    cleanUser: () => void;
}

interface RespuestaServidor {
    message: string;
    user: object;
}

export const useUserStore = create<UserState>()((set) => ({

    isLoading:false,
    user:null,

    getUser: async (validateUser:object) => {
        set({ isLoading: true });
        try {
            const { data } = await incidentsApi.post<RespuestaServidor>('/user/find', validateUser);
            set({ user: data, isLoading: false });
        } catch (error) {
            console.error('Error al obtener ususario:', error);
            alert('Credenciales Incorrectos')
        }
    },
    cleanUser: () => {
        set({ user:null });
    }

}));