// https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProdvanaApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/application#description DataProdvanaApplication#description}
  */
  readonly description?: string;
  /**
  * Application name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/application#name DataProdvanaApplication#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/application prodvana_application}
*/
export class DataProdvanaApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prodvana_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProdvanaApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProdvanaApplication to import
  * @param importFromId The id of the existing DataProdvanaApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProdvanaApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prodvana_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/application prodvana_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProdvanaApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataProdvanaApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'prodvana_application',
      terraformGeneratorMetadata: {
        providerName: 'prodvana',
        providerVersion: '0.1.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
