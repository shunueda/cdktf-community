// https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CanaryConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of the application which the canary config belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#applications CanaryConfig#applications}
  */
  readonly applications: string[];
  /**
  * Description for the canary config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#description CanaryConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#id CanaryConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the canary configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#name CanaryConfig#name}
  */
  readonly name: string;
  /**
  * classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#classifier CanaryConfig#classifier}
  */
  readonly classifier: CanaryConfigClassifier;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#metric CanaryConfig#metric}
  */
  readonly metric: CanaryConfigMetric[] | cdktf.IResolvable;
}
export interface CanaryConfigClassifier {
  /**
  * Weight for each groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#group_weights CanaryConfig#group_weights}
  */
  readonly groupWeights: { [key: string]: string };
}

export function canaryConfigClassifierToTerraform(struct?: CanaryConfigClassifierOutputReference | CanaryConfigClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_weights: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.groupWeights),
  }
}


export function canaryConfigClassifierToHclTerraform(struct?: CanaryConfigClassifierOutputReference | CanaryConfigClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_weights: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.groupWeights),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CanaryConfigClassifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CanaryConfigClassifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWeights = this._groupWeights;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CanaryConfigClassifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupWeights = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupWeights = value.groupWeights;
    }
  }

  // group_weights - computed: false, optional: false, required: true
  private _groupWeights?: { [key: string]: string }; 
  public get groupWeights() {
    return this.getStringMapAttribute('group_weights');
  }
  public set groupWeights(value: { [key: string]: string }) {
    this._groupWeights = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWeightsInput() {
    return this._groupWeights;
  }
}
export interface CanaryConfigMetricAnalysisConfigurationsCanaryEffectSize {
  /**
  * The multiplier decrease that must be met for the metric to fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#allowed_decrease CanaryConfig#allowed_decrease}
  */
  readonly allowedDecrease?: number;
  /**
  * The multiplier increase that must be met for the metric to fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#allowed_increase CanaryConfig#allowed_increase}
  */
  readonly allowedIncrease?: number;
  /**
  * The multiplier decrease that must be met for the metric to be a critical failure and fail the entire analysis with a score of 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#critical_decrease CanaryConfig#critical_decrease}
  */
  readonly criticalDecrease?: number;
  /**
  * The multiplier increase that must be met for the metric to be a critical failure and fail the entire analysis with a score of 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#critical_increase CanaryConfig#critical_increase}
  */
  readonly criticalIncrease?: number;
}

export function canaryConfigMetricAnalysisConfigurationsCanaryEffectSizeToTerraform(struct?: CanaryConfigMetricAnalysisConfigurationsCanaryEffectSizeOutputReference | CanaryConfigMetricAnalysisConfigurationsCanaryEffectSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_decrease: cdktf.numberToTerraform(struct!.allowedDecrease),
    allowed_increase: cdktf.numberToTerraform(struct!.allowedIncrease),
    critical_decrease: cdktf.numberToTerraform(struct!.criticalDecrease),
    critical_increase: cdktf.numberToTerraform(struct!.criticalIncrease),
  }
}


export function canaryConfigMetricAnalysisConfigurationsCanaryEffectSizeToHclTerraform(struct?: CanaryConfigMetricAnalysisConfigurationsCanaryEffectSizeOutputReference | CanaryConfigMetricAnalysisConfigurationsCanaryEffectSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_decrease: {
      value: cdktf.numberToHclTerraform(struct!.allowedDecrease),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowed_increase: {
      value: cdktf.numberToHclTerraform(struct!.allowedIncrease),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    critical_decrease: {
      value: cdktf.numberToHclTerraform(struct!.criticalDecrease),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    critical_increase: {
      value: cdktf.numberToHclTerraform(struct!.criticalIncrease),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CanaryConfigMetricAnalysisConfigurationsCanaryEffectSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CanaryConfigMetricAnalysisConfigurationsCanaryEffectSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedDecrease !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDecrease = this._allowedDecrease;
    }
    if (this._allowedIncrease !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIncrease = this._allowedIncrease;
    }
    if (this._criticalDecrease !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalDecrease = this._criticalDecrease;
    }
    if (this._criticalIncrease !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalIncrease = this._criticalIncrease;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CanaryConfigMetricAnalysisConfigurationsCanaryEffectSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedDecrease = undefined;
      this._allowedIncrease = undefined;
      this._criticalDecrease = undefined;
      this._criticalIncrease = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedDecrease = value.allowedDecrease;
      this._allowedIncrease = value.allowedIncrease;
      this._criticalDecrease = value.criticalDecrease;
      this._criticalIncrease = value.criticalIncrease;
    }
  }

  // allowed_decrease - computed: false, optional: true, required: false
  private _allowedDecrease?: number; 
  public get allowedDecrease() {
    return this.getNumberAttribute('allowed_decrease');
  }
  public set allowedDecrease(value: number) {
    this._allowedDecrease = value;
  }
  public resetAllowedDecrease() {
    this._allowedDecrease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDecreaseInput() {
    return this._allowedDecrease;
  }

  // allowed_increase - computed: false, optional: true, required: false
  private _allowedIncrease?: number; 
  public get allowedIncrease() {
    return this.getNumberAttribute('allowed_increase');
  }
  public set allowedIncrease(value: number) {
    this._allowedIncrease = value;
  }
  public resetAllowedIncrease() {
    this._allowedIncrease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIncreaseInput() {
    return this._allowedIncrease;
  }

  // critical_decrease - computed: false, optional: true, required: false
  private _criticalDecrease?: number; 
  public get criticalDecrease() {
    return this.getNumberAttribute('critical_decrease');
  }
  public set criticalDecrease(value: number) {
    this._criticalDecrease = value;
  }
  public resetCriticalDecrease() {
    this._criticalDecrease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalDecreaseInput() {
    return this._criticalDecrease;
  }

  // critical_increase - computed: false, optional: true, required: false
  private _criticalIncrease?: number; 
  public get criticalIncrease() {
    return this.getNumberAttribute('critical_increase');
  }
  public set criticalIncrease(value: number) {
    this._criticalIncrease = value;
  }
  public resetCriticalIncrease() {
    this._criticalIncrease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalIncreaseInput() {
    return this._criticalIncrease;
  }
}
export interface CanaryConfigMetricAnalysisConfigurationsCanaryOutliers {
  /**
  * The degree of significance a data point has to differ from other observations to be considered an outlier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#outlier_factor CanaryConfig#outlier_factor}
  */
  readonly outlierFactor?: number;
  /**
  * Remove or keep outliers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#strategy CanaryConfig#strategy}
  */
  readonly strategy?: string;
}

export function canaryConfigMetricAnalysisConfigurationsCanaryOutliersToTerraform(struct?: CanaryConfigMetricAnalysisConfigurationsCanaryOutliersOutputReference | CanaryConfigMetricAnalysisConfigurationsCanaryOutliers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outlier_factor: cdktf.numberToTerraform(struct!.outlierFactor),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function canaryConfigMetricAnalysisConfigurationsCanaryOutliersToHclTerraform(struct?: CanaryConfigMetricAnalysisConfigurationsCanaryOutliersOutputReference | CanaryConfigMetricAnalysisConfigurationsCanaryOutliers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    outlier_factor: {
      value: cdktf.numberToHclTerraform(struct!.outlierFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CanaryConfigMetricAnalysisConfigurationsCanaryOutliersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CanaryConfigMetricAnalysisConfigurationsCanaryOutliers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outlierFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierFactor = this._outlierFactor;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CanaryConfigMetricAnalysisConfigurationsCanaryOutliers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outlierFactor = undefined;
      this._strategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outlierFactor = value.outlierFactor;
      this._strategy = value.strategy;
    }
  }

  // outlier_factor - computed: false, optional: true, required: false
  private _outlierFactor?: number; 
  public get outlierFactor() {
    return this.getNumberAttribute('outlier_factor');
  }
  public set outlierFactor(value: number) {
    this._outlierFactor = value;
  }
  public resetOutlierFactor() {
    this._outlierFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierFactorInput() {
    return this._outlierFactor;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface CanaryConfigMetricAnalysisConfigurationsCanary {
  /**
  * Fails on this metrics error or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#critical CanaryConfig#critical}
  */
  readonly critical?: boolean | cdktf.IResolvable;
  /**
  * Direction on how to judge the failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#direction CanaryConfig#direction}
  */
  readonly direction?: string;
  /**
  * Used to fail a metric if data is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#must_have_data CanaryConfig#must_have_data}
  */
  readonly mustHaveData?: boolean | cdktf.IResolvable;
  /**
  *  How to handle NaN values which can occur if the metric does not return data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#nan_strategy CanaryConfig#nan_strategy}
  */
  readonly nanStrategy?: string;
  /**
  * effect_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#effect_size CanaryConfig#effect_size}
  */
  readonly effectSize?: CanaryConfigMetricAnalysisConfigurationsCanaryEffectSize;
  /**
  * outliers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#outliers CanaryConfig#outliers}
  */
  readonly outliers?: CanaryConfigMetricAnalysisConfigurationsCanaryOutliers;
}

export function canaryConfigMetricAnalysisConfigurationsCanaryToTerraform(struct?: CanaryConfigMetricAnalysisConfigurationsCanaryOutputReference | CanaryConfigMetricAnalysisConfigurationsCanary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    direction: cdktf.stringToTerraform(struct!.direction),
    must_have_data: cdktf.booleanToTerraform(struct!.mustHaveData),
    nan_strategy: cdktf.stringToTerraform(struct!.nanStrategy),
    effect_size: canaryConfigMetricAnalysisConfigurationsCanaryEffectSizeToTerraform(struct!.effectSize),
    outliers: canaryConfigMetricAnalysisConfigurationsCanaryOutliersToTerraform(struct!.outliers),
  }
}


export function canaryConfigMetricAnalysisConfigurationsCanaryToHclTerraform(struct?: CanaryConfigMetricAnalysisConfigurationsCanaryOutputReference | CanaryConfigMetricAnalysisConfigurationsCanary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    must_have_data: {
      value: cdktf.booleanToHclTerraform(struct!.mustHaveData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nan_strategy: {
      value: cdktf.stringToHclTerraform(struct!.nanStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect_size: {
      value: canaryConfigMetricAnalysisConfigurationsCanaryEffectSizeToHclTerraform(struct!.effectSize),
      isBlock: true,
      type: "list",
      storageClassType: "CanaryConfigMetricAnalysisConfigurationsCanaryEffectSizeList",
    },
    outliers: {
      value: canaryConfigMetricAnalysisConfigurationsCanaryOutliersToHclTerraform(struct!.outliers),
      isBlock: true,
      type: "list",
      storageClassType: "CanaryConfigMetricAnalysisConfigurationsCanaryOutliersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CanaryConfigMetricAnalysisConfigurationsCanaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CanaryConfigMetricAnalysisConfigurationsCanary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._mustHaveData !== undefined) {
      hasAnyValues = true;
      internalValueResult.mustHaveData = this._mustHaveData;
    }
    if (this._nanStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanStrategy = this._nanStrategy;
    }
    if (this._effectSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectSize = this._effectSize?.internalValue;
    }
    if (this._outliers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outliers = this._outliers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CanaryConfigMetricAnalysisConfigurationsCanary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._direction = undefined;
      this._mustHaveData = undefined;
      this._nanStrategy = undefined;
      this._effectSize.internalValue = undefined;
      this._outliers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._direction = value.direction;
      this._mustHaveData = value.mustHaveData;
      this._nanStrategy = value.nanStrategy;
      this._effectSize.internalValue = value.effectSize;
      this._outliers.internalValue = value.outliers;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: boolean | cdktf.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktf.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // must_have_data - computed: false, optional: true, required: false
  private _mustHaveData?: boolean | cdktf.IResolvable; 
  public get mustHaveData() {
    return this.getBooleanAttribute('must_have_data');
  }
  public set mustHaveData(value: boolean | cdktf.IResolvable) {
    this._mustHaveData = value;
  }
  public resetMustHaveData() {
    this._mustHaveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustHaveDataInput() {
    return this._mustHaveData;
  }

  // nan_strategy - computed: false, optional: true, required: false
  private _nanStrategy?: string; 
  public get nanStrategy() {
    return this.getStringAttribute('nan_strategy');
  }
  public set nanStrategy(value: string) {
    this._nanStrategy = value;
  }
  public resetNanStrategy() {
    this._nanStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanStrategyInput() {
    return this._nanStrategy;
  }

  // effect_size - computed: false, optional: true, required: false
  private _effectSize = new CanaryConfigMetricAnalysisConfigurationsCanaryEffectSizeOutputReference(this, "effect_size");
  public get effectSize() {
    return this._effectSize;
  }
  public putEffectSize(value: CanaryConfigMetricAnalysisConfigurationsCanaryEffectSize) {
    this._effectSize.internalValue = value;
  }
  public resetEffectSize() {
    this._effectSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectSizeInput() {
    return this._effectSize.internalValue;
  }

  // outliers - computed: false, optional: true, required: false
  private _outliers = new CanaryConfigMetricAnalysisConfigurationsCanaryOutliersOutputReference(this, "outliers");
  public get outliers() {
    return this._outliers;
  }
  public putOutliers(value: CanaryConfigMetricAnalysisConfigurationsCanaryOutliers) {
    this._outliers.internalValue = value;
  }
  public resetOutliers() {
    this._outliers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outliersInput() {
    return this._outliers.internalValue;
  }
}
export interface CanaryConfigMetricAnalysisConfigurations {
  /**
  * canary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#canary CanaryConfig#canary}
  */
  readonly canary: CanaryConfigMetricAnalysisConfigurationsCanary;
}

export function canaryConfigMetricAnalysisConfigurationsToTerraform(struct?: CanaryConfigMetricAnalysisConfigurationsOutputReference | CanaryConfigMetricAnalysisConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canary: canaryConfigMetricAnalysisConfigurationsCanaryToTerraform(struct!.canary),
  }
}


export function canaryConfigMetricAnalysisConfigurationsToHclTerraform(struct?: CanaryConfigMetricAnalysisConfigurationsOutputReference | CanaryConfigMetricAnalysisConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canary: {
      value: canaryConfigMetricAnalysisConfigurationsCanaryToHclTerraform(struct!.canary),
      isBlock: true,
      type: "list",
      storageClassType: "CanaryConfigMetricAnalysisConfigurationsCanaryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CanaryConfigMetricAnalysisConfigurationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CanaryConfigMetricAnalysisConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canary = this._canary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CanaryConfigMetricAnalysisConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canary.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canary.internalValue = value.canary;
    }
  }

  // canary - computed: false, optional: false, required: true
  private _canary = new CanaryConfigMetricAnalysisConfigurationsCanaryOutputReference(this, "canary");
  public get canary() {
    return this._canary;
  }
  public putCanary(value: CanaryConfigMetricAnalysisConfigurationsCanary) {
    this._canary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryInput() {
    return this._canary.internalValue;
  }
}
export interface CanaryConfigMetricQuery {
  /**
  *  Algorithm to group multiple time series together
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#cross_series_reducer CanaryConfig#cross_series_reducer}
  */
  readonly crossSeriesReducer?: string;
  /**
  * Group by resource or metric labels to reduce the number of time series
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#group_by_fields CanaryConfig#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * Type of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#metric_type CanaryConfig#metric_type}
  */
  readonly metricType: string;
  /**
  * Algorithm to align individual time series
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#per_series_aligner CanaryConfig#per_series_aligner}
  */
  readonly perSeriesAligner?: string;
  /**
  * Type of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#resource_type CanaryConfig#resource_type}
  */
  readonly resourceType: string;
  /**
  * Type of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#service_type CanaryConfig#service_type}
  */
  readonly serviceType: string;
  /**
  * Type of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#type CanaryConfig#type}
  */
  readonly type: string;
}

export function canaryConfigMetricQueryToTerraform(struct?: CanaryConfigMetricQueryOutputReference | CanaryConfigMetricQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_series_reducer: cdktf.stringToTerraform(struct!.crossSeriesReducer),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByFields),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    per_series_aligner: cdktf.stringToTerraform(struct!.perSeriesAligner),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function canaryConfigMetricQueryToHclTerraform(struct?: CanaryConfigMetricQueryOutputReference | CanaryConfigMetricQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_series_reducer: {
      value: cdktf.stringToHclTerraform(struct!.crossSeriesReducer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_series_aligner: {
      value: cdktf.stringToHclTerraform(struct!.perSeriesAligner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CanaryConfigMetricQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CanaryConfigMetricQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossSeriesReducer !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossSeriesReducer = this._crossSeriesReducer;
    }
    if (this._groupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._perSeriesAligner !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSeriesAligner = this._perSeriesAligner;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CanaryConfigMetricQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossSeriesReducer = undefined;
      this._groupByFields = undefined;
      this._metricType = undefined;
      this._perSeriesAligner = undefined;
      this._resourceType = undefined;
      this._serviceType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossSeriesReducer = value.crossSeriesReducer;
      this._groupByFields = value.groupByFields;
      this._metricType = value.metricType;
      this._perSeriesAligner = value.perSeriesAligner;
      this._resourceType = value.resourceType;
      this._serviceType = value.serviceType;
      this._type = value.type;
    }
  }

  // cross_series_reducer - computed: false, optional: true, required: false
  private _crossSeriesReducer?: string; 
  public get crossSeriesReducer() {
    return this.getStringAttribute('cross_series_reducer');
  }
  public set crossSeriesReducer(value: string) {
    this._crossSeriesReducer = value;
  }
  public resetCrossSeriesReducer() {
    this._crossSeriesReducer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSeriesReducerInput() {
    return this._crossSeriesReducer;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // per_series_aligner - computed: false, optional: true, required: false
  private _perSeriesAligner?: string; 
  public get perSeriesAligner() {
    return this.getStringAttribute('per_series_aligner');
  }
  public set perSeriesAligner(value: string) {
    this._perSeriesAligner = value;
  }
  public resetPerSeriesAligner() {
    this._perSeriesAligner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSeriesAlignerInput() {
    return this._perSeriesAligner;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CanaryConfigMetric {
  /**
  * List of the group which this query belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#groups CanaryConfig#groups}
  */
  readonly groups: string[];
  /**
  * Human readable name of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#name CanaryConfig#name}
  */
  readonly name: string;
  /**
  * analysis_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#analysis_configurations CanaryConfig#analysis_configurations}
  */
  readonly analysisConfigurations?: CanaryConfigMetricAnalysisConfigurations;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#query CanaryConfig#query}
  */
  readonly query: CanaryConfigMetricQuery;
}

export function canaryConfigMetricToTerraform(struct?: CanaryConfigMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    name: cdktf.stringToTerraform(struct!.name),
    analysis_configurations: canaryConfigMetricAnalysisConfigurationsToTerraform(struct!.analysisConfigurations),
    query: canaryConfigMetricQueryToTerraform(struct!.query),
  }
}


export function canaryConfigMetricToHclTerraform(struct?: CanaryConfigMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis_configurations: {
      value: canaryConfigMetricAnalysisConfigurationsToHclTerraform(struct!.analysisConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "CanaryConfigMetricAnalysisConfigurationsList",
    },
    query: {
      value: canaryConfigMetricQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "CanaryConfigMetricQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CanaryConfigMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CanaryConfigMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._analysisConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisConfigurations = this._analysisConfigurations?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CanaryConfigMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._name = undefined;
      this._analysisConfigurations.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups = value.groups;
      this._name = value.name;
      this._analysisConfigurations.internalValue = value.analysisConfigurations;
      this._query.internalValue = value.query;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // analysis_configurations - computed: false, optional: true, required: false
  private _analysisConfigurations = new CanaryConfigMetricAnalysisConfigurationsOutputReference(this, "analysis_configurations");
  public get analysisConfigurations() {
    return this._analysisConfigurations;
  }
  public putAnalysisConfigurations(value: CanaryConfigMetricAnalysisConfigurations) {
    this._analysisConfigurations.internalValue = value;
  }
  public resetAnalysisConfigurations() {
    this._analysisConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisConfigurationsInput() {
    return this._analysisConfigurations.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new CanaryConfigMetricQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: CanaryConfigMetricQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class CanaryConfigMetricList extends cdktf.ComplexList {
  public internalValue? : CanaryConfigMetric[] | cdktf.IResolvable

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
  public get(index: number): CanaryConfigMetricOutputReference {
    return new CanaryConfigMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config spinnaker_canary_config}
*/
export class CanaryConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spinnaker_canary_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CanaryConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CanaryConfig to import
  * @param importFromId The id of the existing CanaryConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CanaryConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spinnaker_canary_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/canary_config spinnaker_canary_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CanaryConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CanaryConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'spinnaker_canary_config',
      terraformGeneratorMetadata: {
        providerName: 'spinnaker',
        providerVersion: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applications = config.applications;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._classifier.internalValue = config.classifier;
    this._metric.internalValue = config.metric;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications - computed: false, optional: false, required: true
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
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

  // classifier - computed: false, optional: false, required: true
  private _classifier = new CanaryConfigClassifierOutputReference(this, "classifier");
  public get classifier() {
    return this._classifier;
  }
  public putClassifier(value: CanaryConfigClassifier) {
    this._classifier.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierInput() {
    return this._classifier.internalValue;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new CanaryConfigMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: CanaryConfigMetric[] | cdktf.IResolvable) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      classifier: canaryConfigClassifierToTerraform(this._classifier.internalValue),
      metric: cdktf.listMapper(canaryConfigMetricToTerraform, true)(this._metric.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      classifier: {
        value: canaryConfigClassifierToHclTerraform(this._classifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CanaryConfigClassifierList",
      },
      metric: {
        value: cdktf.listMapperHcl(canaryConfigMetricToHclTerraform, true)(this._metric.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CanaryConfigMetricList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
