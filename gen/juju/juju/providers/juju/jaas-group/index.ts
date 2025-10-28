// https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/jaas_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JaasGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/jaas_group#name JaasGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/jaas_group juju_jaas_group}
*/
export class JaasGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_jaas_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JaasGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JaasGroup to import
  * @param importFromId The id of the existing JaasGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/jaas_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JaasGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_jaas_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/jaas_group juju_jaas_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JaasGroupConfig
  */
  public constructor(scope: Construct, id: string, config: JaasGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_jaas_group',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '1.0.0'
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
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
