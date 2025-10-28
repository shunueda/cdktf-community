// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryNpmProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for this repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#name RepositoryNpmProxy#name}
  */
  readonly name: string;
  /**
  * Whether this repository accepts incoming requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#online RepositoryNpmProxy#online}
  */
  readonly online?: boolean | cdktf.IResolvable;
  /**
  * Remove non-catalogued versions from the npm package metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#remove_non_cataloged RepositoryNpmProxy#remove_non_cataloged}
  */
  readonly removeNonCataloged?: boolean | cdktf.IResolvable;
  /**
  * Remove quarantined versions from the npm package metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#remove_quarantined RepositoryNpmProxy#remove_quarantined}
  */
  readonly removeQuarantined?: boolean | cdktf.IResolvable;
  /**
  * The name of the routing rule assigned to this repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#routing_rule RepositoryNpmProxy#routing_rule}
  */
  readonly routingRule?: string;
  /**
  * cleanup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#cleanup RepositoryNpmProxy#cleanup}
  */
  readonly cleanup?: RepositoryNpmProxyCleanup[] | cdktf.IResolvable;
  /**
  * http_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#http_client RepositoryNpmProxy#http_client}
  */
  readonly httpClient: RepositoryNpmProxyHttpClient;
  /**
  * negative_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#negative_cache RepositoryNpmProxy#negative_cache}
  */
  readonly negativeCache: RepositoryNpmProxyNegativeCache;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#proxy RepositoryNpmProxy#proxy}
  */
  readonly proxy: RepositoryNpmProxyProxy;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#storage RepositoryNpmProxy#storage}
  */
  readonly storage: RepositoryNpmProxyStorage;
}
export interface RepositoryNpmProxyCleanup {
  /**
  * List of policy names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#policy_names RepositoryNpmProxy#policy_names}
  */
  readonly policyNames?: string[];
}

export function repositoryNpmProxyCleanupToTerraform(struct?: RepositoryNpmProxyCleanup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyNames),
  }
}


export function repositoryNpmProxyCleanupToHclTerraform(struct?: RepositoryNpmProxyCleanup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryNpmProxyCleanupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RepositoryNpmProxyCleanup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyNames = this._policyNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryNpmProxyCleanup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyNames = value.policyNames;
    }
  }

  // policy_names - computed: false, optional: true, required: false
  private _policyNames?: string[]; 
  public get policyNames() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_names'));
  }
  public set policyNames(value: string[]) {
    this._policyNames = value;
  }
  public resetPolicyNames() {
    this._policyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNamesInput() {
    return this._policyNames;
  }
}

export class RepositoryNpmProxyCleanupList extends cdktf.ComplexList {
  public internalValue? : RepositoryNpmProxyCleanup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RepositoryNpmProxyCleanupOutputReference {
    return new RepositoryNpmProxyCleanupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryNpmProxyHttpClientAuthentication {
  /**
  * The ntlm domain to connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#ntlm_domain RepositoryNpmProxy#ntlm_domain}
  */
  readonly ntlmDomain?: string;
  /**
  * The ntlm host to connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#ntlm_host RepositoryNpmProxy#ntlm_host}
  */
  readonly ntlmHost?: string;
  /**
  * The password used by the proxy repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#password RepositoryNpmProxy#password}
  */
  readonly password?: string;
  /**
  * Authentication type. Possible values: `ntlm` or `username`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#type RepositoryNpmProxy#type}
  */
  readonly type: string;
  /**
  * The username used by the proxy repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#username RepositoryNpmProxy#username}
  */
  readonly username?: string;
}

export function repositoryNpmProxyHttpClientAuthenticationToTerraform(struct?: RepositoryNpmProxyHttpClientAuthenticationOutputReference | RepositoryNpmProxyHttpClientAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ntlm_domain: cdktf.stringToTerraform(struct!.ntlmDomain),
    ntlm_host: cdktf.stringToTerraform(struct!.ntlmHost),
    password: cdktf.stringToTerraform(struct!.password),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function repositoryNpmProxyHttpClientAuthenticationToHclTerraform(struct?: RepositoryNpmProxyHttpClientAuthenticationOutputReference | RepositoryNpmProxyHttpClientAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ntlm_domain: {
      value: cdktf.stringToHclTerraform(struct!.ntlmDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntlm_host: {
      value: cdktf.stringToHclTerraform(struct!.ntlmHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryNpmProxyHttpClientAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryNpmProxyHttpClientAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ntlmDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmDomain = this._ntlmDomain;
    }
    if (this._ntlmHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmHost = this._ntlmHost;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryNpmProxyHttpClientAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ntlmDomain = undefined;
      this._ntlmHost = undefined;
      this._password = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ntlmDomain = value.ntlmDomain;
      this._ntlmHost = value.ntlmHost;
      this._password = value.password;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // ntlm_domain - computed: false, optional: true, required: false
  private _ntlmDomain?: string; 
  public get ntlmDomain() {
    return this.getStringAttribute('ntlm_domain');
  }
  public set ntlmDomain(value: string) {
    this._ntlmDomain = value;
  }
  public resetNtlmDomain() {
    this._ntlmDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmDomainInput() {
    return this._ntlmDomain;
  }

  // ntlm_host - computed: false, optional: true, required: false
  private _ntlmHost?: string; 
  public get ntlmHost() {
    return this.getStringAttribute('ntlm_host');
  }
  public set ntlmHost(value: string) {
    this._ntlmHost = value;
  }
  public resetNtlmHost() {
    this._ntlmHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmHostInput() {
    return this._ntlmHost;
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
}
export interface RepositoryNpmProxyHttpClientConnection {
  /**
  * Whether to enable redirects to the same location (may be required by some servers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#enable_circular_redirects RepositoryNpmProxy#enable_circular_redirects}
  */
  readonly enableCircularRedirects?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow cookies to be stored and used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#enable_cookies RepositoryNpmProxy#enable_cookies}
  */
  readonly enableCookies?: boolean | cdktf.IResolvable;
  /**
  * Total retries if the initial connection attempt suffers a timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#retries RepositoryNpmProxy#retries}
  */
  readonly retries?: number;
  /**
  * Seconds to wait for activity before stopping and retrying the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#timeout RepositoryNpmProxy#timeout}
  */
  readonly timeout?: number;
  /**
  * Use certificates stored in the Nexus Repository Manager truststore to connect to external systems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#use_trust_store RepositoryNpmProxy#use_trust_store}
  */
  readonly useTrustStore?: boolean | cdktf.IResolvable;
  /**
  * Custom fragment to append to User-Agent header in HTTP requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#user_agent_suffix RepositoryNpmProxy#user_agent_suffix}
  */
  readonly userAgentSuffix?: string;
}

export function repositoryNpmProxyHttpClientConnectionToTerraform(struct?: RepositoryNpmProxyHttpClientConnectionOutputReference | RepositoryNpmProxyHttpClientConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_circular_redirects: cdktf.booleanToTerraform(struct!.enableCircularRedirects),
    enable_cookies: cdktf.booleanToTerraform(struct!.enableCookies),
    retries: cdktf.numberToTerraform(struct!.retries),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    use_trust_store: cdktf.booleanToTerraform(struct!.useTrustStore),
    user_agent_suffix: cdktf.stringToTerraform(struct!.userAgentSuffix),
  }
}


export function repositoryNpmProxyHttpClientConnectionToHclTerraform(struct?: RepositoryNpmProxyHttpClientConnectionOutputReference | RepositoryNpmProxyHttpClientConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_circular_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.enableCircularRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_cookies: {
      value: cdktf.booleanToHclTerraform(struct!.enableCookies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_trust_store: {
      value: cdktf.booleanToHclTerraform(struct!.useTrustStore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_agent_suffix: {
      value: cdktf.stringToHclTerraform(struct!.userAgentSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryNpmProxyHttpClientConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryNpmProxyHttpClientConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCircularRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCircularRedirects = this._enableCircularRedirects;
    }
    if (this._enableCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCookies = this._enableCookies;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._useTrustStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTrustStore = this._useTrustStore;
    }
    if (this._userAgentSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentSuffix = this._userAgentSuffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryNpmProxyHttpClientConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableCircularRedirects = undefined;
      this._enableCookies = undefined;
      this._retries = undefined;
      this._timeout = undefined;
      this._useTrustStore = undefined;
      this._userAgentSuffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableCircularRedirects = value.enableCircularRedirects;
      this._enableCookies = value.enableCookies;
      this._retries = value.retries;
      this._timeout = value.timeout;
      this._useTrustStore = value.useTrustStore;
      this._userAgentSuffix = value.userAgentSuffix;
    }
  }

  // enable_circular_redirects - computed: false, optional: true, required: false
  private _enableCircularRedirects?: boolean | cdktf.IResolvable; 
  public get enableCircularRedirects() {
    return this.getBooleanAttribute('enable_circular_redirects');
  }
  public set enableCircularRedirects(value: boolean | cdktf.IResolvable) {
    this._enableCircularRedirects = value;
  }
  public resetEnableCircularRedirects() {
    this._enableCircularRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCircularRedirectsInput() {
    return this._enableCircularRedirects;
  }

  // enable_cookies - computed: false, optional: true, required: false
  private _enableCookies?: boolean | cdktf.IResolvable; 
  public get enableCookies() {
    return this.getBooleanAttribute('enable_cookies');
  }
  public set enableCookies(value: boolean | cdktf.IResolvable) {
    this._enableCookies = value;
  }
  public resetEnableCookies() {
    this._enableCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCookiesInput() {
    return this._enableCookies;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // use_trust_store - computed: false, optional: true, required: false
  private _useTrustStore?: boolean | cdktf.IResolvable; 
  public get useTrustStore() {
    return this.getBooleanAttribute('use_trust_store');
  }
  public set useTrustStore(value: boolean | cdktf.IResolvable) {
    this._useTrustStore = value;
  }
  public resetUseTrustStore() {
    this._useTrustStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTrustStoreInput() {
    return this._useTrustStore;
  }

  // user_agent_suffix - computed: false, optional: true, required: false
  private _userAgentSuffix?: string; 
  public get userAgentSuffix() {
    return this.getStringAttribute('user_agent_suffix');
  }
  public set userAgentSuffix(value: string) {
    this._userAgentSuffix = value;
  }
  public resetUserAgentSuffix() {
    this._userAgentSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentSuffixInput() {
    return this._userAgentSuffix;
  }
}
export interface RepositoryNpmProxyHttpClient {
  /**
  * Whether to auto-block outbound connections if remote peer is detected as unreachable/unresponsive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#auto_block RepositoryNpmProxy#auto_block}
  */
  readonly autoBlock: boolean | cdktf.IResolvable;
  /**
  * Whether to block outbound connections on the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#blocked RepositoryNpmProxy#blocked}
  */
  readonly blocked: boolean | cdktf.IResolvable;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#authentication RepositoryNpmProxy#authentication}
  */
  readonly authentication?: RepositoryNpmProxyHttpClientAuthentication;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#connection RepositoryNpmProxy#connection}
  */
  readonly connection?: RepositoryNpmProxyHttpClientConnection;
}

export function repositoryNpmProxyHttpClientToTerraform(struct?: RepositoryNpmProxyHttpClientOutputReference | RepositoryNpmProxyHttpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_block: cdktf.booleanToTerraform(struct!.autoBlock),
    blocked: cdktf.booleanToTerraform(struct!.blocked),
    authentication: repositoryNpmProxyHttpClientAuthenticationToTerraform(struct!.authentication),
    connection: repositoryNpmProxyHttpClientConnectionToTerraform(struct!.connection),
  }
}


export function repositoryNpmProxyHttpClientToHclTerraform(struct?: RepositoryNpmProxyHttpClientOutputReference | RepositoryNpmProxyHttpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_block: {
      value: cdktf.booleanToHclTerraform(struct!.autoBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blocked: {
      value: cdktf.booleanToHclTerraform(struct!.blocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authentication: {
      value: repositoryNpmProxyHttpClientAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryNpmProxyHttpClientAuthenticationList",
    },
    connection: {
      value: repositoryNpmProxyHttpClientConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryNpmProxyHttpClientConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryNpmProxyHttpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryNpmProxyHttpClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBlock = this._autoBlock;
    }
    if (this._blocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocked = this._blocked;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryNpmProxyHttpClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoBlock = undefined;
      this._blocked = undefined;
      this._authentication.internalValue = undefined;
      this._connection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoBlock = value.autoBlock;
      this._blocked = value.blocked;
      this._authentication.internalValue = value.authentication;
      this._connection.internalValue = value.connection;
    }
  }

  // auto_block - computed: false, optional: false, required: true
  private _autoBlock?: boolean | cdktf.IResolvable; 
  public get autoBlock() {
    return this.getBooleanAttribute('auto_block');
  }
  public set autoBlock(value: boolean | cdktf.IResolvable) {
    this._autoBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBlockInput() {
    return this._autoBlock;
  }

  // blocked - computed: false, optional: false, required: true
  private _blocked?: boolean | cdktf.IResolvable; 
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }
  public set blocked(value: boolean | cdktf.IResolvable) {
    this._blocked = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new RepositoryNpmProxyHttpClientAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: RepositoryNpmProxyHttpClientAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new RepositoryNpmProxyHttpClientConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: RepositoryNpmProxyHttpClientConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }
}
export interface RepositoryNpmProxyNegativeCache {
  /**
  * Whether to cache responses for content not present in the proxied repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#enabled RepositoryNpmProxy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * How long to cache the fact that a file was not found in the repository (in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#ttl RepositoryNpmProxy#ttl}
  */
  readonly ttl: number;
}

export function repositoryNpmProxyNegativeCacheToTerraform(struct?: RepositoryNpmProxyNegativeCacheOutputReference | RepositoryNpmProxyNegativeCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function repositoryNpmProxyNegativeCacheToHclTerraform(struct?: RepositoryNpmProxyNegativeCacheOutputReference | RepositoryNpmProxyNegativeCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryNpmProxyNegativeCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryNpmProxyNegativeCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryNpmProxyNegativeCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._ttl = value.ttl;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface RepositoryNpmProxyProxy {
  /**
  * How long (in minutes) to cache artifacts before rechecking the remote repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#content_max_age RepositoryNpmProxy#content_max_age}
  */
  readonly contentMaxAge?: number;
  /**
  * How long (in minutes) to cache metadata before rechecking the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#metadata_max_age RepositoryNpmProxy#metadata_max_age}
  */
  readonly metadataMaxAge?: number;
  /**
  * Location of the remote repository being proxied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#remote_url RepositoryNpmProxy#remote_url}
  */
  readonly remoteUrl: string;
}

export function repositoryNpmProxyProxyToTerraform(struct?: RepositoryNpmProxyProxyOutputReference | RepositoryNpmProxyProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_max_age: cdktf.numberToTerraform(struct!.contentMaxAge),
    metadata_max_age: cdktf.numberToTerraform(struct!.metadataMaxAge),
    remote_url: cdktf.stringToTerraform(struct!.remoteUrl),
  }
}


export function repositoryNpmProxyProxyToHclTerraform(struct?: RepositoryNpmProxyProxyOutputReference | RepositoryNpmProxyProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_max_age: {
      value: cdktf.numberToHclTerraform(struct!.contentMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata_max_age: {
      value: cdktf.numberToHclTerraform(struct!.metadataMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_url: {
      value: cdktf.stringToHclTerraform(struct!.remoteUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryNpmProxyProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryNpmProxyProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentMaxAge = this._contentMaxAge;
    }
    if (this._metadataMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataMaxAge = this._metadataMaxAge;
    }
    if (this._remoteUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteUrl = this._remoteUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryNpmProxyProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentMaxAge = undefined;
      this._metadataMaxAge = undefined;
      this._remoteUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentMaxAge = value.contentMaxAge;
      this._metadataMaxAge = value.metadataMaxAge;
      this._remoteUrl = value.remoteUrl;
    }
  }

  // content_max_age - computed: false, optional: true, required: false
  private _contentMaxAge?: number; 
  public get contentMaxAge() {
    return this.getNumberAttribute('content_max_age');
  }
  public set contentMaxAge(value: number) {
    this._contentMaxAge = value;
  }
  public resetContentMaxAge() {
    this._contentMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMaxAgeInput() {
    return this._contentMaxAge;
  }

  // metadata_max_age - computed: false, optional: true, required: false
  private _metadataMaxAge?: number; 
  public get metadataMaxAge() {
    return this.getNumberAttribute('metadata_max_age');
  }
  public set metadataMaxAge(value: number) {
    this._metadataMaxAge = value;
  }
  public resetMetadataMaxAge() {
    this._metadataMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataMaxAgeInput() {
    return this._metadataMaxAge;
  }

  // remote_url - computed: false, optional: false, required: true
  private _remoteUrl?: string; 
  public get remoteUrl() {
    return this.getStringAttribute('remote_url');
  }
  public set remoteUrl(value: string) {
    this._remoteUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUrlInput() {
    return this._remoteUrl;
  }
}
export interface RepositoryNpmProxyStorage {
  /**
  * Blob store used to store repository contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#blob_store_name RepositoryNpmProxy#blob_store_name}
  */
  readonly blobStoreName: string;
  /**
  * Whether to validate uploaded content's MIME type appropriate for the repository format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#strict_content_type_validation RepositoryNpmProxy#strict_content_type_validation}
  */
  readonly strictContentTypeValidation?: boolean | cdktf.IResolvable;
}

export function repositoryNpmProxyStorageToTerraform(struct?: RepositoryNpmProxyStorageOutputReference | RepositoryNpmProxyStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_store_name: cdktf.stringToTerraform(struct!.blobStoreName),
    strict_content_type_validation: cdktf.booleanToTerraform(struct!.strictContentTypeValidation),
  }
}


export function repositoryNpmProxyStorageToHclTerraform(struct?: RepositoryNpmProxyStorageOutputReference | RepositoryNpmProxyStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob_store_name: {
      value: cdktf.stringToHclTerraform(struct!.blobStoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_content_type_validation: {
      value: cdktf.booleanToHclTerraform(struct!.strictContentTypeValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryNpmProxyStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryNpmProxyStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobStoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobStoreName = this._blobStoreName;
    }
    if (this._strictContentTypeValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictContentTypeValidation = this._strictContentTypeValidation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryNpmProxyStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobStoreName = undefined;
      this._strictContentTypeValidation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobStoreName = value.blobStoreName;
      this._strictContentTypeValidation = value.strictContentTypeValidation;
    }
  }

  // blob_store_name - computed: false, optional: false, required: true
  private _blobStoreName?: string; 
  public get blobStoreName() {
    return this.getStringAttribute('blob_store_name');
  }
  public set blobStoreName(value: string) {
    this._blobStoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blobStoreNameInput() {
    return this._blobStoreName;
  }

  // strict_content_type_validation - computed: false, optional: true, required: false
  private _strictContentTypeValidation?: boolean | cdktf.IResolvable; 
  public get strictContentTypeValidation() {
    return this.getBooleanAttribute('strict_content_type_validation');
  }
  public set strictContentTypeValidation(value: boolean | cdktf.IResolvable) {
    this._strictContentTypeValidation = value;
  }
  public resetStrictContentTypeValidation() {
    this._strictContentTypeValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictContentTypeValidationInput() {
    return this._strictContentTypeValidation;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy nexus_repository_npm_proxy}
*/
export class RepositoryNpmProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_repository_npm_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryNpmProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryNpmProxy to import
  * @param importFromId The id of the existing RepositoryNpmProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryNpmProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_repository_npm_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_npm_proxy nexus_repository_npm_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryNpmProxyConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryNpmProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_repository_npm_proxy',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._online = config.online;
    this._removeNonCataloged = config.removeNonCataloged;
    this._removeQuarantined = config.removeQuarantined;
    this._routingRule = config.routingRule;
    this._cleanup.internalValue = config.cleanup;
    this._httpClient.internalValue = config.httpClient;
    this._negativeCache.internalValue = config.negativeCache;
    this._proxy.internalValue = config.proxy;
    this._storage.internalValue = config.storage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // online - computed: false, optional: true, required: false
  private _online?: boolean | cdktf.IResolvable; 
  public get online() {
    return this.getBooleanAttribute('online');
  }
  public set online(value: boolean | cdktf.IResolvable) {
    this._online = value;
  }
  public resetOnline() {
    this._online = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineInput() {
    return this._online;
  }

  // remove_non_cataloged - computed: false, optional: true, required: false
  private _removeNonCataloged?: boolean | cdktf.IResolvable; 
  public get removeNonCataloged() {
    return this.getBooleanAttribute('remove_non_cataloged');
  }
  public set removeNonCataloged(value: boolean | cdktf.IResolvable) {
    this._removeNonCataloged = value;
  }
  public resetRemoveNonCataloged() {
    this._removeNonCataloged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeNonCatalogedInput() {
    return this._removeNonCataloged;
  }

  // remove_quarantined - computed: false, optional: true, required: false
  private _removeQuarantined?: boolean | cdktf.IResolvable; 
  public get removeQuarantined() {
    return this.getBooleanAttribute('remove_quarantined');
  }
  public set removeQuarantined(value: boolean | cdktf.IResolvable) {
    this._removeQuarantined = value;
  }
  public resetRemoveQuarantined() {
    this._removeQuarantined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeQuarantinedInput() {
    return this._removeQuarantined;
  }

  // routing_rule - computed: false, optional: true, required: false
  private _routingRule?: string; 
  public get routingRule() {
    return this.getStringAttribute('routing_rule');
  }
  public set routingRule(value: string) {
    this._routingRule = value;
  }
  public resetRoutingRule() {
    this._routingRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRuleInput() {
    return this._routingRule;
  }

  // cleanup - computed: false, optional: true, required: false
  private _cleanup = new RepositoryNpmProxyCleanupList(this, "cleanup", false);
  public get cleanup() {
    return this._cleanup;
  }
  public putCleanup(value: RepositoryNpmProxyCleanup[] | cdktf.IResolvable) {
    this._cleanup.internalValue = value;
  }
  public resetCleanup() {
    this._cleanup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupInput() {
    return this._cleanup.internalValue;
  }

  // http_client - computed: false, optional: false, required: true
  private _httpClient = new RepositoryNpmProxyHttpClientOutputReference(this, "http_client");
  public get httpClient() {
    return this._httpClient;
  }
  public putHttpClient(value: RepositoryNpmProxyHttpClient) {
    this._httpClient.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientInput() {
    return this._httpClient.internalValue;
  }

  // negative_cache - computed: false, optional: false, required: true
  private _negativeCache = new RepositoryNpmProxyNegativeCacheOutputReference(this, "negative_cache");
  public get negativeCache() {
    return this._negativeCache;
  }
  public putNegativeCache(value: RepositoryNpmProxyNegativeCache) {
    this._negativeCache.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCacheInput() {
    return this._negativeCache.internalValue;
  }

  // proxy - computed: false, optional: false, required: true
  private _proxy = new RepositoryNpmProxyProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: RepositoryNpmProxyProxy) {
    this._proxy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new RepositoryNpmProxyStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: RepositoryNpmProxyStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      online: cdktf.booleanToTerraform(this._online),
      remove_non_cataloged: cdktf.booleanToTerraform(this._removeNonCataloged),
      remove_quarantined: cdktf.booleanToTerraform(this._removeQuarantined),
      routing_rule: cdktf.stringToTerraform(this._routingRule),
      cleanup: cdktf.listMapper(repositoryNpmProxyCleanupToTerraform, true)(this._cleanup.internalValue),
      http_client: repositoryNpmProxyHttpClientToTerraform(this._httpClient.internalValue),
      negative_cache: repositoryNpmProxyNegativeCacheToTerraform(this._negativeCache.internalValue),
      proxy: repositoryNpmProxyProxyToTerraform(this._proxy.internalValue),
      storage: repositoryNpmProxyStorageToTerraform(this._storage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      online: {
        value: cdktf.booleanToHclTerraform(this._online),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_non_cataloged: {
        value: cdktf.booleanToHclTerraform(this._removeNonCataloged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_quarantined: {
        value: cdktf.booleanToHclTerraform(this._removeQuarantined),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_rule: {
        value: cdktf.stringToHclTerraform(this._routingRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cleanup: {
        value: cdktf.listMapperHcl(repositoryNpmProxyCleanupToHclTerraform, true)(this._cleanup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryNpmProxyCleanupList",
      },
      http_client: {
        value: repositoryNpmProxyHttpClientToHclTerraform(this._httpClient.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryNpmProxyHttpClientList",
      },
      negative_cache: {
        value: repositoryNpmProxyNegativeCacheToHclTerraform(this._negativeCache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryNpmProxyNegativeCacheList",
      },
      proxy: {
        value: repositoryNpmProxyProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryNpmProxyProxyList",
      },
      storage: {
        value: repositoryNpmProxyStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryNpmProxyStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
