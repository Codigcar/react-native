import React, { useState } from 'react'

export const Formularios = () => {

    const [formulario, setFormulario] = useState({
        email: 'test@test.com', 
        password:'123123'
    })

    const onChange = (value: string, campo: string) => {
        setFormulario({
            ...formulario,
            [campo]: value
        });
    }

    return (
        <>
            <h3>Formularios</h3>
            <input onChange={(ev) => onChange(ev.target.value,'email')} value={formulario.email}  type="text" className="form-control" placeholder="Email" />
            <input onChange={(ev) => onChange(ev.target.value,'password')} value={formulario.password} type="text" className="form-control mt-2" placeholder="Password" />
            <code>
                <pre>{JSON.stringify(formulario, null, 2)}</pre>
            </code>
        </>
    )
}
