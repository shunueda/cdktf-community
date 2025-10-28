// https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_nat_destination_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityNatDestinationPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * CIDR address to destination nat pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_nat_destination_pool#address SecurityNatDestinationPool#address}
  */
  readonly address: string;
  /**
  * Port change too with destination nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_nat_destination_pool#address_port SecurityNatDestinationPool#address_port}
  */
  readonly addressPort?: number;
  /**
  * CIDR to define range of address to destination nat pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_nat_destination_pool#address_to SecurityNatDestinationPool#address_to}
  */
  readonly addressTo?: string;
  /**
  * Text description of pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_nat_destination_pool#description SecurityNatDestinationPool#description}
  */
  readonly description?: string;
  /**
  * Pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_nat_destination_pool#name SecurityNatDestinationPool#name}
  */
  readonly name: string;
  /**
  * Name of routing instance to switch instance with nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_nat_destination_pool#routing_instance SecurityNatDestinationPool#routing_instance}
  */
  readonly routingInstance?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_nat_destination_pool junos_security_nat_destination_pool}
*/
export class SecurityNatDestinationPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_nat_destination_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityNatDestinationPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityNatDestinationPool to import
  * @param importFromId The id of the existing SecurityNatDestinationPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_nat_destination_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityNatDestinationPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_nat_destination_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_nat_destination_pool junos_security_nat_destination_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityNatDestinationPoolConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityNatDestinationPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_nat_destination_pool',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._addressPort = config.addressPort;
    this._addressTo = config.addressTo;
    this._description = config.description;
    this._name = config.name;
    this._routingInstance = config.routingInstance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_port - computed: false, optional: true, required: false
  private _addressPort?: number; 
  public get addressPort() {
    return this.getNumberAttribute('address_port');
  }
  public set addressPort(value: number) {
    this._addressPort = value;
  }
  public resetAddressPort() {
    this._addressPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPortInput() {
    return this._addressPort;
  }

  // address_to - computed: false, optional: true, required: false
  private _addressTo?: string; 
  public get addressTo() {
    return this.getStringAttribute('address_to');
  }
  public set addressTo(value: string) {
    this._addressTo = value;
  }
  public resetAddressTo() {
    this._addressTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressToInput() {
    return this._addressTo;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      address_port: cdktf.numberToTerraform(this._addressPort),
      address_to: cdktf.stringToTerraform(this._addressTo),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_port: {
        value: cdktf.numberToHclTerraform(this._addressPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      address_to: {
        value: cdktf.stringToHclTerraform(this._addressTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
