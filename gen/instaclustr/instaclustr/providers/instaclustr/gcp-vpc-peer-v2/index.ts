// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpVpcPeerV2Config extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#cdc_id GcpVpcPeerV2#cdc_id}
  */
  readonly cdcId: string;
  /**
  * GCP Project ID of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#data_centre_project_id GcpVpcPeerV2#data_centre_project_id}
  */
  readonly dataCentreProjectId?: string;
  /**
  * Vpc Network Name of the Data Centre VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#data_centre_vpc_network_name GcpVpcPeerV2#data_centre_vpc_network_name}
  */
  readonly dataCentreVpcNetworkName?: string;
  /**
  * Reason for Peering Connection Failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#failure_reason GcpVpcPeerV2#failure_reason}
  */
  readonly failureReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#id GcpVpcPeerV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Peering Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#name GcpVpcPeerV2#name}
  */
  readonly name?: string;
  /**
  * The project ID of the owner of the accepter VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#peer_project_id GcpVpcPeerV2#peer_project_id}
  */
  readonly peerProjectId: string;
  /**
  * The subnets for the peering VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#peer_subnets GcpVpcPeerV2#peer_subnets}
  */
  readonly peerSubnets: string[];
  /**
  * The name of the VPC Network you wish to peer to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#peer_vpc_network_name GcpVpcPeerV2#peer_vpc_network_name}
  */
  readonly peerVpcNetworkName: string;
  /**
  * Status of the VPC Peering Connection. Values can be `GENESIS`, `PROVISIONING`, `FAILED`, `INACTIVE`, `ACTIVE` or `UNKNOWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#status_code GcpVpcPeerV2#status_code}
  */
  readonly statusCode?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#timeouts GcpVpcPeerV2#timeouts}
  */
  readonly timeouts?: GcpVpcPeerV2Timeouts;
}
export interface GcpVpcPeerV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#default GcpVpcPeerV2#default}
  */
  readonly default?: string;
}

export function gcpVpcPeerV2TimeoutsToTerraform(struct?: GcpVpcPeerV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function gcpVpcPeerV2TimeoutsToHclTerraform(struct?: GcpVpcPeerV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcPeerV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GcpVpcPeerV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcPeerV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2 instaclustr_gcp_vpc_peer_v2}
*/
export class GcpVpcPeerV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_gcp_vpc_peer_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpVpcPeerV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpVpcPeerV2 to import
  * @param importFromId The id of the existing GcpVpcPeerV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpVpcPeerV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_gcp_vpc_peer_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/resources/gcp_vpc_peer_v2 instaclustr_gcp_vpc_peer_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpVpcPeerV2Config
  */
  public constructor(scope: Construct, id: string, config: GcpVpcPeerV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_gcp_vpc_peer_v2',
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
    this._cdcId = config.cdcId;
    this._dataCentreProjectId = config.dataCentreProjectId;
    this._dataCentreVpcNetworkName = config.dataCentreVpcNetworkName;
    this._failureReason = config.failureReason;
    this._id = config.id;
    this._name = config.name;
    this._peerProjectId = config.peerProjectId;
    this._peerSubnets = config.peerSubnets;
    this._peerVpcNetworkName = config.peerVpcNetworkName;
    this._statusCode = config.statusCode;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdc_id - computed: false, optional: false, required: true
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
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

  // failure_reason - computed: true, optional: true, required: false
  private _failureReason?: string; 
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }
  public set failureReason(value: string) {
    this._failureReason = value;
  }
  public resetFailureReason() {
    this._failureReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureReasonInput() {
    return this._failureReason;
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

  // peer_project_id - computed: false, optional: false, required: true
  private _peerProjectId?: string; 
  public get peerProjectId() {
    return this.getStringAttribute('peer_project_id');
  }
  public set peerProjectId(value: string) {
    this._peerProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerProjectIdInput() {
    return this._peerProjectId;
  }

  // peer_subnets - computed: false, optional: false, required: true
  private _peerSubnets?: string[]; 
  public get peerSubnets() {
    return this.getListAttribute('peer_subnets');
  }
  public set peerSubnets(value: string[]) {
    this._peerSubnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubnetsInput() {
    return this._peerSubnets;
  }

  // peer_vpc_network_name - computed: false, optional: false, required: true
  private _peerVpcNetworkName?: string; 
  public get peerVpcNetworkName() {
    return this.getStringAttribute('peer_vpc_network_name');
  }
  public set peerVpcNetworkName(value: string) {
    this._peerVpcNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcNetworkNameInput() {
    return this._peerVpcNetworkName;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GcpVpcPeerV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GcpVpcPeerV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdc_id: cdktf.stringToTerraform(this._cdcId),
      data_centre_project_id: cdktf.stringToTerraform(this._dataCentreProjectId),
      data_centre_vpc_network_name: cdktf.stringToTerraform(this._dataCentreVpcNetworkName),
      failure_reason: cdktf.stringToTerraform(this._failureReason),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      peer_project_id: cdktf.stringToTerraform(this._peerProjectId),
      peer_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerSubnets),
      peer_vpc_network_name: cdktf.stringToTerraform(this._peerVpcNetworkName),
      status_code: cdktf.stringToTerraform(this._statusCode),
      timeouts: gcpVpcPeerV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdc_id: {
        value: cdktf.stringToHclTerraform(this._cdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_centre_project_id: {
        value: cdktf.stringToHclTerraform(this._dataCentreProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_centre_vpc_network_name: {
        value: cdktf.stringToHclTerraform(this._dataCentreVpcNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_reason: {
        value: cdktf.stringToHclTerraform(this._failureReason),
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
      peer_project_id: {
        value: cdktf.stringToHclTerraform(this._peerProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      peer_vpc_network_name: {
        value: cdktf.stringToHclTerraform(this._peerVpcNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_code: {
        value: cdktf.stringToHclTerraform(this._statusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: gcpVpcPeerV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GcpVpcPeerV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
