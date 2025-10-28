// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/const_traffic_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistConstTrafficTypesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataMistConstTrafficTypesConstTrafficTypes {
}

export function dataMistConstTrafficTypesConstTrafficTypesToTerraform(struct?: DataMistConstTrafficTypesConstTrafficTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistConstTrafficTypesConstTrafficTypesToHclTerraform(struct?: DataMistConstTrafficTypesConstTrafficTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistConstTrafficTypesConstTrafficTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistConstTrafficTypesConstTrafficTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistConstTrafficTypesConstTrafficTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }

  // failover_policy - computed: true, optional: false, required: false
  public get failoverPolicy() {
    return this.getStringAttribute('failover_policy');
  }

  // max_jitter - computed: true, optional: false, required: false
  public get maxJitter() {
    return this.getNumberAttribute('max_jitter');
  }

  // max_latency - computed: true, optional: false, required: false
  public get maxLatency() {
    return this.getNumberAttribute('max_latency');
  }

  // max_loss - computed: true, optional: false, required: false
  public get maxLoss() {
    return this.getNumberAttribute('max_loss');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // traffic_class - computed: true, optional: false, required: false
  public get trafficClass() {
    return this.getStringAttribute('traffic_class');
  }
}

export class DataMistConstTrafficTypesConstTrafficTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataMistConstTrafficTypesConstTrafficTypesOutputReference {
    return new DataMistConstTrafficTypesConstTrafficTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/const_traffic_types mist_const_traffic_types}
*/
export class DataMistConstTrafficTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_const_traffic_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistConstTrafficTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistConstTrafficTypes to import
  * @param importFromId The id of the existing DataMistConstTrafficTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/const_traffic_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistConstTrafficTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_const_traffic_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/const_traffic_types mist_const_traffic_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistConstTrafficTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMistConstTrafficTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mist_const_traffic_types',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // const_traffic_types - computed: true, optional: false, required: false
  private _constTrafficTypes = new DataMistConstTrafficTypesConstTrafficTypesList(this, "const_traffic_types", true);
  public get constTrafficTypes() {
    return this._constTrafficTypes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
