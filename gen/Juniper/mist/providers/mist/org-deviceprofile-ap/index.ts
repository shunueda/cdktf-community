// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgDeviceprofileApConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aeroscout AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#aeroscout OrgDeviceprofileAp#aeroscout}
  */
  readonly aeroscout?: OrgDeviceprofileApAeroscout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#airista OrgDeviceprofileAp#airista}
  */
  readonly airista?: OrgDeviceprofileApAirista;
  /**
  * BLE AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ble_config OrgDeviceprofileAp#ble_config}
  */
  readonly bleConfig?: OrgDeviceprofileApBleConfig;
  /**
  * Whether to disable eth1 port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#disable_eth1 OrgDeviceprofileAp#disable_eth1}
  */
  readonly disableEth1?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable eth2 port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#disable_eth2 OrgDeviceprofileAp#disable_eth2}
  */
  readonly disableEth2?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable eth3 port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#disable_eth3 OrgDeviceprofileAp#disable_eth3}
  */
  readonly disableEth3?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable module port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#disable_module OrgDeviceprofileAp#disable_module}
  */
  readonly disableModule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#esl_config OrgDeviceprofileAp#esl_config}
  */
  readonly eslConfig?: OrgDeviceprofileApEslConfig;
  /**
  * IP AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ip_config OrgDeviceprofileAp#ip_config}
  */
  readonly ipConfig?: OrgDeviceprofileApIpConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#lacp_config OrgDeviceprofileAp#lacp_config}
  */
  readonly lacpConfig?: OrgDeviceprofileApLacpConfig;
  /**
  * LED AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#led OrgDeviceprofileAp#led}
  */
  readonly led?: OrgDeviceprofileApLed;
  /**
  * Mesh AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#mesh OrgDeviceprofileAp#mesh}
  */
  readonly mesh?: OrgDeviceprofileApMesh;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#name OrgDeviceprofileAp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ntp_servers OrgDeviceprofileAp#ntp_servers}
  */
  readonly ntpServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#org_id OrgDeviceprofileAp#org_id}
  */
  readonly orgId: string;
  /**
  * Whether to enable power out through module port (for APH) or eth1 (for APL/BT11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#poe_passthrough OrgDeviceprofileAp#poe_passthrough}
  */
  readonly poePassthrough?: boolean | cdktf.IResolvable;
  /**
  * eth0 is not allowed here. Property key is the interface(s) name (e.g. `eth1` or `eth1,eth2`). If specified, this takes precedence over switch_config (deprecated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#port_config OrgDeviceprofileAp#port_config}
  */
  readonly portConfig?: { [key: string]: OrgDeviceprofileApPortConfig } | cdktf.IResolvable;
  /**
  * Power related configs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#pwr_config OrgDeviceprofileAp#pwr_config}
  */
  readonly pwrConfig?: OrgDeviceprofileApPwrConfig;
  /**
  * Radio AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#radio_config OrgDeviceprofileAp#radio_config}
  */
  readonly radioConfig?: OrgDeviceprofileApRadioConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#site_id OrgDeviceprofileAp#site_id}
  */
  readonly siteId?: string;
  /**
  * AP Uplink port configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#uplink_port_config OrgDeviceprofileAp#uplink_port_config}
  */
  readonly uplinkPortConfig?: OrgDeviceprofileApUplinkPortConfig;
  /**
  * USB AP settings
  *   - Note: if native imagotag is enabled, BLE will be disabled automatically
  *   - Note: legacy, new config moved to ESL Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#usb_config OrgDeviceprofileAp#usb_config}
  */
  readonly usbConfig?: OrgDeviceprofileApUsbConfig;
  /**
  * Dictionary of name->value, the vars can then be used in Wlans. This can overwrite those from Site Vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#vars OrgDeviceprofileAp#vars}
  */
  readonly vars?: { [key: string]: string };
}
export interface OrgDeviceprofileApAeroscout {
  /**
  * Whether to enable aeroscout config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#enabled OrgDeviceprofileAp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Required if enabled, aeroscout server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#host OrgDeviceprofileAp#host}
  */
  readonly host?: string;
  /**
  * Whether to enable the feature to allow wireless clients data received and sent to AES server for location calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#locate_connected OrgDeviceprofileAp#locate_connected}
  */
  readonly locateConnected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#port OrgDeviceprofileAp#port}
  */
  readonly port?: number;
}

export function orgDeviceprofileApAeroscoutToTerraform(struct?: OrgDeviceprofileApAeroscout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    host: cdktf.stringToTerraform(struct!.host),
    locate_connected: cdktf.booleanToTerraform(struct!.locateConnected),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function orgDeviceprofileApAeroscoutToHclTerraform(struct?: OrgDeviceprofileApAeroscout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locate_connected: {
      value: cdktf.booleanToHclTerraform(struct!.locateConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApAeroscoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApAeroscout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._locateConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.locateConnected = this._locateConnected;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApAeroscout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._host = undefined;
      this._locateConnected = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._host = value.host;
      this._locateConnected = value.locateConnected;
      this._port = value.port;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // locate_connected - computed: true, optional: true, required: false
  private _locateConnected?: boolean | cdktf.IResolvable; 
  public get locateConnected() {
    return this.getBooleanAttribute('locate_connected');
  }
  public set locateConnected(value: boolean | cdktf.IResolvable) {
    this._locateConnected = value;
  }
  public resetLocateConnected() {
    this._locateConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locateConnectedInput() {
    return this._locateConnected;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface OrgDeviceprofileApAirista {
  /**
  * Whether to enable Airista config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#enabled OrgDeviceprofileAp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Required if enabled, Airista server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#host OrgDeviceprofileAp#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#port OrgDeviceprofileAp#port}
  */
  readonly port?: number;
}

export function orgDeviceprofileApAiristaToTerraform(struct?: OrgDeviceprofileApAirista | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function orgDeviceprofileApAiristaToHclTerraform(struct?: OrgDeviceprofileApAirista | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApAiristaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApAirista | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApAirista | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface OrgDeviceprofileApBleConfig {
  /**
  * Whether Mist beacons is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#beacon_enabled OrgDeviceprofileAp#beacon_enabled}
  */
  readonly beaconEnabled?: boolean | cdktf.IResolvable;
  /**
  * Required if `beacon_rate_mode`==`custom`, 1-10, in number-beacons-per-second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#beacon_rate OrgDeviceprofileAp#beacon_rate}
  */
  readonly beaconRate?: number;
  /**
  * enum: `custom`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#beacon_rate_mode OrgDeviceprofileAp#beacon_rate_mode}
  */
  readonly beaconRateMode?: string;
  /**
  * List of AP BLE location beam numbers (1-8) which should be disabled at the AP and not transmit location information (where beam 1 is oriented at the top the AP, growing counter-clock-wise, with 9 being the omni BLE beam)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#beam_disabled OrgDeviceprofileAp#beam_disabled}
  */
  readonly beamDisabled?: number[];
  /**
  * Can be enabled if `beacon_enabled`==`true`, whether to send custom packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#custom_ble_packet_enabled OrgDeviceprofileAp#custom_ble_packet_enabled}
  */
  readonly customBlePacketEnabled?: boolean | cdktf.IResolvable;
  /**
  * The custom frame to be sent out in this beacon. The frame must be a hexstring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#custom_ble_packet_frame OrgDeviceprofileAp#custom_ble_packet_frame}
  */
  readonly customBlePacketFrame?: string;
  /**
  * Frequency (msec) of data emitted by custom ble beacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#custom_ble_packet_freq_msec OrgDeviceprofileAp#custom_ble_packet_freq_msec}
  */
  readonly customBlePacketFreqMsec?: number;
  /**
  * Advertised TX Power, -100 to 20 (dBm), omit this attribute to use default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#eddystone_uid_adv_power OrgDeviceprofileAp#eddystone_uid_adv_power}
  */
  readonly eddystoneUidAdvPower?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#eddystone_uid_beams OrgDeviceprofileAp#eddystone_uid_beams}
  */
  readonly eddystoneUidBeams?: string;
  /**
  * Only if `beacon_enabled`==`false`, Whether Eddystone-UID beacon is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#eddystone_uid_enabled OrgDeviceprofileAp#eddystone_uid_enabled}
  */
  readonly eddystoneUidEnabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency (msec) of data emit by Eddystone-UID beacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#eddystone_uid_freq_msec OrgDeviceprofileAp#eddystone_uid_freq_msec}
  */
  readonly eddystoneUidFreqMsec?: number;
  /**
  * Eddystone-UID instance for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#eddystone_uid_instance OrgDeviceprofileAp#eddystone_uid_instance}
  */
  readonly eddystoneUidInstance?: string;
  /**
  * Eddystone-UID namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#eddystone_uid_namespace OrgDeviceprofileAp#eddystone_uid_namespace}
  */
  readonly eddystoneUidNamespace?: string;
  /**
  * Advertised TX Power, -100 to 20 (dBm), omit this attribute to use default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#eddystone_url_adv_power OrgDeviceprofileAp#eddystone_url_adv_power}
  */
  readonly eddystoneUrlAdvPower?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#eddystone_url_beams OrgDeviceprofileAp#eddystone_url_beams}
  */
  readonly eddystoneUrlBeams?: string;
  /**
  * Only if `beacon_enabled`==`false`, Whether Eddystone-URL beacon is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#eddystone_url_enabled OrgDeviceprofileAp#eddystone_url_enabled}
  */
  readonly eddystoneUrlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency (msec) of data emit by Eddystone-UID beacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#eddystone_url_freq_msec OrgDeviceprofileAp#eddystone_url_freq_msec}
  */
  readonly eddystoneUrlFreqMsec?: number;
  /**
  * URL pointed by Eddystone-URL beacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#eddystone_url_url OrgDeviceprofileAp#eddystone_url_url}
  */
  readonly eddystoneUrlUrl?: string;
  /**
  * Advertised TX Power, -100 to 20 (dBm), omit this attribute to use default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ibeacon_adv_power OrgDeviceprofileAp#ibeacon_adv_power}
  */
  readonly ibeaconAdvPower?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ibeacon_beams OrgDeviceprofileAp#ibeacon_beams}
  */
  readonly ibeaconBeams?: string;
  /**
  * Can be enabled if `beacon_enabled`==`true`, whether to send iBeacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ibeacon_enabled OrgDeviceprofileAp#ibeacon_enabled}
  */
  readonly ibeaconEnabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency (msec) of data emit for iBeacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ibeacon_freq_msec OrgDeviceprofileAp#ibeacon_freq_msec}
  */
  readonly ibeaconFreqMsec?: number;
  /**
  * Major number for iBeacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ibeacon_major OrgDeviceprofileAp#ibeacon_major}
  */
  readonly ibeaconMajor?: number;
  /**
  * Minor number for iBeacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ibeacon_minor OrgDeviceprofileAp#ibeacon_minor}
  */
  readonly ibeaconMinor?: number;
  /**
  * Optional, if not specified, the same UUID as the beacon will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ibeacon_uuid OrgDeviceprofileAp#ibeacon_uuid}
  */
  readonly ibeaconUuid?: string;
  /**
  * Required if `power_mode`==`custom`; else use `power_mode` as default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power OrgDeviceprofileAp#power}
  */
  readonly power?: number;
  /**
  * enum: `custom`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power_mode OrgDeviceprofileAp#power_mode}
  */
  readonly powerMode?: string;
}

export function orgDeviceprofileApBleConfigToTerraform(struct?: OrgDeviceprofileApBleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    beacon_enabled: cdktf.booleanToTerraform(struct!.beaconEnabled),
    beacon_rate: cdktf.numberToTerraform(struct!.beaconRate),
    beacon_rate_mode: cdktf.stringToTerraform(struct!.beaconRateMode),
    beam_disabled: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.beamDisabled),
    custom_ble_packet_enabled: cdktf.booleanToTerraform(struct!.customBlePacketEnabled),
    custom_ble_packet_frame: cdktf.stringToTerraform(struct!.customBlePacketFrame),
    custom_ble_packet_freq_msec: cdktf.numberToTerraform(struct!.customBlePacketFreqMsec),
    eddystone_uid_adv_power: cdktf.numberToTerraform(struct!.eddystoneUidAdvPower),
    eddystone_uid_beams: cdktf.stringToTerraform(struct!.eddystoneUidBeams),
    eddystone_uid_enabled: cdktf.booleanToTerraform(struct!.eddystoneUidEnabled),
    eddystone_uid_freq_msec: cdktf.numberToTerraform(struct!.eddystoneUidFreqMsec),
    eddystone_uid_instance: cdktf.stringToTerraform(struct!.eddystoneUidInstance),
    eddystone_uid_namespace: cdktf.stringToTerraform(struct!.eddystoneUidNamespace),
    eddystone_url_adv_power: cdktf.numberToTerraform(struct!.eddystoneUrlAdvPower),
    eddystone_url_beams: cdktf.stringToTerraform(struct!.eddystoneUrlBeams),
    eddystone_url_enabled: cdktf.booleanToTerraform(struct!.eddystoneUrlEnabled),
    eddystone_url_freq_msec: cdktf.numberToTerraform(struct!.eddystoneUrlFreqMsec),
    eddystone_url_url: cdktf.stringToTerraform(struct!.eddystoneUrlUrl),
    ibeacon_adv_power: cdktf.numberToTerraform(struct!.ibeaconAdvPower),
    ibeacon_beams: cdktf.stringToTerraform(struct!.ibeaconBeams),
    ibeacon_enabled: cdktf.booleanToTerraform(struct!.ibeaconEnabled),
    ibeacon_freq_msec: cdktf.numberToTerraform(struct!.ibeaconFreqMsec),
    ibeacon_major: cdktf.numberToTerraform(struct!.ibeaconMajor),
    ibeacon_minor: cdktf.numberToTerraform(struct!.ibeaconMinor),
    ibeacon_uuid: cdktf.stringToTerraform(struct!.ibeaconUuid),
    power: cdktf.numberToTerraform(struct!.power),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
  }
}


export function orgDeviceprofileApBleConfigToHclTerraform(struct?: OrgDeviceprofileApBleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    beacon_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.beaconEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    beacon_rate: {
      value: cdktf.numberToHclTerraform(struct!.beaconRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    beacon_rate_mode: {
      value: cdktf.stringToHclTerraform(struct!.beaconRateMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    beam_disabled: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.beamDisabled),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    custom_ble_packet_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customBlePacketEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_ble_packet_frame: {
      value: cdktf.stringToHclTerraform(struct!.customBlePacketFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_ble_packet_freq_msec: {
      value: cdktf.numberToHclTerraform(struct!.customBlePacketFreqMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eddystone_uid_adv_power: {
      value: cdktf.numberToHclTerraform(struct!.eddystoneUidAdvPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eddystone_uid_beams: {
      value: cdktf.stringToHclTerraform(struct!.eddystoneUidBeams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eddystone_uid_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.eddystoneUidEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eddystone_uid_freq_msec: {
      value: cdktf.numberToHclTerraform(struct!.eddystoneUidFreqMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eddystone_uid_instance: {
      value: cdktf.stringToHclTerraform(struct!.eddystoneUidInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eddystone_uid_namespace: {
      value: cdktf.stringToHclTerraform(struct!.eddystoneUidNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eddystone_url_adv_power: {
      value: cdktf.numberToHclTerraform(struct!.eddystoneUrlAdvPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eddystone_url_beams: {
      value: cdktf.stringToHclTerraform(struct!.eddystoneUrlBeams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eddystone_url_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.eddystoneUrlEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eddystone_url_freq_msec: {
      value: cdktf.numberToHclTerraform(struct!.eddystoneUrlFreqMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eddystone_url_url: {
      value: cdktf.stringToHclTerraform(struct!.eddystoneUrlUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ibeacon_adv_power: {
      value: cdktf.numberToHclTerraform(struct!.ibeaconAdvPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ibeacon_beams: {
      value: cdktf.stringToHclTerraform(struct!.ibeaconBeams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ibeacon_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ibeaconEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ibeacon_freq_msec: {
      value: cdktf.numberToHclTerraform(struct!.ibeaconFreqMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ibeacon_major: {
      value: cdktf.numberToHclTerraform(struct!.ibeaconMajor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ibeacon_minor: {
      value: cdktf.numberToHclTerraform(struct!.ibeaconMinor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ibeacon_uuid: {
      value: cdktf.stringToHclTerraform(struct!.ibeaconUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_mode: {
      value: cdktf.stringToHclTerraform(struct!.powerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApBleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApBleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beaconEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.beaconEnabled = this._beaconEnabled;
    }
    if (this._beaconRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.beaconRate = this._beaconRate;
    }
    if (this._beaconRateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.beaconRateMode = this._beaconRateMode;
    }
    if (this._beamDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.beamDisabled = this._beamDisabled;
    }
    if (this._customBlePacketEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBlePacketEnabled = this._customBlePacketEnabled;
    }
    if (this._customBlePacketFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBlePacketFrame = this._customBlePacketFrame;
    }
    if (this._customBlePacketFreqMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBlePacketFreqMsec = this._customBlePacketFreqMsec;
    }
    if (this._eddystoneUidAdvPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUidAdvPower = this._eddystoneUidAdvPower;
    }
    if (this._eddystoneUidBeams !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUidBeams = this._eddystoneUidBeams;
    }
    if (this._eddystoneUidEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUidEnabled = this._eddystoneUidEnabled;
    }
    if (this._eddystoneUidFreqMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUidFreqMsec = this._eddystoneUidFreqMsec;
    }
    if (this._eddystoneUidInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUidInstance = this._eddystoneUidInstance;
    }
    if (this._eddystoneUidNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUidNamespace = this._eddystoneUidNamespace;
    }
    if (this._eddystoneUrlAdvPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUrlAdvPower = this._eddystoneUrlAdvPower;
    }
    if (this._eddystoneUrlBeams !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUrlBeams = this._eddystoneUrlBeams;
    }
    if (this._eddystoneUrlEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUrlEnabled = this._eddystoneUrlEnabled;
    }
    if (this._eddystoneUrlFreqMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUrlFreqMsec = this._eddystoneUrlFreqMsec;
    }
    if (this._eddystoneUrlUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUrlUrl = this._eddystoneUrlUrl;
    }
    if (this._ibeaconAdvPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconAdvPower = this._ibeaconAdvPower;
    }
    if (this._ibeaconBeams !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconBeams = this._ibeaconBeams;
    }
    if (this._ibeaconEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconEnabled = this._ibeaconEnabled;
    }
    if (this._ibeaconFreqMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconFreqMsec = this._ibeaconFreqMsec;
    }
    if (this._ibeaconMajor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconMajor = this._ibeaconMajor;
    }
    if (this._ibeaconMinor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconMinor = this._ibeaconMinor;
    }
    if (this._ibeaconUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconUuid = this._ibeaconUuid;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMode = this._powerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApBleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beaconEnabled = undefined;
      this._beaconRate = undefined;
      this._beaconRateMode = undefined;
      this._beamDisabled = undefined;
      this._customBlePacketEnabled = undefined;
      this._customBlePacketFrame = undefined;
      this._customBlePacketFreqMsec = undefined;
      this._eddystoneUidAdvPower = undefined;
      this._eddystoneUidBeams = undefined;
      this._eddystoneUidEnabled = undefined;
      this._eddystoneUidFreqMsec = undefined;
      this._eddystoneUidInstance = undefined;
      this._eddystoneUidNamespace = undefined;
      this._eddystoneUrlAdvPower = undefined;
      this._eddystoneUrlBeams = undefined;
      this._eddystoneUrlEnabled = undefined;
      this._eddystoneUrlFreqMsec = undefined;
      this._eddystoneUrlUrl = undefined;
      this._ibeaconAdvPower = undefined;
      this._ibeaconBeams = undefined;
      this._ibeaconEnabled = undefined;
      this._ibeaconFreqMsec = undefined;
      this._ibeaconMajor = undefined;
      this._ibeaconMinor = undefined;
      this._ibeaconUuid = undefined;
      this._power = undefined;
      this._powerMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beaconEnabled = value.beaconEnabled;
      this._beaconRate = value.beaconRate;
      this._beaconRateMode = value.beaconRateMode;
      this._beamDisabled = value.beamDisabled;
      this._customBlePacketEnabled = value.customBlePacketEnabled;
      this._customBlePacketFrame = value.customBlePacketFrame;
      this._customBlePacketFreqMsec = value.customBlePacketFreqMsec;
      this._eddystoneUidAdvPower = value.eddystoneUidAdvPower;
      this._eddystoneUidBeams = value.eddystoneUidBeams;
      this._eddystoneUidEnabled = value.eddystoneUidEnabled;
      this._eddystoneUidFreqMsec = value.eddystoneUidFreqMsec;
      this._eddystoneUidInstance = value.eddystoneUidInstance;
      this._eddystoneUidNamespace = value.eddystoneUidNamespace;
      this._eddystoneUrlAdvPower = value.eddystoneUrlAdvPower;
      this._eddystoneUrlBeams = value.eddystoneUrlBeams;
      this._eddystoneUrlEnabled = value.eddystoneUrlEnabled;
      this._eddystoneUrlFreqMsec = value.eddystoneUrlFreqMsec;
      this._eddystoneUrlUrl = value.eddystoneUrlUrl;
      this._ibeaconAdvPower = value.ibeaconAdvPower;
      this._ibeaconBeams = value.ibeaconBeams;
      this._ibeaconEnabled = value.ibeaconEnabled;
      this._ibeaconFreqMsec = value.ibeaconFreqMsec;
      this._ibeaconMajor = value.ibeaconMajor;
      this._ibeaconMinor = value.ibeaconMinor;
      this._ibeaconUuid = value.ibeaconUuid;
      this._power = value.power;
      this._powerMode = value.powerMode;
    }
  }

  // beacon_enabled - computed: true, optional: true, required: false
  private _beaconEnabled?: boolean | cdktf.IResolvable; 
  public get beaconEnabled() {
    return this.getBooleanAttribute('beacon_enabled');
  }
  public set beaconEnabled(value: boolean | cdktf.IResolvable) {
    this._beaconEnabled = value;
  }
  public resetBeaconEnabled() {
    this._beaconEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconEnabledInput() {
    return this._beaconEnabled;
  }

  // beacon_rate - computed: false, optional: true, required: false
  private _beaconRate?: number; 
  public get beaconRate() {
    return this.getNumberAttribute('beacon_rate');
  }
  public set beaconRate(value: number) {
    this._beaconRate = value;
  }
  public resetBeaconRate() {
    this._beaconRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconRateInput() {
    return this._beaconRate;
  }

  // beacon_rate_mode - computed: false, optional: true, required: false
  private _beaconRateMode?: string; 
  public get beaconRateMode() {
    return this.getStringAttribute('beacon_rate_mode');
  }
  public set beaconRateMode(value: string) {
    this._beaconRateMode = value;
  }
  public resetBeaconRateMode() {
    this._beaconRateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconRateModeInput() {
    return this._beaconRateMode;
  }

  // beam_disabled - computed: false, optional: true, required: false
  private _beamDisabled?: number[]; 
  public get beamDisabled() {
    return this.getNumberListAttribute('beam_disabled');
  }
  public set beamDisabled(value: number[]) {
    this._beamDisabled = value;
  }
  public resetBeamDisabled() {
    this._beamDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beamDisabledInput() {
    return this._beamDisabled;
  }

  // custom_ble_packet_enabled - computed: false, optional: true, required: false
  private _customBlePacketEnabled?: boolean | cdktf.IResolvable; 
  public get customBlePacketEnabled() {
    return this.getBooleanAttribute('custom_ble_packet_enabled');
  }
  public set customBlePacketEnabled(value: boolean | cdktf.IResolvable) {
    this._customBlePacketEnabled = value;
  }
  public resetCustomBlePacketEnabled() {
    this._customBlePacketEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlePacketEnabledInput() {
    return this._customBlePacketEnabled;
  }

  // custom_ble_packet_frame - computed: false, optional: true, required: false
  private _customBlePacketFrame?: string; 
  public get customBlePacketFrame() {
    return this.getStringAttribute('custom_ble_packet_frame');
  }
  public set customBlePacketFrame(value: string) {
    this._customBlePacketFrame = value;
  }
  public resetCustomBlePacketFrame() {
    this._customBlePacketFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlePacketFrameInput() {
    return this._customBlePacketFrame;
  }

  // custom_ble_packet_freq_msec - computed: false, optional: true, required: false
  private _customBlePacketFreqMsec?: number; 
  public get customBlePacketFreqMsec() {
    return this.getNumberAttribute('custom_ble_packet_freq_msec');
  }
  public set customBlePacketFreqMsec(value: number) {
    this._customBlePacketFreqMsec = value;
  }
  public resetCustomBlePacketFreqMsec() {
    this._customBlePacketFreqMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlePacketFreqMsecInput() {
    return this._customBlePacketFreqMsec;
  }

  // eddystone_uid_adv_power - computed: false, optional: true, required: false
  private _eddystoneUidAdvPower?: number; 
  public get eddystoneUidAdvPower() {
    return this.getNumberAttribute('eddystone_uid_adv_power');
  }
  public set eddystoneUidAdvPower(value: number) {
    this._eddystoneUidAdvPower = value;
  }
  public resetEddystoneUidAdvPower() {
    this._eddystoneUidAdvPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUidAdvPowerInput() {
    return this._eddystoneUidAdvPower;
  }

  // eddystone_uid_beams - computed: false, optional: true, required: false
  private _eddystoneUidBeams?: string; 
  public get eddystoneUidBeams() {
    return this.getStringAttribute('eddystone_uid_beams');
  }
  public set eddystoneUidBeams(value: string) {
    this._eddystoneUidBeams = value;
  }
  public resetEddystoneUidBeams() {
    this._eddystoneUidBeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUidBeamsInput() {
    return this._eddystoneUidBeams;
  }

  // eddystone_uid_enabled - computed: false, optional: true, required: false
  private _eddystoneUidEnabled?: boolean | cdktf.IResolvable; 
  public get eddystoneUidEnabled() {
    return this.getBooleanAttribute('eddystone_uid_enabled');
  }
  public set eddystoneUidEnabled(value: boolean | cdktf.IResolvable) {
    this._eddystoneUidEnabled = value;
  }
  public resetEddystoneUidEnabled() {
    this._eddystoneUidEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUidEnabledInput() {
    return this._eddystoneUidEnabled;
  }

  // eddystone_uid_freq_msec - computed: false, optional: true, required: false
  private _eddystoneUidFreqMsec?: number; 
  public get eddystoneUidFreqMsec() {
    return this.getNumberAttribute('eddystone_uid_freq_msec');
  }
  public set eddystoneUidFreqMsec(value: number) {
    this._eddystoneUidFreqMsec = value;
  }
  public resetEddystoneUidFreqMsec() {
    this._eddystoneUidFreqMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUidFreqMsecInput() {
    return this._eddystoneUidFreqMsec;
  }

  // eddystone_uid_instance - computed: false, optional: true, required: false
  private _eddystoneUidInstance?: string; 
  public get eddystoneUidInstance() {
    return this.getStringAttribute('eddystone_uid_instance');
  }
  public set eddystoneUidInstance(value: string) {
    this._eddystoneUidInstance = value;
  }
  public resetEddystoneUidInstance() {
    this._eddystoneUidInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUidInstanceInput() {
    return this._eddystoneUidInstance;
  }

  // eddystone_uid_namespace - computed: false, optional: true, required: false
  private _eddystoneUidNamespace?: string; 
  public get eddystoneUidNamespace() {
    return this.getStringAttribute('eddystone_uid_namespace');
  }
  public set eddystoneUidNamespace(value: string) {
    this._eddystoneUidNamespace = value;
  }
  public resetEddystoneUidNamespace() {
    this._eddystoneUidNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUidNamespaceInput() {
    return this._eddystoneUidNamespace;
  }

  // eddystone_url_adv_power - computed: false, optional: true, required: false
  private _eddystoneUrlAdvPower?: number; 
  public get eddystoneUrlAdvPower() {
    return this.getNumberAttribute('eddystone_url_adv_power');
  }
  public set eddystoneUrlAdvPower(value: number) {
    this._eddystoneUrlAdvPower = value;
  }
  public resetEddystoneUrlAdvPower() {
    this._eddystoneUrlAdvPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUrlAdvPowerInput() {
    return this._eddystoneUrlAdvPower;
  }

  // eddystone_url_beams - computed: false, optional: true, required: false
  private _eddystoneUrlBeams?: string; 
  public get eddystoneUrlBeams() {
    return this.getStringAttribute('eddystone_url_beams');
  }
  public set eddystoneUrlBeams(value: string) {
    this._eddystoneUrlBeams = value;
  }
  public resetEddystoneUrlBeams() {
    this._eddystoneUrlBeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUrlBeamsInput() {
    return this._eddystoneUrlBeams;
  }

  // eddystone_url_enabled - computed: false, optional: true, required: false
  private _eddystoneUrlEnabled?: boolean | cdktf.IResolvable; 
  public get eddystoneUrlEnabled() {
    return this.getBooleanAttribute('eddystone_url_enabled');
  }
  public set eddystoneUrlEnabled(value: boolean | cdktf.IResolvable) {
    this._eddystoneUrlEnabled = value;
  }
  public resetEddystoneUrlEnabled() {
    this._eddystoneUrlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUrlEnabledInput() {
    return this._eddystoneUrlEnabled;
  }

  // eddystone_url_freq_msec - computed: false, optional: true, required: false
  private _eddystoneUrlFreqMsec?: number; 
  public get eddystoneUrlFreqMsec() {
    return this.getNumberAttribute('eddystone_url_freq_msec');
  }
  public set eddystoneUrlFreqMsec(value: number) {
    this._eddystoneUrlFreqMsec = value;
  }
  public resetEddystoneUrlFreqMsec() {
    this._eddystoneUrlFreqMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUrlFreqMsecInput() {
    return this._eddystoneUrlFreqMsec;
  }

  // eddystone_url_url - computed: false, optional: true, required: false
  private _eddystoneUrlUrl?: string; 
  public get eddystoneUrlUrl() {
    return this.getStringAttribute('eddystone_url_url');
  }
  public set eddystoneUrlUrl(value: string) {
    this._eddystoneUrlUrl = value;
  }
  public resetEddystoneUrlUrl() {
    this._eddystoneUrlUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUrlUrlInput() {
    return this._eddystoneUrlUrl;
  }

  // ibeacon_adv_power - computed: false, optional: true, required: false
  private _ibeaconAdvPower?: number; 
  public get ibeaconAdvPower() {
    return this.getNumberAttribute('ibeacon_adv_power');
  }
  public set ibeaconAdvPower(value: number) {
    this._ibeaconAdvPower = value;
  }
  public resetIbeaconAdvPower() {
    this._ibeaconAdvPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconAdvPowerInput() {
    return this._ibeaconAdvPower;
  }

  // ibeacon_beams - computed: false, optional: true, required: false
  private _ibeaconBeams?: string; 
  public get ibeaconBeams() {
    return this.getStringAttribute('ibeacon_beams');
  }
  public set ibeaconBeams(value: string) {
    this._ibeaconBeams = value;
  }
  public resetIbeaconBeams() {
    this._ibeaconBeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconBeamsInput() {
    return this._ibeaconBeams;
  }

  // ibeacon_enabled - computed: false, optional: true, required: false
  private _ibeaconEnabled?: boolean | cdktf.IResolvable; 
  public get ibeaconEnabled() {
    return this.getBooleanAttribute('ibeacon_enabled');
  }
  public set ibeaconEnabled(value: boolean | cdktf.IResolvable) {
    this._ibeaconEnabled = value;
  }
  public resetIbeaconEnabled() {
    this._ibeaconEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconEnabledInput() {
    return this._ibeaconEnabled;
  }

  // ibeacon_freq_msec - computed: false, optional: true, required: false
  private _ibeaconFreqMsec?: number; 
  public get ibeaconFreqMsec() {
    return this.getNumberAttribute('ibeacon_freq_msec');
  }
  public set ibeaconFreqMsec(value: number) {
    this._ibeaconFreqMsec = value;
  }
  public resetIbeaconFreqMsec() {
    this._ibeaconFreqMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconFreqMsecInput() {
    return this._ibeaconFreqMsec;
  }

  // ibeacon_major - computed: false, optional: true, required: false
  private _ibeaconMajor?: number; 
  public get ibeaconMajor() {
    return this.getNumberAttribute('ibeacon_major');
  }
  public set ibeaconMajor(value: number) {
    this._ibeaconMajor = value;
  }
  public resetIbeaconMajor() {
    this._ibeaconMajor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconMajorInput() {
    return this._ibeaconMajor;
  }

  // ibeacon_minor - computed: false, optional: true, required: false
  private _ibeaconMinor?: number; 
  public get ibeaconMinor() {
    return this.getNumberAttribute('ibeacon_minor');
  }
  public set ibeaconMinor(value: number) {
    this._ibeaconMinor = value;
  }
  public resetIbeaconMinor() {
    this._ibeaconMinor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconMinorInput() {
    return this._ibeaconMinor;
  }

  // ibeacon_uuid - computed: false, optional: true, required: false
  private _ibeaconUuid?: string; 
  public get ibeaconUuid() {
    return this.getStringAttribute('ibeacon_uuid');
  }
  public set ibeaconUuid(value: string) {
    this._ibeaconUuid = value;
  }
  public resetIbeaconUuid() {
    this._ibeaconUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconUuidInput() {
    return this._ibeaconUuid;
  }

  // power - computed: false, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_mode - computed: false, optional: true, required: false
  private _powerMode?: string; 
  public get powerMode() {
    return this.getStringAttribute('power_mode');
  }
  public set powerMode(value: string) {
    this._powerMode = value;
  }
  public resetPowerMode() {
    this._powerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerModeInput() {
    return this._powerMode;
  }
}
export interface OrgDeviceprofileApEslConfig {
  /**
  * Only if `type`==`imagotag` or `type`==`native`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#cacert OrgDeviceprofileAp#cacert}
  */
  readonly cacert?: string;
  /**
  * Only if `type`==`imagotag` or `type`==`native`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#channel OrgDeviceprofileAp#channel}
  */
  readonly channel?: number;
  /**
  * usb_config is ignored if esl_config enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#enabled OrgDeviceprofileAp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Only if `type`==`imagotag` or `type`==`native`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#host OrgDeviceprofileAp#host}
  */
  readonly host?: string;
  /**
  * Only if `type`==`imagotag` or `type`==`native`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#port OrgDeviceprofileAp#port}
  */
  readonly port?: number;
  /**
  * note: ble_config will be ignored if esl_config is enabled and with native mode. enum: `hanshow`, `imagotag`, `native`, `solum`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#type OrgDeviceprofileAp#type}
  */
  readonly type?: string;
  /**
  * Only if `type`==`imagotag` or `type`==`native`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#verify_cert OrgDeviceprofileAp#verify_cert}
  */
  readonly verifyCert?: boolean | cdktf.IResolvable;
  /**
  * Only if `type`==`solum` or `type`==`hanshow`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#vlan_id OrgDeviceprofileAp#vlan_id}
  */
  readonly vlanId?: number;
}

export function orgDeviceprofileApEslConfigToTerraform(struct?: OrgDeviceprofileApEslConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacert: cdktf.stringToTerraform(struct!.cacert),
    channel: cdktf.numberToTerraform(struct!.channel),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    type: cdktf.stringToTerraform(struct!.type),
    verify_cert: cdktf.booleanToTerraform(struct!.verifyCert),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function orgDeviceprofileApEslConfigToHclTerraform(struct?: OrgDeviceprofileApEslConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacert: {
      value: cdktf.stringToHclTerraform(struct!.cacert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.numberToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_cert: {
      value: cdktf.booleanToHclTerraform(struct!.verifyCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApEslConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApEslConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacert = this._cacert;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._verifyCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCert = this._verifyCert;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApEslConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacert = undefined;
      this._channel = undefined;
      this._enabled = undefined;
      this._host = undefined;
      this._port = undefined;
      this._type = undefined;
      this._verifyCert = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacert = value.cacert;
      this._channel = value.channel;
      this._enabled = value.enabled;
      this._host = value.host;
      this._port = value.port;
      this._type = value.type;
      this._verifyCert = value.verifyCert;
      this._vlanId = value.vlanId;
    }
  }

  // cacert - computed: false, optional: true, required: false
  private _cacert?: string; 
  public get cacert() {
    return this.getStringAttribute('cacert');
  }
  public set cacert(value: string) {
    this._cacert = value;
  }
  public resetCacert() {
    this._cacert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertInput() {
    return this._cacert;
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: number; 
  public get channel() {
    return this.getNumberAttribute('channel');
  }
  public set channel(value: number) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // verify_cert - computed: false, optional: true, required: false
  private _verifyCert?: boolean | cdktf.IResolvable; 
  public get verifyCert() {
    return this.getBooleanAttribute('verify_cert');
  }
  public set verifyCert(value: boolean | cdktf.IResolvable) {
    this._verifyCert = value;
  }
  public resetVerifyCert() {
    this._verifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertInput() {
    return this._verifyCert;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface OrgDeviceprofileApIpConfig {
  /**
  * If `type`==`static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#dns OrgDeviceprofileAp#dns}
  */
  readonly dns?: string[];
  /**
  * Required if `type`==`static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#dns_suffix OrgDeviceprofileAp#dns_suffix}
  */
  readonly dnsSuffix?: string[];
  /**
  * Required if `type`==`static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#gateway OrgDeviceprofileAp#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#gateway6 OrgDeviceprofileAp#gateway6}
  */
  readonly gateway6?: string;
  /**
  * Required if `type`==`static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ip OrgDeviceprofileAp#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ip6 OrgDeviceprofileAp#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#mtu OrgDeviceprofileAp#mtu}
  */
  readonly mtu?: number;
  /**
  * Required if `type`==`static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#netmask OrgDeviceprofileAp#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#netmask6 OrgDeviceprofileAp#netmask6}
  */
  readonly netmask6?: string;
  /**
  * enum: `dhcp`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#type OrgDeviceprofileAp#type}
  */
  readonly type?: string;
  /**
  * enum: `autoconf`, `dhcp`, `disabled`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#type6 OrgDeviceprofileAp#type6}
  */
  readonly type6?: string;
  /**
  * Management VLAN id, default is 1 (untagged)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#vlan_id OrgDeviceprofileAp#vlan_id}
  */
  readonly vlanId?: number;
}

export function orgDeviceprofileApIpConfigToTerraform(struct?: OrgDeviceprofileApIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns),
    dns_suffix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSuffix),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    gateway6: cdktf.stringToTerraform(struct!.gateway6),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    netmask6: cdktf.stringToTerraform(struct!.netmask6),
    type: cdktf.stringToTerraform(struct!.type),
    type6: cdktf.stringToTerraform(struct!.type6),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function orgDeviceprofileApIpConfigToHclTerraform(struct?: OrgDeviceprofileApIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_suffix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSuffix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway6: {
      value: cdktf.stringToHclTerraform(struct!.gateway6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask6: {
      value: cdktf.stringToHclTerraform(struct!.netmask6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type6: {
      value: cdktf.stringToHclTerraform(struct!.type6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApIpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._dnsSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._gateway6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway6 = this._gateway6;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._netmask6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask6 = this._netmask6;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._type6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.type6 = this._type6;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApIpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._dnsSuffix = undefined;
      this._gateway = undefined;
      this._gateway6 = undefined;
      this._ip = undefined;
      this._ip6 = undefined;
      this._mtu = undefined;
      this._netmask = undefined;
      this._netmask6 = undefined;
      this._type = undefined;
      this._type6 = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._dnsSuffix = value.dnsSuffix;
      this._gateway = value.gateway;
      this._gateway6 = value.gateway6;
      this._ip = value.ip;
      this._ip6 = value.ip6;
      this._mtu = value.mtu;
      this._netmask = value.netmask;
      this._netmask6 = value.netmask6;
      this._type = value.type;
      this._type6 = value.type6;
      this._vlanId = value.vlanId;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string[]; 
  public get dnsSuffix() {
    return this.getListAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string[]) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway6 - computed: false, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: false, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // netmask6 - computed: false, optional: true, required: false
  private _netmask6?: string; 
  public get netmask6() {
    return this.getStringAttribute('netmask6');
  }
  public set netmask6(value: string) {
    this._netmask6 = value;
  }
  public resetNetmask6() {
    this._netmask6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmask6Input() {
    return this._netmask6;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type6 - computed: false, optional: true, required: false
  private _type6?: string; 
  public get type6() {
    return this.getStringAttribute('type6');
  }
  public set type6(value: string) {
    this._type6 = value;
  }
  public resetType6() {
    this._type6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get type6Input() {
    return this._type6;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface OrgDeviceprofileApLacpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#enabled OrgDeviceprofileAp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileApLacpConfigToTerraform(struct?: OrgDeviceprofileApLacpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgDeviceprofileApLacpConfigToHclTerraform(struct?: OrgDeviceprofileApLacpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApLacpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApLacpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApLacpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrgDeviceprofileApLed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#brightness OrgDeviceprofileAp#brightness}
  */
  readonly brightness?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#enabled OrgDeviceprofileAp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileApLedToTerraform(struct?: OrgDeviceprofileApLed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brightness: cdktf.numberToTerraform(struct!.brightness),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgDeviceprofileApLedToHclTerraform(struct?: OrgDeviceprofileApLed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brightness: {
      value: cdktf.numberToHclTerraform(struct!.brightness),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApLedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApLed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brightness !== undefined) {
      hasAnyValues = true;
      internalValueResult.brightness = this._brightness;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApLed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brightness = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brightness = value.brightness;
      this._enabled = value.enabled;
    }
  }

  // brightness - computed: true, optional: true, required: false
  private _brightness?: number; 
  public get brightness() {
    return this.getNumberAttribute('brightness');
  }
  public set brightness(value: number) {
    this._brightness = value;
  }
  public resetBrightness() {
    this._brightness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brightnessInput() {
    return this._brightness;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrgDeviceprofileApMesh {
  /**
  * List of bands that the mesh should apply to. For relay, the first viable one will be picked. For relay, the first viable one will be picked. enum: `24`, `5`, `6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#bands OrgDeviceprofileAp#bands}
  */
  readonly bands?: string[];
  /**
  * Whether mesh is enabled on this AP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#enabled OrgDeviceprofileAp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Mesh group, base AP(s) will only allow remote AP(s) in the same mesh group to join, 1-9, optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#group OrgDeviceprofileAp#group}
  */
  readonly group?: number;
  /**
  * enum: `base`, `remote`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#role OrgDeviceprofileAp#role}
  */
  readonly role?: string;
}

export function orgDeviceprofileApMeshToTerraform(struct?: OrgDeviceprofileApMesh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bands),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group: cdktf.numberToTerraform(struct!.group),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function orgDeviceprofileApMeshToHclTerraform(struct?: OrgDeviceprofileApMesh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group: {
      value: cdktf.numberToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApMeshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApMesh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bands !== undefined) {
      hasAnyValues = true;
      internalValueResult.bands = this._bands;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApMesh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bands = undefined;
      this._enabled = undefined;
      this._group = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bands = value.bands;
      this._enabled = value.enabled;
      this._group = value.group;
      this._role = value.role;
    }
  }

  // bands - computed: false, optional: true, required: false
  private _bands?: string[]; 
  public get bands() {
    return this.getListAttribute('bands');
  }
  public set bands(value: string[]) {
    this._bands = value;
  }
  public resetBands() {
    this._bands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandsInput() {
    return this._bands;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group - computed: false, optional: true, required: false
  private _group?: number; 
  public get group() {
    return this.getNumberAttribute('group');
  }
  public set group(value: number) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface OrgDeviceprofileApPortConfigDynamicVlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#default_vlan_id OrgDeviceprofileAp#default_vlan_id}
  */
  readonly defaultVlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#enabled OrgDeviceprofileAp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#type OrgDeviceprofileAp#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#vlans OrgDeviceprofileAp#vlans}
  */
  readonly vlans?: { [key: string]: string };
}

export function orgDeviceprofileApPortConfigDynamicVlanToTerraform(struct?: OrgDeviceprofileApPortConfigDynamicVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_vlan_id: cdktf.numberToTerraform(struct!.defaultVlanId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    type: cdktf.stringToTerraform(struct!.type),
    vlans: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vlans),
  }
}


export function orgDeviceprofileApPortConfigDynamicVlanToHclTerraform(struct?: OrgDeviceprofileApPortConfigDynamicVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.defaultVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlans: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vlans),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApPortConfigDynamicVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApPortConfigDynamicVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVlanId = this._defaultVlanId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApPortConfigDynamicVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultVlanId = undefined;
      this._enabled = undefined;
      this._type = undefined;
      this._vlans = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultVlanId = value.defaultVlanId;
      this._enabled = value.enabled;
      this._type = value.type;
      this._vlans = value.vlans;
    }
  }

  // default_vlan_id - computed: false, optional: true, required: false
  private _defaultVlanId?: number; 
  public get defaultVlanId() {
    return this.getNumberAttribute('default_vlan_id');
  }
  public set defaultVlanId(value: number) {
    this._defaultVlanId = value;
  }
  public resetDefaultVlanId() {
    this._defaultVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVlanIdInput() {
    return this._defaultVlanId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans?: { [key: string]: string }; 
  public get vlans() {
    return this.getStringMapAttribute('vlans');
  }
  public set vlans(value: { [key: string]: string }) {
    this._vlans = value;
  }
  public resetVlans() {
    this._vlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans;
  }
}
export interface OrgDeviceprofileApPortConfigMistNac {
  /**
  * How frequently should interim accounting be reported, 60-65535. default is 0 (use one specified in Access-Accept request from Server). Very frequent messages can affect the performance of the radius server, 600 and up is recommended when enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#acct_interim_interval OrgDeviceprofileAp#acct_interim_interval}
  */
  readonly acctInterimInterval?: number;
  /**
  * Radius auth session retries. Following fast timers are set if `fast_dot1x_timers` knob is enabled. "retries" are set to value of `auth_servers_timeout`. "max-requests" is also set when setting `auth_servers_retries` is set to default value to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#auth_servers_retries OrgDeviceprofileAp#auth_servers_retries}
  */
  readonly authServersRetries?: number;
  /**
  * Radius auth session timeout. Following fast timers are set if `fast_dot1x_timers` knob is enabled. "quite-period" and "transmit-period" are set to half the value of `auth_servers_timeout`. "supplicant-timeout" is also set when setting `auth_servers_timeout` is set to default value of 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#auth_servers_timeout OrgDeviceprofileAp#auth_servers_timeout}
  */
  readonly authServersTimeout?: number;
  /**
  * Allows a RADIUS server to dynamically modify the authorization status of a user session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#coa_enabled OrgDeviceprofileAp#coa_enabled}
  */
  readonly coaEnabled?: boolean | cdktf.IResolvable;
  /**
  * the communication port used for “Change of Authorization” (CoA) messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#coa_port OrgDeviceprofileAp#coa_port}
  */
  readonly coaPort?: number;
  /**
  * When enabled:
  *   * `auth_servers` is ignored
  *   * `acct_servers` is ignored
  *   * `auth_servers_*` are ignored
  *   * `coa_servers` is ignored
  *   * `radsec` is ignored
  *   * `coa_enabled` is assumed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#enabled OrgDeviceprofileAp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If set to true, sets default fast-timers with values calculated from `auth_servers_timeout` and `auth_server_retries`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#fast_dot1x_timers OrgDeviceprofileAp#fast_dot1x_timers}
  */
  readonly fastDot1XTimers?: boolean | cdktf.IResolvable;
  /**
  * Which network the mist nac server resides in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#network OrgDeviceprofileAp#network}
  */
  readonly network?: string;
  /**
  * In case there is a static IP for this network, we can specify it using source ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#source_ip OrgDeviceprofileAp#source_ip}
  */
  readonly sourceIp?: string;
}

export function orgDeviceprofileApPortConfigMistNacToTerraform(struct?: OrgDeviceprofileApPortConfigMistNac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acct_interim_interval: cdktf.numberToTerraform(struct!.acctInterimInterval),
    auth_servers_retries: cdktf.numberToTerraform(struct!.authServersRetries),
    auth_servers_timeout: cdktf.numberToTerraform(struct!.authServersTimeout),
    coa_enabled: cdktf.booleanToTerraform(struct!.coaEnabled),
    coa_port: cdktf.numberToTerraform(struct!.coaPort),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fast_dot1x_timers: cdktf.booleanToTerraform(struct!.fastDot1XTimers),
    network: cdktf.stringToTerraform(struct!.network),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
  }
}


export function orgDeviceprofileApPortConfigMistNacToHclTerraform(struct?: OrgDeviceprofileApPortConfigMistNac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acct_interim_interval: {
      value: cdktf.numberToHclTerraform(struct!.acctInterimInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_servers_retries: {
      value: cdktf.numberToHclTerraform(struct!.authServersRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_servers_timeout: {
      value: cdktf.numberToHclTerraform(struct!.authServersTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    coa_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.coaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    coa_port: {
      value: cdktf.numberToHclTerraform(struct!.coaPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fast_dot1x_timers: {
      value: cdktf.booleanToHclTerraform(struct!.fastDot1XTimers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApPortConfigMistNacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApPortConfigMistNac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acctInterimInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctInterimInterval = this._acctInterimInterval;
    }
    if (this._authServersRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServersRetries = this._authServersRetries;
    }
    if (this._authServersTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServersTimeout = this._authServersTimeout;
    }
    if (this._coaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.coaEnabled = this._coaEnabled;
    }
    if (this._coaPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.coaPort = this._coaPort;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fastDot1XTimers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastDot1XTimers = this._fastDot1XTimers;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApPortConfigMistNac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acctInterimInterval = undefined;
      this._authServersRetries = undefined;
      this._authServersTimeout = undefined;
      this._coaEnabled = undefined;
      this._coaPort = undefined;
      this._enabled = undefined;
      this._fastDot1XTimers = undefined;
      this._network = undefined;
      this._sourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acctInterimInterval = value.acctInterimInterval;
      this._authServersRetries = value.authServersRetries;
      this._authServersTimeout = value.authServersTimeout;
      this._coaEnabled = value.coaEnabled;
      this._coaPort = value.coaPort;
      this._enabled = value.enabled;
      this._fastDot1XTimers = value.fastDot1XTimers;
      this._network = value.network;
      this._sourceIp = value.sourceIp;
    }
  }

  // acct_interim_interval - computed: false, optional: true, required: false
  private _acctInterimInterval?: number; 
  public get acctInterimInterval() {
    return this.getNumberAttribute('acct_interim_interval');
  }
  public set acctInterimInterval(value: number) {
    this._acctInterimInterval = value;
  }
  public resetAcctInterimInterval() {
    this._acctInterimInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctInterimIntervalInput() {
    return this._acctInterimInterval;
  }

  // auth_servers_retries - computed: false, optional: true, required: false
  private _authServersRetries?: number; 
  public get authServersRetries() {
    return this.getNumberAttribute('auth_servers_retries');
  }
  public set authServersRetries(value: number) {
    this._authServersRetries = value;
  }
  public resetAuthServersRetries() {
    this._authServersRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersRetriesInput() {
    return this._authServersRetries;
  }

  // auth_servers_timeout - computed: false, optional: true, required: false
  private _authServersTimeout?: number; 
  public get authServersTimeout() {
    return this.getNumberAttribute('auth_servers_timeout');
  }
  public set authServersTimeout(value: number) {
    this._authServersTimeout = value;
  }
  public resetAuthServersTimeout() {
    this._authServersTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersTimeoutInput() {
    return this._authServersTimeout;
  }

  // coa_enabled - computed: false, optional: true, required: false
  private _coaEnabled?: boolean | cdktf.IResolvable; 
  public get coaEnabled() {
    return this.getBooleanAttribute('coa_enabled');
  }
  public set coaEnabled(value: boolean | cdktf.IResolvable) {
    this._coaEnabled = value;
  }
  public resetCoaEnabled() {
    this._coaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coaEnabledInput() {
    return this._coaEnabled;
  }

  // coa_port - computed: false, optional: true, required: false
  private _coaPort?: number; 
  public get coaPort() {
    return this.getNumberAttribute('coa_port');
  }
  public set coaPort(value: number) {
    this._coaPort = value;
  }
  public resetCoaPort() {
    this._coaPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coaPortInput() {
    return this._coaPort;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fast_dot1x_timers - computed: false, optional: true, required: false
  private _fastDot1XTimers?: boolean | cdktf.IResolvable; 
  public get fastDot1XTimers() {
    return this.getBooleanAttribute('fast_dot1x_timers');
  }
  public set fastDot1XTimers(value: boolean | cdktf.IResolvable) {
    this._fastDot1XTimers = value;
  }
  public resetFastDot1XTimers() {
    this._fastDot1XTimers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastDot1XTimersInput() {
    return this._fastDot1XTimers;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}
export interface OrgDeviceprofileApPortConfigRadiusConfigAcctServers {
  /**
  * IP/ hostname of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#host OrgDeviceprofileAp#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#keywrap_enabled OrgDeviceprofileAp#keywrap_enabled}
  */
  readonly keywrapEnabled?: boolean | cdktf.IResolvable;
  /**
  * enum: `ascii`, `hex`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#keywrap_format OrgDeviceprofileAp#keywrap_format}
  */
  readonly keywrapFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#keywrap_kek OrgDeviceprofileAp#keywrap_kek}
  */
  readonly keywrapKek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#keywrap_mack OrgDeviceprofileAp#keywrap_mack}
  */
  readonly keywrapMack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#port OrgDeviceprofileAp#port}
  */
  readonly port?: string;
  /**
  * Secret of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#secret OrgDeviceprofileAp#secret}
  */
  readonly secret: string;
}

export function orgDeviceprofileApPortConfigRadiusConfigAcctServersToTerraform(struct?: OrgDeviceprofileApPortConfigRadiusConfigAcctServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    keywrap_enabled: cdktf.booleanToTerraform(struct!.keywrapEnabled),
    keywrap_format: cdktf.stringToTerraform(struct!.keywrapFormat),
    keywrap_kek: cdktf.stringToTerraform(struct!.keywrapKek),
    keywrap_mack: cdktf.stringToTerraform(struct!.keywrapMack),
    port: cdktf.stringToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function orgDeviceprofileApPortConfigRadiusConfigAcctServersToHclTerraform(struct?: OrgDeviceprofileApPortConfigRadiusConfigAcctServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.keywrapEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keywrap_format: {
      value: cdktf.stringToHclTerraform(struct!.keywrapFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_kek: {
      value: cdktf.stringToHclTerraform(struct!.keywrapKek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_mack: {
      value: cdktf.stringToHclTerraform(struct!.keywrapMack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApPortConfigRadiusConfigAcctServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrgDeviceprofileApPortConfigRadiusConfigAcctServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keywrapEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapEnabled = this._keywrapEnabled;
    }
    if (this._keywrapFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapFormat = this._keywrapFormat;
    }
    if (this._keywrapKek !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapKek = this._keywrapKek;
    }
    if (this._keywrapMack !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapMack = this._keywrapMack;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApPortConfigRadiusConfigAcctServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._keywrapEnabled = undefined;
      this._keywrapFormat = undefined;
      this._keywrapKek = undefined;
      this._keywrapMack = undefined;
      this._port = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._keywrapEnabled = value.keywrapEnabled;
      this._keywrapFormat = value.keywrapFormat;
      this._keywrapKek = value.keywrapKek;
      this._keywrapMack = value.keywrapMack;
      this._port = value.port;
      this._secret = value.secret;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // keywrap_enabled - computed: false, optional: true, required: false
  private _keywrapEnabled?: boolean | cdktf.IResolvable; 
  public get keywrapEnabled() {
    return this.getBooleanAttribute('keywrap_enabled');
  }
  public set keywrapEnabled(value: boolean | cdktf.IResolvable) {
    this._keywrapEnabled = value;
  }
  public resetKeywrapEnabled() {
    this._keywrapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapEnabledInput() {
    return this._keywrapEnabled;
  }

  // keywrap_format - computed: false, optional: true, required: false
  private _keywrapFormat?: string; 
  public get keywrapFormat() {
    return this.getStringAttribute('keywrap_format');
  }
  public set keywrapFormat(value: string) {
    this._keywrapFormat = value;
  }
  public resetKeywrapFormat() {
    this._keywrapFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapFormatInput() {
    return this._keywrapFormat;
  }

  // keywrap_kek - computed: false, optional: true, required: false
  private _keywrapKek?: string; 
  public get keywrapKek() {
    return this.getStringAttribute('keywrap_kek');
  }
  public set keywrapKek(value: string) {
    this._keywrapKek = value;
  }
  public resetKeywrapKek() {
    this._keywrapKek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapKekInput() {
    return this._keywrapKek;
  }

  // keywrap_mack - computed: false, optional: true, required: false
  private _keywrapMack?: string; 
  public get keywrapMack() {
    return this.getStringAttribute('keywrap_mack');
  }
  public set keywrapMack(value: string) {
    this._keywrapMack = value;
  }
  public resetKeywrapMack() {
    this._keywrapMack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapMackInput() {
    return this._keywrapMack;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class OrgDeviceprofileApPortConfigRadiusConfigAcctServersList extends cdktf.ComplexList {
  public internalValue? : OrgDeviceprofileApPortConfigRadiusConfigAcctServers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgDeviceprofileApPortConfigRadiusConfigAcctServersOutputReference {
    return new OrgDeviceprofileApPortConfigRadiusConfigAcctServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgDeviceprofileApPortConfigRadiusConfigAuthServers {
  /**
  * IP/ hostname of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#host OrgDeviceprofileAp#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#keywrap_enabled OrgDeviceprofileAp#keywrap_enabled}
  */
  readonly keywrapEnabled?: boolean | cdktf.IResolvable;
  /**
  * enum: `ascii`, `hex`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#keywrap_format OrgDeviceprofileAp#keywrap_format}
  */
  readonly keywrapFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#keywrap_kek OrgDeviceprofileAp#keywrap_kek}
  */
  readonly keywrapKek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#keywrap_mack OrgDeviceprofileAp#keywrap_mack}
  */
  readonly keywrapMack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#port OrgDeviceprofileAp#port}
  */
  readonly port?: string;
  /**
  * Whether to require Message-Authenticator in requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#require_message_authenticator OrgDeviceprofileAp#require_message_authenticator}
  */
  readonly requireMessageAuthenticator?: boolean | cdktf.IResolvable;
  /**
  * Secret of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#secret OrgDeviceprofileAp#secret}
  */
  readonly secret: string;
}

export function orgDeviceprofileApPortConfigRadiusConfigAuthServersToTerraform(struct?: OrgDeviceprofileApPortConfigRadiusConfigAuthServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    keywrap_enabled: cdktf.booleanToTerraform(struct!.keywrapEnabled),
    keywrap_format: cdktf.stringToTerraform(struct!.keywrapFormat),
    keywrap_kek: cdktf.stringToTerraform(struct!.keywrapKek),
    keywrap_mack: cdktf.stringToTerraform(struct!.keywrapMack),
    port: cdktf.stringToTerraform(struct!.port),
    require_message_authenticator: cdktf.booleanToTerraform(struct!.requireMessageAuthenticator),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function orgDeviceprofileApPortConfigRadiusConfigAuthServersToHclTerraform(struct?: OrgDeviceprofileApPortConfigRadiusConfigAuthServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.keywrapEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keywrap_format: {
      value: cdktf.stringToHclTerraform(struct!.keywrapFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_kek: {
      value: cdktf.stringToHclTerraform(struct!.keywrapKek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_mack: {
      value: cdktf.stringToHclTerraform(struct!.keywrapMack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_message_authenticator: {
      value: cdktf.booleanToHclTerraform(struct!.requireMessageAuthenticator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApPortConfigRadiusConfigAuthServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrgDeviceprofileApPortConfigRadiusConfigAuthServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keywrapEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapEnabled = this._keywrapEnabled;
    }
    if (this._keywrapFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapFormat = this._keywrapFormat;
    }
    if (this._keywrapKek !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapKek = this._keywrapKek;
    }
    if (this._keywrapMack !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapMack = this._keywrapMack;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._requireMessageAuthenticator !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMessageAuthenticator = this._requireMessageAuthenticator;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApPortConfigRadiusConfigAuthServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._keywrapEnabled = undefined;
      this._keywrapFormat = undefined;
      this._keywrapKek = undefined;
      this._keywrapMack = undefined;
      this._port = undefined;
      this._requireMessageAuthenticator = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._keywrapEnabled = value.keywrapEnabled;
      this._keywrapFormat = value.keywrapFormat;
      this._keywrapKek = value.keywrapKek;
      this._keywrapMack = value.keywrapMack;
      this._port = value.port;
      this._requireMessageAuthenticator = value.requireMessageAuthenticator;
      this._secret = value.secret;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // keywrap_enabled - computed: false, optional: true, required: false
  private _keywrapEnabled?: boolean | cdktf.IResolvable; 
  public get keywrapEnabled() {
    return this.getBooleanAttribute('keywrap_enabled');
  }
  public set keywrapEnabled(value: boolean | cdktf.IResolvable) {
    this._keywrapEnabled = value;
  }
  public resetKeywrapEnabled() {
    this._keywrapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapEnabledInput() {
    return this._keywrapEnabled;
  }

  // keywrap_format - computed: false, optional: true, required: false
  private _keywrapFormat?: string; 
  public get keywrapFormat() {
    return this.getStringAttribute('keywrap_format');
  }
  public set keywrapFormat(value: string) {
    this._keywrapFormat = value;
  }
  public resetKeywrapFormat() {
    this._keywrapFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapFormatInput() {
    return this._keywrapFormat;
  }

  // keywrap_kek - computed: false, optional: true, required: false
  private _keywrapKek?: string; 
  public get keywrapKek() {
    return this.getStringAttribute('keywrap_kek');
  }
  public set keywrapKek(value: string) {
    this._keywrapKek = value;
  }
  public resetKeywrapKek() {
    this._keywrapKek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapKekInput() {
    return this._keywrapKek;
  }

  // keywrap_mack - computed: false, optional: true, required: false
  private _keywrapMack?: string; 
  public get keywrapMack() {
    return this.getStringAttribute('keywrap_mack');
  }
  public set keywrapMack(value: string) {
    this._keywrapMack = value;
  }
  public resetKeywrapMack() {
    this._keywrapMack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapMackInput() {
    return this._keywrapMack;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // require_message_authenticator - computed: true, optional: true, required: false
  private _requireMessageAuthenticator?: boolean | cdktf.IResolvable; 
  public get requireMessageAuthenticator() {
    return this.getBooleanAttribute('require_message_authenticator');
  }
  public set requireMessageAuthenticator(value: boolean | cdktf.IResolvable) {
    this._requireMessageAuthenticator = value;
  }
  public resetRequireMessageAuthenticator() {
    this._requireMessageAuthenticator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMessageAuthenticatorInput() {
    return this._requireMessageAuthenticator;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class OrgDeviceprofileApPortConfigRadiusConfigAuthServersList extends cdktf.ComplexList {
  public internalValue? : OrgDeviceprofileApPortConfigRadiusConfigAuthServers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgDeviceprofileApPortConfigRadiusConfigAuthServersOutputReference {
    return new OrgDeviceprofileApPortConfigRadiusConfigAuthServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgDeviceprofileApPortConfigRadiusConfig {
  /**
  * How frequently should interim accounting be reported, 60-65535. default is 0 (use one specified in Access-Accept request from RADIUS Server). Very frequent messages can affect the performance of the radius server, 600 and up is recommended when enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#acct_interim_interval OrgDeviceprofileAp#acct_interim_interval}
  */
  readonly acctInterimInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#acct_servers OrgDeviceprofileAp#acct_servers}
  */
  readonly acctServers?: OrgDeviceprofileApPortConfigRadiusConfigAcctServers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#auth_servers OrgDeviceprofileAp#auth_servers}
  */
  readonly authServers?: OrgDeviceprofileApPortConfigRadiusConfigAuthServers[] | cdktf.IResolvable;
  /**
  * radius auth session retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#auth_servers_retries OrgDeviceprofileAp#auth_servers_retries}
  */
  readonly authServersRetries?: number;
  /**
  * radius auth session timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#auth_servers_timeout OrgDeviceprofileAp#auth_servers_timeout}
  */
  readonly authServersTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#coa_enabled OrgDeviceprofileAp#coa_enabled}
  */
  readonly coaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#coa_port OrgDeviceprofileAp#coa_port}
  */
  readonly coaPort?: number;
  /**
  * use `network`or `source_ip`, which network the RADIUS server resides, if there's static IP for this network, we'd use it as source-ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#network OrgDeviceprofileAp#network}
  */
  readonly network?: string;
  /**
  * use `network`or `source_ip`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#source_ip OrgDeviceprofileAp#source_ip}
  */
  readonly sourceIp?: string;
}

export function orgDeviceprofileApPortConfigRadiusConfigToTerraform(struct?: OrgDeviceprofileApPortConfigRadiusConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acct_interim_interval: cdktf.numberToTerraform(struct!.acctInterimInterval),
    acct_servers: cdktf.listMapper(orgDeviceprofileApPortConfigRadiusConfigAcctServersToTerraform, false)(struct!.acctServers),
    auth_servers: cdktf.listMapper(orgDeviceprofileApPortConfigRadiusConfigAuthServersToTerraform, false)(struct!.authServers),
    auth_servers_retries: cdktf.numberToTerraform(struct!.authServersRetries),
    auth_servers_timeout: cdktf.numberToTerraform(struct!.authServersTimeout),
    coa_enabled: cdktf.booleanToTerraform(struct!.coaEnabled),
    coa_port: cdktf.numberToTerraform(struct!.coaPort),
    network: cdktf.stringToTerraform(struct!.network),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
  }
}


export function orgDeviceprofileApPortConfigRadiusConfigToHclTerraform(struct?: OrgDeviceprofileApPortConfigRadiusConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acct_interim_interval: {
      value: cdktf.numberToHclTerraform(struct!.acctInterimInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acct_servers: {
      value: cdktf.listMapperHcl(orgDeviceprofileApPortConfigRadiusConfigAcctServersToHclTerraform, false)(struct!.acctServers),
      isBlock: true,
      type: "list",
      storageClassType: "OrgDeviceprofileApPortConfigRadiusConfigAcctServersList",
    },
    auth_servers: {
      value: cdktf.listMapperHcl(orgDeviceprofileApPortConfigRadiusConfigAuthServersToHclTerraform, false)(struct!.authServers),
      isBlock: true,
      type: "list",
      storageClassType: "OrgDeviceprofileApPortConfigRadiusConfigAuthServersList",
    },
    auth_servers_retries: {
      value: cdktf.numberToHclTerraform(struct!.authServersRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_servers_timeout: {
      value: cdktf.numberToHclTerraform(struct!.authServersTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    coa_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.coaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    coa_port: {
      value: cdktf.numberToHclTerraform(struct!.coaPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApPortConfigRadiusConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApPortConfigRadiusConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acctInterimInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctInterimInterval = this._acctInterimInterval;
    }
    if (this._acctServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctServers = this._acctServers?.internalValue;
    }
    if (this._authServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServers = this._authServers?.internalValue;
    }
    if (this._authServersRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServersRetries = this._authServersRetries;
    }
    if (this._authServersTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServersTimeout = this._authServersTimeout;
    }
    if (this._coaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.coaEnabled = this._coaEnabled;
    }
    if (this._coaPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.coaPort = this._coaPort;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApPortConfigRadiusConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acctInterimInterval = undefined;
      this._acctServers.internalValue = undefined;
      this._authServers.internalValue = undefined;
      this._authServersRetries = undefined;
      this._authServersTimeout = undefined;
      this._coaEnabled = undefined;
      this._coaPort = undefined;
      this._network = undefined;
      this._sourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acctInterimInterval = value.acctInterimInterval;
      this._acctServers.internalValue = value.acctServers;
      this._authServers.internalValue = value.authServers;
      this._authServersRetries = value.authServersRetries;
      this._authServersTimeout = value.authServersTimeout;
      this._coaEnabled = value.coaEnabled;
      this._coaPort = value.coaPort;
      this._network = value.network;
      this._sourceIp = value.sourceIp;
    }
  }

  // acct_interim_interval - computed: true, optional: true, required: false
  private _acctInterimInterval?: number; 
  public get acctInterimInterval() {
    return this.getNumberAttribute('acct_interim_interval');
  }
  public set acctInterimInterval(value: number) {
    this._acctInterimInterval = value;
  }
  public resetAcctInterimInterval() {
    this._acctInterimInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctInterimIntervalInput() {
    return this._acctInterimInterval;
  }

  // acct_servers - computed: false, optional: true, required: false
  private _acctServers = new OrgDeviceprofileApPortConfigRadiusConfigAcctServersList(this, "acct_servers", false);
  public get acctServers() {
    return this._acctServers;
  }
  public putAcctServers(value: OrgDeviceprofileApPortConfigRadiusConfigAcctServers[] | cdktf.IResolvable) {
    this._acctServers.internalValue = value;
  }
  public resetAcctServers() {
    this._acctServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctServersInput() {
    return this._acctServers.internalValue;
  }

  // auth_servers - computed: false, optional: true, required: false
  private _authServers = new OrgDeviceprofileApPortConfigRadiusConfigAuthServersList(this, "auth_servers", false);
  public get authServers() {
    return this._authServers;
  }
  public putAuthServers(value: OrgDeviceprofileApPortConfigRadiusConfigAuthServers[] | cdktf.IResolvable) {
    this._authServers.internalValue = value;
  }
  public resetAuthServers() {
    this._authServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersInput() {
    return this._authServers.internalValue;
  }

  // auth_servers_retries - computed: true, optional: true, required: false
  private _authServersRetries?: number; 
  public get authServersRetries() {
    return this.getNumberAttribute('auth_servers_retries');
  }
  public set authServersRetries(value: number) {
    this._authServersRetries = value;
  }
  public resetAuthServersRetries() {
    this._authServersRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersRetriesInput() {
    return this._authServersRetries;
  }

  // auth_servers_timeout - computed: true, optional: true, required: false
  private _authServersTimeout?: number; 
  public get authServersTimeout() {
    return this.getNumberAttribute('auth_servers_timeout');
  }
  public set authServersTimeout(value: number) {
    this._authServersTimeout = value;
  }
  public resetAuthServersTimeout() {
    this._authServersTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersTimeoutInput() {
    return this._authServersTimeout;
  }

  // coa_enabled - computed: true, optional: true, required: false
  private _coaEnabled?: boolean | cdktf.IResolvable; 
  public get coaEnabled() {
    return this.getBooleanAttribute('coa_enabled');
  }
  public set coaEnabled(value: boolean | cdktf.IResolvable) {
    this._coaEnabled = value;
  }
  public resetCoaEnabled() {
    this._coaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coaEnabledInput() {
    return this._coaEnabled;
  }

  // coa_port - computed: true, optional: true, required: false
  private _coaPort?: number; 
  public get coaPort() {
    return this.getNumberAttribute('coa_port');
  }
  public set coaPort(value: number) {
    this._coaPort = value;
  }
  public resetCoaPort() {
    this._coaPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coaPortInput() {
    return this._coaPort;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}
export interface OrgDeviceprofileApPortConfigRadsecServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#host OrgDeviceprofileAp#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#port OrgDeviceprofileAp#port}
  */
  readonly port?: number;
}

export function orgDeviceprofileApPortConfigRadsecServersToTerraform(struct?: OrgDeviceprofileApPortConfigRadsecServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function orgDeviceprofileApPortConfigRadsecServersToHclTerraform(struct?: OrgDeviceprofileApPortConfigRadsecServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApPortConfigRadsecServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrgDeviceprofileApPortConfigRadsecServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApPortConfigRadsecServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class OrgDeviceprofileApPortConfigRadsecServersList extends cdktf.ComplexList {
  public internalValue? : OrgDeviceprofileApPortConfigRadsecServers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgDeviceprofileApPortConfigRadsecServersOutputReference {
    return new OrgDeviceprofileApPortConfigRadsecServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgDeviceprofileApPortConfigRadsec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#coa_enabled OrgDeviceprofileAp#coa_enabled}
  */
  readonly coaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#enabled OrgDeviceprofileAp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#idle_timeout OrgDeviceprofileAp#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * To use Org mxedges when this WLAN does not use mxtunnel, specify their mxcluster_ids. Org mxedge(s) identified by mxcluster_ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#mxcluster_ids OrgDeviceprofileAp#mxcluster_ids}
  */
  readonly mxclusterIds?: string[];
  /**
  * Default is site.mxedge.radsec.proxy_hosts which must be a superset of all `wlans[*].radsec.proxy_hosts`. When `radsec.proxy_hosts` are not used, tunnel peers (org or site mxedges) are used irrespective of `use_site_mxedge`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#proxy_hosts OrgDeviceprofileAp#proxy_hosts}
  */
  readonly proxyHosts?: string[];
  /**
  * Name of the server to verify (against the cacerts in Org Setting). Only if not Mist Edge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#server_name OrgDeviceprofileAp#server_name}
  */
  readonly serverName?: string;
  /**
  * List of RadSec Servers. Only if not Mist Edge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#servers OrgDeviceprofileAp#servers}
  */
  readonly servers?: OrgDeviceprofileApPortConfigRadsecServers[] | cdktf.IResolvable;
  /**
  * use mxedge(s) as RadSec Proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#use_mxedge OrgDeviceprofileAp#use_mxedge}
  */
  readonly useMxedge?: boolean | cdktf.IResolvable;
  /**
  * To use Site mxedges when this WLAN does not use mxtunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#use_site_mxedge OrgDeviceprofileAp#use_site_mxedge}
  */
  readonly useSiteMxedge?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileApPortConfigRadsecToTerraform(struct?: OrgDeviceprofileApPortConfigRadsec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coa_enabled: cdktf.booleanToTerraform(struct!.coaEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    mxcluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mxclusterIds),
    proxy_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyHosts),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    servers: cdktf.listMapper(orgDeviceprofileApPortConfigRadsecServersToTerraform, false)(struct!.servers),
    use_mxedge: cdktf.booleanToTerraform(struct!.useMxedge),
    use_site_mxedge: cdktf.booleanToTerraform(struct!.useSiteMxedge),
  }
}


export function orgDeviceprofileApPortConfigRadsecToHclTerraform(struct?: OrgDeviceprofileApPortConfigRadsec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coa_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.coaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mxcluster_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mxclusterIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    proxy_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(orgDeviceprofileApPortConfigRadsecServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "OrgDeviceprofileApPortConfigRadsecServersList",
    },
    use_mxedge: {
      value: cdktf.booleanToHclTerraform(struct!.useMxedge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_site_mxedge: {
      value: cdktf.booleanToHclTerraform(struct!.useSiteMxedge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApPortConfigRadsecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApPortConfigRadsec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.coaEnabled = this._coaEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._mxclusterIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxclusterIds = this._mxclusterIds;
    }
    if (this._proxyHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHosts = this._proxyHosts;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    if (this._useMxedge !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMxedge = this._useMxedge;
    }
    if (this._useSiteMxedge !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSiteMxedge = this._useSiteMxedge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApPortConfigRadsec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coaEnabled = undefined;
      this._enabled = undefined;
      this._idleTimeout = undefined;
      this._mxclusterIds = undefined;
      this._proxyHosts = undefined;
      this._serverName = undefined;
      this._servers.internalValue = undefined;
      this._useMxedge = undefined;
      this._useSiteMxedge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coaEnabled = value.coaEnabled;
      this._enabled = value.enabled;
      this._idleTimeout = value.idleTimeout;
      this._mxclusterIds = value.mxclusterIds;
      this._proxyHosts = value.proxyHosts;
      this._serverName = value.serverName;
      this._servers.internalValue = value.servers;
      this._useMxedge = value.useMxedge;
      this._useSiteMxedge = value.useSiteMxedge;
    }
  }

  // coa_enabled - computed: true, optional: true, required: false
  private _coaEnabled?: boolean | cdktf.IResolvable; 
  public get coaEnabled() {
    return this.getBooleanAttribute('coa_enabled');
  }
  public set coaEnabled(value: boolean | cdktf.IResolvable) {
    this._coaEnabled = value;
  }
  public resetCoaEnabled() {
    this._coaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coaEnabledInput() {
    return this._coaEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // mxcluster_ids - computed: false, optional: true, required: false
  private _mxclusterIds?: string[]; 
  public get mxclusterIds() {
    return this.getListAttribute('mxcluster_ids');
  }
  public set mxclusterIds(value: string[]) {
    this._mxclusterIds = value;
  }
  public resetMxclusterIds() {
    this._mxclusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxclusterIdsInput() {
    return this._mxclusterIds;
  }

  // proxy_hosts - computed: false, optional: true, required: false
  private _proxyHosts?: string[]; 
  public get proxyHosts() {
    return this.getListAttribute('proxy_hosts');
  }
  public set proxyHosts(value: string[]) {
    this._proxyHosts = value;
  }
  public resetProxyHosts() {
    this._proxyHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHostsInput() {
    return this._proxyHosts;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new OrgDeviceprofileApPortConfigRadsecServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: OrgDeviceprofileApPortConfigRadsecServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // use_mxedge - computed: false, optional: true, required: false
  private _useMxedge?: boolean | cdktf.IResolvable; 
  public get useMxedge() {
    return this.getBooleanAttribute('use_mxedge');
  }
  public set useMxedge(value: boolean | cdktf.IResolvable) {
    this._useMxedge = value;
  }
  public resetUseMxedge() {
    this._useMxedge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMxedgeInput() {
    return this._useMxedge;
  }

  // use_site_mxedge - computed: true, optional: true, required: false
  private _useSiteMxedge?: boolean | cdktf.IResolvable; 
  public get useSiteMxedge() {
    return this.getBooleanAttribute('use_site_mxedge');
  }
  public set useSiteMxedge(value: boolean | cdktf.IResolvable) {
    this._useSiteMxedge = value;
  }
  public resetUseSiteMxedge() {
    this._useSiteMxedge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSiteMxedgeInput() {
    return this._useSiteMxedge;
  }
}
export interface OrgDeviceprofileApPortConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#disabled OrgDeviceprofileAp#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional dynamic vlan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#dynamic_vlan OrgDeviceprofileAp#dynamic_vlan}
  */
  readonly dynamicVlan?: OrgDeviceprofileApPortConfigDynamicVlan;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#enable_mac_auth OrgDeviceprofileAp#enable_mac_auth}
  */
  readonly enableMacAuth?: boolean | cdktf.IResolvable;
  /**
  * enum: 
  *   * `all`: local breakout, All VLANs
  *   * `limited`: local breakout, only the VLANs configured in `port_vlan_id` and `vlan_ids`
  *   * `mxtunnel`: central breakout to an Org Mist Edge (requires `mxtunnel_id`)
  *   * `site_mxedge`: central breakout to a Site Mist Edge (requires `mxtunnel_name`)
  *   * `wxtunnel`': central breakout to an Org WxTunnel (requires `wxtunnel_id`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#forwarding OrgDeviceprofileAp#forwarding}
  */
  readonly forwarding?: string;
  /**
  * When `true`, we'll do dot1x then mac_auth. enable this to prefer mac_auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#mac_auth_preferred OrgDeviceprofileAp#mac_auth_preferred}
  */
  readonly macAuthPreferred?: boolean | cdktf.IResolvable;
  /**
  * if `enable_mac_auth`==`true`, allows user to select an authentication protocol. enum: `eap-md5`, `eap-peap`, `pap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#mac_auth_protocol OrgDeviceprofileAp#mac_auth_protocol}
  */
  readonly macAuthProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#mist_nac OrgDeviceprofileAp#mist_nac}
  */
  readonly mistNac?: OrgDeviceprofileApPortConfigMistNac;
  /**
  * If `forwarding`==`mxtunnel`, vlan_ids comes from mxtunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#mx_tunnel_id OrgDeviceprofileAp#mx_tunnel_id}
  */
  readonly mxTunnelId?: string;
  /**
  * If `forwarding`==`site_mxedge`, vlan_ids comes from site_mxedge (`mxtunnels` under site setting)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#mxtunnel_name OrgDeviceprofileAp#mxtunnel_name}
  */
  readonly mxtunnelName?: string;
  /**
  * When doing port auth. enum: `dot1x`, `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#port_auth OrgDeviceprofileAp#port_auth}
  */
  readonly portAuth?: string;
  /**
  * If `forwarding`==`limited`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#port_vlan_id OrgDeviceprofileAp#port_vlan_id}
  */
  readonly portVlanId?: number;
  /**
  * Junos Radius config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#radius_config OrgDeviceprofileAp#radius_config}
  */
  readonly radiusConfig?: OrgDeviceprofileApPortConfigRadiusConfig;
  /**
  * RadSec settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#radsec OrgDeviceprofileAp#radsec}
  */
  readonly radsec?: OrgDeviceprofileApPortConfigRadsec;
  /**
  * Optional to specify the vlan id for a tunnel if forwarding is for `wxtunnel`, `mxtunnel` or `site_mxedge`.
  *   * if vlan_id is not specified then it will use first one in vlan_ids[] of the mxtunnel.
  *   * if forwarding == site_mxedge, vlan_ids comes from site_mxedge (`mxtunnels` under site setting)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#vlan_id OrgDeviceprofileAp#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * If `forwarding`==`limited`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#vlan_ids OrgDeviceprofileAp#vlan_ids}
  */
  readonly vlanIds?: number[];
  /**
  * If `forwarding`==`wxtunnel`, the port is bridged to the vlan of the session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#wxtunnel_id OrgDeviceprofileAp#wxtunnel_id}
  */
  readonly wxtunnelId?: string;
  /**
  * If `forwarding`==`wxtunnel`, the port is bridged to the vlan of the session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#wxtunnel_remote_id OrgDeviceprofileAp#wxtunnel_remote_id}
  */
  readonly wxtunnelRemoteId?: string;
}

export function orgDeviceprofileApPortConfigToTerraform(struct?: OrgDeviceprofileApPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    dynamic_vlan: orgDeviceprofileApPortConfigDynamicVlanToTerraform(struct!.dynamicVlan),
    enable_mac_auth: cdktf.booleanToTerraform(struct!.enableMacAuth),
    forwarding: cdktf.stringToTerraform(struct!.forwarding),
    mac_auth_preferred: cdktf.booleanToTerraform(struct!.macAuthPreferred),
    mac_auth_protocol: cdktf.stringToTerraform(struct!.macAuthProtocol),
    mist_nac: orgDeviceprofileApPortConfigMistNacToTerraform(struct!.mistNac),
    mx_tunnel_id: cdktf.stringToTerraform(struct!.mxTunnelId),
    mxtunnel_name: cdktf.stringToTerraform(struct!.mxtunnelName),
    port_auth: cdktf.stringToTerraform(struct!.portAuth),
    port_vlan_id: cdktf.numberToTerraform(struct!.portVlanId),
    radius_config: orgDeviceprofileApPortConfigRadiusConfigToTerraform(struct!.radiusConfig),
    radsec: orgDeviceprofileApPortConfigRadsecToTerraform(struct!.radsec),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vlan_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vlanIds),
    wxtunnel_id: cdktf.stringToTerraform(struct!.wxtunnelId),
    wxtunnel_remote_id: cdktf.stringToTerraform(struct!.wxtunnelRemoteId),
  }
}


export function orgDeviceprofileApPortConfigToHclTerraform(struct?: OrgDeviceprofileApPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_vlan: {
      value: orgDeviceprofileApPortConfigDynamicVlanToHclTerraform(struct!.dynamicVlan),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileApPortConfigDynamicVlan",
    },
    enable_mac_auth: {
      value: cdktf.booleanToHclTerraform(struct!.enableMacAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forwarding: {
      value: cdktf.stringToHclTerraform(struct!.forwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_auth_preferred: {
      value: cdktf.booleanToHclTerraform(struct!.macAuthPreferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_auth_protocol: {
      value: cdktf.stringToHclTerraform(struct!.macAuthProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mist_nac: {
      value: orgDeviceprofileApPortConfigMistNacToHclTerraform(struct!.mistNac),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileApPortConfigMistNac",
    },
    mx_tunnel_id: {
      value: cdktf.stringToHclTerraform(struct!.mxTunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mxtunnel_name: {
      value: cdktf.stringToHclTerraform(struct!.mxtunnelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_auth: {
      value: cdktf.stringToHclTerraform(struct!.portAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.portVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_config: {
      value: orgDeviceprofileApPortConfigRadiusConfigToHclTerraform(struct!.radiusConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileApPortConfigRadiusConfig",
    },
    radsec: {
      value: orgDeviceprofileApPortConfigRadsecToHclTerraform(struct!.radsec),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileApPortConfigRadsec",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vlanIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    wxtunnel_id: {
      value: cdktf.stringToHclTerraform(struct!.wxtunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wxtunnel_remote_id: {
      value: cdktf.stringToHclTerraform(struct!.wxtunnelRemoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApPortConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgDeviceprofileApPortConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._dynamicVlan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicVlan = this._dynamicVlan?.internalValue;
    }
    if (this._enableMacAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMacAuth = this._enableMacAuth;
    }
    if (this._forwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwarding = this._forwarding;
    }
    if (this._macAuthPreferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAuthPreferred = this._macAuthPreferred;
    }
    if (this._macAuthProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAuthProtocol = this._macAuthProtocol;
    }
    if (this._mistNac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mistNac = this._mistNac?.internalValue;
    }
    if (this._mxTunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxTunnelId = this._mxTunnelId;
    }
    if (this._mxtunnelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxtunnelName = this._mxtunnelName;
    }
    if (this._portAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.portAuth = this._portAuth;
    }
    if (this._portVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portVlanId = this._portVlanId;
    }
    if (this._radiusConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusConfig = this._radiusConfig?.internalValue;
    }
    if (this._radsec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radsec = this._radsec?.internalValue;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vlanIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanIds = this._vlanIds;
    }
    if (this._wxtunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.wxtunnelId = this._wxtunnelId;
    }
    if (this._wxtunnelRemoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.wxtunnelRemoteId = this._wxtunnelRemoteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApPortConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._dynamicVlan.internalValue = undefined;
      this._enableMacAuth = undefined;
      this._forwarding = undefined;
      this._macAuthPreferred = undefined;
      this._macAuthProtocol = undefined;
      this._mistNac.internalValue = undefined;
      this._mxTunnelId = undefined;
      this._mxtunnelName = undefined;
      this._portAuth = undefined;
      this._portVlanId = undefined;
      this._radiusConfig.internalValue = undefined;
      this._radsec.internalValue = undefined;
      this._vlanId = undefined;
      this._vlanIds = undefined;
      this._wxtunnelId = undefined;
      this._wxtunnelRemoteId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._dynamicVlan.internalValue = value.dynamicVlan;
      this._enableMacAuth = value.enableMacAuth;
      this._forwarding = value.forwarding;
      this._macAuthPreferred = value.macAuthPreferred;
      this._macAuthProtocol = value.macAuthProtocol;
      this._mistNac.internalValue = value.mistNac;
      this._mxTunnelId = value.mxTunnelId;
      this._mxtunnelName = value.mxtunnelName;
      this._portAuth = value.portAuth;
      this._portVlanId = value.portVlanId;
      this._radiusConfig.internalValue = value.radiusConfig;
      this._radsec.internalValue = value.radsec;
      this._vlanId = value.vlanId;
      this._vlanIds = value.vlanIds;
      this._wxtunnelId = value.wxtunnelId;
      this._wxtunnelRemoteId = value.wxtunnelRemoteId;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dynamic_vlan - computed: false, optional: true, required: false
  private _dynamicVlan = new OrgDeviceprofileApPortConfigDynamicVlanOutputReference(this, "dynamic_vlan");
  public get dynamicVlan() {
    return this._dynamicVlan;
  }
  public putDynamicVlan(value: OrgDeviceprofileApPortConfigDynamicVlan) {
    this._dynamicVlan.internalValue = value;
  }
  public resetDynamicVlan() {
    this._dynamicVlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVlanInput() {
    return this._dynamicVlan.internalValue;
  }

  // enable_mac_auth - computed: true, optional: true, required: false
  private _enableMacAuth?: boolean | cdktf.IResolvable; 
  public get enableMacAuth() {
    return this.getBooleanAttribute('enable_mac_auth');
  }
  public set enableMacAuth(value: boolean | cdktf.IResolvable) {
    this._enableMacAuth = value;
  }
  public resetEnableMacAuth() {
    this._enableMacAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMacAuthInput() {
    return this._enableMacAuth;
  }

  // forwarding - computed: true, optional: true, required: false
  private _forwarding?: string; 
  public get forwarding() {
    return this.getStringAttribute('forwarding');
  }
  public set forwarding(value: string) {
    this._forwarding = value;
  }
  public resetForwarding() {
    this._forwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingInput() {
    return this._forwarding;
  }

  // mac_auth_preferred - computed: true, optional: true, required: false
  private _macAuthPreferred?: boolean | cdktf.IResolvable; 
  public get macAuthPreferred() {
    return this.getBooleanAttribute('mac_auth_preferred');
  }
  public set macAuthPreferred(value: boolean | cdktf.IResolvable) {
    this._macAuthPreferred = value;
  }
  public resetMacAuthPreferred() {
    this._macAuthPreferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthPreferredInput() {
    return this._macAuthPreferred;
  }

  // mac_auth_protocol - computed: true, optional: true, required: false
  private _macAuthProtocol?: string; 
  public get macAuthProtocol() {
    return this.getStringAttribute('mac_auth_protocol');
  }
  public set macAuthProtocol(value: string) {
    this._macAuthProtocol = value;
  }
  public resetMacAuthProtocol() {
    this._macAuthProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthProtocolInput() {
    return this._macAuthProtocol;
  }

  // mist_nac - computed: false, optional: true, required: false
  private _mistNac = new OrgDeviceprofileApPortConfigMistNacOutputReference(this, "mist_nac");
  public get mistNac() {
    return this._mistNac;
  }
  public putMistNac(value: OrgDeviceprofileApPortConfigMistNac) {
    this._mistNac.internalValue = value;
  }
  public resetMistNac() {
    this._mistNac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mistNacInput() {
    return this._mistNac.internalValue;
  }

  // mx_tunnel_id - computed: true, optional: true, required: false
  private _mxTunnelId?: string; 
  public get mxTunnelId() {
    return this.getStringAttribute('mx_tunnel_id');
  }
  public set mxTunnelId(value: string) {
    this._mxTunnelId = value;
  }
  public resetMxTunnelId() {
    this._mxTunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxTunnelIdInput() {
    return this._mxTunnelId;
  }

  // mxtunnel_name - computed: true, optional: true, required: false
  private _mxtunnelName?: string; 
  public get mxtunnelName() {
    return this.getStringAttribute('mxtunnel_name');
  }
  public set mxtunnelName(value: string) {
    this._mxtunnelName = value;
  }
  public resetMxtunnelName() {
    this._mxtunnelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxtunnelNameInput() {
    return this._mxtunnelName;
  }

  // port_auth - computed: true, optional: true, required: false
  private _portAuth?: string; 
  public get portAuth() {
    return this.getStringAttribute('port_auth');
  }
  public set portAuth(value: string) {
    this._portAuth = value;
  }
  public resetPortAuth() {
    this._portAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portAuthInput() {
    return this._portAuth;
  }

  // port_vlan_id - computed: false, optional: true, required: false
  private _portVlanId?: number; 
  public get portVlanId() {
    return this.getNumberAttribute('port_vlan_id');
  }
  public set portVlanId(value: number) {
    this._portVlanId = value;
  }
  public resetPortVlanId() {
    this._portVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portVlanIdInput() {
    return this._portVlanId;
  }

  // radius_config - computed: false, optional: true, required: false
  private _radiusConfig = new OrgDeviceprofileApPortConfigRadiusConfigOutputReference(this, "radius_config");
  public get radiusConfig() {
    return this._radiusConfig;
  }
  public putRadiusConfig(value: OrgDeviceprofileApPortConfigRadiusConfig) {
    this._radiusConfig.internalValue = value;
  }
  public resetRadiusConfig() {
    this._radiusConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusConfigInput() {
    return this._radiusConfig.internalValue;
  }

  // radsec - computed: false, optional: true, required: false
  private _radsec = new OrgDeviceprofileApPortConfigRadsecOutputReference(this, "radsec");
  public get radsec() {
    return this._radsec;
  }
  public putRadsec(value: OrgDeviceprofileApPortConfigRadsec) {
    this._radsec.internalValue = value;
  }
  public resetRadsec() {
    this._radsec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecInput() {
    return this._radsec.internalValue;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_ids - computed: false, optional: true, required: false
  private _vlanIds?: number[]; 
  public get vlanIds() {
    return this.getNumberListAttribute('vlan_ids');
  }
  public set vlanIds(value: number[]) {
    this._vlanIds = value;
  }
  public resetVlanIds() {
    this._vlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }

  // wxtunnel_id - computed: true, optional: true, required: false
  private _wxtunnelId?: string; 
  public get wxtunnelId() {
    return this.getStringAttribute('wxtunnel_id');
  }
  public set wxtunnelId(value: string) {
    this._wxtunnelId = value;
  }
  public resetWxtunnelId() {
    this._wxtunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wxtunnelIdInput() {
    return this._wxtunnelId;
  }

  // wxtunnel_remote_id - computed: true, optional: true, required: false
  private _wxtunnelRemoteId?: string; 
  public get wxtunnelRemoteId() {
    return this.getStringAttribute('wxtunnel_remote_id');
  }
  public set wxtunnelRemoteId(value: string) {
    this._wxtunnelRemoteId = value;
  }
  public resetWxtunnelRemoteId() {
    this._wxtunnelRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wxtunnelRemoteIdInput() {
    return this._wxtunnelRemoteId;
  }
}

export class OrgDeviceprofileApPortConfigMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileApPortConfig } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgDeviceprofileApPortConfigOutputReference {
    return new OrgDeviceprofileApPortConfigOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileApPwrConfig {
  /**
  * Additional power to request during negotiating with PSE over PoE, in mW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#base OrgDeviceprofileAp#base}
  */
  readonly base?: number;
  /**
  * Whether to enable power out to peripheral, meanwhile will reduce power to Wi-Fi (only for AP45 at power mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#prefer_usb_over_wifi OrgDeviceprofileAp#prefer_usb_over_wifi}
  */
  readonly preferUsbOverWifi?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileApPwrConfigToTerraform(struct?: OrgDeviceprofileApPwrConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    prefer_usb_over_wifi: cdktf.booleanToTerraform(struct!.preferUsbOverWifi),
  }
}


export function orgDeviceprofileApPwrConfigToHclTerraform(struct?: OrgDeviceprofileApPwrConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.numberToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer_usb_over_wifi: {
      value: cdktf.booleanToHclTerraform(struct!.preferUsbOverWifi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApPwrConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApPwrConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._preferUsbOverWifi !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferUsbOverWifi = this._preferUsbOverWifi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApPwrConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._preferUsbOverWifi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._preferUsbOverWifi = value.preferUsbOverWifi;
    }
  }

  // base - computed: true, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // prefer_usb_over_wifi - computed: true, optional: true, required: false
  private _preferUsbOverWifi?: boolean | cdktf.IResolvable; 
  public get preferUsbOverWifi() {
    return this.getBooleanAttribute('prefer_usb_over_wifi');
  }
  public set preferUsbOverWifi(value: boolean | cdktf.IResolvable) {
    this._preferUsbOverWifi = value;
  }
  public resetPreferUsbOverWifi() {
    this._preferUsbOverWifi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferUsbOverWifiInput() {
    return this._preferUsbOverWifi;
  }
}
export interface OrgDeviceprofileApRadioConfigBand24 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#allow_rrm_disable OrgDeviceprofileAp#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ant_gain OrgDeviceprofileAp#ant_gain}
  */
  readonly antGain?: number;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#antenna_mode OrgDeviceprofileAp#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * channel width for the 2.4GHz band. enum: `0`(disabled, response only), `20`, `40`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#bandwidth OrgDeviceprofileAp#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * For Device. (primary) channel for the band, 0 means using the Site Setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#channel OrgDeviceprofileAp#channel}
  */
  readonly channel?: number;
  /**
  * For RFTemplates. List of channels, null or empty array means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#channels OrgDeviceprofileAp#channels}
  */
  readonly channels?: number[];
  /**
  * Whether to disable the radio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#disabled OrgDeviceprofileAp#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * TX power of the radio. For Devices, 0 means auto. -1 / -2 / -3 / …: treated as 0 / -1 / -2 / …
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power OrgDeviceprofileAp#power}
  */
  readonly power?: number;
  /**
  * When power=0, max tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power_max OrgDeviceprofileAp#power_max}
  */
  readonly powerMax?: number;
  /**
  * When power=0, min tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power_min OrgDeviceprofileAp#power_min}
  */
  readonly powerMin?: number;
  /**
  * enum: `auto`, `long`, `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#preamble OrgDeviceprofileAp#preamble}
  */
  readonly preamble?: string;
}

export function orgDeviceprofileApRadioConfigBand24ToTerraform(struct?: OrgDeviceprofileApRadioConfigBand24 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain: cdktf.numberToTerraform(struct!.antGain),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    channel: cdktf.numberToTerraform(struct!.channel),
    channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.channels),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    power: cdktf.numberToTerraform(struct!.power),
    power_max: cdktf.numberToTerraform(struct!.powerMax),
    power_min: cdktf.numberToTerraform(struct!.powerMin),
    preamble: cdktf.stringToTerraform(struct!.preamble),
  }
}


export function orgDeviceprofileApRadioConfigBand24ToHclTerraform(struct?: OrgDeviceprofileApRadioConfigBand24 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain: {
      value: cdktf.numberToHclTerraform(struct!.antGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel: {
      value: cdktf.numberToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_max: {
      value: cdktf.numberToHclTerraform(struct!.powerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_min: {
      value: cdktf.numberToHclTerraform(struct!.powerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApRadioConfigBand24OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApRadioConfigBand24 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain = this._antGain;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMax = this._powerMax;
    }
    if (this._powerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMin = this._powerMin;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApRadioConfigBand24 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain = undefined;
      this._antennaMode = undefined;
      this._bandwidth = undefined;
      this._channel = undefined;
      this._channels = undefined;
      this._disabled = undefined;
      this._power = undefined;
      this._powerMax = undefined;
      this._powerMin = undefined;
      this._preamble = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain = value.antGain;
      this._antennaMode = value.antennaMode;
      this._bandwidth = value.bandwidth;
      this._channel = value.channel;
      this._channels = value.channels;
      this._disabled = value.disabled;
      this._power = value.power;
      this._powerMax = value.powerMax;
      this._powerMin = value.powerMin;
      this._preamble = value.preamble;
    }
  }

  // allow_rrm_disable - computed: true, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain - computed: true, optional: true, required: false
  private _antGain?: number; 
  public get antGain() {
    return this.getNumberAttribute('ant_gain');
  }
  public set antGain(value: number) {
    this._antGain = value;
  }
  public resetAntGain() {
    this._antGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGainInput() {
    return this._antGain;
  }

  // antenna_mode - computed: true, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: number; 
  public get channel() {
    return this.getNumberAttribute('channel');
  }
  public set channel(value: number) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number[]; 
  public get channels() {
    return this.getNumberListAttribute('channels');
  }
  public set channels(value: number[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // power - computed: true, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_max - computed: true, optional: true, required: false
  private _powerMax?: number; 
  public get powerMax() {
    return this.getNumberAttribute('power_max');
  }
  public set powerMax(value: number) {
    this._powerMax = value;
  }
  public resetPowerMax() {
    this._powerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMaxInput() {
    return this._powerMax;
  }

  // power_min - computed: true, optional: true, required: false
  private _powerMin?: number; 
  public get powerMin() {
    return this.getNumberAttribute('power_min');
  }
  public set powerMin(value: number) {
    this._powerMin = value;
  }
  public resetPowerMin() {
    this._powerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMinInput() {
    return this._powerMin;
  }

  // preamble - computed: true, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }
}
export interface OrgDeviceprofileApRadioConfigBand5 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#allow_rrm_disable OrgDeviceprofileAp#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ant_gain OrgDeviceprofileAp#ant_gain}
  */
  readonly antGain?: number;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#antenna_mode OrgDeviceprofileAp#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * channel width for the 5GHz band. enum: `0`(disabled, response only), `20`, `40`, `80`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#bandwidth OrgDeviceprofileAp#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * For Device. (primary) channel for the band, 0 means using the Site Setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#channel OrgDeviceprofileAp#channel}
  */
  readonly channel?: number;
  /**
  * For RFTemplates. List of channels, null or empty array means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#channels OrgDeviceprofileAp#channels}
  */
  readonly channels?: number[];
  /**
  * Whether to disable the radio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#disabled OrgDeviceprofileAp#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * TX power of the radio. For Devices, 0 means auto. -1 / -2 / -3 / …: treated as 0 / -1 / -2 / …
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power OrgDeviceprofileAp#power}
  */
  readonly power?: number;
  /**
  * When power=0, max tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power_max OrgDeviceprofileAp#power_max}
  */
  readonly powerMax?: number;
  /**
  * When power=0, min tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power_min OrgDeviceprofileAp#power_min}
  */
  readonly powerMin?: number;
  /**
  * enum: `auto`, `long`, `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#preamble OrgDeviceprofileAp#preamble}
  */
  readonly preamble?: string;
}

export function orgDeviceprofileApRadioConfigBand5ToTerraform(struct?: OrgDeviceprofileApRadioConfigBand5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain: cdktf.numberToTerraform(struct!.antGain),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    channel: cdktf.numberToTerraform(struct!.channel),
    channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.channels),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    power: cdktf.numberToTerraform(struct!.power),
    power_max: cdktf.numberToTerraform(struct!.powerMax),
    power_min: cdktf.numberToTerraform(struct!.powerMin),
    preamble: cdktf.stringToTerraform(struct!.preamble),
  }
}


export function orgDeviceprofileApRadioConfigBand5ToHclTerraform(struct?: OrgDeviceprofileApRadioConfigBand5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain: {
      value: cdktf.numberToHclTerraform(struct!.antGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel: {
      value: cdktf.numberToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_max: {
      value: cdktf.numberToHclTerraform(struct!.powerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_min: {
      value: cdktf.numberToHclTerraform(struct!.powerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApRadioConfigBand5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApRadioConfigBand5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain = this._antGain;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMax = this._powerMax;
    }
    if (this._powerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMin = this._powerMin;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApRadioConfigBand5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain = undefined;
      this._antennaMode = undefined;
      this._bandwidth = undefined;
      this._channel = undefined;
      this._channels = undefined;
      this._disabled = undefined;
      this._power = undefined;
      this._powerMax = undefined;
      this._powerMin = undefined;
      this._preamble = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain = value.antGain;
      this._antennaMode = value.antennaMode;
      this._bandwidth = value.bandwidth;
      this._channel = value.channel;
      this._channels = value.channels;
      this._disabled = value.disabled;
      this._power = value.power;
      this._powerMax = value.powerMax;
      this._powerMin = value.powerMin;
      this._preamble = value.preamble;
    }
  }

  // allow_rrm_disable - computed: true, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain - computed: true, optional: true, required: false
  private _antGain?: number; 
  public get antGain() {
    return this.getNumberAttribute('ant_gain');
  }
  public set antGain(value: number) {
    this._antGain = value;
  }
  public resetAntGain() {
    this._antGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGainInput() {
    return this._antGain;
  }

  // antenna_mode - computed: true, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: number; 
  public get channel() {
    return this.getNumberAttribute('channel');
  }
  public set channel(value: number) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number[]; 
  public get channels() {
    return this.getNumberListAttribute('channels');
  }
  public set channels(value: number[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // power - computed: true, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_max - computed: true, optional: true, required: false
  private _powerMax?: number; 
  public get powerMax() {
    return this.getNumberAttribute('power_max');
  }
  public set powerMax(value: number) {
    this._powerMax = value;
  }
  public resetPowerMax() {
    this._powerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMaxInput() {
    return this._powerMax;
  }

  // power_min - computed: true, optional: true, required: false
  private _powerMin?: number; 
  public get powerMin() {
    return this.getNumberAttribute('power_min');
  }
  public set powerMin(value: number) {
    this._powerMin = value;
  }
  public resetPowerMin() {
    this._powerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMinInput() {
    return this._powerMin;
  }

  // preamble - computed: true, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }
}
export interface OrgDeviceprofileApRadioConfigBand5On24Radio {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#allow_rrm_disable OrgDeviceprofileAp#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ant_gain OrgDeviceprofileAp#ant_gain}
  */
  readonly antGain?: number;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#antenna_mode OrgDeviceprofileAp#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * channel width for the 5GHz band. enum: `0`(disabled, response only), `20`, `40`, `80`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#bandwidth OrgDeviceprofileAp#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * For Device. (primary) channel for the band, 0 means using the Site Setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#channel OrgDeviceprofileAp#channel}
  */
  readonly channel?: number;
  /**
  * For RFTemplates. List of channels, null or empty array means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#channels OrgDeviceprofileAp#channels}
  */
  readonly channels?: number[];
  /**
  * Whether to disable the radio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#disabled OrgDeviceprofileAp#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * TX power of the radio. For Devices, 0 means auto. -1 / -2 / -3 / …: treated as 0 / -1 / -2 / …
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power OrgDeviceprofileAp#power}
  */
  readonly power?: number;
  /**
  * When power=0, max tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power_max OrgDeviceprofileAp#power_max}
  */
  readonly powerMax?: number;
  /**
  * When power=0, min tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power_min OrgDeviceprofileAp#power_min}
  */
  readonly powerMin?: number;
  /**
  * enum: `auto`, `long`, `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#preamble OrgDeviceprofileAp#preamble}
  */
  readonly preamble?: string;
}

export function orgDeviceprofileApRadioConfigBand5On24RadioToTerraform(struct?: OrgDeviceprofileApRadioConfigBand5On24Radio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain: cdktf.numberToTerraform(struct!.antGain),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    channel: cdktf.numberToTerraform(struct!.channel),
    channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.channels),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    power: cdktf.numberToTerraform(struct!.power),
    power_max: cdktf.numberToTerraform(struct!.powerMax),
    power_min: cdktf.numberToTerraform(struct!.powerMin),
    preamble: cdktf.stringToTerraform(struct!.preamble),
  }
}


export function orgDeviceprofileApRadioConfigBand5On24RadioToHclTerraform(struct?: OrgDeviceprofileApRadioConfigBand5On24Radio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain: {
      value: cdktf.numberToHclTerraform(struct!.antGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel: {
      value: cdktf.numberToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_max: {
      value: cdktf.numberToHclTerraform(struct!.powerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_min: {
      value: cdktf.numberToHclTerraform(struct!.powerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApRadioConfigBand5On24RadioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApRadioConfigBand5On24Radio | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain = this._antGain;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMax = this._powerMax;
    }
    if (this._powerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMin = this._powerMin;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApRadioConfigBand5On24Radio | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain = undefined;
      this._antennaMode = undefined;
      this._bandwidth = undefined;
      this._channel = undefined;
      this._channels = undefined;
      this._disabled = undefined;
      this._power = undefined;
      this._powerMax = undefined;
      this._powerMin = undefined;
      this._preamble = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain = value.antGain;
      this._antennaMode = value.antennaMode;
      this._bandwidth = value.bandwidth;
      this._channel = value.channel;
      this._channels = value.channels;
      this._disabled = value.disabled;
      this._power = value.power;
      this._powerMax = value.powerMax;
      this._powerMin = value.powerMin;
      this._preamble = value.preamble;
    }
  }

  // allow_rrm_disable - computed: true, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain - computed: true, optional: true, required: false
  private _antGain?: number; 
  public get antGain() {
    return this.getNumberAttribute('ant_gain');
  }
  public set antGain(value: number) {
    this._antGain = value;
  }
  public resetAntGain() {
    this._antGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGainInput() {
    return this._antGain;
  }

  // antenna_mode - computed: true, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: number; 
  public get channel() {
    return this.getNumberAttribute('channel');
  }
  public set channel(value: number) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number[]; 
  public get channels() {
    return this.getNumberListAttribute('channels');
  }
  public set channels(value: number[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // power - computed: true, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_max - computed: true, optional: true, required: false
  private _powerMax?: number; 
  public get powerMax() {
    return this.getNumberAttribute('power_max');
  }
  public set powerMax(value: number) {
    this._powerMax = value;
  }
  public resetPowerMax() {
    this._powerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMaxInput() {
    return this._powerMax;
  }

  // power_min - computed: true, optional: true, required: false
  private _powerMin?: number; 
  public get powerMin() {
    return this.getNumberAttribute('power_min');
  }
  public set powerMin(value: number) {
    this._powerMin = value;
  }
  public resetPowerMin() {
    this._powerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMinInput() {
    return this._powerMin;
  }

  // preamble - computed: true, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }
}
export interface OrgDeviceprofileApRadioConfigBand6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#allow_rrm_disable OrgDeviceprofileAp#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ant_gain OrgDeviceprofileAp#ant_gain}
  */
  readonly antGain?: number;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#antenna_mode OrgDeviceprofileAp#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * channel width for the 6GHz band. enum: `0`(disabled, response only), `20`, `40`, `80`, `160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#bandwidth OrgDeviceprofileAp#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * For Device. (primary) channel for the band, 0 means using the Site Setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#channel OrgDeviceprofileAp#channel}
  */
  readonly channel?: number;
  /**
  * For RFTemplates. List of channels, null or empty array means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#channels OrgDeviceprofileAp#channels}
  */
  readonly channels?: number[];
  /**
  * Whether to disable the radio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#disabled OrgDeviceprofileAp#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * TX power of the radio. For Devices, 0 means auto. -1 / -2 / -3 / …: treated as 0 / -1 / -2 / …
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power OrgDeviceprofileAp#power}
  */
  readonly power?: number;
  /**
  * When power=0, max tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power_max OrgDeviceprofileAp#power_max}
  */
  readonly powerMax?: number;
  /**
  * When power=0, min tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#power_min OrgDeviceprofileAp#power_min}
  */
  readonly powerMin?: number;
  /**
  * enum: `auto`, `long`, `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#preamble OrgDeviceprofileAp#preamble}
  */
  readonly preamble?: string;
  /**
  * For 6GHz Only, standard-power operation, AFC (Automatic Frequency Coordination) will be performed, and we'll fall back to Low Power Indoor if AFC failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#standard_power OrgDeviceprofileAp#standard_power}
  */
  readonly standardPower?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileApRadioConfigBand6ToTerraform(struct?: OrgDeviceprofileApRadioConfigBand6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain: cdktf.numberToTerraform(struct!.antGain),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    channel: cdktf.numberToTerraform(struct!.channel),
    channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.channels),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    power: cdktf.numberToTerraform(struct!.power),
    power_max: cdktf.numberToTerraform(struct!.powerMax),
    power_min: cdktf.numberToTerraform(struct!.powerMin),
    preamble: cdktf.stringToTerraform(struct!.preamble),
    standard_power: cdktf.booleanToTerraform(struct!.standardPower),
  }
}


export function orgDeviceprofileApRadioConfigBand6ToHclTerraform(struct?: OrgDeviceprofileApRadioConfigBand6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain: {
      value: cdktf.numberToHclTerraform(struct!.antGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel: {
      value: cdktf.numberToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_max: {
      value: cdktf.numberToHclTerraform(struct!.powerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_min: {
      value: cdktf.numberToHclTerraform(struct!.powerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_power: {
      value: cdktf.booleanToHclTerraform(struct!.standardPower),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApRadioConfigBand6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApRadioConfigBand6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain = this._antGain;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMax = this._powerMax;
    }
    if (this._powerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMin = this._powerMin;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    if (this._standardPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardPower = this._standardPower;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApRadioConfigBand6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain = undefined;
      this._antennaMode = undefined;
      this._bandwidth = undefined;
      this._channel = undefined;
      this._channels = undefined;
      this._disabled = undefined;
      this._power = undefined;
      this._powerMax = undefined;
      this._powerMin = undefined;
      this._preamble = undefined;
      this._standardPower = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain = value.antGain;
      this._antennaMode = value.antennaMode;
      this._bandwidth = value.bandwidth;
      this._channel = value.channel;
      this._channels = value.channels;
      this._disabled = value.disabled;
      this._power = value.power;
      this._powerMax = value.powerMax;
      this._powerMin = value.powerMin;
      this._preamble = value.preamble;
      this._standardPower = value.standardPower;
    }
  }

  // allow_rrm_disable - computed: true, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain - computed: true, optional: true, required: false
  private _antGain?: number; 
  public get antGain() {
    return this.getNumberAttribute('ant_gain');
  }
  public set antGain(value: number) {
    this._antGain = value;
  }
  public resetAntGain() {
    this._antGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGainInput() {
    return this._antGain;
  }

  // antenna_mode - computed: true, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: number; 
  public get channel() {
    return this.getNumberAttribute('channel');
  }
  public set channel(value: number) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number[]; 
  public get channels() {
    return this.getNumberListAttribute('channels');
  }
  public set channels(value: number[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // power - computed: true, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_max - computed: true, optional: true, required: false
  private _powerMax?: number; 
  public get powerMax() {
    return this.getNumberAttribute('power_max');
  }
  public set powerMax(value: number) {
    this._powerMax = value;
  }
  public resetPowerMax() {
    this._powerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMaxInput() {
    return this._powerMax;
  }

  // power_min - computed: true, optional: true, required: false
  private _powerMin?: number; 
  public get powerMin() {
    return this.getNumberAttribute('power_min');
  }
  public set powerMin(value: number) {
    this._powerMin = value;
  }
  public resetPowerMin() {
    this._powerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMinInput() {
    return this._powerMin;
  }

  // preamble - computed: true, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }

  // standard_power - computed: true, optional: true, required: false
  private _standardPower?: boolean | cdktf.IResolvable; 
  public get standardPower() {
    return this.getBooleanAttribute('standard_power');
  }
  public set standardPower(value: boolean | cdktf.IResolvable) {
    this._standardPower = value;
  }
  public resetStandardPower() {
    this._standardPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardPowerInput() {
    return this._standardPower;
  }
}
export interface OrgDeviceprofileApRadioConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#allow_rrm_disable OrgDeviceprofileAp#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Antenna gain for 2.4G - for models with external antenna only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ant_gain_24 OrgDeviceprofileAp#ant_gain_24}
  */
  readonly antGain24?: number;
  /**
  * Antenna gain for 5G - for models with external antenna only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ant_gain_5 OrgDeviceprofileAp#ant_gain_5}
  */
  readonly antGain5?: number;
  /**
  * Antenna gain for 6G - for models with external antenna only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ant_gain_6 OrgDeviceprofileAp#ant_gain_6}
  */
  readonly antGain6?: number;
  /**
  * Antenna Mode for AP which supports selectable antennas. enum: `external`, `internal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#ant_mode OrgDeviceprofileAp#ant_mode}
  */
  readonly antMode?: string;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#antenna_mode OrgDeviceprofileAp#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * Radio Band AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#band_24 OrgDeviceprofileAp#band_24}
  */
  readonly band24?: OrgDeviceprofileApRadioConfigBand24;
  /**
  * enum: `24`, `5`, `6`, `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#band_24_usage OrgDeviceprofileAp#band_24_usage}
  */
  readonly band24Usage?: string;
  /**
  * Radio Band AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#band_5 OrgDeviceprofileAp#band_5}
  */
  readonly band5?: OrgDeviceprofileApRadioConfigBand5;
  /**
  * Radio Band AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#band_5_on_24_radio OrgDeviceprofileAp#band_5_on_24_radio}
  */
  readonly band5On24Radio?: OrgDeviceprofileApRadioConfigBand5On24Radio;
  /**
  * Radio Band AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#band_6 OrgDeviceprofileAp#band_6}
  */
  readonly band6?: OrgDeviceprofileApRadioConfigBand6;
  /**
  * Let RRM control everything, only the `channels` and `ant_gain` will be honored (i.e. disabled/bandwidth/power/band_24_usage are all controlled by RRM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#full_automatic_rrm OrgDeviceprofileAp#full_automatic_rrm}
  */
  readonly fullAutomaticRrm?: boolean | cdktf.IResolvable;
  /**
  * To make an outdoor operate indoor. For an outdoor-ap, some channels are disallowed by default, this allows the user to use it as an indoor-ap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#indoor_use OrgDeviceprofileAp#indoor_use}
  */
  readonly indoorUse?: boolean | cdktf.IResolvable;
  /**
  * Whether scanning radio is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#scanning_enabled OrgDeviceprofileAp#scanning_enabled}
  */
  readonly scanningEnabled?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileApRadioConfigToTerraform(struct?: OrgDeviceprofileApRadioConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain_24: cdktf.numberToTerraform(struct!.antGain24),
    ant_gain_5: cdktf.numberToTerraform(struct!.antGain5),
    ant_gain_6: cdktf.numberToTerraform(struct!.antGain6),
    ant_mode: cdktf.stringToTerraform(struct!.antMode),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    band_24: orgDeviceprofileApRadioConfigBand24ToTerraform(struct!.band24),
    band_24_usage: cdktf.stringToTerraform(struct!.band24Usage),
    band_5: orgDeviceprofileApRadioConfigBand5ToTerraform(struct!.band5),
    band_5_on_24_radio: orgDeviceprofileApRadioConfigBand5On24RadioToTerraform(struct!.band5On24Radio),
    band_6: orgDeviceprofileApRadioConfigBand6ToTerraform(struct!.band6),
    full_automatic_rrm: cdktf.booleanToTerraform(struct!.fullAutomaticRrm),
    indoor_use: cdktf.booleanToTerraform(struct!.indoorUse),
    scanning_enabled: cdktf.booleanToTerraform(struct!.scanningEnabled),
  }
}


export function orgDeviceprofileApRadioConfigToHclTerraform(struct?: OrgDeviceprofileApRadioConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain_24: {
      value: cdktf.numberToHclTerraform(struct!.antGain24),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ant_gain_5: {
      value: cdktf.numberToHclTerraform(struct!.antGain5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ant_gain_6: {
      value: cdktf.numberToHclTerraform(struct!.antGain6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ant_mode: {
      value: cdktf.stringToHclTerraform(struct!.antMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    band_24: {
      value: orgDeviceprofileApRadioConfigBand24ToHclTerraform(struct!.band24),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileApRadioConfigBand24",
    },
    band_24_usage: {
      value: cdktf.stringToHclTerraform(struct!.band24Usage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    band_5: {
      value: orgDeviceprofileApRadioConfigBand5ToHclTerraform(struct!.band5),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileApRadioConfigBand5",
    },
    band_5_on_24_radio: {
      value: orgDeviceprofileApRadioConfigBand5On24RadioToHclTerraform(struct!.band5On24Radio),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileApRadioConfigBand5On24Radio",
    },
    band_6: {
      value: orgDeviceprofileApRadioConfigBand6ToHclTerraform(struct!.band6),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileApRadioConfigBand6",
    },
    full_automatic_rrm: {
      value: cdktf.booleanToHclTerraform(struct!.fullAutomaticRrm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    indoor_use: {
      value: cdktf.booleanToHclTerraform(struct!.indoorUse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scanning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.scanningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApRadioConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApRadioConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain24 !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain24 = this._antGain24;
    }
    if (this._antGain5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain5 = this._antGain5;
    }
    if (this._antGain6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain6 = this._antGain6;
    }
    if (this._antMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antMode = this._antMode;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._band24?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.band24 = this._band24?.internalValue;
    }
    if (this._band24Usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.band24Usage = this._band24Usage;
    }
    if (this._band5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.band5 = this._band5?.internalValue;
    }
    if (this._band5On24Radio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.band5On24Radio = this._band5On24Radio?.internalValue;
    }
    if (this._band6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.band6 = this._band6?.internalValue;
    }
    if (this._fullAutomaticRrm !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullAutomaticRrm = this._fullAutomaticRrm;
    }
    if (this._indoorUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.indoorUse = this._indoorUse;
    }
    if (this._scanningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanningEnabled = this._scanningEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApRadioConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain24 = undefined;
      this._antGain5 = undefined;
      this._antGain6 = undefined;
      this._antMode = undefined;
      this._antennaMode = undefined;
      this._band24.internalValue = undefined;
      this._band24Usage = undefined;
      this._band5.internalValue = undefined;
      this._band5On24Radio.internalValue = undefined;
      this._band6.internalValue = undefined;
      this._fullAutomaticRrm = undefined;
      this._indoorUse = undefined;
      this._scanningEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain24 = value.antGain24;
      this._antGain5 = value.antGain5;
      this._antGain6 = value.antGain6;
      this._antMode = value.antMode;
      this._antennaMode = value.antennaMode;
      this._band24.internalValue = value.band24;
      this._band24Usage = value.band24Usage;
      this._band5.internalValue = value.band5;
      this._band5On24Radio.internalValue = value.band5On24Radio;
      this._band6.internalValue = value.band6;
      this._fullAutomaticRrm = value.fullAutomaticRrm;
      this._indoorUse = value.indoorUse;
      this._scanningEnabled = value.scanningEnabled;
    }
  }

  // allow_rrm_disable - computed: false, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain_24 - computed: false, optional: true, required: false
  private _antGain24?: number; 
  public get antGain24() {
    return this.getNumberAttribute('ant_gain_24');
  }
  public set antGain24(value: number) {
    this._antGain24 = value;
  }
  public resetAntGain24() {
    this._antGain24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGain24Input() {
    return this._antGain24;
  }

  // ant_gain_5 - computed: false, optional: true, required: false
  private _antGain5?: number; 
  public get antGain5() {
    return this.getNumberAttribute('ant_gain_5');
  }
  public set antGain5(value: number) {
    this._antGain5 = value;
  }
  public resetAntGain5() {
    this._antGain5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGain5Input() {
    return this._antGain5;
  }

  // ant_gain_6 - computed: false, optional: true, required: false
  private _antGain6?: number; 
  public get antGain6() {
    return this.getNumberAttribute('ant_gain_6');
  }
  public set antGain6(value: number) {
    this._antGain6 = value;
  }
  public resetAntGain6() {
    this._antGain6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGain6Input() {
    return this._antGain6;
  }

  // ant_mode - computed: false, optional: true, required: false
  private _antMode?: string; 
  public get antMode() {
    return this.getStringAttribute('ant_mode');
  }
  public set antMode(value: string) {
    this._antMode = value;
  }
  public resetAntMode() {
    this._antMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antModeInput() {
    return this._antMode;
  }

  // antenna_mode - computed: false, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // band_24 - computed: false, optional: true, required: false
  private _band24 = new OrgDeviceprofileApRadioConfigBand24OutputReference(this, "band_24");
  public get band24() {
    return this._band24;
  }
  public putBand24(value: OrgDeviceprofileApRadioConfigBand24) {
    this._band24.internalValue = value;
  }
  public resetBand24() {
    this._band24.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band24Input() {
    return this._band24.internalValue;
  }

  // band_24_usage - computed: false, optional: true, required: false
  private _band24Usage?: string; 
  public get band24Usage() {
    return this.getStringAttribute('band_24_usage');
  }
  public set band24Usage(value: string) {
    this._band24Usage = value;
  }
  public resetBand24Usage() {
    this._band24Usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band24UsageInput() {
    return this._band24Usage;
  }

  // band_5 - computed: false, optional: true, required: false
  private _band5 = new OrgDeviceprofileApRadioConfigBand5OutputReference(this, "band_5");
  public get band5() {
    return this._band5;
  }
  public putBand5(value: OrgDeviceprofileApRadioConfigBand5) {
    this._band5.internalValue = value;
  }
  public resetBand5() {
    this._band5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band5Input() {
    return this._band5.internalValue;
  }

  // band_5_on_24_radio - computed: false, optional: true, required: false
  private _band5On24Radio = new OrgDeviceprofileApRadioConfigBand5On24RadioOutputReference(this, "band_5_on_24_radio");
  public get band5On24Radio() {
    return this._band5On24Radio;
  }
  public putBand5On24Radio(value: OrgDeviceprofileApRadioConfigBand5On24Radio) {
    this._band5On24Radio.internalValue = value;
  }
  public resetBand5On24Radio() {
    this._band5On24Radio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band5On24RadioInput() {
    return this._band5On24Radio.internalValue;
  }

  // band_6 - computed: false, optional: true, required: false
  private _band6 = new OrgDeviceprofileApRadioConfigBand6OutputReference(this, "band_6");
  public get band6() {
    return this._band6;
  }
  public putBand6(value: OrgDeviceprofileApRadioConfigBand6) {
    this._band6.internalValue = value;
  }
  public resetBand6() {
    this._band6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band6Input() {
    return this._band6.internalValue;
  }

  // full_automatic_rrm - computed: true, optional: true, required: false
  private _fullAutomaticRrm?: boolean | cdktf.IResolvable; 
  public get fullAutomaticRrm() {
    return this.getBooleanAttribute('full_automatic_rrm');
  }
  public set fullAutomaticRrm(value: boolean | cdktf.IResolvable) {
    this._fullAutomaticRrm = value;
  }
  public resetFullAutomaticRrm() {
    this._fullAutomaticRrm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullAutomaticRrmInput() {
    return this._fullAutomaticRrm;
  }

  // indoor_use - computed: false, optional: true, required: false
  private _indoorUse?: boolean | cdktf.IResolvable; 
  public get indoorUse() {
    return this.getBooleanAttribute('indoor_use');
  }
  public set indoorUse(value: boolean | cdktf.IResolvable) {
    this._indoorUse = value;
  }
  public resetIndoorUse() {
    this._indoorUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indoorUseInput() {
    return this._indoorUse;
  }

  // scanning_enabled - computed: false, optional: true, required: false
  private _scanningEnabled?: boolean | cdktf.IResolvable; 
  public get scanningEnabled() {
    return this.getBooleanAttribute('scanning_enabled');
  }
  public set scanningEnabled(value: boolean | cdktf.IResolvable) {
    this._scanningEnabled = value;
  }
  public resetScanningEnabled() {
    this._scanningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanningEnabledInput() {
    return this._scanningEnabled;
  }
}
export interface OrgDeviceprofileApUplinkPortConfig {
  /**
  * Whether to do 802.1x against uplink switch. When enabled, AP cert will be used to do EAP-TLS and the Org's CA Cert has to be provisioned at the switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#dot1x OrgDeviceprofileAp#dot1x}
  */
  readonly dot1X?: boolean | cdktf.IResolvable;
  /**
  * By default, WLANs are disabled when uplink is down. In some scenario, like SiteSurvey, one would want the AP to keep sending beacons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#keep_wlans_up_if_down OrgDeviceprofileAp#keep_wlans_up_if_down}
  */
  readonly keepWlansUpIfDown?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileApUplinkPortConfigToTerraform(struct?: OrgDeviceprofileApUplinkPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dot1x: cdktf.booleanToTerraform(struct!.dot1X),
    keep_wlans_up_if_down: cdktf.booleanToTerraform(struct!.keepWlansUpIfDown),
  }
}


export function orgDeviceprofileApUplinkPortConfigToHclTerraform(struct?: OrgDeviceprofileApUplinkPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dot1x: {
      value: cdktf.booleanToHclTerraform(struct!.dot1X),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_wlans_up_if_down: {
      value: cdktf.booleanToHclTerraform(struct!.keepWlansUpIfDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApUplinkPortConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApUplinkPortConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dot1X !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1X = this._dot1X;
    }
    if (this._keepWlansUpIfDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepWlansUpIfDown = this._keepWlansUpIfDown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApUplinkPortConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dot1X = undefined;
      this._keepWlansUpIfDown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dot1X = value.dot1X;
      this._keepWlansUpIfDown = value.keepWlansUpIfDown;
    }
  }

  // dot1x - computed: true, optional: true, required: false
  private _dot1X?: boolean | cdktf.IResolvable; 
  public get dot1X() {
    return this.getBooleanAttribute('dot1x');
  }
  public set dot1X(value: boolean | cdktf.IResolvable) {
    this._dot1X = value;
  }
  public resetDot1X() {
    this._dot1X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XInput() {
    return this._dot1X;
  }

  // keep_wlans_up_if_down - computed: false, optional: true, required: false
  private _keepWlansUpIfDown?: boolean | cdktf.IResolvable; 
  public get keepWlansUpIfDown() {
    return this.getBooleanAttribute('keep_wlans_up_if_down');
  }
  public set keepWlansUpIfDown(value: boolean | cdktf.IResolvable) {
    this._keepWlansUpIfDown = value;
  }
  public resetKeepWlansUpIfDown() {
    this._keepWlansUpIfDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepWlansUpIfDownInput() {
    return this._keepWlansUpIfDown;
  }
}
export interface OrgDeviceprofileApUsbConfig {
  /**
  * Only if `type`==`imagotag`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#cacert OrgDeviceprofileAp#cacert}
  */
  readonly cacert?: string;
  /**
  * Only if `type`==`imagotag`, channel selection, not needed by default, required for manual channel override only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#channel OrgDeviceprofileAp#channel}
  */
  readonly channel?: number;
  /**
  * Whether to enable any usb config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#enabled OrgDeviceprofileAp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Only if `type`==`imagotag`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#host OrgDeviceprofileAp#host}
  */
  readonly host?: string;
  /**
  * Only if `type`==`imagotag`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#port OrgDeviceprofileAp#port}
  */
  readonly port?: number;
  /**
  * usb config type. enum: `hanshow`, `imagotag`, `solum`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#type OrgDeviceprofileAp#type}
  */
  readonly type?: string;
  /**
  * Only if `type`==`imagotag`, whether to turn on SSL verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#verify_cert OrgDeviceprofileAp#verify_cert}
  */
  readonly verifyCert?: boolean | cdktf.IResolvable;
  /**
  * Only if `type`==`solum` or `type`==`hanshow`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#vlan_id OrgDeviceprofileAp#vlan_id}
  */
  readonly vlanId?: number;
}

export function orgDeviceprofileApUsbConfigToTerraform(struct?: OrgDeviceprofileApUsbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacert: cdktf.stringToTerraform(struct!.cacert),
    channel: cdktf.numberToTerraform(struct!.channel),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    type: cdktf.stringToTerraform(struct!.type),
    verify_cert: cdktf.booleanToTerraform(struct!.verifyCert),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function orgDeviceprofileApUsbConfigToHclTerraform(struct?: OrgDeviceprofileApUsbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacert: {
      value: cdktf.stringToHclTerraform(struct!.cacert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.numberToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_cert: {
      value: cdktf.booleanToHclTerraform(struct!.verifyCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileApUsbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileApUsbConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacert = this._cacert;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._verifyCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCert = this._verifyCert;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileApUsbConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacert = undefined;
      this._channel = undefined;
      this._enabled = undefined;
      this._host = undefined;
      this._port = undefined;
      this._type = undefined;
      this._verifyCert = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacert = value.cacert;
      this._channel = value.channel;
      this._enabled = value.enabled;
      this._host = value.host;
      this._port = value.port;
      this._type = value.type;
      this._verifyCert = value.verifyCert;
      this._vlanId = value.vlanId;
    }
  }

  // cacert - computed: true, optional: true, required: false
  private _cacert?: string; 
  public get cacert() {
    return this.getStringAttribute('cacert');
  }
  public set cacert(value: string) {
    this._cacert = value;
  }
  public resetCacert() {
    this._cacert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertInput() {
    return this._cacert;
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: number; 
  public get channel() {
    return this.getNumberAttribute('channel');
  }
  public set channel(value: number) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // verify_cert - computed: false, optional: true, required: false
  private _verifyCert?: boolean | cdktf.IResolvable; 
  public get verifyCert() {
    return this.getBooleanAttribute('verify_cert');
  }
  public set verifyCert(value: boolean | cdktf.IResolvable) {
    this._verifyCert = value;
  }
  public resetVerifyCert() {
    this._verifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertInput() {
    return this._verifyCert;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap mist_org_deviceprofile_ap}
*/
export class OrgDeviceprofileAp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_deviceprofile_ap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgDeviceprofileAp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgDeviceprofileAp to import
  * @param importFromId The id of the existing OrgDeviceprofileAp that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgDeviceprofileAp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_deviceprofile_ap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_deviceprofile_ap mist_org_deviceprofile_ap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgDeviceprofileApConfig
  */
  public constructor(scope: Construct, id: string, config: OrgDeviceprofileApConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_deviceprofile_ap',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aeroscout.internalValue = config.aeroscout;
    this._airista.internalValue = config.airista;
    this._bleConfig.internalValue = config.bleConfig;
    this._disableEth1 = config.disableEth1;
    this._disableEth2 = config.disableEth2;
    this._disableEth3 = config.disableEth3;
    this._disableModule = config.disableModule;
    this._eslConfig.internalValue = config.eslConfig;
    this._ipConfig.internalValue = config.ipConfig;
    this._lacpConfig.internalValue = config.lacpConfig;
    this._led.internalValue = config.led;
    this._mesh.internalValue = config.mesh;
    this._name = config.name;
    this._ntpServers = config.ntpServers;
    this._orgId = config.orgId;
    this._poePassthrough = config.poePassthrough;
    this._portConfig.internalValue = config.portConfig;
    this._pwrConfig.internalValue = config.pwrConfig;
    this._radioConfig.internalValue = config.radioConfig;
    this._siteId = config.siteId;
    this._uplinkPortConfig.internalValue = config.uplinkPortConfig;
    this._usbConfig.internalValue = config.usbConfig;
    this._vars = config.vars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aeroscout - computed: false, optional: true, required: false
  private _aeroscout = new OrgDeviceprofileApAeroscoutOutputReference(this, "aeroscout");
  public get aeroscout() {
    return this._aeroscout;
  }
  public putAeroscout(value: OrgDeviceprofileApAeroscout) {
    this._aeroscout.internalValue = value;
  }
  public resetAeroscout() {
    this._aeroscout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutInput() {
    return this._aeroscout.internalValue;
  }

  // airista - computed: false, optional: true, required: false
  private _airista = new OrgDeviceprofileApAiristaOutputReference(this, "airista");
  public get airista() {
    return this._airista;
  }
  public putAirista(value: OrgDeviceprofileApAirista) {
    this._airista.internalValue = value;
  }
  public resetAirista() {
    this._airista.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airistaInput() {
    return this._airista.internalValue;
  }

  // ble_config - computed: false, optional: true, required: false
  private _bleConfig = new OrgDeviceprofileApBleConfigOutputReference(this, "ble_config");
  public get bleConfig() {
    return this._bleConfig;
  }
  public putBleConfig(value: OrgDeviceprofileApBleConfig) {
    this._bleConfig.internalValue = value;
  }
  public resetBleConfig() {
    this._bleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleConfigInput() {
    return this._bleConfig.internalValue;
  }

  // disable_eth1 - computed: true, optional: true, required: false
  private _disableEth1?: boolean | cdktf.IResolvable; 
  public get disableEth1() {
    return this.getBooleanAttribute('disable_eth1');
  }
  public set disableEth1(value: boolean | cdktf.IResolvable) {
    this._disableEth1 = value;
  }
  public resetDisableEth1() {
    this._disableEth1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEth1Input() {
    return this._disableEth1;
  }

  // disable_eth2 - computed: true, optional: true, required: false
  private _disableEth2?: boolean | cdktf.IResolvable; 
  public get disableEth2() {
    return this.getBooleanAttribute('disable_eth2');
  }
  public set disableEth2(value: boolean | cdktf.IResolvable) {
    this._disableEth2 = value;
  }
  public resetDisableEth2() {
    this._disableEth2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEth2Input() {
    return this._disableEth2;
  }

  // disable_eth3 - computed: true, optional: true, required: false
  private _disableEth3?: boolean | cdktf.IResolvable; 
  public get disableEth3() {
    return this.getBooleanAttribute('disable_eth3');
  }
  public set disableEth3(value: boolean | cdktf.IResolvable) {
    this._disableEth3 = value;
  }
  public resetDisableEth3() {
    this._disableEth3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEth3Input() {
    return this._disableEth3;
  }

  // disable_module - computed: true, optional: true, required: false
  private _disableModule?: boolean | cdktf.IResolvable; 
  public get disableModule() {
    return this.getBooleanAttribute('disable_module');
  }
  public set disableModule(value: boolean | cdktf.IResolvable) {
    this._disableModule = value;
  }
  public resetDisableModule() {
    this._disableModule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableModuleInput() {
    return this._disableModule;
  }

  // esl_config - computed: false, optional: true, required: false
  private _eslConfig = new OrgDeviceprofileApEslConfigOutputReference(this, "esl_config");
  public get eslConfig() {
    return this._eslConfig;
  }
  public putEslConfig(value: OrgDeviceprofileApEslConfig) {
    this._eslConfig.internalValue = value;
  }
  public resetEslConfig() {
    this._eslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eslConfigInput() {
    return this._eslConfig.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_config - computed: false, optional: true, required: false
  private _ipConfig = new OrgDeviceprofileApIpConfigOutputReference(this, "ip_config");
  public get ipConfig() {
    return this._ipConfig;
  }
  public putIpConfig(value: OrgDeviceprofileApIpConfig) {
    this._ipConfig.internalValue = value;
  }
  public resetIpConfig() {
    this._ipConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigInput() {
    return this._ipConfig.internalValue;
  }

  // lacp_config - computed: false, optional: true, required: false
  private _lacpConfig = new OrgDeviceprofileApLacpConfigOutputReference(this, "lacp_config");
  public get lacpConfig() {
    return this._lacpConfig;
  }
  public putLacpConfig(value: OrgDeviceprofileApLacpConfig) {
    this._lacpConfig.internalValue = value;
  }
  public resetLacpConfig() {
    this._lacpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpConfigInput() {
    return this._lacpConfig.internalValue;
  }

  // led - computed: false, optional: true, required: false
  private _led = new OrgDeviceprofileApLedOutputReference(this, "led");
  public get led() {
    return this._led;
  }
  public putLed(value: OrgDeviceprofileApLed) {
    this._led.internalValue = value;
  }
  public resetLed() {
    this._led.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ledInput() {
    return this._led.internalValue;
  }

  // mesh - computed: false, optional: true, required: false
  private _mesh = new OrgDeviceprofileApMeshOutputReference(this, "mesh");
  public get mesh() {
    return this._mesh;
  }
  public putMesh(value: OrgDeviceprofileApMesh) {
    this._mesh.internalValue = value;
  }
  public resetMesh() {
    this._mesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh.internalValue;
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

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // poe_passthrough - computed: true, optional: true, required: false
  private _poePassthrough?: boolean | cdktf.IResolvable; 
  public get poePassthrough() {
    return this.getBooleanAttribute('poe_passthrough');
  }
  public set poePassthrough(value: boolean | cdktf.IResolvable) {
    this._poePassthrough = value;
  }
  public resetPoePassthrough() {
    this._poePassthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePassthroughInput() {
    return this._poePassthrough;
  }

  // port_config - computed: false, optional: true, required: false
  private _portConfig = new OrgDeviceprofileApPortConfigMap(this, "port_config");
  public get portConfig() {
    return this._portConfig;
  }
  public putPortConfig(value: { [key: string]: OrgDeviceprofileApPortConfig } | cdktf.IResolvable) {
    this._portConfig.internalValue = value;
  }
  public resetPortConfig() {
    this._portConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConfigInput() {
    return this._portConfig.internalValue;
  }

  // pwr_config - computed: false, optional: true, required: false
  private _pwrConfig = new OrgDeviceprofileApPwrConfigOutputReference(this, "pwr_config");
  public get pwrConfig() {
    return this._pwrConfig;
  }
  public putPwrConfig(value: OrgDeviceprofileApPwrConfig) {
    this._pwrConfig.internalValue = value;
  }
  public resetPwrConfig() {
    this._pwrConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwrConfigInput() {
    return this._pwrConfig.internalValue;
  }

  // radio_config - computed: false, optional: true, required: false
  private _radioConfig = new OrgDeviceprofileApRadioConfigOutputReference(this, "radio_config");
  public get radioConfig() {
    return this._radioConfig;
  }
  public putRadioConfig(value: OrgDeviceprofileApRadioConfig) {
    this._radioConfig.internalValue = value;
  }
  public resetRadioConfig() {
    this._radioConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioConfigInput() {
    return this._radioConfig.internalValue;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uplink_port_config - computed: false, optional: true, required: false
  private _uplinkPortConfig = new OrgDeviceprofileApUplinkPortConfigOutputReference(this, "uplink_port_config");
  public get uplinkPortConfig() {
    return this._uplinkPortConfig;
  }
  public putUplinkPortConfig(value: OrgDeviceprofileApUplinkPortConfig) {
    this._uplinkPortConfig.internalValue = value;
  }
  public resetUplinkPortConfig() {
    this._uplinkPortConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkPortConfigInput() {
    return this._uplinkPortConfig.internalValue;
  }

  // usb_config - computed: false, optional: true, required: false
  private _usbConfig = new OrgDeviceprofileApUsbConfigOutputReference(this, "usb_config");
  public get usbConfig() {
    return this._usbConfig;
  }
  public putUsbConfig(value: OrgDeviceprofileApUsbConfig) {
    this._usbConfig.internalValue = value;
  }
  public resetUsbConfig() {
    this._usbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbConfigInput() {
    return this._usbConfig.internalValue;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aeroscout: orgDeviceprofileApAeroscoutToTerraform(this._aeroscout.internalValue),
      airista: orgDeviceprofileApAiristaToTerraform(this._airista.internalValue),
      ble_config: orgDeviceprofileApBleConfigToTerraform(this._bleConfig.internalValue),
      disable_eth1: cdktf.booleanToTerraform(this._disableEth1),
      disable_eth2: cdktf.booleanToTerraform(this._disableEth2),
      disable_eth3: cdktf.booleanToTerraform(this._disableEth3),
      disable_module: cdktf.booleanToTerraform(this._disableModule),
      esl_config: orgDeviceprofileApEslConfigToTerraform(this._eslConfig.internalValue),
      ip_config: orgDeviceprofileApIpConfigToTerraform(this._ipConfig.internalValue),
      lacp_config: orgDeviceprofileApLacpConfigToTerraform(this._lacpConfig.internalValue),
      led: orgDeviceprofileApLedToTerraform(this._led.internalValue),
      mesh: orgDeviceprofileApMeshToTerraform(this._mesh.internalValue),
      name: cdktf.stringToTerraform(this._name),
      ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpServers),
      org_id: cdktf.stringToTerraform(this._orgId),
      poe_passthrough: cdktf.booleanToTerraform(this._poePassthrough),
      port_config: cdktf.hashMapper(orgDeviceprofileApPortConfigToTerraform)(this._portConfig.internalValue),
      pwr_config: orgDeviceprofileApPwrConfigToTerraform(this._pwrConfig.internalValue),
      radio_config: orgDeviceprofileApRadioConfigToTerraform(this._radioConfig.internalValue),
      site_id: cdktf.stringToTerraform(this._siteId),
      uplink_port_config: orgDeviceprofileApUplinkPortConfigToTerraform(this._uplinkPortConfig.internalValue),
      usb_config: orgDeviceprofileApUsbConfigToTerraform(this._usbConfig.internalValue),
      vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._vars),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aeroscout: {
        value: orgDeviceprofileApAeroscoutToHclTerraform(this._aeroscout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileApAeroscout",
      },
      airista: {
        value: orgDeviceprofileApAiristaToHclTerraform(this._airista.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileApAirista",
      },
      ble_config: {
        value: orgDeviceprofileApBleConfigToHclTerraform(this._bleConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileApBleConfig",
      },
      disable_eth1: {
        value: cdktf.booleanToHclTerraform(this._disableEth1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_eth2: {
        value: cdktf.booleanToHclTerraform(this._disableEth2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_eth3: {
        value: cdktf.booleanToHclTerraform(this._disableEth3),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_module: {
        value: cdktf.booleanToHclTerraform(this._disableModule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      esl_config: {
        value: orgDeviceprofileApEslConfigToHclTerraform(this._eslConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileApEslConfig",
      },
      ip_config: {
        value: orgDeviceprofileApIpConfigToHclTerraform(this._ipConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileApIpConfig",
      },
      lacp_config: {
        value: orgDeviceprofileApLacpConfigToHclTerraform(this._lacpConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileApLacpConfig",
      },
      led: {
        value: orgDeviceprofileApLedToHclTerraform(this._led.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileApLed",
      },
      mesh: {
        value: orgDeviceprofileApMeshToHclTerraform(this._mesh.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileApMesh",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_passthrough: {
        value: cdktf.booleanToHclTerraform(this._poePassthrough),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_config: {
        value: cdktf.hashMapperHcl(orgDeviceprofileApPortConfigToHclTerraform)(this._portConfig.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgDeviceprofileApPortConfigMap",
      },
      pwr_config: {
        value: orgDeviceprofileApPwrConfigToHclTerraform(this._pwrConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileApPwrConfig",
      },
      radio_config: {
        value: orgDeviceprofileApRadioConfigToHclTerraform(this._radioConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileApRadioConfig",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uplink_port_config: {
        value: orgDeviceprofileApUplinkPortConfigToHclTerraform(this._uplinkPortConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileApUplinkPortConfig",
      },
      usb_config: {
        value: orgDeviceprofileApUsbConfigToHclTerraform(this._usbConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileApUsbConfig",
      },
      vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
