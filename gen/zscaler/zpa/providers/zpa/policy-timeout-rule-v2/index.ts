// https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyTimeoutRuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  *   This is for providing the rule action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#action PolicyTimeoutRuleV2#action}
  */
  readonly action?: string;
  /**
  * This is for providing a customer message for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#custom_msg PolicyTimeoutRuleV2#custom_msg}
  */
  readonly customMsg?: string;
  /**
  * This is the description of the access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#description PolicyTimeoutRuleV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#microtenant_id PolicyTimeoutRuleV2#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * This is the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#name PolicyTimeoutRuleV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#reauth_idle_timeout PolicyTimeoutRuleV2#reauth_idle_timeout}
  */
  readonly reauthIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#reauth_timeout PolicyTimeoutRuleV2#reauth_timeout}
  */
  readonly reauthTimeout?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#conditions PolicyTimeoutRuleV2#conditions}
  */
  readonly conditions?: PolicyTimeoutRuleV2Conditions[] | cdktf.IResolvable;
}
export interface PolicyTimeoutRuleV2ConditionsOperandsEntryValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#lhs PolicyTimeoutRuleV2#lhs}
  */
  readonly lhs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#rhs PolicyTimeoutRuleV2#rhs}
  */
  readonly rhs?: string;
}

export function policyTimeoutRuleV2ConditionsOperandsEntryValuesToTerraform(struct?: PolicyTimeoutRuleV2ConditionsOperandsEntryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lhs: cdktf.stringToTerraform(struct!.lhs),
    rhs: cdktf.stringToTerraform(struct!.rhs),
  }
}


export function policyTimeoutRuleV2ConditionsOperandsEntryValuesToHclTerraform(struct?: PolicyTimeoutRuleV2ConditionsOperandsEntryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lhs: {
      value: cdktf.stringToHclTerraform(struct!.lhs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rhs: {
      value: cdktf.stringToHclTerraform(struct!.rhs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTimeoutRuleV2ConditionsOperandsEntryValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTimeoutRuleV2ConditionsOperandsEntryValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lhs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lhs = this._lhs;
    }
    if (this._rhs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rhs = this._rhs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTimeoutRuleV2ConditionsOperandsEntryValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lhs = undefined;
      this._rhs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lhs = value.lhs;
      this._rhs = value.rhs;
    }
  }

  // lhs - computed: false, optional: true, required: false
  private _lhs?: string; 
  public get lhs() {
    return this.getStringAttribute('lhs');
  }
  public set lhs(value: string) {
    this._lhs = value;
  }
  public resetLhs() {
    this._lhs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lhsInput() {
    return this._lhs;
  }

  // rhs - computed: false, optional: true, required: false
  private _rhs?: string; 
  public get rhs() {
    return this.getStringAttribute('rhs');
  }
  public set rhs(value: string) {
    this._rhs = value;
  }
  public resetRhs() {
    this._rhs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rhsInput() {
    return this._rhs;
  }
}

export class PolicyTimeoutRuleV2ConditionsOperandsEntryValuesList extends cdktf.ComplexList {
  public internalValue? : PolicyTimeoutRuleV2ConditionsOperandsEntryValues[] | cdktf.IResolvable

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
  public get(index: number): PolicyTimeoutRuleV2ConditionsOperandsEntryValuesOutputReference {
    return new PolicyTimeoutRuleV2ConditionsOperandsEntryValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTimeoutRuleV2ConditionsOperands {
  /**
  *   This is for specifying the policy critiera.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#object_type PolicyTimeoutRuleV2#object_type}
  */
  readonly objectType?: string;
  /**
  * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#values PolicyTimeoutRuleV2#values}
  */
  readonly values?: string[];
  /**
  * entry_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#entry_values PolicyTimeoutRuleV2#entry_values}
  */
  readonly entryValues?: PolicyTimeoutRuleV2ConditionsOperandsEntryValues[] | cdktf.IResolvable;
}

export function policyTimeoutRuleV2ConditionsOperandsToTerraform(struct?: PolicyTimeoutRuleV2ConditionsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_type: cdktf.stringToTerraform(struct!.objectType),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    entry_values: cdktf.listMapper(policyTimeoutRuleV2ConditionsOperandsEntryValuesToTerraform, true)(struct!.entryValues),
  }
}


export function policyTimeoutRuleV2ConditionsOperandsToHclTerraform(struct?: PolicyTimeoutRuleV2ConditionsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    entry_values: {
      value: cdktf.listMapperHcl(policyTimeoutRuleV2ConditionsOperandsEntryValuesToHclTerraform, true)(struct!.entryValues),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyTimeoutRuleV2ConditionsOperandsEntryValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTimeoutRuleV2ConditionsOperandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTimeoutRuleV2ConditionsOperands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._entryValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryValues = this._entryValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTimeoutRuleV2ConditionsOperands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectType = undefined;
      this._values = undefined;
      this._entryValues.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectType = value.objectType;
      this._values = value.values;
      this._entryValues.internalValue = value.entryValues;
    }
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // entry_values - computed: false, optional: true, required: false
  private _entryValues = new PolicyTimeoutRuleV2ConditionsOperandsEntryValuesList(this, "entry_values", true);
  public get entryValues() {
    return this._entryValues;
  }
  public putEntryValues(value: PolicyTimeoutRuleV2ConditionsOperandsEntryValues[] | cdktf.IResolvable) {
    this._entryValues.internalValue = value;
  }
  public resetEntryValues() {
    this._entryValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryValuesInput() {
    return this._entryValues.internalValue;
  }
}

export class PolicyTimeoutRuleV2ConditionsOperandsList extends cdktf.ComplexList {
  public internalValue? : PolicyTimeoutRuleV2ConditionsOperands[] | cdktf.IResolvable

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
  public get(index: number): PolicyTimeoutRuleV2ConditionsOperandsOutputReference {
    return new PolicyTimeoutRuleV2ConditionsOperandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTimeoutRuleV2Conditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#operator PolicyTimeoutRuleV2#operator}
  */
  readonly operator?: string;
  /**
  * operands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#operands PolicyTimeoutRuleV2#operands}
  */
  readonly operands?: PolicyTimeoutRuleV2ConditionsOperands[] | cdktf.IResolvable;
}

export function policyTimeoutRuleV2ConditionsToTerraform(struct?: PolicyTimeoutRuleV2Conditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    operands: cdktf.listMapper(policyTimeoutRuleV2ConditionsOperandsToTerraform, true)(struct!.operands),
  }
}


export function policyTimeoutRuleV2ConditionsToHclTerraform(struct?: PolicyTimeoutRuleV2Conditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operands: {
      value: cdktf.listMapperHcl(policyTimeoutRuleV2ConditionsOperandsToHclTerraform, true)(struct!.operands),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyTimeoutRuleV2ConditionsOperandsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTimeoutRuleV2ConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTimeoutRuleV2Conditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._operands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operands = this._operands?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTimeoutRuleV2Conditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._operands.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._operands.internalValue = value.operands;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // operands - computed: false, optional: true, required: false
  private _operands = new PolicyTimeoutRuleV2ConditionsOperandsList(this, "operands", true);
  public get operands() {
    return this._operands;
  }
  public putOperands(value: PolicyTimeoutRuleV2ConditionsOperands[] | cdktf.IResolvable) {
    this._operands.internalValue = value;
  }
  public resetOperands() {
    this._operands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandsInput() {
    return this._operands.internalValue;
  }
}

export class PolicyTimeoutRuleV2ConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyTimeoutRuleV2Conditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyTimeoutRuleV2ConditionsOutputReference {
    return new PolicyTimeoutRuleV2ConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2 zpa_policy_timeout_rule_v2}
*/
export class PolicyTimeoutRuleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_policy_timeout_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyTimeoutRuleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyTimeoutRuleV2 to import
  * @param importFromId The id of the existing PolicyTimeoutRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyTimeoutRuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_policy_timeout_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/policy_timeout_rule_v2 zpa_policy_timeout_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyTimeoutRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: PolicyTimeoutRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'zpa_policy_timeout_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._customMsg = config.customMsg;
    this._description = config.description;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._reauthIdleTimeout = config.reauthIdleTimeout;
    this._reauthTimeout = config.reauthTimeout;
    this._conditions.internalValue = config.conditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // custom_msg - computed: false, optional: true, required: false
  private _customMsg?: string; 
  public get customMsg() {
    return this.getStringAttribute('custom_msg');
  }
  public set customMsg(value: string) {
    this._customMsg = value;
  }
  public resetCustomMsg() {
    this._customMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMsgInput() {
    return this._customMsg;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // microtenant_id - computed: true, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // policy_set_id - computed: true, optional: false, required: false
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }

  // reauth_idle_timeout - computed: false, optional: true, required: false
  private _reauthIdleTimeout?: string; 
  public get reauthIdleTimeout() {
    return this.getStringAttribute('reauth_idle_timeout');
  }
  public set reauthIdleTimeout(value: string) {
    this._reauthIdleTimeout = value;
  }
  public resetReauthIdleTimeout() {
    this._reauthIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthIdleTimeoutInput() {
    return this._reauthIdleTimeout;
  }

  // reauth_timeout - computed: false, optional: true, required: false
  private _reauthTimeout?: string; 
  public get reauthTimeout() {
    return this.getStringAttribute('reauth_timeout');
  }
  public set reauthTimeout(value: string) {
    this._reauthTimeout = value;
  }
  public resetReauthTimeout() {
    this._reauthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthTimeoutInput() {
    return this._reauthTimeout;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new PolicyTimeoutRuleV2ConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: PolicyTimeoutRuleV2Conditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      custom_msg: cdktf.stringToTerraform(this._customMsg),
      description: cdktf.stringToTerraform(this._description),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      reauth_idle_timeout: cdktf.stringToTerraform(this._reauthIdleTimeout),
      reauth_timeout: cdktf.stringToTerraform(this._reauthTimeout),
      conditions: cdktf.listMapper(policyTimeoutRuleV2ConditionsToTerraform, true)(this._conditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_msg: {
        value: cdktf.stringToHclTerraform(this._customMsg),
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
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
      reauth_idle_timeout: {
        value: cdktf.stringToHclTerraform(this._reauthIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reauth_timeout: {
        value: cdktf.stringToHclTerraform(this._reauthTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktf.listMapperHcl(policyTimeoutRuleV2ConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyTimeoutRuleV2ConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
