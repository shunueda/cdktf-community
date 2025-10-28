// https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/bastionhost_host_account_user_group_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BastionhostHostAccountUserGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/bastionhost_host_account_user_group_attachment#host_account_ids BastionhostHostAccountUserGroupAttachment#host_account_ids}
  */
  readonly hostAccountIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/bastionhost_host_account_user_group_attachment#host_id BastionhostHostAccountUserGroupAttachment#host_id}
  */
  readonly hostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/bastionhost_host_account_user_group_attachment#id BastionhostHostAccountUserGroupAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/bastionhost_host_account_user_group_attachment#instance_id BastionhostHostAccountUserGroupAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/bastionhost_host_account_user_group_attachment#user_group_id BastionhostHostAccountUserGroupAttachment#user_group_id}
  */
  readonly userGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/bastionhost_host_account_user_group_attachment alicloud_bastionhost_host_account_user_group_attachment}
*/
export class BastionhostHostAccountUserGroupAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_bastionhost_host_account_user_group_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BastionhostHostAccountUserGroupAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BastionhostHostAccountUserGroupAttachment to import
  * @param importFromId The id of the existing BastionhostHostAccountUserGroupAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/bastionhost_host_account_user_group_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BastionhostHostAccountUserGroupAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_bastionhost_host_account_user_group_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/bastionhost_host_account_user_group_attachment alicloud_bastionhost_host_account_user_group_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BastionhostHostAccountUserGroupAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: BastionhostHostAccountUserGroupAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_bastionhost_host_account_user_group_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.261.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostAccountIds = config.hostAccountIds;
    this._hostId = config.hostId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._userGroupId = config.userGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_account_ids - computed: false, optional: false, required: true
  private _hostAccountIds?: string[]; 
  public get hostAccountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_account_ids'));
  }
  public set hostAccountIds(value: string[]) {
    this._hostAccountIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAccountIdsInput() {
    return this._hostAccountIds;
  }

  // host_id - computed: false, optional: false, required: true
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // user_group_id - computed: false, optional: false, required: true
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostAccountIds),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      user_group_id: cdktf.stringToTerraform(this._userGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_id: {
        value: cdktf.stringToHclTerraform(this._userGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
