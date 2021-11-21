import TestDocument from "../components/TestDocument";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";

export default function Home() {
  if (typeof window === "undefined") {
    ReactPDF.renderToFile(TestDocument(), `${__dirname}/test.pdf`).catch(
      console.error
    );
    return null;
  }
  return (
    <PDFViewer style={{ height: "100vh", width: "100vw" }}>
      <TestDocument />
    </PDFViewer>
  );
}
