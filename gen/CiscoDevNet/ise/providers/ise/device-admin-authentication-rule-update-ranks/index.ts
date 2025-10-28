// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/resources/device_admin_authentication_rule_update_ranks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceAdminAuthenticationRuleUpdateRanksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy set ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/resources/device_admin_authentication_rule_update_ranks#policy_set_id DeviceAdminAuthenticationRuleUpdateRanks#policy_set_id}
  */
  readonly policySetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/resources/device_admin_authentication_rule_update_ranks#rules DeviceAdminAuthenticationRuleUpdateRanks#rules}
  */
  readonly rules?: DeviceAdminAuthenticationRuleUpdateRanksRules[] | cdktf.IResolvable;
}
export interface DeviceAdminAuthenticationRuleUpdateRanksRules {
  /**
  * Authentication rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/resources/device_admin_authentication_rule_update_ranks#id DeviceAdminAuthenticationRuleUpdateRanks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The rank (priority) in relation to other rules. Lower rank is higher priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/resources/device_admin_authentication_rule_update_ranks#rank DeviceAdminAuthenticationRuleUpdateRanks#rank}
  */
  readonly rank?: number;
}

export function deviceAdminAuthenticationRuleUpdateRanksRulesToTerraform(struct?: DeviceAdminAuthenticationRuleUpdateRanksRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    rank: cdktf.numberToTerraform(struct!.rank),
  }
}


export function deviceAdminAuthenticationRuleUpdateRanksRulesToHclTerraform(struct?: DeviceAdminAuthenticationRuleUpdateRanksRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rank: {
      value: cdktf.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceAdminAuthenticationRuleUpdateRanksRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceAdminAuthenticationRuleUpdateRanksRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceAdminAuthenticationRuleUpdateRanksRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._rank = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._rank = value.rank;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // rank - computed: false, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }
}

export class DeviceAdminAuthenticationRuleUpdateRanksRulesList extends cdktf.ComplexList {
  public internalValue? : DeviceAdminAuthenticationRuleUpdateRanksRules[] | cdktf.IResolvable

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
  public get(index: number): DeviceAdminAuthenticationRuleUpdateRanksRulesOutputReference {
    return new DeviceAdminAuthenticationRuleUpdateRanksRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/resources/device_admin_authentication_rule_update_ranks ise_device_admin_authentication_rule_update_ranks}
*/
export class DeviceAdminAuthenticationRuleUpdateRanks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_device_admin_authentication_rule_update_ranks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceAdminAuthenticationRuleUpdateRanks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceAdminAuthenticationRuleUpdateRanks to import
  * @param importFromId The id of the existing DeviceAdminAuthenticationRuleUpdateRanks that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/resources/device_admin_authentication_rule_update_ranks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceAdminAuthenticationRuleUpdateRanks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_device_admin_authentication_rule_update_ranks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/resources/device_admin_authentication_rule_update_ranks ise_device_admin_authentication_rule_update_ranks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceAdminAuthenticationRuleUpdateRanksConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceAdminAuthenticationRuleUpdateRanksConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_device_admin_authentication_rule_update_ranks',
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
    this._policySetId = config.policySetId;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rules - computed: false, optional: true, required: false
  private _rules = new DeviceAdminAuthenticationRuleUpdateRanksRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DeviceAdminAuthenticationRuleUpdateRanksRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_set_id: cdktf.stringToTerraform(this._policySetId),
      rules: cdktf.listMapper(deviceAdminAuthenticationRuleUpdateRanksRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_set_id: {
        value: cdktf.stringToHclTerraform(this._policySetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(deviceAdminAuthenticationRuleUpdateRanksRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceAdminAuthenticationRuleUpdateRanksRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
