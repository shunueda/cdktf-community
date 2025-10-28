// https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTemporalcloudUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/user#id DataTemporalcloudUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The set of namespace permissions for this user, including each namespace and its role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/user#namespace_accesses DataTemporalcloudUser#namespace_accesses}
  */
  readonly namespaceAccesses?: DataTemporalcloudUserNamespaceAccesses[] | cdktf.IResolvable;
}
export interface DataTemporalcloudUserNamespaceAccesses {
}

export function dataTemporalcloudUserNamespaceAccessesToTerraform(struct?: DataTemporalcloudUserNamespaceAccesses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudUserNamespaceAccessesToHclTerraform(struct?: DataTemporalcloudUserNamespaceAccesses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudUserNamespaceAccessesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTemporalcloudUserNamespaceAccesses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudUserNamespaceAccesses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }
}

export class DataTemporalcloudUserNamespaceAccessesList extends cdktf.ComplexList {
  public internalValue? : DataTemporalcloudUserNamespaceAccesses[] | cdktf.IResolvable

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
  public get(index: number): DataTemporalcloudUserNamespaceAccessesOutputReference {
    return new DataTemporalcloudUserNamespaceAccessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/user temporalcloud_user}
*/
export class DataTemporalcloudUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporalcloud_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTemporalcloudUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTemporalcloudUser to import
  * @param importFromId The id of the existing DataTemporalcloudUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTemporalcloudUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporalcloud_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/user temporalcloud_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTemporalcloudUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataTemporalcloudUserConfig) {
    super(scope, id, {
      terraformResourceType: 'temporalcloud_user',
      terraformGeneratorMetadata: {
        providerName: 'temporalcloud',
        providerVersion: '1.1.1'
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
    this._namespaceAccesses.internalValue = config.namespaceAccesses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_access - computed: true, optional: false, required: false
  public get accountAccess() {
    return this.getStringAttribute('account_access');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // namespace_accesses - computed: true, optional: true, required: false
  private _namespaceAccesses = new DataTemporalcloudUserNamespaceAccessesList(this, "namespace_accesses", true);
  public get namespaceAccesses() {
    return this._namespaceAccesses;
  }
  public putNamespaceAccesses(value: DataTemporalcloudUserNamespaceAccesses[] | cdktf.IResolvable) {
    this._namespaceAccesses.internalValue = value;
  }
  public resetNamespaceAccesses() {
    this._namespaceAccesses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceAccessesInput() {
    return this._namespaceAccesses.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace_accesses: cdktf.listMapper(dataTemporalcloudUserNamespaceAccessesToTerraform, false)(this._namespaceAccesses.internalValue),
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
      namespace_accesses: {
        value: cdktf.listMapperHcl(dataTemporalcloudUserNamespaceAccessesToHclTerraform, false)(this._namespaceAccesses.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataTemporalcloudUserNamespaceAccessesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
