import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const PerfilAdministrador = () => {
    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2" ><a href="perfiladministrador">icono y nombreAdmin</a></div>
                </div>
                <div className="row">

                    <div>
                        <div className="d-flex justify-content-center mt-5 mb-5">
                            <div>
                                <button className="btningresar" > <a href="crearevento">Crear Evento</a> </button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-1 "></div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-8 ">
                                        <div className="card ">
                                            <div className="card-body">
                                                <h5 className="card-title">Evento Social 1</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4 d-flex align-items-center">
                                        <div className="card mr-3">
                                            <div className="card-body">
                                                <p><a href="editarevento" >editar</a></p> <br></br>
                                                <p>eliminar</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 "></div>
                        </div>
                        
                        <div className="row mt-3">
                            <div className="col-1 "></div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-8 ">
                                        <div className="card ">
                                            <div className="card-body">
                                                <h5 className="card-title">Evento Social 1</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4 d-flex align-items-center">
                                        <div className="card mr-3">
                                            <div className="card-body">
                                                <p><a href="editarevento" >editar</a></p> <br></br>
                                                <p>eliminar</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 "></div>
                        </div>
                        


                        <div className="d-flex justify-content-center mt-5">
                            <div>
                                <button className="btningresar"><a href="/">Cerrar Sesion</a></button>
                            </div>
                        </div>
                    </div>

                </div>

            </container>

        </>
    )
}

export default PerfilAdministrador