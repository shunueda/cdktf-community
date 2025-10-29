// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/kea_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpnsenseKeaPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/kea_peer#id DataOpnsenseKeaPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/kea_peer opnsense_kea_peer}
*/
export class DataOpnsenseKeaPeer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_kea_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpnsenseKeaPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpnsenseKeaPeer to import
  * @param importFromId The id of the existing DataOpnsenseKeaPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/kea_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpnsenseKeaPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_kea_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/kea_peer opnsense_kea_peer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpnsenseKeaPeerConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpnsenseKeaPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_kea_peer',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
