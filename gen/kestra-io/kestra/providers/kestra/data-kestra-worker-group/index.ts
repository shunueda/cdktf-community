// https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/worker_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKestraWorkerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The worker group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/worker_group#id DataKestraWorkerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The worker group key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/worker_group#key DataKestraWorkerGroup#key}
  */
  readonly key: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/worker_group kestra_worker_group}
*/
export class DataKestraWorkerGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kestra_worker_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKestraWorkerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKestraWorkerGroup to import
  * @param importFromId The id of the existing DataKestraWorkerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/worker_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKestraWorkerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kestra_worker_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.1/docs/data-sources/worker_group kestra_worker_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKestraWorkerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataKestraWorkerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'kestra_worker_group',
      terraformGeneratorMetadata: {
        providerName: 'kestra',
        providerVersion: '1.0.1'
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
    this._key = config.key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_tenants - computed: true, optional: false, required: false
  public get allowedTenants() {
    return this.getStringAttribute('allowed_tenants');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
