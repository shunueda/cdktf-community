// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebfilterUrlfilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#comment WebfilterUrlfilter#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#dynamic_sort_subtable WebfilterUrlfilter#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#fosid WebfilterUrlfilter#fosid}
  */
  readonly fosid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#get_all_tables WebfilterUrlfilter#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#id WebfilterUrlfilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#include_subdomains WebfilterUrlfilter#include_subdomains}
  */
  readonly includeSubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#ip4_mapped_ip6 WebfilterUrlfilter#ip4_mapped_ip6}
  */
  readonly ip4MappedIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#ip_addr_block WebfilterUrlfilter#ip_addr_block}
  */
  readonly ipAddrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#name WebfilterUrlfilter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#one_arm_ips_urlfilter WebfilterUrlfilter#one_arm_ips_urlfilter}
  */
  readonly oneArmIpsUrlfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#vdomparam WebfilterUrlfilter#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#entries WebfilterUrlfilter#entries}
  */
  readonly entries?: WebfilterUrlfilterEntries[] | cdktf.IResolvable;
}
export interface WebfilterUrlfilterEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#action WebfilterUrlfilter#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#antiphish_action WebfilterUrlfilter#antiphish_action}
  */
  readonly antiphishAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#comment WebfilterUrlfilter#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#dns_address_family WebfilterUrlfilter#dns_address_family}
  */
  readonly dnsAddressFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#exempt WebfilterUrlfilter#exempt}
  */
  readonly exempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#id WebfilterUrlfilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#referrer_host WebfilterUrlfilter#referrer_host}
  */
  readonly referrerHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#status WebfilterUrlfilter#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#type WebfilterUrlfilter#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#url WebfilterUrlfilter#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#web_proxy_profile WebfilterUrlfilter#web_proxy_profile}
  */
  readonly webProxyProfile?: string;
}

export function webfilterUrlfilterEntriesToTerraform(struct?: WebfilterUrlfilterEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    antiphish_action: cdktf.stringToTerraform(struct!.antiphishAction),
    comment: cdktf.stringToTerraform(struct!.comment),
    dns_address_family: cdktf.stringToTerraform(struct!.dnsAddressFamily),
    exempt: cdktf.stringToTerraform(struct!.exempt),
    id: cdktf.numberToTerraform(struct!.id),
    referrer_host: cdktf.stringToTerraform(struct!.referrerHost),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    web_proxy_profile: cdktf.stringToTerraform(struct!.webProxyProfile),
  }
}


export function webfilterUrlfilterEntriesToHclTerraform(struct?: WebfilterUrlfilterEntries | cdktf.IResolvable): any {
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
    antiphish_action: {
      value: cdktf.stringToHclTerraform(struct!.antiphishAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_address_family: {
      value: cdktf.stringToHclTerraform(struct!.dnsAddressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exempt: {
      value: cdktf.stringToHclTerraform(struct!.exempt),
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
    referrer_host: {
      value: cdktf.stringToHclTerraform(struct!.referrerHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_proxy_profile: {
      value: cdktf.stringToHclTerraform(struct!.webProxyProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterUrlfilterEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterUrlfilterEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._antiphishAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiphishAction = this._antiphishAction;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._dnsAddressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAddressFamily = this._dnsAddressFamily;
    }
    if (this._exempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.exempt = this._exempt;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._referrerHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerHost = this._referrerHost;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._webProxyProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.webProxyProfile = this._webProxyProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterUrlfilterEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._antiphishAction = undefined;
      this._comment = undefined;
      this._dnsAddressFamily = undefined;
      this._exempt = undefined;
      this._id = undefined;
      this._referrerHost = undefined;
      this._status = undefined;
      this._type = undefined;
      this._url = undefined;
      this._webProxyProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._antiphishAction = value.antiphishAction;
      this._comment = value.comment;
      this._dnsAddressFamily = value.dnsAddressFamily;
      this._exempt = value.exempt;
      this._id = value.id;
      this._referrerHost = value.referrerHost;
      this._status = value.status;
      this._type = value.type;
      this._url = value.url;
      this._webProxyProfile = value.webProxyProfile;
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

  // antiphish_action - computed: true, optional: true, required: false
  private _antiphishAction?: string; 
  public get antiphishAction() {
    return this.getStringAttribute('antiphish_action');
  }
  public set antiphishAction(value: string) {
    this._antiphishAction = value;
  }
  public resetAntiphishAction() {
    this._antiphishAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiphishActionInput() {
    return this._antiphishAction;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dns_address_family - computed: true, optional: true, required: false
  private _dnsAddressFamily?: string; 
  public get dnsAddressFamily() {
    return this.getStringAttribute('dns_address_family');
  }
  public set dnsAddressFamily(value: string) {
    this._dnsAddressFamily = value;
  }
  public resetDnsAddressFamily() {
    this._dnsAddressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAddressFamilyInput() {
    return this._dnsAddressFamily;
  }

  // exempt - computed: true, optional: true, required: false
  private _exempt?: string; 
  public get exempt() {
    return this.getStringAttribute('exempt');
  }
  public set exempt(value: string) {
    this._exempt = value;
  }
  public resetExempt() {
    this._exempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptInput() {
    return this._exempt;
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

  // referrer_host - computed: false, optional: true, required: false
  private _referrerHost?: string; 
  public get referrerHost() {
    return this.getStringAttribute('referrer_host');
  }
  public set referrerHost(value: string) {
    this._referrerHost = value;
  }
  public resetReferrerHost() {
    this._referrerHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerHostInput() {
    return this._referrerHost;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // web_proxy_profile - computed: false, optional: true, required: false
  private _webProxyProfile?: string; 
  public get webProxyProfile() {
    return this.getStringAttribute('web_proxy_profile');
  }
  public set webProxyProfile(value: string) {
    this._webProxyProfile = value;
  }
  public resetWebProxyProfile() {
    this._webProxyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webProxyProfileInput() {
    return this._webProxyProfile;
  }
}

export class WebfilterUrlfilterEntriesList extends cdktf.ComplexList {
  public internalValue? : WebfilterUrlfilterEntries[] | cdktf.IResolvable

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
  public get(index: number): WebfilterUrlfilterEntriesOutputReference {
    return new WebfilterUrlfilterEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter fortios_webfilter_urlfilter}
*/
export class WebfilterUrlfilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_webfilter_urlfilter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebfilterUrlfilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebfilterUrlfilter to import
  * @param importFromId The id of the existing WebfilterUrlfilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebfilterUrlfilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_webfilter_urlfilter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_urlfilter fortios_webfilter_urlfilter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebfilterUrlfilterConfig
  */
  public constructor(scope: Construct, id: string, config: WebfilterUrlfilterConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_webfilter_urlfilter',
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
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fosid = config.fosid;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._includeSubdomains = config.includeSubdomains;
    this._ip4MappedIp6 = config.ip4MappedIp6;
    this._ipAddrBlock = config.ipAddrBlock;
    this._name = config.name;
    this._oneArmIpsUrlfilter = config.oneArmIpsUrlfilter;
    this._vdomparam = config.vdomparam;
    this._entries.internalValue = config.entries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

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

  // fosid - computed: false, optional: false, required: true
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // include_subdomains - computed: true, optional: true, required: false
  private _includeSubdomains?: string; 
  public get includeSubdomains() {
    return this.getStringAttribute('include_subdomains');
  }
  public set includeSubdomains(value: string) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
  }

  // ip4_mapped_ip6 - computed: true, optional: true, required: false
  private _ip4MappedIp6?: string; 
  public get ip4MappedIp6() {
    return this.getStringAttribute('ip4_mapped_ip6');
  }
  public set ip4MappedIp6(value: string) {
    this._ip4MappedIp6 = value;
  }
  public resetIp4MappedIp6() {
    this._ip4MappedIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip4MappedIp6Input() {
    return this._ip4MappedIp6;
  }

  // ip_addr_block - computed: true, optional: true, required: false
  private _ipAddrBlock?: string; 
  public get ipAddrBlock() {
    return this.getStringAttribute('ip_addr_block');
  }
  public set ipAddrBlock(value: string) {
    this._ipAddrBlock = value;
  }
  public resetIpAddrBlock() {
    this._ipAddrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrBlockInput() {
    return this._ipAddrBlock;
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

  // one_arm_ips_urlfilter - computed: true, optional: true, required: false
  private _oneArmIpsUrlfilter?: string; 
  public get oneArmIpsUrlfilter() {
    return this.getStringAttribute('one_arm_ips_urlfilter');
  }
  public set oneArmIpsUrlfilter(value: string) {
    this._oneArmIpsUrlfilter = value;
  }
  public resetOneArmIpsUrlfilter() {
    this._oneArmIpsUrlfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneArmIpsUrlfilterInput() {
    return this._oneArmIpsUrlfilter;
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

  // entries - computed: false, optional: true, required: false
  private _entries = new WebfilterUrlfilterEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: WebfilterUrlfilterEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fosid: cdktf.numberToTerraform(this._fosid),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      include_subdomains: cdktf.stringToTerraform(this._includeSubdomains),
      ip4_mapped_ip6: cdktf.stringToTerraform(this._ip4MappedIp6),
      ip_addr_block: cdktf.stringToTerraform(this._ipAddrBlock),
      name: cdktf.stringToTerraform(this._name),
      one_arm_ips_urlfilter: cdktf.stringToTerraform(this._oneArmIpsUrlfilter),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      entries: cdktf.listMapper(webfilterUrlfilterEntriesToTerraform, true)(this._entries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      include_subdomains: {
        value: cdktf.stringToHclTerraform(this._includeSubdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip4_mapped_ip6: {
        value: cdktf.stringToHclTerraform(this._ip4MappedIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addr_block: {
        value: cdktf.stringToHclTerraform(this._ipAddrBlock),
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
      one_arm_ips_urlfilter: {
        value: cdktf.stringToHclTerraform(this._oneArmIpsUrlfilter),
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
      entries: {
        value: cdktf.listMapperHcl(webfilterUrlfilterEntriesToHclTerraform, true)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebfilterUrlfilterEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
