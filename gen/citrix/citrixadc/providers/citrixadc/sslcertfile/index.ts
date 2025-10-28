// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertfile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslcertfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertfile#id Sslcertfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertfile#name Sslcertfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertfile#src Sslcertfile#src}
  */
  readonly src: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertfile citrixadc_sslcertfile}
*/
export class Sslcertfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcertfile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslcertfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslcertfile to import
  * @param importFromId The id of the existing Sslcertfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertfile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslcertfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcertfile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertfile citrixadc_sslcertfile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslcertfileConfig
  */
  public constructor(scope: Construct, id: string, config: SslcertfileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcertfile',
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
    this._name = config.name;
    this._src = config.src;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // src - computed: false, optional: false, required: true
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      src: cdktf.stringToTerraform(this._src),
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
      src: {
        value: cdktf.stringToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
