/* eslint-disable jsx-a11y/alt-text */
import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import ReactPDF from '@react-pdf/renderer';
import Pdf from "../components/PDF.jsx"
Font.register( {family: "Inter", src: "/assets/font.otf"})

const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        fontFamily: "Inter"
    }
})

const PDFView = () => {
    return(
        <PDFViewer>
            <Pdf></Pdf>
        </PDFViewer>
    )
}

export default ReactPDF.render(<PDFView />, `example.pdf`);
