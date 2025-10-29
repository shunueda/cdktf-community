// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_rights
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DelegatedAdminRightsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the DN of a group of administrative users who have authority to manage resources. Either admin-user-dn or admin-group-dn must be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_rights#admin_group_dn DelegatedAdminRights#admin_group_dn}
  */
  readonly adminGroupDn?: string;
  /**
  * Specifies the DN of an administrative user who has authority to manage resources. Either admin-user-dn or admin-group-dn must be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_rights#admin_user_dn DelegatedAdminRights#admin_user_dn}
  */
  readonly adminUserDn?: string;
  /**
  * A description for this Delegated Admin Rights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_rights#description DelegatedAdminRights#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the Delegated Admin Rights is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_rights#enabled DelegatedAdminRights#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_rights#name DelegatedAdminRights#name}
  */
  readonly name: string;
  /**
  * The type of Delegated Admin Rights resource. Options are ['delegated-admin-rights']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_rights#type DelegatedAdminRights#type}
  */
  readonly type?: string;
}
export interface DelegatedAdminRightsRequiredActions {
}

export function delegatedAdminRightsRequiredActionsToTerraform(struct?: DelegatedAdminRightsRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function delegatedAdminRightsRequiredActionsToHclTerraform(struct?: DelegatedAdminRightsRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DelegatedAdminRightsRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DelegatedAdminRightsRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DelegatedAdminRightsRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DelegatedAdminRightsRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DelegatedAdminRightsRequiredActionsOutputReference {
    return new DelegatedAdminRightsRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_rights pingdirectory_delegated_admin_rights}
*/
export class DelegatedAdminRights extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_delegated_admin_rights";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DelegatedAdminRights resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DelegatedAdminRights to import
  * @param importFromId The id of the existing DelegatedAdminRights that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_rights#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DelegatedAdminRights to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_delegated_admin_rights", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_rights pingdirectory_delegated_admin_rights} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DelegatedAdminRightsConfig
  */
  public constructor(scope: Construct, id: string, config: DelegatedAdminRightsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_delegated_admin_rights',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminGroupDn = config.adminGroupDn;
    this._adminUserDn = config.adminUserDn;
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_group_dn - computed: false, optional: true, required: false
  private _adminGroupDn?: string; 
  public get adminGroupDn() {
    return this.getStringAttribute('admin_group_dn');
  }
  public set adminGroupDn(value: string) {
    this._adminGroupDn = value;
  }
  public resetAdminGroupDn() {
    this._adminGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupDnInput() {
    return this._adminGroupDn;
  }

  // admin_user_dn - computed: false, optional: true, required: false
  private _adminUserDn?: string; 
  public get adminUserDn() {
    return this.getStringAttribute('admin_user_dn');
  }
  public set adminUserDn(value: string) {
    this._adminUserDn = value;
  }
  public resetAdminUserDn() {
    this._adminUserDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserDnInput() {
    return this._adminUserDn;
  }

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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DelegatedAdminRightsRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_group_dn: cdktf.stringToTerraform(this._adminGroupDn),
      admin_user_dn: cdktf.stringToTerraform(this._adminUserDn),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_group_dn: {
        value: cdktf.stringToHclTerraform(this._adminGroupDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_user_dn: {
        value: cdktf.stringToHclTerraform(this._adminUserDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
