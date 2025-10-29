// https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/iam_user_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamUserPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/iam_user_policy_attachment#id IamUserPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/iam_user_policy_attachment#policy_urn IamUserPolicyAttachment#policy_urn}
  */
  readonly policyUrn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/iam_user_policy_attachment#project_id IamUserPolicyAttachment#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/iam_user_policy_attachment#user_name IamUserPolicyAttachment#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/iam_user_policy_attachment ucloud_iam_user_policy_attachment}
*/
export class IamUserPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ucloud_iam_user_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamUserPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamUserPolicyAttachment to import
  * @param importFromId The id of the existing IamUserPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/iam_user_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamUserPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ucloud_iam_user_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/iam_user_policy_attachment ucloud_iam_user_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamUserPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: IamUserPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'ucloud_iam_user_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'ucloud',
        providerVersion: '1.39.1'
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
    this._policyUrn = config.policyUrn;
    this._projectId = config.projectId;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // policy_urn - computed: false, optional: false, required: true
  private _policyUrn?: string; 
  public get policyUrn() {
    return this.getStringAttribute('policy_urn');
  }
  public set policyUrn(value: string) {
    this._policyUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUrnInput() {
    return this._policyUrn;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_urn: cdktf.stringToTerraform(this._policyUrn),
      project_id: cdktf.stringToTerraform(this._projectId),
      user_name: cdktf.stringToTerraform(this._userName),
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
      policy_urn: {
        value: cdktf.stringToHclTerraform(this._policyUrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
