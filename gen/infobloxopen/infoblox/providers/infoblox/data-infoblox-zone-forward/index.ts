// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/data-sources/zone_forward
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfobloxZoneForwardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/data-sources/zone_forward#filters DataInfobloxZoneForward#filters}
  */
  readonly filters: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/data-sources/zone_forward#id DataInfobloxZoneForward#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataInfobloxZoneForwardResultsForwardTo {
}

export function dataInfobloxZoneForwardResultsForwardToToTerraform(struct?: DataInfobloxZoneForwardResultsForwardTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfobloxZoneForwardResultsForwardToToHclTerraform(struct?: DataInfobloxZoneForwardResultsForwardTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfobloxZoneForwardResultsForwardToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInfobloxZoneForwardResultsForwardTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfobloxZoneForwardResultsForwardTo | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataInfobloxZoneForwardResultsForwardToList extends cdktf.ComplexList {

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
  public get(index: number): DataInfobloxZoneForwardResultsForwardToOutputReference {
    return new DataInfobloxZoneForwardResultsForwardToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInfobloxZoneForwardResultsForwardingServersForwardTo {
}

export function dataInfobloxZoneForwardResultsForwardingServersForwardToToTerraform(struct?: DataInfobloxZoneForwardResultsForwardingServersForwardTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfobloxZoneForwardResultsForwardingServersForwardToToHclTerraform(struct?: DataInfobloxZoneForwardResultsForwardingServersForwardTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfobloxZoneForwardResultsForwardingServersForwardToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInfobloxZoneForwardResultsForwardingServersForwardTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfobloxZoneForwardResultsForwardingServersForwardTo | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataInfobloxZoneForwardResultsForwardingServersForwardToList extends cdktf.ComplexList {

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
  public get(index: number): DataInfobloxZoneForwardResultsForwardingServersForwardToOutputReference {
    return new DataInfobloxZoneForwardResultsForwardingServersForwardToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInfobloxZoneForwardResultsForwardingServers {
}

export function dataInfobloxZoneForwardResultsForwardingServersToTerraform(struct?: DataInfobloxZoneForwardResultsForwardingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfobloxZoneForwardResultsForwardingServersToHclTerraform(struct?: DataInfobloxZoneForwardResultsForwardingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfobloxZoneForwardResultsForwardingServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInfobloxZoneForwardResultsForwardingServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfobloxZoneForwardResultsForwardingServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forward_to - computed: true, optional: false, required: false
  private _forwardTo = new DataInfobloxZoneForwardResultsForwardingServersForwardToList(this, "forward_to", false);
  public get forwardTo() {
    return this._forwardTo;
  }

  // forwarders_only - computed: true, optional: false, required: false
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // use_override_forwarders - computed: true, optional: false, required: false
  public get useOverrideForwarders() {
    return this.getBooleanAttribute('use_override_forwarders');
  }
}

export class DataInfobloxZoneForwardResultsForwardingServersList extends cdktf.ComplexList {

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
  public get(index: number): DataInfobloxZoneForwardResultsForwardingServersOutputReference {
    return new DataInfobloxZoneForwardResultsForwardingServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInfobloxZoneForwardResults {
}

export function dataInfobloxZoneForwardResultsToTerraform(struct?: DataInfobloxZoneForwardResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfobloxZoneForwardResultsToHclTerraform(struct?: DataInfobloxZoneForwardResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfobloxZoneForwardResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInfobloxZoneForwardResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfobloxZoneForwardResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // disable - computed: true, optional: false, required: false
  public get disable() {
    return this.getBooleanAttribute('disable');
  }

  // ext_attrs - computed: true, optional: false, required: false
  public get extAttrs() {
    return this.getStringAttribute('ext_attrs');
  }

  // external_ns_group - computed: true, optional: false, required: false
  public get externalNsGroup() {
    return this.getStringAttribute('external_ns_group');
  }

  // forward_to - computed: true, optional: false, required: false
  private _forwardTo = new DataInfobloxZoneForwardResultsForwardToList(this, "forward_to", false);
  public get forwardTo() {
    return this._forwardTo;
  }

  // forwarders_only - computed: true, optional: false, required: false
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }

  // forwarding_servers - computed: true, optional: false, required: false
  private _forwardingServers = new DataInfobloxZoneForwardResultsForwardingServersList(this, "forwarding_servers", false);
  public get forwardingServers() {
    return this._forwardingServers;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ns_group - computed: true, optional: false, required: false
  public get nsGroup() {
    return this.getStringAttribute('ns_group');
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }

  // zone_format - computed: true, optional: false, required: false
  public get zoneFormat() {
    return this.getStringAttribute('zone_format');
  }
}

export class DataInfobloxZoneForwardResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataInfobloxZoneForwardResultsOutputReference {
    return new DataInfobloxZoneForwardResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/data-sources/zone_forward infoblox_zone_forward}
*/
export class DataInfobloxZoneForward extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_zone_forward";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfobloxZoneForward resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfobloxZoneForward to import
  * @param importFromId The id of the existing DataInfobloxZoneForward that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/data-sources/zone_forward#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfobloxZoneForward to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_zone_forward", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/data-sources/zone_forward infoblox_zone_forward} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfobloxZoneForwardConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfobloxZoneForwardConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_zone_forward',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: false, required: true
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
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

  // results - computed: true, optional: false, required: false
  private _results = new DataInfobloxZoneForwardResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
