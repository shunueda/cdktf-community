// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleContainerRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry#api_version GoogleContainerRegistry#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry#feed_uri GoogleContainerRegistry#feed_uri}
  */
  readonly feedUri: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry#name GoogleContainerRegistry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry#oidc_authentication GoogleContainerRegistry#oidc_authentication}
  */
  readonly oidcAuthentication?: GoogleContainerRegistryOidcAuthentication;
  /**
  * The password associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry#password GoogleContainerRegistry#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry#registry_path GoogleContainerRegistry#registry_path}
  */
  readonly registryPath?: string;
  /**
  * The space ID associated with this Google container registry feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry#space_id GoogleContainerRegistry#space_id}
  */
  readonly spaceId?: string;
  /**
  * The username associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry#username GoogleContainerRegistry#username}
  */
  readonly username?: string;
}
export interface GoogleContainerRegistryOidcAuthentication {
  /**
  * Audience representing the intended recipient of the OIDC token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry#audience GoogleContainerRegistry#audience}
  */
  readonly audience?: string;
  /**
  * Keys to include in a deployment or runbook. Valid options are `space`, `feed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry#subject_keys GoogleContainerRegistry#subject_keys}
  */
  readonly subjectKeys?: string[];
}

export function googleContainerRegistryOidcAuthenticationToTerraform(struct?: GoogleContainerRegistryOidcAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectKeys),
  }
}


export function googleContainerRegistryOidcAuthenticationToHclTerraform(struct?: GoogleContainerRegistryOidcAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerRegistryOidcAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleContainerRegistryOidcAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._subjectKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKeys = this._subjectKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerRegistryOidcAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._subjectKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._subjectKeys = value.subjectKeys;
    }
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // subject_keys - computed: false, optional: true, required: false
  private _subjectKeys?: string[]; 
  public get subjectKeys() {
    return this.getListAttribute('subject_keys');
  }
  public set subjectKeys(value: string[]) {
    this._subjectKeys = value;
  }
  public resetSubjectKeys() {
    this._subjectKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeysInput() {
    return this._subjectKeys;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry octopusdeploy_google_container_registry}
*/
export class GoogleContainerRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_google_container_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleContainerRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleContainerRegistry to import
  * @param importFromId The id of the existing GoogleContainerRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleContainerRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_google_container_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/resources/google_container_registry octopusdeploy_google_container_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleContainerRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleContainerRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_google_container_registry',
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
    this._oidcAuthentication.internalValue = config.oidcAuthentication;
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

  // oidc_authentication - computed: false, optional: true, required: false
  private _oidcAuthentication = new GoogleContainerRegistryOidcAuthenticationOutputReference(this, "oidc_authentication");
  public get oidcAuthentication() {
    return this._oidcAuthentication;
  }
  public putOidcAuthentication(value: GoogleContainerRegistryOidcAuthentication) {
    this._oidcAuthentication.internalValue = value;
  }
  public resetOidcAuthentication() {
    this._oidcAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAuthenticationInput() {
    return this._oidcAuthentication.internalValue;
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
      oidc_authentication: googleContainerRegistryOidcAuthenticationToTerraform(this._oidcAuthentication.internalValue),
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
      oidc_authentication: {
        value: googleContainerRegistryOidcAuthenticationToHclTerraform(this._oidcAuthentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleContainerRegistryOidcAuthentication",
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
