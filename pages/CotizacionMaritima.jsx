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
            
        </Layout>
    )
}

export default WithAuth(CotizacionTerrestre)