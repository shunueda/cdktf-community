// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#adjustment_type AutoscalingPolicy#adjustment_type}
  */
  readonly adjustmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#autoscaling_group_name AutoscalingPolicy#autoscaling_group_name}
  */
  readonly autoscalingGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#cooldown AutoscalingPolicy#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#estimated_instance_warmup AutoscalingPolicy#estimated_instance_warmup}
  */
  readonly estimatedInstanceWarmup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#id AutoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#metric_aggregation_type AutoscalingPolicy#metric_aggregation_type}
  */
  readonly metricAggregationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#min_adjustment_magnitude AutoscalingPolicy#min_adjustment_magnitude}
  */
  readonly minAdjustmentMagnitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#name AutoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#policy_type AutoscalingPolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#scaling_adjustment AutoscalingPolicy#scaling_adjustment}
  */
  readonly scalingAdjustment?: number;
  /**
  * step_adjustment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#step_adjustment AutoscalingPolicy#step_adjustment}
  */
  readonly stepAdjustment?: AutoscalingPolicyStepAdjustment[] | cdktf.IResolvable;
  /**
  * target_tracking_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#target_tracking_configuration AutoscalingPolicy#target_tracking_configuration}
  */
  readonly targetTrackingConfiguration?: AutoscalingPolicyTargetTrackingConfiguration;
}
export interface AutoscalingPolicyStepAdjustment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#metric_interval_lower_bound AutoscalingPolicy#metric_interval_lower_bound}
  */
  readonly metricIntervalLowerBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#metric_interval_upper_bound AutoscalingPolicy#metric_interval_upper_bound}
  */
  readonly metricIntervalUpperBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#scaling_adjustment AutoscalingPolicy#scaling_adjustment}
  */
  readonly scalingAdjustment: number;
}

export function autoscalingPolicyStepAdjustmentToTerraform(struct?: AutoscalingPolicyStepAdjustment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_interval_lower_bound: cdktf.stringToTerraform(struct!.metricIntervalLowerBound),
    metric_interval_upper_bound: cdktf.stringToTerraform(struct!.metricIntervalUpperBound),
    scaling_adjustment: cdktf.numberToTerraform(struct!.scalingAdjustment),
  }
}


export function autoscalingPolicyStepAdjustmentToHclTerraform(struct?: AutoscalingPolicyStepAdjustment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_interval_lower_bound: {
      value: cdktf.stringToHclTerraform(struct!.metricIntervalLowerBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_interval_upper_bound: {
      value: cdktf.stringToHclTerraform(struct!.metricIntervalUpperBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.scalingAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingPolicyStepAdjustmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingPolicyStepAdjustment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricIntervalLowerBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIntervalLowerBound = this._metricIntervalLowerBound;
    }
    if (this._metricIntervalUpperBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIntervalUpperBound = this._metricIntervalUpperBound;
    }
    if (this._scalingAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingAdjustment = this._scalingAdjustment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyStepAdjustment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricIntervalLowerBound = undefined;
      this._metricIntervalUpperBound = undefined;
      this._scalingAdjustment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricIntervalLowerBound = value.metricIntervalLowerBound;
      this._metricIntervalUpperBound = value.metricIntervalUpperBound;
      this._scalingAdjustment = value.scalingAdjustment;
    }
  }

  // metric_interval_lower_bound - computed: false, optional: true, required: false
  private _metricIntervalLowerBound?: string; 
  public get metricIntervalLowerBound() {
    return this.getStringAttribute('metric_interval_lower_bound');
  }
  public set metricIntervalLowerBound(value: string) {
    this._metricIntervalLowerBound = value;
  }
  public resetMetricIntervalLowerBound() {
    this._metricIntervalLowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIntervalLowerBoundInput() {
    return this._metricIntervalLowerBound;
  }

  // metric_interval_upper_bound - computed: false, optional: true, required: false
  private _metricIntervalUpperBound?: string; 
  public get metricIntervalUpperBound() {
    return this.getStringAttribute('metric_interval_upper_bound');
  }
  public set metricIntervalUpperBound(value: string) {
    this._metricIntervalUpperBound = value;
  }
  public resetMetricIntervalUpperBound() {
    this._metricIntervalUpperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIntervalUpperBoundInput() {
    return this._metricIntervalUpperBound;
  }

  // scaling_adjustment - computed: false, optional: false, required: true
  private _scalingAdjustment?: number; 
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }
  public set scalingAdjustment(value: number) {
    this._scalingAdjustment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingAdjustmentInput() {
    return this._scalingAdjustment;
  }
}

export class AutoscalingPolicyStepAdjustmentList extends cdktf.ComplexList {
  public internalValue? : AutoscalingPolicyStepAdjustment[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingPolicyStepAdjustmentOutputReference {
    return new AutoscalingPolicyStepAdjustmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#name AutoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#value AutoscalingPolicy#value}
  */
  readonly value: string;
}

export function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToHclTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension | cdktf.IResolvable): any {
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

export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList extends cdktf.ComplexList {
  public internalValue? : AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference {
    return new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#metric_name AutoscalingPolicy#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#namespace AutoscalingPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#statistic AutoscalingPolicy#statistic}
  */
  readonly statistic: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#unit AutoscalingPolicy#unit}
  */
  readonly unit?: string;
  /**
  * metric_dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#metric_dimension AutoscalingPolicy#metric_dimension}
  */
  readonly metricDimension?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[] | cdktf.IResolvable;
}

export function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    unit: cdktf.stringToTerraform(struct!.unit),
    metric_dimension: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform, true)(struct!.metricDimension),
  }
}


export function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToHclTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_dimension: {
      value: cdktf.listMapperHcl(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToHclTerraform, true)(struct!.metricDimension),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._metricDimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDimension = this._metricDimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._namespace = undefined;
      this._statistic = undefined;
      this._unit = undefined;
      this._metricDimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._statistic = value.statistic;
      this._unit = value.unit;
      this._metricDimension.internalValue = value.metricDimension;
    }
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

  // statistic - computed: false, optional: false, required: true
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // metric_dimension - computed: false, optional: true, required: false
  private _metricDimension = new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList(this, "metric_dimension", false);
  public get metricDimension() {
    return this._metricDimension;
  }
  public putMetricDimension(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[] | cdktf.IResolvable) {
    this._metricDimension.internalValue = value;
  }
  public resetMetricDimension() {
    this._metricDimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDimensionInput() {
    return this._metricDimension.internalValue;
  }
}
export interface AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference | AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}


export function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToHclTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference | AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predefined_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.predefinedMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_label: {
      value: cdktf.stringToHclTerraform(struct!.resourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricType = this._predefinedMetricType;
    }
    if (this._resourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabel = this._resourceLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predefinedMetricType = undefined;
      this._resourceLabel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predefinedMetricType = value.predefinedMetricType;
      this._resourceLabel = value.resourceLabel;
    }
  }

  // predefined_metric_type - computed: false, optional: false, required: true
  private _predefinedMetricType?: string; 
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }
  public set predefinedMetricType(value: string) {
    this._predefinedMetricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricTypeInput() {
    return this._predefinedMetricType;
  }

  // resource_label - computed: false, optional: true, required: false
  private _resourceLabel?: string; 
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
  public set resourceLabel(value: string) {
    this._resourceLabel = value;
  }
  public resetResourceLabel() {
    this._resourceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelInput() {
    return this._resourceLabel;
  }
}
export interface AutoscalingPolicyTargetTrackingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#disable_scale_in AutoscalingPolicy#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#target_value AutoscalingPolicy#target_value}
  */
  readonly targetValue: number;
  /**
  * customized_metric_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#customized_metric_specification AutoscalingPolicy#customized_metric_specification}
  */
  readonly customizedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification;
  /**
  * predefined_metric_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#predefined_metric_specification AutoscalingPolicy#predefined_metric_specification}
  */
  readonly predefinedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification;
}

export function autoscalingPolicyTargetTrackingConfigurationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationOutputReference | AutoscalingPolicyTargetTrackingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
    customized_metric_specification: autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct!.customizedMetricSpecification),
    predefined_metric_specification: autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct!.predefinedMetricSpecification),
  }
}


export function autoscalingPolicyTargetTrackingConfigurationToHclTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationOutputReference | AutoscalingPolicyTargetTrackingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_scale_in: {
      value: cdktf.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_value: {
      value: cdktf.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    customized_metric_specification: {
      value: autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToHclTerraform(struct!.customizedMetricSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationList",
    },
    predefined_metric_specification: {
      value: autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToHclTerraform(struct!.predefinedMetricSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingPolicyTargetTrackingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyTargetTrackingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    if (this._customizedMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedMetricSpecification = this._customizedMetricSpecification?.internalValue;
    }
    if (this._predefinedMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricSpecification = this._predefinedMetricSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyTargetTrackingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableScaleIn = undefined;
      this._targetValue = undefined;
      this._customizedMetricSpecification.internalValue = undefined;
      this._predefinedMetricSpecification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableScaleIn = value.disableScaleIn;
      this._targetValue = value.targetValue;
      this._customizedMetricSpecification.internalValue = value.customizedMetricSpecification;
      this._predefinedMetricSpecification.internalValue = value.predefinedMetricSpecification;
    }
  }

  // disable_scale_in - computed: false, optional: true, required: false
  private _disableScaleIn?: boolean | cdktf.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktf.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // target_value - computed: false, optional: false, required: true
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }

  // customized_metric_specification - computed: false, optional: true, required: false
  private _customizedMetricSpecification = new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference(this, "customized_metric_specification");
  public get customizedMetricSpecification() {
    return this._customizedMetricSpecification;
  }
  public putCustomizedMetricSpecification(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification) {
    this._customizedMetricSpecification.internalValue = value;
  }
  public resetCustomizedMetricSpecification() {
    this._customizedMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedMetricSpecificationInput() {
    return this._customizedMetricSpecification.internalValue;
  }

  // predefined_metric_specification - computed: false, optional: true, required: false
  private _predefinedMetricSpecification = new AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference(this, "predefined_metric_specification");
  public get predefinedMetricSpecification() {
    return this._predefinedMetricSpecification;
  }
  public putPredefinedMetricSpecification(value: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification) {
    this._predefinedMetricSpecification.internalValue = value;
  }
  public resetPredefinedMetricSpecification() {
    this._predefinedMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricSpecificationInput() {
    return this._predefinedMetricSpecification.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy aws_autoscaling_policy}
*/
export class AutoscalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_autoscaling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoscalingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoscalingPolicy to import
  * @param importFromId The id of the existing AutoscalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoscalingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_autoscaling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/autoscaling_policy aws_autoscaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_policy',
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
    this._adjustmentType = config.adjustmentType;
    this._autoscalingGroupName = config.autoscalingGroupName;
    this._cooldown = config.cooldown;
    this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
    this._id = config.id;
    this._metricAggregationType = config.metricAggregationType;
    this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
    this._name = config.name;
    this._policyType = config.policyType;
    this._scalingAdjustment = config.scalingAdjustment;
    this._stepAdjustment.internalValue = config.stepAdjustment;
    this._targetTrackingConfiguration.internalValue = config.targetTrackingConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjustment_type - computed: false, optional: true, required: false
  private _adjustmentType?: string; 
  public get adjustmentType() {
    return this.getStringAttribute('adjustment_type');
  }
  public set adjustmentType(value: string) {
    this._adjustmentType = value;
  }
  public resetAdjustmentType() {
    this._adjustmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentTypeInput() {
    return this._adjustmentType;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_group_name - computed: false, optional: false, required: true
  private _autoscalingGroupName?: string; 
  public get autoscalingGroupName() {
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName;
  }

  // cooldown - computed: false, optional: true, required: false
  private _cooldown?: number; 
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }
  public set cooldown(value: number) {
    this._cooldown = value;
  }
  public resetCooldown() {
    this._cooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
  }

  // estimated_instance_warmup - computed: false, optional: true, required: false
  private _estimatedInstanceWarmup?: number; 
  public get estimatedInstanceWarmup() {
    return this.getNumberAttribute('estimated_instance_warmup');
  }
  public set estimatedInstanceWarmup(value: number) {
    this._estimatedInstanceWarmup = value;
  }
  public resetEstimatedInstanceWarmup() {
    this._estimatedInstanceWarmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedInstanceWarmupInput() {
    return this._estimatedInstanceWarmup;
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

  // metric_aggregation_type - computed: true, optional: true, required: false
  private _metricAggregationType?: string; 
  public get metricAggregationType() {
    return this.getStringAttribute('metric_aggregation_type');
  }
  public set metricAggregationType(value: string) {
    this._metricAggregationType = value;
  }
  public resetMetricAggregationType() {
    this._metricAggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricAggregationTypeInput() {
    return this._metricAggregationType;
  }

  // min_adjustment_magnitude - computed: false, optional: true, required: false
  private _minAdjustmentMagnitude?: number; 
  public get minAdjustmentMagnitude() {
    return this.getNumberAttribute('min_adjustment_magnitude');
  }
  public set minAdjustmentMagnitude(value: number) {
    this._minAdjustmentMagnitude = value;
  }
  public resetMinAdjustmentMagnitude() {
    this._minAdjustmentMagnitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAdjustmentMagnitudeInput() {
    return this._minAdjustmentMagnitude;
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

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // scaling_adjustment - computed: false, optional: true, required: false
  private _scalingAdjustment?: number; 
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }
  public set scalingAdjustment(value: number) {
    this._scalingAdjustment = value;
  }
  public resetScalingAdjustment() {
    this._scalingAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingAdjustmentInput() {
    return this._scalingAdjustment;
  }

  // step_adjustment - computed: false, optional: true, required: false
  private _stepAdjustment = new AutoscalingPolicyStepAdjustmentList(this, "step_adjustment", true);
  public get stepAdjustment() {
    return this._stepAdjustment;
  }
  public putStepAdjustment(value: AutoscalingPolicyStepAdjustment[] | cdktf.IResolvable) {
    this._stepAdjustment.internalValue = value;
  }
  public resetStepAdjustment() {
    this._stepAdjustment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepAdjustmentInput() {
    return this._stepAdjustment.internalValue;
  }

  // target_tracking_configuration - computed: false, optional: true, required: false
  private _targetTrackingConfiguration = new AutoscalingPolicyTargetTrackingConfigurationOutputReference(this, "target_tracking_configuration");
  public get targetTrackingConfiguration() {
    return this._targetTrackingConfiguration;
  }
  public putTargetTrackingConfiguration(value: AutoscalingPolicyTargetTrackingConfiguration) {
    this._targetTrackingConfiguration.internalValue = value;
  }
  public resetTargetTrackingConfiguration() {
    this._targetTrackingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingConfigurationInput() {
    return this._targetTrackingConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjustment_type: cdktf.stringToTerraform(this._adjustmentType),
      autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
      cooldown: cdktf.numberToTerraform(this._cooldown),
      estimated_instance_warmup: cdktf.numberToTerraform(this._estimatedInstanceWarmup),
      id: cdktf.stringToTerraform(this._id),
      metric_aggregation_type: cdktf.stringToTerraform(this._metricAggregationType),
      min_adjustment_magnitude: cdktf.numberToTerraform(this._minAdjustmentMagnitude),
      name: cdktf.stringToTerraform(this._name),
      policy_type: cdktf.stringToTerraform(this._policyType),
      scaling_adjustment: cdktf.numberToTerraform(this._scalingAdjustment),
      step_adjustment: cdktf.listMapper(autoscalingPolicyStepAdjustmentToTerraform, true)(this._stepAdjustment.internalValue),
      target_tracking_configuration: autoscalingPolicyTargetTrackingConfigurationToTerraform(this._targetTrackingConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjustment_type: {
        value: cdktf.stringToHclTerraform(this._adjustmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscaling_group_name: {
        value: cdktf.stringToHclTerraform(this._autoscalingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cooldown: {
        value: cdktf.numberToHclTerraform(this._cooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      estimated_instance_warmup: {
        value: cdktf.numberToHclTerraform(this._estimatedInstanceWarmup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_aggregation_type: {
        value: cdktf.stringToHclTerraform(this._metricAggregationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_adjustment_magnitude: {
        value: cdktf.numberToHclTerraform(this._minAdjustmentMagnitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_adjustment: {
        value: cdktf.numberToHclTerraform(this._scalingAdjustment),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      step_adjustment: {
        value: cdktf.listMapperHcl(autoscalingPolicyStepAdjustmentToHclTerraform, true)(this._stepAdjustment.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AutoscalingPolicyStepAdjustmentList",
      },
      target_tracking_configuration: {
        value: autoscalingPolicyTargetTrackingConfigurationToHclTerraform(this._targetTrackingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutoscalingPolicyTargetTrackingConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
