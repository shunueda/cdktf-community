// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlmLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#description DlmLifecyclePolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#execution_role_arn DlmLifecyclePolicy#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#id DlmLifecyclePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#state DlmLifecyclePolicy#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#tags DlmLifecyclePolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * policy_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#policy_details DlmLifecyclePolicy#policy_details}
  */
  readonly policyDetails: DlmLifecyclePolicyPolicyDetails;
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCreateRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#times DlmLifecyclePolicy#times}
  */
  readonly times?: string[];
}

export function dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCreateRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_unit: cdktf.stringToTerraform(struct!.intervalUnit),
    times: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.times),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCreateRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktf.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    times: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.times),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCreateRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._intervalUnit = undefined;
      this._times = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
      this._times = value.times;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }

  // times - computed: true, optional: true, required: false
  private _times?: string[]; 
  public get times() {
    return this.getListAttribute('times');
  }
  public set times(value: string[]) {
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
export interface DlmLifecyclePolicyPolicyDetailsScheduleRetainRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
  */
  readonly count: number;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleRetainRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleRetainRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleRetainRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#tags_to_add DlmLifecyclePolicy#tags_to_add}
  */
  readonly tagsToAdd?: { [key: string]: string };
  /**
  * create_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#create_rule DlmLifecyclePolicy#create_rule}
  */
  readonly createRule: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule;
  /**
  * retain_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
  */
  readonly retainRule: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_tags: cdktf.booleanToTerraform(struct!.copyTags),
    name: cdktf.stringToTerraform(struct!.name),
    tags_to_add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tagsToAdd),
    create_rule: dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform(struct!.createRule),
    retain_rule: dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform(struct!.retainRule),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_tags: {
      value: cdktf.booleanToHclTerraform(struct!.copyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags_to_add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tagsToAdd),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    create_rule: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToHclTerraform(struct!.createRule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleList",
    },
    retain_rule: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToHclTerraform(struct!.retainRule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTags = this._copyTags;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tagsToAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagsToAdd = this._tagsToAdd;
    }
    if (this._createRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createRule = this._createRule?.internalValue;
    }
    if (this._retainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRule = this._retainRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyTags = undefined;
      this._name = undefined;
      this._tagsToAdd = undefined;
      this._createRule.internalValue = undefined;
      this._retainRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyTags = value.copyTags;
      this._name = value.name;
      this._tagsToAdd = value.tagsToAdd;
      this._createRule.internalValue = value.createRule;
      this._retainRule.internalValue = value.retainRule;
    }
  }

  // copy_tags - computed: true, optional: true, required: false
  private _copyTags?: boolean | cdktf.IResolvable; 
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }
  public set copyTags(value: boolean | cdktf.IResolvable) {
    this._copyTags = value;
  }
  public resetCopyTags() {
    this._copyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsInput() {
    return this._copyTags;
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

  // tags_to_add - computed: false, optional: true, required: false
  private _tagsToAdd?: { [key: string]: string }; 
  public get tagsToAdd() {
    return this.getStringMapAttribute('tags_to_add');
  }
  public set tagsToAdd(value: { [key: string]: string }) {
    this._tagsToAdd = value;
  }
  public resetTagsToAdd() {
    this._tagsToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsToAddInput() {
    return this._tagsToAdd;
  }

  // create_rule - computed: false, optional: false, required: true
  private _createRule = new DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference(this, "create_rule");
  public get createRule() {
    return this._createRule;
  }
  public putCreateRule(value: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule) {
    this._createRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createRuleInput() {
    return this._createRule.internalValue;
  }

  // retain_rule - computed: false, optional: false, required: true
  private _retainRule = new DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
  public putRetainRule(value: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule) {
    this._retainRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRuleInput() {
    return this._retainRule.internalValue;
  }
}

export class DlmLifecyclePolicyPolicyDetailsScheduleList extends cdktf.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsSchedule[] | cdktf.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsScheduleOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#resource_types DlmLifecyclePolicy#resource_types}
  */
  readonly resourceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#target_tags DlmLifecyclePolicy#target_tags}
  */
  readonly targetTags: { [key: string]: string };
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#schedule DlmLifecyclePolicy#schedule}
  */
  readonly schedule: DlmLifecyclePolicyPolicyDetailsSchedule[] | cdktf.IResolvable;
}

export function dlmLifecyclePolicyPolicyDetailsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsOutputReference | DlmLifecyclePolicyPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
    target_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.targetTags),
    schedule: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsScheduleToTerraform, true)(struct!.schedule),
  }
}


export function dlmLifecyclePolicyPolicyDetailsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsOutputReference | DlmLifecyclePolicyPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.targetTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    schedule: {
      value: cdktf.listMapperHcl(dlmLifecyclePolicyPolicyDetailsScheduleToHclTerraform, true)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._targetTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTags = this._targetTags;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceTypes = undefined;
      this._targetTags = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceTypes = value.resourceTypes;
      this._targetTags = value.targetTags;
      this._schedule.internalValue = value.schedule;
    }
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // target_tags - computed: false, optional: false, required: true
  private _targetTags?: { [key: string]: string }; 
  public get targetTags() {
    return this.getStringMapAttribute('target_tags');
  }
  public set targetTags(value: { [key: string]: string }) {
    this._targetTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTagsInput() {
    return this._targetTags;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new DlmLifecyclePolicyPolicyDetailsScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DlmLifecyclePolicyPolicyDetailsSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy aws_dlm_lifecycle_policy}
*/
export class DlmLifecyclePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dlm_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlmLifecyclePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlmLifecyclePolicy to import
  * @param importFromId The id of the existing DlmLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlmLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dlm_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dlm_lifecycle_policy aws_dlm_lifecycle_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlmLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DlmLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dlm_lifecycle_policy',
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
    this._description = config.description;
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
    this._state = config.state;
    this._tags = config.tags;
    this._policyDetails.internalValue = config.policyDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // policy_details - computed: false, optional: false, required: true
  private _policyDetails = new DlmLifecyclePolicyPolicyDetailsOutputReference(this, "policy_details");
  public get policyDetails() {
    return this._policyDetails;
  }
  public putPolicyDetails(value: DlmLifecyclePolicyPolicyDetails) {
    this._policyDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDetailsInput() {
    return this._policyDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      policy_details: dlmLifecyclePolicyPolicyDetailsToTerraform(this._policyDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._executionRoleArn),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
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
      policy_details: {
        value: dlmLifecyclePolicyPolicyDetailsToHclTerraform(this._policyDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlmLifecyclePolicyPolicyDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
