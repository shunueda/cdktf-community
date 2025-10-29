// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_update_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkDeviceUpdateRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_update_role#id NetworkDeviceUpdateRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_update_role#parameters NetworkDeviceUpdateRole#parameters}
  */
  readonly parameters: NetworkDeviceUpdateRoleParameters;
}
export interface NetworkDeviceUpdateRoleItem {
}

export function networkDeviceUpdateRoleItemToTerraform(struct?: NetworkDeviceUpdateRoleItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkDeviceUpdateRoleItemToHclTerraform(struct?: NetworkDeviceUpdateRoleItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkDeviceUpdateRoleItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDeviceUpdateRoleItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceUpdateRoleItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class NetworkDeviceUpdateRoleItemList extends cdktf.ComplexList {

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
  public get(index: number): NetworkDeviceUpdateRoleItemOutputReference {
    return new NetworkDeviceUpdateRoleItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDeviceUpdateRoleParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_update_role#id NetworkDeviceUpdateRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_update_role#role NetworkDeviceUpdateRole#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_update_role#role_source NetworkDeviceUpdateRole#role_source}
  */
  readonly roleSource?: string;
}

export function networkDeviceUpdateRoleParametersToTerraform(struct?: NetworkDeviceUpdateRoleParametersOutputReference | NetworkDeviceUpdateRoleParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    role: cdktf.stringToTerraform(struct!.role),
    role_source: cdktf.stringToTerraform(struct!.roleSource),
  }
}


export function networkDeviceUpdateRoleParametersToHclTerraform(struct?: NetworkDeviceUpdateRoleParametersOutputReference | NetworkDeviceUpdateRoleParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_source: {
      value: cdktf.stringToHclTerraform(struct!.roleSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceUpdateRoleParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkDeviceUpdateRoleParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._roleSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleSource = this._roleSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceUpdateRoleParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._role = undefined;
      this._roleSource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._role = value.role;
      this._roleSource = value.roleSource;
    }
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

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // role_source - computed: true, optional: true, required: false
  private _roleSource?: string; 
  public get roleSource() {
    return this.getStringAttribute('role_source');
  }
  public set roleSource(value: string) {
    this._roleSource = value;
  }
  public resetRoleSource() {
    this._roleSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSourceInput() {
    return this._roleSource;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_update_role dnacenter_network_device_update_role}
*/
export class NetworkDeviceUpdateRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_network_device_update_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkDeviceUpdateRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkDeviceUpdateRole to import
  * @param importFromId The id of the existing NetworkDeviceUpdateRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_update_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkDeviceUpdateRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_network_device_update_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_update_role dnacenter_network_device_update_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkDeviceUpdateRoleConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkDeviceUpdateRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_network_device_update_role',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new NetworkDeviceUpdateRoleItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new NetworkDeviceUpdateRoleParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: NetworkDeviceUpdateRoleParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: networkDeviceUpdateRoleParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: networkDeviceUpdateRoleParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkDeviceUpdateRoleParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
