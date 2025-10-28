// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l4param
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L4ParamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l4param#id L4Param#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l4param#l2connmethod L4Param#l2connmethod}
  */
  readonly l2Connmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l4param#l4switch L4Param#l4switch}
  */
  readonly l4Switch?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l4param citrixadc_l4param}
*/
export class L4Param extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_l4param";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L4Param resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L4Param to import
  * @param importFromId The id of the existing L4Param that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l4param#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L4Param to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_l4param", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/l4param citrixadc_l4param} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L4ParamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: L4ParamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_l4param',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
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
    this._l2Connmethod = config.l2Connmethod;
    this._l4Switch = config.l4Switch;
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

  // l2connmethod - computed: true, optional: true, required: false
  private _l2Connmethod?: string; 
  public get l2Connmethod() {
    return this.getStringAttribute('l2connmethod');
  }
  public set l2Connmethod(value: string) {
    this._l2Connmethod = value;
  }
  public resetL2Connmethod() {
    this._l2Connmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2ConnmethodInput() {
    return this._l2Connmethod;
  }

  // l4switch - computed: true, optional: true, required: false
  private _l4Switch?: string; 
  public get l4Switch() {
    return this.getStringAttribute('l4switch');
  }
  public set l4Switch(value: string) {
    this._l4Switch = value;
  }
  public resetL4Switch() {
    this._l4Switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SwitchInput() {
    return this._l4Switch;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      l2connmethod: cdktf.stringToTerraform(this._l2Connmethod),
      l4switch: cdktf.stringToTerraform(this._l4Switch),
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
      l2connmethod: {
        value: cdktf.stringToHclTerraform(this._l2Connmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4switch: {
        value: cdktf.stringToHclTerraform(this._l4Switch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
