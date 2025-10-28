// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebproxyProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#dynamic_sort_subtable WebproxyProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#get_all_tables WebproxyProfile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#header_client_ip WebproxyProfile#header_client_ip}
  */
  readonly headerClientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#header_front_end_https WebproxyProfile#header_front_end_https}
  */
  readonly headerFrontEndHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#header_via_request WebproxyProfile#header_via_request}
  */
  readonly headerViaRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#header_via_response WebproxyProfile#header_via_response}
  */
  readonly headerViaResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#header_x_authenticated_groups WebproxyProfile#header_x_authenticated_groups}
  */
  readonly headerXAuthenticatedGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#header_x_authenticated_user WebproxyProfile#header_x_authenticated_user}
  */
  readonly headerXAuthenticatedUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#header_x_forwarded_client_cert WebproxyProfile#header_x_forwarded_client_cert}
  */
  readonly headerXForwardedClientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#header_x_forwarded_for WebproxyProfile#header_x_forwarded_for}
  */
  readonly headerXForwardedFor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#id WebproxyProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#log_header_change WebproxyProfile#log_header_change}
  */
  readonly logHeaderChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#name WebproxyProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#strip_encoding WebproxyProfile#strip_encoding}
  */
  readonly stripEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#vdomparam WebproxyProfile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#headers WebproxyProfile#headers}
  */
  readonly headers?: WebproxyProfileHeaders[] | cdktf.IResolvable;
}
export interface WebproxyProfileHeadersDstaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#name WebproxyProfile#name}
  */
  readonly name?: string;
}

export function webproxyProfileHeadersDstaddrToTerraform(struct?: WebproxyProfileHeadersDstaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webproxyProfileHeadersDstaddrToHclTerraform(struct?: WebproxyProfileHeadersDstaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebproxyProfileHeadersDstaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebproxyProfileHeadersDstaddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebproxyProfileHeadersDstaddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class WebproxyProfileHeadersDstaddrList extends cdktf.ComplexList {
  public internalValue? : WebproxyProfileHeadersDstaddr[] | cdktf.IResolvable

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
  public get(index: number): WebproxyProfileHeadersDstaddrOutputReference {
    return new WebproxyProfileHeadersDstaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebproxyProfileHeadersDstaddr6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#name WebproxyProfile#name}
  */
  readonly name?: string;
}

export function webproxyProfileHeadersDstaddr6ToTerraform(struct?: WebproxyProfileHeadersDstaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webproxyProfileHeadersDstaddr6ToHclTerraform(struct?: WebproxyProfileHeadersDstaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebproxyProfileHeadersDstaddr6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebproxyProfileHeadersDstaddr6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebproxyProfileHeadersDstaddr6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class WebproxyProfileHeadersDstaddr6List extends cdktf.ComplexList {
  public internalValue? : WebproxyProfileHeadersDstaddr6[] | cdktf.IResolvable

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
  public get(index: number): WebproxyProfileHeadersDstaddr6OutputReference {
    return new WebproxyProfileHeadersDstaddr6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebproxyProfileHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#action WebproxyProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#add_option WebproxyProfile#add_option}
  */
  readonly addOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#base64_encoding WebproxyProfile#base64_encoding}
  */
  readonly base64Encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#content WebproxyProfile#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#id WebproxyProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#name WebproxyProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#protocol WebproxyProfile#protocol}
  */
  readonly protocol?: string;
  /**
  * dstaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#dstaddr WebproxyProfile#dstaddr}
  */
  readonly dstaddr?: WebproxyProfileHeadersDstaddr[] | cdktf.IResolvable;
  /**
  * dstaddr6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#dstaddr6 WebproxyProfile#dstaddr6}
  */
  readonly dstaddr6?: WebproxyProfileHeadersDstaddr6[] | cdktf.IResolvable;
}

export function webproxyProfileHeadersToTerraform(struct?: WebproxyProfileHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    add_option: cdktf.stringToTerraform(struct!.addOption),
    base64_encoding: cdktf.stringToTerraform(struct!.base64Encoding),
    content: cdktf.stringToTerraform(struct!.content),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    dstaddr: cdktf.listMapper(webproxyProfileHeadersDstaddrToTerraform, true)(struct!.dstaddr),
    dstaddr6: cdktf.listMapper(webproxyProfileHeadersDstaddr6ToTerraform, true)(struct!.dstaddr6),
  }
}


export function webproxyProfileHeadersToHclTerraform(struct?: WebproxyProfileHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_option: {
      value: cdktf.stringToHclTerraform(struct!.addOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base64_encoding: {
      value: cdktf.stringToHclTerraform(struct!.base64Encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstaddr: {
      value: cdktf.listMapperHcl(webproxyProfileHeadersDstaddrToHclTerraform, true)(struct!.dstaddr),
      isBlock: true,
      type: "set",
      storageClassType: "WebproxyProfileHeadersDstaddrList",
    },
    dstaddr6: {
      value: cdktf.listMapperHcl(webproxyProfileHeadersDstaddr6ToHclTerraform, true)(struct!.dstaddr6),
      isBlock: true,
      type: "set",
      storageClassType: "WebproxyProfileHeadersDstaddr6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebproxyProfileHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebproxyProfileHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._addOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.addOption = this._addOption;
    }
    if (this._base64Encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Encoding = this._base64Encoding;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._dstaddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstaddr = this._dstaddr?.internalValue;
    }
    if (this._dstaddr6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstaddr6 = this._dstaddr6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebproxyProfileHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._addOption = undefined;
      this._base64Encoding = undefined;
      this._content = undefined;
      this._id = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._dstaddr.internalValue = undefined;
      this._dstaddr6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._addOption = value.addOption;
      this._base64Encoding = value.base64Encoding;
      this._content = value.content;
      this._id = value.id;
      this._name = value.name;
      this._protocol = value.protocol;
      this._dstaddr.internalValue = value.dstaddr;
      this._dstaddr6.internalValue = value.dstaddr6;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // add_option - computed: true, optional: true, required: false
  private _addOption?: string; 
  public get addOption() {
    return this.getStringAttribute('add_option');
  }
  public set addOption(value: string) {
    this._addOption = value;
  }
  public resetAddOption() {
    this._addOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOptionInput() {
    return this._addOption;
  }

  // base64_encoding - computed: true, optional: true, required: false
  private _base64Encoding?: string; 
  public get base64Encoding() {
    return this.getStringAttribute('base64_encoding');
  }
  public set base64Encoding(value: string) {
    this._base64Encoding = value;
  }
  public resetBase64Encoding() {
    this._base64Encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodingInput() {
    return this._base64Encoding;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // dstaddr - computed: false, optional: true, required: false
  private _dstaddr = new WebproxyProfileHeadersDstaddrList(this, "dstaddr", true);
  public get dstaddr() {
    return this._dstaddr;
  }
  public putDstaddr(value: WebproxyProfileHeadersDstaddr[] | cdktf.IResolvable) {
    this._dstaddr.internalValue = value;
  }
  public resetDstaddr() {
    this._dstaddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr.internalValue;
  }

  // dstaddr6 - computed: false, optional: true, required: false
  private _dstaddr6 = new WebproxyProfileHeadersDstaddr6List(this, "dstaddr6", true);
  public get dstaddr6() {
    return this._dstaddr6;
  }
  public putDstaddr6(value: WebproxyProfileHeadersDstaddr6[] | cdktf.IResolvable) {
    this._dstaddr6.internalValue = value;
  }
  public resetDstaddr6() {
    this._dstaddr6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6.internalValue;
  }
}

export class WebproxyProfileHeadersList extends cdktf.ComplexList {
  public internalValue? : WebproxyProfileHeaders[] | cdktf.IResolvable

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
  public get(index: number): WebproxyProfileHeadersOutputReference {
    return new WebproxyProfileHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile fortios_webproxy_profile}
*/
export class WebproxyProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_webproxy_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebproxyProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebproxyProfile to import
  * @param importFromId The id of the existing WebproxyProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebproxyProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_webproxy_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_profile fortios_webproxy_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebproxyProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebproxyProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_webproxy_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._headerClientIp = config.headerClientIp;
    this._headerFrontEndHttps = config.headerFrontEndHttps;
    this._headerViaRequest = config.headerViaRequest;
    this._headerViaResponse = config.headerViaResponse;
    this._headerXAuthenticatedGroups = config.headerXAuthenticatedGroups;
    this._headerXAuthenticatedUser = config.headerXAuthenticatedUser;
    this._headerXForwardedClientCert = config.headerXForwardedClientCert;
    this._headerXForwardedFor = config.headerXForwardedFor;
    this._id = config.id;
    this._logHeaderChange = config.logHeaderChange;
    this._name = config.name;
    this._stripEncoding = config.stripEncoding;
    this._vdomparam = config.vdomparam;
    this._headers.internalValue = config.headers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // header_client_ip - computed: true, optional: true, required: false
  private _headerClientIp?: string; 
  public get headerClientIp() {
    return this.getStringAttribute('header_client_ip');
  }
  public set headerClientIp(value: string) {
    this._headerClientIp = value;
  }
  public resetHeaderClientIp() {
    this._headerClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerClientIpInput() {
    return this._headerClientIp;
  }

  // header_front_end_https - computed: true, optional: true, required: false
  private _headerFrontEndHttps?: string; 
  public get headerFrontEndHttps() {
    return this.getStringAttribute('header_front_end_https');
  }
  public set headerFrontEndHttps(value: string) {
    this._headerFrontEndHttps = value;
  }
  public resetHeaderFrontEndHttps() {
    this._headerFrontEndHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFrontEndHttpsInput() {
    return this._headerFrontEndHttps;
  }

  // header_via_request - computed: true, optional: true, required: false
  private _headerViaRequest?: string; 
  public get headerViaRequest() {
    return this.getStringAttribute('header_via_request');
  }
  public set headerViaRequest(value: string) {
    this._headerViaRequest = value;
  }
  public resetHeaderViaRequest() {
    this._headerViaRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerViaRequestInput() {
    return this._headerViaRequest;
  }

  // header_via_response - computed: true, optional: true, required: false
  private _headerViaResponse?: string; 
  public get headerViaResponse() {
    return this.getStringAttribute('header_via_response');
  }
  public set headerViaResponse(value: string) {
    this._headerViaResponse = value;
  }
  public resetHeaderViaResponse() {
    this._headerViaResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerViaResponseInput() {
    return this._headerViaResponse;
  }

  // header_x_authenticated_groups - computed: true, optional: true, required: false
  private _headerXAuthenticatedGroups?: string; 
  public get headerXAuthenticatedGroups() {
    return this.getStringAttribute('header_x_authenticated_groups');
  }
  public set headerXAuthenticatedGroups(value: string) {
    this._headerXAuthenticatedGroups = value;
  }
  public resetHeaderXAuthenticatedGroups() {
    this._headerXAuthenticatedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerXAuthenticatedGroupsInput() {
    return this._headerXAuthenticatedGroups;
  }

  // header_x_authenticated_user - computed: true, optional: true, required: false
  private _headerXAuthenticatedUser?: string; 
  public get headerXAuthenticatedUser() {
    return this.getStringAttribute('header_x_authenticated_user');
  }
  public set headerXAuthenticatedUser(value: string) {
    this._headerXAuthenticatedUser = value;
  }
  public resetHeaderXAuthenticatedUser() {
    this._headerXAuthenticatedUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerXAuthenticatedUserInput() {
    return this._headerXAuthenticatedUser;
  }

  // header_x_forwarded_client_cert - computed: true, optional: true, required: false
  private _headerXForwardedClientCert?: string; 
  public get headerXForwardedClientCert() {
    return this.getStringAttribute('header_x_forwarded_client_cert');
  }
  public set headerXForwardedClientCert(value: string) {
    this._headerXForwardedClientCert = value;
  }
  public resetHeaderXForwardedClientCert() {
    this._headerXForwardedClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerXForwardedClientCertInput() {
    return this._headerXForwardedClientCert;
  }

  // header_x_forwarded_for - computed: true, optional: true, required: false
  private _headerXForwardedFor?: string; 
  public get headerXForwardedFor() {
    return this.getStringAttribute('header_x_forwarded_for');
  }
  public set headerXForwardedFor(value: string) {
    this._headerXForwardedFor = value;
  }
  public resetHeaderXForwardedFor() {
    this._headerXForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerXForwardedForInput() {
    return this._headerXForwardedFor;
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

  // log_header_change - computed: true, optional: true, required: false
  private _logHeaderChange?: string; 
  public get logHeaderChange() {
    return this.getStringAttribute('log_header_change');
  }
  public set logHeaderChange(value: string) {
    this._logHeaderChange = value;
  }
  public resetLogHeaderChange() {
    this._logHeaderChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHeaderChangeInput() {
    return this._logHeaderChange;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // strip_encoding - computed: true, optional: true, required: false
  private _stripEncoding?: string; 
  public get stripEncoding() {
    return this.getStringAttribute('strip_encoding');
  }
  public set stripEncoding(value: string) {
    this._stripEncoding = value;
  }
  public resetStripEncoding() {
    this._stripEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripEncodingInput() {
    return this._stripEncoding;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new WebproxyProfileHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: WebproxyProfileHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      header_client_ip: cdktf.stringToTerraform(this._headerClientIp),
      header_front_end_https: cdktf.stringToTerraform(this._headerFrontEndHttps),
      header_via_request: cdktf.stringToTerraform(this._headerViaRequest),
      header_via_response: cdktf.stringToTerraform(this._headerViaResponse),
      header_x_authenticated_groups: cdktf.stringToTerraform(this._headerXAuthenticatedGroups),
      header_x_authenticated_user: cdktf.stringToTerraform(this._headerXAuthenticatedUser),
      header_x_forwarded_client_cert: cdktf.stringToTerraform(this._headerXForwardedClientCert),
      header_x_forwarded_for: cdktf.stringToTerraform(this._headerXForwardedFor),
      id: cdktf.stringToTerraform(this._id),
      log_header_change: cdktf.stringToTerraform(this._logHeaderChange),
      name: cdktf.stringToTerraform(this._name),
      strip_encoding: cdktf.stringToTerraform(this._stripEncoding),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      headers: cdktf.listMapper(webproxyProfileHeadersToTerraform, true)(this._headers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_client_ip: {
        value: cdktf.stringToHclTerraform(this._headerClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_front_end_https: {
        value: cdktf.stringToHclTerraform(this._headerFrontEndHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_via_request: {
        value: cdktf.stringToHclTerraform(this._headerViaRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_via_response: {
        value: cdktf.stringToHclTerraform(this._headerViaResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_x_authenticated_groups: {
        value: cdktf.stringToHclTerraform(this._headerXAuthenticatedGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_x_authenticated_user: {
        value: cdktf.stringToHclTerraform(this._headerXAuthenticatedUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_x_forwarded_client_cert: {
        value: cdktf.stringToHclTerraform(this._headerXForwardedClientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_x_forwarded_for: {
        value: cdktf.stringToHclTerraform(this._headerXForwardedFor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_header_change: {
        value: cdktf.stringToHclTerraform(this._logHeaderChange),
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
      strip_encoding: {
        value: cdktf.stringToHclTerraform(this._stripEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.listMapperHcl(webproxyProfileHeadersToHclTerraform, true)(this._headers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebproxyProfileHeadersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
