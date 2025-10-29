// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationPortalNotifyChangePasswordAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify change button text in default change password notification page (Default: Change)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#change_text AamAuthenticationPortalNotifyChangePasswordA#change_text}
  */
  readonly changeText?: string;
  /**
  * Specify change password action URL in default change password notification page (Default: /notify_change.fo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#change_url AamAuthenticationPortalNotifyChangePasswordA#change_url}
  */
  readonly changeUrl?: string;
  /**
  * Specify confirm password variable name in default change password notification page (Default: cp_cfm_pwd)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#confirm_password_var AamAuthenticationPortalNotifyChangePasswordA#confirm_password_var}
  */
  readonly confirmPasswordVar?: string;
  /**
  * Specify continue button text in default change password notification page (Default: Continue)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#continue_text AamAuthenticationPortalNotifyChangePasswordA#continue_text}
  */
  readonly continueText?: string;
  /**
  * Specify continue action URL in default change password notification page (Default: /continue.fo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#continue_url AamAuthenticationPortalNotifyChangePasswordA#continue_url}
  */
  readonly continueUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#id AamAuthenticationPortalNotifyChangePasswordA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#name AamAuthenticationPortalNotifyChangePasswordA#name}
  */
  readonly name: string;
  /**
  * Specify new password variable name in default change password notification page (Default: cp_new_pwd)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#new_password_var AamAuthenticationPortalNotifyChangePasswordA#new_password_var}
  */
  readonly newPasswordVar?: string;
  /**
  * Specify old password variable name in default change password notification page (Default: cp_old_pwd)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#old_password_var AamAuthenticationPortalNotifyChangePasswordA#old_password_var}
  */
  readonly oldPasswordVar?: string;
  /**
  * Specify username variable name in default change password notification page (Default: cp_usr)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#username_var AamAuthenticationPortalNotifyChangePasswordA#username_var}
  */
  readonly usernameVar?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#uuid AamAuthenticationPortalNotifyChangePasswordA#uuid}
  */
  readonly uuid?: string;
  /**
  * background block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#background AamAuthenticationPortalNotifyChangePasswordA#background}
  */
  readonly background?: AamAuthenticationPortalNotifyChangePasswordBackgroundA;
  /**
  * cfm_pwd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#cfm_pwd_cfg AamAuthenticationPortalNotifyChangePasswordA#cfm_pwd_cfg}
  */
  readonly cfmPwdCfg?: AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgA;
  /**
  * new_pwd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#new_pwd_cfg AamAuthenticationPortalNotifyChangePasswordA#new_pwd_cfg}
  */
  readonly newPwdCfg?: AamAuthenticationPortalNotifyChangePasswordNewPwdCfgA;
  /**
  * old_pwd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#old_pwd_cfg AamAuthenticationPortalNotifyChangePasswordA#old_pwd_cfg}
  */
  readonly oldPwdCfg?: AamAuthenticationPortalNotifyChangePasswordOldPwdCfgA;
  /**
  * username_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#username_cfg AamAuthenticationPortalNotifyChangePasswordA#username_cfg}
  */
  readonly usernameCfg?: AamAuthenticationPortalNotifyChangePasswordUsernameCfgA;
}
export interface AamAuthenticationPortalNotifyChangePasswordBackgroundA {
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#bgcolor_name AamAuthenticationPortalNotifyChangePasswordA#bgcolor_name}
  */
  readonly bgcolorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#bgcolor_value AamAuthenticationPortalNotifyChangePasswordA#bgcolor_value}
  */
  readonly bgcolorValue?: string;
  /**
  * Specify background image filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#bgfile AamAuthenticationPortalNotifyChangePasswordA#bgfile}
  */
  readonly bgfile?: string;
  /**
  * 'tile': Tile; 'stretch': Stretch; 'fit': Fit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#bgstyle AamAuthenticationPortalNotifyChangePasswordA#bgstyle}
  */
  readonly bgstyle?: string;
}

export function aamAuthenticationPortalNotifyChangePasswordBackgroundAToTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordBackgroundAOutputReference | AamAuthenticationPortalNotifyChangePasswordBackgroundA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgcolor_name: cdktf.stringToTerraform(struct!.bgcolorName),
    bgcolor_value: cdktf.stringToTerraform(struct!.bgcolorValue),
    bgfile: cdktf.stringToTerraform(struct!.bgfile),
    bgstyle: cdktf.stringToTerraform(struct!.bgstyle),
  }
}


export function aamAuthenticationPortalNotifyChangePasswordBackgroundAToHclTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordBackgroundAOutputReference | AamAuthenticationPortalNotifyChangePasswordBackgroundA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgcolor_name: {
      value: cdktf.stringToHclTerraform(struct!.bgcolorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgcolor_value: {
      value: cdktf.stringToHclTerraform(struct!.bgcolorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgfile: {
      value: cdktf.stringToHclTerraform(struct!.bgfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgstyle: {
      value: cdktf.stringToHclTerraform(struct!.bgstyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalNotifyChangePasswordBackgroundAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalNotifyChangePasswordBackgroundA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgcolorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgcolorName = this._bgcolorName;
    }
    if (this._bgcolorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgcolorValue = this._bgcolorValue;
    }
    if (this._bgfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgfile = this._bgfile;
    }
    if (this._bgstyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgstyle = this._bgstyle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalNotifyChangePasswordBackgroundA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgcolorName = undefined;
      this._bgcolorValue = undefined;
      this._bgfile = undefined;
      this._bgstyle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgcolorName = value.bgcolorName;
      this._bgcolorValue = value.bgcolorValue;
      this._bgfile = value.bgfile;
      this._bgstyle = value.bgstyle;
    }
  }

  // bgcolor_name - computed: false, optional: true, required: false
  private _bgcolorName?: string; 
  public get bgcolorName() {
    return this.getStringAttribute('bgcolor_name');
  }
  public set bgcolorName(value: string) {
    this._bgcolorName = value;
  }
  public resetBgcolorName() {
    this._bgcolorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgcolorNameInput() {
    return this._bgcolorName;
  }

  // bgcolor_value - computed: false, optional: true, required: false
  private _bgcolorValue?: string; 
  public get bgcolorValue() {
    return this.getStringAttribute('bgcolor_value');
  }
  public set bgcolorValue(value: string) {
    this._bgcolorValue = value;
  }
  public resetBgcolorValue() {
    this._bgcolorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgcolorValueInput() {
    return this._bgcolorValue;
  }

  // bgfile - computed: false, optional: true, required: false
  private _bgfile?: string; 
  public get bgfile() {
    return this.getStringAttribute('bgfile');
  }
  public set bgfile(value: string) {
    this._bgfile = value;
  }
  public resetBgfile() {
    this._bgfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgfileInput() {
    return this._bgfile;
  }

  // bgstyle - computed: false, optional: true, required: false
  private _bgstyle?: string; 
  public get bgstyle() {
    return this.getStringAttribute('bgstyle');
  }
  public set bgstyle(value: string) {
    this._bgstyle = value;
  }
  public resetBgstyle() {
    this._bgstyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgstyleInput() {
    return this._bgstyle;
  }
}
export interface AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgA {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#cfm_color AamAuthenticationPortalNotifyChangePasswordA#cfm_color}
  */
  readonly cfmColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#cfm_color_name AamAuthenticationPortalNotifyChangePasswordA#cfm_color_name}
  */
  readonly cfmColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#cfm_color_value AamAuthenticationPortalNotifyChangePasswordA#cfm_color_value}
  */
  readonly cfmColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#cfm_face AamAuthenticationPortalNotifyChangePasswordA#cfm_face}
  */
  readonly cfmFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#cfm_font AamAuthenticationPortalNotifyChangePasswordA#cfm_font}
  */
  readonly cfmFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#cfm_font_custom AamAuthenticationPortalNotifyChangePasswordA#cfm_font_custom}
  */
  readonly cfmFontCustom?: string;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#cfm_size AamAuthenticationPortalNotifyChangePasswordA#cfm_size}
  */
  readonly cfmSize?: number;
  /**
  * Specify confirm password text (Default: Confirm New Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#cfm_text AamAuthenticationPortalNotifyChangePasswordA#cfm_text}
  */
  readonly cfmText?: string;
  /**
  * Configure confirm password text in default change password notification page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#confirm_password AamAuthenticationPortalNotifyChangePasswordA#confirm_password}
  */
  readonly confirmPassword?: number;
}

export function aamAuthenticationPortalNotifyChangePasswordCfmPwdCfgAToTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgAOutputReference | AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cfm_color: cdktf.numberToTerraform(struct!.cfmColor),
    cfm_color_name: cdktf.stringToTerraform(struct!.cfmColorName),
    cfm_color_value: cdktf.stringToTerraform(struct!.cfmColorValue),
    cfm_face: cdktf.stringToTerraform(struct!.cfmFace),
    cfm_font: cdktf.numberToTerraform(struct!.cfmFont),
    cfm_font_custom: cdktf.stringToTerraform(struct!.cfmFontCustom),
    cfm_size: cdktf.numberToTerraform(struct!.cfmSize),
    cfm_text: cdktf.stringToTerraform(struct!.cfmText),
    confirm_password: cdktf.numberToTerraform(struct!.confirmPassword),
  }
}


export function aamAuthenticationPortalNotifyChangePasswordCfmPwdCfgAToHclTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgAOutputReference | AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cfm_color: {
      value: cdktf.numberToHclTerraform(struct!.cfmColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cfm_color_name: {
      value: cdktf.stringToHclTerraform(struct!.cfmColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfm_color_value: {
      value: cdktf.stringToHclTerraform(struct!.cfmColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfm_face: {
      value: cdktf.stringToHclTerraform(struct!.cfmFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfm_font: {
      value: cdktf.numberToHclTerraform(struct!.cfmFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cfm_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.cfmFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfm_size: {
      value: cdktf.numberToHclTerraform(struct!.cfmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cfm_text: {
      value: cdktf.stringToHclTerraform(struct!.cfmText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirm_password: {
      value: cdktf.numberToHclTerraform(struct!.confirmPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfmColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmColor = this._cfmColor;
    }
    if (this._cfmColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmColorName = this._cfmColorName;
    }
    if (this._cfmColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmColorValue = this._cfmColorValue;
    }
    if (this._cfmFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmFace = this._cfmFace;
    }
    if (this._cfmFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmFont = this._cfmFont;
    }
    if (this._cfmFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmFontCustom = this._cfmFontCustom;
    }
    if (this._cfmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmSize = this._cfmSize;
    }
    if (this._cfmText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmText = this._cfmText;
    }
    if (this._confirmPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmPassword = this._confirmPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cfmColor = undefined;
      this._cfmColorName = undefined;
      this._cfmColorValue = undefined;
      this._cfmFace = undefined;
      this._cfmFont = undefined;
      this._cfmFontCustom = undefined;
      this._cfmSize = undefined;
      this._cfmText = undefined;
      this._confirmPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cfmColor = value.cfmColor;
      this._cfmColorName = value.cfmColorName;
      this._cfmColorValue = value.cfmColorValue;
      this._cfmFace = value.cfmFace;
      this._cfmFont = value.cfmFont;
      this._cfmFontCustom = value.cfmFontCustom;
      this._cfmSize = value.cfmSize;
      this._cfmText = value.cfmText;
      this._confirmPassword = value.confirmPassword;
    }
  }

  // cfm_color - computed: false, optional: true, required: false
  private _cfmColor?: number; 
  public get cfmColor() {
    return this.getNumberAttribute('cfm_color');
  }
  public set cfmColor(value: number) {
    this._cfmColor = value;
  }
  public resetCfmColor() {
    this._cfmColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmColorInput() {
    return this._cfmColor;
  }

  // cfm_color_name - computed: false, optional: true, required: false
  private _cfmColorName?: string; 
  public get cfmColorName() {
    return this.getStringAttribute('cfm_color_name');
  }
  public set cfmColorName(value: string) {
    this._cfmColorName = value;
  }
  public resetCfmColorName() {
    this._cfmColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmColorNameInput() {
    return this._cfmColorName;
  }

  // cfm_color_value - computed: false, optional: true, required: false
  private _cfmColorValue?: string; 
  public get cfmColorValue() {
    return this.getStringAttribute('cfm_color_value');
  }
  public set cfmColorValue(value: string) {
    this._cfmColorValue = value;
  }
  public resetCfmColorValue() {
    this._cfmColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmColorValueInput() {
    return this._cfmColorValue;
  }

  // cfm_face - computed: false, optional: true, required: false
  private _cfmFace?: string; 
  public get cfmFace() {
    return this.getStringAttribute('cfm_face');
  }
  public set cfmFace(value: string) {
    this._cfmFace = value;
  }
  public resetCfmFace() {
    this._cfmFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmFaceInput() {
    return this._cfmFace;
  }

  // cfm_font - computed: false, optional: true, required: false
  private _cfmFont?: number; 
  public get cfmFont() {
    return this.getNumberAttribute('cfm_font');
  }
  public set cfmFont(value: number) {
    this._cfmFont = value;
  }
  public resetCfmFont() {
    this._cfmFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmFontInput() {
    return this._cfmFont;
  }

  // cfm_font_custom - computed: false, optional: true, required: false
  private _cfmFontCustom?: string; 
  public get cfmFontCustom() {
    return this.getStringAttribute('cfm_font_custom');
  }
  public set cfmFontCustom(value: string) {
    this._cfmFontCustom = value;
  }
  public resetCfmFontCustom() {
    this._cfmFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmFontCustomInput() {
    return this._cfmFontCustom;
  }

  // cfm_size - computed: false, optional: true, required: false
  private _cfmSize?: number; 
  public get cfmSize() {
    return this.getNumberAttribute('cfm_size');
  }
  public set cfmSize(value: number) {
    this._cfmSize = value;
  }
  public resetCfmSize() {
    this._cfmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmSizeInput() {
    return this._cfmSize;
  }

  // cfm_text - computed: false, optional: true, required: false
  private _cfmText?: string; 
  public get cfmText() {
    return this.getStringAttribute('cfm_text');
  }
  public set cfmText(value: string) {
    this._cfmText = value;
  }
  public resetCfmText() {
    this._cfmText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmTextInput() {
    return this._cfmText;
  }

  // confirm_password - computed: false, optional: true, required: false
  private _confirmPassword?: number; 
  public get confirmPassword() {
    return this.getNumberAttribute('confirm_password');
  }
  public set confirmPassword(value: number) {
    this._confirmPassword = value;
  }
  public resetConfirmPassword() {
    this._confirmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmPasswordInput() {
    return this._confirmPassword;
  }
}
export interface AamAuthenticationPortalNotifyChangePasswordNewPwdCfgA {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#new_color AamAuthenticationPortalNotifyChangePasswordA#new_color}
  */
  readonly newColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#new_color_name AamAuthenticationPortalNotifyChangePasswordA#new_color_name}
  */
  readonly newColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#new_color_value AamAuthenticationPortalNotifyChangePasswordA#new_color_value}
  */
  readonly newColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#new_face AamAuthenticationPortalNotifyChangePasswordA#new_face}
  */
  readonly newFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#new_font AamAuthenticationPortalNotifyChangePasswordA#new_font}
  */
  readonly newFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#new_font_custom AamAuthenticationPortalNotifyChangePasswordA#new_font_custom}
  */
  readonly newFontCustom?: string;
  /**
  * Configure new password text in default change password notification page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#new_password AamAuthenticationPortalNotifyChangePasswordA#new_password}
  */
  readonly newPassword?: number;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#new_size AamAuthenticationPortalNotifyChangePasswordA#new_size}
  */
  readonly newSize?: number;
  /**
  * Specify new password text (Default: New Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#new_text AamAuthenticationPortalNotifyChangePasswordA#new_text}
  */
  readonly newText?: string;
}

export function aamAuthenticationPortalNotifyChangePasswordNewPwdCfgAToTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordNewPwdCfgAOutputReference | AamAuthenticationPortalNotifyChangePasswordNewPwdCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_color: cdktf.numberToTerraform(struct!.newColor),
    new_color_name: cdktf.stringToTerraform(struct!.newColorName),
    new_color_value: cdktf.stringToTerraform(struct!.newColorValue),
    new_face: cdktf.stringToTerraform(struct!.newFace),
    new_font: cdktf.numberToTerraform(struct!.newFont),
    new_font_custom: cdktf.stringToTerraform(struct!.newFontCustom),
    new_password: cdktf.numberToTerraform(struct!.newPassword),
    new_size: cdktf.numberToTerraform(struct!.newSize),
    new_text: cdktf.stringToTerraform(struct!.newText),
  }
}


export function aamAuthenticationPortalNotifyChangePasswordNewPwdCfgAToHclTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordNewPwdCfgAOutputReference | AamAuthenticationPortalNotifyChangePasswordNewPwdCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_color: {
      value: cdktf.numberToHclTerraform(struct!.newColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_color_name: {
      value: cdktf.stringToHclTerraform(struct!.newColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_color_value: {
      value: cdktf.stringToHclTerraform(struct!.newColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_face: {
      value: cdktf.stringToHclTerraform(struct!.newFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_font: {
      value: cdktf.numberToHclTerraform(struct!.newFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.newFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_password: {
      value: cdktf.numberToHclTerraform(struct!.newPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_size: {
      value: cdktf.numberToHclTerraform(struct!.newSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_text: {
      value: cdktf.stringToHclTerraform(struct!.newText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalNotifyChangePasswordNewPwdCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalNotifyChangePasswordNewPwdCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColor = this._newColor;
    }
    if (this._newColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColorName = this._newColorName;
    }
    if (this._newColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColorValue = this._newColorValue;
    }
    if (this._newFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFace = this._newFace;
    }
    if (this._newFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFont = this._newFont;
    }
    if (this._newFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFontCustom = this._newFontCustom;
    }
    if (this._newPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPassword = this._newPassword;
    }
    if (this._newSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSize = this._newSize;
    }
    if (this._newText !== undefined) {
      hasAnyValues = true;
      internalValueResult.newText = this._newText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalNotifyChangePasswordNewPwdCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newColor = undefined;
      this._newColorName = undefined;
      this._newColorValue = undefined;
      this._newFace = undefined;
      this._newFont = undefined;
      this._newFontCustom = undefined;
      this._newPassword = undefined;
      this._newSize = undefined;
      this._newText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newColor = value.newColor;
      this._newColorName = value.newColorName;
      this._newColorValue = value.newColorValue;
      this._newFace = value.newFace;
      this._newFont = value.newFont;
      this._newFontCustom = value.newFontCustom;
      this._newPassword = value.newPassword;
      this._newSize = value.newSize;
      this._newText = value.newText;
    }
  }

  // new_color - computed: false, optional: true, required: false
  private _newColor?: number; 
  public get newColor() {
    return this.getNumberAttribute('new_color');
  }
  public set newColor(value: number) {
    this._newColor = value;
  }
  public resetNewColor() {
    this._newColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newColorInput() {
    return this._newColor;
  }

  // new_color_name - computed: false, optional: true, required: false
  private _newColorName?: string; 
  public get newColorName() {
    return this.getStringAttribute('new_color_name');
  }
  public set newColorName(value: string) {
    this._newColorName = value;
  }
  public resetNewColorName() {
    this._newColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newColorNameInput() {
    return this._newColorName;
  }

  // new_color_value - computed: false, optional: true, required: false
  private _newColorValue?: string; 
  public get newColorValue() {
    return this.getStringAttribute('new_color_value');
  }
  public set newColorValue(value: string) {
    this._newColorValue = value;
  }
  public resetNewColorValue() {
    this._newColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newColorValueInput() {
    return this._newColorValue;
  }

  // new_face - computed: false, optional: true, required: false
  private _newFace?: string; 
  public get newFace() {
    return this.getStringAttribute('new_face');
  }
  public set newFace(value: string) {
    this._newFace = value;
  }
  public resetNewFace() {
    this._newFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFaceInput() {
    return this._newFace;
  }

  // new_font - computed: false, optional: true, required: false
  private _newFont?: number; 
  public get newFont() {
    return this.getNumberAttribute('new_font');
  }
  public set newFont(value: number) {
    this._newFont = value;
  }
  public resetNewFont() {
    this._newFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFontInput() {
    return this._newFont;
  }

  // new_font_custom - computed: false, optional: true, required: false
  private _newFontCustom?: string; 
  public get newFontCustom() {
    return this.getStringAttribute('new_font_custom');
  }
  public set newFontCustom(value: string) {
    this._newFontCustom = value;
  }
  public resetNewFontCustom() {
    this._newFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFontCustomInput() {
    return this._newFontCustom;
  }

  // new_password - computed: false, optional: true, required: false
  private _newPassword?: number; 
  public get newPassword() {
    return this.getNumberAttribute('new_password');
  }
  public set newPassword(value: number) {
    this._newPassword = value;
  }
  public resetNewPassword() {
    this._newPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordInput() {
    return this._newPassword;
  }

  // new_size - computed: false, optional: true, required: false
  private _newSize?: number; 
  public get newSize() {
    return this.getNumberAttribute('new_size');
  }
  public set newSize(value: number) {
    this._newSize = value;
  }
  public resetNewSize() {
    this._newSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSizeInput() {
    return this._newSize;
  }

  // new_text - computed: false, optional: true, required: false
  private _newText?: string; 
  public get newText() {
    return this.getStringAttribute('new_text');
  }
  public set newText(value: string) {
    this._newText = value;
  }
  public resetNewText() {
    this._newText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTextInput() {
    return this._newText;
  }
}
export interface AamAuthenticationPortalNotifyChangePasswordOldPwdCfgA {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#old_color AamAuthenticationPortalNotifyChangePasswordA#old_color}
  */
  readonly oldColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#old_color_name AamAuthenticationPortalNotifyChangePasswordA#old_color_name}
  */
  readonly oldColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#old_color_value AamAuthenticationPortalNotifyChangePasswordA#old_color_value}
  */
  readonly oldColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#old_face AamAuthenticationPortalNotifyChangePasswordA#old_face}
  */
  readonly oldFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#old_font AamAuthenticationPortalNotifyChangePasswordA#old_font}
  */
  readonly oldFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#old_font_custom AamAuthenticationPortalNotifyChangePasswordA#old_font_custom}
  */
  readonly oldFontCustom?: string;
  /**
  * Configure old password text in default change password notification page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#old_password AamAuthenticationPortalNotifyChangePasswordA#old_password}
  */
  readonly oldPassword?: number;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#old_size AamAuthenticationPortalNotifyChangePasswordA#old_size}
  */
  readonly oldSize?: number;
  /**
  * Specify old password text (Default: Old Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#old_text AamAuthenticationPortalNotifyChangePasswordA#old_text}
  */
  readonly oldText?: string;
}

export function aamAuthenticationPortalNotifyChangePasswordOldPwdCfgAToTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordOldPwdCfgAOutputReference | AamAuthenticationPortalNotifyChangePasswordOldPwdCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    old_color: cdktf.numberToTerraform(struct!.oldColor),
    old_color_name: cdktf.stringToTerraform(struct!.oldColorName),
    old_color_value: cdktf.stringToTerraform(struct!.oldColorValue),
    old_face: cdktf.stringToTerraform(struct!.oldFace),
    old_font: cdktf.numberToTerraform(struct!.oldFont),
    old_font_custom: cdktf.stringToTerraform(struct!.oldFontCustom),
    old_password: cdktf.numberToTerraform(struct!.oldPassword),
    old_size: cdktf.numberToTerraform(struct!.oldSize),
    old_text: cdktf.stringToTerraform(struct!.oldText),
  }
}


export function aamAuthenticationPortalNotifyChangePasswordOldPwdCfgAToHclTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordOldPwdCfgAOutputReference | AamAuthenticationPortalNotifyChangePasswordOldPwdCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    old_color: {
      value: cdktf.numberToHclTerraform(struct!.oldColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_color_name: {
      value: cdktf.stringToHclTerraform(struct!.oldColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_color_value: {
      value: cdktf.stringToHclTerraform(struct!.oldColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_face: {
      value: cdktf.stringToHclTerraform(struct!.oldFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_font: {
      value: cdktf.numberToHclTerraform(struct!.oldFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.oldFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_password: {
      value: cdktf.numberToHclTerraform(struct!.oldPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_size: {
      value: cdktf.numberToHclTerraform(struct!.oldSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_text: {
      value: cdktf.stringToHclTerraform(struct!.oldText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalNotifyChangePasswordOldPwdCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalNotifyChangePasswordOldPwdCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oldColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldColor = this._oldColor;
    }
    if (this._oldColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldColorName = this._oldColorName;
    }
    if (this._oldColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldColorValue = this._oldColorValue;
    }
    if (this._oldFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldFace = this._oldFace;
    }
    if (this._oldFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldFont = this._oldFont;
    }
    if (this._oldFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldFontCustom = this._oldFontCustom;
    }
    if (this._oldPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldPassword = this._oldPassword;
    }
    if (this._oldSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldSize = this._oldSize;
    }
    if (this._oldText !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldText = this._oldText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalNotifyChangePasswordOldPwdCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oldColor = undefined;
      this._oldColorName = undefined;
      this._oldColorValue = undefined;
      this._oldFace = undefined;
      this._oldFont = undefined;
      this._oldFontCustom = undefined;
      this._oldPassword = undefined;
      this._oldSize = undefined;
      this._oldText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oldColor = value.oldColor;
      this._oldColorName = value.oldColorName;
      this._oldColorValue = value.oldColorValue;
      this._oldFace = value.oldFace;
      this._oldFont = value.oldFont;
      this._oldFontCustom = value.oldFontCustom;
      this._oldPassword = value.oldPassword;
      this._oldSize = value.oldSize;
      this._oldText = value.oldText;
    }
  }

  // old_color - computed: false, optional: true, required: false
  private _oldColor?: number; 
  public get oldColor() {
    return this.getNumberAttribute('old_color');
  }
  public set oldColor(value: number) {
    this._oldColor = value;
  }
  public resetOldColor() {
    this._oldColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldColorInput() {
    return this._oldColor;
  }

  // old_color_name - computed: false, optional: true, required: false
  private _oldColorName?: string; 
  public get oldColorName() {
    return this.getStringAttribute('old_color_name');
  }
  public set oldColorName(value: string) {
    this._oldColorName = value;
  }
  public resetOldColorName() {
    this._oldColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldColorNameInput() {
    return this._oldColorName;
  }

  // old_color_value - computed: false, optional: true, required: false
  private _oldColorValue?: string; 
  public get oldColorValue() {
    return this.getStringAttribute('old_color_value');
  }
  public set oldColorValue(value: string) {
    this._oldColorValue = value;
  }
  public resetOldColorValue() {
    this._oldColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldColorValueInput() {
    return this._oldColorValue;
  }

  // old_face - computed: false, optional: true, required: false
  private _oldFace?: string; 
  public get oldFace() {
    return this.getStringAttribute('old_face');
  }
  public set oldFace(value: string) {
    this._oldFace = value;
  }
  public resetOldFace() {
    this._oldFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldFaceInput() {
    return this._oldFace;
  }

  // old_font - computed: false, optional: true, required: false
  private _oldFont?: number; 
  public get oldFont() {
    return this.getNumberAttribute('old_font');
  }
  public set oldFont(value: number) {
    this._oldFont = value;
  }
  public resetOldFont() {
    this._oldFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldFontInput() {
    return this._oldFont;
  }

  // old_font_custom - computed: false, optional: true, required: false
  private _oldFontCustom?: string; 
  public get oldFontCustom() {
    return this.getStringAttribute('old_font_custom');
  }
  public set oldFontCustom(value: string) {
    this._oldFontCustom = value;
  }
  public resetOldFontCustom() {
    this._oldFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldFontCustomInput() {
    return this._oldFontCustom;
  }

  // old_password - computed: false, optional: true, required: false
  private _oldPassword?: number; 
  public get oldPassword() {
    return this.getNumberAttribute('old_password');
  }
  public set oldPassword(value: number) {
    this._oldPassword = value;
  }
  public resetOldPassword() {
    this._oldPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordInput() {
    return this._oldPassword;
  }

  // old_size - computed: false, optional: true, required: false
  private _oldSize?: number; 
  public get oldSize() {
    return this.getNumberAttribute('old_size');
  }
  public set oldSize(value: number) {
    this._oldSize = value;
  }
  public resetOldSize() {
    this._oldSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldSizeInput() {
    return this._oldSize;
  }

  // old_text - computed: false, optional: true, required: false
  private _oldText?: string; 
  public get oldText() {
    return this.getStringAttribute('old_text');
  }
  public set oldText(value: string) {
    this._oldText = value;
  }
  public resetOldText() {
    this._oldText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldTextInput() {
    return this._oldText;
  }
}
export interface AamAuthenticationPortalNotifyChangePasswordUsernameCfgA {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#user_color AamAuthenticationPortalNotifyChangePasswordA#user_color}
  */
  readonly userColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#user_color_name AamAuthenticationPortalNotifyChangePasswordA#user_color_name}
  */
  readonly userColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#user_color_value AamAuthenticationPortalNotifyChangePasswordA#user_color_value}
  */
  readonly userColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#user_face AamAuthenticationPortalNotifyChangePasswordA#user_face}
  */
  readonly userFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#user_font AamAuthenticationPortalNotifyChangePasswordA#user_font}
  */
  readonly userFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#user_font_custom AamAuthenticationPortalNotifyChangePasswordA#user_font_custom}
  */
  readonly userFontCustom?: string;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#user_size AamAuthenticationPortalNotifyChangePasswordA#user_size}
  */
  readonly userSize?: number;
  /**
  * Specify username text (Default: Username)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#user_text AamAuthenticationPortalNotifyChangePasswordA#user_text}
  */
  readonly userText?: string;
  /**
  * Configure username text in default change password notification page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#username AamAuthenticationPortalNotifyChangePasswordA#username}
  */
  readonly username?: number;
}

export function aamAuthenticationPortalNotifyChangePasswordUsernameCfgAToTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordUsernameCfgAOutputReference | AamAuthenticationPortalNotifyChangePasswordUsernameCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_color: cdktf.numberToTerraform(struct!.userColor),
    user_color_name: cdktf.stringToTerraform(struct!.userColorName),
    user_color_value: cdktf.stringToTerraform(struct!.userColorValue),
    user_face: cdktf.stringToTerraform(struct!.userFace),
    user_font: cdktf.numberToTerraform(struct!.userFont),
    user_font_custom: cdktf.stringToTerraform(struct!.userFontCustom),
    user_size: cdktf.numberToTerraform(struct!.userSize),
    user_text: cdktf.stringToTerraform(struct!.userText),
    username: cdktf.numberToTerraform(struct!.username),
  }
}


export function aamAuthenticationPortalNotifyChangePasswordUsernameCfgAToHclTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordUsernameCfgAOutputReference | AamAuthenticationPortalNotifyChangePasswordUsernameCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_color: {
      value: cdktf.numberToHclTerraform(struct!.userColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_color_name: {
      value: cdktf.stringToHclTerraform(struct!.userColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_color_value: {
      value: cdktf.stringToHclTerraform(struct!.userColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_face: {
      value: cdktf.stringToHclTerraform(struct!.userFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_font: {
      value: cdktf.numberToHclTerraform(struct!.userFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.userFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_size: {
      value: cdktf.numberToHclTerraform(struct!.userSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_text: {
      value: cdktf.stringToHclTerraform(struct!.userText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.numberToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalNotifyChangePasswordUsernameCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalNotifyChangePasswordUsernameCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.userColor = this._userColor;
    }
    if (this._userColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userColorName = this._userColorName;
    }
    if (this._userColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userColorValue = this._userColorValue;
    }
    if (this._userFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFace = this._userFace;
    }
    if (this._userFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFont = this._userFont;
    }
    if (this._userFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFontCustom = this._userFontCustom;
    }
    if (this._userSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSize = this._userSize;
    }
    if (this._userText !== undefined) {
      hasAnyValues = true;
      internalValueResult.userText = this._userText;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalNotifyChangePasswordUsernameCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userColor = undefined;
      this._userColorName = undefined;
      this._userColorValue = undefined;
      this._userFace = undefined;
      this._userFont = undefined;
      this._userFontCustom = undefined;
      this._userSize = undefined;
      this._userText = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userColor = value.userColor;
      this._userColorName = value.userColorName;
      this._userColorValue = value.userColorValue;
      this._userFace = value.userFace;
      this._userFont = value.userFont;
      this._userFontCustom = value.userFontCustom;
      this._userSize = value.userSize;
      this._userText = value.userText;
      this._username = value.username;
    }
  }

  // user_color - computed: false, optional: true, required: false
  private _userColor?: number; 
  public get userColor() {
    return this.getNumberAttribute('user_color');
  }
  public set userColor(value: number) {
    this._userColor = value;
  }
  public resetUserColor() {
    this._userColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userColorInput() {
    return this._userColor;
  }

  // user_color_name - computed: false, optional: true, required: false
  private _userColorName?: string; 
  public get userColorName() {
    return this.getStringAttribute('user_color_name');
  }
  public set userColorName(value: string) {
    this._userColorName = value;
  }
  public resetUserColorName() {
    this._userColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userColorNameInput() {
    return this._userColorName;
  }

  // user_color_value - computed: false, optional: true, required: false
  private _userColorValue?: string; 
  public get userColorValue() {
    return this.getStringAttribute('user_color_value');
  }
  public set userColorValue(value: string) {
    this._userColorValue = value;
  }
  public resetUserColorValue() {
    this._userColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userColorValueInput() {
    return this._userColorValue;
  }

  // user_face - computed: false, optional: true, required: false
  private _userFace?: string; 
  public get userFace() {
    return this.getStringAttribute('user_face');
  }
  public set userFace(value: string) {
    this._userFace = value;
  }
  public resetUserFace() {
    this._userFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFaceInput() {
    return this._userFace;
  }

  // user_font - computed: false, optional: true, required: false
  private _userFont?: number; 
  public get userFont() {
    return this.getNumberAttribute('user_font');
  }
  public set userFont(value: number) {
    this._userFont = value;
  }
  public resetUserFont() {
    this._userFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFontInput() {
    return this._userFont;
  }

  // user_font_custom - computed: false, optional: true, required: false
  private _userFontCustom?: string; 
  public get userFontCustom() {
    return this.getStringAttribute('user_font_custom');
  }
  public set userFontCustom(value: string) {
    this._userFontCustom = value;
  }
  public resetUserFontCustom() {
    this._userFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFontCustomInput() {
    return this._userFontCustom;
  }

  // user_size - computed: false, optional: true, required: false
  private _userSize?: number; 
  public get userSize() {
    return this.getNumberAttribute('user_size');
  }
  public set userSize(value: number) {
    this._userSize = value;
  }
  public resetUserSize() {
    this._userSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSizeInput() {
    return this._userSize;
  }

  // user_text - computed: false, optional: true, required: false
  private _userText?: string; 
  public get userText() {
    return this.getStringAttribute('user_text');
  }
  public set userText(value: string) {
    this._userText = value;
  }
  public resetUserText() {
    this._userText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTextInput() {
    return this._userText;
  }

  // username - computed: false, optional: true, required: false
  private _username?: number; 
  public get username() {
    return this.getNumberAttribute('username');
  }
  public set username(value: number) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password thunder_aam_authentication_portal_notify_change_password}
*/
export class AamAuthenticationPortalNotifyChangePasswordA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_portal_notify_change_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationPortalNotifyChangePasswordA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationPortalNotifyChangePasswordA to import
  * @param importFromId The id of the existing AamAuthenticationPortalNotifyChangePasswordA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationPortalNotifyChangePasswordA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_portal_notify_change_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_notify_change_password thunder_aam_authentication_portal_notify_change_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationPortalNotifyChangePasswordAConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationPortalNotifyChangePasswordAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_portal_notify_change_password',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._changeText = config.changeText;
    this._changeUrl = config.changeUrl;
    this._confirmPasswordVar = config.confirmPasswordVar;
    this._continueText = config.continueText;
    this._continueUrl = config.continueUrl;
    this._id = config.id;
    this._name = config.name;
    this._newPasswordVar = config.newPasswordVar;
    this._oldPasswordVar = config.oldPasswordVar;
    this._usernameVar = config.usernameVar;
    this._uuid = config.uuid;
    this._background.internalValue = config.background;
    this._cfmPwdCfg.internalValue = config.cfmPwdCfg;
    this._newPwdCfg.internalValue = config.newPwdCfg;
    this._oldPwdCfg.internalValue = config.oldPwdCfg;
    this._usernameCfg.internalValue = config.usernameCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_text - computed: false, optional: true, required: false
  private _changeText?: string; 
  public get changeText() {
    return this.getStringAttribute('change_text');
  }
  public set changeText(value: string) {
    this._changeText = value;
  }
  public resetChangeText() {
    this._changeText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTextInput() {
    return this._changeText;
  }

  // change_url - computed: false, optional: true, required: false
  private _changeUrl?: string; 
  public get changeUrl() {
    return this.getStringAttribute('change_url');
  }
  public set changeUrl(value: string) {
    this._changeUrl = value;
  }
  public resetChangeUrl() {
    this._changeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeUrlInput() {
    return this._changeUrl;
  }

  // confirm_password_var - computed: false, optional: true, required: false
  private _confirmPasswordVar?: string; 
  public get confirmPasswordVar() {
    return this.getStringAttribute('confirm_password_var');
  }
  public set confirmPasswordVar(value: string) {
    this._confirmPasswordVar = value;
  }
  public resetConfirmPasswordVar() {
    this._confirmPasswordVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmPasswordVarInput() {
    return this._confirmPasswordVar;
  }

  // continue_text - computed: false, optional: true, required: false
  private _continueText?: string; 
  public get continueText() {
    return this.getStringAttribute('continue_text');
  }
  public set continueText(value: string) {
    this._continueText = value;
  }
  public resetContinueText() {
    this._continueText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueTextInput() {
    return this._continueText;
  }

  // continue_url - computed: false, optional: true, required: false
  private _continueUrl?: string; 
  public get continueUrl() {
    return this.getStringAttribute('continue_url');
  }
  public set continueUrl(value: string) {
    this._continueUrl = value;
  }
  public resetContinueUrl() {
    this._continueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueUrlInput() {
    return this._continueUrl;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // new_password_var - computed: false, optional: true, required: false
  private _newPasswordVar?: string; 
  public get newPasswordVar() {
    return this.getStringAttribute('new_password_var');
  }
  public set newPasswordVar(value: string) {
    this._newPasswordVar = value;
  }
  public resetNewPasswordVar() {
    this._newPasswordVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordVarInput() {
    return this._newPasswordVar;
  }

  // old_password_var - computed: false, optional: true, required: false
  private _oldPasswordVar?: string; 
  public get oldPasswordVar() {
    return this.getStringAttribute('old_password_var');
  }
  public set oldPasswordVar(value: string) {
    this._oldPasswordVar = value;
  }
  public resetOldPasswordVar() {
    this._oldPasswordVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordVarInput() {
    return this._oldPasswordVar;
  }

  // username_var - computed: false, optional: true, required: false
  private _usernameVar?: string; 
  public get usernameVar() {
    return this.getStringAttribute('username_var');
  }
  public set usernameVar(value: string) {
    this._usernameVar = value;
  }
  public resetUsernameVar() {
    this._usernameVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameVarInput() {
    return this._usernameVar;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // background - computed: false, optional: true, required: false
  private _background = new AamAuthenticationPortalNotifyChangePasswordBackgroundAOutputReference(this, "background");
  public get background() {
    return this._background;
  }
  public putBackground(value: AamAuthenticationPortalNotifyChangePasswordBackgroundA) {
    this._background.internalValue = value;
  }
  public resetBackground() {
    this._background.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background.internalValue;
  }

  // cfm_pwd_cfg - computed: false, optional: true, required: false
  private _cfmPwdCfg = new AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgAOutputReference(this, "cfm_pwd_cfg");
  public get cfmPwdCfg() {
    return this._cfmPwdCfg;
  }
  public putCfmPwdCfg(value: AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgA) {
    this._cfmPwdCfg.internalValue = value;
  }
  public resetCfmPwdCfg() {
    this._cfmPwdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmPwdCfgInput() {
    return this._cfmPwdCfg.internalValue;
  }

  // new_pwd_cfg - computed: false, optional: true, required: false
  private _newPwdCfg = new AamAuthenticationPortalNotifyChangePasswordNewPwdCfgAOutputReference(this, "new_pwd_cfg");
  public get newPwdCfg() {
    return this._newPwdCfg;
  }
  public putNewPwdCfg(value: AamAuthenticationPortalNotifyChangePasswordNewPwdCfgA) {
    this._newPwdCfg.internalValue = value;
  }
  public resetNewPwdCfg() {
    this._newPwdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPwdCfgInput() {
    return this._newPwdCfg.internalValue;
  }

  // old_pwd_cfg - computed: false, optional: true, required: false
  private _oldPwdCfg = new AamAuthenticationPortalNotifyChangePasswordOldPwdCfgAOutputReference(this, "old_pwd_cfg");
  public get oldPwdCfg() {
    return this._oldPwdCfg;
  }
  public putOldPwdCfg(value: AamAuthenticationPortalNotifyChangePasswordOldPwdCfgA) {
    this._oldPwdCfg.internalValue = value;
  }
  public resetOldPwdCfg() {
    this._oldPwdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPwdCfgInput() {
    return this._oldPwdCfg.internalValue;
  }

  // username_cfg - computed: false, optional: true, required: false
  private _usernameCfg = new AamAuthenticationPortalNotifyChangePasswordUsernameCfgAOutputReference(this, "username_cfg");
  public get usernameCfg() {
    return this._usernameCfg;
  }
  public putUsernameCfg(value: AamAuthenticationPortalNotifyChangePasswordUsernameCfgA) {
    this._usernameCfg.internalValue = value;
  }
  public resetUsernameCfg() {
    this._usernameCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCfgInput() {
    return this._usernameCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      change_text: cdktf.stringToTerraform(this._changeText),
      change_url: cdktf.stringToTerraform(this._changeUrl),
      confirm_password_var: cdktf.stringToTerraform(this._confirmPasswordVar),
      continue_text: cdktf.stringToTerraform(this._continueText),
      continue_url: cdktf.stringToTerraform(this._continueUrl),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      new_password_var: cdktf.stringToTerraform(this._newPasswordVar),
      old_password_var: cdktf.stringToTerraform(this._oldPasswordVar),
      username_var: cdktf.stringToTerraform(this._usernameVar),
      uuid: cdktf.stringToTerraform(this._uuid),
      background: aamAuthenticationPortalNotifyChangePasswordBackgroundAToTerraform(this._background.internalValue),
      cfm_pwd_cfg: aamAuthenticationPortalNotifyChangePasswordCfmPwdCfgAToTerraform(this._cfmPwdCfg.internalValue),
      new_pwd_cfg: aamAuthenticationPortalNotifyChangePasswordNewPwdCfgAToTerraform(this._newPwdCfg.internalValue),
      old_pwd_cfg: aamAuthenticationPortalNotifyChangePasswordOldPwdCfgAToTerraform(this._oldPwdCfg.internalValue),
      username_cfg: aamAuthenticationPortalNotifyChangePasswordUsernameCfgAToTerraform(this._usernameCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      change_text: {
        value: cdktf.stringToHclTerraform(this._changeText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_url: {
        value: cdktf.stringToHclTerraform(this._changeUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confirm_password_var: {
        value: cdktf.stringToHclTerraform(this._confirmPasswordVar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continue_text: {
        value: cdktf.stringToHclTerraform(this._continueText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continue_url: {
        value: cdktf.stringToHclTerraform(this._continueUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_password_var: {
        value: cdktf.stringToHclTerraform(this._newPasswordVar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      old_password_var: {
        value: cdktf.stringToHclTerraform(this._oldPasswordVar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_var: {
        value: cdktf.stringToHclTerraform(this._usernameVar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      background: {
        value: aamAuthenticationPortalNotifyChangePasswordBackgroundAToHclTerraform(this._background.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalNotifyChangePasswordBackgroundAList",
      },
      cfm_pwd_cfg: {
        value: aamAuthenticationPortalNotifyChangePasswordCfmPwdCfgAToHclTerraform(this._cfmPwdCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgAList",
      },
      new_pwd_cfg: {
        value: aamAuthenticationPortalNotifyChangePasswordNewPwdCfgAToHclTerraform(this._newPwdCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalNotifyChangePasswordNewPwdCfgAList",
      },
      old_pwd_cfg: {
        value: aamAuthenticationPortalNotifyChangePasswordOldPwdCfgAToHclTerraform(this._oldPwdCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalNotifyChangePasswordOldPwdCfgAList",
      },
      username_cfg: {
        value: aamAuthenticationPortalNotifyChangePasswordUsernameCfgAToHclTerraform(this._usernameCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalNotifyChangePasswordUsernameCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
