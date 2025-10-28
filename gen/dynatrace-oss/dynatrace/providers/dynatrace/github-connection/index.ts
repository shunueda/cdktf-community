// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/github_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GithubConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/github_connection#id GithubConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the GitHub connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/github_connection#name GithubConnection#name}
  */
  readonly name: string;
  /**
  * Token for the selected authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/github_connection#token GithubConnection#token}
  */
  readonly token?: string;
  /**
  * Possible Values: `pat`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/github_connection#type GithubConnection#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/github_connection dynatrace_github_connection}
*/
export class GithubConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_github_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GithubConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GithubConnection to import
  * @param importFromId The id of the existing GithubConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/github_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GithubConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_github_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/github_connection dynatrace_github_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GithubConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: GithubConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_github_connection',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.86.0'
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
    this._token = config.token;
    this._type = config.type;
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      token: cdktf.stringToTerraform(this._token),
      type: cdktf.stringToTerraform(this._type),
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
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
