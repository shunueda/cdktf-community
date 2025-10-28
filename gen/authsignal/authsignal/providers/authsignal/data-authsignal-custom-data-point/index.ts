// https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/custom_data_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuthsignalCustomDataPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the custom data point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/custom_data_point#id DataAuthsignalCustomDataPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/custom_data_point authsignal_custom_data_point}
*/
export class DataAuthsignalCustomDataPoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authsignal_custom_data_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuthsignalCustomDataPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuthsignalCustomDataPoint to import
  * @param importFromId The id of the existing DataAuthsignalCustomDataPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/custom_data_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuthsignalCustomDataPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authsignal_custom_data_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/custom_data_point authsignal_custom_data_point} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuthsignalCustomDataPointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAuthsignalCustomDataPointConfig) {
    super(scope, id, {
      terraformResourceType: 'authsignal_custom_data_point',
      terraformGeneratorMetadata: {
        providerName: 'authsignal',
        providerVersion: '1.6.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
