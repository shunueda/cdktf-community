// https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/data-sources/funding_source_permission_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKionFundingSourcePermissionMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the funding source to fetch permission mappings for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/data-sources/funding_source_permission_mapping#funding_source_id DataKionFundingSourcePermissionMapping#funding_source_id}
  */
  readonly fundingSourceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/data-sources/funding_source_permission_mapping#id DataKionFundingSourcePermissionMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataKionFundingSourcePermissionMappingListStruct {
}

export function dataKionFundingSourcePermissionMappingListStructToTerraform(struct?: DataKionFundingSourcePermissionMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKionFundingSourcePermissionMappingListStructToHclTerraform(struct?: DataKionFundingSourcePermissionMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKionFundingSourcePermissionMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKionFundingSourcePermissionMappingListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKionFundingSourcePermissionMappingListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_role_id - computed: true, optional: false, required: false
  public get appRoleId() {
    return this.getNumberAttribute('app_role_id');
  }

  // user_groups_ids - computed: true, optional: false, required: false
  public get userGroupsIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user_groups_ids')));
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user_ids')));
  }
}

export class DataKionFundingSourcePermissionMappingListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataKionFundingSourcePermissionMappingListStructOutputReference {
    return new DataKionFundingSourcePermissionMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/data-sources/funding_source_permission_mapping kion_funding_source_permission_mapping}
*/
export class DataKionFundingSourcePermissionMapping extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_funding_source_permission_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKionFundingSourcePermissionMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKionFundingSourcePermissionMapping to import
  * @param importFromId The id of the existing DataKionFundingSourcePermissionMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/data-sources/funding_source_permission_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKionFundingSourcePermissionMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_funding_source_permission_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/data-sources/funding_source_permission_mapping kion_funding_source_permission_mapping} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKionFundingSourcePermissionMappingConfig
  */
  public constructor(scope: Construct, id: string, config: DataKionFundingSourcePermissionMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_funding_source_permission_mapping',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fundingSourceId = config.fundingSourceId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // funding_source_id - computed: false, optional: false, required: true
  private _fundingSourceId?: number; 
  public get fundingSourceId() {
    return this.getNumberAttribute('funding_source_id');
  }
  public set fundingSourceId(value: number) {
    this._fundingSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fundingSourceIdInput() {
    return this._fundingSourceId;
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

  // list - computed: true, optional: false, required: false
  private _list = new DataKionFundingSourcePermissionMappingListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      funding_source_id: cdktf.numberToTerraform(this._fundingSourceId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      funding_source_id: {
        value: cdktf.numberToHclTerraform(this._fundingSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
