// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudmonitorserviceMetricruletemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#apply_mode CloudmonitorserviceMetricruletemplate#apply_mode}
  */
  readonly applyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#description CloudmonitorserviceMetricruletemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#enable CloudmonitorserviceMetricruletemplate#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#enable_end_time CloudmonitorserviceMetricruletemplate#enable_end_time}
  */
  readonly enableEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#enable_start_time CloudmonitorserviceMetricruletemplate#enable_start_time}
  */
  readonly enableStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#group_id CloudmonitorserviceMetricruletemplate#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#id CloudmonitorserviceMetricruletemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#metric_rule_template_name CloudmonitorserviceMetricruletemplate#metric_rule_template_name}
  */
  readonly metricRuleTemplateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#notify_level CloudmonitorserviceMetricruletemplate#notify_level}
  */
  readonly notifyLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#overwrite CloudmonitorserviceMetricruletemplate#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#rest_version CloudmonitorserviceMetricruletemplate#rest_version}
  */
  readonly restVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#silence_time CloudmonitorserviceMetricruletemplate#silence_time}
  */
  readonly silenceTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#webhook CloudmonitorserviceMetricruletemplate#webhook}
  */
  readonly webhook?: string;
  /**
  * alert_templates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#alert_templates CloudmonitorserviceMetricruletemplate#alert_templates}
  */
  readonly alertTemplates?: CloudmonitorserviceMetricruletemplateAlertTemplates[] | cdktf.IResolvable;
}
export interface CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCritical {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#comparison_operator CloudmonitorserviceMetricruletemplate#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#statistics CloudmonitorserviceMetricruletemplate#statistics}
  */
  readonly statistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#threshold CloudmonitorserviceMetricruletemplate#threshold}
  */
  readonly threshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#times CloudmonitorserviceMetricruletemplate#times}
  */
  readonly times?: string;
}

export function cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCriticalToTerraform(struct?: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCriticalOutputReference | CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    statistics: cdktf.stringToTerraform(struct!.statistics),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    times: cdktf.stringToTerraform(struct!.times),
  }
}


export function cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCriticalToHclTerraform(struct?: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCriticalOutputReference | CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistics: {
      value: cdktf.stringToHclTerraform(struct!.statistics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    times: {
      value: cdktf.stringToHclTerraform(struct!.times),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCriticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCritical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCritical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._statistics = undefined;
      this._threshold = undefined;
      this._times = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._statistics = value.statistics;
      this._threshold = value.threshold;
      this._times = value.times;
    }
  }

  // comparison_operator - computed: false, optional: true, required: false
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics?: string; 
  public get statistics() {
    return this.getStringAttribute('statistics');
  }
  public set statistics(value: string) {
    this._statistics = value;
  }
  public resetStatistics() {
    this._statistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // times - computed: false, optional: true, required: false
  private _times?: string; 
  public get times() {
    return this.getStringAttribute('times');
  }
  public set times(value: string) {
    this._times = value;
  }
  public resetTimes() {
    this._times = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }
}
export interface CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#comparison_operator CloudmonitorserviceMetricruletemplate#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#statistics CloudmonitorserviceMetricruletemplate#statistics}
  */
  readonly statistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#threshold CloudmonitorserviceMetricruletemplate#threshold}
  */
  readonly threshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#times CloudmonitorserviceMetricruletemplate#times}
  */
  readonly times?: string;
}

export function cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfoToTerraform(struct?: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfoOutputReference | CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    statistics: cdktf.stringToTerraform(struct!.statistics),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    times: cdktf.stringToTerraform(struct!.times),
  }
}


export function cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfoToHclTerraform(struct?: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfoOutputReference | CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistics: {
      value: cdktf.stringToHclTerraform(struct!.statistics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    times: {
      value: cdktf.stringToHclTerraform(struct!.times),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._statistics = undefined;
      this._threshold = undefined;
      this._times = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._statistics = value.statistics;
      this._threshold = value.threshold;
      this._times = value.times;
    }
  }

  // comparison_operator - computed: false, optional: true, required: false
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics?: string; 
  public get statistics() {
    return this.getStringAttribute('statistics');
  }
  public set statistics(value: string) {
    this._statistics = value;
  }
  public resetStatistics() {
    this._statistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // times - computed: false, optional: true, required: false
  private _times?: string; 
  public get times() {
    return this.getStringAttribute('times');
  }
  public set times(value: string) {
    this._times = value;
  }
  public resetTimes() {
    this._times = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }
}
export interface CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#comparison_operator CloudmonitorserviceMetricruletemplate#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#statistics CloudmonitorserviceMetricruletemplate#statistics}
  */
  readonly statistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#threshold CloudmonitorserviceMetricruletemplate#threshold}
  */
  readonly threshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#times CloudmonitorserviceMetricruletemplate#times}
  */
  readonly times?: string;
}

export function cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarnToTerraform(struct?: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarnOutputReference | CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    statistics: cdktf.stringToTerraform(struct!.statistics),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    times: cdktf.stringToTerraform(struct!.times),
  }
}


export function cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarnToHclTerraform(struct?: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarnOutputReference | CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistics: {
      value: cdktf.stringToHclTerraform(struct!.statistics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    times: {
      value: cdktf.stringToHclTerraform(struct!.times),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._statistics = undefined;
      this._threshold = undefined;
      this._times = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._statistics = value.statistics;
      this._threshold = value.threshold;
      this._times = value.times;
    }
  }

  // comparison_operator - computed: false, optional: true, required: false
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics?: string; 
  public get statistics() {
    return this.getStringAttribute('statistics');
  }
  public set statistics(value: string) {
    this._statistics = value;
  }
  public resetStatistics() {
    this._statistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // times - computed: false, optional: true, required: false
  private _times?: string; 
  public get times() {
    return this.getStringAttribute('times');
  }
  public set times(value: string) {
    this._times = value;
  }
  public resetTimes() {
    this._times = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }
}
export interface CloudmonitorserviceMetricruletemplateAlertTemplatesEscalations {
  /**
  * critical block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#critical CloudmonitorserviceMetricruletemplate#critical}
  */
  readonly critical?: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCritical;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#info CloudmonitorserviceMetricruletemplate#info}
  */
  readonly info?: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfo;
  /**
  * warn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#warn CloudmonitorserviceMetricruletemplate#warn}
  */
  readonly warn?: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarn;
}

export function cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsToTerraform(struct?: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsOutputReference | CloudmonitorserviceMetricruletemplateAlertTemplatesEscalations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCriticalToTerraform(struct!.critical),
    info: cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfoToTerraform(struct!.info),
    warn: cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarnToTerraform(struct!.warn),
  }
}


export function cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsToHclTerraform(struct?: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsOutputReference | CloudmonitorserviceMetricruletemplateAlertTemplatesEscalations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCriticalToHclTerraform(struct!.critical),
      isBlock: true,
      type: "set",
      storageClassType: "CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCriticalList",
    },
    info: {
      value: cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfoToHclTerraform(struct!.info),
      isBlock: true,
      type: "set",
      storageClassType: "CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfoList",
    },
    warn: {
      value: cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarnToHclTerraform(struct!.warn),
      isBlock: true,
      type: "set",
      storageClassType: "CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudmonitorserviceMetricruletemplateAlertTemplatesEscalations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._warn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warn = this._warn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical.internalValue = undefined;
      this._info.internalValue = undefined;
      this._warn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical.internalValue = value.critical;
      this._info.internalValue = value.info;
      this._warn.internalValue = value.warn;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical = new CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCriticalOutputReference(this, "critical");
  public get critical() {
    return this._critical;
  }
  public putCritical(value: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsCritical) {
    this._critical.internalValue = value;
  }
  public resetCritical() {
    this._critical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsInfo) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // warn - computed: false, optional: true, required: false
  private _warn = new CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarnOutputReference(this, "warn");
  public get warn() {
    return this._warn;
  }
  public putWarn(value: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsWarn) {
    this._warn.internalValue = value;
  }
  public resetWarn() {
    this._warn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnInput() {
    return this._warn.internalValue;
  }
}
export interface CloudmonitorserviceMetricruletemplateAlertTemplates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#category CloudmonitorserviceMetricruletemplate#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#metric_name CloudmonitorserviceMetricruletemplate#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#namespace CloudmonitorserviceMetricruletemplate#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#rule_name CloudmonitorserviceMetricruletemplate#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#webhook CloudmonitorserviceMetricruletemplate#webhook}
  */
  readonly webhook?: string;
  /**
  * escalations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#escalations CloudmonitorserviceMetricruletemplate#escalations}
  */
  readonly escalations?: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalations;
}

export function cloudmonitorserviceMetricruletemplateAlertTemplatesToTerraform(struct?: CloudmonitorserviceMetricruletemplateAlertTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    escalations: cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsToTerraform(struct!.escalations),
  }
}


export function cloudmonitorserviceMetricruletemplateAlertTemplatesToHclTerraform(struct?: CloudmonitorserviceMetricruletemplateAlertTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: cdktf.stringToHclTerraform(struct!.webhook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escalations: {
      value: cloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsToHclTerraform(struct!.escalations),
      isBlock: true,
      type: "set",
      storageClassType: "CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudmonitorserviceMetricruletemplateAlertTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudmonitorserviceMetricruletemplateAlertTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._webhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook;
    }
    if (this._escalations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalations = this._escalations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudmonitorserviceMetricruletemplateAlertTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._ruleName = undefined;
      this._webhook = undefined;
      this._escalations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._ruleName = value.ruleName;
      this._webhook = value.webhook;
      this._escalations.internalValue = value.escalations;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }

  // escalations - computed: false, optional: true, required: false
  private _escalations = new CloudmonitorserviceMetricruletemplateAlertTemplatesEscalationsOutputReference(this, "escalations");
  public get escalations() {
    return this._escalations;
  }
  public putEscalations(value: CloudmonitorserviceMetricruletemplateAlertTemplatesEscalations) {
    this._escalations.internalValue = value;
  }
  public resetEscalations() {
    this._escalations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationsInput() {
    return this._escalations.internalValue;
  }
}

export class CloudmonitorserviceMetricruletemplateAlertTemplatesList extends cdktf.ComplexList {
  public internalValue? : CloudmonitorserviceMetricruletemplateAlertTemplates[] | cdktf.IResolvable

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
  public get(index: number): CloudmonitorserviceMetricruletemplateAlertTemplatesOutputReference {
    return new CloudmonitorserviceMetricruletemplateAlertTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate alibabacloudstack_cloudmonitorservice_metricruletemplate}
*/
export class CloudmonitorserviceMetricruletemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cloudmonitorservice_metricruletemplate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudmonitorserviceMetricruletemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudmonitorserviceMetricruletemplate to import
  * @param importFromId The id of the existing CloudmonitorserviceMetricruletemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudmonitorserviceMetricruletemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cloudmonitorservice_metricruletemplate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/cloudmonitorservice_metricruletemplate alibabacloudstack_cloudmonitorservice_metricruletemplate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudmonitorserviceMetricruletemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CloudmonitorserviceMetricruletemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cloudmonitorservice_metricruletemplate',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyMode = config.applyMode;
    this._description = config.description;
    this._enable = config.enable;
    this._enableEndTime = config.enableEndTime;
    this._enableStartTime = config.enableStartTime;
    this._groupId = config.groupId;
    this._id = config.id;
    this._metricRuleTemplateName = config.metricRuleTemplateName;
    this._notifyLevel = config.notifyLevel;
    this._overwrite = config.overwrite;
    this._restVersion = config.restVersion;
    this._silenceTime = config.silenceTime;
    this._webhook = config.webhook;
    this._alertTemplates.internalValue = config.alertTemplates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_mode - computed: false, optional: true, required: false
  private _applyMode?: string; 
  public get applyMode() {
    return this.getStringAttribute('apply_mode');
  }
  public set applyMode(value: string) {
    this._applyMode = value;
  }
  public resetApplyMode() {
    this._applyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyModeInput() {
    return this._applyMode;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_end_time - computed: false, optional: true, required: false
  private _enableEndTime?: string; 
  public get enableEndTime() {
    return this.getStringAttribute('enable_end_time');
  }
  public set enableEndTime(value: string) {
    this._enableEndTime = value;
  }
  public resetEnableEndTime() {
    this._enableEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEndTimeInput() {
    return this._enableEndTime;
  }

  // enable_start_time - computed: false, optional: true, required: false
  private _enableStartTime?: string; 
  public get enableStartTime() {
    return this.getStringAttribute('enable_start_time');
  }
  public set enableStartTime(value: string) {
    this._enableStartTime = value;
  }
  public resetEnableStartTime() {
    this._enableStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStartTimeInput() {
    return this._enableStartTime;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // metric_rule_template_name - computed: false, optional: false, required: true
  private _metricRuleTemplateName?: string; 
  public get metricRuleTemplateName() {
    return this.getStringAttribute('metric_rule_template_name');
  }
  public set metricRuleTemplateName(value: string) {
    this._metricRuleTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRuleTemplateNameInput() {
    return this._metricRuleTemplateName;
  }

  // notify_level - computed: false, optional: true, required: false
  private _notifyLevel?: string; 
  public get notifyLevel() {
    return this.getStringAttribute('notify_level');
  }
  public set notifyLevel(value: string) {
    this._notifyLevel = value;
  }
  public resetNotifyLevel() {
    this._notifyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyLevelInput() {
    return this._notifyLevel;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // rest_version - computed: true, optional: true, required: false
  private _restVersion?: string; 
  public get restVersion() {
    return this.getStringAttribute('rest_version');
  }
  public set restVersion(value: string) {
    this._restVersion = value;
  }
  public resetRestVersion() {
    this._restVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restVersionInput() {
    return this._restVersion;
  }

  // silence_time - computed: false, optional: true, required: false
  private _silenceTime?: number; 
  public get silenceTime() {
    return this.getNumberAttribute('silence_time');
  }
  public set silenceTime(value: number) {
    this._silenceTime = value;
  }
  public resetSilenceTime() {
    this._silenceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silenceTimeInput() {
    return this._silenceTime;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }

  // alert_templates - computed: false, optional: true, required: false
  private _alertTemplates = new CloudmonitorserviceMetricruletemplateAlertTemplatesList(this, "alert_templates", true);
  public get alertTemplates() {
    return this._alertTemplates;
  }
  public putAlertTemplates(value: CloudmonitorserviceMetricruletemplateAlertTemplates[] | cdktf.IResolvable) {
    this._alertTemplates.internalValue = value;
  }
  public resetAlertTemplates() {
    this._alertTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTemplatesInput() {
    return this._alertTemplates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_mode: cdktf.stringToTerraform(this._applyMode),
      description: cdktf.stringToTerraform(this._description),
      enable: cdktf.booleanToTerraform(this._enable),
      enable_end_time: cdktf.stringToTerraform(this._enableEndTime),
      enable_start_time: cdktf.stringToTerraform(this._enableStartTime),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      metric_rule_template_name: cdktf.stringToTerraform(this._metricRuleTemplateName),
      notify_level: cdktf.stringToTerraform(this._notifyLevel),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      rest_version: cdktf.stringToTerraform(this._restVersion),
      silence_time: cdktf.numberToTerraform(this._silenceTime),
      webhook: cdktf.stringToTerraform(this._webhook),
      alert_templates: cdktf.listMapper(cloudmonitorserviceMetricruletemplateAlertTemplatesToTerraform, true)(this._alertTemplates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_mode: {
        value: cdktf.stringToHclTerraform(this._applyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_end_time: {
        value: cdktf.stringToHclTerraform(this._enableEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_start_time: {
        value: cdktf.stringToHclTerraform(this._enableStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      metric_rule_template_name: {
        value: cdktf.stringToHclTerraform(this._metricRuleTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_level: {
        value: cdktf.stringToHclTerraform(this._notifyLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite: {
        value: cdktf.booleanToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rest_version: {
        value: cdktf.stringToHclTerraform(this._restVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      silence_time: {
        value: cdktf.numberToHclTerraform(this._silenceTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webhook: {
        value: cdktf.stringToHclTerraform(this._webhook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_templates: {
        value: cdktf.listMapperHcl(cloudmonitorserviceMetricruletemplateAlertTemplatesToHclTerraform, true)(this._alertTemplates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudmonitorserviceMetricruletemplateAlertTemplatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
