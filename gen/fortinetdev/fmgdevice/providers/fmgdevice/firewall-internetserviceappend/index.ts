// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetserviceappend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallInternetserviceappendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetserviceappend#addr_mode FirewallInternetserviceappend#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetserviceappend#append_port FirewallInternetserviceappend#append_port}
  */
  readonly appendPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetserviceappend#device_name FirewallInternetserviceappend#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetserviceappend#id FirewallInternetserviceappend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetserviceappend#match_port FirewallInternetserviceappend#match_port}
  */
  readonly matchPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetserviceappend fmgdevice_firewall_internetserviceappend}
*/
export class FirewallInternetserviceappend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_firewall_internetserviceappend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallInternetserviceappend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallInternetserviceappend to import
  * @param importFromId The id of the existing FirewallInternetserviceappend that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetserviceappend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallInternetserviceappend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_firewall_internetserviceappend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetserviceappend fmgdevice_firewall_internetserviceappend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallInternetserviceappendConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallInternetserviceappendConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_firewall_internetserviceappend',
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
    this._addrMode = config.addrMode;
    this._appendPort = config.appendPort;
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._matchPort = config.matchPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_mode - computed: true, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // append_port - computed: false, optional: true, required: false
  private _appendPort?: number; 
  public get appendPort() {
    return this.getNumberAttribute('append_port');
  }
  public set appendPort(value: number) {
    this._appendPort = value;
  }
  public resetAppendPort() {
    this._appendPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendPortInput() {
    return this._appendPort;
  }

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

  // match_port - computed: false, optional: true, required: false
  private _matchPort?: number; 
  public get matchPort() {
    return this.getNumberAttribute('match_port');
  }
  public set matchPort(value: number) {
    this._matchPort = value;
  }
  public resetMatchPort() {
    this._matchPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPortInput() {
    return this._matchPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_mode: cdktf.stringToTerraform(this._addrMode),
      append_port: cdktf.numberToTerraform(this._appendPort),
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      match_port: cdktf.numberToTerraform(this._matchPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_mode: {
        value: cdktf.stringToHclTerraform(this._addrMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      append_port: {
        value: cdktf.numberToHclTerraform(this._appendPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      match_port: {
        value: cdktf.numberToHclTerraform(this._matchPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
