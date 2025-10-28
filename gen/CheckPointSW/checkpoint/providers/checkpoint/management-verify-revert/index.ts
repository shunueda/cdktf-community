// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_verify_revert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementVerifyRevertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_verify_revert#id ManagementVerifyRevert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Session unique identifier. Specify the session you would like to verify a revert operation to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_verify_revert#to_session ManagementVerifyRevert#to_session}
  */
  readonly toSession: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_verify_revert checkpoint_management_verify_revert}
*/
export class ManagementVerifyRevert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_verify_revert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementVerifyRevert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementVerifyRevert to import
  * @param importFromId The id of the existing ManagementVerifyRevert that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_verify_revert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementVerifyRevert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_verify_revert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_verify_revert checkpoint_management_verify_revert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementVerifyRevertConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementVerifyRevertConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_verify_revert',
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
    this._toSession = config.toSession;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // to_session - computed: false, optional: false, required: true
  private _toSession?: string; 
  public get toSession() {
    return this.getStringAttribute('to_session');
  }
  public set toSession(value: string) {
    this._toSession = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toSessionInput() {
    return this._toSession;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      to_session: cdktf.stringToTerraform(this._toSession),
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
      to_session: {
        value: cdktf.stringToHclTerraform(this._toSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
