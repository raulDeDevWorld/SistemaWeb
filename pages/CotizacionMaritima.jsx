import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'
import { useUser } from '../context/Context'
import { WithAuth } from '../HOCs/WithAuth'
import Layout from '../layout/Layout'
import Card from '../components/Card'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import style from '../styles/CotizacionTerrestre.module.css'

function CotizacionTerrestre() {
    const { user } = useUser()
    const router = useRouter()
    const [intro, setIntro] = useState(["COTIZACION No", "FECHA", "VALIDEZ"])
    const [datosDeCliente, setDatosDeCliente] = useState(["NOMBRE", "EMPRESA", "CARGO", "CORREO", "TELEFONO", "CIUDAD",])
    const [descripcionDeLaCarga, setDescripcionDeLaCarga] = useState(["MERCANCIA", "EMPAQUE", "*PESO TN", "INCOTERM", "*TIPO DE CARGA", "*VOLUMEN M3", "*CANTIDAD", "MODALIDAD"])


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
                            {intro.map(i =>
                                <div>
                                    <label htmlFor="">{i}</label>
                                    <input type="text" />
                                </div>
                            )}
                        </div>
                    </div>
                    <br />
                    <div className={style.subtitle}>DATOS DE CLIENTE</div>
                    <br />
                    <div className={style.items}>
                        {datosDeCliente.map(i =>
                            <div>
                                <label htmlFor="">{i}</label>
                                <input type="text" />
                            </div>
                        )}
                    </div>
                    <br />
                    <div className={style.subtitle}>DESCRIPCION DE LA CARGA</div>
                    <br />
                    <div className={style.items}>
                        {descripcionDeLaCarga.map(i =>
                            <div>
                                <label htmlFor="">{i}</label>
                                <input type="text" />
                            </div>
                        )}
                    </div>
                    <br />
                    <div className={style.subtitle}>D</div>
                    <br />
                    <div className={style.items}>
                        <div>
                            <label htmlFor="">*SERVICIO</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">*ORIGEN</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">*CANTIDAD</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">*TIPO DE UNIDAD</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">*DESTINO</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">*MONEDA</label>
                            <input type="text" />
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