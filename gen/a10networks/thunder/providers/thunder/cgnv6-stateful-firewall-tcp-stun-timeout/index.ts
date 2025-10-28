// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_tcp_stun_timeout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6StatefulFirewallTcpStunTimeoutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_tcp_stun_timeout#id Cgnv6StatefulFirewallTcpStunTimeout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Single Destination Port or Port Range Start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_tcp_stun_timeout#port Cgnv6StatefulFirewallTcpStunTimeout#port}
  */
  readonly port: number;
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_tcp_stun_timeout#port_end Cgnv6StatefulFirewallTcpStunTimeout#port_end}
  */
  readonly portEnd: number;
  /**
  * STUN timeout (default: 2minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_tcp_stun_timeout#stun_timeout_val_port_range Cgnv6StatefulFirewallTcpStunTimeout#stun_timeout_val_port_range}
  */
  readonly stunTimeoutValPortRange?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_tcp_stun_timeout#uuid Cgnv6StatefulFirewallTcpStunTimeout#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_tcp_stun_timeout thunder_cgnv6_stateful_firewall_tcp_stun_timeout}
*/
export class Cgnv6StatefulFirewallTcpStunTimeout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_stateful_firewall_tcp_stun_timeout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6StatefulFirewallTcpStunTimeout resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6StatefulFirewallTcpStunTimeout to import
  * @param importFromId The id of the existing Cgnv6StatefulFirewallTcpStunTimeout that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_tcp_stun_timeout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6StatefulFirewallTcpStunTimeout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_stateful_firewall_tcp_stun_timeout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_tcp_stun_timeout thunder_cgnv6_stateful_firewall_tcp_stun_timeout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6StatefulFirewallTcpStunTimeoutConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6StatefulFirewallTcpStunTimeoutConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_stateful_firewall_tcp_stun_timeout',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._port = config.port;
    this._portEnd = config.portEnd;
    this._stunTimeoutValPortRange = config.stunTimeoutValPortRange;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_end - computed: false, optional: false, required: true
  private _portEnd?: number; 
  public get portEnd() {
    return this.getNumberAttribute('port_end');
  }
  public set portEnd(value: number) {
    this._portEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portEndInput() {
    return this._portEnd;
  }

  // stun_timeout_val_port_range - computed: false, optional: true, required: false
  private _stunTimeoutValPortRange?: number; 
  public get stunTimeoutValPortRange() {
    return this.getNumberAttribute('stun_timeout_val_port_range');
  }
  public set stunTimeoutValPortRange(value: number) {
    this._stunTimeoutValPortRange = value;
  }
  public resetStunTimeoutValPortRange() {
    this._stunTimeoutValPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stunTimeoutValPortRangeInput() {
    return this._stunTimeoutValPortRange;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      port_end: cdktf.numberToTerraform(this._portEnd),
      stun_timeout_val_port_range: cdktf.numberToTerraform(this._stunTimeoutValPortRange),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_end: {
        value: cdktf.numberToHclTerraform(this._portEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stun_timeout_val_port_range: {
        value: cdktf.numberToHclTerraform(this._stunTimeoutValPortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
