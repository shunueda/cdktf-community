// https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/credential_username
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJenkinsCredentialUsernameConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain store containing this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/credential_username#domain DataJenkinsCredentialUsername#domain}
  */
  readonly domain?: string;
  /**
  * The folder namespace containing this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/credential_username#folder DataJenkinsCredentialUsername#folder}
  */
  readonly folder?: string;
  /**
  * The name of the resource being read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/credential_username#name DataJenkinsCredentialUsername#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/credential_username jenkins_credential_username}
*/
export class DataJenkinsCredentialUsername extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jenkins_credential_username";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJenkinsCredentialUsername resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJenkinsCredentialUsername to import
  * @param importFromId The id of the existing DataJenkinsCredentialUsername that should be imported. Refer to the {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/credential_username#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJenkinsCredentialUsername to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jenkins_credential_username", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/credential_username jenkins_credential_username} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJenkinsCredentialUsernameConfig
  */
  public constructor(scope: Construct, id: string, config: DataJenkinsCredentialUsernameConfig) {
    super(scope, id, {
      terraformResourceType: 'jenkins_credential_username',
      terraformGeneratorMetadata: {
        providerName: 'jenkins',
        providerVersion: '0.11.0'
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
    this._folder = config.folder;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
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
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
