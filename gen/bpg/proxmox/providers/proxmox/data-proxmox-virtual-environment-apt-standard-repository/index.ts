// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_apt_standard_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentAptStandardRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The handle of the APT standard repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_apt_standard_repository#handle DataProxmoxVirtualEnvironmentAptStandardRepository#handle}
  */
  readonly handle: string;
  /**
  * The name of the target Proxmox VE node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_apt_standard_repository#node DataProxmoxVirtualEnvironmentAptStandardRepository#node}
  */
  readonly nodeAttribute: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_apt_standard_repository proxmox_virtual_environment_apt_standard_repository}
*/
export class DataProxmoxVirtualEnvironmentAptStandardRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_apt_standard_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentAptStandardRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentAptStandardRepository to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentAptStandardRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_apt_standard_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentAptStandardRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_apt_standard_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_apt_standard_repository proxmox_virtual_environment_apt_standard_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentAptStandardRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentAptStandardRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_apt_standard_repository',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._handle = config.handle;
    this._node = config.nodeAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }

  // handle - computed: false, optional: false, required: true
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node - computed: false, optional: false, required: true
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      handle: cdktf.stringToTerraform(this._handle),
      node: cdktf.stringToTerraform(this._node),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      handle: {
        value: cdktf.stringToHclTerraform(this._handle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node: {
        value: cdktf.stringToHclTerraform(this._node),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
