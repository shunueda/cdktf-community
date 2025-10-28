// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/device_admin_authentication_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIseDeviceAdminAuthenticationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/device_admin_authentication_rule#id DataIseDeviceAdminAuthenticationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule name, [Valid characters are alphanumerics, underscore, hyphen, space, period, parentheses]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/device_admin_authentication_rule#name DataIseDeviceAdminAuthenticationRule#name}
  */
  readonly name?: string;
  /**
  * Policy set ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/device_admin_authentication_rule#policy_set_id DataIseDeviceAdminAuthenticationRule#policy_set_id}
  */
  readonly policySetId: string;
}
export interface DataIseDeviceAdminAuthenticationRuleChildrenChildren {
}

export function dataIseDeviceAdminAuthenticationRuleChildrenChildrenToTerraform(struct?: DataIseDeviceAdminAuthenticationRuleChildrenChildren): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIseDeviceAdminAuthenticationRuleChildrenChildrenToHclTerraform(struct?: DataIseDeviceAdminAuthenticationRuleChildrenChildren): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIseDeviceAdminAuthenticationRuleChildrenChildrenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIseDeviceAdminAuthenticationRuleChildrenChildren | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIseDeviceAdminAuthenticationRuleChildrenChildren | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // dictionary_name - computed: true, optional: false, required: false
  public get dictionaryName() {
    return this.getStringAttribute('dictionary_name');
  }

  // dictionary_value - computed: true, optional: false, required: false
  public get dictionaryValue() {
    return this.getStringAttribute('dictionary_value');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_negate - computed: true, optional: false, required: false
  public get isNegate() {
    return this.getBooleanAttribute('is_negate');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}

export class DataIseDeviceAdminAuthenticationRuleChildrenChildrenList extends cdktf.ComplexList {

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
  public get(index: number): DataIseDeviceAdminAuthenticationRuleChildrenChildrenOutputReference {
    return new DataIseDeviceAdminAuthenticationRuleChildrenChildrenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIseDeviceAdminAuthenticationRuleChildren {
}

export function dataIseDeviceAdminAuthenticationRuleChildrenToTerraform(struct?: DataIseDeviceAdminAuthenticationRuleChildren): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIseDeviceAdminAuthenticationRuleChildrenToHclTerraform(struct?: DataIseDeviceAdminAuthenticationRuleChildren): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIseDeviceAdminAuthenticationRuleChildrenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIseDeviceAdminAuthenticationRuleChildren | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIseDeviceAdminAuthenticationRuleChildren | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }

  // children - computed: true, optional: false, required: false
  private _children = new DataIseDeviceAdminAuthenticationRuleChildrenChildrenList(this, "children", true);
  public get children() {
    return this._children;
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // dictionary_name - computed: true, optional: false, required: false
  public get dictionaryName() {
    return this.getStringAttribute('dictionary_name');
  }

  // dictionary_value - computed: true, optional: false, required: false
  public get dictionaryValue() {
    return this.getStringAttribute('dictionary_value');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_negate - computed: true, optional: false, required: false
  public get isNegate() {
    return this.getBooleanAttribute('is_negate');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}

export class DataIseDeviceAdminAuthenticationRuleChildrenList extends cdktf.ComplexList {

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
  public get(index: number): DataIseDeviceAdminAuthenticationRuleChildrenOutputReference {
    return new DataIseDeviceAdminAuthenticationRuleChildrenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/device_admin_authentication_rule ise_device_admin_authentication_rule}
*/
export class DataIseDeviceAdminAuthenticationRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_device_admin_authentication_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIseDeviceAdminAuthenticationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIseDeviceAdminAuthenticationRule to import
  * @param importFromId The id of the existing DataIseDeviceAdminAuthenticationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/device_admin_authentication_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIseDeviceAdminAuthenticationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_device_admin_authentication_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/device_admin_authentication_rule ise_device_admin_authentication_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIseDeviceAdminAuthenticationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataIseDeviceAdminAuthenticationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_device_admin_authentication_rule',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.11'
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
    this._name = config.name;
    this._policySetId = config.policySetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // children - computed: true, optional: false, required: false
  private _children = new DataIseDeviceAdminAuthenticationRuleChildrenList(this, "children", true);
  public get children() {
    return this._children;
  }

  // condition_attribute_name - computed: true, optional: false, required: false
  public get conditionAttributeName() {
    return this.getStringAttribute('condition_attribute_name');
  }

  // condition_attribute_value - computed: true, optional: false, required: false
  public get conditionAttributeValue() {
    return this.getStringAttribute('condition_attribute_value');
  }

  // condition_dictionary_name - computed: true, optional: false, required: false
  public get conditionDictionaryName() {
    return this.getStringAttribute('condition_dictionary_name');
  }

  // condition_dictionary_value - computed: true, optional: false, required: false
  public get conditionDictionaryValue() {
    return this.getStringAttribute('condition_dictionary_value');
  }

  // condition_id - computed: true, optional: false, required: false
  public get conditionId() {
    return this.getStringAttribute('condition_id');
  }

  // condition_is_negate - computed: true, optional: false, required: false
  public get conditionIsNegate() {
    return this.getBooleanAttribute('condition_is_negate');
  }

  // condition_operator - computed: true, optional: false, required: false
  public get conditionOperator() {
    return this.getStringAttribute('condition_operator');
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // identity_source_name - computed: true, optional: false, required: false
  public get identitySourceName() {
    return this.getStringAttribute('identity_source_name');
  }

  // if_auth_fail - computed: true, optional: false, required: false
  public get ifAuthFail() {
    return this.getStringAttribute('if_auth_fail');
  }

  // if_process_fail - computed: true, optional: false, required: false
  public get ifProcessFail() {
    return this.getStringAttribute('if_process_fail');
  }

  // if_user_not_found - computed: true, optional: false, required: false
  public get ifUserNotFound() {
    return this.getStringAttribute('if_user_not_found');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policy_set_id - computed: false, optional: false, required: true
  private _policySetId?: string; 
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }
  public set policySetId(value: string) {
    this._policySetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetIdInput() {
    return this._policySetId;
  }

  // rank - computed: true, optional: false, required: false
  public get rank() {
    return this.getNumberAttribute('rank');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_set_id: cdktf.stringToTerraform(this._policySetId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_set_id: {
        value: cdktf.stringToHclTerraform(this._policySetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
