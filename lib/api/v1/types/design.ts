import { Response } from '../../interface/response';

interface DesignResponse extends Response {
  data: DesignData[];
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
  headerImageCustomLink: any;
};

class DesignRequest {
  private name: string;
  private default?: number;
  private fontFamily?: string;
  private fontSize?: number;
  private textColor?: string;
  private textColorVPOS?: string;
  private linkColor?: string;
  private linkHoverColor?: string;
  private buttonColor?: string;
  private buttonHoverColor?: string;
  private background?: string;
  private backgroundColor?: string;
  private headerBackground?: string;
  private headerBackgroundColor?: string;
  private emailHeaderBackgroundColor?: string;
  private headerImageShape?: string;
  private useIndividualEmailLogo?: number;
  private logoBackgroundColor?: string;
  private logoBorderColor?: string;
  private VPOSGradientColor1?: string;
  private VPOSGradientColor2?: string;
  private enableRoundedCorners?: number;
  private VPOSBackground?: string;
  private headerImageCustomLink: any;

  /**
   * Create a request for design
   * @param name Name of the design
   */
  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  /**
   *
   * @param name Name of the design
   */
  public setName(name: string) {
    this.name = name;
  }

  public getDefault() {
    return this.default;
  }

  /**
   *
   * @param value Set to 1 if design should be default design. Set to 0 otherwise
   */
  public setDefault(value: number) {
    this.default = value;
  }

  public getFontFamily() {
    return this.fontFamily;
  }

  /**
   *
   * @param fontFamily Arial, Courier New, Georgia, Open Sans, Times New Roman or Verdana
   */
  public setFontFamily(
    fontFamily:
      | 'Arial'
      | 'Courier New'
      | 'Georgia'
      | 'Open Sans'
      | 'Times New Roman'
      | 'Verdana',
  ) {
    this.fontFamily = fontFamily;
  }

  public getFontSize() {
    return this.fontSize;
  }

  /**
   *
   * @param fontSize In pixel
   */
  public setFontSize(fontSize: number) {
    this.fontSize = fontSize;
  }

  public getTextColor() {
    return this.textColor;
  }

  /**
   *
   * @param textColor Hex code without #
   */
  public setTextColor(textColor: string) {
    this.textColor = textColor;
  }

  public getTextColorVPOS() {
    return this.textColorVPOS;
  }

  /**
   *
   * @param textColorVPOS Hex code without #
   */
  public setTextColorVPOS(textColorVPOS: string) {
    this.textColorVPOS = textColorVPOS;
  }

  public getLinkColor() {
    return this.linkColor;
  }

  /**
   *
   * @param linkColor Hex code without #
   */
  public setLinkColor(linkColor: string) {
    this.linkColor = linkColor;
  }

  public getLinkHoverColor() {
    return this.linkHoverColor;
  }

  /**
   *
   * @param linkHoverColor Hex code without #
   */
  public setLinkHoverColor(linkHoverColor: string) {
    this.linkHoverColor = linkHoverColor;
  }

  public getButtonColor() {
    return this.buttonColor;
  }

  /**
   *
   * @param buttonColor Hex code without #
   */
  public setButtonColor(buttonColor: string) {
    this.buttonColor = buttonColor;
  }

  public getButtonHoverColor() {
    return this.buttonHoverColor;
  }

  /**
   *
   * @param buttonHoverColor Hex code without #
   */
  public setButtonHoverColor(buttonHoverColor: string) {
    this.buttonHoverColor = buttonHoverColor;
  }

  public getBackground() {
    return this.background;
  }

  /**
   *
   * @param background color or image
   */
  public setBackground(background: string) {
    this.background = background;
  }

  public getBackgroundColor() {
    return this.backgroundColor;
  }

  /**
   *
   * @param backgroundColor Hex code without #
   */
  public setBackgroundColor(backgroundColor: string) {
    this.backgroundColor = backgroundColor;
  }

  public getHeaderBackground() {
    return this.headerBackground;
  }

  /**
   *
   * @param headerBackground color or image
   */
  public setHeaderBackground(headerBackground: string) {
    this.headerBackground = headerBackground;
  }

  public getHeaderBackgroundColor() {
    return this.headerBackgroundColor;
  }

  /**
   *
   * @param headerBackgroundColor Hex code without #
   */
  public setHeaderBackgroundColor(headerBackgroundColor: string) {
    this.headerBackgroundColor = headerBackgroundColor;
  }

  public getEmailHeaderBackgroundColor() {
    return this.emailHeaderBackgroundColor;
  }

  /**
   *
   * @param emailHeaderBackgroundColor Hex code without #
   */
  public setEmailHeaderBackgroundColor(emailHeaderBackgroundColor: string) {
    this.emailHeaderBackgroundColor = emailHeaderBackgroundColor;
  }

  public getHeaderImageShape() {
    return this.headerImageShape;
  }

  /**
   *
   * @param headerImageShape square, rectangular or round
   */
  public setHeaderImageShape(headerImageShape: string) {
    this.headerImageShape = headerImageShape;
  }

  public getUseIndividualEmailLogo() {
    return this.useIndividualEmailLogo;
  }

  /**
   *
   * @param useIndividualEmailLogo 0 or 1
   */
  public setUseIndividualEmailLogo(useIndividualEmailLogo: number) {
    this.useIndividualEmailLogo = useIndividualEmailLogo;
  }

  public getLogoBackgroundColor() {
    return this.logoBackgroundColor;
  }

  /**
   *
   * @param logoBackgroundColor Hex code without #
   */
  public setLogoBackgroundColor(logoBackgroundColor: string) {
    this.logoBackgroundColor = logoBackgroundColor;
  }

  public getLogoBorderColor() {
    return this.logoBorderColor;
  }

  /**
   *
   * @param logoBorderColor Hex code without #
   */
  public setLogoBorderColor(logoBorderColor: string) {
    this.logoBorderColor = logoBorderColor;
  }

  public getVPOSGradientColor1() {
    return this.VPOSGradientColor1;
  }

  /**
   *
   * @param VPOSGradientColor1 Hex code without #
   */
  public setVPOSGradientColor1(VPOSGradientColor1: string) {
    this.VPOSGradientColor1 = VPOSGradientColor1;
  }

  public getVPOSGradientColor2() {
    return this.VPOSGradientColor2;
  }

  /**
   *
   * @param VPOSGradientColor2 Hex code without #
   */
  public setVPOSGradientColor2(VPOSGradientColor2: string) {
    this.VPOSGradientColor2 = VPOSGradientColor2;
  }

  public getEnableRoundedCorners() {
    return this.enableRoundedCorners;
  }

  /**
   *
   * @param enableRoundedCorners 0 or 1
   */
  public setEnableRoundedCorners(enableRoundedCorners: number) {
    this.enableRoundedCorners = enableRoundedCorners;
  }

  public getVPOSBackground() {
    return this.VPOSBackground;
  }

  /**
   *
   * @param VPOSBackground color or image
   */
  public setVPOSBackground(VPOSBackground: string) {
    this.VPOSBackground = VPOSBackground;
  }

  public getHeaderImageCustomLink() {
    return this.headerImageCustomLink;
  }

  /**
   *
   * @param headerImageCustomLink Link of the header image. Use language ID as array key. Array key 0 or datatype 'string' will be handled as the default value
   * (Will be used for each activated frontend language)
   */
  public setHeaderImageCustomLink(headerImageCustomLink: any) {
    this.headerImageCustomLink = headerImageCustomLink;
  }
}

export { DesignRequest };
export type { DesignResponse };
