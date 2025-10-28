// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of webhook. Max length 1000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook#description UserWebhook#description}
  */
  readonly description?: string;
  /**
  * Status of webhook. Default to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook#enabled UserWebhook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of Events in Artifactory, Distribution, Release Bundle that function as the event trigger for the Webhook.
  * Allow values: deployed, deleted, moved, copied, cached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook#event_types UserWebhook#event_types}
  */
  readonly eventTypes: string[];
  /**
  * Key of webhook. Must be between 2 and 200 characters. Cannot contain spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook#key UserWebhook#key}
  */
  readonly key: string;
  /**
  * handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook#handler UserWebhook#handler}
  */
  readonly handler?: UserWebhookHandler[] | cdktf.IResolvable;
}
export interface UserWebhookHandler {
  /**
  * Custom HTTP headers you wish to use to invoke the Webhook, comprise of key/value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook#custom_http_headers UserWebhook#custom_http_headers}
  */
  readonly customHttpHeaders?: { [key: string]: string };
  /**
  * Proxy key from Artifactory Proxies setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook#proxy UserWebhook#proxy}
  */
  readonly proxy?: string;
  /**
  * Secret authentication token that will be sent to the configured URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook#secret UserWebhook#secret}
  */
  readonly secret?: string;
  /**
  * Specifies the URL that the Webhook invokes. This will be the URL that Artifactory will send an HTTP POST request to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook#url UserWebhook#url}
  */
  readonly url: string;
  /**
  * When set to `true`, the secret will be used to sign the event payload, allowing the target to validate that the payload content has not been changed and will not be passed as part of the event. If left unset or set to `false`, the secret is passed through the `X-JFrog-Event-Auth` HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook#use_secret_for_signing UserWebhook#use_secret_for_signing}
  */
  readonly useSecretForSigning?: boolean | cdktf.IResolvable;
}

export function userWebhookHandlerToTerraform(struct?: UserWebhookHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customHttpHeaders),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    secret: cdktf.stringToTerraform(struct!.secret),
    url: cdktf.stringToTerraform(struct!.url),
    use_secret_for_signing: cdktf.booleanToTerraform(struct!.useSecretForSigning),
  }
}


export function userWebhookHandlerToHclTerraform(struct?: UserWebhookHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customHttpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
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
    use_secret_for_signing: {
      value: cdktf.booleanToHclTerraform(struct!.useSecretForSigning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserWebhookHandlerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserWebhookHandler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHttpHeaders = this._customHttpHeaders;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useSecretForSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSecretForSigning = this._useSecretForSigning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserWebhookHandler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customHttpHeaders = undefined;
      this._proxy = undefined;
      this._secret = undefined;
      this._url = undefined;
      this._useSecretForSigning = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customHttpHeaders = value.customHttpHeaders;
      this._proxy = value.proxy;
      this._secret = value.secret;
      this._url = value.url;
      this._useSecretForSigning = value.useSecretForSigning;
    }
  }

  // custom_http_headers - computed: false, optional: true, required: false
  private _customHttpHeaders?: { [key: string]: string }; 
  public get customHttpHeaders() {
    return this.getStringMapAttribute('custom_http_headers');
  }
  public set customHttpHeaders(value: { [key: string]: string }) {
    this._customHttpHeaders = value;
  }
  public resetCustomHttpHeaders() {
    this._customHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHttpHeadersInput() {
    return this._customHttpHeaders;
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

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
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

  // use_secret_for_signing - computed: false, optional: true, required: false
  private _useSecretForSigning?: boolean | cdktf.IResolvable; 
  public get useSecretForSigning() {
    return this.getBooleanAttribute('use_secret_for_signing');
  }
  public set useSecretForSigning(value: boolean | cdktf.IResolvable) {
    this._useSecretForSigning = value;
  }
  public resetUseSecretForSigning() {
    this._useSecretForSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSecretForSigningInput() {
    return this._useSecretForSigning;
  }
}

export class UserWebhookHandlerList extends cdktf.ComplexList {
  public internalValue? : UserWebhookHandler[] | cdktf.IResolvable

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
  public get(index: number): UserWebhookHandlerOutputReference {
    return new UserWebhookHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook artifactory_user_webhook}
*/
export class UserWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_user_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserWebhook to import
  * @param importFromId The id of the existing UserWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_user_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/user_webhook artifactory_user_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: UserWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_user_webhook',
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

  // handler - computed: false, optional: true, required: false
  private _handler = new UserWebhookHandlerList(this, "handler", true);
  public get handler() {
    return this._handler;
  }
  public putHandler(value: UserWebhookHandler[] | cdktf.IResolvable) {
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
      handler: cdktf.listMapper(userWebhookHandlerToTerraform, true)(this._handler.internalValue),
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
      handler: {
        value: cdktf.listMapperHcl(userWebhookHandlerToHclTerraform, true)(this._handler.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserWebhookHandlerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
