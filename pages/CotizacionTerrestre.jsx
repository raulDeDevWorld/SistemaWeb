import { useRouter } from 'next/router'
import Image from 'next/image'
import { useUser } from '../context/Context'
import { WithAuth } from '../HOCs/WithAuth'
import Layout from '../layout/Layout'
import Card from '../components/Card'

import style from '../styles/CotizacionTerrestre.module.css'

function CotizacionTerrestre() {
    const { user } = useUser()
    const router = useRouter()


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
                                <label htmlFor="">COTIZACIÓN No.</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">FECHA</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">VALIDEZ:</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className={style.subtitle}>DATOS DE CLIENTE</div>
                    <br />
                    <div className={style.items}>
                        <div>
                            <label htmlFor="">NOMBRE</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">EMPRESA</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">CARGO</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">CORREO</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">TELEFONO</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">CIUDAD</label>
                            <input type="text" />
                        </div>
                    </div>
                    <br />
                    <div className={style.subtitle}>DESCRIPCION DE LA CARGA</div>
                    <br />
                    <div className={style.items}>
                        <div>
                            <label htmlFor="">MERCANCIA</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">EMPAQUE</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">*PESO TN</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">INCOTERM</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">*TIPO DE CARGA</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">*VOLUMEN M3</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">*CANTIDA</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">MODALIDAD</label>
                            <input type="text" />
                        </div>
                    </div>
                    <br />
                    <div className={style.subtitle}>DATOS DE CLIENTE</div>
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
                    <div className={style.containerFirstItems}>
                        <span>DETALLE</span>
                        <span>FLETE UNITARIO</span>
                        <span>CANTIDAD</span>
                        <span>FLETE TOTAL</span>
                    </div>
                    <div className={style.inputs}>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <br />
                    <div className={style.subtitle}>OTROS GASTOS</div>
                    <br />
                    <div className={style.containerFirstItems}>
                        <span>DETALLE</span>
                        <span>FLETE UNITARIO</span>
                        <span>CANTIDAD</span>
                        <span>FLETE TOTAL</span>
                    </div>
                    <div className={style.inputs}>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </form>
            </div>
            <br />
                <br />
        </Layout>
    )
}

export default WithAuth(CotizacionTerrestre)