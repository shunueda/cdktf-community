// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerHotspot20H2QposuproviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#device_name WirelesscontrollerHotspot20H2Qposuprovider#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#device_vdom WirelesscontrollerHotspot20H2Qposuprovider#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#dynamic_sort_subtable WirelesscontrollerHotspot20H2Qposuprovider#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#icon WirelesscontrollerHotspot20H2Qposuprovider#icon}
  */
  readonly icon?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#id WirelesscontrollerHotspot20H2Qposuprovider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#name WirelesscontrollerHotspot20H2Qposuprovider#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#osu_method WirelesscontrollerHotspot20H2Qposuprovider#osu_method}
  */
  readonly osuMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#osu_nai WirelesscontrollerHotspot20H2Qposuprovider#osu_nai}
  */
  readonly osuNai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#server_uri WirelesscontrollerHotspot20H2Qposuprovider#server_uri}
  */
  readonly serverUri?: string;
  /**
  * friendly_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#friendly_name WirelesscontrollerHotspot20H2Qposuprovider#friendly_name}
  */
  readonly friendlyName?: WirelesscontrollerHotspot20H2QposuproviderFriendlyName[] | cdktf.IResolvable;
  /**
  * service_description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#service_description WirelesscontrollerHotspot20H2Qposuprovider#service_description}
  */
  readonly serviceDescription?: WirelesscontrollerHotspot20H2QposuproviderServiceDescription[] | cdktf.IResolvable;
}
export interface WirelesscontrollerHotspot20H2QposuproviderFriendlyName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#friendly_name WirelesscontrollerHotspot20H2Qposuprovider#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#index WirelesscontrollerHotspot20H2Qposuprovider#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#lang WirelesscontrollerHotspot20H2Qposuprovider#lang}
  */
  readonly lang?: string;
}

export function wirelesscontrollerHotspot20H2QposuproviderFriendlyNameToTerraform(struct?: WirelesscontrollerHotspot20H2QposuproviderFriendlyName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    friendly_name: cdktf.stringToTerraform(struct!.friendlyName),
    index: cdktf.numberToTerraform(struct!.index),
    lang: cdktf.stringToTerraform(struct!.lang),
  }
}


export function wirelesscontrollerHotspot20H2QposuproviderFriendlyNameToHclTerraform(struct?: WirelesscontrollerHotspot20H2QposuproviderFriendlyName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    friendly_name: {
      value: cdktf.stringToHclTerraform(struct!.friendlyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lang: {
      value: cdktf.stringToHclTerraform(struct!.lang),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerHotspot20H2QposuproviderFriendlyNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerHotspot20H2QposuproviderFriendlyName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._friendlyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.friendlyName = this._friendlyName;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._lang !== undefined) {
      hasAnyValues = true;
      internalValueResult.lang = this._lang;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerHotspot20H2QposuproviderFriendlyName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._friendlyName = undefined;
      this._index = undefined;
      this._lang = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._friendlyName = value.friendlyName;
      this._index = value.index;
      this._lang = value.lang;
    }
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // lang - computed: true, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }
}

export class WirelesscontrollerHotspot20H2QposuproviderFriendlyNameList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerHotspot20H2QposuproviderFriendlyName[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerHotspot20H2QposuproviderFriendlyNameOutputReference {
    return new WirelesscontrollerHotspot20H2QposuproviderFriendlyNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerHotspot20H2QposuproviderServiceDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#lang WirelesscontrollerHotspot20H2Qposuprovider#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#service_description WirelesscontrollerHotspot20H2Qposuprovider#service_description}
  */
  readonly serviceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#service_id WirelesscontrollerHotspot20H2Qposuprovider#service_id}
  */
  readonly serviceId?: number;
}

export function wirelesscontrollerHotspot20H2QposuproviderServiceDescriptionToTerraform(struct?: WirelesscontrollerHotspot20H2QposuproviderServiceDescription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lang: cdktf.stringToTerraform(struct!.lang),
    service_description: cdktf.stringToTerraform(struct!.serviceDescription),
    service_id: cdktf.numberToTerraform(struct!.serviceId),
  }
}


export function wirelesscontrollerHotspot20H2QposuproviderServiceDescriptionToHclTerraform(struct?: WirelesscontrollerHotspot20H2QposuproviderServiceDescription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lang: {
      value: cdktf.stringToHclTerraform(struct!.lang),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_description: {
      value: cdktf.stringToHclTerraform(struct!.serviceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.numberToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerHotspot20H2QposuproviderServiceDescriptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerHotspot20H2QposuproviderServiceDescription | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lang !== undefined) {
      hasAnyValues = true;
      internalValueResult.lang = this._lang;
    }
    if (this._serviceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDescription = this._serviceDescription;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerHotspot20H2QposuproviderServiceDescription | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lang = undefined;
      this._serviceDescription = undefined;
      this._serviceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lang = value.lang;
      this._serviceDescription = value.serviceDescription;
      this._serviceId = value.serviceId;
    }
  }

  // lang - computed: true, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // service_description - computed: false, optional: true, required: false
  private _serviceDescription?: string; 
  public get serviceDescription() {
    return this.getStringAttribute('service_description');
  }
  public set serviceDescription(value: string) {
    this._serviceDescription = value;
  }
  public resetServiceDescription() {
    this._serviceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDescriptionInput() {
    return this._serviceDescription;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: number; 
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
  public set serviceId(value: number) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }
}

export class WirelesscontrollerHotspot20H2QposuproviderServiceDescriptionList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerHotspot20H2QposuproviderServiceDescription[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerHotspot20H2QposuproviderServiceDescriptionOutputReference {
    return new WirelesscontrollerHotspot20H2QposuproviderServiceDescriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider fmgdevice_wirelesscontroller_hotspot20_h2qposuprovider}
*/
export class WirelesscontrollerHotspot20H2Qposuprovider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_hotspot20_h2qposuprovider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerHotspot20H2Qposuprovider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerHotspot20H2Qposuprovider to import
  * @param importFromId The id of the existing WirelesscontrollerHotspot20H2Qposuprovider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerHotspot20H2Qposuprovider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_hotspot20_h2qposuprovider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovider fmgdevice_wirelesscontroller_hotspot20_h2qposuprovider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerHotspot20H2QposuproviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerHotspot20H2QposuproviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_hotspot20_h2qposuprovider',
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
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._icon = config.icon;
    this._id = config.id;
    this._name = config.name;
    this._osuMethod = config.osuMethod;
    this._osuNai = config.osuNai;
    this._serverUri = config.serverUri;
    this._friendlyName.internalValue = config.friendlyName;
    this._serviceDescription.internalValue = config.serviceDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // icon - computed: true, optional: true, required: false
  private _icon?: string[]; 
  public get icon() {
    return cdktf.Fn.tolist(this.getListAttribute('icon'));
  }
  public set icon(value: string[]) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // osu_method - computed: true, optional: true, required: false
  private _osuMethod?: string[]; 
  public get osuMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('osu_method'));
  }
  public set osuMethod(value: string[]) {
    this._osuMethod = value;
  }
  public resetOsuMethod() {
    this._osuMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osuMethodInput() {
    return this._osuMethod;
  }

  // osu_nai - computed: false, optional: true, required: false
  private _osuNai?: string; 
  public get osuNai() {
    return this.getStringAttribute('osu_nai');
  }
  public set osuNai(value: string) {
    this._osuNai = value;
  }
  public resetOsuNai() {
    this._osuNai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osuNaiInput() {
    return this._osuNai;
  }

  // server_uri - computed: false, optional: true, required: false
  private _serverUri?: string; 
  public get serverUri() {
    return this.getStringAttribute('server_uri');
  }
  public set serverUri(value: string) {
    this._serverUri = value;
  }
  public resetServerUri() {
    this._serverUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUriInput() {
    return this._serverUri;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName = new WirelesscontrollerHotspot20H2QposuproviderFriendlyNameList(this, "friendly_name", false);
  public get friendlyName() {
    return this._friendlyName;
  }
  public putFriendlyName(value: WirelesscontrollerHotspot20H2QposuproviderFriendlyName[] | cdktf.IResolvable) {
    this._friendlyName.internalValue = value;
  }
  public resetFriendlyName() {
    this._friendlyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName.internalValue;
  }

  // service_description - computed: false, optional: true, required: false
  private _serviceDescription = new WirelesscontrollerHotspot20H2QposuproviderServiceDescriptionList(this, "service_description", false);
  public get serviceDescription() {
    return this._serviceDescription;
  }
  public putServiceDescription(value: WirelesscontrollerHotspot20H2QposuproviderServiceDescription[] | cdktf.IResolvable) {
    this._serviceDescription.internalValue = value;
  }
  public resetServiceDescription() {
    this._serviceDescription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDescriptionInput() {
    return this._serviceDescription.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      icon: cdktf.listMapper(cdktf.stringToTerraform, false)(this._icon),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      osu_method: cdktf.listMapper(cdktf.stringToTerraform, false)(this._osuMethod),
      osu_nai: cdktf.stringToTerraform(this._osuNai),
      server_uri: cdktf.stringToTerraform(this._serverUri),
      friendly_name: cdktf.listMapper(wirelesscontrollerHotspot20H2QposuproviderFriendlyNameToTerraform, true)(this._friendlyName.internalValue),
      service_description: cdktf.listMapper(wirelesscontrollerHotspot20H2QposuproviderServiceDescriptionToTerraform, true)(this._serviceDescription.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._icon),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      osu_method: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._osuMethod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      osu_nai: {
        value: cdktf.stringToHclTerraform(this._osuNai),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_uri: {
        value: cdktf.stringToHclTerraform(this._serverUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.listMapperHcl(wirelesscontrollerHotspot20H2QposuproviderFriendlyNameToHclTerraform, true)(this._friendlyName.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerHotspot20H2QposuproviderFriendlyNameList",
      },
      service_description: {
        value: cdktf.listMapperHcl(wirelesscontrollerHotspot20H2QposuproviderServiceDescriptionToHclTerraform, true)(this._serviceDescription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerHotspot20H2QposuproviderServiceDescriptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
