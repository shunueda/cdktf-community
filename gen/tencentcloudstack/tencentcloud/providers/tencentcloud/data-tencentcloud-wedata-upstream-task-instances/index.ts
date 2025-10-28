// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/wedata_upstream_task_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWedataUpstreamTaskInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/wedata_upstream_task_instances#id DataTencentcloudWedataUpstreamTaskInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique instance identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/wedata_upstream_task_instances#instance_key DataTencentcloudWedataUpstreamTaskInstances#instance_key}
  */
  readonly instanceKey: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/wedata_upstream_task_instances#project_id DataTencentcloudWedataUpstreamTaskInstances#project_id}
  */
  readonly projectId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/wedata_upstream_task_instances#result_output_file DataTencentcloudWedataUpstreamTaskInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Time zone, default UTC+8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/wedata_upstream_task_instances#time_zone DataTencentcloudWedataUpstreamTaskInstances#time_zone}
  */
  readonly timeZone?: string;
}
export interface DataTencentcloudWedataUpstreamTaskInstancesDataItems {
}

export function dataTencentcloudWedataUpstreamTaskInstancesDataItemsToTerraform(struct?: DataTencentcloudWedataUpstreamTaskInstancesDataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataUpstreamTaskInstancesDataItemsToHclTerraform(struct?: DataTencentcloudWedataUpstreamTaskInstancesDataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataUpstreamTaskInstancesDataItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataUpstreamTaskInstancesDataItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataUpstreamTaskInstancesDataItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost_time - computed: true, optional: false, required: false
  public get costTime() {
    return this.getNumberAttribute('cost_time');
  }

  // cur_run_date - computed: true, optional: false, required: false
  public get curRunDate() {
    return this.getStringAttribute('cur_run_date');
  }

  // cycle_type - computed: true, optional: false, required: false
  public get cycleType() {
    return this.getStringAttribute('cycle_type');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // executor_group_id - computed: true, optional: false, required: false
  public get executorGroupId() {
    return this.getStringAttribute('executor_group_id');
  }

  // executor_group_name - computed: true, optional: false, required: false
  public get executorGroupName() {
    return this.getStringAttribute('executor_group_name');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // folder_name - computed: true, optional: false, required: false
  public get folderName() {
    return this.getStringAttribute('folder_name');
  }

  // instance_key - computed: true, optional: false, required: false
  public get instanceKey() {
    return this.getStringAttribute('instance_key');
  }

  // instance_state - computed: true, optional: false, required: false
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getNumberAttribute('instance_type');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // owner_uin_list - computed: true, optional: false, required: false
  public get ownerUinList() {
    return cdktf.Fn.tolist(this.getListAttribute('owner_uin_list'));
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // scheduler_time - computed: true, optional: false, required: false
  public get schedulerTime() {
    return this.getStringAttribute('scheduler_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getStringAttribute('task_type');
  }

  // task_type_id - computed: true, optional: false, required: false
  public get taskTypeId() {
    return this.getNumberAttribute('task_type_id');
  }

  // total_run_num - computed: true, optional: false, required: false
  public get totalRunNum() {
    return this.getNumberAttribute('total_run_num');
  }

  // tries - computed: true, optional: false, required: false
  public get tries() {
    return this.getNumberAttribute('tries');
  }

  // try_limit - computed: true, optional: false, required: false
  public get tryLimit() {
    return this.getNumberAttribute('try_limit');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }

  // workflow_name - computed: true, optional: false, required: false
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
}

export class DataTencentcloudWedataUpstreamTaskInstancesDataItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataUpstreamTaskInstancesDataItemsOutputReference {
    return new DataTencentcloudWedataUpstreamTaskInstancesDataItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataUpstreamTaskInstancesData {
}

export function dataTencentcloudWedataUpstreamTaskInstancesDataToTerraform(struct?: DataTencentcloudWedataUpstreamTaskInstancesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataUpstreamTaskInstancesDataToHclTerraform(struct?: DataTencentcloudWedataUpstreamTaskInstancesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataUpstreamTaskInstancesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataUpstreamTaskInstancesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataUpstreamTaskInstancesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudWedataUpstreamTaskInstancesDataItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // page_number - computed: true, optional: false, required: false
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }

  // page_size - computed: true, optional: false, required: false
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // total_page_number - computed: true, optional: false, required: false
  public get totalPageNumber() {
    return this.getNumberAttribute('total_page_number');
  }
}

export class DataTencentcloudWedataUpstreamTaskInstancesDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataUpstreamTaskInstancesDataOutputReference {
    return new DataTencentcloudWedataUpstreamTaskInstancesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/wedata_upstream_task_instances tencentcloud_wedata_upstream_task_instances}
*/
export class DataTencentcloudWedataUpstreamTaskInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_upstream_task_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWedataUpstreamTaskInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWedataUpstreamTaskInstances to import
  * @param importFromId The id of the existing DataTencentcloudWedataUpstreamTaskInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/wedata_upstream_task_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWedataUpstreamTaskInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_upstream_task_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/wedata_upstream_task_instances tencentcloud_wedata_upstream_task_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWedataUpstreamTaskInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWedataUpstreamTaskInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_upstream_task_instances',
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
    this._id = config.id;
    this._instanceKey = config.instanceKey;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._timeZone = config.timeZone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudWedataUpstreamTaskInstancesDataList(this, "data", false);
  public get data() {
    return this._data;
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

  // instance_key - computed: false, optional: false, required: true
  private _instanceKey?: string; 
  public get instanceKey() {
    return this.getStringAttribute('instance_key');
  }
  public set instanceKey(value: string) {
    this._instanceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceKeyInput() {
    return this._instanceKey;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_key: cdktf.stringToTerraform(this._instanceKey),
      project_id: cdktf.stringToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      time_zone: cdktf.stringToTerraform(this._timeZone),
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
      instance_key: {
        value: cdktf.stringToHclTerraform(this._instanceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
