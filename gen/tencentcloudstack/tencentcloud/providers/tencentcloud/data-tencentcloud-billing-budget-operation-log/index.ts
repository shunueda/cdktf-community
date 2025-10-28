// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/billing_budget_operation_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudBillingBudgetOperationLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Budget id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/billing_budget_operation_log#budget_id DataTencentcloudBillingBudgetOperationLog#budget_id}
  */
  readonly budgetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/billing_budget_operation_log#id DataTencentcloudBillingBudgetOperationLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/billing_budget_operation_log#result_output_file DataTencentcloudBillingBudgetOperationLog#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudBillingBudgetOperationLogRecordsDiffValue {
}

export function dataTencentcloudBillingBudgetOperationLogRecordsDiffValueToTerraform(struct?: DataTencentcloudBillingBudgetOperationLogRecordsDiffValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBillingBudgetOperationLogRecordsDiffValueToHclTerraform(struct?: DataTencentcloudBillingBudgetOperationLogRecordsDiffValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBillingBudgetOperationLogRecordsDiffValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBillingBudgetOperationLogRecordsDiffValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBillingBudgetOperationLogRecordsDiffValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after - computed: true, optional: false, required: false
  public get after() {
    return this.getStringAttribute('after');
  }

  // before - computed: true, optional: false, required: false
  public get before() {
    return this.getStringAttribute('before');
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }
}

export class DataTencentcloudBillingBudgetOperationLogRecordsDiffValueList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBillingBudgetOperationLogRecordsDiffValueOutputReference {
    return new DataTencentcloudBillingBudgetOperationLogRecordsDiffValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudBillingBudgetOperationLogRecords {
}

export function dataTencentcloudBillingBudgetOperationLogRecordsToTerraform(struct?: DataTencentcloudBillingBudgetOperationLogRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBillingBudgetOperationLogRecordsToHclTerraform(struct?: DataTencentcloudBillingBudgetOperationLogRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBillingBudgetOperationLogRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBillingBudgetOperationLogRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBillingBudgetOperationLogRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // bill_day - computed: true, optional: false, required: false
  public get billDay() {
    return this.getNumberAttribute('bill_day');
  }

  // bill_month - computed: true, optional: false, required: false
  public get billMonth() {
    return this.getStringAttribute('bill_month');
  }

  // budget_id - computed: true, optional: false, required: false
  public get budgetId() {
    return this.getStringAttribute('budget_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // diff_value - computed: true, optional: false, required: false
  private _diffValue = new DataTencentcloudBillingBudgetOperationLogRecordsDiffValueList(this, "diff_value", false);
  public get diffValue() {
    return this._diffValue;
  }

  // operate_uin - computed: true, optional: false, required: false
  public get operateUin() {
    return this.getNumberAttribute('operate_uin');
  }

  // operation_channel - computed: true, optional: false, required: false
  public get operationChannel() {
    return this.getStringAttribute('operation_channel');
  }

  // owner_uin - computed: true, optional: false, required: false
  public get ownerUin() {
    return this.getNumberAttribute('owner_uin');
  }

  // payer_uin - computed: true, optional: false, required: false
  public get payerUin() {
    return this.getNumberAttribute('payer_uin');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTencentcloudBillingBudgetOperationLogRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBillingBudgetOperationLogRecordsOutputReference {
    return new DataTencentcloudBillingBudgetOperationLogRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/billing_budget_operation_log tencentcloud_billing_budget_operation_log}
*/
export class DataTencentcloudBillingBudgetOperationLog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_billing_budget_operation_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudBillingBudgetOperationLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudBillingBudgetOperationLog to import
  * @param importFromId The id of the existing DataTencentcloudBillingBudgetOperationLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/billing_budget_operation_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudBillingBudgetOperationLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_billing_budget_operation_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/billing_budget_operation_log tencentcloud_billing_budget_operation_log} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudBillingBudgetOperationLogConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudBillingBudgetOperationLogConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_billing_budget_operation_log',
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
    this._budgetId = config.budgetId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // budget_id - computed: false, optional: false, required: true
  private _budgetId?: string; 
  public get budgetId() {
    return this.getStringAttribute('budget_id');
  }
  public set budgetId(value: string) {
    this._budgetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetIdInput() {
    return this._budgetId;
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

  // records - computed: true, optional: false, required: false
  private _records = new DataTencentcloudBillingBudgetOperationLogRecordsList(this, "records", false);
  public get records() {
    return this._records;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      budget_id: cdktf.stringToTerraform(this._budgetId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      budget_id: {
        value: cdktf.stringToHclTerraform(this._budgetId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
