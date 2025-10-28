// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/account_login
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeAccountLoginConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of this login object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/account_login#id DataLinodeAccountLogin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/account_login linode_account_login}
*/
export class DataLinodeAccountLogin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_account_login";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeAccountLogin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeAccountLogin to import
  * @param importFromId The id of the existing DataLinodeAccountLogin that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/account_login#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeAccountLogin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_account_login", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/account_login linode_account_login} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeAccountLoginConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinodeAccountLoginConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_account_login',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.0'
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

  // datetime - computed: true, optional: false, required: false
  public get datetime() {
    return this.getStringAttribute('datetime');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // restricted - computed: true, optional: false, required: false
  public get restricted() {
    return this.getBooleanAttribute('restricted');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
