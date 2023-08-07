import React, { useState, useEffect, useRef } from "react";
import { BarcodeWrapper, Heading } from "./barcodeScanner.styles";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";
import SearchProductData from "../../DATA/SEARCH_PRODUCT_DATA";
import QRCode from "../../Assets/images/QRcode.svg";

const BarcodeScanner = ({ onScan }) => {
  const [scanResult, setScanResult] = useState("No result");
  const videoRef = useRef(null);
  const codeReader = useRef(new BrowserMultiFormatReader());

  const trimedResult = scanResult.substring(0, 10);

  useEffect(() => {
    const startScanning = async () => {
      if (videoRef.current) {
        try {
          const hints = new Map();
          const formats = [
            "code_128",
            "code_39",
            "code_93",
            "codabar",
            "ean_8",
            "ean_13",
            "upc_a",
            "upc_e",
            "upc_ean",
            "qr_code",
          ];
          hints.set(4, formats);
          await codeReader.current.decodeFromVideoDevice(
            undefined,
            videoRef.current,
            (result, error) => {
              if (result) {
                setScanResult(result.text);
                onScan(result.text);
              }
              if (error && !(error instanceof NotFoundException)) {
                console.error("Error decoding barcode:", error);
              }
            }
          );
        } catch (error) {
          console.error("Error starting scanning:", error);
        }
      }
    };

    const stopScanning = () => {
      codeReader.current.reset();
    };

    startScanning();

    return () => {
      stopScanning();
    };
  }, [onScan, SearchProductData]);

  const newlyAddedItem = {
    id: SearchProductData.length + 2,
    ItemImg: QRCode,
    ItemHeading: trimedResult,
    ItemParagraph: "Scanned Item",
    date: "15/07/2023",
  };

  if (scanResult !== "") {
    SearchProductData.unshift(newlyAddedItem);
    setScanResult("");
    console.log(newlyAddedItem, ...SearchProductData);
    console.log(SearchProductData);
  }

  return (
    <BarcodeWrapper>
      <Heading>Scan Barcode and QR Code</Heading>
      {/* Add the video element with the ID 'video' */}
      <video
        ref={videoRef}
        id="video"
        style={{ width: "100%", height: "auto" }}
      />
      <p>Scan Result: {scanResult}</p>
    </BarcodeWrapper>
  );
};

export default BarcodeScanner;
