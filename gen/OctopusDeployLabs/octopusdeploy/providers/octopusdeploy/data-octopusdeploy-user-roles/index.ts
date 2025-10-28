// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/user_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployUserRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * A filter to search by a list of IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/user_roles#ids DataOctopusdeployUserRoles#ids}
  */
  readonly ids?: string[];
  /**
  * A filter to search by the partial match of a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/user_roles#partial_name DataOctopusdeployUserRoles#partial_name}
  */
  readonly partialName?: string;
  /**
  * A filter to specify the number of items to skip in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/user_roles#skip DataOctopusdeployUserRoles#skip}
  */
  readonly skip?: number;
  /**
  * A Space ID to filter by. Will revert what is specified on the provider if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/user_roles#space_id DataOctopusdeployUserRoles#space_id}
  */
  readonly spaceId?: string;
  /**
  * A filter to specify the number of items to take (or return) in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/user_roles#take DataOctopusdeployUserRoles#take}
  */
  readonly take?: number;
}
export interface DataOctopusdeployUserRolesUserRoles {
}

export function dataOctopusdeployUserRolesUserRolesToTerraform(struct?: DataOctopusdeployUserRolesUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployUserRolesUserRolesToHclTerraform(struct?: DataOctopusdeployUserRolesUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployUserRolesUserRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOctopusdeployUserRolesUserRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployUserRolesUserRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_be_deleted - computed: true, optional: false, required: false
  public get canBeDeleted() {
    return this.getBooleanAttribute('can_be_deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // granted_space_permissions - computed: true, optional: false, required: false
  public get grantedSpacePermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('granted_space_permissions'));
  }

  // granted_system_permissions - computed: true, optional: false, required: false
  public get grantedSystemPermissions() {
    return this.getListAttribute('granted_system_permissions');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // space_permission_descriptions - computed: true, optional: false, required: false
  public get spacePermissionDescriptions() {
    return this.getListAttribute('space_permission_descriptions');
  }

  // supported_restrictions - computed: true, optional: false, required: false
  public get supportedRestrictions() {
    return this.getListAttribute('supported_restrictions');
  }

  // system_permission_descriptions - computed: true, optional: false, required: false
  public get systemPermissionDescriptions() {
    return this.getListAttribute('system_permission_descriptions');
  }
}

export class DataOctopusdeployUserRolesUserRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployUserRolesUserRolesOutputReference {
    return new DataOctopusdeployUserRolesUserRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/user_roles octopusdeploy_user_roles}
*/
export class DataOctopusdeployUserRoles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_user_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployUserRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployUserRoles to import
  * @param importFromId The id of the existing DataOctopusdeployUserRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/user_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployUserRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_user_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/user_roles octopusdeploy_user_roles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployUserRolesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployUserRolesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_user_roles',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '0.43.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ids = config.ids;
    this._partialName = config.partialName;
    this._skip = config.skip;
    this._spaceId = config.spaceId;
    this._take = config.take;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // partial_name - computed: false, optional: true, required: false
  private _partialName?: string; 
  public get partialName() {
    return this.getStringAttribute('partial_name');
  }
  public set partialName(value: string) {
    this._partialName = value;
  }
  public resetPartialName() {
    this._partialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialNameInput() {
    return this._partialName;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // space_id - computed: false, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // take - computed: false, optional: true, required: false
  private _take?: number; 
  public get take() {
    return this.getNumberAttribute('take');
  }
  public set take(value: number) {
    this._take = value;
  }
  public resetTake() {
    this._take = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeInput() {
    return this._take;
  }

  // user_roles - computed: true, optional: false, required: false
  private _userRoles = new DataOctopusdeployUserRolesUserRolesList(this, "user_roles", false);
  public get userRoles() {
    return this._userRoles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      partial_name: cdktf.stringToTerraform(this._partialName),
      skip: cdktf.numberToTerraform(this._skip),
      space_id: cdktf.stringToTerraform(this._spaceId),
      take: cdktf.numberToTerraform(this._take),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      partial_name: {
        value: cdktf.stringToHclTerraform(this._partialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      take: {
        value: cdktf.numberToHclTerraform(this._take),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
