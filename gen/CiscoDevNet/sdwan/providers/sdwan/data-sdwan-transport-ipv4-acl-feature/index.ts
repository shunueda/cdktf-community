// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/transport_ipv4_acl_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTransportIpv4AclFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/transport_ipv4_acl_feature#feature_profile_id DataSdwanTransportIpv4AclFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/transport_ipv4_acl_feature#id DataSdwanTransportIpv4AclFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanTransportIpv4AclFeatureSequencesActions {
}

export function dataSdwanTransportIpv4AclFeatureSequencesActionsToTerraform(struct?: DataSdwanTransportIpv4AclFeatureSequencesActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportIpv4AclFeatureSequencesActionsToHclTerraform(struct?: DataSdwanTransportIpv4AclFeatureSequencesActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportIpv4AclFeatureSequencesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportIpv4AclFeatureSequencesActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportIpv4AclFeatureSequencesActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_counter_name - computed: true, optional: false, required: false
  public get acceptCounterName() {
    return this.getStringAttribute('accept_counter_name');
  }

  // accept_log - computed: true, optional: false, required: false
  public get acceptLog() {
    return this.getBooleanAttribute('accept_log');
  }

  // accept_mirror_list_id - computed: true, optional: false, required: false
  public get acceptMirrorListId() {
    return this.getStringAttribute('accept_mirror_list_id');
  }

  // accept_policer_id - computed: true, optional: false, required: false
  public get acceptPolicerId() {
    return this.getStringAttribute('accept_policer_id');
  }

  // accept_set_dscp - computed: true, optional: false, required: false
  public get acceptSetDscp() {
    return this.getNumberAttribute('accept_set_dscp');
  }

  // accept_set_next_hop - computed: true, optional: false, required: false
  public get acceptSetNextHop() {
    return this.getStringAttribute('accept_set_next_hop');
  }

  // drop_counter_name - computed: true, optional: false, required: false
  public get dropCounterName() {
    return this.getStringAttribute('drop_counter_name');
  }

  // drop_log - computed: true, optional: false, required: false
  public get dropLog() {
    return this.getBooleanAttribute('drop_log');
  }
}

export class DataSdwanTransportIpv4AclFeatureSequencesActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportIpv4AclFeatureSequencesActionsOutputReference {
    return new DataSdwanTransportIpv4AclFeatureSequencesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts {
}

export function dataSdwanTransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsToTerraform(struct?: DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsToHclTerraform(struct?: DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesDestinationPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}

export class DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsOutputReference {
    return new DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesSourcePorts {
}

export function dataSdwanTransportIpv4AclFeatureSequencesMatchEntriesSourcePortsToTerraform(struct?: DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesSourcePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportIpv4AclFeatureSequencesMatchEntriesSourcePortsToHclTerraform(struct?: DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesSourcePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesSourcePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesSourcePorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesSourcePorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}

export class DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesSourcePortsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesSourcePortsOutputReference {
    return new DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesSourcePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportIpv4AclFeatureSequencesMatchEntries {
}

export function dataSdwanTransportIpv4AclFeatureSequencesMatchEntriesToTerraform(struct?: DataSdwanTransportIpv4AclFeatureSequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportIpv4AclFeatureSequencesMatchEntriesToHclTerraform(struct?: DataSdwanTransportIpv4AclFeatureSequencesMatchEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportIpv4AclFeatureSequencesMatchEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportIpv4AclFeatureSequencesMatchEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_data_prefix - computed: true, optional: false, required: false
  public get destinationDataPrefix() {
    return this.getStringAttribute('destination_data_prefix');
  }

  // destination_data_prefix_list_id - computed: true, optional: false, required: false
  public get destinationDataPrefixListId() {
    return this.getStringAttribute('destination_data_prefix_list_id');
  }

  // destination_data_prefix_variable - computed: true, optional: false, required: false
  public get destinationDataPrefixVariable() {
    return this.getStringAttribute('destination_data_prefix_variable');
  }

  // destination_ports - computed: true, optional: false, required: false
  private _destinationPorts = new DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesDestinationPortsList(this, "destination_ports", false);
  public get destinationPorts() {
    return this._destinationPorts;
  }

  // dscps - computed: true, optional: false, required: false
  public get dscps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('dscps')));
  }

  // icmp_messages - computed: true, optional: false, required: false
  public get icmpMessages() {
    return cdktf.Fn.tolist(this.getListAttribute('icmp_messages'));
  }

  // packet_length - computed: true, optional: false, required: false
  public get packetLength() {
    return this.getStringAttribute('packet_length');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protocols')));
  }

  // source_data_prefix - computed: true, optional: false, required: false
  public get sourceDataPrefix() {
    return this.getStringAttribute('source_data_prefix');
  }

  // source_data_prefix_list_id - computed: true, optional: false, required: false
  public get sourceDataPrefixListId() {
    return this.getStringAttribute('source_data_prefix_list_id');
  }

  // source_data_prefix_variable - computed: true, optional: false, required: false
  public get sourceDataPrefixVariable() {
    return this.getStringAttribute('source_data_prefix_variable');
  }

  // source_ports - computed: true, optional: false, required: false
  private _sourcePorts = new DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesSourcePortsList(this, "source_ports", false);
  public get sourcePorts() {
    return this._sourcePorts;
  }

  // tcp_state - computed: true, optional: false, required: false
  public get tcpState() {
    return this.getStringAttribute('tcp_state');
  }
}

export class DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesOutputReference {
    return new DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportIpv4AclFeatureSequences {
}

export function dataSdwanTransportIpv4AclFeatureSequencesToTerraform(struct?: DataSdwanTransportIpv4AclFeatureSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportIpv4AclFeatureSequencesToHclTerraform(struct?: DataSdwanTransportIpv4AclFeatureSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportIpv4AclFeatureSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportIpv4AclFeatureSequences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportIpv4AclFeatureSequences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataSdwanTransportIpv4AclFeatureSequencesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // base_action - computed: true, optional: false, required: false
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }

  // match_entries - computed: true, optional: false, required: false
  private _matchEntries = new DataSdwanTransportIpv4AclFeatureSequencesMatchEntriesList(this, "match_entries", false);
  public get matchEntries() {
    return this._matchEntries;
  }

  // sequence_id - computed: true, optional: false, required: false
  public get sequenceId() {
    return this.getNumberAttribute('sequence_id');
  }

  // sequence_name - computed: true, optional: false, required: false
  public get sequenceName() {
    return this.getStringAttribute('sequence_name');
  }
}

export class DataSdwanTransportIpv4AclFeatureSequencesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportIpv4AclFeatureSequencesOutputReference {
    return new DataSdwanTransportIpv4AclFeatureSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/transport_ipv4_acl_feature sdwan_transport_ipv4_acl_feature}
*/
export class DataSdwanTransportIpv4AclFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_ipv4_acl_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTransportIpv4AclFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTransportIpv4AclFeature to import
  * @param importFromId The id of the existing DataSdwanTransportIpv4AclFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/transport_ipv4_acl_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTransportIpv4AclFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_ipv4_acl_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/transport_ipv4_acl_feature sdwan_transport_ipv4_acl_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTransportIpv4AclFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTransportIpv4AclFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_ipv4_acl_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: true, optional: false, required: false
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sequences - computed: true, optional: false, required: false
  private _sequences = new DataSdwanTransportIpv4AclFeatureSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
