// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/vpc_bandwidth_package_bill_usage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudVpcBandwidthPackageBillUsageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of the postpaid bandwidth package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/vpc_bandwidth_package_bill_usage#bandwidth_package_id DataTencentcloudVpcBandwidthPackageBillUsage#bandwidth_package_id}
  */
  readonly bandwidthPackageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/vpc_bandwidth_package_bill_usage#id DataTencentcloudVpcBandwidthPackageBillUsage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/vpc_bandwidth_package_bill_usage#result_output_file DataTencentcloudVpcBandwidthPackageBillUsage#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSet {
}

export function dataTencentcloudVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSetToTerraform(struct?: DataTencentcloudVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSetToHclTerraform(struct?: DataTencentcloudVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_usage - computed: true, optional: false, required: false
  public get bandwidthUsage() {
    return this.getNumberAttribute('bandwidth_usage');
  }
}

export class DataTencentcloudVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSetOutputReference {
    return new DataTencentcloudVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/vpc_bandwidth_package_bill_usage tencentcloud_vpc_bandwidth_package_bill_usage}
*/
export class DataTencentcloudVpcBandwidthPackageBillUsage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_bandwidth_package_bill_usage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudVpcBandwidthPackageBillUsage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudVpcBandwidthPackageBillUsage to import
  * @param importFromId The id of the existing DataTencentcloudVpcBandwidthPackageBillUsage that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/vpc_bandwidth_package_bill_usage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudVpcBandwidthPackageBillUsage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_bandwidth_package_bill_usage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/data-sources/vpc_bandwidth_package_bill_usage tencentcloud_vpc_bandwidth_package_bill_usage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudVpcBandwidthPackageBillUsageConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudVpcBandwidthPackageBillUsageConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_bandwidth_package_bill_usage',
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
    this._bandwidthPackageId = config.bandwidthPackageId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_package_bill_bandwidth_set - computed: true, optional: false, required: false
  private _bandwidthPackageBillBandwidthSet = new DataTencentcloudVpcBandwidthPackageBillUsageBandwidthPackageBillBandwidthSetList(this, "bandwidth_package_bill_bandwidth_set", false);
  public get bandwidthPackageBillBandwidthSet() {
    return this._bandwidthPackageBillBandwidthSet;
  }

  // bandwidth_package_id - computed: false, optional: false, required: true
  private _bandwidthPackageId?: string; 
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }
  public set bandwidthPackageId(value: string) {
    this._bandwidthPackageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageIdInput() {
    return this._bandwidthPackageId;
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
      bandwidth_package_id: cdktf.stringToTerraform(this._bandwidthPackageId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_package_id: {
        value: cdktf.stringToHclTerraform(this._bandwidthPackageId),
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
