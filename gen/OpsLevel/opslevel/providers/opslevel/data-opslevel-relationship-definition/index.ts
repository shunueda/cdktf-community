// https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/data-sources/relationship_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpslevelRelationshipDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier (id or alias) of the component type to lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/data-sources/relationship_definition#identifier DataOpslevelRelationshipDefinition#identifier}
  */
  readonly identifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/data-sources/relationship_definition opslevel_relationship_definition}
*/
export class DataOpslevelRelationshipDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_relationship_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpslevelRelationshipDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpslevelRelationshipDefinition to import
  * @param importFromId The id of the existing DataOpslevelRelationshipDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/data-sources/relationship_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpslevelRelationshipDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_relationship_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/data-sources/relationship_definition opslevel_relationship_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpslevelRelationshipDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpslevelRelationshipDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_relationship_definition',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._identifier = config.identifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // allowed_types - computed: true, optional: false, required: false
  public get allowedTypes() {
    return this.getListAttribute('allowed_types');
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identifier: cdktf.stringToTerraform(this._identifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
