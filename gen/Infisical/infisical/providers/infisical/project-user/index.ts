// https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user#project_id ProjectUser#project_id}
  */
  readonly projectId: string;
  /**
  * The roles assigned to the project user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user#roles ProjectUser#roles}
  */
  readonly roles: ProjectUserRoles[] | cdktf.IResolvable;
  /**
  * The usename of the user. By default its the email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user#username ProjectUser#username}
  */
  readonly username: string;
}
export interface ProjectUserRoles {
  /**
  * The id of the custom role slug
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user#custom_role_id ProjectUser#custom_role_id}
  */
  readonly customRoleId?: string;
  /**
  * Flag to indicate the assigned role is temporary or not. When is_temporary is true fields temporary_mode, temporary_range and temporary_access_start_time is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user#is_temporary ProjectUser#is_temporary}
  */
  readonly isTemporary?: boolean | cdktf.IResolvable;
  /**
  * The slug of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user#role_slug ProjectUser#role_slug}
  */
  readonly roleSlug: string;
  /**
  * ISO time for which temporary access will end. Computed based on temporary_range and temporary_access_start_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user#temporary_access_end_time ProjectUser#temporary_access_end_time}
  */
  readonly temporaryAccessEndTime?: string;
  /**
  * ISO time for which temporary access should begin. The current time is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user#temporary_access_start_time ProjectUser#temporary_access_start_time}
  */
  readonly temporaryAccessStartTime?: string;
  /**
  * Type of temporary access given. Types: relative. Default: relative
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user#temporary_mode ProjectUser#temporary_mode}
  */
  readonly temporaryMode?: string;
  /**
  * TTL for the temporary time. Eg: 1m, 1h, 1d. Default: 1h
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user#temporary_range ProjectUser#temporary_range}
  */
  readonly temporaryRange?: string;
}

export function projectUserRolesToTerraform(struct?: ProjectUserRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_role_id: cdktf.stringToTerraform(struct!.customRoleId),
    is_temporary: cdktf.booleanToTerraform(struct!.isTemporary),
    role_slug: cdktf.stringToTerraform(struct!.roleSlug),
    temporary_access_end_time: cdktf.stringToTerraform(struct!.temporaryAccessEndTime),
    temporary_access_start_time: cdktf.stringToTerraform(struct!.temporaryAccessStartTime),
    temporary_mode: cdktf.stringToTerraform(struct!.temporaryMode),
    temporary_range: cdktf.stringToTerraform(struct!.temporaryRange),
  }
}


export function projectUserRolesToHclTerraform(struct?: ProjectUserRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_role_id: {
      value: cdktf.stringToHclTerraform(struct!.customRoleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_temporary: {
      value: cdktf.booleanToHclTerraform(struct!.isTemporary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_slug: {
      value: cdktf.stringToHclTerraform(struct!.roleSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temporary_access_end_time: {
      value: cdktf.stringToHclTerraform(struct!.temporaryAccessEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temporary_access_start_time: {
      value: cdktf.stringToHclTerraform(struct!.temporaryAccessStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temporary_mode: {
      value: cdktf.stringToHclTerraform(struct!.temporaryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temporary_range: {
      value: cdktf.stringToHclTerraform(struct!.temporaryRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectUserRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectUserRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRoleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRoleId = this._customRoleId;
    }
    if (this._isTemporary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTemporary = this._isTemporary;
    }
    if (this._roleSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleSlug = this._roleSlug;
    }
    if (this._temporaryAccessEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryAccessEndTime = this._temporaryAccessEndTime;
    }
    if (this._temporaryAccessStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryAccessStartTime = this._temporaryAccessStartTime;
    }
    if (this._temporaryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryMode = this._temporaryMode;
    }
    if (this._temporaryRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryRange = this._temporaryRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectUserRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRoleId = undefined;
      this._isTemporary = undefined;
      this._roleSlug = undefined;
      this._temporaryAccessEndTime = undefined;
      this._temporaryAccessStartTime = undefined;
      this._temporaryMode = undefined;
      this._temporaryRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRoleId = value.customRoleId;
      this._isTemporary = value.isTemporary;
      this._roleSlug = value.roleSlug;
      this._temporaryAccessEndTime = value.temporaryAccessEndTime;
      this._temporaryAccessStartTime = value.temporaryAccessStartTime;
      this._temporaryMode = value.temporaryMode;
      this._temporaryRange = value.temporaryRange;
    }
  }

  // custom_role_id - computed: true, optional: true, required: false
  private _customRoleId?: string; 
  public get customRoleId() {
    return this.getStringAttribute('custom_role_id');
  }
  public set customRoleId(value: string) {
    this._customRoleId = value;
  }
  public resetCustomRoleId() {
    this._customRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRoleIdInput() {
    return this._customRoleId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_temporary - computed: true, optional: true, required: false
  private _isTemporary?: boolean | cdktf.IResolvable; 
  public get isTemporary() {
    return this.getBooleanAttribute('is_temporary');
  }
  public set isTemporary(value: boolean | cdktf.IResolvable) {
    this._isTemporary = value;
  }
  public resetIsTemporary() {
    this._isTemporary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTemporaryInput() {
    return this._isTemporary;
  }

  // role_slug - computed: false, optional: false, required: true
  private _roleSlug?: string; 
  public get roleSlug() {
    return this.getStringAttribute('role_slug');
  }
  public set roleSlug(value: string) {
    this._roleSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSlugInput() {
    return this._roleSlug;
  }

  // temporary_access_end_time - computed: true, optional: true, required: false
  private _temporaryAccessEndTime?: string; 
  public get temporaryAccessEndTime() {
    return this.getStringAttribute('temporary_access_end_time');
  }
  public set temporaryAccessEndTime(value: string) {
    this._temporaryAccessEndTime = value;
  }
  public resetTemporaryAccessEndTime() {
    this._temporaryAccessEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryAccessEndTimeInput() {
    return this._temporaryAccessEndTime;
  }

  // temporary_access_start_time - computed: true, optional: true, required: false
  private _temporaryAccessStartTime?: string; 
  public get temporaryAccessStartTime() {
    return this.getStringAttribute('temporary_access_start_time');
  }
  public set temporaryAccessStartTime(value: string) {
    this._temporaryAccessStartTime = value;
  }
  public resetTemporaryAccessStartTime() {
    this._temporaryAccessStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryAccessStartTimeInput() {
    return this._temporaryAccessStartTime;
  }

  // temporary_mode - computed: true, optional: true, required: false
  private _temporaryMode?: string; 
  public get temporaryMode() {
    return this.getStringAttribute('temporary_mode');
  }
  public set temporaryMode(value: string) {
    this._temporaryMode = value;
  }
  public resetTemporaryMode() {
    this._temporaryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryModeInput() {
    return this._temporaryMode;
  }

  // temporary_range - computed: true, optional: true, required: false
  private _temporaryRange?: string; 
  public get temporaryRange() {
    return this.getStringAttribute('temporary_range');
  }
  public set temporaryRange(value: string) {
    this._temporaryRange = value;
  }
  public resetTemporaryRange() {
    this._temporaryRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryRangeInput() {
    return this._temporaryRange;
  }
}

export class ProjectUserRolesList extends cdktf.ComplexList {
  public internalValue? : ProjectUserRoles[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectUserRolesOutputReference {
    return new ProjectUserRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectUserUser {
}

export function projectUserUserToTerraform(struct?: ProjectUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectUserUserToHclTerraform(struct?: ProjectUserUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectUserUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectUserUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectUserUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user infisical_project_user}
*/
export class ProjectUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_project_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectUser to import
  * @param importFromId The id of the existing ProjectUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/project_user infisical_project_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectUserConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectUserConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_project_user',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.15.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._roles.internalValue = config.roles;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // membership_id - computed: true, optional: false, required: false
  public get membershipId() {
    return this.getStringAttribute('membership_id');
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

  // roles - computed: false, optional: false, required: true
  private _roles = new ProjectUserRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: ProjectUserRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // user - computed: true, optional: false, required: false
  private _user = new ProjectUserUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      roles: cdktf.listMapper(projectUserRolesToTerraform, false)(this._roles.internalValue),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(projectUserRolesToHclTerraform, false)(this._roles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectUserRolesList",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
