// https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/uuid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UuidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/uuid#id Uuid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/uuid#keepers Uuid#keepers}
  */
  readonly keepers?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/uuid random_uuid}
*/
export class Uuid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "random_uuid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Uuid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Uuid to import
  * @param importFromId The id of the existing Uuid that should be imported. Refer to the {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/uuid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Uuid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "random_uuid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/uuid random_uuid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UuidConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UuidConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'random_uuid',
      terraformGeneratorMetadata: {
        providerName: 'random',
        providerVersion: '3.1.0'
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
    this._keepers = config.keepers;
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

  // keepers - computed: false, optional: true, required: false
  private _keepers?: { [key: string]: string }; 
  public get keepers() {
    return this.getStringMapAttribute('keepers');
  }
  public set keepers(value: { [key: string]: string }) {
    this._keepers = value;
  }
  public resetKeepers() {
    this._keepers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepersInput() {
    return this._keepers;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      keepers: cdktf.hashMapper(cdktf.stringToTerraform)(this._keepers),
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
      keepers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._keepers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
