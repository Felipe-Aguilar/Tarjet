import React from 'react';

const TusDatos = () => {
    return ( 
        <div className='mt-3 TusDatos'>

            <div className='row justify-content-center'>
                <div className='col-11 col-md-5'>
                    <form>
                        <div className='d-flex align-items center'>
                            <label>El segmento de tu negocio / profesión.</label>
                            <i className="bi bi-question-circle-fill"></i>
                        </div>
                        <div className='d-flex align-items-center'>
                            <select>
                                <option value="" key="">Area de trabajo</option>
                            </select>
                            <label className='label-info'>
                                Si no aparece tú área no te preocupes, <span>contáctanos</span> y solicítalo. <span>Nos encanta aprender.</span>
                            </label>
                        </div>

                        <div className='d-flex align-items-center'>
                            <label>La especialidad de tu profesión / negocio.</label>
                            <i className="bi bi-question-circle-fill"></i>
                        </div>

                        <div className='d-flex align-items-center'>
                            <select>
                                <option value="" key="">Especialidad</option>
                            </select>
                            <label className='label-info'>
                                Si no aparece tu especialidad no te preocupes, contáctanos y solicítalo.
                            </label>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-6 switch-contenedor'>
                                <label>Tarjet pública</label>
                                <i className="bi bi-question-circle-fill"></i>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>
                            <div className='col-6'>
                                <label>Rango de localización</label>
                                <i className="bi bi-question-circle-fill"></i>
                                <div className='row'>
                                    <div className='col-5'>
                                        <select className='rango'>
                                            <option value="" key="">5kms</option>
                                        </select>
                                    </div>
                                    {/* <div className='col-7 p-0'>
                                        <label className='label-info'>
                                            ¿Necesitas ser encontrado en más rango? Accede a Premium. ahí no existen los límites.
                                        </label>
                                    </div> */}
                                </div>
                            </div>

                            <div className='col-8 col-md-6 mt-2 mt-md-0 switch-contenedor'>
                                <label>En mantenimiento</label>
                                <i className="bi bi-question-circle-fill"></i>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>

                            <div className='col-12 col-md-8 mt-2 mt-md-0 switch-contenedor'>
                                <label>Mostrar estadísticas de tu actividad</label>
                                <i className="bi bi-question-circle-fill"></i>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}

export default TusDatos;