// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiCrawlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#annotations ApiCrawler#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#description ApiCrawler#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#disable ApiCrawler#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#id ApiCrawler#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#labels ApiCrawler#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#name ApiCrawler#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#namespace ApiCrawler#namespace}
  */
  readonly namespace: string;
  /**
  * domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#domains ApiCrawler#domains}
  */
  readonly domains: ApiCrawlerDomains[] | cdktf.IResolvable;
}
export interface ApiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#decryption_provider ApiCrawler#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#location ApiCrawler#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#store_provider ApiCrawler#store_provider}
  */
  readonly storeProvider?: string;
}

export function apiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct?: ApiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference | ApiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function apiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct?: ApiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference | ApiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface ApiCrawlerDomainsSimpleLoginPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#provider ApiCrawler#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#url ApiCrawler#url}
  */
  readonly url: string;
}

export function apiCrawlerDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct?: ApiCrawlerDomainsSimpleLoginPasswordClearSecretInfoOutputReference | ApiCrawlerDomainsSimpleLoginPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function apiCrawlerDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct?: ApiCrawlerDomainsSimpleLoginPasswordClearSecretInfoOutputReference | ApiCrawlerDomainsSimpleLoginPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiCrawlerDomainsSimpleLoginPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiCrawlerDomainsSimpleLoginPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiCrawlerDomainsSimpleLoginPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ApiCrawlerDomainsSimpleLoginPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#blindfold_secret_info ApiCrawler#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: ApiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#clear_secret_info ApiCrawler#clear_secret_info}
  */
  readonly clearSecretInfo?: ApiCrawlerDomainsSimpleLoginPasswordClearSecretInfo;
}

export function apiCrawlerDomainsSimpleLoginPasswordToTerraform(struct?: ApiCrawlerDomainsSimpleLoginPasswordOutputReference | ApiCrawlerDomainsSimpleLoginPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: apiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: apiCrawlerDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function apiCrawlerDomainsSimpleLoginPasswordToHclTerraform(struct?: ApiCrawlerDomainsSimpleLoginPasswordOutputReference | ApiCrawlerDomainsSimpleLoginPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: apiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: apiCrawlerDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApiCrawlerDomainsSimpleLoginPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiCrawlerDomainsSimpleLoginPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiCrawlerDomainsSimpleLoginPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiCrawlerDomainsSimpleLoginPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new ApiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: ApiCrawlerDomainsSimpleLoginPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new ApiCrawlerDomainsSimpleLoginPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: ApiCrawlerDomainsSimpleLoginPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface ApiCrawlerDomainsSimpleLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#user ApiCrawler#user}
  */
  readonly user?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#password ApiCrawler#password}
  */
  readonly password?: ApiCrawlerDomainsSimpleLoginPassword;
}

export function apiCrawlerDomainsSimpleLoginToTerraform(struct?: ApiCrawlerDomainsSimpleLoginOutputReference | ApiCrawlerDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user: cdktf.stringToTerraform(struct!.user),
    password: apiCrawlerDomainsSimpleLoginPasswordToTerraform(struct!.password),
  }
}


export function apiCrawlerDomainsSimpleLoginToHclTerraform(struct?: ApiCrawlerDomainsSimpleLoginOutputReference | ApiCrawlerDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: apiCrawlerDomainsSimpleLoginPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "ApiCrawlerDomainsSimpleLoginPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiCrawlerDomainsSimpleLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiCrawlerDomainsSimpleLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiCrawlerDomainsSimpleLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._user = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._user = value.user;
      this._password.internalValue = value.password;
    }
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // password - computed: false, optional: true, required: false
  private _password = new ApiCrawlerDomainsSimpleLoginPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ApiCrawlerDomainsSimpleLoginPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface ApiCrawlerDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#domain ApiCrawler#domain}
  */
  readonly domain: string;
  /**
  * simple_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#simple_login ApiCrawler#simple_login}
  */
  readonly simpleLogin?: ApiCrawlerDomainsSimpleLogin;
}

export function apiCrawlerDomainsToTerraform(struct?: ApiCrawlerDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    simple_login: apiCrawlerDomainsSimpleLoginToTerraform(struct!.simpleLogin),
  }
}


export function apiCrawlerDomainsToHclTerraform(struct?: ApiCrawlerDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    simple_login: {
      value: apiCrawlerDomainsSimpleLoginToHclTerraform(struct!.simpleLogin),
      isBlock: true,
      type: "list",
      storageClassType: "ApiCrawlerDomainsSimpleLoginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiCrawlerDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiCrawlerDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._simpleLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleLogin = this._simpleLogin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiCrawlerDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._simpleLogin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._simpleLogin.internalValue = value.simpleLogin;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // simple_login - computed: false, optional: true, required: false
  private _simpleLogin = new ApiCrawlerDomainsSimpleLoginOutputReference(this, "simple_login");
  public get simpleLogin() {
    return this._simpleLogin;
  }
  public putSimpleLogin(value: ApiCrawlerDomainsSimpleLogin) {
    this._simpleLogin.internalValue = value;
  }
  public resetSimpleLogin() {
    this._simpleLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleLoginInput() {
    return this._simpleLogin.internalValue;
  }
}

export class ApiCrawlerDomainsList extends cdktf.ComplexList {
  public internalValue? : ApiCrawlerDomains[] | cdktf.IResolvable

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
  public get(index: number): ApiCrawlerDomainsOutputReference {
    return new ApiCrawlerDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler volterra_api_crawler}
*/
export class ApiCrawler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_api_crawler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiCrawler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiCrawler to import
  * @param importFromId The id of the existing ApiCrawler that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiCrawler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_api_crawler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_crawler volterra_api_crawler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiCrawlerConfig
  */
  public constructor(scope: Construct, id: string, config: ApiCrawlerConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_api_crawler',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._domains.internalValue = config.domains;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // domains - computed: false, optional: false, required: true
  private _domains = new ApiCrawlerDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: ApiCrawlerDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      domains: cdktf.listMapper(apiCrawlerDomainsToTerraform, true)(this._domains.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(apiCrawlerDomainsToHclTerraform, true)(this._domains.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiCrawlerDomainsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
