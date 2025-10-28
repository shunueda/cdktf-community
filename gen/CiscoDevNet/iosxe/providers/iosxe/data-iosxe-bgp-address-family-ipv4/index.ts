// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_ipv4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeBgpAddressFamilyIpv4Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_ipv4#af_name DataIosxeBgpAddressFamilyIpv4#af_name}
  */
  readonly afName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_ipv4#asn DataIosxeBgpAddressFamilyIpv4#asn}
  */
  readonly asn: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_ipv4#device DataIosxeBgpAddressFamilyIpv4#device}
  */
  readonly device?: string;
}
export interface DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAdminDistances {
}

export function dataIosxeBgpAddressFamilyIpv4Ipv4UnicastAdminDistancesToTerraform(struct?: DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAdminDistances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeBgpAddressFamilyIpv4Ipv4UnicastAdminDistancesToHclTerraform(struct?: DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAdminDistances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAdminDistancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAdminDistances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAdminDistances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getNumberAttribute('distance');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // wildcard - computed: true, optional: false, required: false
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
}

export class DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAdminDistancesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAdminDistancesOutputReference {
    return new DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAdminDistancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses {
}

export function dataIosxeBgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesToTerraform(struct?: DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeBgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesToHclTerraform(struct?: DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAggregateAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_mask - computed: true, optional: false, required: false
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
}

export class DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesOutputReference {
    return new DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworks {
}

export function dataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksToTerraform(struct?: DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksToHclTerraform(struct?: DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backdoor - computed: true, optional: false, required: false
  public get backdoor() {
    return this.getBooleanAttribute('backdoor');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}

export class DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksOutputReference {
    return new DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksMask {
}

export function dataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksMaskToTerraform(struct?: DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksMask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksMaskToHclTerraform(struct?: DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksMask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksMaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksMask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksMask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backdoor - computed: true, optional: false, required: false
  public get backdoor() {
    return this.getBooleanAttribute('backdoor');
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}

export class DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksMaskList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksMaskOutputReference {
    return new DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksMaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_ipv4 iosxe_bgp_address_family_ipv4}
*/
export class DataIosxeBgpAddressFamilyIpv4 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_address_family_ipv4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeBgpAddressFamilyIpv4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeBgpAddressFamilyIpv4 to import
  * @param importFromId The id of the existing DataIosxeBgpAddressFamilyIpv4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_ipv4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeBgpAddressFamilyIpv4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_address_family_ipv4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_ipv4 iosxe_bgp_address_family_ipv4} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeBgpAddressFamilyIpv4Config
  */
  public constructor(scope: Construct, id: string, config: DataIosxeBgpAddressFamilyIpv4Config) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_address_family_ipv4',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._afName = config.afName;
    this._asn = config.asn;
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // af_name - computed: false, optional: false, required: true
  private _afName?: string; 
  public get afName() {
    return this.getStringAttribute('af_name');
  }
  public set afName(value: string) {
    this._afName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afNameInput() {
    return this._afName;
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_unicast_admin_distances - computed: true, optional: false, required: false
  private _ipv4UnicastAdminDistances = new DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAdminDistancesList(this, "ipv4_unicast_admin_distances", false);
  public get ipv4UnicastAdminDistances() {
    return this._ipv4UnicastAdminDistances;
  }

  // ipv4_unicast_aggregate_addresses - computed: true, optional: false, required: false
  private _ipv4UnicastAggregateAddresses = new DataIosxeBgpAddressFamilyIpv4Ipv4UnicastAggregateAddressesList(this, "ipv4_unicast_aggregate_addresses", false);
  public get ipv4UnicastAggregateAddresses() {
    return this._ipv4UnicastAggregateAddresses;
  }

  // ipv4_unicast_distance_bgp_external - computed: true, optional: false, required: false
  public get ipv4UnicastDistanceBgpExternal() {
    return this.getNumberAttribute('ipv4_unicast_distance_bgp_external');
  }

  // ipv4_unicast_distance_bgp_internal - computed: true, optional: false, required: false
  public get ipv4UnicastDistanceBgpInternal() {
    return this.getNumberAttribute('ipv4_unicast_distance_bgp_internal');
  }

  // ipv4_unicast_distance_bgp_local - computed: true, optional: false, required: false
  public get ipv4UnicastDistanceBgpLocal() {
    return this.getNumberAttribute('ipv4_unicast_distance_bgp_local');
  }

  // ipv4_unicast_networks - computed: true, optional: false, required: false
  private _ipv4UnicastNetworks = new DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksList(this, "ipv4_unicast_networks", false);
  public get ipv4UnicastNetworks() {
    return this._ipv4UnicastNetworks;
  }

  // ipv4_unicast_networks_mask - computed: true, optional: false, required: false
  private _ipv4UnicastNetworksMask = new DataIosxeBgpAddressFamilyIpv4Ipv4UnicastNetworksMaskList(this, "ipv4_unicast_networks_mask", false);
  public get ipv4UnicastNetworksMask() {
    return this._ipv4UnicastNetworksMask;
  }

  // ipv4_unicast_redistribute_connected - computed: true, optional: false, required: false
  public get ipv4UnicastRedistributeConnected() {
    return this.getBooleanAttribute('ipv4_unicast_redistribute_connected');
  }

  // ipv4_unicast_redistribute_static - computed: true, optional: false, required: false
  public get ipv4UnicastRedistributeStatic() {
    return this.getBooleanAttribute('ipv4_unicast_redistribute_static');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      af_name: cdktf.stringToTerraform(this._afName),
      asn: cdktf.stringToTerraform(this._asn),
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      af_name: {
        value: cdktf.stringToHclTerraform(this._afName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
