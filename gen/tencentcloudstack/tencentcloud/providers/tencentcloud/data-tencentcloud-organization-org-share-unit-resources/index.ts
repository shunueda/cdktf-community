// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/organization_org_share_unit_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudOrganizationOrgShareUnitResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Shared unit area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/organization_org_share_unit_resources#area DataTencentcloudOrganizationOrgShareUnitResources#area}
  */
  readonly area: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/organization_org_share_unit_resources#id DataTencentcloudOrganizationOrgShareUnitResources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/organization_org_share_unit_resources#result_output_file DataTencentcloudOrganizationOrgShareUnitResources#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Search for keywords. Support product resource ID search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/organization_org_share_unit_resources#search_key DataTencentcloudOrganizationOrgShareUnitResources#search_key}
  */
  readonly searchKey?: string;
  /**
  * Shared resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/organization_org_share_unit_resources#type DataTencentcloudOrganizationOrgShareUnitResources#type}
  */
  readonly type?: string;
  /**
  * Shared unit ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/organization_org_share_unit_resources#unit_id DataTencentcloudOrganizationOrgShareUnitResources#unit_id}
  */
  readonly unitId: string;
}
export interface DataTencentcloudOrganizationOrgShareUnitResourcesItems {
}

export function dataTencentcloudOrganizationOrgShareUnitResourcesItemsToTerraform(struct?: DataTencentcloudOrganizationOrgShareUnitResourcesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudOrganizationOrgShareUnitResourcesItemsToHclTerraform(struct?: DataTencentcloudOrganizationOrgShareUnitResourcesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudOrganizationOrgShareUnitResourcesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudOrganizationOrgShareUnitResourcesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOrganizationOrgShareUnitResourcesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // product_resource_id - computed: true, optional: false, required: false
  public get productResourceId() {
    return this.getStringAttribute('product_resource_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // share_manager_uin - computed: true, optional: false, required: false
  public get shareManagerUin() {
    return this.getNumberAttribute('share_manager_uin');
  }

  // shared_member_num - computed: true, optional: false, required: false
  public get sharedMemberNum() {
    return this.getNumberAttribute('shared_member_num');
  }

  // shared_member_use_num - computed: true, optional: false, required: false
  public get sharedMemberUseNum() {
    return this.getNumberAttribute('shared_member_use_num');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudOrganizationOrgShareUnitResourcesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudOrganizationOrgShareUnitResourcesItemsOutputReference {
    return new DataTencentcloudOrganizationOrgShareUnitResourcesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/organization_org_share_unit_resources tencentcloud_organization_org_share_unit_resources}
*/
export class DataTencentcloudOrganizationOrgShareUnitResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_org_share_unit_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudOrganizationOrgShareUnitResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudOrganizationOrgShareUnitResources to import
  * @param importFromId The id of the existing DataTencentcloudOrganizationOrgShareUnitResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/organization_org_share_unit_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudOrganizationOrgShareUnitResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_org_share_unit_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/organization_org_share_unit_resources tencentcloud_organization_org_share_unit_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudOrganizationOrgShareUnitResourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudOrganizationOrgShareUnitResourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_org_share_unit_resources',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._area = config.area;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._searchKey = config.searchKey;
    this._type = config.type;
    this._unitId = config.unitId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area - computed: false, optional: false, required: true
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudOrganizationOrgShareUnitResourcesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // search_key - computed: false, optional: true, required: false
  private _searchKey?: string; 
  public get searchKey() {
    return this.getStringAttribute('search_key');
  }
  public set searchKey(value: string) {
    this._searchKey = value;
  }
  public resetSearchKey() {
    this._searchKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchKeyInput() {
    return this._searchKey;
  }

  // type - computed: false, optional: true, required: false
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

  // unit_id - computed: false, optional: false, required: true
  private _unitId?: string; 
  public get unitId() {
    return this.getStringAttribute('unit_id');
  }
  public set unitId(value: string) {
    this._unitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitIdInput() {
    return this._unitId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area: cdktf.stringToTerraform(this._area),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_key: cdktf.stringToTerraform(this._searchKey),
      type: cdktf.stringToTerraform(this._type),
      unit_id: cdktf.stringToTerraform(this._unitId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area: {
        value: cdktf.stringToHclTerraform(this._area),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_key: {
        value: cdktf.stringToHclTerraform(this._searchKey),
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
      unit_id: {
        value: cdktf.stringToHclTerraform(this._unitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
