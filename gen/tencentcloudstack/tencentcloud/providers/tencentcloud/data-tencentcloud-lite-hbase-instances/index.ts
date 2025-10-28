// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/lite_hbase_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudLiteHbaseInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sort by OrderField in ascending or descending order. Value range:
  * 	* 0: indicates the descending order;
  * 	* 1: indicates the ascending order;
  * 	The default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/lite_hbase_instances#asc DataTencentcloudLiteHbaseInstances#asc}
  */
  readonly asc?: number;
  /**
  * Cluster filtering policy. Value range:
  * 	* clusterList: Query the list of clusters except the destroyed cluster;
  * 	* monitorManage: Queries the list of clusters except those destroyed, being created, and failed to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/lite_hbase_instances#display_strategy DataTencentcloudLiteHbaseInstances#display_strategy}
  */
  readonly displayStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/lite_hbase_instances#id DataTencentcloudLiteHbaseInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sorting field. Value range:
  * 	* clusterId: Sorting by instance ID;
  * 	* addTime: sorted by instance creation time;
  * 	* status: sorted by the status code of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/lite_hbase_instances#order_field DataTencentcloudLiteHbaseInstances#order_field}
  */
  readonly orderField?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/lite_hbase_instances#result_output_file DataTencentcloudLiteHbaseInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/lite_hbase_instances#filters DataTencentcloudLiteHbaseInstances#filters}
  */
  readonly filters?: DataTencentcloudLiteHbaseInstancesFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudLiteHbaseInstancesInstanceListTags {
}

export function dataTencentcloudLiteHbaseInstancesInstanceListTagsToTerraform(struct?: DataTencentcloudLiteHbaseInstancesInstanceListTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudLiteHbaseInstancesInstanceListTagsToHclTerraform(struct?: DataTencentcloudLiteHbaseInstancesInstanceListTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudLiteHbaseInstancesInstanceListTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudLiteHbaseInstancesInstanceListTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudLiteHbaseInstancesInstanceListTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataTencentcloudLiteHbaseInstancesInstanceListTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudLiteHbaseInstancesInstanceListTagsOutputReference {
    return new DataTencentcloudLiteHbaseInstancesInstanceListTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsVpcSettings {
}

export function dataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsVpcSettingsToTerraform(struct?: DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsVpcSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsVpcSettingsToHclTerraform(struct?: DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsVpcSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsVpcSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsVpcSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsVpcSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsVpcSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsVpcSettingsOutputReference {
    return new DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsVpcSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudLiteHbaseInstancesInstanceListZoneSettings {
}

export function dataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsToTerraform(struct?: DataTencentcloudLiteHbaseInstancesInstanceListZoneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsToHclTerraform(struct?: DataTencentcloudLiteHbaseInstancesInstanceListZoneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudLiteHbaseInstancesInstanceListZoneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudLiteHbaseInstancesInstanceListZoneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_num - computed: true, optional: false, required: false
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }

  // vpc_settings - computed: true, optional: false, required: false
  private _vpcSettings = new DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsVpcSettingsList(this, "vpc_settings", false);
  public get vpcSettings() {
    return this._vpcSettings;
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsOutputReference {
    return new DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudLiteHbaseInstancesInstanceListStruct {
}

export function dataTencentcloudLiteHbaseInstancesInstanceListStructToTerraform(struct?: DataTencentcloudLiteHbaseInstancesInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudLiteHbaseInstancesInstanceListStructToHclTerraform(struct?: DataTencentcloudLiteHbaseInstancesInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudLiteHbaseInstancesInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudLiteHbaseInstancesInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudLiteHbaseInstancesInstanceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_time - computed: true, optional: false, required: false
  public get addTime() {
    return this.getStringAttribute('add_time');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // pay_mode - computed: true, optional: false, required: false
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_desc - computed: true, optional: false, required: false
  public get statusDesc() {
    return this.getStringAttribute('status_desc');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudLiteHbaseInstancesInstanceListTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getNumberAttribute('vpc_id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }

  // zone_settings - computed: true, optional: false, required: false
  private _zoneSettings = new DataTencentcloudLiteHbaseInstancesInstanceListZoneSettingsList(this, "zone_settings", false);
  public get zoneSettings() {
    return this._zoneSettings;
  }
}

export class DataTencentcloudLiteHbaseInstancesInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudLiteHbaseInstancesInstanceListStructOutputReference {
    return new DataTencentcloudLiteHbaseInstancesInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudLiteHbaseInstancesFilters {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/lite_hbase_instances#name DataTencentcloudLiteHbaseInstances#name}
  */
  readonly name: string;
  /**
  * Filter field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/lite_hbase_instances#values DataTencentcloudLiteHbaseInstances#values}
  */
  readonly values: string[];
}

export function dataTencentcloudLiteHbaseInstancesFiltersToTerraform(struct?: DataTencentcloudLiteHbaseInstancesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudLiteHbaseInstancesFiltersToHclTerraform(struct?: DataTencentcloudLiteHbaseInstancesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudLiteHbaseInstancesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudLiteHbaseInstancesFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudLiteHbaseInstancesFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudLiteHbaseInstancesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudLiteHbaseInstancesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudLiteHbaseInstancesFiltersOutputReference {
    return new DataTencentcloudLiteHbaseInstancesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/lite_hbase_instances tencentcloud_lite_hbase_instances}
*/
export class DataTencentcloudLiteHbaseInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_lite_hbase_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudLiteHbaseInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudLiteHbaseInstances to import
  * @param importFromId The id of the existing DataTencentcloudLiteHbaseInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/lite_hbase_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudLiteHbaseInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_lite_hbase_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/lite_hbase_instances tencentcloud_lite_hbase_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudLiteHbaseInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudLiteHbaseInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_lite_hbase_instances',
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
    this._asc = config.asc;
    this._displayStrategy = config.displayStrategy;
    this._id = config.id;
    this._orderField = config.orderField;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asc - computed: false, optional: true, required: false
  private _asc?: number; 
  public get asc() {
    return this.getNumberAttribute('asc');
  }
  public set asc(value: number) {
    this._asc = value;
  }
  public resetAsc() {
    this._asc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ascInput() {
    return this._asc;
  }

  // display_strategy - computed: false, optional: false, required: true
  private _displayStrategy?: string; 
  public get displayStrategy() {
    return this.getStringAttribute('display_strategy');
  }
  public set displayStrategy(value: string) {
    this._displayStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayStrategyInput() {
    return this._displayStrategy;
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

  // instance_list - computed: true, optional: false, required: false
  private _instanceList = new DataTencentcloudLiteHbaseInstancesInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }

  // order_field - computed: false, optional: true, required: false
  private _orderField?: string; 
  public get orderField() {
    return this.getStringAttribute('order_field');
  }
  public set orderField(value: string) {
    this._orderField = value;
  }
  public resetOrderField() {
    this._orderField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderFieldInput() {
    return this._orderField;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudLiteHbaseInstancesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudLiteHbaseInstancesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asc: cdktf.numberToTerraform(this._asc),
      display_strategy: cdktf.stringToTerraform(this._displayStrategy),
      id: cdktf.stringToTerraform(this._id),
      order_field: cdktf.stringToTerraform(this._orderField),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudLiteHbaseInstancesFiltersToTerraform, true)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asc: {
        value: cdktf.numberToHclTerraform(this._asc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_strategy: {
        value: cdktf.stringToHclTerraform(this._displayStrategy),
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
      order_field: {
        value: cdktf.stringToHclTerraform(this._orderField),
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
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudLiteHbaseInstancesFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudLiteHbaseInstancesFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
