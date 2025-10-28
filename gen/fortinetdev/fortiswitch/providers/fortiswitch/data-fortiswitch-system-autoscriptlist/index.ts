// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_autoscriptlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchSystemAutoscriptlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_autoscriptlist#filter DataFortiswitchSystemAutoscriptlist#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_autoscriptlist#id DataFortiswitchSystemAutoscriptlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_autoscriptlist fortiswitch_system_autoscriptlist}
*/
export class DataFortiswitchSystemAutoscriptlist extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_autoscriptlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchSystemAutoscriptlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchSystemAutoscriptlist to import
  * @param importFromId The id of the existing DataFortiswitchSystemAutoscriptlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_autoscriptlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchSystemAutoscriptlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_autoscriptlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_autoscriptlist fortiswitch_system_autoscriptlist} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchSystemAutoscriptlistConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchSystemAutoscriptlistConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_autoscriptlist',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // namelist - computed: true, optional: false, required: false
  public get namelist() {
    return this.getListAttribute('namelist');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
