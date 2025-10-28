// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrGcpVpcPeersV2Config extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the Instaclustr Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#account_id DataInstaclustrGcpVpcPeersV2#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#id DataInstaclustrGcpVpcPeersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#filter DataInstaclustrGcpVpcPeersV2#filter}
  */
  readonly filter?: DataInstaclustrGcpVpcPeersV2Filter[] | cdktf.IResolvable;
  /**
  * peering_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#peering_requests DataInstaclustrGcpVpcPeersV2#peering_requests}
  */
  readonly peeringRequests?: DataInstaclustrGcpVpcPeersV2PeeringRequests[] | cdktf.IResolvable;
}
export interface DataInstaclustrGcpVpcPeersV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#name DataInstaclustrGcpVpcPeersV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#values DataInstaclustrGcpVpcPeersV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrGcpVpcPeersV2FilterToTerraform(struct?: DataInstaclustrGcpVpcPeersV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrGcpVpcPeersV2FilterToHclTerraform(struct?: DataInstaclustrGcpVpcPeersV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrGcpVpcPeersV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrGcpVpcPeersV2Filter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrGcpVpcPeersV2Filter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataInstaclustrGcpVpcPeersV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrGcpVpcPeersV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrGcpVpcPeersV2FilterOutputReference {
    return new DataInstaclustrGcpVpcPeersV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrGcpVpcPeersV2PeeringRequests {
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#cdc_id DataInstaclustrGcpVpcPeersV2#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * GCP Project ID of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#data_centre_project_id DataInstaclustrGcpVpcPeersV2#data_centre_project_id}
  */
  readonly dataCentreProjectId?: string;
  /**
  * Vpc Network Name of the Data Centre VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#data_centre_vpc_network_name DataInstaclustrGcpVpcPeersV2#data_centre_vpc_network_name}
  */
  readonly dataCentreVpcNetworkName?: string;
  /**
  * ID of the VPC peering connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#id DataInstaclustrGcpVpcPeersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Peering Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#name DataInstaclustrGcpVpcPeersV2#name}
  */
  readonly name?: string;
  /**
  * The project ID of the owner of the accepter VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#peer_project_id DataInstaclustrGcpVpcPeersV2#peer_project_id}
  */
  readonly peerProjectId?: string;
  /**
  * The subnets for the peering VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#peer_subnets DataInstaclustrGcpVpcPeersV2#peer_subnets}
  */
  readonly peerSubnets?: string[];
  /**
  * The name of the VPC Network you wish to peer to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#peer_vpc_network_name DataInstaclustrGcpVpcPeersV2#peer_vpc_network_name}
  */
  readonly peerVpcNetworkName?: string;
}

export function dataInstaclustrGcpVpcPeersV2PeeringRequestsToTerraform(struct?: DataInstaclustrGcpVpcPeersV2PeeringRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdc_id: cdktf.stringToTerraform(struct!.cdcId),
    data_centre_project_id: cdktf.stringToTerraform(struct!.dataCentreProjectId),
    data_centre_vpc_network_name: cdktf.stringToTerraform(struct!.dataCentreVpcNetworkName),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    peer_project_id: cdktf.stringToTerraform(struct!.peerProjectId),
    peer_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.peerSubnets),
    peer_vpc_network_name: cdktf.stringToTerraform(struct!.peerVpcNetworkName),
  }
}


export function dataInstaclustrGcpVpcPeersV2PeeringRequestsToHclTerraform(struct?: DataInstaclustrGcpVpcPeersV2PeeringRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.cdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_centre_project_id: {
      value: cdktf.stringToHclTerraform(struct!.dataCentreProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_centre_vpc_network_name: {
      value: cdktf.stringToHclTerraform(struct!.dataCentreVpcNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_project_id: {
      value: cdktf.stringToHclTerraform(struct!.peerProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.peerSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    peer_vpc_network_name: {
      value: cdktf.stringToHclTerraform(struct!.peerVpcNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrGcpVpcPeersV2PeeringRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrGcpVpcPeersV2PeeringRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcId = this._cdcId;
    }
    if (this._dataCentreProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCentreProjectId = this._dataCentreProjectId;
    }
    if (this._dataCentreVpcNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCentreVpcNetworkName = this._dataCentreVpcNetworkName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._peerProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerProjectId = this._peerProjectId;
    }
    if (this._peerSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSubnets = this._peerSubnets;
    }
    if (this._peerVpcNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerVpcNetworkName = this._peerVpcNetworkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrGcpVpcPeersV2PeeringRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cdcId = undefined;
      this._dataCentreProjectId = undefined;
      this._dataCentreVpcNetworkName = undefined;
      this._id = undefined;
      this._name = undefined;
      this._peerProjectId = undefined;
      this._peerSubnets = undefined;
      this._peerVpcNetworkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cdcId = value.cdcId;
      this._dataCentreProjectId = value.dataCentreProjectId;
      this._dataCentreVpcNetworkName = value.dataCentreVpcNetworkName;
      this._id = value.id;
      this._name = value.name;
      this._peerProjectId = value.peerProjectId;
      this._peerSubnets = value.peerSubnets;
      this._peerVpcNetworkName = value.peerVpcNetworkName;
    }
  }

  // cdc_id - computed: true, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // data_centre_project_id - computed: true, optional: true, required: false
  private _dataCentreProjectId?: string; 
  public get dataCentreProjectId() {
    return this.getStringAttribute('data_centre_project_id');
  }
  public set dataCentreProjectId(value: string) {
    this._dataCentreProjectId = value;
  }
  public resetDataCentreProjectId() {
    this._dataCentreProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreProjectIdInput() {
    return this._dataCentreProjectId;
  }

  // data_centre_vpc_network_name - computed: true, optional: true, required: false
  private _dataCentreVpcNetworkName?: string; 
  public get dataCentreVpcNetworkName() {
    return this.getStringAttribute('data_centre_vpc_network_name');
  }
  public set dataCentreVpcNetworkName(value: string) {
    this._dataCentreVpcNetworkName = value;
  }
  public resetDataCentreVpcNetworkName() {
    this._dataCentreVpcNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreVpcNetworkNameInput() {
    return this._dataCentreVpcNetworkName;
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

  // name - computed: true, optional: true, required: false
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

  // peer_project_id - computed: true, optional: true, required: false
  private _peerProjectId?: string; 
  public get peerProjectId() {
    return this.getStringAttribute('peer_project_id');
  }
  public set peerProjectId(value: string) {
    this._peerProjectId = value;
  }
  public resetPeerProjectId() {
    this._peerProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerProjectIdInput() {
    return this._peerProjectId;
  }

  // peer_subnets - computed: true, optional: true, required: false
  private _peerSubnets?: string[]; 
  public get peerSubnets() {
    return this.getListAttribute('peer_subnets');
  }
  public set peerSubnets(value: string[]) {
    this._peerSubnets = value;
  }
  public resetPeerSubnets() {
    this._peerSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubnetsInput() {
    return this._peerSubnets;
  }

  // peer_vpc_network_name - computed: true, optional: true, required: false
  private _peerVpcNetworkName?: string; 
  public get peerVpcNetworkName() {
    return this.getStringAttribute('peer_vpc_network_name');
  }
  public set peerVpcNetworkName(value: string) {
    this._peerVpcNetworkName = value;
  }
  public resetPeerVpcNetworkName() {
    this._peerVpcNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcNetworkNameInput() {
    return this._peerVpcNetworkName;
  }
}

export class DataInstaclustrGcpVpcPeersV2PeeringRequestsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrGcpVpcPeersV2PeeringRequests[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrGcpVpcPeersV2PeeringRequestsOutputReference {
    return new DataInstaclustrGcpVpcPeersV2PeeringRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2 instaclustr_gcp_vpc_peers_v2}
*/
export class DataInstaclustrGcpVpcPeersV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_gcp_vpc_peers_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrGcpVpcPeersV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrGcpVpcPeersV2 to import
  * @param importFromId The id of the existing DataInstaclustrGcpVpcPeersV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrGcpVpcPeersV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_gcp_vpc_peers_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/gcp_vpc_peers_v2 instaclustr_gcp_vpc_peers_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrGcpVpcPeersV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrGcpVpcPeersV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_gcp_vpc_peers_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._id = config.id;
    this._filter.internalValue = config.filter;
    this._peeringRequests.internalValue = config.peeringRequests;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrGcpVpcPeersV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrGcpVpcPeersV2Filter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // peering_requests - computed: false, optional: true, required: false
  private _peeringRequests = new DataInstaclustrGcpVpcPeersV2PeeringRequestsList(this, "peering_requests", false);
  public get peeringRequests() {
    return this._peeringRequests;
  }
  public putPeeringRequests(value: DataInstaclustrGcpVpcPeersV2PeeringRequests[] | cdktf.IResolvable) {
    this._peeringRequests.internalValue = value;
  }
  public resetPeeringRequests() {
    this._peeringRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringRequestsInput() {
    return this._peeringRequests.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataInstaclustrGcpVpcPeersV2FilterToTerraform, true)(this._filter.internalValue),
      peering_requests: cdktf.listMapper(dataInstaclustrGcpVpcPeersV2PeeringRequestsToTerraform, true)(this._peeringRequests.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrGcpVpcPeersV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrGcpVpcPeersV2FilterList",
      },
      peering_requests: {
        value: cdktf.listMapperHcl(dataInstaclustrGcpVpcPeersV2PeeringRequestsToHclTerraform, true)(this._peeringRequests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrGcpVpcPeersV2PeeringRequestsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
