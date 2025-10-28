// https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/prompt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PromptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/prompt#id Prompt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/prompt#identifier_first Prompt#identifier_first}
  */
  readonly identifierFirst?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/prompt#universal_login_experience Prompt#universal_login_experience}
  */
  readonly universalLoginExperience?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/prompt auth0_prompt}
*/
export class Prompt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_prompt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Prompt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Prompt to import
  * @param importFromId The id of the existing Prompt that should be imported. Refer to the {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/prompt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Prompt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_prompt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/prompt auth0_prompt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PromptConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PromptConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0_prompt',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '0.26.2'
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
    this._identifierFirst = config.identifierFirst;
    this._universalLoginExperience = config.universalLoginExperience;
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

  // identifier_first - computed: false, optional: true, required: false
  private _identifierFirst?: boolean | cdktf.IResolvable; 
  public get identifierFirst() {
    return this.getBooleanAttribute('identifier_first');
  }
  public set identifierFirst(value: boolean | cdktf.IResolvable) {
    this._identifierFirst = value;
  }
  public resetIdentifierFirst() {
    this._identifierFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierFirstInput() {
    return this._identifierFirst;
  }

  // universal_login_experience - computed: false, optional: true, required: false
  private _universalLoginExperience?: string; 
  public get universalLoginExperience() {
    return this.getStringAttribute('universal_login_experience');
  }
  public set universalLoginExperience(value: string) {
    this._universalLoginExperience = value;
  }
  public resetUniversalLoginExperience() {
    this._universalLoginExperience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get universalLoginExperienceInput() {
    return this._universalLoginExperience;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier_first: cdktf.booleanToTerraform(this._identifierFirst),
      universal_login_experience: cdktf.stringToTerraform(this._universalLoginExperience),
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
      identifier_first: {
        value: cdktf.booleanToHclTerraform(this._identifierFirst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      universal_login_experience: {
        value: cdktf.stringToHclTerraform(this._universalLoginExperience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
