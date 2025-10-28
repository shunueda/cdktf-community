// https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuotasQuotaApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#audit_mode QuotasQuotaApplication#audit_mode}
  */
  readonly auditMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#desire_value QuotasQuotaApplication#desire_value}
  */
  readonly desireValue: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#effective_time QuotasQuotaApplication#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#env_language QuotasQuotaApplication#env_language}
  */
  readonly envLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#expire_time QuotasQuotaApplication#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#id QuotasQuotaApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#notice_type QuotasQuotaApplication#notice_type}
  */
  readonly noticeType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#product_code QuotasQuotaApplication#product_code}
  */
  readonly productCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#quota_action_code QuotasQuotaApplication#quota_action_code}
  */
  readonly quotaActionCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#quota_category QuotasQuotaApplication#quota_category}
  */
  readonly quotaCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#reason QuotasQuotaApplication#reason}
  */
  readonly reason: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#dimensions QuotasQuotaApplication#dimensions}
  */
  readonly dimensions?: QuotasQuotaApplicationDimensions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#timeouts QuotasQuotaApplication#timeouts}
  */
  readonly timeouts?: QuotasQuotaApplicationTimeouts;
}
export interface QuotasQuotaApplicationDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#key QuotasQuotaApplication#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#value QuotasQuotaApplication#value}
  */
  readonly value?: string;
}

export function quotasQuotaApplicationDimensionsToTerraform(struct?: QuotasQuotaApplicationDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function quotasQuotaApplicationDimensionsToHclTerraform(struct?: QuotasQuotaApplicationDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuotasQuotaApplicationDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuotasQuotaApplicationDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuotasQuotaApplicationDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class QuotasQuotaApplicationDimensionsList extends cdktf.ComplexList {
  public internalValue? : QuotasQuotaApplicationDimensions[] | cdktf.IResolvable

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
  public get(index: number): QuotasQuotaApplicationDimensionsOutputReference {
    return new QuotasQuotaApplicationDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuotasQuotaApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#create QuotasQuotaApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#delete QuotasQuotaApplication#delete}
  */
  readonly delete?: string;
}

export function quotasQuotaApplicationTimeoutsToTerraform(struct?: QuotasQuotaApplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function quotasQuotaApplicationTimeoutsToHclTerraform(struct?: QuotasQuotaApplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuotasQuotaApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuotasQuotaApplicationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuotasQuotaApplicationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application alicloud_quotas_quota_application}
*/
export class QuotasQuotaApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_quotas_quota_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuotasQuotaApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuotasQuotaApplication to import
  * @param importFromId The id of the existing QuotasQuotaApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuotasQuotaApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_quotas_quota_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/quotas_quota_application alicloud_quotas_quota_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuotasQuotaApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: QuotasQuotaApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_quotas_quota_application',
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
    this._auditMode = config.auditMode;
    this._desireValue = config.desireValue;
    this._effectiveTime = config.effectiveTime;
    this._envLanguage = config.envLanguage;
    this._expireTime = config.expireTime;
    this._id = config.id;
    this._noticeType = config.noticeType;
    this._productCode = config.productCode;
    this._quotaActionCode = config.quotaActionCode;
    this._quotaCategory = config.quotaCategory;
    this._reason = config.reason;
    this._dimensions.internalValue = config.dimensions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approve_value - computed: true, optional: false, required: false
  public get approveValue() {
    return this.getStringAttribute('approve_value');
  }

  // audit_mode - computed: true, optional: true, required: false
  private _auditMode?: string; 
  public get auditMode() {
    return this.getStringAttribute('audit_mode');
  }
  public set auditMode(value: string) {
    this._auditMode = value;
  }
  public resetAuditMode() {
    this._auditMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditModeInput() {
    return this._auditMode;
  }

  // audit_reason - computed: true, optional: false, required: false
  public get auditReason() {
    return this.getStringAttribute('audit_reason');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // desire_value - computed: false, optional: false, required: true
  private _desireValue?: number; 
  public get desireValue() {
    return this.getNumberAttribute('desire_value');
  }
  public set desireValue(value: number) {
    this._desireValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desireValueInput() {
    return this._desireValue;
  }

  // effective_time - computed: false, optional: true, required: false
  private _effectiveTime?: string; 
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }
  public set effectiveTime(value: string) {
    this._effectiveTime = value;
  }
  public resetEffectiveTime() {
    this._effectiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTimeInput() {
    return this._effectiveTime;
  }

  // env_language - computed: false, optional: true, required: false
  private _envLanguage?: string; 
  public get envLanguage() {
    return this.getStringAttribute('env_language');
  }
  public set envLanguage(value: string) {
    this._envLanguage = value;
  }
  public resetEnvLanguage() {
    this._envLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envLanguageInput() {
    return this._envLanguage;
  }

  // expire_time - computed: false, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
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

  // notice_type - computed: true, optional: true, required: false
  private _noticeType?: number; 
  public get noticeType() {
    return this.getNumberAttribute('notice_type');
  }
  public set noticeType(value: number) {
    this._noticeType = value;
  }
  public resetNoticeType() {
    this._noticeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeTypeInput() {
    return this._noticeType;
  }

  // product_code - computed: false, optional: false, required: true
  private _productCode?: string; 
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string) {
    this._productCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
  }

  // quota_action_code - computed: false, optional: false, required: true
  private _quotaActionCode?: string; 
  public get quotaActionCode() {
    return this.getStringAttribute('quota_action_code');
  }
  public set quotaActionCode(value: string) {
    this._quotaActionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaActionCodeInput() {
    return this._quotaActionCode;
  }

  // quota_category - computed: false, optional: true, required: false
  private _quotaCategory?: string; 
  public get quotaCategory() {
    return this.getStringAttribute('quota_category');
  }
  public set quotaCategory(value: string) {
    this._quotaCategory = value;
  }
  public resetQuotaCategory() {
    this._quotaCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaCategoryInput() {
    return this._quotaCategory;
  }

  // quota_description - computed: true, optional: false, required: false
  public get quotaDescription() {
    return this.getStringAttribute('quota_description');
  }

  // quota_name - computed: true, optional: false, required: false
  public get quotaName() {
    return this.getStringAttribute('quota_name');
  }

  // quota_unit - computed: true, optional: false, required: false
  public get quotaUnit() {
    return this.getStringAttribute('quota_unit');
  }

  // reason - computed: false, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new QuotasQuotaApplicationDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: QuotasQuotaApplicationDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new QuotasQuotaApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: QuotasQuotaApplicationTimeouts) {
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
      audit_mode: cdktf.stringToTerraform(this._auditMode),
      desire_value: cdktf.numberToTerraform(this._desireValue),
      effective_time: cdktf.stringToTerraform(this._effectiveTime),
      env_language: cdktf.stringToTerraform(this._envLanguage),
      expire_time: cdktf.stringToTerraform(this._expireTime),
      id: cdktf.stringToTerraform(this._id),
      notice_type: cdktf.numberToTerraform(this._noticeType),
      product_code: cdktf.stringToTerraform(this._productCode),
      quota_action_code: cdktf.stringToTerraform(this._quotaActionCode),
      quota_category: cdktf.stringToTerraform(this._quotaCategory),
      reason: cdktf.stringToTerraform(this._reason),
      dimensions: cdktf.listMapper(quotasQuotaApplicationDimensionsToTerraform, true)(this._dimensions.internalValue),
      timeouts: quotasQuotaApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_mode: {
        value: cdktf.stringToHclTerraform(this._auditMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desire_value: {
        value: cdktf.numberToHclTerraform(this._desireValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      effective_time: {
        value: cdktf.stringToHclTerraform(this._effectiveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_language: {
        value: cdktf.stringToHclTerraform(this._envLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_time: {
        value: cdktf.stringToHclTerraform(this._expireTime),
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
      notice_type: {
        value: cdktf.numberToHclTerraform(this._noticeType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_code: {
        value: cdktf.stringToHclTerraform(this._productCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_action_code: {
        value: cdktf.stringToHclTerraform(this._quotaActionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_category: {
        value: cdktf.stringToHclTerraform(this._quotaCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimensions: {
        value: cdktf.listMapperHcl(quotasQuotaApplicationDimensionsToHclTerraform, true)(this._dimensions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "QuotasQuotaApplicationDimensionsList",
      },
      timeouts: {
        value: quotasQuotaApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuotasQuotaApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
