// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/destination_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAirbyteDestinationDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/destination_definition#workspace_id DataAirbyteDestinationDefinition#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/destination_definition airbyte_destination_definition}
*/
export class DataAirbyteDestinationDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAirbyteDestinationDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAirbyteDestinationDefinition to import
  * @param importFromId The id of the existing DataAirbyteDestinationDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/destination_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAirbyteDestinationDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/destination_definition airbyte_destination_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAirbyteDestinationDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAirbyteDestinationDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_definition',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // docker_image_tag - computed: true, optional: false, required: false
  public get dockerImageTag() {
    return this.getStringAttribute('docker_image_tag');
  }

  // docker_repository - computed: true, optional: false, required: false
  public get dockerRepository() {
    return this.getStringAttribute('docker_repository');
  }

  // documentation_url - computed: true, optional: false, required: false
  public get documentationUrl() {
    return this.getStringAttribute('documentation_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
