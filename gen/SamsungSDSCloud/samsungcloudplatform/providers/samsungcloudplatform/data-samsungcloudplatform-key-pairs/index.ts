// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/key_pairs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformKeyPairsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The person who created the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/key_pairs#created_by DataSamsungcloudplatformKeyPairs#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/key_pairs#id DataSamsungcloudplatformKeyPairs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key Pair Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/key_pairs#key_pair_id DataSamsungcloudplatformKeyPairs#key_pair_id}
  */
  readonly keyPairId?: string;
  /**
  * Key Pair Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/key_pairs#key_pair_name DataSamsungcloudplatformKeyPairs#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/key_pairs#page DataSamsungcloudplatformKeyPairs#page}
  */
  readonly page?: number;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/key_pairs#size DataSamsungcloudplatformKeyPairs#size}
  */
  readonly size?: number;
  /**
  * Sorting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/key_pairs#sort DataSamsungcloudplatformKeyPairs#sort}
  */
  readonly sort?: string;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/key_pairs#contents DataSamsungcloudplatformKeyPairs#contents}
  */
  readonly contents?: DataSamsungcloudplatformKeyPairsContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformKeyPairsContents {
}

export function dataSamsungcloudplatformKeyPairsContentsToTerraform(struct?: DataSamsungcloudplatformKeyPairsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformKeyPairsContentsToHclTerraform(struct?: DataSamsungcloudplatformKeyPairsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformKeyPairsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformKeyPairsContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformKeyPairsContents | cdktf.IResolvable | undefined) {
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

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // key_pair_id - computed: true, optional: false, required: false
  public get keyPairId() {
    return this.getStringAttribute('key_pair_id');
  }

  // key_pair_name - computed: true, optional: false, required: false
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }

  // key_pair_state - computed: true, optional: false, required: false
  public get keyPairState() {
    return this.getStringAttribute('key_pair_state');
  }

  // launch_configuration_id_list - computed: true, optional: false, required: false
  public get launchConfigurationIdList() {
    return this.getListAttribute('launch_configuration_id_list');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // virtual_server_id_list - computed: true, optional: false, required: false
  public get virtualServerIdList() {
    return this.getListAttribute('virtual_server_id_list');
  }
}

export class DataSamsungcloudplatformKeyPairsContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformKeyPairsContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformKeyPairsContentsOutputReference {
    return new DataSamsungcloudplatformKeyPairsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/key_pairs samsungcloudplatform_key_pairs}
*/
export class DataSamsungcloudplatformKeyPairs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_key_pairs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformKeyPairs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformKeyPairs to import
  * @param importFromId The id of the existing DataSamsungcloudplatformKeyPairs that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/key_pairs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformKeyPairs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_key_pairs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/key_pairs samsungcloudplatform_key_pairs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformKeyPairsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformKeyPairsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_key_pairs',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._keyPairId = config.keyPairId;
    this._keyPairName = config.keyPairName;
    this._page = config.page;
    this._size = config.size;
    this._sort = config.sort;
    this._contents.internalValue = config.contents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // key_pair_id - computed: false, optional: true, required: false
  private _keyPairId?: string; 
  public get keyPairId() {
    return this.getStringAttribute('key_pair_id');
  }
  public set keyPairId(value: string) {
    this._keyPairId = value;
  }
  public resetKeyPairId() {
    this._keyPairId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairIdInput() {
    return this._keyPairId;
  }

  // key_pair_name - computed: false, optional: true, required: false
  private _keyPairName?: string; 
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }
  public set keyPairName(value: string) {
    this._keyPairName = value;
  }
  public resetKeyPairName() {
    this._keyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairNameInput() {
    return this._keyPairName;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformKeyPairsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformKeyPairsContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      key_pair_id: cdktf.stringToTerraform(this._keyPairId),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      page: cdktf.numberToTerraform(this._page),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.stringToTerraform(this._sort),
      contents: cdktf.listMapper(dataSamsungcloudplatformKeyPairsContentsToTerraform, true)(this._contents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      key_pair_id: {
        value: cdktf.stringToHclTerraform(this._keyPairId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair_name: {
        value: cdktf.stringToHclTerraform(this._keyPairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformKeyPairsContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformKeyPairsContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
