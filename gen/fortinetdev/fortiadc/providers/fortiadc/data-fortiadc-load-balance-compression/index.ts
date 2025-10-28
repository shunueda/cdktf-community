// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/load_balance_compression
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcLoadBalanceCompressionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/load_balance_compression#id DataFortiadcLoadBalanceCompression#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/load_balance_compression#mkey DataFortiadcLoadBalanceCompression#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/load_balance_compression#vdom DataFortiadcLoadBalanceCompression#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/load_balance_compression fortiadc_load_balance_compression}
*/
export class DataFortiadcLoadBalanceCompression extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_compression";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcLoadBalanceCompression resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcLoadBalanceCompression to import
  * @param importFromId The id of the existing DataFortiadcLoadBalanceCompression that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/load_balance_compression#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcLoadBalanceCompression to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_compression", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/load_balance_compression fortiadc_load_balance_compression} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcLoadBalanceCompressionConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcLoadBalanceCompressionConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_compression',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.0'
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
    this._mkey = config.mkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // gzip_memory_level - computed: true, optional: false, required: false
  public get gzipMemoryLevel() {
    return this.getStringAttribute('gzip_memory_level');
  }

  // gzip_window_size - computed: true, optional: false, required: false
  public get gzipWindowSize() {
    return this.getStringAttribute('gzip_window_size');
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

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // max_cpu_usage - computed: true, optional: false, required: false
  public get maxCpuUsage() {
    return this.getStringAttribute('max_cpu_usage');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // min_content_length - computed: true, optional: false, required: false
  public get minContentLength() {
    return this.getStringAttribute('min_content_length');
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // uri_list_type - computed: true, optional: false, required: false
  public get uriListType() {
    return this.getStringAttribute('uri_list_type');
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      vdom: cdktf.stringToTerraform(this._vdom),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
