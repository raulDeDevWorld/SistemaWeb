/* eslint-disable jsx-a11y/alt-text */
import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useUser } from "../context/Context.js"
import style from '../styles/CotizacionTerrestre.module.css'


Font.register({ family: "Inter", src: "/assets/font.otf" })

const styles = StyleSheet.create({
    body: {
        padding: "10px",
        paddingTop: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        fontSize: "12px"
    },
    fontFamily: "Inter",
    subtitle: {
        width: "100%",
        position: "relative",
        textAlign: "center",
        backgroundColor: "#294B98",
        color: "#f2f2f2",
        padding: "0px 100px",
        margin: "16px 0"
    },


    containerIntroItems: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#38569c",
    },
    introImg: {
        width: "100%",
    },
    logo: {
        height: "auto",
        width: "150px",
        marginLeft: "35px"
    },
    introItems: {
        width: "100%",
    },
    items: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    introViewKeyValue: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },
    viewKeyValue: {
        width: "50%",
        display: "flex",
        flexDirection: "row"
    },
    key: {
        margin: "0px",
        width: "50%",
        padding: "0px 5px",
        border: "1px solid #294B98",
        backgroundColor: "#294B98",
        color: "#f2f2f2",
    },
    value: {
        width: "50%",
        padding: "0px 5px",
        border: "0.5px solid #294B98",
        color: "#000000",

    },
    viewKeyValueTwo: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },



})

const PDFView = () => {
    const { pdfData } = useUser()

    return (
        <PDFViewer>
            <Document>
                <Page style={styles.body} >
                        <Text style={styles.subtitle}>COTIZACIÓN TRANSPORTE TERRESTRE</Text>
                        <View style={styles.containerIntroItems}>
                            <View style={styles.introImg}>
                                <Image style={styles.logo} src="/logo.png" />
                            </View>
                            <View style={styles.introItems}>
                                <View style={styles.introViewKeyValue}>
                                    <Text style={styles.key}>COTIZACIÓN No</Text>
                                    <Text style={styles.value}>COTIZACIÓN No</Text>
                                </View>
                                <View style={styles.introViewKeyValue}>
                                    <Text style={styles.key}>FECHA</Text>
                                    <Text style={styles.value}>FECHA</Text>
                                </View>
                                <View style={styles.introViewKeyValue}>
                                    <Text style={styles.key}>VALIDEZ</Text>
                                    <Text style={styles.value}>VALIDEZ</Text>
                                </View>
                            </View>
                        </View>
                   
                    <Text style={styles.subtitle}>DATOS DE CLIENTE</Text>

                    <View style={styles.items}>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>NOMBRE</Text>
                            <Text style={styles.value}>Junito</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>CORREO</Text>
                            <Text style={styles.value}>NOMBRE</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>EMPRESA</Text>
                            <Text style={styles.value}>NOMBRE</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>TELEFONO</Text>
                            <Text style={styles.value}>NOMBRE</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>CARGO</Text>
                            <Text style={styles.value}>NOMBRE</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>CIUDAD</Text>
                            <Text style={styles.value}>NOMBRE</Text>
                        </View>
                    </View>

                    <Text style={styles.subtitle}>DESCRIPCION DE LA CARGA</Text>
                    <View style={styles.items}>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>MERCANCIA</Text>
                            <Text style={styles.value}>MERCANCIA</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>*TIPO DE CARGA</Text>
                            <Text style={styles.value}>*TIPO DE CARGA</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>EMPAQUE</Text>
                            <Text style={styles.value}>EMPAQUE</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>*VOLUMEN M3</Text>
                            <Text style={styles.value}>*VOLUMEN M3</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>*PESO TN</Text>
                            <Text style={styles.value}>*PESO TN</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>*CANTIDAD</Text>
                            <Text style={styles.value}>*CANTIDAD</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>INCOTERM</Text>
                            <Text style={styles.value}>INCOTERM</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>MODALIDAD</Text>
                            <Text style={styles.value}>MODALIDAD</Text>
                        </View>
                    </View>

                    <Text style={styles.subtitle}>DETALLES DEL SERVICIO</Text>
                    <View style={styles.items}>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>*SERVICIO</Text>
                            <Text style={styles.value}>*SERVICIO</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>*TIPO DE UNIDAD</Text>
                            <Text style={styles.value}>*TIPO DE UNIDAD</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>*ORIGEN</Text>
                            <Text style={styles.value}>*ORIGEN</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>*DESTINO</Text>
                            <Text style={styles.value}>*DESTINO</Text>
                        </View>
                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>*CANTIDAD</Text>
                            <Text style={styles.value}>*CANTIDAD</Text>
                        </View>

                        <View style={styles.viewKeyValue}>
                            <Text style={styles.key}>*MONEDA</Text>
                            <Text style={styles.value}>*MONEDA</Text>
                        </View>

                    </View>

                    <Text style={styles.subtitle}>TARIFA</Text>
                    <View style={styles.viewKeyValueTwo}>
                            <Text style={styles.key}>*MONEDA</Text>
                            <Text style={styles.key}>*MONEDA</Text>
                            <Text style={styles.key}>*MONEDA</Text>
                            <Text style={styles.key}>*MONEDA</Text>
                    </View>
                    <View style={styles.viewKeyValueTwo}>
                            <Text style={styles.value}>*MONEDA</Text>
                            <Text style={styles.value}>*MONEDA</Text>
                            <Text style={styles.value}>*MONEDA</Text>
                            <Text style={styles.value}>*MONEDA</Text>
                    </View>
                    <Text style={styles.subtitle}>OTROS GASTOS</Text>
                    <View style={styles.viewKeyValueTwo}>
                            <Text style={styles.key}>*MONEDA</Text>
                            <Text style={styles.key}>*MONEDA</Text>
                            <Text style={styles.key}>*MONEDA</Text>
                            <Text style={styles.key}>*MONEDA</Text>
                    </View>
                    <View style={styles.viewKeyValueTwo}>
                            <Text style={styles.value}>*MONEDA</Text>
                            <Text style={styles.value}>*MONEDA</Text>
                            <Text style={styles.value}>*MONEDA</Text>
                            <Text style={styles.value}>*MONEDA</Text>
                    </View>
                    

                </Page>
            </Document>
        </PDFViewer>
    )
}


export default PDFView