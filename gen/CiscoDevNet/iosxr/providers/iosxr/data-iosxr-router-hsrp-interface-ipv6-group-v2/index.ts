// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface_ipv6_group_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterHsrpInterfaceIpv6GroupV2Config extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface_ipv6_group_v2#device DataIosxrRouterHsrpInterfaceIpv6GroupV2#device}
  */
  readonly device?: string;
  /**
  * group number version 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface_ipv6_group_v2#group_id DataIosxrRouterHsrpInterfaceIpv6GroupV2#group_id}
  */
  readonly groupId: number;
  /**
  * HSRP interface configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface_ipv6_group_v2#interface_name DataIosxrRouterHsrpInterfaceIpv6GroupV2#interface_name}
  */
  readonly interfaceName: string;
}
export interface DataIosxrRouterHsrpInterfaceIpv6GroupV2Addresses {
}

export function dataIosxrRouterHsrpInterfaceIpv6GroupV2AddressesToTerraform(struct?: DataIosxrRouterHsrpInterfaceIpv6GroupV2Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterHsrpInterfaceIpv6GroupV2AddressesToHclTerraform(struct?: DataIosxrRouterHsrpInterfaceIpv6GroupV2Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterHsrpInterfaceIpv6GroupV2AddressesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxrRouterHsrpInterfaceIpv6GroupV2Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterHsrpInterfaceIpv6GroupV2Addresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }
}

export class DataIosxrRouterHsrpInterfaceIpv6GroupV2AddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterHsrpInterfaceIpv6GroupV2AddressesOutputReference {
    return new DataIosxrRouterHsrpInterfaceIpv6GroupV2AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackInterfaces {
}

export function dataIosxrRouterHsrpInterfaceIpv6GroupV2TrackInterfacesToTerraform(struct?: DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterHsrpInterfaceIpv6GroupV2TrackInterfacesToHclTerraform(struct?: DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // priority_decrement - computed: true, optional: false, required: false
  public get priorityDecrement() {
    return this.getNumberAttribute('priority_decrement');
  }

  // track_name - computed: true, optional: false, required: false
  public get trackName() {
    return this.getStringAttribute('track_name');
  }
}

export class DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackInterfacesOutputReference {
    return new DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackObjects {
}

export function dataIosxrRouterHsrpInterfaceIpv6GroupV2TrackObjectsToTerraform(struct?: DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterHsrpInterfaceIpv6GroupV2TrackObjectsToHclTerraform(struct?: DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // priority_decrement - computed: true, optional: false, required: false
  public get priorityDecrement() {
    return this.getNumberAttribute('priority_decrement');
  }
}

export class DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackObjectsOutputReference {
    return new DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface_ipv6_group_v2 iosxr_router_hsrp_interface_ipv6_group_v2}
*/
export class DataIosxrRouterHsrpInterfaceIpv6GroupV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_hsrp_interface_ipv6_group_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterHsrpInterfaceIpv6GroupV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterHsrpInterfaceIpv6GroupV2 to import
  * @param importFromId The id of the existing DataIosxrRouterHsrpInterfaceIpv6GroupV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface_ipv6_group_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterHsrpInterfaceIpv6GroupV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_hsrp_interface_ipv6_group_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_hsrp_interface_ipv6_group_v2 iosxr_router_hsrp_interface_ipv6_group_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterHsrpInterfaceIpv6GroupV2Config
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterHsrpInterfaceIpv6GroupV2Config) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_hsrp_interface_ipv6_group_v2',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
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
    this._device = config.device;
    this._groupId = config.groupId;
    this._interfaceName = config.interfaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_link_local_autoconfig - computed: true, optional: false, required: false
  public get addressLinkLocalAutoconfig() {
    return this.getBooleanAttribute('address_link_local_autoconfig');
  }

  // address_link_local_autoconfig_legacy_compatible - computed: true, optional: false, required: false
  public get addressLinkLocalAutoconfigLegacyCompatible() {
    return this.getBooleanAttribute('address_link_local_autoconfig_legacy_compatible');
  }

  // address_link_local_ipv6_address - computed: true, optional: false, required: false
  public get addressLinkLocalIpv6Address() {
    return this.getStringAttribute('address_link_local_ipv6_address');
  }

  // addresses - computed: true, optional: false, required: false
  private _addresses = new DataIosxrRouterHsrpInterfaceIpv6GroupV2AddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }

  // bfd_fast_detect_peer_interface - computed: true, optional: false, required: false
  public get bfdFastDetectPeerInterface() {
    return this.getStringAttribute('bfd_fast_detect_peer_interface');
  }

  // bfd_fast_detect_peer_ipv6 - computed: true, optional: false, required: false
  public get bfdFastDetectPeerIpv6() {
    return this.getStringAttribute('bfd_fast_detect_peer_ipv6');
  }

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

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // preempt_delay - computed: true, optional: false, required: false
  public get preemptDelay() {
    return this.getNumberAttribute('preempt_delay');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // timers_msec - computed: true, optional: false, required: false
  public get timersMsec() {
    return this.getNumberAttribute('timers_msec');
  }

  // timers_msec_holdtime - computed: true, optional: false, required: false
  public get timersMsecHoldtime() {
    return this.getNumberAttribute('timers_msec_holdtime');
  }

  // timers_seconds - computed: true, optional: false, required: false
  public get timersSeconds() {
    return this.getNumberAttribute('timers_seconds');
  }

  // timers_seconds_holdtime - computed: true, optional: false, required: false
  public get timersSecondsHoldtime() {
    return this.getNumberAttribute('timers_seconds_holdtime');
  }

  // track_interfaces - computed: true, optional: false, required: false
  private _trackInterfaces = new DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackInterfacesList(this, "track_interfaces", false);
  public get trackInterfaces() {
    return this._trackInterfaces;
  }

  // track_objects - computed: true, optional: false, required: false
  private _trackObjects = new DataIosxrRouterHsrpInterfaceIpv6GroupV2TrackObjectsList(this, "track_objects", false);
  public get trackObjects() {
    return this._trackObjects;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      group_id: cdktf.numberToTerraform(this._groupId),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
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
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
