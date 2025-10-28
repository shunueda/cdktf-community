// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseBundleCustomWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of webhook. Max length 1000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#description ReleaseBundleCustomWebhook#description}
  */
  readonly description?: string;
  /**
  * Status of webhook. Default to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#enabled ReleaseBundleCustomWebhook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of Events in Artifactory, Distribution, Release Bundle that function as the event trigger for the Webhook.
  * Allow values: deployed, deleted, moved, copied, cached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#event_types ReleaseBundleCustomWebhook#event_types}
  */
  readonly eventTypes: string[];
  /**
  * Key of webhook. Must be between 2 and 200 characters. Cannot contain spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#key ReleaseBundleCustomWebhook#key}
  */
  readonly key: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#criteria ReleaseBundleCustomWebhook#criteria}
  */
  readonly criteria?: ReleaseBundleCustomWebhookCriteria[] | cdktf.IResolvable;
  /**
  * handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#handler ReleaseBundleCustomWebhook#handler}
  */
  readonly handler?: ReleaseBundleCustomWebhookHandler[] | cdktf.IResolvable;
}
export interface ReleaseBundleCustomWebhookCriteria {
  /**
  * Trigger on any release bundles or distributions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#any_release_bundle ReleaseBundleCustomWebhook#any_release_bundle}
  */
  readonly anyReleaseBundle: boolean | cdktf.IResolvable;
  /**
  * Simple wildcard patterns for Release Bundle names.
  * Ant-style path expressions are supported (*, **, ?).
  * For example: `product_*`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#exclude_patterns ReleaseBundleCustomWebhook#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * Simple wildcard patterns for Release Bundle names.
  * Ant-style path expressions are supported (*, **, ?).
  * For example: `product_*`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#include_patterns ReleaseBundleCustomWebhook#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * Trigger on this list of release bundle names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#registered_release_bundle_names ReleaseBundleCustomWebhook#registered_release_bundle_names}
  */
  readonly registeredReleaseBundleNames: string[];
}

export function releaseBundleCustomWebhookCriteriaToTerraform(struct?: ReleaseBundleCustomWebhookCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_release_bundle: cdktf.booleanToTerraform(struct!.anyReleaseBundle),
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
    registered_release_bundle_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.registeredReleaseBundleNames),
  }
}


export function releaseBundleCustomWebhookCriteriaToHclTerraform(struct?: ReleaseBundleCustomWebhookCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_release_bundle: {
      value: cdktf.booleanToHclTerraform(struct!.anyReleaseBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    registered_release_bundle_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.registeredReleaseBundleNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseBundleCustomWebhookCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseBundleCustomWebhookCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyReleaseBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyReleaseBundle = this._anyReleaseBundle;
    }
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    if (this._includePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePatterns = this._includePatterns;
    }
    if (this._registeredReleaseBundleNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.registeredReleaseBundleNames = this._registeredReleaseBundleNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleCustomWebhookCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyReleaseBundle = undefined;
      this._excludePatterns = undefined;
      this._includePatterns = undefined;
      this._registeredReleaseBundleNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyReleaseBundle = value.anyReleaseBundle;
      this._excludePatterns = value.excludePatterns;
      this._includePatterns = value.includePatterns;
      this._registeredReleaseBundleNames = value.registeredReleaseBundleNames;
    }
  }

  // any_release_bundle - computed: false, optional: false, required: true
  private _anyReleaseBundle?: boolean | cdktf.IResolvable; 
  public get anyReleaseBundle() {
    return this.getBooleanAttribute('any_release_bundle');
  }
  public set anyReleaseBundle(value: boolean | cdktf.IResolvable) {
    this._anyReleaseBundle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyReleaseBundleInput() {
    return this._anyReleaseBundle;
  }

  // exclude_patterns - computed: false, optional: true, required: false
  private _excludePatterns?: string[]; 
  public get excludePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_patterns'));
  }
  public set excludePatterns(value: string[]) {
    this._excludePatterns = value;
  }
  public resetExcludePatterns() {
    this._excludePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternsInput() {
    return this._excludePatterns;
  }

  // include_patterns - computed: false, optional: true, required: false
  private _includePatterns?: string[]; 
  public get includePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('include_patterns'));
  }
  public set includePatterns(value: string[]) {
    this._includePatterns = value;
  }
  public resetIncludePatterns() {
    this._includePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePatternsInput() {
    return this._includePatterns;
  }

  // registered_release_bundle_names - computed: false, optional: false, required: true
  private _registeredReleaseBundleNames?: string[]; 
  public get registeredReleaseBundleNames() {
    return cdktf.Fn.tolist(this.getListAttribute('registered_release_bundle_names'));
  }
  public set registeredReleaseBundleNames(value: string[]) {
    this._registeredReleaseBundleNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredReleaseBundleNamesInput() {
    return this._registeredReleaseBundleNames;
  }
}

export class ReleaseBundleCustomWebhookCriteriaList extends cdktf.ComplexList {
  public internalValue? : ReleaseBundleCustomWebhookCriteria[] | cdktf.IResolvable

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
  public get(index: number): ReleaseBundleCustomWebhookCriteriaOutputReference {
    return new ReleaseBundleCustomWebhookCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseBundleCustomWebhookHandler {
  /**
  * HTTP headers you wish to use to invoke the Webhook, comprise of key/value pair. Used in custom webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#http_headers ReleaseBundleCustomWebhook#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Specifies the HTTP Method for URL that the Webhook invokes. Allowed values are: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#method ReleaseBundleCustomWebhook#method}
  */
  readonly method?: string;
  /**
  * This attribute is used to build the request body. Used in custom webhooks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#payload ReleaseBundleCustomWebhook#payload}
  */
  readonly payload?: string;
  /**
  * Proxy key from Artifactory Proxies setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#proxy ReleaseBundleCustomWebhook#proxy}
  */
  readonly proxy?: string;
  /**
  * A set of sensitive values that will be injected in the request (headers and/or payload), comprise of key/value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#secrets ReleaseBundleCustomWebhook#secrets}
  */
  readonly secrets?: { [key: string]: string };
  /**
  * Specifies the URL that the Webhook invokes. This will be the URL that Artifactory will send an HTTP POST request to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#url ReleaseBundleCustomWebhook#url}
  */
  readonly url: string;
}

export function releaseBundleCustomWebhookHandlerToTerraform(struct?: ReleaseBundleCustomWebhookHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
    method: cdktf.stringToTerraform(struct!.method),
    payload: cdktf.stringToTerraform(struct!.payload),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    secrets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secrets),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function releaseBundleCustomWebhookHandlerToHclTerraform(struct?: ReleaseBundleCustomWebhookHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.secrets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class ReleaseBundleCustomWebhookHandlerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseBundleCustomWebhookHandler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleCustomWebhookHandler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpHeaders = undefined;
      this._method = undefined;
      this._payload = undefined;
      this._proxy = undefined;
      this._secrets = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpHeaders = value.httpHeaders;
      this._method = value.method;
      this._payload = value.payload;
      this._proxy = value.proxy;
      this._secrets = value.secrets;
      this._url = value.url;
    }
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: { [key: string]: string }; 
  public get secrets() {
    return this.getStringMapAttribute('secrets');
  }
  public set secrets(value: { [key: string]: string }) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
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

export class ReleaseBundleCustomWebhookHandlerList extends cdktf.ComplexList {
  public internalValue? : ReleaseBundleCustomWebhookHandler[] | cdktf.IResolvable

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
  public get(index: number): ReleaseBundleCustomWebhookHandlerOutputReference {
    return new ReleaseBundleCustomWebhookHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook artifactory_release_bundle_custom_webhook}
*/
export class ReleaseBundleCustomWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_release_bundle_custom_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReleaseBundleCustomWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReleaseBundleCustomWebhook to import
  * @param importFromId The id of the existing ReleaseBundleCustomWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReleaseBundleCustomWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_release_bundle_custom_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_custom_webhook artifactory_release_bundle_custom_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseBundleCustomWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: ReleaseBundleCustomWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_release_bundle_custom_webhook',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._eventTypes = config.eventTypes;
    this._key = config.key;
    this._criteria.internalValue = config.criteria;
    this._handler.internalValue = config.handler;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event_types - computed: false, optional: false, required: true
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('event_types'));
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new ReleaseBundleCustomWebhookCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: ReleaseBundleCustomWebhookCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // handler - computed: false, optional: true, required: false
  private _handler = new ReleaseBundleCustomWebhookHandlerList(this, "handler", true);
  public get handler() {
    return this._handler;
  }
  public putHandler(value: ReleaseBundleCustomWebhookHandler[] | cdktf.IResolvable) {
    this._handler.internalValue = value;
  }
  public resetHandler() {
    this._handler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventTypes),
      key: cdktf.stringToTerraform(this._key),
      criteria: cdktf.listMapper(releaseBundleCustomWebhookCriteriaToTerraform, true)(this._criteria.internalValue),
      handler: cdktf.listMapper(releaseBundleCustomWebhookHandlerToTerraform, true)(this._handler.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      criteria: {
        value: cdktf.listMapperHcl(releaseBundleCustomWebhookCriteriaToHclTerraform, true)(this._criteria.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ReleaseBundleCustomWebhookCriteriaList",
      },
      handler: {
        value: cdktf.listMapperHcl(releaseBundleCustomWebhookHandlerToHclTerraform, true)(this._handler.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ReleaseBundleCustomWebhookHandlerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
