// https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/data-sources/asn_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraAsnPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the desired ASN Pool. Required when `name` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/data-sources/asn_pool#id DataApstraAsnPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Display name of the ASN Pool. Required when `id` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/data-sources/asn_pool#name DataApstraAsnPool#name}
  */
  readonly name?: string;
}
export interface DataApstraAsnPoolRanges {
}

export function dataApstraAsnPoolRangesToTerraform(struct?: DataApstraAsnPoolRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraAsnPoolRangesToHclTerraform(struct?: DataApstraAsnPoolRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraAsnPoolRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraAsnPoolRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraAsnPoolRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getNumberAttribute('first');
  }

  // last - computed: true, optional: false, required: false
  public get last() {
    return this.getNumberAttribute('last');
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

export class DataApstraAsnPoolRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraAsnPoolRangesOutputReference {
    return new DataApstraAsnPoolRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/data-sources/asn_pool apstra_asn_pool}
*/
export class DataApstraAsnPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_asn_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraAsnPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraAsnPool to import
  * @param importFromId The id of the existing DataApstraAsnPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/data-sources/asn_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraAsnPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_asn_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/data-sources/asn_pool apstra_asn_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraAsnPoolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraAsnPoolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_asn_pool',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ranges - computed: true, optional: false, required: false
  private _ranges = new DataApstraAsnPoolRangesList(this, "ranges", true);
  public get ranges() {
    return this._ranges;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
