// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ascm_custom_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AscmCustomRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ascm_custom_role#description AscmCustomRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ascm_custom_role#id AscmCustomRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ascm_custom_role#organization_visibility AscmCustomRole#organization_visibility}
  */
  readonly organizationVisibility: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ascm_custom_role#privileges AscmCustomRole#privileges}
  */
  readonly privileges: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ascm_custom_role#role_name AscmCustomRole#role_name}
  */
  readonly roleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ascm_custom_role#role_range AscmCustomRole#role_range}
  */
  readonly roleRange: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ascm_custom_role alibabacloudstack_ascm_custom_role}
*/
export class AscmCustomRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ascm_custom_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AscmCustomRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AscmCustomRole to import
  * @param importFromId The id of the existing AscmCustomRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ascm_custom_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AscmCustomRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ascm_custom_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/ascm_custom_role alibabacloudstack_ascm_custom_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AscmCustomRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AscmCustomRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ascm_custom_role',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._organizationVisibility = config.organizationVisibility;
    this._privileges = config.privileges;
    this._roleName = config.roleName;
    this._roleRange = config.roleRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // organization_visibility - computed: false, optional: false, required: true
  private _organizationVisibility?: string; 
  public get organizationVisibility() {
    return this.getStringAttribute('organization_visibility');
  }
  public set organizationVisibility(value: string) {
    this._organizationVisibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationVisibilityInput() {
    return this._organizationVisibility;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // role_range - computed: false, optional: false, required: true
  private _roleRange?: string; 
  public get roleRange() {
    return this.getStringAttribute('role_range');
  }
  public set roleRange(value: string) {
    this._roleRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRangeInput() {
    return this._roleRange;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      organization_visibility: cdktf.stringToTerraform(this._organizationVisibility),
      privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privileges),
      role_name: cdktf.stringToTerraform(this._roleName),
      role_range: cdktf.stringToTerraform(this._roleRange),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      organization_visibility: {
        value: cdktf.stringToHclTerraform(this._organizationVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privileges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_range: {
        value: cdktf.stringToHclTerraform(this._roleRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
