import React, { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes';
import { ReqResListadoInterface, UsuarioInterface } from '../interfaces/reqRes';

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<UsuarioInterface[]>([])
    const paginaRef = useRef(1);

    useEffect(() => {
        // llamado al API
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async() => {
        // PRIMERA FORMA DE USAR AXIOS

        // reqResApi.get<ReqResListadoInterface>('/users')
        //     .then(resp => {
        //         // console.log(resp.data.data);
        //         setUsuarios(resp.data.data);
        //     })
        //     .catch( err => console.log(err) )

        // OTRA FORMA DE USAR AXIOS
        const resp = await reqResApi.get<ReqResListadoInterface>('/users',{params:{page: paginaRef.current}})
        if(resp.data.data.length > 0){
            setUsuarios(resp.data.data);
            // paginaRef.current++;
        } else {
            alert('No hay mas registros')
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        cargarUsuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
