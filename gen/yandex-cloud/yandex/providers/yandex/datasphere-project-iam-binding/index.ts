// https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/datasphere_project_iam_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasphereProjectIamBindingConfig extends cdktf.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/datasphere_project_iam_binding#members DatasphereProjectIamBinding#members}
  */
  readonly members: string[];
  /**
  * The ID of the compute `project` to attach the policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/datasphere_project_iam_binding#project_id DatasphereProjectIamBinding#project_id}
  */
  readonly projectId: string;
  /**
  * The role that should be assigned. Only one yandex_datasphere_project_iam_binding can be used per role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/datasphere_project_iam_binding#role DatasphereProjectIamBinding#role}
  */
  readonly role: string;
  /**
  * For test purposes, to compensate IAM operations delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/datasphere_project_iam_binding#sleep_after DatasphereProjectIamBinding#sleep_after}
  */
  readonly sleepAfter?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/datasphere_project_iam_binding yandex_datasphere_project_iam_binding}
*/
export class DatasphereProjectIamBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_datasphere_project_iam_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatasphereProjectIamBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasphereProjectIamBinding to import
  * @param importFromId The id of the existing DatasphereProjectIamBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/datasphere_project_iam_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasphereProjectIamBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_datasphere_project_iam_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/datasphere_project_iam_binding yandex_datasphere_project_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasphereProjectIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: DatasphereProjectIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_datasphere_project_iam_binding',
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
    this._projectId = config.projectId;
    this._role = config.role;
    this._sleepAfter = config.sleepAfter;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      project_id: cdktf.stringToTerraform(this._projectId),
      role: cdktf.stringToTerraform(this._role),
      sleep_after: cdktf.numberToTerraform(this._sleepAfter),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
