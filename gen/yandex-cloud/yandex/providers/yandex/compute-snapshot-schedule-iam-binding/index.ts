// https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/compute_snapshot_schedule_iam_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSnapshotScheduleIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array of identities that will be granted the privilege in the `role`. Each entry can have one of the following values:
  *  * **userAccount:{user_id}**: A unique user ID that represents a specific Yandex account.
  *  * **serviceAccount:{service_account_id}**: A unique service account ID.
  *  * **federatedUser:{federated_user_id}**: A unique federated user ID.
  *  * **federatedUser:{federated_user_id}:**: A unique SAML federation user account ID.
  *  * **group:{group_id}**: A unique group ID.
  *  * **system:group:federation:{federation_id}:users**: All users in federation.
  *  * **system:group:organization:{organization_id}:users**: All users in organization.
  *  * **system:allAuthenticatedUsers**: All authenticated users.
  *  * **system:allUsers**: All users, including unauthenticated ones.
  * 
  * ~> for more information about system groups, see [Cloud Documentation](https://yandex.cloud/docs/iam/concepts/access-control/system-group).
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/compute_snapshot_schedule_iam_binding#members ComputeSnapshotScheduleIamBinding#members}
  */
  readonly members: string[];
  /**
  * The role that should be assigned. Only one yandex_compute_snapshot_schedule_iam_binding can be used per role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/compute_snapshot_schedule_iam_binding#role ComputeSnapshotScheduleIamBinding#role}
  */
  readonly role: string;
  /**
  * For test purposes, to compensate IAM operations delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/compute_snapshot_schedule_iam_binding#sleep_after ComputeSnapshotScheduleIamBinding#sleep_after}
  */
  readonly sleepAfter?: number;
  /**
  * The ID of the compute `snapshot_schedule` to attach the policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/compute_snapshot_schedule_iam_binding#snapshot_schedule_id ComputeSnapshotScheduleIamBinding#snapshot_schedule_id}
  */
  readonly snapshotScheduleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/compute_snapshot_schedule_iam_binding yandex_compute_snapshot_schedule_iam_binding}
*/
export class ComputeSnapshotScheduleIamBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_compute_snapshot_schedule_iam_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeSnapshotScheduleIamBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeSnapshotScheduleIamBinding to import
  * @param importFromId The id of the existing ComputeSnapshotScheduleIamBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/compute_snapshot_schedule_iam_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeSnapshotScheduleIamBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_compute_snapshot_schedule_iam_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/compute_snapshot_schedule_iam_binding yandex_compute_snapshot_schedule_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeSnapshotScheduleIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeSnapshotScheduleIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_compute_snapshot_schedule_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.168.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._members = config.members;
    this._role = config.role;
    this._sleepAfter = config.sleepAfter;
    this._snapshotScheduleId = config.snapshotScheduleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // members - computed: false, optional: false, required: true
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // sleep_after - computed: false, optional: true, required: false
  private _sleepAfter?: number; 
  public get sleepAfter() {
    return this.getNumberAttribute('sleep_after');
  }
  public set sleepAfter(value: number) {
    this._sleepAfter = value;
  }
  public resetSleepAfter() {
    this._sleepAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepAfterInput() {
    return this._sleepAfter;
  }

  // snapshot_schedule_id - computed: false, optional: false, required: true
  private _snapshotScheduleId?: string; 
  public get snapshotScheduleId() {
    return this.getStringAttribute('snapshot_schedule_id');
  }
  public set snapshotScheduleId(value: string) {
    this._snapshotScheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotScheduleIdInput() {
    return this._snapshotScheduleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      role: cdktf.stringToTerraform(this._role),
      sleep_after: cdktf.numberToTerraform(this._sleepAfter),
      snapshot_schedule_id: cdktf.stringToTerraform(this._snapshotScheduleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sleep_after: {
        value: cdktf.numberToHclTerraform(this._sleepAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_schedule_id: {
        value: cdktf.stringToHclTerraform(this._snapshotScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
