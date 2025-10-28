// https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHoneycombioEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Environment to fetch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/environment#id DataHoneycombioEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * detail_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/environment#detail_filter DataHoneycombioEnvironment#detail_filter}
  */
  readonly detailFilter?: DataHoneycombioEnvironmentDetailFilter[] | cdktf.IResolvable;
}
export interface DataHoneycombioEnvironmentDetailFilter {
  /**
  * The field to filter by (e.g., 'name', 'id', 'description', etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/environment#name DataHoneycombioEnvironment#name}
  */
  readonly name: string;
  /**
  * The comparison operator. The default is 'equals'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/environment#operator DataHoneycombioEnvironment#operator}
  */
  readonly operator?: string;
  /**
  * The value of the detail field to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/environment#value DataHoneycombioEnvironment#value}
  */
  readonly value?: string;
  /**
  * A regular expression string to apply to the value of the detail field to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/environment#value_regex DataHoneycombioEnvironment#value_regex}
  */
  readonly valueRegex?: string;
}

export function dataHoneycombioEnvironmentDetailFilterToTerraform(struct?: DataHoneycombioEnvironmentDetailFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
    value_regex: cdktf.stringToTerraform(struct!.valueRegex),
  }
}


export function dataHoneycombioEnvironmentDetailFilterToHclTerraform(struct?: DataHoneycombioEnvironmentDetailFilter | cdktf.IResolvable): any {
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
    value_regex: {
      value: cdktf.stringToHclTerraform(struct!.valueRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHoneycombioEnvironmentDetailFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHoneycombioEnvironmentDetailFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueRegex = this._valueRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHoneycombioEnvironmentDetailFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._value = undefined;
      this._valueRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._value = value.value;
      this._valueRegex = value.valueRegex;
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

  // operator - computed: false, optional: true, required: false
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

  // value_regex - computed: false, optional: true, required: false
  private _valueRegex?: string; 
  public get valueRegex() {
    return this.getStringAttribute('value_regex');
  }
  public set valueRegex(value: string) {
    this._valueRegex = value;
  }
  public resetValueRegex() {
    this._valueRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueRegexInput() {
    return this._valueRegex;
  }
}

export class DataHoneycombioEnvironmentDetailFilterList extends cdktf.ComplexList {
  public internalValue? : DataHoneycombioEnvironmentDetailFilter[] | cdktf.IResolvable

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
  public get(index: number): DataHoneycombioEnvironmentDetailFilterOutputReference {
    return new DataHoneycombioEnvironmentDetailFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/environment honeycombio_environment}
*/
export class DataHoneycombioEnvironment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHoneycombioEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHoneycombioEnvironment to import
  * @param importFromId The id of the existing DataHoneycombioEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHoneycombioEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/environment honeycombio_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHoneycombioEnvironmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHoneycombioEnvironmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'honeycombio_environment',
      terraformGeneratorMetadata: {
        providerName: 'honeycombio',
        providerVersion: '0.42.0'
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
    this._detailFilter.internalValue = config.detailFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // delete_protected - computed: true, optional: false, required: false
  public get deleteProtected() {
    return this.getBooleanAttribute('delete_protected');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // detail_filter - computed: false, optional: true, required: false
  private _detailFilter = new DataHoneycombioEnvironmentDetailFilterList(this, "detail_filter", false);
  public get detailFilter() {
    return this._detailFilter;
  }
  public putDetailFilter(value: DataHoneycombioEnvironmentDetailFilter[] | cdktf.IResolvable) {
    this._detailFilter.internalValue = value;
  }
  public resetDetailFilter() {
    this._detailFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailFilterInput() {
    return this._detailFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      detail_filter: cdktf.listMapper(dataHoneycombioEnvironmentDetailFilterToTerraform, true)(this._detailFilter.internalValue),
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
      detail_filter: {
        value: cdktf.listMapperHcl(dataHoneycombioEnvironmentDetailFilterToHclTerraform, true)(this._detailFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHoneycombioEnvironmentDetailFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
