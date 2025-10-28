// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_fast_http_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbFastHttpProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_fast_http_proxy#id SlbFastHttpProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_fast_http_proxy#uuid SlbFastHttpProxy#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_fast_http_proxy#sampling_enable SlbFastHttpProxy#sampling_enable}
  */
  readonly samplingEnable?: SlbFastHttpProxySamplingEnable[] | cdktf.IResolvable;
}
export interface SlbFastHttpProxySamplingEnable {
  /**
  * 'all': all; 'num': Num; 'curr_proxy': Curr Proxy Conns; 'total_proxy': Total Proxy Conns; 'req': HTTP requests; 'req_succ': HTTP requests(succ); 'noproxy': No proxy error; 'client_rst': Client RST; 'server_rst': Server RST; 'notuple': No tuple error; 'parsereq_fail': Parse req fail; 'svrsel_fail': Server selection fail; 'fwdreq_fail': Fwd req fail; 'fwdreq_fail_buff': Fwd req fail - buff; 'fwdreq_fail_rport': Fwd req fail - rport; 'fwdreq_fail_route': Fwd req fail - route; 'fwdreq_fail_persist': Fwd req fail - persist; 'fwdreq_fail_server': Fwd req fail - server; 'fwdreq_fail_tuple': Fwd req fail - tuple; 'fwdreqdata_fail': Fwd req data fail; 'req_retran': Packets retrans; 'req_ofo': Packets ofo; 'server_resel': Server reselection; 'svr_prem_close': Server premature close; 'new_svrconn': Server conn made; 'snat_fail': Source NAT failure; 'tcpoutrst': Out RSTs; 'full_proxy': Full proxy tot; 'full_proxy_post': Full proxy POST; 'full_proxy_pipeline': Full proxy pipeline; 'full_proxy_fpga_err': Full proxy fpga err; 'req_over_limit': Request over limit; 'req_rate_over_limit': Request rate over limit; 'l4_switching': L4 switching; 'cookie_switching': Cookie switching; 'aflex_switching': aFleX switching; 'http_policy_switching': HTTP Policy switching; 'url_switching': URL switching; 'host_switching': Host switching; 'lb_switching': Normal LB switching; 'l4_switching_ok': L4 switching (succ); 'cookie_switching_ok': Cookie switching (succ); 'aflex_switching_ok': aFleX switching (succ); 'http_policy_switching_ok': HTTP Policy switching (succ); 'url_switching_ok': URL switching (succ); 'host_switching_ok': Host switching (succ); 'lb_switching_ok': Normal LB switch. (succ); 'l4_switching_enqueue': L4 switching (enQ); 'cookie_switching_enqueue': Cookie switching (enQ); 'aflex_switching_enqueue': aFleX switching (enQ); 'http_policy_switching_enqueue': HTTP Policy switching (enQ); 'url_switching_enqueue': URL switching (enQ); 'host_switching_enqueue': Host switching (enQ); 'lb_switching_enqueue': Normal LB switch. (enQ); 'retry_503': Retry on 503; 'aflex_retry': aFleX http retry; 'aflex_lb_reselect': aFleX lb reselect; 'aflex_lb_reselect_ok': aFleX lb reselect (succ); 'client_rst_request': Client RST - request; 'client_rst_connecting': Client RST - connecting; 'client_rst_connected': Client RST - connected; 'client_rst_response': Client RST - response; 'server_rst_request': Server RST - request; 'server_rst_connecting': Server RST - connecting; 'server_rst_connected': Server RST - connected; 'server_rst_response': Server RST - response; 'invalid_header': Invalid header; 'too_many_headers': Too many headers; 'line_too_long': Line too long; 'header_name_too_long': Header name too long; 'wrong_resp_header': Wrong response header; 'header_insert': Header insert; 'header_delete': Header delete; 'insert_client_ip': Insert client IP; 'negative_req_remain': Negative request remain; 'negative_resp_remain': Negative response remain; 'large_cookie': Large cookies; 'large_cookie_header': Large cookie headers; 'huge_cookie': Huge cookies; 'huge_cookie_header': Huge cookie headers; 'parse_cookie_fail': Parse cookie fail; 'parse_setcookie_fail': Parse set-cookie fail; 'asm_cookie_fail': Assemble cookie fail; 'asm_cookie_header_fail': Asm cookie header fail; 'asm_setcookie_fail': Assemble set-cookie fail; 'asm_setcookie_header_fail': Asm set-cookie hdr fail; 'client_req_unexp_flag': Client req unexp flags; 'connecting_fin': Connecting FIN; 'connecting_fin_retrans': Connecting FIN retran; 'connecting_fin_ofo': Connecting FIN ofo; 'connecting_rst': Connecting RST; 'connecting_rst_retrans': Connecting RST retran; 'connecting_rst_ofo': Connecting RST ofo; 'connecting_ack': Connecting ACK; 'pkts_ofo': Packets ofo; 'pkts_retrans': Packets retrans; 'pkts_retrans_ack_finwait': retrans ACK FWAIT; 'pkts_retrans_fin': retrans FIN; 'pkts_retrans_rst': retrans RST; 'pkts_retrans_push': retrans PSH; 'stale_sess': Stale sess; 'server_resel_failed': Server re-select failed; 'compression_before': Tot data before compress; 'compression_after': Tot data after compress; 'response_1xx': Status code 1XX; 'response_100': Status code 100; 'response_101': Status code 101; 'response_102': Status code 102; 'response_2xx': Status code 2XX; 'response_200': Status code 200; 'response_201': Status code 201; 'response_202': Status code 202; 'response_203': Status code 203; 'response_204': Status code 204; 'response_205': Status code 205; 'response_206': Status code 206; 'response_207': Status code 207; 'response_3xx': Status code 3XX; 'response_300': Status code 300; 'response_301': Status code 301; 'response_302': Status code 302; 'response_303': Status code 303; 'response_304': Status code 304; 'response_305': Status code 305; 'response_306': Status code 306; 'response_307': Status code 307; 'response_4xx': Status code 4XX; 'response_400': Status code 400; 'response_401': Status code 401; 'response_402': Status code 402; 'response_403': Status code 403; 'response_404': Status code 404; 'response_405': Status code 405; 'response_406': Status code 406; 'response_407': Status code 407; 'response_408': Status code 408; 'response_409': Status code 409; 'response_410': Status code 410; 'response_411': Status code 411; 'response_412': Status code 412; 'response_413': Status code 413; 'response_414': Status code 414; 'response_415': Status code 415; 'response_416': Status code 416; 'response_417': Status code 417; 'response_418': Status code 418; 'response_422': Status code 422; 'response_423': Status code 423; 'response_424': Status code 424; 'response_425': Status code 425; 'response_426': Status code 426; 'response_449': Status code 449; 'response_450': Status code 450; 'response_5xx': Status code 5XX; 'response_500': Status code 500; 'response_501': Status code 501; 'response_502': Status code 502; 'response_503': Status code 503; 'response_504': Status code 504; 'response_505': Status code 505; 'response_506': Status code 506; 'response_507': Status code 507; 'response_508': Status code 508; 'response_509': Status code 509; 'response_510': Status code 510; 'response_6xx': Status code 6XX; 'response_unknown': Status code unknown; 'req_http10': Request 1.0; 'req_http11': Request 1.1; 'response_http10': Resp 1.0; 'response_http11': Resp 1.1; 'req_get': Method GET; 'req_head': Method HEAD; 'req_put': Method PUT; 'req_post': Method POST; 'req_trace': Method TRACE; 'req_options': Method OPTIONS; 'req_connect': Method CONNECT; 'req_delete': Method DELETE; 'req_unknown': Method UNKNOWN; 'req_content_len': Req content len; 'rsp_content_len': Resp content len; 'rsp_chunk': Resp chunk encoding; 'req_chunk': Req chunk encoding; 'compress_rsp': Compress req; 'compress_del_accept_enc': Compress del accept enc; 'compress_resp_already_compressed': Resp already compressed; 'compress_content_type_excluded': Compress cont type excl; 'compress_no_content_type': Compress no cont type; 'compress_resp_lt_min': Compress resp less than min; 'compress_resp_no_cl_or_ce': Compress resp no CL/CE; 'compress_ratio_too_high': Compress ratio too high; 'cache_rsp': HTTP req (cache succ); 'close_on_ddos': Close on DDoS; 'req_http10_keepalive': 1.0 Keepalive; 'req_sz_1k': Req less than equal to 1K; 'req_sz_2k': Req less than equal to 2K;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_fast_http_proxy#counters1 SlbFastHttpProxy#counters1}
  */
  readonly counters1?: string;
  /**
  * 'req_sz_4k': Req less than equal to 4K; 'req_sz_8k': Req less than equal to 8K; 'req_sz_16k': Req less than equal to 16K; 'req_sz_32k': Req less than equal to 32K; 'req_sz_64k': Req less than equal to 64K; 'req_sz_256k': Req less than equal to 256K; 'req_sz_gt_256k': Req greater than 256K; 'rsp_sz_1k': Resp less than equal to 1K; 'rsp_sz_2k': Resp less than equal to 2K; 'rsp_sz_4k': Resp less than equal to 4K; 'rsp_sz_8k': Resp less than equal to 8K; 'rsp_sz_16k': Resp less than equal to 16K; 'rsp_sz_32k': Resp less than equal to 32K; 'rsp_sz_64k': Resp less than equal to 64K; 'rsp_sz_256k': Resp less than equal to 256K; 'rsp_sz_gt_256k': Resp greater than 256K; 'chunk_sz_512': Chunk less than equal to 512; 'chunk_sz_1k': Chunk less than equal to 1K; 'chunk_sz_2k': Chunk less than equal to 2K; 'chunk_sz_4k': Chunk less than equal to 4K; 'chunk_sz_gt_4k': Chunk greater than 4K; 'pconn_connecting': pconn connecting; 'pconn_connected': pconn connected; 'pconn_connecting_failed': pconn conn failed; 'chunk_bad': Bad Chunk; 'req_10u': Rsp time less than 10u; 'req_20u': Rsp time less than 20u; 'req_50u': Rsp time less than 50u; 'req_100u': Rsp time less than 100u; 'req_200u': Rsp time less than 200u; 'req_500u': Rsp time less than 500u; 'req_1m': Rsp time less than 1m; 'req_2m': Rsp time less than 2m; 'req_5m': Rsp time less than 5m; 'req_10m': Rsp time less than 10m; 'req_20m': Rsp time less than 20m; 'req_50m': Rsp time less than 50m; 'req_100m': Rsp time less than 100m; 'req_200m': Rsp time less than 200m; 'req_500m': Rsp time less than 500m; 'req_1s': Rsp time less than 1s; 'req_2s': Rsp time less than 2s; 'req_5s': Rsp time less than 5s; 'req_over_5s': Rsp time greater than equal to 5s; 'insert_client_port': Insert client Port; 'req_track': Method TRACK; 'full_proxy_put': Full proxy PUT; 'non_http_bypass': Non-HTTP bypass; 'skip_insert_client_ip': Skip Insert Client IP; 'skip_insert_client_port': Skip Insert Client Port; 'decompression_before': Tot data before decompress; 'decompression_after': Tot data after decompress; 'http_pkts_in_seq': Tot In-seq fHTTP packets; 'http_pkts_retx': Tot Re-Tx fHTTP packets; 'http_client_retx': Client Re-Tx fHTTP packets; 'http_server_retx': Server Re-Tx fHTTP packets; 'http_pkts_ofo': fHTTP Out of Order packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_fast_http_proxy#counters2 SlbFastHttpProxy#counters2}
  */
  readonly counters2?: string;
}

export function slbFastHttpProxySamplingEnableToTerraform(struct?: SlbFastHttpProxySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
  }
}


export function slbFastHttpProxySamplingEnableToHclTerraform(struct?: SlbFastHttpProxySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters2: {
      value: cdktf.stringToHclTerraform(struct!.counters2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbFastHttpProxySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbFastHttpProxySamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    if (this._counters2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters2 = this._counters2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbFastHttpProxySamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
      this._counters2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
      this._counters2 = value.counters2;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }

  // counters2 - computed: false, optional: true, required: false
  private _counters2?: string; 
  public get counters2() {
    return this.getStringAttribute('counters2');
  }
  public set counters2(value: string) {
    this._counters2 = value;
  }
  public resetCounters2() {
    this._counters2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters2Input() {
    return this._counters2;
  }
}

export class SlbFastHttpProxySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbFastHttpProxySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbFastHttpProxySamplingEnableOutputReference {
    return new SlbFastHttpProxySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_fast_http_proxy thunder_slb_fast_http_proxy}
*/
export class SlbFastHttpProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_fast_http_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbFastHttpProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbFastHttpProxy to import
  * @param importFromId The id of the existing SlbFastHttpProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_fast_http_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbFastHttpProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_fast_http_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_fast_http_proxy thunder_slb_fast_http_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbFastHttpProxyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbFastHttpProxyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_fast_http_proxy',
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
    this._id = config.id;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbFastHttpProxySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbFastHttpProxySamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(slbFastHttpProxySamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      sampling_enable: {
        value: cdktf.listMapperHcl(slbFastHttpProxySamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbFastHttpProxySamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
