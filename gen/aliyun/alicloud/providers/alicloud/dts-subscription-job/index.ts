// https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsSubscriptionJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#checkpoint DtsSubscriptionJob#checkpoint}
  */
  readonly checkpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#compute_unit DtsSubscriptionJob#compute_unit}
  */
  readonly computeUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#database_count DtsSubscriptionJob#database_count}
  */
  readonly databaseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#db_list DtsSubscriptionJob#db_list}
  */
  readonly dbList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#delay_notice DtsSubscriptionJob#delay_notice}
  */
  readonly delayNotice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#delay_phone DtsSubscriptionJob#delay_phone}
  */
  readonly delayPhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#delay_rule_time DtsSubscriptionJob#delay_rule_time}
  */
  readonly delayRuleTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#destination_endpoint_engine_name DtsSubscriptionJob#destination_endpoint_engine_name}
  */
  readonly destinationEndpointEngineName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#destination_region DtsSubscriptionJob#destination_region}
  */
  readonly destinationRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#dts_instance_id DtsSubscriptionJob#dts_instance_id}
  */
  readonly dtsInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#dts_job_name DtsSubscriptionJob#dts_job_name}
  */
  readonly dtsJobName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#error_notice DtsSubscriptionJob#error_notice}
  */
  readonly errorNotice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#error_phone DtsSubscriptionJob#error_phone}
  */
  readonly errorPhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#id DtsSubscriptionJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#instance_class DtsSubscriptionJob#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#payment_duration DtsSubscriptionJob#payment_duration}
  */
  readonly paymentDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#payment_duration_unit DtsSubscriptionJob#payment_duration_unit}
  */
  readonly paymentDurationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#payment_type DtsSubscriptionJob#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#reserve DtsSubscriptionJob#reserve}
  */
  readonly reserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#source_endpoint_database_name DtsSubscriptionJob#source_endpoint_database_name}
  */
  readonly sourceEndpointDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#source_endpoint_engine_name DtsSubscriptionJob#source_endpoint_engine_name}
  */
  readonly sourceEndpointEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#source_endpoint_instance_id DtsSubscriptionJob#source_endpoint_instance_id}
  */
  readonly sourceEndpointInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#source_endpoint_instance_type DtsSubscriptionJob#source_endpoint_instance_type}
  */
  readonly sourceEndpointInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#source_endpoint_ip DtsSubscriptionJob#source_endpoint_ip}
  */
  readonly sourceEndpointIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#source_endpoint_oracle_sid DtsSubscriptionJob#source_endpoint_oracle_sid}
  */
  readonly sourceEndpointOracleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#source_endpoint_owner_id DtsSubscriptionJob#source_endpoint_owner_id}
  */
  readonly sourceEndpointOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#source_endpoint_password DtsSubscriptionJob#source_endpoint_password}
  */
  readonly sourceEndpointPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#source_endpoint_port DtsSubscriptionJob#source_endpoint_port}
  */
  readonly sourceEndpointPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#source_endpoint_region DtsSubscriptionJob#source_endpoint_region}
  */
  readonly sourceEndpointRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#source_endpoint_role DtsSubscriptionJob#source_endpoint_role}
  */
  readonly sourceEndpointRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#source_endpoint_user_name DtsSubscriptionJob#source_endpoint_user_name}
  */
  readonly sourceEndpointUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#status DtsSubscriptionJob#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#subscription_data_type_ddl DtsSubscriptionJob#subscription_data_type_ddl}
  */
  readonly subscriptionDataTypeDdl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#subscription_data_type_dml DtsSubscriptionJob#subscription_data_type_dml}
  */
  readonly subscriptionDataTypeDml?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#subscription_instance_network_type DtsSubscriptionJob#subscription_instance_network_type}
  */
  readonly subscriptionInstanceNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#subscription_instance_vpc_id DtsSubscriptionJob#subscription_instance_vpc_id}
  */
  readonly subscriptionInstanceVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#subscription_instance_vswitch_id DtsSubscriptionJob#subscription_instance_vswitch_id}
  */
  readonly subscriptionInstanceVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#sync_architecture DtsSubscriptionJob#sync_architecture}
  */
  readonly syncArchitecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#synchronization_direction DtsSubscriptionJob#synchronization_direction}
  */
  readonly synchronizationDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#tags DtsSubscriptionJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#timeouts DtsSubscriptionJob#timeouts}
  */
  readonly timeouts?: DtsSubscriptionJobTimeouts;
}
export interface DtsSubscriptionJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#update DtsSubscriptionJob#update}
  */
  readonly update?: string;
}

export function dtsSubscriptionJobTimeoutsToTerraform(struct?: DtsSubscriptionJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dtsSubscriptionJobTimeoutsToHclTerraform(struct?: DtsSubscriptionJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsSubscriptionJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DtsSubscriptionJobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSubscriptionJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._update = value.update;
    }
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job alicloud_dts_subscription_job}
*/
export class DtsSubscriptionJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dts_subscription_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsSubscriptionJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsSubscriptionJob to import
  * @param importFromId The id of the existing DtsSubscriptionJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsSubscriptionJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dts_subscription_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/dts_subscription_job alicloud_dts_subscription_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsSubscriptionJobConfig
  */
  public constructor(scope: Construct, id: string, config: DtsSubscriptionJobConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dts_subscription_job',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.261.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkpoint = config.checkpoint;
    this._computeUnit = config.computeUnit;
    this._databaseCount = config.databaseCount;
    this._dbList = config.dbList;
    this._delayNotice = config.delayNotice;
    this._delayPhone = config.delayPhone;
    this._delayRuleTime = config.delayRuleTime;
    this._destinationEndpointEngineName = config.destinationEndpointEngineName;
    this._destinationRegion = config.destinationRegion;
    this._dtsInstanceId = config.dtsInstanceId;
    this._dtsJobName = config.dtsJobName;
    this._errorNotice = config.errorNotice;
    this._errorPhone = config.errorPhone;
    this._id = config.id;
    this._instanceClass = config.instanceClass;
    this._paymentDuration = config.paymentDuration;
    this._paymentDurationUnit = config.paymentDurationUnit;
    this._paymentType = config.paymentType;
    this._reserve = config.reserve;
    this._sourceEndpointDatabaseName = config.sourceEndpointDatabaseName;
    this._sourceEndpointEngineName = config.sourceEndpointEngineName;
    this._sourceEndpointInstanceId = config.sourceEndpointInstanceId;
    this._sourceEndpointInstanceType = config.sourceEndpointInstanceType;
    this._sourceEndpointIp = config.sourceEndpointIp;
    this._sourceEndpointOracleSid = config.sourceEndpointOracleSid;
    this._sourceEndpointOwnerId = config.sourceEndpointOwnerId;
    this._sourceEndpointPassword = config.sourceEndpointPassword;
    this._sourceEndpointPort = config.sourceEndpointPort;
    this._sourceEndpointRegion = config.sourceEndpointRegion;
    this._sourceEndpointRole = config.sourceEndpointRole;
    this._sourceEndpointUserName = config.sourceEndpointUserName;
    this._status = config.status;
    this._subscriptionDataTypeDdl = config.subscriptionDataTypeDdl;
    this._subscriptionDataTypeDml = config.subscriptionDataTypeDml;
    this._subscriptionInstanceNetworkType = config.subscriptionInstanceNetworkType;
    this._subscriptionInstanceVpcId = config.subscriptionInstanceVpcId;
    this._subscriptionInstanceVswitchId = config.subscriptionInstanceVswitchId;
    this._syncArchitecture = config.syncArchitecture;
    this._synchronizationDirection = config.synchronizationDirection;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checkpoint - computed: true, optional: true, required: false
  private _checkpoint?: string; 
  public get checkpoint() {
    return this.getStringAttribute('checkpoint');
  }
  public set checkpoint(value: string) {
    this._checkpoint = value;
  }
  public resetCheckpoint() {
    this._checkpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointInput() {
    return this._checkpoint;
  }

  // compute_unit - computed: false, optional: true, required: false
  private _computeUnit?: number; 
  public get computeUnit() {
    return this.getNumberAttribute('compute_unit');
  }
  public set computeUnit(value: number) {
    this._computeUnit = value;
  }
  public resetComputeUnit() {
    this._computeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeUnitInput() {
    return this._computeUnit;
  }

  // database_count - computed: false, optional: true, required: false
  private _databaseCount?: number; 
  public get databaseCount() {
    return this.getNumberAttribute('database_count');
  }
  public set databaseCount(value: number) {
    this._databaseCount = value;
  }
  public resetDatabaseCount() {
    this._databaseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseCountInput() {
    return this._databaseCount;
  }

  // db_list - computed: false, optional: true, required: false
  private _dbList?: string; 
  public get dbList() {
    return this.getStringAttribute('db_list');
  }
  public set dbList(value: string) {
    this._dbList = value;
  }
  public resetDbList() {
    this._dbList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbListInput() {
    return this._dbList;
  }

  // delay_notice - computed: false, optional: true, required: false
  private _delayNotice?: boolean | cdktf.IResolvable; 
  public get delayNotice() {
    return this.getBooleanAttribute('delay_notice');
  }
  public set delayNotice(value: boolean | cdktf.IResolvable) {
    this._delayNotice = value;
  }
  public resetDelayNotice() {
    this._delayNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayNoticeInput() {
    return this._delayNotice;
  }

  // delay_phone - computed: false, optional: true, required: false
  private _delayPhone?: string; 
  public get delayPhone() {
    return this.getStringAttribute('delay_phone');
  }
  public set delayPhone(value: string) {
    this._delayPhone = value;
  }
  public resetDelayPhone() {
    this._delayPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayPhoneInput() {
    return this._delayPhone;
  }

  // delay_rule_time - computed: false, optional: true, required: false
  private _delayRuleTime?: string; 
  public get delayRuleTime() {
    return this.getStringAttribute('delay_rule_time');
  }
  public set delayRuleTime(value: string) {
    this._delayRuleTime = value;
  }
  public resetDelayRuleTime() {
    this._delayRuleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayRuleTimeInput() {
    return this._delayRuleTime;
  }

  // destination_endpoint_engine_name - computed: false, optional: true, required: false
  private _destinationEndpointEngineName?: string; 
  public get destinationEndpointEngineName() {
    return this.getStringAttribute('destination_endpoint_engine_name');
  }
  public set destinationEndpointEngineName(value: string) {
    this._destinationEndpointEngineName = value;
  }
  public resetDestinationEndpointEngineName() {
    this._destinationEndpointEngineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointEngineNameInput() {
    return this._destinationEndpointEngineName;
  }

  // destination_region - computed: false, optional: true, required: false
  private _destinationRegion?: string; 
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }
  public set destinationRegion(value: string) {
    this._destinationRegion = value;
  }
  public resetDestinationRegion() {
    this._destinationRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionInput() {
    return this._destinationRegion;
  }

  // dts_instance_id - computed: true, optional: true, required: false
  private _dtsInstanceId?: string; 
  public get dtsInstanceId() {
    return this.getStringAttribute('dts_instance_id');
  }
  public set dtsInstanceId(value: string) {
    this._dtsInstanceId = value;
  }
  public resetDtsInstanceId() {
    this._dtsInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtsInstanceIdInput() {
    return this._dtsInstanceId;
  }

  // dts_job_name - computed: false, optional: true, required: false
  private _dtsJobName?: string; 
  public get dtsJobName() {
    return this.getStringAttribute('dts_job_name');
  }
  public set dtsJobName(value: string) {
    this._dtsJobName = value;
  }
  public resetDtsJobName() {
    this._dtsJobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtsJobNameInput() {
    return this._dtsJobName;
  }

  // error_notice - computed: false, optional: true, required: false
  private _errorNotice?: boolean | cdktf.IResolvable; 
  public get errorNotice() {
    return this.getBooleanAttribute('error_notice');
  }
  public set errorNotice(value: boolean | cdktf.IResolvable) {
    this._errorNotice = value;
  }
  public resetErrorNotice() {
    this._errorNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorNoticeInput() {
    return this._errorNotice;
  }

  // error_phone - computed: false, optional: true, required: false
  private _errorPhone?: string; 
  public get errorPhone() {
    return this.getStringAttribute('error_phone');
  }
  public set errorPhone(value: string) {
    this._errorPhone = value;
  }
  public resetErrorPhone() {
    this._errorPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPhoneInput() {
    return this._errorPhone;
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

  // instance_class - computed: false, optional: true, required: false
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  public resetInstanceClass() {
    this._instanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // payment_duration - computed: false, optional: true, required: false
  private _paymentDuration?: number; 
  public get paymentDuration() {
    return this.getNumberAttribute('payment_duration');
  }
  public set paymentDuration(value: number) {
    this._paymentDuration = value;
  }
  public resetPaymentDuration() {
    this._paymentDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentDurationInput() {
    return this._paymentDuration;
  }

  // payment_duration_unit - computed: false, optional: true, required: false
  private _paymentDurationUnit?: string; 
  public get paymentDurationUnit() {
    return this.getStringAttribute('payment_duration_unit');
  }
  public set paymentDurationUnit(value: string) {
    this._paymentDurationUnit = value;
  }
  public resetPaymentDurationUnit() {
    this._paymentDurationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentDurationUnitInput() {
    return this._paymentDurationUnit;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // reserve - computed: false, optional: true, required: false
  private _reserve?: string; 
  public get reserve() {
    return this.getStringAttribute('reserve');
  }
  public set reserve(value: string) {
    this._reserve = value;
  }
  public resetReserve() {
    this._reserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveInput() {
    return this._reserve;
  }

  // source_endpoint_database_name - computed: false, optional: true, required: false
  private _sourceEndpointDatabaseName?: string; 
  public get sourceEndpointDatabaseName() {
    return this.getStringAttribute('source_endpoint_database_name');
  }
  public set sourceEndpointDatabaseName(value: string) {
    this._sourceEndpointDatabaseName = value;
  }
  public resetSourceEndpointDatabaseName() {
    this._sourceEndpointDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointDatabaseNameInput() {
    return this._sourceEndpointDatabaseName;
  }

  // source_endpoint_engine_name - computed: false, optional: false, required: true
  private _sourceEndpointEngineName?: string; 
  public get sourceEndpointEngineName() {
    return this.getStringAttribute('source_endpoint_engine_name');
  }
  public set sourceEndpointEngineName(value: string) {
    this._sourceEndpointEngineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointEngineNameInput() {
    return this._sourceEndpointEngineName;
  }

  // source_endpoint_instance_id - computed: false, optional: true, required: false
  private _sourceEndpointInstanceId?: string; 
  public get sourceEndpointInstanceId() {
    return this.getStringAttribute('source_endpoint_instance_id');
  }
  public set sourceEndpointInstanceId(value: string) {
    this._sourceEndpointInstanceId = value;
  }
  public resetSourceEndpointInstanceId() {
    this._sourceEndpointInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointInstanceIdInput() {
    return this._sourceEndpointInstanceId;
  }

  // source_endpoint_instance_type - computed: false, optional: false, required: true
  private _sourceEndpointInstanceType?: string; 
  public get sourceEndpointInstanceType() {
    return this.getStringAttribute('source_endpoint_instance_type');
  }
  public set sourceEndpointInstanceType(value: string) {
    this._sourceEndpointInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointInstanceTypeInput() {
    return this._sourceEndpointInstanceType;
  }

  // source_endpoint_ip - computed: false, optional: true, required: false
  private _sourceEndpointIp?: string; 
  public get sourceEndpointIp() {
    return this.getStringAttribute('source_endpoint_ip');
  }
  public set sourceEndpointIp(value: string) {
    this._sourceEndpointIp = value;
  }
  public resetSourceEndpointIp() {
    this._sourceEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointIpInput() {
    return this._sourceEndpointIp;
  }

  // source_endpoint_oracle_sid - computed: false, optional: true, required: false
  private _sourceEndpointOracleSid?: string; 
  public get sourceEndpointOracleSid() {
    return this.getStringAttribute('source_endpoint_oracle_sid');
  }
  public set sourceEndpointOracleSid(value: string) {
    this._sourceEndpointOracleSid = value;
  }
  public resetSourceEndpointOracleSid() {
    this._sourceEndpointOracleSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointOracleSidInput() {
    return this._sourceEndpointOracleSid;
  }

  // source_endpoint_owner_id - computed: false, optional: true, required: false
  private _sourceEndpointOwnerId?: string; 
  public get sourceEndpointOwnerId() {
    return this.getStringAttribute('source_endpoint_owner_id');
  }
  public set sourceEndpointOwnerId(value: string) {
    this._sourceEndpointOwnerId = value;
  }
  public resetSourceEndpointOwnerId() {
    this._sourceEndpointOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointOwnerIdInput() {
    return this._sourceEndpointOwnerId;
  }

  // source_endpoint_password - computed: false, optional: true, required: false
  private _sourceEndpointPassword?: string; 
  public get sourceEndpointPassword() {
    return this.getStringAttribute('source_endpoint_password');
  }
  public set sourceEndpointPassword(value: string) {
    this._sourceEndpointPassword = value;
  }
  public resetSourceEndpointPassword() {
    this._sourceEndpointPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointPasswordInput() {
    return this._sourceEndpointPassword;
  }

  // source_endpoint_port - computed: false, optional: true, required: false
  private _sourceEndpointPort?: string; 
  public get sourceEndpointPort() {
    return this.getStringAttribute('source_endpoint_port');
  }
  public set sourceEndpointPort(value: string) {
    this._sourceEndpointPort = value;
  }
  public resetSourceEndpointPort() {
    this._sourceEndpointPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointPortInput() {
    return this._sourceEndpointPort;
  }

  // source_endpoint_region - computed: false, optional: false, required: true
  private _sourceEndpointRegion?: string; 
  public get sourceEndpointRegion() {
    return this.getStringAttribute('source_endpoint_region');
  }
  public set sourceEndpointRegion(value: string) {
    this._sourceEndpointRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointRegionInput() {
    return this._sourceEndpointRegion;
  }

  // source_endpoint_role - computed: false, optional: true, required: false
  private _sourceEndpointRole?: string; 
  public get sourceEndpointRole() {
    return this.getStringAttribute('source_endpoint_role');
  }
  public set sourceEndpointRole(value: string) {
    this._sourceEndpointRole = value;
  }
  public resetSourceEndpointRole() {
    this._sourceEndpointRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointRoleInput() {
    return this._sourceEndpointRole;
  }

  // source_endpoint_user_name - computed: false, optional: true, required: false
  private _sourceEndpointUserName?: string; 
  public get sourceEndpointUserName() {
    return this.getStringAttribute('source_endpoint_user_name');
  }
  public set sourceEndpointUserName(value: string) {
    this._sourceEndpointUserName = value;
  }
  public resetSourceEndpointUserName() {
    this._sourceEndpointUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointUserNameInput() {
    return this._sourceEndpointUserName;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subscription_data_type_ddl - computed: true, optional: true, required: false
  private _subscriptionDataTypeDdl?: boolean | cdktf.IResolvable; 
  public get subscriptionDataTypeDdl() {
    return this.getBooleanAttribute('subscription_data_type_ddl');
  }
  public set subscriptionDataTypeDdl(value: boolean | cdktf.IResolvable) {
    this._subscriptionDataTypeDdl = value;
  }
  public resetSubscriptionDataTypeDdl() {
    this._subscriptionDataTypeDdl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionDataTypeDdlInput() {
    return this._subscriptionDataTypeDdl;
  }

  // subscription_data_type_dml - computed: true, optional: true, required: false
  private _subscriptionDataTypeDml?: boolean | cdktf.IResolvable; 
  public get subscriptionDataTypeDml() {
    return this.getBooleanAttribute('subscription_data_type_dml');
  }
  public set subscriptionDataTypeDml(value: boolean | cdktf.IResolvable) {
    this._subscriptionDataTypeDml = value;
  }
  public resetSubscriptionDataTypeDml() {
    this._subscriptionDataTypeDml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionDataTypeDmlInput() {
    return this._subscriptionDataTypeDml;
  }

  // subscription_instance_network_type - computed: false, optional: true, required: false
  private _subscriptionInstanceNetworkType?: string; 
  public get subscriptionInstanceNetworkType() {
    return this.getStringAttribute('subscription_instance_network_type');
  }
  public set subscriptionInstanceNetworkType(value: string) {
    this._subscriptionInstanceNetworkType = value;
  }
  public resetSubscriptionInstanceNetworkType() {
    this._subscriptionInstanceNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInstanceNetworkTypeInput() {
    return this._subscriptionInstanceNetworkType;
  }

  // subscription_instance_vpc_id - computed: false, optional: true, required: false
  private _subscriptionInstanceVpcId?: string; 
  public get subscriptionInstanceVpcId() {
    return this.getStringAttribute('subscription_instance_vpc_id');
  }
  public set subscriptionInstanceVpcId(value: string) {
    this._subscriptionInstanceVpcId = value;
  }
  public resetSubscriptionInstanceVpcId() {
    this._subscriptionInstanceVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInstanceVpcIdInput() {
    return this._subscriptionInstanceVpcId;
  }

  // subscription_instance_vswitch_id - computed: false, optional: true, required: false
  private _subscriptionInstanceVswitchId?: string; 
  public get subscriptionInstanceVswitchId() {
    return this.getStringAttribute('subscription_instance_vswitch_id');
  }
  public set subscriptionInstanceVswitchId(value: string) {
    this._subscriptionInstanceVswitchId = value;
  }
  public resetSubscriptionInstanceVswitchId() {
    this._subscriptionInstanceVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInstanceVswitchIdInput() {
    return this._subscriptionInstanceVswitchId;
  }

  // sync_architecture - computed: false, optional: true, required: false
  private _syncArchitecture?: string; 
  public get syncArchitecture() {
    return this.getStringAttribute('sync_architecture');
  }
  public set syncArchitecture(value: string) {
    this._syncArchitecture = value;
  }
  public resetSyncArchitecture() {
    this._syncArchitecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncArchitectureInput() {
    return this._syncArchitecture;
  }

  // synchronization_direction - computed: false, optional: true, required: false
  private _synchronizationDirection?: string; 
  public get synchronizationDirection() {
    return this.getStringAttribute('synchronization_direction');
  }
  public set synchronizationDirection(value: string) {
    this._synchronizationDirection = value;
  }
  public resetSynchronizationDirection() {
    this._synchronizationDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizationDirectionInput() {
    return this._synchronizationDirection;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DtsSubscriptionJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DtsSubscriptionJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      checkpoint: cdktf.stringToTerraform(this._checkpoint),
      compute_unit: cdktf.numberToTerraform(this._computeUnit),
      database_count: cdktf.numberToTerraform(this._databaseCount),
      db_list: cdktf.stringToTerraform(this._dbList),
      delay_notice: cdktf.booleanToTerraform(this._delayNotice),
      delay_phone: cdktf.stringToTerraform(this._delayPhone),
      delay_rule_time: cdktf.stringToTerraform(this._delayRuleTime),
      destination_endpoint_engine_name: cdktf.stringToTerraform(this._destinationEndpointEngineName),
      destination_region: cdktf.stringToTerraform(this._destinationRegion),
      dts_instance_id: cdktf.stringToTerraform(this._dtsInstanceId),
      dts_job_name: cdktf.stringToTerraform(this._dtsJobName),
      error_notice: cdktf.booleanToTerraform(this._errorNotice),
      error_phone: cdktf.stringToTerraform(this._errorPhone),
      id: cdktf.stringToTerraform(this._id),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      payment_duration: cdktf.numberToTerraform(this._paymentDuration),
      payment_duration_unit: cdktf.stringToTerraform(this._paymentDurationUnit),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      reserve: cdktf.stringToTerraform(this._reserve),
      source_endpoint_database_name: cdktf.stringToTerraform(this._sourceEndpointDatabaseName),
      source_endpoint_engine_name: cdktf.stringToTerraform(this._sourceEndpointEngineName),
      source_endpoint_instance_id: cdktf.stringToTerraform(this._sourceEndpointInstanceId),
      source_endpoint_instance_type: cdktf.stringToTerraform(this._sourceEndpointInstanceType),
      source_endpoint_ip: cdktf.stringToTerraform(this._sourceEndpointIp),
      source_endpoint_oracle_sid: cdktf.stringToTerraform(this._sourceEndpointOracleSid),
      source_endpoint_owner_id: cdktf.stringToTerraform(this._sourceEndpointOwnerId),
      source_endpoint_password: cdktf.stringToTerraform(this._sourceEndpointPassword),
      source_endpoint_port: cdktf.stringToTerraform(this._sourceEndpointPort),
      source_endpoint_region: cdktf.stringToTerraform(this._sourceEndpointRegion),
      source_endpoint_role: cdktf.stringToTerraform(this._sourceEndpointRole),
      source_endpoint_user_name: cdktf.stringToTerraform(this._sourceEndpointUserName),
      status: cdktf.stringToTerraform(this._status),
      subscription_data_type_ddl: cdktf.booleanToTerraform(this._subscriptionDataTypeDdl),
      subscription_data_type_dml: cdktf.booleanToTerraform(this._subscriptionDataTypeDml),
      subscription_instance_network_type: cdktf.stringToTerraform(this._subscriptionInstanceNetworkType),
      subscription_instance_vpc_id: cdktf.stringToTerraform(this._subscriptionInstanceVpcId),
      subscription_instance_vswitch_id: cdktf.stringToTerraform(this._subscriptionInstanceVswitchId),
      sync_architecture: cdktf.stringToTerraform(this._syncArchitecture),
      synchronization_direction: cdktf.stringToTerraform(this._synchronizationDirection),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: dtsSubscriptionJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      checkpoint: {
        value: cdktf.stringToHclTerraform(this._checkpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_unit: {
        value: cdktf.numberToHclTerraform(this._computeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_count: {
        value: cdktf.numberToHclTerraform(this._databaseCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_list: {
        value: cdktf.stringToHclTerraform(this._dbList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_notice: {
        value: cdktf.booleanToHclTerraform(this._delayNotice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delay_phone: {
        value: cdktf.stringToHclTerraform(this._delayPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_rule_time: {
        value: cdktf.stringToHclTerraform(this._delayRuleTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint_engine_name: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointEngineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_region: {
        value: cdktf.stringToHclTerraform(this._destinationRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dts_instance_id: {
        value: cdktf.stringToHclTerraform(this._dtsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dts_job_name: {
        value: cdktf.stringToHclTerraform(this._dtsJobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_notice: {
        value: cdktf.booleanToHclTerraform(this._errorNotice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_phone: {
        value: cdktf.stringToHclTerraform(this._errorPhone),
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
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_duration: {
        value: cdktf.numberToHclTerraform(this._paymentDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      payment_duration_unit: {
        value: cdktf.stringToHclTerraform(this._paymentDurationUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserve: {
        value: cdktf.stringToHclTerraform(this._reserve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_database_name: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointDatabaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_engine_name: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointEngineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_instance_id: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_instance_type: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_ip: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_oracle_sid: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointOracleSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_owner_id: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_password: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_port: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_region: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_role: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_user_name: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_data_type_ddl: {
        value: cdktf.booleanToHclTerraform(this._subscriptionDataTypeDdl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_data_type_dml: {
        value: cdktf.booleanToHclTerraform(this._subscriptionDataTypeDml),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_instance_network_type: {
        value: cdktf.stringToHclTerraform(this._subscriptionInstanceNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_instance_vpc_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionInstanceVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_instance_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionInstanceVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_architecture: {
        value: cdktf.stringToHclTerraform(this._syncArchitecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synchronization_direction: {
        value: cdktf.stringToHclTerraform(this._synchronizationDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: dtsSubscriptionJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DtsSubscriptionJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
