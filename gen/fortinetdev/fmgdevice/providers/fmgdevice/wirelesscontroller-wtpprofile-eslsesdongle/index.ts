// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerWtpprofileEslsesdongleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#apc_addr_type WirelesscontrollerWtpprofileEslsesdongle#apc_addr_type}
  */
  readonly apcAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#apc_fqdn WirelesscontrollerWtpprofileEslsesdongle#apc_fqdn}
  */
  readonly apcFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#apc_ip WirelesscontrollerWtpprofileEslsesdongle#apc_ip}
  */
  readonly apcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#apc_port WirelesscontrollerWtpprofileEslsesdongle#apc_port}
  */
  readonly apcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#coex_level WirelesscontrollerWtpprofileEslsesdongle#coex_level}
  */
  readonly coexLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#compliance_level WirelesscontrollerWtpprofileEslsesdongle#compliance_level}
  */
  readonly complianceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#device_name WirelesscontrollerWtpprofileEslsesdongle#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#device_vdom WirelesscontrollerWtpprofileEslsesdongle#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#esl_channel WirelesscontrollerWtpprofileEslsesdongle#esl_channel}
  */
  readonly eslChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#id WirelesscontrollerWtpprofileEslsesdongle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#output_power WirelesscontrollerWtpprofileEslsesdongle#output_power}
  */
  readonly outputPower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#scd_enable WirelesscontrollerWtpprofileEslsesdongle#scd_enable}
  */
  readonly scdEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#tls_cert_verification WirelesscontrollerWtpprofileEslsesdongle#tls_cert_verification}
  */
  readonly tlsCertVerification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#tls_fqdn_verification WirelesscontrollerWtpprofileEslsesdongle#tls_fqdn_verification}
  */
  readonly tlsFqdnVerification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#wtp_profile WirelesscontrollerWtpprofileEslsesdongle#wtp_profile}
  */
  readonly wtpProfile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle fmgdevice_wirelesscontroller_wtpprofile_eslsesdongle}
*/
export class WirelesscontrollerWtpprofileEslsesdongle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_wtpprofile_eslsesdongle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerWtpprofileEslsesdongle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerWtpprofileEslsesdongle to import
  * @param importFromId The id of the existing WirelesscontrollerWtpprofileEslsesdongle that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerWtpprofileEslsesdongle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_wtpprofile_eslsesdongle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtpprofile_eslsesdongle fmgdevice_wirelesscontroller_wtpprofile_eslsesdongle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerWtpprofileEslsesdongleConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerWtpprofileEslsesdongleConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_wtpprofile_eslsesdongle',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apcAddrType = config.apcAddrType;
    this._apcFqdn = config.apcFqdn;
    this._apcIp = config.apcIp;
    this._apcPort = config.apcPort;
    this._coexLevel = config.coexLevel;
    this._complianceLevel = config.complianceLevel;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._eslChannel = config.eslChannel;
    this._id = config.id;
    this._outputPower = config.outputPower;
    this._scdEnable = config.scdEnable;
    this._tlsCertVerification = config.tlsCertVerification;
    this._tlsFqdnVerification = config.tlsFqdnVerification;
    this._wtpProfile = config.wtpProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apc_addr_type - computed: true, optional: true, required: false
  private _apcAddrType?: string; 
  public get apcAddrType() {
    return this.getStringAttribute('apc_addr_type');
  }
  public set apcAddrType(value: string) {
    this._apcAddrType = value;
  }
  public resetApcAddrType() {
    this._apcAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcAddrTypeInput() {
    return this._apcAddrType;
  }

  // apc_fqdn - computed: false, optional: true, required: false
  private _apcFqdn?: string; 
  public get apcFqdn() {
    return this.getStringAttribute('apc_fqdn');
  }
  public set apcFqdn(value: string) {
    this._apcFqdn = value;
  }
  public resetApcFqdn() {
    this._apcFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcFqdnInput() {
    return this._apcFqdn;
  }

  // apc_ip - computed: true, optional: true, required: false
  private _apcIp?: string; 
  public get apcIp() {
    return this.getStringAttribute('apc_ip');
  }
  public set apcIp(value: string) {
    this._apcIp = value;
  }
  public resetApcIp() {
    this._apcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcIpInput() {
    return this._apcIp;
  }

  // apc_port - computed: false, optional: true, required: false
  private _apcPort?: number; 
  public get apcPort() {
    return this.getNumberAttribute('apc_port');
  }
  public set apcPort(value: number) {
    this._apcPort = value;
  }
  public resetApcPort() {
    this._apcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcPortInput() {
    return this._apcPort;
  }

  // coex_level - computed: true, optional: true, required: false
  private _coexLevel?: string; 
  public get coexLevel() {
    return this.getStringAttribute('coex_level');
  }
  public set coexLevel(value: string) {
    this._coexLevel = value;
  }
  public resetCoexLevel() {
    this._coexLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coexLevelInput() {
    return this._coexLevel;
  }

  // compliance_level - computed: true, optional: true, required: false
  private _complianceLevel?: string; 
  public get complianceLevel() {
    return this.getStringAttribute('compliance_level');
  }
  public set complianceLevel(value: string) {
    this._complianceLevel = value;
  }
  public resetComplianceLevel() {
    this._complianceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceLevelInput() {
    return this._complianceLevel;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // esl_channel - computed: true, optional: true, required: false
  private _eslChannel?: string; 
  public get eslChannel() {
    return this.getStringAttribute('esl_channel');
  }
  public set eslChannel(value: string) {
    this._eslChannel = value;
  }
  public resetEslChannel() {
    this._eslChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eslChannelInput() {
    return this._eslChannel;
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

  // output_power - computed: true, optional: true, required: false
  private _outputPower?: string; 
  public get outputPower() {
    return this.getStringAttribute('output_power');
  }
  public set outputPower(value: string) {
    this._outputPower = value;
  }
  public resetOutputPower() {
    this._outputPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPowerInput() {
    return this._outputPower;
  }

  // scd_enable - computed: true, optional: true, required: false
  private _scdEnable?: string; 
  public get scdEnable() {
    return this.getStringAttribute('scd_enable');
  }
  public set scdEnable(value: string) {
    this._scdEnable = value;
  }
  public resetScdEnable() {
    this._scdEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scdEnableInput() {
    return this._scdEnable;
  }

  // tls_cert_verification - computed: true, optional: true, required: false
  private _tlsCertVerification?: string; 
  public get tlsCertVerification() {
    return this.getStringAttribute('tls_cert_verification');
  }
  public set tlsCertVerification(value: string) {
    this._tlsCertVerification = value;
  }
  public resetTlsCertVerification() {
    this._tlsCertVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertVerificationInput() {
    return this._tlsCertVerification;
  }

  // tls_fqdn_verification - computed: true, optional: true, required: false
  private _tlsFqdnVerification?: string; 
  public get tlsFqdnVerification() {
    return this.getStringAttribute('tls_fqdn_verification');
  }
  public set tlsFqdnVerification(value: string) {
    this._tlsFqdnVerification = value;
  }
  public resetTlsFqdnVerification() {
    this._tlsFqdnVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFqdnVerificationInput() {
    return this._tlsFqdnVerification;
  }

  // wtp_profile - computed: false, optional: false, required: true
  private _wtpProfile?: string; 
  public get wtpProfile() {
    return this.getStringAttribute('wtp_profile');
  }
  public set wtpProfile(value: string) {
    this._wtpProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpProfileInput() {
    return this._wtpProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apc_addr_type: cdktf.stringToTerraform(this._apcAddrType),
      apc_fqdn: cdktf.stringToTerraform(this._apcFqdn),
      apc_ip: cdktf.stringToTerraform(this._apcIp),
      apc_port: cdktf.numberToTerraform(this._apcPort),
      coex_level: cdktf.stringToTerraform(this._coexLevel),
      compliance_level: cdktf.stringToTerraform(this._complianceLevel),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      esl_channel: cdktf.stringToTerraform(this._eslChannel),
      id: cdktf.stringToTerraform(this._id),
      output_power: cdktf.stringToTerraform(this._outputPower),
      scd_enable: cdktf.stringToTerraform(this._scdEnable),
      tls_cert_verification: cdktf.stringToTerraform(this._tlsCertVerification),
      tls_fqdn_verification: cdktf.stringToTerraform(this._tlsFqdnVerification),
      wtp_profile: cdktf.stringToTerraform(this._wtpProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apc_addr_type: {
        value: cdktf.stringToHclTerraform(this._apcAddrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apc_fqdn: {
        value: cdktf.stringToHclTerraform(this._apcFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apc_ip: {
        value: cdktf.stringToHclTerraform(this._apcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apc_port: {
        value: cdktf.numberToHclTerraform(this._apcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      coex_level: {
        value: cdktf.stringToHclTerraform(this._coexLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_level: {
        value: cdktf.stringToHclTerraform(this._complianceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esl_channel: {
        value: cdktf.stringToHclTerraform(this._eslChannel),
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
      output_power: {
        value: cdktf.stringToHclTerraform(this._outputPower),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scd_enable: {
        value: cdktf.stringToHclTerraform(this._scdEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_cert_verification: {
        value: cdktf.stringToHclTerraform(this._tlsCertVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_fqdn_verification: {
        value: cdktf.stringToHclTerraform(this._tlsFqdnVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wtp_profile: {
        value: cdktf.stringToHclTerraform(this._wtpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
