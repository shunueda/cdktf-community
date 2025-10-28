// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationsamlpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationsamlpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationsamlpolicy#id Authenticationsamlpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationsamlpolicy#name Authenticationsamlpolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationsamlpolicy#reqaction Authenticationsamlpolicy#reqaction}
  */
  readonly reqaction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationsamlpolicy#rule Authenticationsamlpolicy#rule}
  */
  readonly rule: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationsamlpolicy citrixadc_authenticationsamlpolicy}
*/
export class Authenticationsamlpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationsamlpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationsamlpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationsamlpolicy to import
  * @param importFromId The id of the existing Authenticationsamlpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationsamlpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationsamlpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationsamlpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationsamlpolicy citrixadc_authenticationsamlpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationsamlpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationsamlpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationsamlpolicy',
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
    this._reqaction = config.reqaction;
    this._rule = config.rule;
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

  // reqaction - computed: false, optional: false, required: true
  private _reqaction?: string; 
  public get reqaction() {
    return this.getStringAttribute('reqaction');
  }
  public set reqaction(value: string) {
    this._reqaction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reqactionInput() {
    return this._reqaction;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      reqaction: cdktf.stringToTerraform(this._reqaction),
      rule: cdktf.stringToTerraform(this._rule),
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
      reqaction: {
        value: cdktf.stringToHclTerraform(this._reqaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
