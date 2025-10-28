// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/servicequotas_service_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsServicequotasServiceQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/servicequotas_service_quota#id DataAwsServicequotasServiceQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/servicequotas_service_quota#quota_code DataAwsServicequotasServiceQuota#quota_code}
  */
  readonly quotaCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/servicequotas_service_quota#quota_name DataAwsServicequotasServiceQuota#quota_name}
  */
  readonly quotaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/servicequotas_service_quota#service_code DataAwsServicequotasServiceQuota#service_code}
  */
  readonly serviceCode: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/servicequotas_service_quota aws_servicequotas_service_quota}
*/
export class DataAwsServicequotasServiceQuota extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_servicequotas_service_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsServicequotasServiceQuota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsServicequotasServiceQuota to import
  * @param importFromId The id of the existing DataAwsServicequotasServiceQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/servicequotas_service_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsServicequotasServiceQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_servicequotas_service_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/servicequotas_service_quota aws_servicequotas_service_quota} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsServicequotasServiceQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsServicequotasServiceQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicequotas_service_quota',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.29.6'
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
    this._quotaCode = config.quotaCode;
    this._quotaName = config.quotaName;
    this._serviceCode = config.serviceCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjustable - computed: true, optional: false, required: false
  public get adjustable() {
    return this.getBooleanAttribute('adjustable');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }

  // global_quota - computed: true, optional: false, required: false
  public get globalQuota() {
    return this.getBooleanAttribute('global_quota');
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

  // quota_code - computed: true, optional: true, required: false
  private _quotaCode?: string; 
  public get quotaCode() {
    return this.getStringAttribute('quota_code');
  }
  public set quotaCode(value: string) {
    this._quotaCode = value;
  }
  public resetQuotaCode() {
    this._quotaCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaCodeInput() {
    return this._quotaCode;
  }

  // quota_name - computed: true, optional: true, required: false
  private _quotaName?: string; 
  public get quotaName() {
    return this.getStringAttribute('quota_name');
  }
  public set quotaName(value: string) {
    this._quotaName = value;
  }
  public resetQuotaName() {
    this._quotaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaNameInput() {
    return this._quotaName;
  }

  // service_code - computed: false, optional: false, required: true
  private _serviceCode?: string; 
  public get serviceCode() {
    return this.getStringAttribute('service_code');
  }
  public set serviceCode(value: string) {
    this._serviceCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCodeInput() {
    return this._serviceCode;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      quota_code: cdktf.stringToTerraform(this._quotaCode),
      quota_name: cdktf.stringToTerraform(this._quotaName),
      service_code: cdktf.stringToTerraform(this._serviceCode),
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
      quota_code: {
        value: cdktf.stringToHclTerraform(this._quotaCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_name: {
        value: cdktf.stringToHclTerraform(this._quotaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_code: {
        value: cdktf.stringToHclTerraform(this._serviceCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
