import { useUsuarios } from '../hooks/useUsuarios';
import {UsuarioInterface} from '../interfaces/reqRes';

export const Usuarios = () => {
    const {usuarios, cargarUsuarios, paginaAnterior, paginaSiguiente} = useUsuarios();

    const renderItem = (usuario: UsuarioInterface) => {
        return (
            <tr key={usuario.id.toString()}>
                <td> <img src={usuario.avatar} alt={usuario.first_name} style={{width:35, borderRadius:50}} /> </td>
                <td>{usuario.first_name} {usuario.last_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( renderItem)
                    }
                </tbody>
            </table>
            <button onClick={paginaAnterior} className="btn btn-primary">Anterior</button>
            &nbsp;
            <button onClick={paginaSiguiente} className="btn btn-primary">Siguiente</button>
        </>
    )
}
