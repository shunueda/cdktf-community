// https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/dkim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMailcowDkimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/dkim#domain DataMailcowDkim#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/dkim#id DataMailcowDkim#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/dkim mailcow_dkim}
*/
export class DataMailcowDkim extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mailcow_dkim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMailcowDkim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMailcowDkim to import
  * @param importFromId The id of the existing DataMailcowDkim that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/dkim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMailcowDkim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mailcow_dkim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/dkim mailcow_dkim} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMailcowDkimConfig
  */
  public constructor(scope: Construct, id: string, config: DataMailcowDkimConfig) {
    super(scope, id, {
      terraformResourceType: 'mailcow_dkim',
      terraformGeneratorMetadata: {
        providerName: 'mailcow',
        providerVersion: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dkim_selector - computed: true, optional: false, required: false
  public get dkimSelector() {
    return this.getStringAttribute('dkim_selector');
  }

  // dkim_txt - computed: true, optional: false, required: false
  public get dkimTxt() {
    return this.getStringAttribute('dkim_txt');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // pubkey - computed: true, optional: false, required: false
  public get pubkey() {
    return this.getStringAttribute('pubkey');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
