// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CollectorGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector_group#auto_balance CollectorGroup#auto_balance}
  */
  readonly autoBalance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector_group#auto_balance_instance_count_threshold CollectorGroup#auto_balance_instance_count_threshold}
  */
  readonly autoBalanceInstanceCountThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector_group#auto_balance_strategy CollectorGroup#auto_balance_strategy}
  */
  readonly autoBalanceStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector_group#custom_properties CollectorGroup#custom_properties}
  */
  readonly customProperties?: CollectorGroupCustomProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector_group#description CollectorGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector_group#name CollectorGroup#name}
  */
  readonly name: string;
}
export interface CollectorGroupCustomProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector_group#name CollectorGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector_group#value CollectorGroup#value}
  */
  readonly value?: string;
}

export function collectorGroupCustomPropertiesToTerraform(struct?: CollectorGroupCustomProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorGroupCustomPropertiesToHclTerraform(struct?: CollectorGroupCustomProperties | cdktf.IResolvable): any {
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

export class CollectorGroupCustomPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorGroupCustomProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CollectorGroupCustomProperties | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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

export class CollectorGroupCustomPropertiesList extends cdktf.ComplexList {
  public internalValue? : CollectorGroupCustomProperties[] | cdktf.IResolvable

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
  public get(index: number): CollectorGroupCustomPropertiesOutputReference {
    return new CollectorGroupCustomPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorGroupHighestPriorityCollectorStatus {
}

export function collectorGroupHighestPriorityCollectorStatusToTerraform(struct?: CollectorGroupHighestPriorityCollectorStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorGroupHighestPriorityCollectorStatusToHclTerraform(struct?: CollectorGroupHighestPriorityCollectorStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorGroupHighestPriorityCollectorStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorGroupHighestPriorityCollectorStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorGroupHighestPriorityCollectorStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acked - computed: true, optional: false, required: false
  public get acked() {
    return this.getBooleanAttribute('acked');
  }

  // in_s_d_t - computed: true, optional: false, required: false
  public get inSDT() {
    return this.getBooleanAttribute('in_s_d_t');
  }

  // is_down - computed: true, optional: false, required: false
  public get isDown() {
    return this.getBooleanAttribute('is_down');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }
}

export class CollectorGroupHighestPriorityCollectorStatusList extends cdktf.ComplexList {

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
  public get(index: number): CollectorGroupHighestPriorityCollectorStatusOutputReference {
    return new CollectorGroupHighestPriorityCollectorStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector_group logicmonitor_collector_group}
*/
export class CollectorGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_collector_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CollectorGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CollectorGroup to import
  * @param importFromId The id of the existing CollectorGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CollectorGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_collector_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector_group logicmonitor_collector_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CollectorGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CollectorGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_collector_group',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoBalance = config.autoBalance;
    this._autoBalanceInstanceCountThreshold = config.autoBalanceInstanceCountThreshold;
    this._autoBalanceStrategy = config.autoBalanceStrategy;
    this._customProperties.internalValue = config.customProperties;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_balance - computed: false, optional: true, required: false
  private _autoBalance?: boolean | cdktf.IResolvable; 
  public get autoBalance() {
    return this.getBooleanAttribute('auto_balance');
  }
  public set autoBalance(value: boolean | cdktf.IResolvable) {
    this._autoBalance = value;
  }
  public resetAutoBalance() {
    this._autoBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalanceInput() {
    return this._autoBalance;
  }

  // auto_balance_instance_count_threshold - computed: false, optional: true, required: false
  private _autoBalanceInstanceCountThreshold?: number; 
  public get autoBalanceInstanceCountThreshold() {
    return this.getNumberAttribute('auto_balance_instance_count_threshold');
  }
  public set autoBalanceInstanceCountThreshold(value: number) {
    this._autoBalanceInstanceCountThreshold = value;
  }
  public resetAutoBalanceInstanceCountThreshold() {
    this._autoBalanceInstanceCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalanceInstanceCountThresholdInput() {
    return this._autoBalanceInstanceCountThreshold;
  }

  // auto_balance_strategy - computed: false, optional: true, required: false
  private _autoBalanceStrategy?: string; 
  public get autoBalanceStrategy() {
    return this.getStringAttribute('auto_balance_strategy');
  }
  public set autoBalanceStrategy(value: string) {
    this._autoBalanceStrategy = value;
  }
  public resetAutoBalanceStrategy() {
    this._autoBalanceStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalanceStrategyInput() {
    return this._autoBalanceStrategy;
  }

  // create_on - computed: true, optional: false, required: false
  public get createOn() {
    return this.getNumberAttribute('create_on');
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new CollectorGroupCustomPropertiesList(this, "custom_properties", true);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: CollectorGroupCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
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

  // highest_priority_collector_status - computed: true, optional: false, required: false
  private _highestPriorityCollectorStatus = new CollectorGroupHighestPriorityCollectorStatusList(this, "highest_priority_collector_status", false);
  public get highestPriorityCollectorStatus() {
    return this._highestPriorityCollectorStatus;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // num_of_collectors - computed: true, optional: false, required: false
  public get numOfCollectors() {
    return this.getNumberAttribute('num_of_collectors');
  }

  // user_permission - computed: true, optional: false, required: false
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_balance: cdktf.booleanToTerraform(this._autoBalance),
      auto_balance_instance_count_threshold: cdktf.numberToTerraform(this._autoBalanceInstanceCountThreshold),
      auto_balance_strategy: cdktf.stringToTerraform(this._autoBalanceStrategy),
      custom_properties: cdktf.listMapper(collectorGroupCustomPropertiesToTerraform, false)(this._customProperties.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_balance: {
        value: cdktf.booleanToHclTerraform(this._autoBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_balance_instance_count_threshold: {
        value: cdktf.numberToHclTerraform(this._autoBalanceInstanceCountThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_balance_strategy: {
        value: cdktf.stringToHclTerraform(this._autoBalanceStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_properties: {
        value: cdktf.listMapperHcl(collectorGroupCustomPropertiesToHclTerraform, false)(this._customProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CollectorGroupCustomPropertiesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
