// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/privilege_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNexusPrivilegeScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the script privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/privilege_script#name DataNexusPrivilegeScript#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/privilege_script nexus_privilege_script}
*/
export class DataNexusPrivilegeScript extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_privilege_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNexusPrivilegeScript resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNexusPrivilegeScript to import
  * @param importFromId The id of the existing DataNexusPrivilegeScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/privilege_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNexusPrivilegeScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_privilege_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/privilege_script nexus_privilege_script} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNexusPrivilegeScriptConfig
  */
  public constructor(scope: Construct, id: string, config: DataNexusPrivilegeScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_privilege_script',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
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

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }

  // script_name - computed: true, optional: false, required: false
  public get scriptName() {
    return this.getStringAttribute('script_name');
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
