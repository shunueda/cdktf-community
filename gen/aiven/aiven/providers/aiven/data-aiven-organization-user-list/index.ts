// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/organization_user_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenOrganizationUserListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/organization_user_list#id DataAivenOrganizationUserList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/organization_user_list#name DataAivenOrganizationUserList#name}
  */
  readonly name?: string;
}
export interface DataAivenOrganizationUserListUsersUserInfo {
}

export function dataAivenOrganizationUserListUsersUserInfoToTerraform(struct?: DataAivenOrganizationUserListUsersUserInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOrganizationUserListUsersUserInfoToHclTerraform(struct?: DataAivenOrganizationUserListUsersUserInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOrganizationUserListUsersUserInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOrganizationUserListUsersUserInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOrganizationUserListUsersUserInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // department - computed: true, optional: false, required: false
  public get department() {
    return this.getStringAttribute('department');
  }

  // is_application_user - computed: true, optional: false, required: false
  public get isApplicationUser() {
    return this.getBooleanAttribute('is_application_user');
  }

  // job_title - computed: true, optional: false, required: false
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }

  // managed_by_scim - computed: true, optional: false, required: false
  public get managedByScim() {
    return this.getBooleanAttribute('managed_by_scim');
  }

  // managing_organization_id - computed: true, optional: false, required: false
  public get managingOrganizationId() {
    return this.getStringAttribute('managing_organization_id');
  }

  // real_name - computed: true, optional: false, required: false
  public get realName() {
    return this.getStringAttribute('real_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // user_email - computed: true, optional: false, required: false
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }
}

export class DataAivenOrganizationUserListUsersUserInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOrganizationUserListUsersUserInfoOutputReference {
    return new DataAivenOrganizationUserListUsersUserInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOrganizationUserListUsers {
}

export function dataAivenOrganizationUserListUsersToTerraform(struct?: DataAivenOrganizationUserListUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOrganizationUserListUsersToHclTerraform(struct?: DataAivenOrganizationUserListUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOrganizationUserListUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOrganizationUserListUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOrganizationUserListUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_super_admin - computed: true, optional: false, required: false
  public get isSuperAdmin() {
    return this.getBooleanAttribute('is_super_admin');
  }

  // join_time - computed: true, optional: false, required: false
  public get joinTime() {
    return this.getStringAttribute('join_time');
  }

  // last_activity_time - computed: true, optional: false, required: false
  public get lastActivityTime() {
    return this.getStringAttribute('last_activity_time');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_info - computed: true, optional: false, required: false
  private _userInfo = new DataAivenOrganizationUserListUsersUserInfoList(this, "user_info", false);
  public get userInfo() {
    return this._userInfo;
  }
}

export class DataAivenOrganizationUserListUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOrganizationUserListUsersOutputReference {
    return new DataAivenOrganizationUserListUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/organization_user_list aiven_organization_user_list}
*/
export class DataAivenOrganizationUserList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_organization_user_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenOrganizationUserList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenOrganizationUserList to import
  * @param importFromId The id of the existing DataAivenOrganizationUserList that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/organization_user_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenOrganizationUserList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_organization_user_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/organization_user_list aiven_organization_user_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenOrganizationUserListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAivenOrganizationUserListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aiven_organization_user_list',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataAivenOrganizationUserListUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
