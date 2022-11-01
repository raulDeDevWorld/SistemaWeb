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
                    <Text wrap={false} style={{alignSelf: "flex-end", color: "black"}}>Goodbye, world!hgdkljfhsalhgfljadhsgflhasdlhfgsaljdhgflhasgflhgasdl;hfg;aksdjgf;kjsdahf;kjhasd;kjhf;kjashdf;kjhasd;kjfhjks;adhfkjhsadk;jfhaskjdhfkjsahdfkjhsadkj;hfkjsdhfkjhasd;kjhfkjsadhfkjhsda;kjh;</Text>
                </View>
                <View>
                    <Image src="/assets/image.png"/>
                    <Text wrap={false} style={{alignSelf: "flex-end", color: "black"}}>Goodbye, world!hgdkljfhsalhgfljadhsgflhasdlhfgsaljdhgflhasgflhgasdl;hfg;aksdjgf;kjsdahf;kjhasd;kjhf;kjashdf;kjhasd;kjfhjks;adhfkjhsadk;jfhaskjdhfkjsahdfkjhsadkj;hfkjsdhfkjhasd;kjhfkjsadhfkjhsda;kjh;</Text>
                </View>
            </Page>
        </Document>
        </PDFViewer>
    )
}


export default PDFView