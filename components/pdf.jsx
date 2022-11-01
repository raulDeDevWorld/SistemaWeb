/* eslint-disable jsx-a11y/alt-text */
import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";

Font.register( {family: "Inter", src: "/assets/font.otf"})

const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
    },
    fontFamily: "Inter"

})

const PDFView = () => {
    return(
        <PDFViewer>
        <Document>
            <Page  style={styles.body} >
                <View>
                    <Text wrap={false} style={{alignSelf: "flex-end", color: "black"}}>hello world</Text>
                </View>
                <View>
                    <Image src="/logo.png"/>
                    <Text wrap={false} style={{alignSelf: "flex-end", color: "black"}}>Estamos trabajando</Text>
                </View>
            </Page>
        </Document>
        </PDFViewer>
    )
}


export default PDFView