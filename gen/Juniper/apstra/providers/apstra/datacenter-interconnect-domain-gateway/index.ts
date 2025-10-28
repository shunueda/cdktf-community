// https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterInterconnectDomainGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Interconnect Domain Gateway AS Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway#asn DatacenterInterconnectDomainGateway#asn}
  */
  readonly asn: number;
  /**
  * Apstra ID of the Blueprint in which the Interconnect Domain Gateway should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway#blueprint_id DatacenterInterconnectDomainGateway#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * BGP hold time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway#hold_time DatacenterInterconnectDomainGateway#hold_time}
  */
  readonly holdTime?: number;
  /**
  * ID of the Interconnect Domain to which this gateway belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway#interconnect_domain_id DatacenterInterconnectDomainGateway#interconnect_domain_id}
  */
  readonly interconnectDomainId: string;
  /**
  * Interconnect Domain Gateway IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway#ip_address DatacenterInterconnectDomainGateway#ip_address}
  */
  readonly ipAddress: string;
  /**
  * BGP keepalive time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway#keepalive_time DatacenterInterconnectDomainGateway#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * Set of IDs of switch nodes which will be configured to peer with the Interconnect Domain Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway#local_gateway_nodes DatacenterInterconnectDomainGateway#local_gateway_nodes}
  */
  readonly localGatewayNodes: string[];
  /**
  * Interconnect Domain Gateway name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway#name DatacenterInterconnectDomainGateway#name}
  */
  readonly name: string;
  /**
  * BGP TCP authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway#password DatacenterInterconnectDomainGateway#password}
  */
  readonly password?: string;
  /**
  * BGP Time To Live. Omit to use device defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway#ttl DatacenterInterconnectDomainGateway#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway apstra_datacenter_interconnect_domain_gateway}
*/
export class DatacenterInterconnectDomainGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_interconnect_domain_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterInterconnectDomainGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterInterconnectDomainGateway to import
  * @param importFromId The id of the existing DatacenterInterconnectDomainGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterInterconnectDomainGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_interconnect_domain_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/datacenter_interconnect_domain_gateway apstra_datacenter_interconnect_domain_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterInterconnectDomainGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterInterconnectDomainGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_interconnect_domain_gateway',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asn = config.asn;
    this._blueprintId = config.blueprintId;
    this._holdTime = config.holdTime;
    this._interconnectDomainId = config.interconnectDomainId;
    this._ipAddress = config.ipAddress;
    this._keepaliveTime = config.keepaliveTime;
    this._localGatewayNodes = config.localGatewayNodes;
    this._name = config.name;
    this._password = config.password;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // hold_time - computed: true, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interconnect_domain_id - computed: false, optional: false, required: true
  private _interconnectDomainId?: string; 
  public get interconnectDomainId() {
    return this.getStringAttribute('interconnect_domain_id');
  }
  public set interconnectDomainId(value: string) {
    this._interconnectDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectDomainIdInput() {
    return this._interconnectDomainId;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // keepalive_time - computed: true, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // local_gateway_nodes - computed: false, optional: false, required: true
  private _localGatewayNodes?: string[]; 
  public get localGatewayNodes() {
    return cdktf.Fn.tolist(this.getListAttribute('local_gateway_nodes'));
  }
  public set localGatewayNodes(value: string[]) {
    this._localGatewayNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayNodesInput() {
    return this._localGatewayNodes;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.numberToTerraform(this._asn),
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      hold_time: cdktf.numberToTerraform(this._holdTime),
      interconnect_domain_id: cdktf.stringToTerraform(this._interconnectDomainId),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      keepalive_time: cdktf.numberToTerraform(this._keepaliveTime),
      local_gateway_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localGatewayNodes),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.numberToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hold_time: {
        value: cdktf.numberToHclTerraform(this._holdTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interconnect_domain_id: {
        value: cdktf.stringToHclTerraform(this._interconnectDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_time: {
        value: cdktf.numberToHclTerraform(this._keepaliveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_gateway_nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localGatewayNodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
