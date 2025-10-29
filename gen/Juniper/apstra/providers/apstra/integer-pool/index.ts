// https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/integer_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegerPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Pool name displayed in the Apstra web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/integer_pool#name IntegerPool#name}
  */
  readonly name: string;
  /**
  * Ranges mark the begin/end Integers available from the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/integer_pool#ranges IntegerPool#ranges}
  */
  readonly ranges: IntegerPoolRanges[] | cdktf.IResolvable;
}
export interface IntegerPoolRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/integer_pool#first IntegerPool#first}
  */
  readonly first: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/integer_pool#last IntegerPool#last}
  */
  readonly last: number;
}

export function integerPoolRangesToTerraform(struct?: IntegerPoolRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first: cdktf.numberToTerraform(struct!.first),
    last: cdktf.numberToTerraform(struct!.last),
  }
}


export function integerPoolRangesToHclTerraform(struct?: IntegerPoolRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first: {
      value: cdktf.numberToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktf.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegerPoolRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegerPoolRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegerPoolRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._first = undefined;
      this._last = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._first = value.first;
      this._last = value.last;
    }
  }

  // first - computed: false, optional: false, required: true
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: false, optional: false, required: true
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }

  // used_percentage - computed: true, optional: false, required: false
  public get usedPercentage() {
    return this.getNumberAttribute('used_percentage');
  }
}

export class IntegerPoolRangesList extends cdktf.ComplexList {
  public internalValue? : IntegerPoolRanges[] | cdktf.IResolvable

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
  public get(index: number): IntegerPoolRangesOutputReference {
    return new IntegerPoolRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/integer_pool apstra_integer_pool}
*/
export class IntegerPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_integer_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegerPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegerPool to import
  * @param importFromId The id of the existing IntegerPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/integer_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegerPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_integer_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/integer_pool apstra_integer_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegerPoolConfig
  */
  public constructor(scope: Construct, id: string, config: IntegerPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_integer_pool',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._ranges.internalValue = config.ranges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ranges - computed: false, optional: false, required: true
  private _ranges = new IntegerPoolRangesList(this, "ranges", true);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: IntegerPoolRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }

  // used_percentage - computed: true, optional: false, required: false
  public get usedPercentage() {
    return this.getNumberAttribute('used_percentage');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      ranges: cdktf.listMapper(integerPoolRangesToTerraform, false)(this._ranges.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ranges: {
        value: cdktf.listMapperHcl(integerPoolRangesToHclTerraform, false)(this._ranges.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegerPoolRangesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
