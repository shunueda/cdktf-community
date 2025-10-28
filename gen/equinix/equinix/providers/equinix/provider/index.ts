// https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EquinixProviderConfig {
  /**
  * The Equinix Metal API auth key for API operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs#auth_token EquinixProvider#auth_token}
  */
  readonly authToken?: string;
  /**
  * API Consumer Key available under "My Apps" in developer portal. This argument can also be specified with the `EQUINIX_API_CLIENTID` shell environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs#client_id EquinixProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * API Consumer secret available under "My Apps" in developer portal. This argument can also be specified with the `EQUINIX_API_CLIENTSECRET` shell environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs#client_secret EquinixProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The Equinix API base URL to point out desired environment. This argument can also be specified with the `EQUINIX_API_ENDPOINT` shell environment variable. (Defaults to `https://api.equinix.com`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs#endpoint EquinixProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Maximum number of retries in case of network failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs#max_retries EquinixProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Maximum number of seconds to wait before retrying a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs#max_retry_wait_seconds EquinixProvider#max_retry_wait_seconds}
  */
  readonly maxRetryWaitSeconds?: number;
  /**
  * The duration of time, in seconds, that the Equinix Platform API Client should wait before canceling an API request. Canceled requests may still result in provisioned resources. (Defaults to `30`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs#request_timeout EquinixProvider#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * The maximum number of records in a single response for REST queries that produce paginated responses. (Default is client specific)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs#response_max_page_size EquinixProvider#response_max_page_size}
  */
  readonly responseMaxPageSize?: number;
  /**
  * API tokens are generated from API Consumer clients using the [OAuth2 API](https://developer.equinix.com/dev-docs/fabric/getting-started/getting-access-token#request-access-and-refresh-tokens). This argument can also be specified with the `EQUINIX_API_TOKEN` shell environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs#token EquinixProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs#alias EquinixProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs equinix}
*/
export class EquinixProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EquinixProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EquinixProvider to import
  * @param importFromId The id of the existing EquinixProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EquinixProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.5.0/docs equinix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EquinixProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EquinixProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'equinix',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.5.0'
      },
      terraformProviderSource: 'equinix/equinix'
    });
    this._authToken = config.authToken;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._endpoint = config.endpoint;
    this._maxRetries = config.maxRetries;
    this._maxRetryWaitSeconds = config.maxRetryWaitSeconds;
    this._requestTimeout = config.requestTimeout;
    this._responseMaxPageSize = config.responseMaxPageSize;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this._authToken;
  }
  public set authToken(value: string | undefined) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // max_retry_wait_seconds - computed: false, optional: true, required: false
  private _maxRetryWaitSeconds?: number; 
  public get maxRetryWaitSeconds() {
    return this._maxRetryWaitSeconds;
  }
  public set maxRetryWaitSeconds(value: number | undefined) {
    this._maxRetryWaitSeconds = value;
  }
  public resetMaxRetryWaitSeconds() {
    this._maxRetryWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryWaitSecondsInput() {
    return this._maxRetryWaitSeconds;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: number | undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // response_max_page_size - computed: false, optional: true, required: false
  private _responseMaxPageSize?: number; 
  public get responseMaxPageSize() {
    return this._responseMaxPageSize;
  }
  public set responseMaxPageSize(value: number | undefined) {
    this._responseMaxPageSize = value;
  }
  public resetResponseMaxPageSize() {
    this._responseMaxPageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMaxPageSizeInput() {
    return this._responseMaxPageSize;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_token: cdktf.stringToTerraform(this._authToken),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      max_retry_wait_seconds: cdktf.numberToTerraform(this._maxRetryWaitSeconds),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      response_max_page_size: cdktf.numberToTerraform(this._responseMaxPageSize),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retry_wait_seconds: {
        value: cdktf.numberToHclTerraform(this._maxRetryWaitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_max_page_size: {
        value: cdktf.numberToHclTerraform(this._responseMaxPageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
