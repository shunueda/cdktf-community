// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/vlans
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeVlansConfig extends cdktf.TerraformMetaArguments {
  /**
  * The order in which results should be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/vlans#order DataLinodeVlans#order}
  */
  readonly order?: string;
  /**
  * The attribute to order the results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/vlans#order_by DataLinodeVlans#order_by}
  */
  readonly orderBy?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/vlans#filter DataLinodeVlans#filter}
  */
  readonly filter?: DataLinodeVlansFilter[] | cdktf.IResolvable;
  /**
  * vlans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/vlans#vlans DataLinodeVlans#vlans}
  */
  readonly vlans?: DataLinodeVlansVlans[] | cdktf.IResolvable;
}
export interface DataLinodeVlansFilter {
  /**
  * The type of comparison to use for this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/vlans#match_by DataLinodeVlans#match_by}
  */
  readonly matchBy?: string;
  /**
  * The name of the attribute to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/vlans#name DataLinodeVlans#name}
  */
  readonly name: string;
  /**
  * The value(s) to be used in the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/vlans#values DataLinodeVlans#values}
  */
  readonly values: string[];
}

export function dataLinodeVlansFilterToTerraform(struct?: DataLinodeVlansFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_by: cdktf.stringToTerraform(struct!.matchBy),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataLinodeVlansFilterToHclTerraform(struct?: DataLinodeVlansFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_by: {
      value: cdktf.stringToHclTerraform(struct!.matchBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinodeVlansFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeVlansFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBy = this._matchBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeVlansFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchBy = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchBy = value.matchBy;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // match_by - computed: false, optional: true, required: false
  private _matchBy?: string; 
  public get matchBy() {
    return this.getStringAttribute('match_by');
  }
  public set matchBy(value: string) {
    this._matchBy = value;
  }
  public resetMatchBy() {
    this._matchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchByInput() {
    return this._matchBy;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataLinodeVlansFilterList extends cdktf.ComplexList {
  public internalValue? : DataLinodeVlansFilter[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeVlansFilterOutputReference {
    return new DataLinodeVlansFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeVlansVlans {
}

export function dataLinodeVlansVlansToTerraform(struct?: DataLinodeVlansVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeVlansVlansToHclTerraform(struct?: DataLinodeVlansVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeVlansVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeVlansVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeVlansVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // linodes - computed: true, optional: false, required: false
  public get linodes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('linodes')));
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataLinodeVlansVlansList extends cdktf.ComplexList {
  public internalValue? : DataLinodeVlansVlans[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeVlansVlansOutputReference {
    return new DataLinodeVlansVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/vlans linode_vlans}
*/
export class DataLinodeVlans extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_vlans";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeVlans resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeVlans to import
  * @param importFromId The id of the existing DataLinodeVlans that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/vlans#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeVlans to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_vlans", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/vlans linode_vlans} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeVlansConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLinodeVlansConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_vlans',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._order = config.order;
    this._orderBy = config.orderBy;
    this._filter.internalValue = config.filter;
    this._vlans.internalValue = config.vlans;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataLinodeVlansFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataLinodeVlansFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans = new DataLinodeVlansVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
  public putVlans(value: DataLinodeVlansVlans[] | cdktf.IResolvable) {
    this._vlans.internalValue = value;
  }
  public resetVlans() {
    this._vlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      order: cdktf.stringToTerraform(this._order),
      order_by: cdktf.stringToTerraform(this._orderBy),
      filter: cdktf.listMapper(dataLinodeVlansFilterToTerraform, true)(this._filter.internalValue),
      vlans: cdktf.listMapper(dataLinodeVlansVlansToTerraform, true)(this._vlans.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataLinodeVlansFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataLinodeVlansFilterList",
      },
      vlans: {
        value: cdktf.listMapperHcl(dataLinodeVlansVlansToHclTerraform, true)(this._vlans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLinodeVlansVlansList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
