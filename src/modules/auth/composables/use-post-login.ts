import { useApi } from "@/helpers/use-api.helper"
import { useAutenticacionStore } from "@/stores/autenticacion.store"
import { useMutation } from "@tanstack/vue-query"
import Swal from "sweetalert2"

const authStore = useAutenticacionStore()

export const usePostLogin = () => {
    const mutation = useMutation({

        mutationFn: async (data: { usuario: string, password: string }) => {
            const response = await useApi.post('/auth/login', data)
            if (response.status !== 200) throw Error(`${response.data.message}`)
            return response.data
        },
        onError: (error) => {
            console.log(error)
            Swal.fire('Error', error.message, 'error')

        },
        onSuccess: (data) => {

            Swal.fire({
                icon: 'success',
                title: 'Login correcto',
                timer: 2000,
            })
            authStore.onLoginStore(data.token, data.rol, data.user, data.rutas)


        },
        onMutate: () => {
            Swal.fire({
                title: 'Iniciando sesión',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            })
        }
    })
    return mutation
}

