import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'
import { useUser } from '../context/Context'
import { WithAuth } from '../HOCs/WithAuth'
import Layout from '../layout/Layout'
import Card from '../components/Card'

import style from '../styles/CotizacionTerrestre.module.css'

function CotizacionTerrestre() {
    const { user } = useUser()
    const router = useRouter()

    const [data, setData] = useState({})


    function handleEventChange (e) {
        setData({...data, ...{[e.target.name]: e.target.value}})
    }

console.log(data)
    return (
        <Layout>
            <div className={style.container}>
                <form className={style.form}>
                    <div className={style.subtitle}>COTIZACIÓN TRANSPORTE TERRESTRE</div>

                    <div className={style.containerFirstItems}>
                        <div className={style.imgForm}>
                            <Image src="/logo.svg" width="250" height="150" alt="User" />
                        </div>
                        <div className={style.firstItems}>
                            <div>
                                <label htmlFor="">COTIZACIÓN No</label>
                                <input type="text" name={"COTIZACIÓN No"} onChange={handleEventChange}/>
                            </div>
                            <div>
                                <label htmlFor="">FECHA</label>
                                <input type="text" name={"FECHA"} onChange={handleEventChange}/>
                            </div>
                            <div>
                                <label htmlFor="">VALIDEZ</label>
                                <input type="text" name={"VALIDEZ"} onChange={handleEventChange}/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className={style.subtitle}>DATOS DE CLIENTE</div>
                    <br />
                    <div className={style.items}>
                        <div>
                            <label htmlFor="">NOMBRE</label>
                            <input type="text" name={"NOMBRE"} onChange={handleEventChange}/>
                        </div>
                        <div>
                            <label htmlFor="">EMPRESA</label>
                            <input type="text" name={"EMPRESA"} onChange={handleEventChange}/>
                        </div>
                        <div>
                            <label htmlFor="">CARGO</label>
                            <input type="text" name={"CARGO"} onChange={handleEventChange}/>
                        </div>
                        <div>
                            <label htmlFor="">CORREO</label>
                            <input type="text" name={"CORREO"} onChange={handleEventChange}/>
                        </div>
                        <div>
                            <label htmlFor="">TELEFONO</label>
                            <input type="text" name={"TELEFONO"} onChange={handleEventChange}/>
                        </div>
                        <div>
                            <label htmlFor="">CIUDAD</label>
                            <input type="text" name={"CIUDAD"} onChange={handleEventChange}/>
                        </div>
                    </div>
                    <br />
                    <div className={style.subtitle}>DESCRIPCION DE LA CARGA</div>
                    <br />
                    <div className={style.items}>
                        <div>
                            <label htmlFor="">MERCANCIA</label>
                            <input type="text" name={"VALIDEZ"} onChange={handleEventChange}/>
                        </div>
                        <div>
                            <label htmlFor="">EMPAQUE</label>
                            <select name="EMPAQUE" onChange={handleEventChange}>
                                <option value="">Seleccione una opcion</option>
                                <option value="20`OT">20`OT</option>
                                <option value="20`FR">20`FR</option>
                                <option value="20`HARD TOP">20`HARD TOP</option>
                                <option value="20`OPEN SIDE">20`OPEN SIDE</option>
                                <option value="20`PLATAFORMA">20`PLATAFORMA</option>
                                <option value="20`RF">20`RF</option>
                                <option value="40`STD">40`STD</option>
                                <option value="40`HQ">40`HQ</option>
                            </select>
                            
                        </div>
                        <div>
                            <label htmlFor="">*PESO TN</label>
                            <input type="text" name={"PESO TN"} onChange={handleEventChange}/>
                        </div>
                        <div>
                            <label htmlFor="">INCOTERM</label>
                            <select name="INCOTERM" onChange={handleEventChange}>
                                <option value="">Seleccione una opcion</option>
                                <option value="EXW">EXW</option>
                                <option value="FCA">FCA</option>
                                <option value="CPT">CPT</option>
                                <option value="CIP">CIP</option>
                                <option value="DAP">DAP</option>
                                <option value="DPU">DPU</option>
                                <option value="DDP">DDP</option>
                                <option value="CIF">CIF</option>
                            </select>                        </div>
                        <div>
                            <label htmlFor="">*TIPO DE CARGA</label>
                            <select name="TIPO DE CARGA" onChange={handleEventChange}>
                                <option value="">Seleccione una opcion</option>
                                <option value="GENERAL">GENERAL</option>
                                <option value="PELIGROSA">PELIGROSA</option>
                                <option value="ESPECIAL">ESPECIAL</option>
                                <option value="REFRIGERADA">REFRIGERADA</option>
                                <option value="PROYECTO">PROYECTO</option>
                            </select>                        
                         </div>
                        <div>
                            <label htmlFor="">*VOLUMEN M3</label>
                            <input type="text" name={"VOLUMEN M3"} onChange={handleEventChange}/>
                        </div>
                        <div>
                            <label htmlFor="">*CANTIDAD</label>
                            <input type="text" name={"CANTIDAD"} onChange={handleEventChange}/>
                        </div>
                        <div>
                            <label htmlFor="">MODALIDAD</label>
                            <select name="MODALIDAD" onChange={handleEventChange}>
                                <option value="">Seleccione una opcion</option>
                                <option value="FCL">FCL</option>
                                <option value="LTL">LTL</option>
                                <option value="CARGA SUELTA">CARGA SUELTA</option>
                                <option value="DESCONSOLIDADO">DESCONSOLIDADO</option>
                            </select>                         
                            </div>
                    </div>
                    <br />
                    <div className={style.subtitle}>DETALLES DEL SERVICIO</div>
                    <br />
                    <div className={style.items}>
                        <div>
                            <label htmlFor="">*SERVICIO</label>
                            <select name="SERVICIO" onChange={handleEventChange}>
                                <option value="">Seleccione una opcion</option>
                                <option value="NACIONAL">NACIONAL</option>
                                <option value="INTERNACIONAL">INTERNACIONAL</option>
                                <option value="URBANO">URBANO</option>
                            </select>    
                        </div>
                        <div>
                            <label htmlFor="">*ORIGEN</label>
                            <input type="text" name={"ORIGEN"} onChange={handleEventChange}/>
                        </div>
                        <div>
                            <label htmlFor="">*CANTIDAD</label>
                            <input type="text" name={"CANTIDAD"} onChange={handleEventChange}/>
                        </div>
                        <div>
                            <label htmlFor="">*TIPO DE UNIDAD</label>
                            <select name="TIPO DE UNIDAD" onChange={handleEventChange}>
                                <option value="">Seleccione una opcion</option>
                                <option value="CAMIONETA">CAMIONETA</option>
                                <option value="CAMION">CAMION</option>
                                <option value="TRAILER">TRAILER</option>
                                <option value="LOWBOY">LOWBOY</option>
                                <option value="CAMION CON ACOPLE">CAMION CON ACOPLE</option>
                                <option value="FURGON CARGA SECA">FURGON CARGA SECA</option>
                                <option value="FURGON CARGA REFRIGERADA">FURGON CARGA REFRIGERADA</option>
                                <option value="PORTA CONTENEDORES">PORTA CONTENEDORES</option>
                            </select>                         
                            </div>
                        <div>
                            <label htmlFor="">*DESTINO</label>
                            <input type="text" name={"DESTINO"} onChange={handleEventChange}/>
                        </div>
                        <div>
                            <label htmlFor="">*MONEDA</label>
                            <input type="text" name={"MONEDA"} onChange={handleEventChange}/>
                        </div>
                    </div>
                    <br />
                    <div className={style.subtitle}>TARIFA</div>
                    <br />



                    <div className={`${style.items} ${style.mobil}`}>
                                                <div>
                            <label htmlFor="">DETALLE</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">FLETE UNITARIO</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">CANTIDAD</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">FLETE TOTAL</label>
                            <input type="text" />
                        </div>
                    </div>


                    <div className={`${style.containerFirstItems} ${style.desktop}`}>
                        <span>DETALLE</span>
                        <span>FLETE UNITARIO</span>
                        <span>CANTIDAD</span>
                        <span>FLETE TOTAL</span>
                    </div>
                    <div className={`${style.inputs} ${style.desktop}`}>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <div className={style.subtitle}>OTROS GASTOS</div>
                    <br />
                    <div className={`${style.items} ${style.mobil}`}>
                                                <div>
                            <label htmlFor="">DETALLE</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">FLETE UNITARIO</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">CANTIDAD</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">FLETE TOTAL</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className={`${style.containerFirstItems} ${style.desktop}`}>
                        <span>DETALLE</span>
                        <span>FLETE UNITARIO</span>
                        <span>CANTIDAD</span>
                        <span>FLETE TOTAL</span>
                    </div>
                    <div className={`${style.inputs} ${style.desktop}`}>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <br />
                </form>
            </div>

            
            <br />
            <br />
        </Layout>
    )
}

export default WithAuth(CotizacionTerrestre)