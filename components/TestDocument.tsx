import { Document, Font, Page, Text, View } from "@react-pdf/renderer";

const fontFamily = "breakfastDEMO";

Font.register({
  family: fontFamily,
  src: `http://localhost:3000/fonts/${fontFamily}.otf`,
  fontWeight: 400,
});

export default function TestDocument() {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text style={{ fontFamily }}>Heading</Text>
        </View>
      </Page>
    </Document>
  );
}
