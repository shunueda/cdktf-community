// https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckServicePropertyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the category the check belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#category CheckServiceProperty#category}
  */
  readonly category: string;
  /**
  * The Component Type that a custom property belongs to. When property_definition is set without component_type, the check will apply to ALL component types that have a property with that alias. To limit the check to a specific component type (e.g., only Services), explicitly set this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#component_type CheckServiceProperty#component_type}
  */
  readonly componentType?: string;
  /**
  * The date when the check will be automatically enabled.
  *  If you use this field you should add both 'enabled' and 'enable_on' to the lifecycle ignore_changes settings.
  *  See example in opslevel_check_manual for proper configuration.
  *  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#enable_on CheckServiceProperty#enable_on}
  */
  readonly enableOn?: string;
  /**
  * Whether the check is enabled or not.  Do not use this field in tandem with 'enable_on'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#enabled CheckServiceProperty#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The id of the filter of the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#filter CheckServiceProperty#filter}
  */
  readonly filter?: string;
  /**
  * The id of the level the check belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#level CheckServiceProperty#level}
  */
  readonly level: string;
  /**
  * The display name of the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#name CheckServiceProperty#name}
  */
  readonly name: string;
  /**
  * Additional information to display to the service owner about the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#notes CheckServiceProperty#notes}
  */
  readonly notes?: string;
  /**
  * The id of the team that owns the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#owner CheckServiceProperty#owner}
  */
  readonly owner?: string;
  /**
  * A condition that should be satisfied. One of `belongs_to`, `contains`, `does_not_contain`, `does_not_equal`, `does_not_exist`, `does_not_match`, `does_not_match_regex`, `ends_with`, `equals`, `exists`, `greater_than_or_equal_to`, `less_than_or_equal_to`, `matches`, `matches_regex`, `satisfies_jq_expression`, `satisfies_version_constraint`, `starts_with`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#predicate CheckServiceProperty#predicate}
  */
  readonly predicate?: CheckServicePropertyPredicate;
  /**
  * The property of the service that the check will verify. One of `custom_property`, `description`, `framework`, `language`, `lifecycle_index`, `name`, `note`, `product`, `system`, `tier_index`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#property CheckServiceProperty#property}
  */
  readonly property: string;
  /**
  * The alias of the property that the check will verify (e.g. the specific custom property). When used without component_type, targets all component types with this property alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#property_definition CheckServiceProperty#property_definition}
  */
  readonly propertyDefinition?: string;
}
export interface CheckServicePropertyPredicate {
  /**
  * A condition that should be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#type CheckServiceProperty#type}
  */
  readonly type: string;
  /**
  * The condition value used by the predicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#value CheckServiceProperty#value}
  */
  readonly value?: string;
}

export function checkServicePropertyPredicateToTerraform(struct?: CheckServicePropertyPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function checkServicePropertyPredicateToHclTerraform(struct?: CheckServicePropertyPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class CheckServicePropertyPredicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CheckServicePropertyPredicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckServicePropertyPredicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property opslevel_check_service_property}
*/
export class CheckServiceProperty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_check_service_property";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckServiceProperty resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckServiceProperty to import
  * @param importFromId The id of the existing CheckServiceProperty that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckServiceProperty to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_check_service_property", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_service_property opslevel_check_service_property} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckServicePropertyConfig
  */
  public constructor(scope: Construct, id: string, config: CheckServicePropertyConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_check_service_property',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._componentType = config.componentType;
    this._enableOn = config.enableOn;
    this._enabled = config.enabled;
    this._filter = config.filter;
    this._level = config.level;
    this._name = config.name;
    this._notes = config.notes;
    this._owner = config.owner;
    this._predicate.internalValue = config.predicate;
    this._property = config.property;
    this._propertyDefinition = config.propertyDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // component_type - computed: false, optional: true, required: false
  private _componentType?: string; 
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
  public set componentType(value: string) {
    this._componentType = value;
  }
  public resetComponentType() {
    this._componentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_on - computed: false, optional: true, required: false
  private _enableOn?: string; 
  public get enableOn() {
    return this.getStringAttribute('enable_on');
  }
  public set enableOn(value: string) {
    this._enableOn = value;
  }
  public resetEnableOn() {
    this._enableOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnInput() {
    return this._enableOn;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // predicate - computed: false, optional: true, required: false
  private _predicate = new CheckServicePropertyPredicateOutputReference(this, "predicate");
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: CheckServicePropertyPredicate) {
    this._predicate.internalValue = value;
  }
  public resetPredicate() {
    this._predicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // property_definition - computed: false, optional: true, required: false
  private _propertyDefinition?: string; 
  public get propertyDefinition() {
    return this.getStringAttribute('property_definition');
  }
  public set propertyDefinition(value: string) {
    this._propertyDefinition = value;
  }
  public resetPropertyDefinition() {
    this._propertyDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyDefinitionInput() {
    return this._propertyDefinition;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      component_type: cdktf.stringToTerraform(this._componentType),
      enable_on: cdktf.stringToTerraform(this._enableOn),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter: cdktf.stringToTerraform(this._filter),
      level: cdktf.stringToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      owner: cdktf.stringToTerraform(this._owner),
      predicate: checkServicePropertyPredicateToTerraform(this._predicate.internalValue),
      property: cdktf.stringToTerraform(this._property),
      property_definition: cdktf.stringToTerraform(this._propertyDefinition),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_type: {
        value: cdktf.stringToHclTerraform(this._componentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_on: {
        value: cdktf.stringToHclTerraform(this._enableOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predicate: {
        value: checkServicePropertyPredicateToHclTerraform(this._predicate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CheckServicePropertyPredicate",
      },
      property: {
        value: cdktf.stringToHclTerraform(this._property),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_definition: {
        value: cdktf.stringToHclTerraform(this._propertyDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
