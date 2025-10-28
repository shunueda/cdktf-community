// https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/data-sources/api_key_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataClickhouseApiKeyIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the API key to retrieve information about. If left empty, the API key used by the Terraform provider is used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/data-sources/api_key_id#name DataClickhouseApiKeyId#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/data-sources/api_key_id clickhouse_api_key_id}
*/
export class DataClickhouseApiKeyId extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhouse_api_key_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataClickhouseApiKeyId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataClickhouseApiKeyId to import
  * @param importFromId The id of the existing DataClickhouseApiKeyId that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/data-sources/api_key_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataClickhouseApiKeyId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhouse_api_key_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/data-sources/api_key_id clickhouse_api_key_id} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataClickhouseApiKeyIdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataClickhouseApiKeyIdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'clickhouse_api_key_id',
      terraformGeneratorMetadata: {
        providerName: 'clickhouse',
        providerVersion: '3.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
