import { QRcodeStyled, Wrapper } from "./qrCode.styles";
import QRcodeImg from "../../../Assets/images/QRcode.png";
function QRcode({ marginBottom }) {
  return (
    <Wrapper marginBottom={marginBottom}>
      <QRcodeStyled src={QRcodeImg} alt="scaner" />
    </Wrapper>
  );
}

export default QRcode;
