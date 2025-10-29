// https://registry.terraform.io/providers/poseidon/ct/0.13.0/docs/data-sources/config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCtConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/poseidon/ct/0.13.0/docs/data-sources/config#content DataCtConfig#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/poseidon/ct/0.13.0/docs/data-sources/config#id DataCtConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/poseidon/ct/0.13.0/docs/data-sources/config#pretty_print DataCtConfig#pretty_print}
  */
  readonly prettyPrint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/poseidon/ct/0.13.0/docs/data-sources/config#snippets DataCtConfig#snippets}
  */
  readonly snippets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/poseidon/ct/0.13.0/docs/data-sources/config#strict DataCtConfig#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/poseidon/ct/0.13.0/docs/data-sources/config ct_config}
*/
export class DataCtConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ct_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCtConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCtConfig to import
  * @param importFromId The id of the existing DataCtConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/poseidon/ct/0.13.0/docs/data-sources/config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCtConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ct_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/poseidon/ct/0.13.0/docs/data-sources/config ct_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCtConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataCtConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'ct_config',
      terraformGeneratorMetadata: {
        providerName: 'ct',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._id = config.id;
    this._prettyPrint = config.prettyPrint;
    this._snippets = config.snippets;
    this._strict = config.strict;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // pretty_print - computed: false, optional: true, required: false
  private _prettyPrint?: boolean | cdktf.IResolvable; 
  public get prettyPrint() {
    return this.getBooleanAttribute('pretty_print');
  }
  public set prettyPrint(value: boolean | cdktf.IResolvable) {
    this._prettyPrint = value;
  }
  public resetPrettyPrint() {
    this._prettyPrint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prettyPrintInput() {
    return this._prettyPrint;
  }

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // snippets - computed: false, optional: true, required: false
  private _snippets?: string[]; 
  public get snippets() {
    return this.getListAttribute('snippets');
  }
  public set snippets(value: string[]) {
    this._snippets = value;
  }
  public resetSnippets() {
    this._snippets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetsInput() {
    return this._snippets;
  }

  // strict - computed: false, optional: true, required: false
  private _strict?: boolean | cdktf.IResolvable; 
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
  public set strict(value: boolean | cdktf.IResolvable) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      id: cdktf.stringToTerraform(this._id),
      pretty_print: cdktf.booleanToTerraform(this._prettyPrint),
      snippets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snippets),
      strict: cdktf.booleanToTerraform(this._strict),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
      pretty_print: {
        value: cdktf.booleanToHclTerraform(this._prettyPrint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snippets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snippets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      strict: {
        value: cdktf.booleanToHclTerraform(this._strict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
