// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/accept_join_share_unit_invitation_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcceptJoinShareUnitInvitationOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/accept_join_share_unit_invitation_operation#id AcceptJoinShareUnitInvitationOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Shared unit ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/accept_join_share_unit_invitation_operation#unit_id AcceptJoinShareUnitInvitationOperation#unit_id}
  */
  readonly unitId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/accept_join_share_unit_invitation_operation tencentcloud_accept_join_share_unit_invitation_operation}
*/
export class AcceptJoinShareUnitInvitationOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_accept_join_share_unit_invitation_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcceptJoinShareUnitInvitationOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcceptJoinShareUnitInvitationOperation to import
  * @param importFromId The id of the existing AcceptJoinShareUnitInvitationOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/accept_join_share_unit_invitation_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcceptJoinShareUnitInvitationOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_accept_join_share_unit_invitation_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/accept_join_share_unit_invitation_operation tencentcloud_accept_join_share_unit_invitation_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcceptJoinShareUnitInvitationOperationConfig
  */
  public constructor(scope: Construct, id: string, config: AcceptJoinShareUnitInvitationOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_accept_join_share_unit_invitation_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.32'
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
    this._unitId = config.unitId;
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

  // unit_id - computed: false, optional: false, required: true
  private _unitId?: string; 
  public get unitId() {
    return this.getStringAttribute('unit_id');
  }
  public set unitId(value: string) {
    this._unitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitIdInput() {
    return this._unitId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      unit_id: cdktf.stringToTerraform(this._unitId),
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
      unit_id: {
        value: cdktf.stringToHclTerraform(this._unitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
