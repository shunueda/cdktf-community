// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosSrcDynamicEntryOverflowPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'ip': ip; 'ipv6': ipv6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#default_address_type DdosSrcDynamicEntryOverflowPolicy#default_address_type}
  */
  readonly defaultAddressType: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#glid DdosSrcDynamicEntryOverflowPolicy#glid}
  */
  readonly glid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#id DdosSrcDynamicEntryOverflowPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#log_periodic DdosSrcDynamicEntryOverflowPolicy#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#user_tag DdosSrcDynamicEntryOverflowPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#uuid DdosSrcDynamicEntryOverflowPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * app_type_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#app_type_list DdosSrcDynamicEntryOverflowPolicy#app_type_list}
  */
  readonly appTypeList?: DdosSrcDynamicEntryOverflowPolicyAppTypeListStruct[] | cdktf.IResolvable;
  /**
  * exceed_log_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#exceed_log_cfg DdosSrcDynamicEntryOverflowPolicy#exceed_log_cfg}
  */
  readonly exceedLogCfg?: DdosSrcDynamicEntryOverflowPolicyExceedLogCfg;
  /**
  * l4_type_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#l4_type_list DdosSrcDynamicEntryOverflowPolicy#l4_type_list}
  */
  readonly l4TypeList?: DdosSrcDynamicEntryOverflowPolicyL4TypeListStruct[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#template DdosSrcDynamicEntryOverflowPolicy#template}
  */
  readonly template?: DdosSrcDynamicEntryOverflowPolicyTemplate;
}
export interface DdosSrcDynamicEntryOverflowPolicyAppTypeListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#dns DdosSrcDynamicEntryOverflowPolicy#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#http DdosSrcDynamicEntryOverflowPolicy#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#sip DdosSrcDynamicEntryOverflowPolicy#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#ssl_l4 DdosSrcDynamicEntryOverflowPolicy#ssl_l4}
  */
  readonly sslL4?: string;
}

export function ddosSrcDynamicEntryOverflowPolicyAppTypeListTemplateToTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyAppTypeListTemplateOutputReference | DdosSrcDynamicEntryOverflowPolicyAppTypeListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
  }
}


export function ddosSrcDynamicEntryOverflowPolicyAppTypeListTemplateToHclTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyAppTypeListTemplateOutputReference | DdosSrcDynamicEntryOverflowPolicyAppTypeListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosSrcDynamicEntryOverflowPolicyAppTypeListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosSrcDynamicEntryOverflowPolicyAppTypeListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosSrcDynamicEntryOverflowPolicyAppTypeListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._http = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._http = value.http;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }
}
export interface DdosSrcDynamicEntryOverflowPolicyAppTypeListStruct {
  /**
  * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#protocol DdosSrcDynamicEntryOverflowPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#user_tag DdosSrcDynamicEntryOverflowPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#uuid DdosSrcDynamicEntryOverflowPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#template DdosSrcDynamicEntryOverflowPolicy#template}
  */
  readonly template?: DdosSrcDynamicEntryOverflowPolicyAppTypeListTemplate;
}

export function ddosSrcDynamicEntryOverflowPolicyAppTypeListStructToTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyAppTypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosSrcDynamicEntryOverflowPolicyAppTypeListTemplateToTerraform(struct!.template),
  }
}


export function ddosSrcDynamicEntryOverflowPolicyAppTypeListStructToHclTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyAppTypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: ddosSrcDynamicEntryOverflowPolicyAppTypeListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosSrcDynamicEntryOverflowPolicyAppTypeListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosSrcDynamicEntryOverflowPolicyAppTypeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosSrcDynamicEntryOverflowPolicyAppTypeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosSrcDynamicEntryOverflowPolicyAppTypeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosSrcDynamicEntryOverflowPolicyAppTypeListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosSrcDynamicEntryOverflowPolicyAppTypeListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DdosSrcDynamicEntryOverflowPolicyAppTypeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosSrcDynamicEntryOverflowPolicyAppTypeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosSrcDynamicEntryOverflowPolicyAppTypeListStructOutputReference {
    return new DdosSrcDynamicEntryOverflowPolicyAppTypeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosSrcDynamicEntryOverflowPolicyExceedLogCfg {
  /**
  * Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#log_enable DdosSrcDynamicEntryOverflowPolicy#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Turn on sflow sample with log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#with_sflow_sample DdosSrcDynamicEntryOverflowPolicy#with_sflow_sample}
  */
  readonly withSflowSample?: number;
}

export function ddosSrcDynamicEntryOverflowPolicyExceedLogCfgToTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyExceedLogCfgOutputReference | DdosSrcDynamicEntryOverflowPolicyExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
    with_sflow_sample: cdktf.numberToTerraform(struct!.withSflowSample),
  }
}


export function ddosSrcDynamicEntryOverflowPolicyExceedLogCfgToHclTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyExceedLogCfgOutputReference | DdosSrcDynamicEntryOverflowPolicyExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_enable: {
      value: cdktf.numberToHclTerraform(struct!.logEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    with_sflow_sample: {
      value: cdktf.numberToHclTerraform(struct!.withSflowSample),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosSrcDynamicEntryOverflowPolicyExceedLogCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosSrcDynamicEntryOverflowPolicyExceedLogCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    if (this._withSflowSample !== undefined) {
      hasAnyValues = true;
      internalValueResult.withSflowSample = this._withSflowSample;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosSrcDynamicEntryOverflowPolicyExceedLogCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnable = undefined;
      this._withSflowSample = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnable = value.logEnable;
      this._withSflowSample = value.withSflowSample;
    }
  }

  // log_enable - computed: false, optional: true, required: false
  private _logEnable?: number; 
  public get logEnable() {
    return this.getNumberAttribute('log_enable');
  }
  public set logEnable(value: number) {
    this._logEnable = value;
  }
  public resetLogEnable() {
    this._logEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnableInput() {
    return this._logEnable;
  }

  // with_sflow_sample - computed: false, optional: true, required: false
  private _withSflowSample?: number; 
  public get withSflowSample() {
    return this.getNumberAttribute('with_sflow_sample');
  }
  public set withSflowSample(value: number) {
    this._withSflowSample = value;
  }
  public resetWithSflowSample() {
    this._withSflowSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSflowSampleInput() {
    return this._withSflowSample;
  }
}
export interface DdosSrcDynamicEntryOverflowPolicyL4TypeListTemplate {
  /**
  * DDOS OTHER template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#other DdosSrcDynamicEntryOverflowPolicy#other}
  */
  readonly other?: string;
  /**
  * DDOS TCP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#tcp DdosSrcDynamicEntryOverflowPolicy#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#template_icmp_v4 DdosSrcDynamicEntryOverflowPolicy#template_icmp_v4}
  */
  readonly templateIcmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#template_icmp_v6 DdosSrcDynamicEntryOverflowPolicy#template_icmp_v6}
  */
  readonly templateIcmpV6?: string;
  /**
  * DDOS UDP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#udp DdosSrcDynamicEntryOverflowPolicy#udp}
  */
  readonly udp?: string;
}

export function ddosSrcDynamicEntryOverflowPolicyL4TypeListTemplateToTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyL4TypeListTemplateOutputReference | DdosSrcDynamicEntryOverflowPolicyL4TypeListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    template_icmp_v4: cdktf.stringToTerraform(struct!.templateIcmpV4),
    template_icmp_v6: cdktf.stringToTerraform(struct!.templateIcmpV6),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosSrcDynamicEntryOverflowPolicyL4TypeListTemplateToHclTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyL4TypeListTemplateOutputReference | DdosSrcDynamicEntryOverflowPolicyL4TypeListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    other: {
      value: cdktf.stringToHclTerraform(struct!.other),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosSrcDynamicEntryOverflowPolicyL4TypeListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosSrcDynamicEntryOverflowPolicyL4TypeListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._templateIcmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV4 = this._templateIcmpV4;
    }
    if (this._templateIcmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV6 = this._templateIcmpV6;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosSrcDynamicEntryOverflowPolicyL4TypeListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._other = undefined;
      this._tcp = undefined;
      this._templateIcmpV4 = undefined;
      this._templateIcmpV6 = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._other = value.other;
      this._tcp = value.tcp;
      this._templateIcmpV4 = value.templateIcmpV4;
      this._templateIcmpV6 = value.templateIcmpV6;
      this._udp = value.udp;
    }
  }

  // other - computed: false, optional: true, required: false
  private _other?: string; 
  public get other() {
    return this.getStringAttribute('other');
  }
  public set other(value: string) {
    this._other = value;
  }
  public resetOther() {
    this._other = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // template_icmp_v4 - computed: false, optional: true, required: false
  private _templateIcmpV4?: string; 
  public get templateIcmpV4() {
    return this.getStringAttribute('template_icmp_v4');
  }
  public set templateIcmpV4(value: string) {
    this._templateIcmpV4 = value;
  }
  public resetTemplateIcmpV4() {
    this._templateIcmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV4Input() {
    return this._templateIcmpV4;
  }

  // template_icmp_v6 - computed: false, optional: true, required: false
  private _templateIcmpV6?: string; 
  public get templateIcmpV6() {
    return this.getStringAttribute('template_icmp_v6');
  }
  public set templateIcmpV6(value: string) {
    this._templateIcmpV6 = value;
  }
  public resetTemplateIcmpV6() {
    this._templateIcmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV6Input() {
    return this._templateIcmpV6;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosSrcDynamicEntryOverflowPolicyL4TypeListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#deny DdosSrcDynamicEntryOverflowPolicy#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#glid DdosSrcDynamicEntryOverflowPolicy#glid}
  */
  readonly glid?: string;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#protocol DdosSrcDynamicEntryOverflowPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#user_tag DdosSrcDynamicEntryOverflowPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#uuid DdosSrcDynamicEntryOverflowPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#template DdosSrcDynamicEntryOverflowPolicy#template}
  */
  readonly template?: DdosSrcDynamicEntryOverflowPolicyL4TypeListTemplate;
}

export function ddosSrcDynamicEntryOverflowPolicyL4TypeListStructToTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyL4TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosSrcDynamicEntryOverflowPolicyL4TypeListTemplateToTerraform(struct!.template),
  }
}


export function ddosSrcDynamicEntryOverflowPolicyL4TypeListStructToHclTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyL4TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
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
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: ddosSrcDynamicEntryOverflowPolicyL4TypeListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosSrcDynamicEntryOverflowPolicyL4TypeListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosSrcDynamicEntryOverflowPolicyL4TypeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosSrcDynamicEntryOverflowPolicyL4TypeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosSrcDynamicEntryOverflowPolicyL4TypeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._glid = value.glid;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosSrcDynamicEntryOverflowPolicyL4TypeListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosSrcDynamicEntryOverflowPolicyL4TypeListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DdosSrcDynamicEntryOverflowPolicyL4TypeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosSrcDynamicEntryOverflowPolicyL4TypeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosSrcDynamicEntryOverflowPolicyL4TypeListStructOutputReference {
    return new DdosSrcDynamicEntryOverflowPolicyL4TypeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosSrcDynamicEntryOverflowPolicyTemplate {
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#logging DdosSrcDynamicEntryOverflowPolicy#logging}
  */
  readonly logging?: string;
}

export function ddosSrcDynamicEntryOverflowPolicyTemplateToTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyTemplateOutputReference | DdosSrcDynamicEntryOverflowPolicyTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosSrcDynamicEntryOverflowPolicyTemplateToHclTerraform(struct?: DdosSrcDynamicEntryOverflowPolicyTemplateOutputReference | DdosSrcDynamicEntryOverflowPolicyTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosSrcDynamicEntryOverflowPolicyTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosSrcDynamicEntryOverflowPolicyTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosSrcDynamicEntryOverflowPolicyTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logging = value.logging;
    }
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy thunder_ddos_src_dynamic_entry_overflow_policy}
*/
export class DdosSrcDynamicEntryOverflowPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_src_dynamic_entry_overflow_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosSrcDynamicEntryOverflowPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosSrcDynamicEntryOverflowPolicy to import
  * @param importFromId The id of the existing DdosSrcDynamicEntryOverflowPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosSrcDynamicEntryOverflowPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_src_dynamic_entry_overflow_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_dynamic_entry_overflow_policy thunder_ddos_src_dynamic_entry_overflow_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosSrcDynamicEntryOverflowPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DdosSrcDynamicEntryOverflowPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_src_dynamic_entry_overflow_policy',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultAddressType = config.defaultAddressType;
    this._glid = config.glid;
    this._id = config.id;
    this._logPeriodic = config.logPeriodic;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._appTypeList.internalValue = config.appTypeList;
    this._exceedLogCfg.internalValue = config.exceedLogCfg;
    this._l4TypeList.internalValue = config.l4TypeList;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_address_type - computed: false, optional: false, required: true
  private _defaultAddressType?: string; 
  public get defaultAddressType() {
    return this.getStringAttribute('default_address_type');
  }
  public set defaultAddressType(value: string) {
    this._defaultAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAddressTypeInput() {
    return this._defaultAddressType;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
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

  // log_periodic - computed: false, optional: true, required: false
  private _logPeriodic?: number; 
  public get logPeriodic() {
    return this.getNumberAttribute('log_periodic');
  }
  public set logPeriodic(value: number) {
    this._logPeriodic = value;
  }
  public resetLogPeriodic() {
    this._logPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPeriodicInput() {
    return this._logPeriodic;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // app_type_list - computed: false, optional: true, required: false
  private _appTypeList = new DdosSrcDynamicEntryOverflowPolicyAppTypeListStructList(this, "app_type_list", false);
  public get appTypeList() {
    return this._appTypeList;
  }
  public putAppTypeList(value: DdosSrcDynamicEntryOverflowPolicyAppTypeListStruct[] | cdktf.IResolvable) {
    this._appTypeList.internalValue = value;
  }
  public resetAppTypeList() {
    this._appTypeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeListInput() {
    return this._appTypeList.internalValue;
  }

  // exceed_log_cfg - computed: false, optional: true, required: false
  private _exceedLogCfg = new DdosSrcDynamicEntryOverflowPolicyExceedLogCfgOutputReference(this, "exceed_log_cfg");
  public get exceedLogCfg() {
    return this._exceedLogCfg;
  }
  public putExceedLogCfg(value: DdosSrcDynamicEntryOverflowPolicyExceedLogCfg) {
    this._exceedLogCfg.internalValue = value;
  }
  public resetExceedLogCfg() {
    this._exceedLogCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogCfgInput() {
    return this._exceedLogCfg.internalValue;
  }

  // l4_type_list - computed: false, optional: true, required: false
  private _l4TypeList = new DdosSrcDynamicEntryOverflowPolicyL4TypeListStructList(this, "l4_type_list", false);
  public get l4TypeList() {
    return this._l4TypeList;
  }
  public putL4TypeList(value: DdosSrcDynamicEntryOverflowPolicyL4TypeListStruct[] | cdktf.IResolvable) {
    this._l4TypeList.internalValue = value;
  }
  public resetL4TypeList() {
    this._l4TypeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeListInput() {
    return this._l4TypeList.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosSrcDynamicEntryOverflowPolicyTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosSrcDynamicEntryOverflowPolicyTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_address_type: cdktf.stringToTerraform(this._defaultAddressType),
      glid: cdktf.stringToTerraform(this._glid),
      id: cdktf.stringToTerraform(this._id),
      log_periodic: cdktf.numberToTerraform(this._logPeriodic),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      app_type_list: cdktf.listMapper(ddosSrcDynamicEntryOverflowPolicyAppTypeListStructToTerraform, true)(this._appTypeList.internalValue),
      exceed_log_cfg: ddosSrcDynamicEntryOverflowPolicyExceedLogCfgToTerraform(this._exceedLogCfg.internalValue),
      l4_type_list: cdktf.listMapper(ddosSrcDynamicEntryOverflowPolicyL4TypeListStructToTerraform, true)(this._l4TypeList.internalValue),
      template: ddosSrcDynamicEntryOverflowPolicyTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_address_type: {
        value: cdktf.stringToHclTerraform(this._defaultAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glid: {
        value: cdktf.stringToHclTerraform(this._glid),
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
      log_periodic: {
        value: cdktf.numberToHclTerraform(this._logPeriodic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_type_list: {
        value: cdktf.listMapperHcl(ddosSrcDynamicEntryOverflowPolicyAppTypeListStructToHclTerraform, true)(this._appTypeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosSrcDynamicEntryOverflowPolicyAppTypeListStructList",
      },
      exceed_log_cfg: {
        value: ddosSrcDynamicEntryOverflowPolicyExceedLogCfgToHclTerraform(this._exceedLogCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosSrcDynamicEntryOverflowPolicyExceedLogCfgList",
      },
      l4_type_list: {
        value: cdktf.listMapperHcl(ddosSrcDynamicEntryOverflowPolicyL4TypeListStructToHclTerraform, true)(this._l4TypeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosSrcDynamicEntryOverflowPolicyL4TypeListStructList",
      },
      template: {
        value: ddosSrcDynamicEntryOverflowPolicyTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosSrcDynamicEntryOverflowPolicyTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
