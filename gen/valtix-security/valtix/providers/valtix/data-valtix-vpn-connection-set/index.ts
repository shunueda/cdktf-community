// https://registry.terraform.io/providers/valtix-security/valtix/25.9.1/docs/data-sources/vpn_connection_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataValtixVpnConnectionSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.1/docs/data-sources/vpn_connection_set#id DataValtixVpnConnectionSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.1/docs/data-sources/vpn_connection_set#name DataValtixVpnConnectionSet#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.1/docs/data-sources/vpn_connection_set valtix_vpn_connection_set}
*/
export class DataValtixVpnConnectionSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_vpn_connection_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataValtixVpnConnectionSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataValtixVpnConnectionSet to import
  * @param importFromId The id of the existing DataValtixVpnConnectionSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.1/docs/data-sources/vpn_connection_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataValtixVpnConnectionSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_vpn_connection_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.1/docs/data-sources/vpn_connection_set valtix_vpn_connection_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataValtixVpnConnectionSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataValtixVpnConnectionSetConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_vpn_connection_set',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.1'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_set_id - computed: true, optional: false, required: false
  public get connectionSetId() {
    return this.getNumberAttribute('connection_set_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
