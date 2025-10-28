// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_nuage_data_center_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementNuageDataCenterServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_nuage_data_center_server#id DataCheckpointManagementNuageDataCenterServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name. Must be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_nuage_data_center_server#name DataCheckpointManagementNuageDataCenterServer#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_nuage_data_center_server#uid DataCheckpointManagementNuageDataCenterServer#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_nuage_data_center_server checkpoint_management_nuage_data_center_server}
*/
export class DataCheckpointManagementNuageDataCenterServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_nuage_data_center_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementNuageDataCenterServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementNuageDataCenterServer to import
  * @param importFromId The id of the existing DataCheckpointManagementNuageDataCenterServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_nuage_data_center_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementNuageDataCenterServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_nuage_data_center_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_nuage_data_center_server checkpoint_management_nuage_data_center_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementNuageDataCenterServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementNuageDataCenterServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_nuage_data_center_server',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_fingerprint - computed: true, optional: false, required: false
  public get certificateFingerprint() {
    return this.getStringAttribute('certificate_fingerprint');
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

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

  // name - computed: false, optional: true, required: false
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

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // unsafe_auto_accept - computed: true, optional: false, required: false
  public get unsafeAutoAccept() {
    return this.getBooleanAttribute('unsafe_auto_accept');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
