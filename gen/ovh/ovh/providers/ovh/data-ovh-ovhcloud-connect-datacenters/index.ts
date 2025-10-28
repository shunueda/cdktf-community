// https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/ovhcloud_connect_datacenters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhOvhcloudConnectDatacentersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/ovhcloud_connect_datacenters#service_name DataOvhOvhcloudConnectDatacenters#service_name}
  */
  readonly serviceName: string;
}
export interface DataOvhOvhcloudConnectDatacentersDatacenters {
  /**
  * Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/ovhcloud_connect_datacenters#id DataOvhOvhcloudConnectDatacenters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function dataOvhOvhcloudConnectDatacentersDatacentersToTerraform(struct?: DataOvhOvhcloudConnectDatacentersDatacenters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function dataOvhOvhcloudConnectDatacentersDatacentersToHclTerraform(struct?: DataOvhOvhcloudConnectDatacentersDatacenters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOvhOvhcloudConnectDatacentersDatacentersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhOvhcloudConnectDatacentersDatacenters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhOvhcloudConnectDatacentersDatacenters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getBooleanAttribute('available');
  }

  // id - computed: true, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_type - computed: true, optional: false, required: false
  public get regionType() {
    return this.getStringAttribute('region_type');
  }
}

export class DataOvhOvhcloudConnectDatacentersDatacentersList extends cdktf.ComplexList {
  public internalValue? : DataOvhOvhcloudConnectDatacentersDatacenters[] | cdktf.IResolvable

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
  public get(index: number): DataOvhOvhcloudConnectDatacentersDatacentersOutputReference {
    return new DataOvhOvhcloudConnectDatacentersDatacentersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/ovhcloud_connect_datacenters ovh_ovhcloud_connect_datacenters}
*/
export class DataOvhOvhcloudConnectDatacenters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_ovhcloud_connect_datacenters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhOvhcloudConnectDatacenters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhOvhcloudConnectDatacenters to import
  * @param importFromId The id of the existing DataOvhOvhcloudConnectDatacenters that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/ovhcloud_connect_datacenters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhOvhcloudConnectDatacenters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_ovhcloud_connect_datacenters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/ovhcloud_connect_datacenters ovh_ovhcloud_connect_datacenters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhOvhcloudConnectDatacentersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhOvhcloudConnectDatacentersConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_ovhcloud_connect_datacenters',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenters - computed: true, optional: false, required: false
  private _datacenters = new DataOvhOvhcloudConnectDatacentersDatacentersList(this, "datacenters", true);
  public get datacenters() {
    return this._datacenters;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
