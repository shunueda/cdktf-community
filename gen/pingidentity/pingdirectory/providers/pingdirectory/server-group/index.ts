// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/server_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * A server instance that is a member of this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/server_group#member ServerGroup#member}
  */
  readonly member?: string[];
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/server_group#name ServerGroup#name}
  */
  readonly name: string;
  /**
  * The type of Server Group resource. Options are ['server-group']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/server_group#type ServerGroup#type}
  */
  readonly type?: string;
}
export interface ServerGroupRequiredActions {
}

export function serverGroupRequiredActionsToTerraform(struct?: ServerGroupRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverGroupRequiredActionsToHclTerraform(struct?: ServerGroupRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerGroupRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerGroupRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerGroupRequiredActions | undefined) {
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

export class ServerGroupRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): ServerGroupRequiredActionsOutputReference {
    return new ServerGroupRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/server_group pingdirectory_server_group}
*/
export class ServerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_server_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerGroup to import
  * @param importFromId The id of the existing ServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/server_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_server_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/server_group pingdirectory_server_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ServerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_server_group',
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
    this._member = config.member;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member - computed: true, optional: true, required: false
  private _member?: string[]; 
  public get member() {
    return cdktf.Fn.tolist(this.getListAttribute('member'));
  }
  public set member(value: string[]) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
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
  private _requiredActions = new ServerGroupRequiredActionsList(this, "required_actions", true);
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
      member: cdktf.listMapper(cdktf.stringToTerraform, false)(this._member),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      member: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._member),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
