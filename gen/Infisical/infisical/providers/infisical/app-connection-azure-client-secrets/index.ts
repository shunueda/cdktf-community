// https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_azure_client_secrets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConnectionAzureClientSecretsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The credentials for the Azure Client Secrets App Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_azure_client_secrets#credentials AppConnectionAzureClientSecrets#credentials}
  */
  readonly credentials: AppConnectionAzureClientSecretsCredentials;
  /**
  * An optional description for the Azure Client Secrets App Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_azure_client_secrets#description AppConnectionAzureClientSecrets#description}
  */
  readonly description?: string;
  /**
  * The method used to authenticate with Azure Client Secrets. Possible values are: client-secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_azure_client_secrets#method AppConnectionAzureClientSecrets#method}
  */
  readonly method: string;
  /**
  * The name of the Azure Client Secrets App Connection to create. Must be slug-friendly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_azure_client_secrets#name AppConnectionAzureClientSecrets#name}
  */
  readonly name: string;
}
export interface AppConnectionAzureClientSecretsCredentials {
  /**
  * The Azure application (client) ID. Required for client-secret method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-client-secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_azure_client_secrets#client_id AppConnectionAzureClientSecrets#client_id}
  */
  readonly clientId: string;
  /**
  * The Azure client secret. Required for client-secret method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-client-secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_azure_client_secrets#client_secret AppConnectionAzureClientSecrets#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The Azure Active Directory (AAD) tenant ID. Required for client-secret method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-client-secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_azure_client_secrets#tenant_id AppConnectionAzureClientSecrets#tenant_id}
  */
  readonly tenantId: string;
}

export function appConnectionAzureClientSecretsCredentialsToTerraform(struct?: AppConnectionAzureClientSecretsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function appConnectionAzureClientSecretsCredentialsToHclTerraform(struct?: AppConnectionAzureClientSecretsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppConnectionAzureClientSecretsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppConnectionAzureClientSecretsCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppConnectionAzureClientSecretsCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_azure_client_secrets infisical_app_connection_azure_client_secrets}
*/
export class AppConnectionAzureClientSecrets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_app_connection_azure_client_secrets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppConnectionAzureClientSecrets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppConnectionAzureClientSecrets to import
  * @param importFromId The id of the existing AppConnectionAzureClientSecrets that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_azure_client_secrets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppConnectionAzureClientSecrets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_azure_client_secrets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.15.41/docs/resources/app_connection_azure_client_secrets infisical_app_connection_azure_client_secrets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConnectionAzureClientSecretsConfig
  */
  public constructor(scope: Construct, id: string, config: AppConnectionAzureClientSecretsConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_app_connection_azure_client_secrets',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.15.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentials.internalValue = config.credentials;
    this._description = config.description;
    this._method = config.method;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: false, optional: false, required: true
  private _credentials = new AppConnectionAzureClientSecretsCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: AppConnectionAzureClientSecretsCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // credentials_hash - computed: true, optional: false, required: false
  public get credentialsHash() {
    return this.getStringAttribute('credentials_hash');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials: appConnectionAzureClientSecretsCredentialsToTerraform(this._credentials.internalValue),
      description: cdktf.stringToTerraform(this._description),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: appConnectionAzureClientSecretsCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppConnectionAzureClientSecretsCredentials",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
