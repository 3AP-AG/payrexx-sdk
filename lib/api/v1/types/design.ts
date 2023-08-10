import { Response } from '../../interface/response';

interface DesignResponse extends Response {
  data: Partial<DesignData>[];
}

type DesignData = {
  uuid: string;
  default: boolean;
  name: string;
  fontFamily: string;
  fontSize: number;
  textColor: string;
  textColorVPOS: string;
  linkColor: string;
  linkHoverColor: string;
  buttonColor: string;
  buttonHoverColor: string;
  background: string;
  backgroundColor: string;
  headerBackground: string;
  headerBackgroundColor: string;
  emailHeaderBackgroundColor: string;
  headerImageShape: string;
  useIndividualEmailLogo: boolean;
  logoBackgroundColor: string;
  logoBorderColor: string;
  VPOSGradientColor1: string;
  VPOSGradientColor2: string;
  enableRoundedCorners: boolean;
  headerImage: string;
  backgroundImage: string;
  headerBackgroundImage: string;
  emailHeaderImage: string;
  headerImageCustomLink: boolean;
};

export type { DesignResponse };
