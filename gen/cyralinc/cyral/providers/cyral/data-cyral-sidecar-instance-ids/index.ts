// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_instance_ids
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCyralSidecarInstanceIdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the sidecar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_instance_ids#sidecar_id DataCyralSidecarInstanceIds#sidecar_id}
  */
  readonly sidecarId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_instance_ids cyral_sidecar_instance_ids}
*/
export class DataCyralSidecarInstanceIds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_sidecar_instance_ids";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCyralSidecarInstanceIds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCyralSidecarInstanceIds to import
  * @param importFromId The id of the existing DataCyralSidecarInstanceIds that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_instance_ids#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCyralSidecarInstanceIds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_sidecar_instance_ids", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_instance_ids cyral_sidecar_instance_ids} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCyralSidecarInstanceIdsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCyralSidecarInstanceIdsConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_sidecar_instance_ids',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._sidecarId = config.sidecarId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_ids - computed: true, optional: false, required: false
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }

  // sidecar_id - computed: false, optional: false, required: true
  private _sidecarId?: string; 
  public get sidecarId() {
    return this.getStringAttribute('sidecar_id');
  }
  public set sidecarId(value: string) {
    this._sidecarId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarIdInput() {
    return this._sidecarId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sidecar_id: cdktf.stringToTerraform(this._sidecarId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sidecar_id: {
        value: cdktf.stringToHclTerraform(this._sidecarId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
