// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_static6list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchRouterStatic6ListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_static6list#filter DataFortiswitchRouterStatic6List#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_static6list#id DataFortiswitchRouterStatic6List#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_static6list fortiswitch_router_static6list}
*/
export class DataFortiswitchRouterStatic6List extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_router_static6list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchRouterStatic6List resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchRouterStatic6List to import
  * @param importFromId The id of the existing DataFortiswitchRouterStatic6List that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_static6list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchRouterStatic6List to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_router_static6list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_static6list fortiswitch_router_static6list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchRouterStatic6ListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchRouterStatic6ListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_router_static6list',
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

  // seq_numlist - computed: true, optional: false, required: false
  public get seqNumlist() {
    return this.getNumberListAttribute('seq_numlist');
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
