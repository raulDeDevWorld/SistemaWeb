import dynamic from "next/dynamic";
import { useEffect, useState } from "react"
import style from "../styles/StylesPDF.module.css"



const InvoicePDF = dynamic(() => import("../components/Pdf"), {
    ssr: false,
  });

const PdfView = () => {

    return(
        <div className={style.style}>
                    <InvoicePDF />
        </div>
    )
}


export default PdfView