// https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.5/docs/resources/user_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of roles assigned to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.5/docs/resources/user_roles#roles UserRoles#roles}
  */
  readonly roles: UserRolesRoles[] | cdktf.IResolvable;
  /**
  * The unique identifier of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.5/docs/resources/user_roles#user_id UserRoles#user_id}
  */
  readonly userId: string;
}
export interface UserRolesRoles {
  /**
  * The identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.5/docs/resources/user_roles#resource_id UserRoles#resource_id}
  */
  readonly resourceId: string;
  /**
  * The type of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.5/docs/resources/user_roles#resource_type UserRoles#resource_type}
  */
  readonly resourceType: string;
  /**
  * The name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.5/docs/resources/user_roles#role_name UserRoles#role_name}
  */
  readonly roleName: string;
}

export function userRolesRolesToTerraform(struct?: UserRolesRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function userRolesRolesToHclTerraform(struct?: UserRolesRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRolesRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRolesRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRolesRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
      this._roleName = value.roleName;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
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
}

export class UserRolesRolesList extends cdktf.ComplexList {
  public internalValue? : UserRolesRoles[] | cdktf.IResolvable

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
  public get(index: number): UserRolesRolesOutputReference {
    return new UserRolesRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.5/docs/resources/user_roles singlestoredb_user_roles}
*/
export class UserRoles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "singlestoredb_user_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserRoles to import
  * @param importFromId The id of the existing UserRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.5/docs/resources/user_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "singlestoredb_user_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.5/docs/resources/user_roles singlestoredb_user_roles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserRolesConfig
  */
  public constructor(scope: Construct, id: string, config: UserRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'singlestoredb_user_roles',
      terraformGeneratorMetadata: {
        providerName: 'singlestoredb',
        providerVersion: '0.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._roles.internalValue = config.roles;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // roles - computed: false, optional: false, required: true
  private _roles = new UserRolesRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: UserRolesRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      roles: cdktf.listMapper(userRolesRolesToTerraform, false)(this._roles.internalValue),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      roles: {
        value: cdktf.listMapperHcl(userRolesRolesToHclTerraform, false)(this._roles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserRolesRolesList",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
