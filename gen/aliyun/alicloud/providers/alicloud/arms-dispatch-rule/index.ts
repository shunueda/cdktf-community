// https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArmsDispatchRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#dispatch_rule_name ArmsDispatchRule#dispatch_rule_name}
  */
  readonly dispatchRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#dispatch_type ArmsDispatchRule#dispatch_type}
  */
  readonly dispatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#id ArmsDispatchRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#is_recover ArmsDispatchRule#is_recover}
  */
  readonly isRecover?: boolean | cdktf.IResolvable;
  /**
  * group_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#group_rules ArmsDispatchRule#group_rules}
  */
  readonly groupRules: ArmsDispatchRuleGroupRules[] | cdktf.IResolvable;
  /**
  * label_match_expression_grid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#label_match_expression_grid ArmsDispatchRule#label_match_expression_grid}
  */
  readonly labelMatchExpressionGrid: ArmsDispatchRuleLabelMatchExpressionGrid[] | cdktf.IResolvable;
  /**
  * notify_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#notify_rules ArmsDispatchRule#notify_rules}
  */
  readonly notifyRules: ArmsDispatchRuleNotifyRules[] | cdktf.IResolvable;
  /**
  * notify_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#notify_template ArmsDispatchRule#notify_template}
  */
  readonly notifyTemplate?: ArmsDispatchRuleNotifyTemplate[] | cdktf.IResolvable;
}
export interface ArmsDispatchRuleGroupRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#group_interval ArmsDispatchRule#group_interval}
  */
  readonly groupInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#group_wait_time ArmsDispatchRule#group_wait_time}
  */
  readonly groupWaitTime: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#grouping_fields ArmsDispatchRule#grouping_fields}
  */
  readonly groupingFields: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#repeat_interval ArmsDispatchRule#repeat_interval}
  */
  readonly repeatInterval?: number;
}

export function armsDispatchRuleGroupRulesToTerraform(struct?: ArmsDispatchRuleGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_interval: cdktf.numberToTerraform(struct!.groupInterval),
    group_wait_time: cdktf.numberToTerraform(struct!.groupWaitTime),
    grouping_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupingFields),
    repeat_interval: cdktf.numberToTerraform(struct!.repeatInterval),
  }
}


export function armsDispatchRuleGroupRulesToHclTerraform(struct?: ArmsDispatchRuleGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_interval: {
      value: cdktf.numberToHclTerraform(struct!.groupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_wait_time: {
      value: cdktf.numberToHclTerraform(struct!.groupWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grouping_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupingFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repeat_interval: {
      value: cdktf.numberToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsDispatchRuleGroupRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArmsDispatchRuleGroupRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInterval = this._groupInterval;
    }
    if (this._groupWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWaitTime = this._groupWaitTime;
    }
    if (this._groupingFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupingFields = this._groupingFields;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsDispatchRuleGroupRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupInterval = undefined;
      this._groupWaitTime = undefined;
      this._groupingFields = undefined;
      this._repeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupInterval = value.groupInterval;
      this._groupWaitTime = value.groupWaitTime;
      this._groupingFields = value.groupingFields;
      this._repeatInterval = value.repeatInterval;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_interval - computed: false, optional: false, required: true
  private _groupInterval?: number; 
  public get groupInterval() {
    return this.getNumberAttribute('group_interval');
  }
  public set groupInterval(value: number) {
    this._groupInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIntervalInput() {
    return this._groupInterval;
  }

  // group_wait_time - computed: false, optional: false, required: true
  private _groupWaitTime?: number; 
  public get groupWaitTime() {
    return this.getNumberAttribute('group_wait_time');
  }
  public set groupWaitTime(value: number) {
    this._groupWaitTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWaitTimeInput() {
    return this._groupWaitTime;
  }

  // grouping_fields - computed: false, optional: false, required: true
  private _groupingFields?: string[]; 
  public get groupingFields() {
    return this.getListAttribute('grouping_fields');
  }
  public set groupingFields(value: string[]) {
    this._groupingFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingFieldsInput() {
    return this._groupingFields;
  }

  // repeat_interval - computed: true, optional: true, required: false
  private _repeatInterval?: number; 
  public get repeatInterval() {
    return this.getNumberAttribute('repeat_interval');
  }
  public set repeatInterval(value: number) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }
}

export class ArmsDispatchRuleGroupRulesList extends cdktf.ComplexList {
  public internalValue? : ArmsDispatchRuleGroupRules[] | cdktf.IResolvable

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
  public get(index: number): ArmsDispatchRuleGroupRulesOutputReference {
    return new ArmsDispatchRuleGroupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#key ArmsDispatchRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#operator ArmsDispatchRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#value ArmsDispatchRule#value}
  */
  readonly value: string;
}

export function armsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsToTerraform(struct?: ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function armsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsToHclTerraform(struct?: ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsOutputReference {
    return new ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups {
  /**
  * label_match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#label_match_expressions ArmsDispatchRule#label_match_expressions}
  */
  readonly labelMatchExpressions: ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[] | cdktf.IResolvable;
}

export function armsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsToTerraform(struct?: ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_match_expressions: cdktf.listMapper(armsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsToTerraform, true)(struct!.labelMatchExpressions),
  }
}


export function armsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsToHclTerraform(struct?: ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_match_expressions: {
      value: cdktf.listMapperHcl(armsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsToHclTerraform, true)(struct!.labelMatchExpressions),
      isBlock: true,
      type: "set",
      storageClassType: "ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelMatchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatchExpressions = this._labelMatchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelMatchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelMatchExpressions.internalValue = value.labelMatchExpressions;
    }
  }

  // label_match_expressions - computed: false, optional: false, required: true
  private _labelMatchExpressions = new ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsList(this, "label_match_expressions", true);
  public get labelMatchExpressions() {
    return this._labelMatchExpressions;
  }
  public putLabelMatchExpressions(value: ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[] | cdktf.IResolvable) {
    this._labelMatchExpressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchExpressionsInput() {
    return this._labelMatchExpressions.internalValue;
  }
}

export class ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsList extends cdktf.ComplexList {
  public internalValue? : ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups[] | cdktf.IResolvable

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
  public get(index: number): ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsOutputReference {
    return new ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArmsDispatchRuleLabelMatchExpressionGrid {
  /**
  * label_match_expression_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#label_match_expression_groups ArmsDispatchRule#label_match_expression_groups}
  */
  readonly labelMatchExpressionGroups: ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups[] | cdktf.IResolvable;
}

export function armsDispatchRuleLabelMatchExpressionGridToTerraform(struct?: ArmsDispatchRuleLabelMatchExpressionGrid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_match_expression_groups: cdktf.listMapper(armsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsToTerraform, true)(struct!.labelMatchExpressionGroups),
  }
}


export function armsDispatchRuleLabelMatchExpressionGridToHclTerraform(struct?: ArmsDispatchRuleLabelMatchExpressionGrid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_match_expression_groups: {
      value: cdktf.listMapperHcl(armsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsToHclTerraform, true)(struct!.labelMatchExpressionGroups),
      isBlock: true,
      type: "set",
      storageClassType: "ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsDispatchRuleLabelMatchExpressionGridOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArmsDispatchRuleLabelMatchExpressionGrid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelMatchExpressionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatchExpressionGroups = this._labelMatchExpressionGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsDispatchRuleLabelMatchExpressionGrid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelMatchExpressionGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelMatchExpressionGroups.internalValue = value.labelMatchExpressionGroups;
    }
  }

  // label_match_expression_groups - computed: false, optional: false, required: true
  private _labelMatchExpressionGroups = new ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsList(this, "label_match_expression_groups", true);
  public get labelMatchExpressionGroups() {
    return this._labelMatchExpressionGroups;
  }
  public putLabelMatchExpressionGroups(value: ArmsDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups[] | cdktf.IResolvable) {
    this._labelMatchExpressionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchExpressionGroupsInput() {
    return this._labelMatchExpressionGroups.internalValue;
  }
}

export class ArmsDispatchRuleLabelMatchExpressionGridList extends cdktf.ComplexList {
  public internalValue? : ArmsDispatchRuleLabelMatchExpressionGrid[] | cdktf.IResolvable

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
  public get(index: number): ArmsDispatchRuleLabelMatchExpressionGridOutputReference {
    return new ArmsDispatchRuleLabelMatchExpressionGridOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArmsDispatchRuleNotifyRulesNotifyObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#name ArmsDispatchRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#notify_object_id ArmsDispatchRule#notify_object_id}
  */
  readonly notifyObjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#notify_type ArmsDispatchRule#notify_type}
  */
  readonly notifyType: string;
}

export function armsDispatchRuleNotifyRulesNotifyObjectsToTerraform(struct?: ArmsDispatchRuleNotifyRulesNotifyObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    notify_object_id: cdktf.stringToTerraform(struct!.notifyObjectId),
    notify_type: cdktf.stringToTerraform(struct!.notifyType),
  }
}


export function armsDispatchRuleNotifyRulesNotifyObjectsToHclTerraform(struct?: ArmsDispatchRuleNotifyRulesNotifyObjects | cdktf.IResolvable): any {
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
    notify_object_id: {
      value: cdktf.stringToHclTerraform(struct!.notifyObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_type: {
      value: cdktf.stringToHclTerraform(struct!.notifyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsDispatchRuleNotifyRulesNotifyObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArmsDispatchRuleNotifyRulesNotifyObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifyObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyObjectId = this._notifyObjectId;
    }
    if (this._notifyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyType = this._notifyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsDispatchRuleNotifyRulesNotifyObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._notifyObjectId = undefined;
      this._notifyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._notifyObjectId = value.notifyObjectId;
      this._notifyType = value.notifyType;
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

  // notify_object_id - computed: false, optional: false, required: true
  private _notifyObjectId?: string; 
  public get notifyObjectId() {
    return this.getStringAttribute('notify_object_id');
  }
  public set notifyObjectId(value: string) {
    this._notifyObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyObjectIdInput() {
    return this._notifyObjectId;
  }

  // notify_type - computed: false, optional: false, required: true
  private _notifyType?: string; 
  public get notifyType() {
    return this.getStringAttribute('notify_type');
  }
  public set notifyType(value: string) {
    this._notifyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyTypeInput() {
    return this._notifyType;
  }
}

export class ArmsDispatchRuleNotifyRulesNotifyObjectsList extends cdktf.ComplexList {
  public internalValue? : ArmsDispatchRuleNotifyRulesNotifyObjects[] | cdktf.IResolvable

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
  public get(index: number): ArmsDispatchRuleNotifyRulesNotifyObjectsOutputReference {
    return new ArmsDispatchRuleNotifyRulesNotifyObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArmsDispatchRuleNotifyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#notify_channels ArmsDispatchRule#notify_channels}
  */
  readonly notifyChannels: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#notify_end_time ArmsDispatchRule#notify_end_time}
  */
  readonly notifyEndTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#notify_start_time ArmsDispatchRule#notify_start_time}
  */
  readonly notifyStartTime: string;
  /**
  * notify_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#notify_objects ArmsDispatchRule#notify_objects}
  */
  readonly notifyObjects: ArmsDispatchRuleNotifyRulesNotifyObjects[] | cdktf.IResolvable;
}

export function armsDispatchRuleNotifyRulesToTerraform(struct?: ArmsDispatchRuleNotifyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifyChannels),
    notify_end_time: cdktf.stringToTerraform(struct!.notifyEndTime),
    notify_start_time: cdktf.stringToTerraform(struct!.notifyStartTime),
    notify_objects: cdktf.listMapper(armsDispatchRuleNotifyRulesNotifyObjectsToTerraform, true)(struct!.notifyObjects),
  }
}


export function armsDispatchRuleNotifyRulesToHclTerraform(struct?: ArmsDispatchRuleNotifyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notify_channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifyChannels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    notify_end_time: {
      value: cdktf.stringToHclTerraform(struct!.notifyEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_start_time: {
      value: cdktf.stringToHclTerraform(struct!.notifyStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_objects: {
      value: cdktf.listMapperHcl(armsDispatchRuleNotifyRulesNotifyObjectsToHclTerraform, true)(struct!.notifyObjects),
      isBlock: true,
      type: "set",
      storageClassType: "ArmsDispatchRuleNotifyRulesNotifyObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsDispatchRuleNotifyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArmsDispatchRuleNotifyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifyChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyChannels = this._notifyChannels;
    }
    if (this._notifyEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyEndTime = this._notifyEndTime;
    }
    if (this._notifyStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyStartTime = this._notifyStartTime;
    }
    if (this._notifyObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyObjects = this._notifyObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsDispatchRuleNotifyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notifyChannels = undefined;
      this._notifyEndTime = undefined;
      this._notifyStartTime = undefined;
      this._notifyObjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notifyChannels = value.notifyChannels;
      this._notifyEndTime = value.notifyEndTime;
      this._notifyStartTime = value.notifyStartTime;
      this._notifyObjects.internalValue = value.notifyObjects;
    }
  }

  // notify_channels - computed: false, optional: false, required: true
  private _notifyChannels?: string[]; 
  public get notifyChannels() {
    return this.getListAttribute('notify_channels');
  }
  public set notifyChannels(value: string[]) {
    this._notifyChannels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyChannelsInput() {
    return this._notifyChannels;
  }

  // notify_end_time - computed: false, optional: false, required: true
  private _notifyEndTime?: string; 
  public get notifyEndTime() {
    return this.getStringAttribute('notify_end_time');
  }
  public set notifyEndTime(value: string) {
    this._notifyEndTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEndTimeInput() {
    return this._notifyEndTime;
  }

  // notify_start_time - computed: false, optional: false, required: true
  private _notifyStartTime?: string; 
  public get notifyStartTime() {
    return this.getStringAttribute('notify_start_time');
  }
  public set notifyStartTime(value: string) {
    this._notifyStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyStartTimeInput() {
    return this._notifyStartTime;
  }

  // notify_objects - computed: false, optional: false, required: true
  private _notifyObjects = new ArmsDispatchRuleNotifyRulesNotifyObjectsList(this, "notify_objects", true);
  public get notifyObjects() {
    return this._notifyObjects;
  }
  public putNotifyObjects(value: ArmsDispatchRuleNotifyRulesNotifyObjects[] | cdktf.IResolvable) {
    this._notifyObjects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyObjectsInput() {
    return this._notifyObjects.internalValue;
  }
}

export class ArmsDispatchRuleNotifyRulesList extends cdktf.ComplexList {
  public internalValue? : ArmsDispatchRuleNotifyRules[] | cdktf.IResolvable

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
  public get(index: number): ArmsDispatchRuleNotifyRulesOutputReference {
    return new ArmsDispatchRuleNotifyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArmsDispatchRuleNotifyTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#email_content ArmsDispatchRule#email_content}
  */
  readonly emailContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#email_recover_content ArmsDispatchRule#email_recover_content}
  */
  readonly emailRecoverContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#email_recover_title ArmsDispatchRule#email_recover_title}
  */
  readonly emailRecoverTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#email_title ArmsDispatchRule#email_title}
  */
  readonly emailTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#robot_content ArmsDispatchRule#robot_content}
  */
  readonly robotContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#sms_content ArmsDispatchRule#sms_content}
  */
  readonly smsContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#sms_recover_content ArmsDispatchRule#sms_recover_content}
  */
  readonly smsRecoverContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#tts_content ArmsDispatchRule#tts_content}
  */
  readonly ttsContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#tts_recover_content ArmsDispatchRule#tts_recover_content}
  */
  readonly ttsRecoverContent: string;
}

export function armsDispatchRuleNotifyTemplateToTerraform(struct?: ArmsDispatchRuleNotifyTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_content: cdktf.stringToTerraform(struct!.emailContent),
    email_recover_content: cdktf.stringToTerraform(struct!.emailRecoverContent),
    email_recover_title: cdktf.stringToTerraform(struct!.emailRecoverTitle),
    email_title: cdktf.stringToTerraform(struct!.emailTitle),
    robot_content: cdktf.stringToTerraform(struct!.robotContent),
    sms_content: cdktf.stringToTerraform(struct!.smsContent),
    sms_recover_content: cdktf.stringToTerraform(struct!.smsRecoverContent),
    tts_content: cdktf.stringToTerraform(struct!.ttsContent),
    tts_recover_content: cdktf.stringToTerraform(struct!.ttsRecoverContent),
  }
}


export function armsDispatchRuleNotifyTemplateToHclTerraform(struct?: ArmsDispatchRuleNotifyTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_content: {
      value: cdktf.stringToHclTerraform(struct!.emailContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_recover_content: {
      value: cdktf.stringToHclTerraform(struct!.emailRecoverContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_recover_title: {
      value: cdktf.stringToHclTerraform(struct!.emailRecoverTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_title: {
      value: cdktf.stringToHclTerraform(struct!.emailTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    robot_content: {
      value: cdktf.stringToHclTerraform(struct!.robotContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_content: {
      value: cdktf.stringToHclTerraform(struct!.smsContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_recover_content: {
      value: cdktf.stringToHclTerraform(struct!.smsRecoverContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tts_content: {
      value: cdktf.stringToHclTerraform(struct!.ttsContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tts_recover_content: {
      value: cdktf.stringToHclTerraform(struct!.ttsRecoverContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsDispatchRuleNotifyTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArmsDispatchRuleNotifyTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailContent = this._emailContent;
    }
    if (this._emailRecoverContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailRecoverContent = this._emailRecoverContent;
    }
    if (this._emailRecoverTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailRecoverTitle = this._emailRecoverTitle;
    }
    if (this._emailTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailTitle = this._emailTitle;
    }
    if (this._robotContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.robotContent = this._robotContent;
    }
    if (this._smsContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsContent = this._smsContent;
    }
    if (this._smsRecoverContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsRecoverContent = this._smsRecoverContent;
    }
    if (this._ttsContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttsContent = this._ttsContent;
    }
    if (this._ttsRecoverContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttsRecoverContent = this._ttsRecoverContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsDispatchRuleNotifyTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailContent = undefined;
      this._emailRecoverContent = undefined;
      this._emailRecoverTitle = undefined;
      this._emailTitle = undefined;
      this._robotContent = undefined;
      this._smsContent = undefined;
      this._smsRecoverContent = undefined;
      this._ttsContent = undefined;
      this._ttsRecoverContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailContent = value.emailContent;
      this._emailRecoverContent = value.emailRecoverContent;
      this._emailRecoverTitle = value.emailRecoverTitle;
      this._emailTitle = value.emailTitle;
      this._robotContent = value.robotContent;
      this._smsContent = value.smsContent;
      this._smsRecoverContent = value.smsRecoverContent;
      this._ttsContent = value.ttsContent;
      this._ttsRecoverContent = value.ttsRecoverContent;
    }
  }

  // email_content - computed: false, optional: false, required: true
  private _emailContent?: string; 
  public get emailContent() {
    return this.getStringAttribute('email_content');
  }
  public set emailContent(value: string) {
    this._emailContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailContentInput() {
    return this._emailContent;
  }

  // email_recover_content - computed: false, optional: false, required: true
  private _emailRecoverContent?: string; 
  public get emailRecoverContent() {
    return this.getStringAttribute('email_recover_content');
  }
  public set emailRecoverContent(value: string) {
    this._emailRecoverContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailRecoverContentInput() {
    return this._emailRecoverContent;
  }

  // email_recover_title - computed: false, optional: false, required: true
  private _emailRecoverTitle?: string; 
  public get emailRecoverTitle() {
    return this.getStringAttribute('email_recover_title');
  }
  public set emailRecoverTitle(value: string) {
    this._emailRecoverTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailRecoverTitleInput() {
    return this._emailRecoverTitle;
  }

  // email_title - computed: false, optional: false, required: true
  private _emailTitle?: string; 
  public get emailTitle() {
    return this.getStringAttribute('email_title');
  }
  public set emailTitle(value: string) {
    this._emailTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTitleInput() {
    return this._emailTitle;
  }

  // robot_content - computed: false, optional: false, required: true
  private _robotContent?: string; 
  public get robotContent() {
    return this.getStringAttribute('robot_content');
  }
  public set robotContent(value: string) {
    this._robotContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get robotContentInput() {
    return this._robotContent;
  }

  // sms_content - computed: false, optional: false, required: true
  private _smsContent?: string; 
  public get smsContent() {
    return this.getStringAttribute('sms_content');
  }
  public set smsContent(value: string) {
    this._smsContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsContentInput() {
    return this._smsContent;
  }

  // sms_recover_content - computed: false, optional: false, required: true
  private _smsRecoverContent?: string; 
  public get smsRecoverContent() {
    return this.getStringAttribute('sms_recover_content');
  }
  public set smsRecoverContent(value: string) {
    this._smsRecoverContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsRecoverContentInput() {
    return this._smsRecoverContent;
  }

  // tts_content - computed: false, optional: false, required: true
  private _ttsContent?: string; 
  public get ttsContent() {
    return this.getStringAttribute('tts_content');
  }
  public set ttsContent(value: string) {
    this._ttsContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttsContentInput() {
    return this._ttsContent;
  }

  // tts_recover_content - computed: false, optional: false, required: true
  private _ttsRecoverContent?: string; 
  public get ttsRecoverContent() {
    return this.getStringAttribute('tts_recover_content');
  }
  public set ttsRecoverContent(value: string) {
    this._ttsRecoverContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttsRecoverContentInput() {
    return this._ttsRecoverContent;
  }
}

export class ArmsDispatchRuleNotifyTemplateList extends cdktf.ComplexList {
  public internalValue? : ArmsDispatchRuleNotifyTemplate[] | cdktf.IResolvable

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
  public get(index: number): ArmsDispatchRuleNotifyTemplateOutputReference {
    return new ArmsDispatchRuleNotifyTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule alicloud_arms_dispatch_rule}
*/
export class ArmsDispatchRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_arms_dispatch_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArmsDispatchRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArmsDispatchRule to import
  * @param importFromId The id of the existing ArmsDispatchRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArmsDispatchRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_arms_dispatch_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/arms_dispatch_rule alicloud_arms_dispatch_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArmsDispatchRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ArmsDispatchRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_arms_dispatch_rule',
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
    this._dispatchRuleName = config.dispatchRuleName;
    this._dispatchType = config.dispatchType;
    this._id = config.id;
    this._isRecover = config.isRecover;
    this._groupRules.internalValue = config.groupRules;
    this._labelMatchExpressionGrid.internalValue = config.labelMatchExpressionGrid;
    this._notifyRules.internalValue = config.notifyRules;
    this._notifyTemplate.internalValue = config.notifyTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dispatch_rule_name - computed: false, optional: false, required: true
  private _dispatchRuleName?: string; 
  public get dispatchRuleName() {
    return this.getStringAttribute('dispatch_rule_name');
  }
  public set dispatchRuleName(value: string) {
    this._dispatchRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchRuleNameInput() {
    return this._dispatchRuleName;
  }

  // dispatch_type - computed: false, optional: true, required: false
  private _dispatchType?: string; 
  public get dispatchType() {
    return this.getStringAttribute('dispatch_type');
  }
  public set dispatchType(value: string) {
    this._dispatchType = value;
  }
  public resetDispatchType() {
    this._dispatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchTypeInput() {
    return this._dispatchType;
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

  // is_recover - computed: false, optional: true, required: false
  private _isRecover?: boolean | cdktf.IResolvable; 
  public get isRecover() {
    return this.getBooleanAttribute('is_recover');
  }
  public set isRecover(value: boolean | cdktf.IResolvable) {
    this._isRecover = value;
  }
  public resetIsRecover() {
    this._isRecover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecoverInput() {
    return this._isRecover;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // group_rules - computed: false, optional: false, required: true
  private _groupRules = new ArmsDispatchRuleGroupRulesList(this, "group_rules", true);
  public get groupRules() {
    return this._groupRules;
  }
  public putGroupRules(value: ArmsDispatchRuleGroupRules[] | cdktf.IResolvable) {
    this._groupRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRulesInput() {
    return this._groupRules.internalValue;
  }

  // label_match_expression_grid - computed: false, optional: false, required: true
  private _labelMatchExpressionGrid = new ArmsDispatchRuleLabelMatchExpressionGridList(this, "label_match_expression_grid", true);
  public get labelMatchExpressionGrid() {
    return this._labelMatchExpressionGrid;
  }
  public putLabelMatchExpressionGrid(value: ArmsDispatchRuleLabelMatchExpressionGrid[] | cdktf.IResolvable) {
    this._labelMatchExpressionGrid.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchExpressionGridInput() {
    return this._labelMatchExpressionGrid.internalValue;
  }

  // notify_rules - computed: false, optional: false, required: true
  private _notifyRules = new ArmsDispatchRuleNotifyRulesList(this, "notify_rules", true);
  public get notifyRules() {
    return this._notifyRules;
  }
  public putNotifyRules(value: ArmsDispatchRuleNotifyRules[] | cdktf.IResolvable) {
    this._notifyRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyRulesInput() {
    return this._notifyRules.internalValue;
  }

  // notify_template - computed: false, optional: true, required: false
  private _notifyTemplate = new ArmsDispatchRuleNotifyTemplateList(this, "notify_template", true);
  public get notifyTemplate() {
    return this._notifyTemplate;
  }
  public putNotifyTemplate(value: ArmsDispatchRuleNotifyTemplate[] | cdktf.IResolvable) {
    this._notifyTemplate.internalValue = value;
  }
  public resetNotifyTemplate() {
    this._notifyTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyTemplateInput() {
    return this._notifyTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dispatch_rule_name: cdktf.stringToTerraform(this._dispatchRuleName),
      dispatch_type: cdktf.stringToTerraform(this._dispatchType),
      id: cdktf.stringToTerraform(this._id),
      is_recover: cdktf.booleanToTerraform(this._isRecover),
      group_rules: cdktf.listMapper(armsDispatchRuleGroupRulesToTerraform, true)(this._groupRules.internalValue),
      label_match_expression_grid: cdktf.listMapper(armsDispatchRuleLabelMatchExpressionGridToTerraform, true)(this._labelMatchExpressionGrid.internalValue),
      notify_rules: cdktf.listMapper(armsDispatchRuleNotifyRulesToTerraform, true)(this._notifyRules.internalValue),
      notify_template: cdktf.listMapper(armsDispatchRuleNotifyTemplateToTerraform, true)(this._notifyTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dispatch_rule_name: {
        value: cdktf.stringToHclTerraform(this._dispatchRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dispatch_type: {
        value: cdktf.stringToHclTerraform(this._dispatchType),
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
      is_recover: {
        value: cdktf.booleanToHclTerraform(this._isRecover),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_rules: {
        value: cdktf.listMapperHcl(armsDispatchRuleGroupRulesToHclTerraform, true)(this._groupRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ArmsDispatchRuleGroupRulesList",
      },
      label_match_expression_grid: {
        value: cdktf.listMapperHcl(armsDispatchRuleLabelMatchExpressionGridToHclTerraform, true)(this._labelMatchExpressionGrid.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ArmsDispatchRuleLabelMatchExpressionGridList",
      },
      notify_rules: {
        value: cdktf.listMapperHcl(armsDispatchRuleNotifyRulesToHclTerraform, true)(this._notifyRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ArmsDispatchRuleNotifyRulesList",
      },
      notify_template: {
        value: cdktf.listMapperHcl(armsDispatchRuleNotifyTemplateToHclTerraform, true)(this._notifyTemplate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ArmsDispatchRuleNotifyTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
