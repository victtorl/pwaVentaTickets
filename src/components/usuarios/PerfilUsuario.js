import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const PerfilUsuario = () => {


    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2">icono y nombre</div>
                </div>
                <div className="row">
                   <div className="col-2"></div> 
                    <div className="col-8">
                        
                            <div className="mt-5">
                                <button className="btningresar w-100 d-block"  ><a href="registrocompras">Registro de Compras</a></button>
                            </div>
                            <div className="mt-4">
                                <button className="btningresar w-100 d-block " ><a href="editarperfilusuario">Modificar Perfil</a></button>
                            </div>
                            <div className="mt-4">
                                <button className="btningresar w-100 d-block"  ><a href="/home">Ir al Inicio</a></button>
                            </div>
                            <div className="mt-4">
                                <button className="btningresar w-100  d-block" ><a href="/">Cerrar Sesion</a></button>
                                
                            </div>

                    </div>

                    <div className="col-2"></div>

                </div>

            </container>
        </>
    )
}

export default PerfilUsuario