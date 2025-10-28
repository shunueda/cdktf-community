// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/docker_container_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DockerContainerRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/docker_container_registry#api_version DockerContainerRegistry#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/docker_container_registry#feed_uri DockerContainerRegistry#feed_uri}
  */
  readonly feedUri: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/docker_container_registry#name DockerContainerRegistry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/docker_container_registry#package_acquisition_location_options DockerContainerRegistry#package_acquisition_location_options}
  */
  readonly packageAcquisitionLocationOptions?: string[];
  /**
  * The password associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/docker_container_registry#password DockerContainerRegistry#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/docker_container_registry#registry_path DockerContainerRegistry#registry_path}
  */
  readonly registryPath?: string;
  /**
  * The space ID associated with this docker container registry feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/docker_container_registry#space_id DockerContainerRegistry#space_id}
  */
  readonly spaceId?: string;
  /**
  * The username associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/docker_container_registry#username DockerContainerRegistry#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/docker_container_registry octopusdeploy_docker_container_registry}
*/
export class DockerContainerRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_docker_container_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DockerContainerRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DockerContainerRegistry to import
  * @param importFromId The id of the existing DockerContainerRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/docker_container_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DockerContainerRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_docker_container_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/docker_container_registry octopusdeploy_docker_container_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DockerContainerRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: DockerContainerRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_docker_container_registry',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '0.43.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiVersion = config.apiVersion;
    this._feedUri = config.feedUri;
    this._name = config.name;
    this._packageAcquisitionLocationOptions = config.packageAcquisitionLocationOptions;
    this._password = config.password;
    this._registryPath = config.registryPath;
    this._spaceId = config.spaceId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // feed_uri - computed: false, optional: false, required: true
  private _feedUri?: string; 
  public get feedUri() {
    return this.getStringAttribute('feed_uri');
  }
  public set feedUri(value: string) {
    this._feedUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedUriInput() {
    return this._feedUri;
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

  // package_acquisition_location_options - computed: true, optional: true, required: false
  private _packageAcquisitionLocationOptions?: string[]; 
  public get packageAcquisitionLocationOptions() {
    return this.getListAttribute('package_acquisition_location_options');
  }
  public set packageAcquisitionLocationOptions(value: string[]) {
    this._packageAcquisitionLocationOptions = value;
  }
  public resetPackageAcquisitionLocationOptions() {
    this._packageAcquisitionLocationOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageAcquisitionLocationOptionsInput() {
    return this._packageAcquisitionLocationOptions;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // registry_path - computed: false, optional: true, required: false
  private _registryPath?: string; 
  public get registryPath() {
    return this.getStringAttribute('registry_path');
  }
  public set registryPath(value: string) {
    this._registryPath = value;
  }
  public resetRegistryPath() {
    this._registryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryPathInput() {
    return this._registryPath;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_version: cdktf.stringToTerraform(this._apiVersion),
      feed_uri: cdktf.stringToTerraform(this._feedUri),
      name: cdktf.stringToTerraform(this._name),
      package_acquisition_location_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packageAcquisitionLocationOptions),
      password: cdktf.stringToTerraform(this._password),
      registry_path: cdktf.stringToTerraform(this._registryPath),
      space_id: cdktf.stringToTerraform(this._spaceId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feed_uri: {
        value: cdktf.stringToHclTerraform(this._feedUri),
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
      package_acquisition_location_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packageAcquisitionLocationOptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_path: {
        value: cdktf.stringToHclTerraform(this._registryPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
