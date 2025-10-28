// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#device Zone#device}
  */
  readonly device?: string;
  /**
  * Device acl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#device_acl Zone#device_acl}
  */
  readonly deviceAcl?: ZoneDeviceAcl;
  /**
  * Dos log setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#dos_log_setting Zone#dos_log_setting}
  */
  readonly dosLogSetting?: string;
  /**
  * Dos profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#dos_profile Zone#dos_profile}
  */
  readonly dosProfile?: string;
  /**
  * Enable device identification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#enable_device_identification Zone#enable_device_identification}
  */
  readonly enableDeviceIdentification?: boolean | cdktf.IResolvable;
  /**
  * Enable user identification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#enable_user_identification Zone#enable_user_identification}
  */
  readonly enableUserIdentification?: boolean | cdktf.IResolvable;
  /**
  * Folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#folder Zone#folder}
  */
  readonly folder?: string;
  /**
  * Alphanumeric string begin with letter: [0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#name Zone#name}
  */
  readonly name: string;
  /**
  * Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#network Zone#network}
  */
  readonly network?: ZoneNetwork;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#snippet Zone#snippet}
  */
  readonly snippet?: string;
  /**
  * User acl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#user_acl Zone#user_acl}
  */
  readonly userAcl?: ZoneUserAcl;
}
export interface ZoneDeviceAcl {
  /**
  * Exclude list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#exclude_list Zone#exclude_list}
  */
  readonly excludeList?: string[];
  /**
  * Include list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#include_list Zone#include_list}
  */
  readonly includeList?: string[];
}

export function zoneDeviceAclToTerraform(struct?: ZoneDeviceAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeList),
    include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeList),
  }
}


export function zoneDeviceAclToHclTerraform(struct?: ZoneDeviceAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneDeviceAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneDeviceAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList;
    }
    if (this._includeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeList = this._includeList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneDeviceAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeList = undefined;
      this._includeList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeList = value.excludeList;
      this._includeList = value.includeList;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList?: string[]; 
  public get excludeList() {
    return this.getListAttribute('exclude_list');
  }
  public set excludeList(value: string[]) {
    this._excludeList = value;
  }
  public resetExcludeList() {
    this._excludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList;
  }

  // include_list - computed: false, optional: true, required: false
  private _includeList?: string[]; 
  public get includeList() {
    return this.getListAttribute('include_list');
  }
  public set includeList(value: string[]) {
    this._includeList = value;
  }
  public resetIncludeList() {
    this._includeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeListInput() {
    return this._includeList;
  }
}
export interface ZoneNetwork {
  /**
  * Enable packet buffer protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#enable_packet_buffer_protection Zone#enable_packet_buffer_protection}
  */
  readonly enablePacketBufferProtection?: boolean | cdktf.IResolvable;
  /**
  * Log setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#log_setting Zone#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Zone protection profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#zone_protection_profile Zone#zone_protection_profile}
  */
  readonly zoneProtectionProfile?: string;
}

export function zoneNetworkToTerraform(struct?: ZoneNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_packet_buffer_protection: cdktf.booleanToTerraform(struct!.enablePacketBufferProtection),
    log_setting: cdktf.stringToTerraform(struct!.logSetting),
    zone_protection_profile: cdktf.stringToTerraform(struct!.zoneProtectionProfile),
  }
}


export function zoneNetworkToHclTerraform(struct?: ZoneNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_packet_buffer_protection: {
      value: cdktf.booleanToHclTerraform(struct!.enablePacketBufferProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_setting: {
      value: cdktf.stringToHclTerraform(struct!.logSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_protection_profile: {
      value: cdktf.stringToHclTerraform(struct!.zoneProtectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePacketBufferProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePacketBufferProtection = this._enablePacketBufferProtection;
    }
    if (this._logSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetting = this._logSetting;
    }
    if (this._zoneProtectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneProtectionProfile = this._zoneProtectionProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablePacketBufferProtection = undefined;
      this._logSetting = undefined;
      this._zoneProtectionProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablePacketBufferProtection = value.enablePacketBufferProtection;
      this._logSetting = value.logSetting;
      this._zoneProtectionProfile = value.zoneProtectionProfile;
    }
  }

  // enable_packet_buffer_protection - computed: false, optional: true, required: false
  private _enablePacketBufferProtection?: boolean | cdktf.IResolvable; 
  public get enablePacketBufferProtection() {
    return this.getBooleanAttribute('enable_packet_buffer_protection');
  }
  public set enablePacketBufferProtection(value: boolean | cdktf.IResolvable) {
    this._enablePacketBufferProtection = value;
  }
  public resetEnablePacketBufferProtection() {
    this._enablePacketBufferProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePacketBufferProtectionInput() {
    return this._enablePacketBufferProtection;
  }

  // log_setting - computed: false, optional: true, required: false
  private _logSetting?: string; 
  public get logSetting() {
    return this.getStringAttribute('log_setting');
  }
  public set logSetting(value: string) {
    this._logSetting = value;
  }
  public resetLogSetting() {
    this._logSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingInput() {
    return this._logSetting;
  }

  // zone_protection_profile - computed: false, optional: true, required: false
  private _zoneProtectionProfile?: string; 
  public get zoneProtectionProfile() {
    return this.getStringAttribute('zone_protection_profile');
  }
  public set zoneProtectionProfile(value: string) {
    this._zoneProtectionProfile = value;
  }
  public resetZoneProtectionProfile() {
    this._zoneProtectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneProtectionProfileInput() {
    return this._zoneProtectionProfile;
  }
}
export interface ZoneUserAcl {
  /**
  * Exclude list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#exclude_list Zone#exclude_list}
  */
  readonly excludeList?: string[];
  /**
  * Include list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#include_list Zone#include_list}
  */
  readonly includeList?: string[];
}

export function zoneUserAclToTerraform(struct?: ZoneUserAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeList),
    include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeList),
  }
}


export function zoneUserAclToHclTerraform(struct?: ZoneUserAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneUserAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneUserAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList;
    }
    if (this._includeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeList = this._includeList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneUserAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeList = undefined;
      this._includeList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeList = value.excludeList;
      this._includeList = value.includeList;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList?: string[]; 
  public get excludeList() {
    return this.getListAttribute('exclude_list');
  }
  public set excludeList(value: string[]) {
    this._excludeList = value;
  }
  public resetExcludeList() {
    this._excludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList;
  }

  // include_list - computed: false, optional: true, required: false
  private _includeList?: string[]; 
  public get includeList() {
    return this.getListAttribute('include_list');
  }
  public set includeList(value: string[]) {
    this._includeList = value;
  }
  public resetIncludeList() {
    this._includeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeListInput() {
    return this._includeList;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone scm_zone}
*/
export class Zone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Zone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Zone to import
  * @param importFromId The id of the existing Zone that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Zone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/zone scm_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_zone',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._deviceAcl.internalValue = config.deviceAcl;
    this._dosLogSetting = config.dosLogSetting;
    this._dosProfile = config.dosProfile;
    this._enableDeviceIdentification = config.enableDeviceIdentification;
    this._enableUserIdentification = config.enableUserIdentification;
    this._folder = config.folder;
    this._name = config.name;
    this._network.internalValue = config.network;
    this._snippet = config.snippet;
    this._userAcl.internalValue = config.userAcl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // device_acl - computed: false, optional: true, required: false
  private _deviceAcl = new ZoneDeviceAclOutputReference(this, "device_acl");
  public get deviceAcl() {
    return this._deviceAcl;
  }
  public putDeviceAcl(value: ZoneDeviceAcl) {
    this._deviceAcl.internalValue = value;
  }
  public resetDeviceAcl() {
    this._deviceAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAclInput() {
    return this._deviceAcl.internalValue;
  }

  // dos_log_setting - computed: false, optional: true, required: false
  private _dosLogSetting?: string; 
  public get dosLogSetting() {
    return this.getStringAttribute('dos_log_setting');
  }
  public set dosLogSetting(value: string) {
    this._dosLogSetting = value;
  }
  public resetDosLogSetting() {
    this._dosLogSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosLogSettingInput() {
    return this._dosLogSetting;
  }

  // dos_profile - computed: false, optional: true, required: false
  private _dosProfile?: string; 
  public get dosProfile() {
    return this.getStringAttribute('dos_profile');
  }
  public set dosProfile(value: string) {
    this._dosProfile = value;
  }
  public resetDosProfile() {
    this._dosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosProfileInput() {
    return this._dosProfile;
  }

  // enable_device_identification - computed: false, optional: true, required: false
  private _enableDeviceIdentification?: boolean | cdktf.IResolvable; 
  public get enableDeviceIdentification() {
    return this.getBooleanAttribute('enable_device_identification');
  }
  public set enableDeviceIdentification(value: boolean | cdktf.IResolvable) {
    this._enableDeviceIdentification = value;
  }
  public resetEnableDeviceIdentification() {
    this._enableDeviceIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeviceIdentificationInput() {
    return this._enableDeviceIdentification;
  }

  // enable_user_identification - computed: false, optional: true, required: false
  private _enableUserIdentification?: boolean | cdktf.IResolvable; 
  public get enableUserIdentification() {
    return this.getBooleanAttribute('enable_user_identification');
  }
  public set enableUserIdentification(value: boolean | cdktf.IResolvable) {
    this._enableUserIdentification = value;
  }
  public resetEnableUserIdentification() {
    this._enableUserIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUserIdentificationInput() {
    return this._enableUserIdentification;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network - computed: false, optional: true, required: false
  private _network = new ZoneNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ZoneNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // user_acl - computed: false, optional: true, required: false
  private _userAcl = new ZoneUserAclOutputReference(this, "user_acl");
  public get userAcl() {
    return this._userAcl;
  }
  public putUserAcl(value: ZoneUserAcl) {
    this._userAcl.internalValue = value;
  }
  public resetUserAcl() {
    this._userAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAclInput() {
    return this._userAcl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      device_acl: zoneDeviceAclToTerraform(this._deviceAcl.internalValue),
      dos_log_setting: cdktf.stringToTerraform(this._dosLogSetting),
      dos_profile: cdktf.stringToTerraform(this._dosProfile),
      enable_device_identification: cdktf.booleanToTerraform(this._enableDeviceIdentification),
      enable_user_identification: cdktf.booleanToTerraform(this._enableUserIdentification),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      network: zoneNetworkToTerraform(this._network.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
      user_acl: zoneUserAclToTerraform(this._userAcl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_acl: {
        value: zoneDeviceAclToHclTerraform(this._deviceAcl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneDeviceAcl",
      },
      dos_log_setting: {
        value: cdktf.stringToHclTerraform(this._dosLogSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dos_profile: {
        value: cdktf.stringToHclTerraform(this._dosProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_device_identification: {
        value: cdktf.booleanToHclTerraform(this._enableDeviceIdentification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_user_identification: {
        value: cdktf.booleanToHclTerraform(this._enableUserIdentification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      network: {
        value: zoneNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneNetwork",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_acl: {
        value: zoneUserAclToHclTerraform(this._userAcl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneUserAcl",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
