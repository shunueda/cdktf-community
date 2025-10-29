// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/rsa_pub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkeylessRsaPubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/rsa_pub#id DataAkeylessRsaPub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of RSA key to extract the public key from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/rsa_pub#name DataAkeylessRsaPub#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/rsa_pub akeyless_rsa_pub}
*/
export class DataAkeylessRsaPub extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_rsa_pub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkeylessRsaPub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkeylessRsaPub to import
  * @param importFromId The id of the existing DataAkeylessRsaPub that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/rsa_pub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkeylessRsaPub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_rsa_pub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/rsa_pub akeyless_rsa_pub} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkeylessRsaPubConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkeylessRsaPubConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_rsa_pub',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
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

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }

  // ssh - computed: true, optional: false, required: false
  public get ssh() {
    return this.getStringAttribute('ssh');
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
