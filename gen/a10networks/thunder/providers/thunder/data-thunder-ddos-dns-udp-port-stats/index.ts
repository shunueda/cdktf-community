// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDnsUdpPortStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#id DataThunderDdosDnsUdpPortStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#stats DataThunderDdosDnsUdpPortStats#stats}
  */
  readonly stats?: DataThunderDdosDnsUdpPortStatsStats;
}
export interface DataThunderDdosDnsUdpPortStatsStats {
  /**
  * Dst Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#bl DataThunderDdosDnsUdpPortStats#bl}
  */
  readonly bl?: number;
  /**
  * UDP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#conn_prate_excd DataThunderDdosDnsUdpPortStats#conn_prate_excd}
  */
  readonly connPrateExcd?: number;
  /**
  * Domain Group Action Default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dg_action_default DataThunderDdosDnsUdpPortStats#dg_action_default}
  */
  readonly dgActionDefault?: number;
  /**
  * Domain Group Action Deny
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dg_action_deny DataThunderDdosDnsUdpPortStats#dg_action_deny}
  */
  readonly dgActionDeny?: number;
  /**
  * Domain Group Action Permit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dg_action_permit DataThunderDdosDnsUdpPortStats#dg_action_permit}
  */
  readonly dgActionPermit?: number;
  /**
  * Domain Group Domain Query Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dg_rate_exceed DataThunderDdosDnsUdpPortStats#dg_rate_exceed}
  */
  readonly dgRateExceed?: number;
  /**
  * Domain Group Request Check Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dg_request_check_fail DataThunderDdosDnsUdpPortStats#dg_request_check_fail}
  */
  readonly dgRequestCheckFail?: number;
  /**
  * DNS Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dns_auth_drop DataThunderDdosDnsUdpPortStats#dns_auth_drop}
  */
  readonly dnsAuthDrop?: number;
  /**
  * DNS Auth Responded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dns_auth_resp DataThunderDdosDnsUdpPortStats#dns_auth_resp}
  */
  readonly dnsAuthResp?: number;
  /**
  * Malform Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dns_malform DataThunderDdosDnsUdpPortStats#dns_malform}
  */
  readonly dnsMalform?: number;
  /**
  * Malform Query Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dns_malform_drop DataThunderDdosDnsUdpPortStats#dns_malform_drop}
  */
  readonly dnsMalformDrop?: number;
  /**
  * Query Class ANY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dns_query_class_any DataThunderDdosDnsUdpPortStats#dns_query_class_any}
  */
  readonly dnsQueryClassAny?: number;
  /**
  * Query Class CHAOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dns_query_class_chaos DataThunderDdosDnsUdpPortStats#dns_query_class_chaos}
  */
  readonly dnsQueryClassChaos?: number;
  /**
  * Query Class CSNET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dns_query_class_csnet DataThunderDdosDnsUdpPortStats#dns_query_class_csnet}
  */
  readonly dnsQueryClassCsnet?: number;
  /**
  * Query Class HESIOD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dns_query_class_hs DataThunderDdosDnsUdpPortStats#dns_query_class_hs}
  */
  readonly dnsQueryClassHs?: number;
  /**
  * Query Class INTERNET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dns_query_class_in DataThunderDdosDnsUdpPortStats#dns_query_class_in}
  */
  readonly dnsQueryClassIn?: number;
  /**
  * Query Class NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dns_query_class_none DataThunderDdosDnsUdpPortStats#dns_query_class_none}
  */
  readonly dnsQueryClassNone?: number;
  /**
  * Query Class Whitelist Miss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dns_query_class_whitelist_miss DataThunderDdosDnsUdpPortStats#dns_query_class_whitelist_miss}
  */
  readonly dnsQueryClassWhitelistMiss?: number;
  /**
  * Dst Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#dst_hw_drop DataThunderDdosDnsUdpPortStats#dst_hw_drop}
  */
  readonly dstHwDrop?: number;
  /**
  * Exceed Action: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#exceed_action_drop DataThunderDdosDnsUdpPortStats#exceed_action_drop}
  */
  readonly exceedActionDrop?: number;
  /**
  * Exceed Action: Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#exceed_action_tunnel DataThunderDdosDnsUdpPortStats#exceed_action_tunnel}
  */
  readonly exceedActionTunnel?: number;
  /**
  * Src KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#exceed_drop_brate_src DataThunderDdosDnsUdpPortStats#exceed_drop_brate_src}
  */
  readonly exceedDropBrateSrc?: number;
  /**
  * Src KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#exceed_drop_brate_src_pkt DataThunderDdosDnsUdpPortStats#exceed_drop_brate_src_pkt}
  */
  readonly exceedDropBrateSrcPkt?: number;
  /**
  * Src Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#exceed_drop_climit_src DataThunderDdosDnsUdpPortStats#exceed_drop_climit_src}
  */
  readonly exceedDropClimitSrc?: number;
  /**
  * Src Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#exceed_drop_crate_src DataThunderDdosDnsUdpPortStats#exceed_drop_crate_src}
  */
  readonly exceedDropCrateSrc?: number;
  /**
  * Src Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#exceed_drop_prate_src DataThunderDdosDnsUdpPortStats#exceed_drop_prate_src}
  */
  readonly exceedDropPrateSrc?: number;
  /**
  * Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#filter1_match DataThunderDdosDnsUdpPortStats#filter1_match}
  */
  readonly filter1Match?: number;
  /**
  * Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#filter2_match DataThunderDdosDnsUdpPortStats#filter2_match}
  */
  readonly filter2Match?: number;
  /**
  * Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#filter3_match DataThunderDdosDnsUdpPortStats#filter3_match}
  */
  readonly filter3Match?: number;
  /**
  * Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#filter4_match DataThunderDdosDnsUdpPortStats#filter4_match}
  */
  readonly filter4Match?: number;
  /**
  * Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#filter5_match DataThunderDdosDnsUdpPortStats#filter5_match}
  */
  readonly filter5Match?: number;
  /**
  * Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#filter_action_blacklist DataThunderDdosDnsUdpPortStats#filter_action_blacklist}
  */
  readonly filterActionBlacklist?: number;
  /**
  * Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#filter_action_default_pass DataThunderDdosDnsUdpPortStats#filter_action_default_pass}
  */
  readonly filterActionDefaultPass?: number;
  /**
  * Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#filter_action_drop DataThunderDdosDnsUdpPortStats#filter_action_drop}
  */
  readonly filterActionDrop?: number;
  /**
  * Filter Action Whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#filter_action_whitelist DataThunderDdosDnsUdpPortStats#filter_action_whitelist}
  */
  readonly filterActionWhitelist?: number;
  /**
  * Filter Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#filter_auth_fail DataThunderDdosDnsUdpPortStats#filter_auth_fail}
  */
  readonly filterAuthFail?: number;
  /**
  * Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#filter_none_match DataThunderDdosDnsUdpPortStats#filter_none_match}
  */
  readonly filterNoneMatch?: number;
  /**
  * Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#filter_total_not_match DataThunderDdosDnsUdpPortStats#filter_total_not_match}
  */
  readonly filterTotalNotMatch?: number;
  /**
  * Auth Force-TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#force_tcp_auth DataThunderDdosDnsUdpPortStats#force_tcp_auth}
  */
  readonly forceTcpAuth?: number;
  /**
  * Auth Force-TCP With UDP Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#force_tcp_auth_timeout DataThunderDdosDnsUdpPortStats#force_tcp_auth_timeout}
  */
  readonly forceTcpAuthTimeout?: number;
  /**
  * FQDN Label Count Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#fqdn_label_count_exceed DataThunderDdosDnsUdpPortStats#fqdn_label_count_exceed}
  */
  readonly fqdnLabelCountExceed?: number;
  /**
  * FQDN Label Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#fqdn_label_len_exceed DataThunderDdosDnsUdpPortStats#fqdn_label_len_exceed}
  */
  readonly fqdnLabelLenExceed?: number;
  /**
  * FQDN Rate by Label Count Checked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#fqdn_rate_by_label_count_check DataThunderDdosDnsUdpPortStats#fqdn_rate_by_label_count_check}
  */
  readonly fqdnRateByLabelCountCheck?: number;
  /**
  * FQDN Rate by Label Count Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#fqdn_rate_by_label_count_exceed DataThunderDdosDnsUdpPortStats#fqdn_rate_by_label_count_exceed}
  */
  readonly fqdnRateByLabelCountExceed?: number;
  /**
  * FQDN Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#fqdn_stage_2_rate_exceed DataThunderDdosDnsUdpPortStats#fqdn_stage_2_rate_exceed}
  */
  readonly fqdnStage2RateExceed?: number;
  /**
  * Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#frag_drop DataThunderDdosDnsUdpPortStats#frag_drop}
  */
  readonly fragDrop?: number;
  /**
  * Fragmented Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#frag_rcvd DataThunderDdosDnsUdpPortStats#frag_rcvd}
  */
  readonly fragRcvd?: number;
  /**
  * Fragmented Packets Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#frag_timeout DataThunderDdosDnsUdpPortStats#frag_timeout}
  */
  readonly fragTimeout?: number;
  /**
  * NXDOMAIN Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#is_nxdomain DataThunderDdosDnsUdpPortStats#is_nxdomain}
  */
  readonly isNxdomain?: number;
  /**
  * Non Query Opcode Pass Through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#non_query_opcode_pass_through DataThunderDdosDnsUdpPortStats#non_query_opcode_pass_through}
  */
  readonly nonQueryOpcodePassThrough?: number;
  /**
  * NTP Monlist Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#ntp_monlist_req DataThunderDdosDnsUdpPortStats#ntp_monlist_req}
  */
  readonly ntpMonlistReq?: number;
  /**
  * NTP Monlist Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#ntp_monlist_resp DataThunderDdosDnsUdpPortStats#ntp_monlist_resp}
  */
  readonly ntpMonlistResp?: number;
  /**
  * NXDOMAIN Response Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#nxdomain_bl_drop DataThunderDdosDnsUdpPortStats#nxdomain_bl_drop}
  */
  readonly nxdomainBlDrop?: number;
  /**
  * NXDOMAIN Response Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#nxdomain_drop DataThunderDdosDnsUdpPortStats#nxdomain_drop}
  */
  readonly nxdomainDrop?: number;
  /**
  * NXDOMAIN Response Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#nxdomain_rate_exceed DataThunderDdosDnsUdpPortStats#nxdomain_rate_exceed}
  */
  readonly nxdomainRateExceed?: number;
  /**
  * Outbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#outbound_port_bytes DataThunderDdosDnsUdpPortStats#outbound_port_bytes}
  */
  readonly outboundPortBytes?: number;
  /**
  * Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#outbound_port_bytes_drop DataThunderDdosDnsUdpPortStats#outbound_port_bytes_drop}
  */
  readonly outboundPortBytesDrop?: number;
  /**
  * Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#outbound_port_bytes_sent DataThunderDdosDnsUdpPortStats#outbound_port_bytes_sent}
  */
  readonly outboundPortBytesSent?: number;
  /**
  * Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#outbound_port_drop DataThunderDdosDnsUdpPortStats#outbound_port_drop}
  */
  readonly outboundPortDrop?: number;
  /**
  * Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#outbound_port_pkt_sent DataThunderDdosDnsUdpPortStats#outbound_port_pkt_sent}
  */
  readonly outboundPortPktSent?: number;
  /**
  * Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#outbound_port_rcvd DataThunderDdosDnsUdpPortStats#outbound_port_rcvd}
  */
  readonly outboundPortRcvd?: number;
  /**
  * Extracted Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#pattern_filter1_match DataThunderDdosDnsUdpPortStats#pattern_filter1_match}
  */
  readonly patternFilter1Match?: number;
  /**
  * Extracted Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#pattern_filter2_match DataThunderDdosDnsUdpPortStats#pattern_filter2_match}
  */
  readonly patternFilter2Match?: number;
  /**
  * Extracted Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#pattern_filter3_match DataThunderDdosDnsUdpPortStats#pattern_filter3_match}
  */
  readonly patternFilter3Match?: number;
  /**
  * Extracted Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#pattern_filter4_match DataThunderDdosDnsUdpPortStats#pattern_filter4_match}
  */
  readonly patternFilter4Match?: number;
  /**
  * Extracted Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#pattern_filter5_match DataThunderDdosDnsUdpPortStats#pattern_filter5_match}
  */
  readonly patternFilter5Match?: number;
  /**
  * Extracted Filter Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#pattern_filter_drop DataThunderDdosDnsUdpPortStats#pattern_filter_drop}
  */
  readonly patternFilterDrop?: number;
  /**
  * Pattern Recognition: Pattern Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#pattern_not_found DataThunderDdosDnsUdpPortStats#pattern_not_found}
  */
  readonly patternNotFound?: number;
  /**
  * Pattern Recognition: Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#pattern_recognition_generic_error DataThunderDdosDnsUdpPortStats#pattern_recognition_generic_error}
  */
  readonly patternRecognitionGenericError?: number;
  /**
  * Pattern Recognition: Pattern Change Detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#pattern_recognition_pattern_changed DataThunderDdosDnsUdpPortStats#pattern_recognition_pattern_changed}
  */
  readonly patternRecognitionPatternChanged?: number;
  /**
  * Pattern Recognition: Engine Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#pattern_recognition_proceeded DataThunderDdosDnsUdpPortStats#pattern_recognition_proceeded}
  */
  readonly patternRecognitionProceeded?: number;
  /**
  * Pattern Recognition: Sampling Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#pattern_recognition_sampling_started DataThunderDdosDnsUdpPortStats#pattern_recognition_sampling_started}
  */
  readonly patternRecognitionSamplingStarted?: number;
  /**
  * UDP Payload Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#payload_too_big DataThunderDdosDnsUdpPortStats#payload_too_big}
  */
  readonly payloadTooBig?: number;
  /**
  * UDP Payload Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#payload_too_small DataThunderDdosDnsUdpPortStats#payload_too_small}
  */
  readonly payloadTooSmall?: number;
  /**
  * Inbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#port_bytes DataThunderDdosDnsUdpPortStats#port_bytes}
  */
  readonly portBytes?: number;
  /**
  * Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#port_bytes_drop DataThunderDdosDnsUdpPortStats#port_bytes_drop}
  */
  readonly portBytesDrop?: number;
  /**
  * Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#port_bytes_sent DataThunderDdosDnsUdpPortStats#port_bytes_sent}
  */
  readonly portBytesSent?: number;
  /**
  * Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#port_conn_limm_exceed DataThunderDdosDnsUdpPortStats#port_conn_limm_exceed}
  */
  readonly portConnLimmExceed?: number;
  /**
  * Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#port_conn_rate_exceed DataThunderDdosDnsUdpPortStats#port_conn_rate_exceed}
  */
  readonly portConnRateExceed?: number;
  /**
  * Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#port_drop DataThunderDdosDnsUdpPortStats#port_drop}
  */
  readonly portDrop?: number;
  /**
  * KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#port_kbit_rate_exceed DataThunderDdosDnsUdpPortStats#port_kbit_rate_exceed}
  */
  readonly portKbitRateExceed?: number;
  /**
  * KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#port_kbit_rate_exceed_pkt DataThunderDdosDnsUdpPortStats#port_kbit_rate_exceed_pkt}
  */
  readonly portKbitRateExceedPkt?: number;
  /**
  * Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#port_pkt_rate_exceed DataThunderDdosDnsUdpPortStats#port_pkt_rate_exceed}
  */
  readonly portPktRateExceed?: number;
  /**
  * Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#port_pkt_sent DataThunderDdosDnsUdpPortStats#port_pkt_sent}
  */
  readonly portPktSent?: number;
  /**
  * Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#port_rcvd DataThunderDdosDnsUdpPortStats#port_rcvd}
  */
  readonly portRcvd?: number;
  /**
  * Src Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#port_src_bl DataThunderDdosDnsUdpPortStats#port_src_bl}
  */
  readonly portSrcBl?: number;
  /**
  * Query Type A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#query_type_a DataThunderDdosDnsUdpPortStats#query_type_a}
  */
  readonly queryTypeA?: number;
  /**
  * Query Type AAAA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#query_type_aaaa DataThunderDdosDnsUdpPortStats#query_type_aaaa}
  */
  readonly queryTypeAaaa?: number;
  /**
  * Query Type ANY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#query_type_any DataThunderDdosDnsUdpPortStats#query_type_any}
  */
  readonly queryTypeAny?: number;
  /**
  * Query Type ANY Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#query_type_any_drop DataThunderDdosDnsUdpPortStats#query_type_any_drop}
  */
  readonly queryTypeAnyDrop?: number;
  /**
  * Query Type CNAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#query_type_cname DataThunderDdosDnsUdpPortStats#query_type_cname}
  */
  readonly queryTypeCname?: number;
  /**
  * Query Type MX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#query_type_mx DataThunderDdosDnsUdpPortStats#query_type_mx}
  */
  readonly queryTypeMx?: number;
  /**
  * Query Type NS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#query_type_ns DataThunderDdosDnsUdpPortStats#query_type_ns}
  */
  readonly queryTypeNs?: number;
  /**
  * Query Type OPT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#query_type_opt DataThunderDdosDnsUdpPortStats#query_type_opt}
  */
  readonly queryTypeOpt?: number;
  /**
  * Query Type SOA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#query_type_soa DataThunderDdosDnsUdpPortStats#query_type_soa}
  */
  readonly queryTypeSoa?: number;
  /**
  * Query Type SRV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#query_type_srv DataThunderDdosDnsUdpPortStats#query_type_srv}
  */
  readonly queryTypeSrv?: number;
  /**
  * Dst Request Rate 1 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#rate_limit_type0 DataThunderDdosDnsUdpPortStats#rate_limit_type0}
  */
  readonly rateLimitType0?: number;
  /**
  * Dst Request Rate 2 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#rate_limit_type1 DataThunderDdosDnsUdpPortStats#rate_limit_type1}
  */
  readonly rateLimitType1?: number;
  /**
  * Dst Request Rate 3 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#rate_limit_type2 DataThunderDdosDnsUdpPortStats#rate_limit_type2}
  */
  readonly rateLimitType2?: number;
  /**
  * Dst Request Rate 4 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#rate_limit_type3 DataThunderDdosDnsUdpPortStats#rate_limit_type3}
  */
  readonly rateLimitType3?: number;
  /**
  * Dst Request Rate 5 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#rate_limit_type4 DataThunderDdosDnsUdpPortStats#rate_limit_type4}
  */
  readonly rateLimitType4?: number;
  /**
  * Request Retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#req_retrans DataThunderDdosDnsUdpPortStats#req_retrans}
  */
  readonly reqRetrans?: number;
  /**
  * DNS Requests Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#req_sent DataThunderDdosDnsUdpPortStats#req_sent}
  */
  readonly reqSent?: number;
  /**
  * Request Size Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#req_size_exceed DataThunderDdosDnsUdpPortStats#req_size_exceed}
  */
  readonly reqSizeExceed?: number;
  /**
  * Record Type Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#rrtype_drop DataThunderDdosDnsUdpPortStats#rrtype_drop}
  */
  readonly rrtypeDrop?: number;
  /**
  * Sessions Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#sess_aged DataThunderDdosDnsUdpPortStats#sess_aged}
  */
  readonly sessAged?: number;
  /**
  * Session Create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#sess_create DataThunderDdosDnsUdpPortStats#sess_create}
  */
  readonly sessCreate?: number;
  /**
  * Inbound Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#sess_create_inbound DataThunderDdosDnsUdpPortStats#sess_create_inbound}
  */
  readonly sessCreateInbound?: number;
  /**
  * Outbound Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#sess_create_outbound DataThunderDdosDnsUdpPortStats#sess_create_outbound}
  */
  readonly sessCreateOutbound?: number;
  /**
  * Sflow External Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#sflow_external_packets_sent DataThunderDdosDnsUdpPortStats#sflow_external_packets_sent}
  */
  readonly sflowExternalPacketsSent?: number;
  /**
  * Sflow External Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#sflow_external_samples_packed DataThunderDdosDnsUdpPortStats#sflow_external_samples_packed}
  */
  readonly sflowExternalSamplesPacked?: number;
  /**
  * Sflow Internal Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#sflow_internal_packets_sent DataThunderDdosDnsUdpPortStats#sflow_internal_packets_sent}
  */
  readonly sflowInternalPacketsSent?: number;
  /**
  * Sflow Internal Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#sflow_internal_samples_packed DataThunderDdosDnsUdpPortStats#sflow_internal_samples_packed}
  */
  readonly sflowInternalSamplesPacked?: number;
  /**
  * Source NAT Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#snat_fail DataThunderDdosDnsUdpPortStats#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * UDP Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#spoof_detect_fail DataThunderDdosDnsUdpPortStats#spoof_detect_fail}
  */
  readonly spoofDetectFail?: number;
  /**
  * Src UDP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_conn_pkt_rate_excd DataThunderDdosDnsUdpPortStats#src_conn_pkt_rate_excd}
  */
  readonly srcConnPktRateExcd?: number;
  /**
  * Src DNS Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_dns_auth_drop DataThunderDdosDnsUdpPortStats#src_dns_auth_drop}
  */
  readonly srcDnsAuthDrop?: number;
  /**
  * Src FQDN Label Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_dns_fqdn_label_len_exceed DataThunderDdosDnsUdpPortStats#src_dns_fqdn_label_len_exceed}
  */
  readonly srcDnsFqdnLabelLenExceed?: number;
  /**
  * Src Malform Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_dns_malform DataThunderDdosDnsUdpPortStats#src_dns_malform}
  */
  readonly srcDnsMalform?: number;
  /**
  * Src Malform Query Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_dns_malform_drop DataThunderDdosDnsUdpPortStats#src_dns_malform_drop}
  */
  readonly srcDnsMalformDrop?: number;
  /**
  * Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_drop DataThunderDdosDnsUdpPortStats#src_drop}
  */
  readonly srcDrop?: number;
  /**
  * Src Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_filter1_match DataThunderDdosDnsUdpPortStats#src_filter1_match}
  */
  readonly srcFilter1Match?: number;
  /**
  * Src Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_filter2_match DataThunderDdosDnsUdpPortStats#src_filter2_match}
  */
  readonly srcFilter2Match?: number;
  /**
  * Src Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_filter3_match DataThunderDdosDnsUdpPortStats#src_filter3_match}
  */
  readonly srcFilter3Match?: number;
  /**
  * Src Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_filter4_match DataThunderDdosDnsUdpPortStats#src_filter4_match}
  */
  readonly srcFilter4Match?: number;
  /**
  * Src Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_filter5_match DataThunderDdosDnsUdpPortStats#src_filter5_match}
  */
  readonly srcFilter5Match?: number;
  /**
  * Src Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_filter_action_blacklist DataThunderDdosDnsUdpPortStats#src_filter_action_blacklist}
  */
  readonly srcFilterActionBlacklist?: number;
  /**
  * Src Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_filter_action_default_pass DataThunderDdosDnsUdpPortStats#src_filter_action_default_pass}
  */
  readonly srcFilterActionDefaultPass?: number;
  /**
  * Src Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_filter_action_drop DataThunderDdosDnsUdpPortStats#src_filter_action_drop}
  */
  readonly srcFilterActionDrop?: number;
  /**
  * Src Filter Action Whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_filter_action_whitelist DataThunderDdosDnsUdpPortStats#src_filter_action_whitelist}
  */
  readonly srcFilterActionWhitelist?: number;
  /**
  * Src Filter Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_filter_auth_fail DataThunderDdosDnsUdpPortStats#src_filter_auth_fail}
  */
  readonly srcFilterAuthFail?: number;
  /**
  * Src Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_filter_none_match DataThunderDdosDnsUdpPortStats#src_filter_none_match}
  */
  readonly srcFilterNoneMatch?: number;
  /**
  * Src Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_filter_total_not_match DataThunderDdosDnsUdpPortStats#src_filter_total_not_match}
  */
  readonly srcFilterTotalNotMatch?: number;
  /**
  * Src Auth Force-TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_force_tcp_auth DataThunderDdosDnsUdpPortStats#src_force_tcp_auth}
  */
  readonly srcForceTcpAuth?: number;
  /**
  * Src FQDN Label Count Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_fqdn_label_count_exceed DataThunderDdosDnsUdpPortStats#src_fqdn_label_count_exceed}
  */
  readonly srcFqdnLabelCountExceed?: number;
  /**
  * Src Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_frag_drop DataThunderDdosDnsUdpPortStats#src_frag_drop}
  */
  readonly srcFragDrop?: number;
  /**
  * Src NTP Monlist Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_ntp_monlist_req DataThunderDdosDnsUdpPortStats#src_ntp_monlist_req}
  */
  readonly srcNtpMonlistReq?: number;
  /**
  * Src NTP Monlist Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_ntp_monlist_resp DataThunderDdosDnsUdpPortStats#src_ntp_monlist_resp}
  */
  readonly srcNtpMonlistResp?: number;
  /**
  * Src UDP Payload Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_payload_too_big DataThunderDdosDnsUdpPortStats#src_payload_too_big}
  */
  readonly srcPayloadTooBig?: number;
  /**
  * Src UDP Payload Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_payload_too_small DataThunderDdosDnsUdpPortStats#src_payload_too_small}
  */
  readonly srcPayloadTooSmall?: number;
  /**
  * Src Query Type ANY Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_query_type_any_drop DataThunderDdosDnsUdpPortStats#src_query_type_any_drop}
  */
  readonly srcQueryTypeAnyDrop?: number;
  /**
  * Src Request Rate 1 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_rate_limit_type0 DataThunderDdosDnsUdpPortStats#src_rate_limit_type0}
  */
  readonly srcRateLimitType0?: number;
  /**
  * Src Request Rate 2 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_rate_limit_type1 DataThunderDdosDnsUdpPortStats#src_rate_limit_type1}
  */
  readonly srcRateLimitType1?: number;
  /**
  * Src Request Rate 3 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_rate_limit_type2 DataThunderDdosDnsUdpPortStats#src_rate_limit_type2}
  */
  readonly srcRateLimitType2?: number;
  /**
  * Src Request Rate 4 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_rate_limit_type3 DataThunderDdosDnsUdpPortStats#src_rate_limit_type3}
  */
  readonly srcRateLimitType3?: number;
  /**
  * Src Request Rate 5 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_rate_limit_type4 DataThunderDdosDnsUdpPortStats#src_rate_limit_type4}
  */
  readonly srcRateLimitType4?: number;
  /**
  * Src Auth UDP Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_udp_auth DataThunderDdosDnsUdpPortStats#src_udp_auth}
  */
  readonly srcUdpAuth?: number;
  /**
  * Src UDP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_udp_auth_drop DataThunderDdosDnsUdpPortStats#src_udp_auth_drop}
  */
  readonly srcUdpAuthDrop?: number;
  /**
  * Src Auth UDP Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_udp_auth_fail DataThunderDdosDnsUdpPortStats#src_udp_auth_fail}
  */
  readonly srcUdpAuthFail?: number;
  /**
  * Src UDP Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_udp_auth_timeout DataThunderDdosDnsUdpPortStats#src_udp_auth_timeout}
  */
  readonly srcUdpAuthTimeout?: number;
  /**
  * Src UDP Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_udp_retry_gap_drop DataThunderDdosDnsUdpPortStats#src_udp_retry_gap_drop}
  */
  readonly srcUdpRetryGapDrop?: number;
  /**
  * Src UDP Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_udp_retry_init DataThunderDdosDnsUdpPortStats#src_udp_retry_init}
  */
  readonly srcUdpRetryInit?: number;
  /**
  * Src UDP Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_udp_retry_pass DataThunderDdosDnsUdpPortStats#src_udp_retry_pass}
  */
  readonly srcUdpRetryPass?: number;
  /**
  * Src UDP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#src_well_known_port DataThunderDdosDnsUdpPortStats#src_well_known_port}
  */
  readonly srcWellKnownPort?: number;
  /**
  * Token Authentication Current Salt Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#token_authentication_curr_salt_matched DataThunderDdosDnsUdpPortStats#token_authentication_curr_salt_matched}
  */
  readonly tokenAuthenticationCurrSaltMatched?: number;
  /**
  * Token Authentication Invalid Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#token_authentication_invalid DataThunderDdosDnsUdpPortStats#token_authentication_invalid}
  */
  readonly tokenAuthenticationInvalid?: number;
  /**
  * Token Authentication Mismatched Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#token_authentication_mismatched DataThunderDdosDnsUdpPortStats#token_authentication_mismatched}
  */
  readonly tokenAuthenticationMismatched?: number;
  /**
  * Token Authentication Previous Salt Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#token_authentication_prev_salt_matched DataThunderDdosDnsUdpPortStats#token_authentication_prev_salt_matched}
  */
  readonly tokenAuthenticationPrevSaltMatched?: number;
  /**
  * Token Authentication Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#token_authentication_session_created DataThunderDdosDnsUdpPortStats#token_authentication_session_created}
  */
  readonly tokenAuthenticationSessionCreated?: number;
  /**
  * Token Authentication Session Created Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#token_authentication_session_created_fail DataThunderDdosDnsUdpPortStats#token_authentication_session_created_fail}
  */
  readonly tokenAuthenticationSessionCreatedFail?: number;
  /**
  * Auth UDP Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#udp_auth DataThunderDdosDnsUdpPortStats#udp_auth}
  */
  readonly udpAuth?: number;
  /**
  * UDP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#udp_auth_drop DataThunderDdosDnsUdpPortStats#udp_auth_drop}
  */
  readonly udpAuthDrop?: number;
  /**
  * Auth UDP Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#udp_auth_fail DataThunderDdosDnsUdpPortStats#udp_auth_fail}
  */
  readonly udpAuthFail?: number;
  /**
  * Auth UDP Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#udp_auth_pass DataThunderDdosDnsUdpPortStats#udp_auth_pass}
  */
  readonly udpAuthPass?: number;
  /**
  * Auth UDP Retry Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#udp_auth_retry_fail DataThunderDdosDnsUdpPortStats#udp_auth_retry_fail}
  */
  readonly udpAuthRetryFail?: number;
  /**
  * Auth UDP Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#udp_auth_retry_gap_drop DataThunderDdosDnsUdpPortStats#udp_auth_retry_gap_drop}
  */
  readonly udpAuthRetryGapDrop?: number;
  /**
  * UDP Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#udp_retry_gap_drop DataThunderDdosDnsUdpPortStats#udp_retry_gap_drop}
  */
  readonly udpRetryGapDrop?: number;
  /**
  * UDP Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#udp_retry_init DataThunderDdosDnsUdpPortStats#udp_retry_init}
  */
  readonly udpRetryInit?: number;
  /**
  * UDP Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#udp_retry_pass DataThunderDdosDnsUdpPortStats#udp_retry_pass}
  */
  readonly udpRetryPass?: number;
  /**
  * UDP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#wellknown_sport_drop DataThunderDdosDnsUdpPortStats#wellknown_sport_drop}
  */
  readonly wellknownSportDrop?: number;
}

export function dataThunderDdosDnsUdpPortStatsStatsToTerraform(struct?: DataThunderDdosDnsUdpPortStatsStatsOutputReference | DataThunderDdosDnsUdpPortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bl: cdktf.numberToTerraform(struct!.bl),
    conn_prate_excd: cdktf.numberToTerraform(struct!.connPrateExcd),
    dg_action_default: cdktf.numberToTerraform(struct!.dgActionDefault),
    dg_action_deny: cdktf.numberToTerraform(struct!.dgActionDeny),
    dg_action_permit: cdktf.numberToTerraform(struct!.dgActionPermit),
    dg_rate_exceed: cdktf.numberToTerraform(struct!.dgRateExceed),
    dg_request_check_fail: cdktf.numberToTerraform(struct!.dgRequestCheckFail),
    dns_auth_drop: cdktf.numberToTerraform(struct!.dnsAuthDrop),
    dns_auth_resp: cdktf.numberToTerraform(struct!.dnsAuthResp),
    dns_malform: cdktf.numberToTerraform(struct!.dnsMalform),
    dns_malform_drop: cdktf.numberToTerraform(struct!.dnsMalformDrop),
    dns_query_class_any: cdktf.numberToTerraform(struct!.dnsQueryClassAny),
    dns_query_class_chaos: cdktf.numberToTerraform(struct!.dnsQueryClassChaos),
    dns_query_class_csnet: cdktf.numberToTerraform(struct!.dnsQueryClassCsnet),
    dns_query_class_hs: cdktf.numberToTerraform(struct!.dnsQueryClassHs),
    dns_query_class_in: cdktf.numberToTerraform(struct!.dnsQueryClassIn),
    dns_query_class_none: cdktf.numberToTerraform(struct!.dnsQueryClassNone),
    dns_query_class_whitelist_miss: cdktf.numberToTerraform(struct!.dnsQueryClassWhitelistMiss),
    dst_hw_drop: cdktf.numberToTerraform(struct!.dstHwDrop),
    exceed_action_drop: cdktf.numberToTerraform(struct!.exceedActionDrop),
    exceed_action_tunnel: cdktf.numberToTerraform(struct!.exceedActionTunnel),
    exceed_drop_brate_src: cdktf.numberToTerraform(struct!.exceedDropBrateSrc),
    exceed_drop_brate_src_pkt: cdktf.numberToTerraform(struct!.exceedDropBrateSrcPkt),
    exceed_drop_climit_src: cdktf.numberToTerraform(struct!.exceedDropClimitSrc),
    exceed_drop_crate_src: cdktf.numberToTerraform(struct!.exceedDropCrateSrc),
    exceed_drop_prate_src: cdktf.numberToTerraform(struct!.exceedDropPrateSrc),
    filter1_match: cdktf.numberToTerraform(struct!.filter1Match),
    filter2_match: cdktf.numberToTerraform(struct!.filter2Match),
    filter3_match: cdktf.numberToTerraform(struct!.filter3Match),
    filter4_match: cdktf.numberToTerraform(struct!.filter4Match),
    filter5_match: cdktf.numberToTerraform(struct!.filter5Match),
    filter_action_blacklist: cdktf.numberToTerraform(struct!.filterActionBlacklist),
    filter_action_default_pass: cdktf.numberToTerraform(struct!.filterActionDefaultPass),
    filter_action_drop: cdktf.numberToTerraform(struct!.filterActionDrop),
    filter_action_whitelist: cdktf.numberToTerraform(struct!.filterActionWhitelist),
    filter_auth_fail: cdktf.numberToTerraform(struct!.filterAuthFail),
    filter_none_match: cdktf.numberToTerraform(struct!.filterNoneMatch),
    filter_total_not_match: cdktf.numberToTerraform(struct!.filterTotalNotMatch),
    force_tcp_auth: cdktf.numberToTerraform(struct!.forceTcpAuth),
    force_tcp_auth_timeout: cdktf.numberToTerraform(struct!.forceTcpAuthTimeout),
    fqdn_label_count_exceed: cdktf.numberToTerraform(struct!.fqdnLabelCountExceed),
    fqdn_label_len_exceed: cdktf.numberToTerraform(struct!.fqdnLabelLenExceed),
    fqdn_rate_by_label_count_check: cdktf.numberToTerraform(struct!.fqdnRateByLabelCountCheck),
    fqdn_rate_by_label_count_exceed: cdktf.numberToTerraform(struct!.fqdnRateByLabelCountExceed),
    fqdn_stage_2_rate_exceed: cdktf.numberToTerraform(struct!.fqdnStage2RateExceed),
    frag_drop: cdktf.numberToTerraform(struct!.fragDrop),
    frag_rcvd: cdktf.numberToTerraform(struct!.fragRcvd),
    frag_timeout: cdktf.numberToTerraform(struct!.fragTimeout),
    is_nxdomain: cdktf.numberToTerraform(struct!.isNxdomain),
    non_query_opcode_pass_through: cdktf.numberToTerraform(struct!.nonQueryOpcodePassThrough),
    ntp_monlist_req: cdktf.numberToTerraform(struct!.ntpMonlistReq),
    ntp_monlist_resp: cdktf.numberToTerraform(struct!.ntpMonlistResp),
    nxdomain_bl_drop: cdktf.numberToTerraform(struct!.nxdomainBlDrop),
    nxdomain_drop: cdktf.numberToTerraform(struct!.nxdomainDrop),
    nxdomain_rate_exceed: cdktf.numberToTerraform(struct!.nxdomainRateExceed),
    outbound_port_bytes: cdktf.numberToTerraform(struct!.outboundPortBytes),
    outbound_port_bytes_drop: cdktf.numberToTerraform(struct!.outboundPortBytesDrop),
    outbound_port_bytes_sent: cdktf.numberToTerraform(struct!.outboundPortBytesSent),
    outbound_port_drop: cdktf.numberToTerraform(struct!.outboundPortDrop),
    outbound_port_pkt_sent: cdktf.numberToTerraform(struct!.outboundPortPktSent),
    outbound_port_rcvd: cdktf.numberToTerraform(struct!.outboundPortRcvd),
    pattern_filter1_match: cdktf.numberToTerraform(struct!.patternFilter1Match),
    pattern_filter2_match: cdktf.numberToTerraform(struct!.patternFilter2Match),
    pattern_filter3_match: cdktf.numberToTerraform(struct!.patternFilter3Match),
    pattern_filter4_match: cdktf.numberToTerraform(struct!.patternFilter4Match),
    pattern_filter5_match: cdktf.numberToTerraform(struct!.patternFilter5Match),
    pattern_filter_drop: cdktf.numberToTerraform(struct!.patternFilterDrop),
    pattern_not_found: cdktf.numberToTerraform(struct!.patternNotFound),
    pattern_recognition_generic_error: cdktf.numberToTerraform(struct!.patternRecognitionGenericError),
    pattern_recognition_pattern_changed: cdktf.numberToTerraform(struct!.patternRecognitionPatternChanged),
    pattern_recognition_proceeded: cdktf.numberToTerraform(struct!.patternRecognitionProceeded),
    pattern_recognition_sampling_started: cdktf.numberToTerraform(struct!.patternRecognitionSamplingStarted),
    payload_too_big: cdktf.numberToTerraform(struct!.payloadTooBig),
    payload_too_small: cdktf.numberToTerraform(struct!.payloadTooSmall),
    port_bytes: cdktf.numberToTerraform(struct!.portBytes),
    port_bytes_drop: cdktf.numberToTerraform(struct!.portBytesDrop),
    port_bytes_sent: cdktf.numberToTerraform(struct!.portBytesSent),
    port_conn_limm_exceed: cdktf.numberToTerraform(struct!.portConnLimmExceed),
    port_conn_rate_exceed: cdktf.numberToTerraform(struct!.portConnRateExceed),
    port_drop: cdktf.numberToTerraform(struct!.portDrop),
    port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.portKbitRateExceed),
    port_kbit_rate_exceed_pkt: cdktf.numberToTerraform(struct!.portKbitRateExceedPkt),
    port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.portPktRateExceed),
    port_pkt_sent: cdktf.numberToTerraform(struct!.portPktSent),
    port_rcvd: cdktf.numberToTerraform(struct!.portRcvd),
    port_src_bl: cdktf.numberToTerraform(struct!.portSrcBl),
    query_type_a: cdktf.numberToTerraform(struct!.queryTypeA),
    query_type_aaaa: cdktf.numberToTerraform(struct!.queryTypeAaaa),
    query_type_any: cdktf.numberToTerraform(struct!.queryTypeAny),
    query_type_any_drop: cdktf.numberToTerraform(struct!.queryTypeAnyDrop),
    query_type_cname: cdktf.numberToTerraform(struct!.queryTypeCname),
    query_type_mx: cdktf.numberToTerraform(struct!.queryTypeMx),
    query_type_ns: cdktf.numberToTerraform(struct!.queryTypeNs),
    query_type_opt: cdktf.numberToTerraform(struct!.queryTypeOpt),
    query_type_soa: cdktf.numberToTerraform(struct!.queryTypeSoa),
    query_type_srv: cdktf.numberToTerraform(struct!.queryTypeSrv),
    rate_limit_type0: cdktf.numberToTerraform(struct!.rateLimitType0),
    rate_limit_type1: cdktf.numberToTerraform(struct!.rateLimitType1),
    rate_limit_type2: cdktf.numberToTerraform(struct!.rateLimitType2),
    rate_limit_type3: cdktf.numberToTerraform(struct!.rateLimitType3),
    rate_limit_type4: cdktf.numberToTerraform(struct!.rateLimitType4),
    req_retrans: cdktf.numberToTerraform(struct!.reqRetrans),
    req_sent: cdktf.numberToTerraform(struct!.reqSent),
    req_size_exceed: cdktf.numberToTerraform(struct!.reqSizeExceed),
    rrtype_drop: cdktf.numberToTerraform(struct!.rrtypeDrop),
    sess_aged: cdktf.numberToTerraform(struct!.sessAged),
    sess_create: cdktf.numberToTerraform(struct!.sessCreate),
    sess_create_inbound: cdktf.numberToTerraform(struct!.sessCreateInbound),
    sess_create_outbound: cdktf.numberToTerraform(struct!.sessCreateOutbound),
    sflow_external_packets_sent: cdktf.numberToTerraform(struct!.sflowExternalPacketsSent),
    sflow_external_samples_packed: cdktf.numberToTerraform(struct!.sflowExternalSamplesPacked),
    sflow_internal_packets_sent: cdktf.numberToTerraform(struct!.sflowInternalPacketsSent),
    sflow_internal_samples_packed: cdktf.numberToTerraform(struct!.sflowInternalSamplesPacked),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    spoof_detect_fail: cdktf.numberToTerraform(struct!.spoofDetectFail),
    src_conn_pkt_rate_excd: cdktf.numberToTerraform(struct!.srcConnPktRateExcd),
    src_dns_auth_drop: cdktf.numberToTerraform(struct!.srcDnsAuthDrop),
    src_dns_fqdn_label_len_exceed: cdktf.numberToTerraform(struct!.srcDnsFqdnLabelLenExceed),
    src_dns_malform: cdktf.numberToTerraform(struct!.srcDnsMalform),
    src_dns_malform_drop: cdktf.numberToTerraform(struct!.srcDnsMalformDrop),
    src_drop: cdktf.numberToTerraform(struct!.srcDrop),
    src_filter1_match: cdktf.numberToTerraform(struct!.srcFilter1Match),
    src_filter2_match: cdktf.numberToTerraform(struct!.srcFilter2Match),
    src_filter3_match: cdktf.numberToTerraform(struct!.srcFilter3Match),
    src_filter4_match: cdktf.numberToTerraform(struct!.srcFilter4Match),
    src_filter5_match: cdktf.numberToTerraform(struct!.srcFilter5Match),
    src_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcFilterActionBlacklist),
    src_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcFilterActionDefaultPass),
    src_filter_action_drop: cdktf.numberToTerraform(struct!.srcFilterActionDrop),
    src_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcFilterActionWhitelist),
    src_filter_auth_fail: cdktf.numberToTerraform(struct!.srcFilterAuthFail),
    src_filter_none_match: cdktf.numberToTerraform(struct!.srcFilterNoneMatch),
    src_filter_total_not_match: cdktf.numberToTerraform(struct!.srcFilterTotalNotMatch),
    src_force_tcp_auth: cdktf.numberToTerraform(struct!.srcForceTcpAuth),
    src_fqdn_label_count_exceed: cdktf.numberToTerraform(struct!.srcFqdnLabelCountExceed),
    src_frag_drop: cdktf.numberToTerraform(struct!.srcFragDrop),
    src_ntp_monlist_req: cdktf.numberToTerraform(struct!.srcNtpMonlistReq),
    src_ntp_monlist_resp: cdktf.numberToTerraform(struct!.srcNtpMonlistResp),
    src_payload_too_big: cdktf.numberToTerraform(struct!.srcPayloadTooBig),
    src_payload_too_small: cdktf.numberToTerraform(struct!.srcPayloadTooSmall),
    src_query_type_any_drop: cdktf.numberToTerraform(struct!.srcQueryTypeAnyDrop),
    src_rate_limit_type0: cdktf.numberToTerraform(struct!.srcRateLimitType0),
    src_rate_limit_type1: cdktf.numberToTerraform(struct!.srcRateLimitType1),
    src_rate_limit_type2: cdktf.numberToTerraform(struct!.srcRateLimitType2),
    src_rate_limit_type3: cdktf.numberToTerraform(struct!.srcRateLimitType3),
    src_rate_limit_type4: cdktf.numberToTerraform(struct!.srcRateLimitType4),
    src_udp_auth: cdktf.numberToTerraform(struct!.srcUdpAuth),
    src_udp_auth_drop: cdktf.numberToTerraform(struct!.srcUdpAuthDrop),
    src_udp_auth_fail: cdktf.numberToTerraform(struct!.srcUdpAuthFail),
    src_udp_auth_timeout: cdktf.numberToTerraform(struct!.srcUdpAuthTimeout),
    src_udp_retry_gap_drop: cdktf.numberToTerraform(struct!.srcUdpRetryGapDrop),
    src_udp_retry_init: cdktf.numberToTerraform(struct!.srcUdpRetryInit),
    src_udp_retry_pass: cdktf.numberToTerraform(struct!.srcUdpRetryPass),
    src_well_known_port: cdktf.numberToTerraform(struct!.srcWellKnownPort),
    token_authentication_curr_salt_matched: cdktf.numberToTerraform(struct!.tokenAuthenticationCurrSaltMatched),
    token_authentication_invalid: cdktf.numberToTerraform(struct!.tokenAuthenticationInvalid),
    token_authentication_mismatched: cdktf.numberToTerraform(struct!.tokenAuthenticationMismatched),
    token_authentication_prev_salt_matched: cdktf.numberToTerraform(struct!.tokenAuthenticationPrevSaltMatched),
    token_authentication_session_created: cdktf.numberToTerraform(struct!.tokenAuthenticationSessionCreated),
    token_authentication_session_created_fail: cdktf.numberToTerraform(struct!.tokenAuthenticationSessionCreatedFail),
    udp_auth: cdktf.numberToTerraform(struct!.udpAuth),
    udp_auth_drop: cdktf.numberToTerraform(struct!.udpAuthDrop),
    udp_auth_fail: cdktf.numberToTerraform(struct!.udpAuthFail),
    udp_auth_pass: cdktf.numberToTerraform(struct!.udpAuthPass),
    udp_auth_retry_fail: cdktf.numberToTerraform(struct!.udpAuthRetryFail),
    udp_auth_retry_gap_drop: cdktf.numberToTerraform(struct!.udpAuthRetryGapDrop),
    udp_retry_gap_drop: cdktf.numberToTerraform(struct!.udpRetryGapDrop),
    udp_retry_init: cdktf.numberToTerraform(struct!.udpRetryInit),
    udp_retry_pass: cdktf.numberToTerraform(struct!.udpRetryPass),
    wellknown_sport_drop: cdktf.numberToTerraform(struct!.wellknownSportDrop),
  }
}


export function dataThunderDdosDnsUdpPortStatsStatsToHclTerraform(struct?: DataThunderDdosDnsUdpPortStatsStatsOutputReference | DataThunderDdosDnsUdpPortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bl: {
      value: cdktf.numberToHclTerraform(struct!.bl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_prate_excd: {
      value: cdktf.numberToHclTerraform(struct!.connPrateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dg_action_default: {
      value: cdktf.numberToHclTerraform(struct!.dgActionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dg_action_deny: {
      value: cdktf.numberToHclTerraform(struct!.dgActionDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dg_action_permit: {
      value: cdktf.numberToHclTerraform(struct!.dgActionPermit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dg_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dgRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dg_request_check_fail: {
      value: cdktf.numberToHclTerraform(struct!.dgRequestCheckFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_auth_resp: {
      value: cdktf.numberToHclTerraform(struct!.dnsAuthResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_malform: {
      value: cdktf.numberToHclTerraform(struct!.dnsMalform),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_malform_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsMalformDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_any: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_chaos: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassChaos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_csnet: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassCsnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_hs: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassHs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_in: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_none: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassNone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_whitelist_miss: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassWhitelistMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hw_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.exceedActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_action_tunnel: {
      value: cdktf.numberToHclTerraform(struct!.exceedActionTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_brate_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropBrateSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_brate_src_pkt: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropBrateSrcPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_climit_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropClimitSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_crate_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropCrateSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_prate_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropPrateSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter1_match: {
      value: cdktf.numberToHclTerraform(struct!.filter1Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter2_match: {
      value: cdktf.numberToHclTerraform(struct!.filter2Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter3_match: {
      value: cdktf.numberToHclTerraform(struct!.filter3Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter4_match: {
      value: cdktf.numberToHclTerraform(struct!.filter4Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter5_match: {
      value: cdktf.numberToHclTerraform(struct!.filter5Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.filterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.filterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.filterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.filterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.filterAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_none_match: {
      value: cdktf.numberToHclTerraform(struct!.filterNoneMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_total_not_match: {
      value: cdktf.numberToHclTerraform(struct!.filterTotalNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_tcp_auth: {
      value: cdktf.numberToHclTerraform(struct!.forceTcpAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_tcp_auth_timeout: {
      value: cdktf.numberToHclTerraform(struct!.forceTcpAuthTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_label_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.fqdnLabelCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_label_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.fqdnLabelLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_rate_by_label_count_check: {
      value: cdktf.numberToHclTerraform(struct!.fqdnRateByLabelCountCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_rate_by_label_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.fqdnRateByLabelCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_stage_2_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.fqdnStage2RateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.fragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.fragRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_timeout: {
      value: cdktf.numberToHclTerraform(struct!.fragTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_nxdomain: {
      value: cdktf.numberToHclTerraform(struct!.isNxdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_query_opcode_pass_through: {
      value: cdktf.numberToHclTerraform(struct!.nonQueryOpcodePassThrough),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_monlist_req: {
      value: cdktf.numberToHclTerraform(struct!.ntpMonlistReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_monlist_resp: {
      value: cdktf.numberToHclTerraform(struct!.ntpMonlistResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nxdomain_bl_drop: {
      value: cdktf.numberToHclTerraform(struct!.nxdomainBlDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nxdomain_drop: {
      value: cdktf.numberToHclTerraform(struct!.nxdomainDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nxdomain_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.nxdomainRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_bytes: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter1_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter1Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter2_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter2Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter3_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter3Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter4_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter4Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter5_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter5Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter_drop: {
      value: cdktf.numberToHclTerraform(struct!.patternFilterDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_not_found: {
      value: cdktf.numberToHclTerraform(struct!.patternNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_generic_error: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionGenericError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_pattern_changed: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionPatternChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_proceeded: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionProceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_sampling_started: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionSamplingStarted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payload_too_big: {
      value: cdktf.numberToHclTerraform(struct!.payloadTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payload_too_small: {
      value: cdktf.numberToHclTerraform(struct!.payloadTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_bytes: {
      value: cdktf.numberToHclTerraform(struct!.portBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.portBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.portBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_conn_limm_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portConnLimmExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_drop: {
      value: cdktf.numberToHclTerraform(struct!.portDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_kbit_rate_exceed_pkt: {
      value: cdktf.numberToHclTerraform(struct!.portKbitRateExceedPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.portPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.portRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_src_bl: {
      value: cdktf.numberToHclTerraform(struct!.portSrcBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_type_a: {
      value: cdktf.numberToHclTerraform(struct!.queryTypeA),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_type_aaaa: {
      value: cdktf.numberToHclTerraform(struct!.queryTypeAaaa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_type_any: {
      value: cdktf.numberToHclTerraform(struct!.queryTypeAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_type_any_drop: {
      value: cdktf.numberToHclTerraform(struct!.queryTypeAnyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_type_cname: {
      value: cdktf.numberToHclTerraform(struct!.queryTypeCname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_type_mx: {
      value: cdktf.numberToHclTerraform(struct!.queryTypeMx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_type_ns: {
      value: cdktf.numberToHclTerraform(struct!.queryTypeNs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_type_opt: {
      value: cdktf.numberToHclTerraform(struct!.queryTypeOpt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_type_soa: {
      value: cdktf.numberToHclTerraform(struct!.queryTypeSoa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_type_srv: {
      value: cdktf.numberToHclTerraform(struct!.queryTypeSrv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_type0: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitType0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_type1: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitType1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_type2: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitType2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_type3: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitType3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_type4: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitType4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_retrans: {
      value: cdktf.numberToHclTerraform(struct!.reqRetrans),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sent: {
      value: cdktf.numberToHclTerraform(struct!.reqSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_size_exceed: {
      value: cdktf.numberToHclTerraform(struct!.reqSizeExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rrtype_drop: {
      value: cdktf.numberToHclTerraform(struct!.rrtypeDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_aged: {
      value: cdktf.numberToHclTerraform(struct!.sessAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create: {
      value: cdktf.numberToHclTerraform(struct!.sessCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create_inbound: {
      value: cdktf.numberToHclTerraform(struct!.sessCreateInbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create_outbound: {
      value: cdktf.numberToHclTerraform(struct!.sessCreateOutbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_external_packets_sent: {
      value: cdktf.numberToHclTerraform(struct!.sflowExternalPacketsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_external_samples_packed: {
      value: cdktf.numberToHclTerraform(struct!.sflowExternalSamplesPacked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_internal_packets_sent: {
      value: cdktf.numberToHclTerraform(struct!.sflowInternalPacketsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_internal_samples_packed: {
      value: cdktf.numberToHclTerraform(struct!.sflowInternalSamplesPacked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spoof_detect_fail: {
      value: cdktf.numberToHclTerraform(struct!.spoofDetectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_conn_pkt_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcConnPktRateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dns_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcDnsAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dns_fqdn_label_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcDnsFqdnLabelLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dns_malform: {
      value: cdktf.numberToHclTerraform(struct!.srcDnsMalform),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dns_malform_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcDnsMalformDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter1_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter1Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter2_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter2Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter3_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter3Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter4_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter4Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter5_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter5Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_none_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterNoneMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_total_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterTotalNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_force_tcp_auth: {
      value: cdktf.numberToHclTerraform(struct!.srcForceTcpAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_fqdn_label_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcFqdnLabelCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ntp_monlist_req: {
      value: cdktf.numberToHclTerraform(struct!.srcNtpMonlistReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ntp_monlist_resp: {
      value: cdktf.numberToHclTerraform(struct!.srcNtpMonlistResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_payload_too_big: {
      value: cdktf.numberToHclTerraform(struct!.srcPayloadTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_payload_too_small: {
      value: cdktf.numberToHclTerraform(struct!.srcPayloadTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_query_type_any_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcQueryTypeAnyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_limit_type0: {
      value: cdktf.numberToHclTerraform(struct!.srcRateLimitType0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_limit_type1: {
      value: cdktf.numberToHclTerraform(struct!.srcRateLimitType1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_limit_type2: {
      value: cdktf.numberToHclTerraform(struct!.srcRateLimitType2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_limit_type3: {
      value: cdktf.numberToHclTerraform(struct!.srcRateLimitType3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_limit_type4: {
      value: cdktf.numberToHclTerraform(struct!.srcRateLimitType4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_auth: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_auth_timeout: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpAuthTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_retry_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpRetryPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_well_known_port: {
      value: cdktf.numberToHclTerraform(struct!.srcWellKnownPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_curr_salt_matched: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationCurrSaltMatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_invalid: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_mismatched: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationMismatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_prev_salt_matched: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationPrevSaltMatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_session_created: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_session_created_fail: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationSessionCreatedFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth: {
      value: cdktf.numberToHclTerraform(struct!.udpAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_retry_fail: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthRetryFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_pass: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wellknown_sport_drop: {
      value: cdktf.numberToHclTerraform(struct!.wellknownSportDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsUdpPortStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDnsUdpPortStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bl = this._bl;
    }
    if (this._connPrateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connPrateExcd = this._connPrateExcd;
    }
    if (this._dgActionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.dgActionDefault = this._dgActionDefault;
    }
    if (this._dgActionDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dgActionDeny = this._dgActionDeny;
    }
    if (this._dgActionPermit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dgActionPermit = this._dgActionPermit;
    }
    if (this._dgRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dgRateExceed = this._dgRateExceed;
    }
    if (this._dgRequestCheckFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dgRequestCheckFail = this._dgRequestCheckFail;
    }
    if (this._dnsAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuthDrop = this._dnsAuthDrop;
    }
    if (this._dnsAuthResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuthResp = this._dnsAuthResp;
    }
    if (this._dnsMalform !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMalform = this._dnsMalform;
    }
    if (this._dnsMalformDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMalformDrop = this._dnsMalformDrop;
    }
    if (this._dnsQueryClassAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassAny = this._dnsQueryClassAny;
    }
    if (this._dnsQueryClassChaos !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassChaos = this._dnsQueryClassChaos;
    }
    if (this._dnsQueryClassCsnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassCsnet = this._dnsQueryClassCsnet;
    }
    if (this._dnsQueryClassHs !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassHs = this._dnsQueryClassHs;
    }
    if (this._dnsQueryClassIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassIn = this._dnsQueryClassIn;
    }
    if (this._dnsQueryClassNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassNone = this._dnsQueryClassNone;
    }
    if (this._dnsQueryClassWhitelistMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassWhitelistMiss = this._dnsQueryClassWhitelistMiss;
    }
    if (this._dstHwDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDrop = this._dstHwDrop;
    }
    if (this._exceedActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedActionDrop = this._exceedActionDrop;
    }
    if (this._exceedActionTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedActionTunnel = this._exceedActionTunnel;
    }
    if (this._exceedDropBrateSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropBrateSrc = this._exceedDropBrateSrc;
    }
    if (this._exceedDropBrateSrcPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropBrateSrcPkt = this._exceedDropBrateSrcPkt;
    }
    if (this._exceedDropClimitSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropClimitSrc = this._exceedDropClimitSrc;
    }
    if (this._exceedDropCrateSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropCrateSrc = this._exceedDropCrateSrc;
    }
    if (this._exceedDropPrateSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropPrateSrc = this._exceedDropPrateSrc;
    }
    if (this._filter1Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter1Match = this._filter1Match;
    }
    if (this._filter2Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter2Match = this._filter2Match;
    }
    if (this._filter3Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter3Match = this._filter3Match;
    }
    if (this._filter4Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter4Match = this._filter4Match;
    }
    if (this._filter5Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter5Match = this._filter5Match;
    }
    if (this._filterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActionBlacklist = this._filterActionBlacklist;
    }
    if (this._filterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActionDefaultPass = this._filterActionDefaultPass;
    }
    if (this._filterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActionDrop = this._filterActionDrop;
    }
    if (this._filterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActionWhitelist = this._filterActionWhitelist;
    }
    if (this._filterAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAuthFail = this._filterAuthFail;
    }
    if (this._filterNoneMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterNoneMatch = this._filterNoneMatch;
    }
    if (this._filterTotalNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterTotalNotMatch = this._filterTotalNotMatch;
    }
    if (this._forceTcpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcpAuth = this._forceTcpAuth;
    }
    if (this._forceTcpAuthTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcpAuthTimeout = this._forceTcpAuthTimeout;
    }
    if (this._fqdnLabelCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnLabelCountExceed = this._fqdnLabelCountExceed;
    }
    if (this._fqdnLabelLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnLabelLenExceed = this._fqdnLabelLenExceed;
    }
    if (this._fqdnRateByLabelCountCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnRateByLabelCountCheck = this._fqdnRateByLabelCountCheck;
    }
    if (this._fqdnRateByLabelCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnRateByLabelCountExceed = this._fqdnRateByLabelCountExceed;
    }
    if (this._fqdnStage2RateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnStage2RateExceed = this._fqdnStage2RateExceed;
    }
    if (this._fragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragDrop = this._fragDrop;
    }
    if (this._fragRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragRcvd = this._fragRcvd;
    }
    if (this._fragTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragTimeout = this._fragTimeout;
    }
    if (this._isNxdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNxdomain = this._isNxdomain;
    }
    if (this._nonQueryOpcodePassThrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonQueryOpcodePassThrough = this._nonQueryOpcodePassThrough;
    }
    if (this._ntpMonlistReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistReq = this._ntpMonlistReq;
    }
    if (this._ntpMonlistResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistResp = this._ntpMonlistResp;
    }
    if (this._nxdomainBlDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxdomainBlDrop = this._nxdomainBlDrop;
    }
    if (this._nxdomainDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxdomainDrop = this._nxdomainDrop;
    }
    if (this._nxdomainRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxdomainRateExceed = this._nxdomainRateExceed;
    }
    if (this._outboundPortBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortBytes = this._outboundPortBytes;
    }
    if (this._outboundPortBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortBytesDrop = this._outboundPortBytesDrop;
    }
    if (this._outboundPortBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortBytesSent = this._outboundPortBytesSent;
    }
    if (this._outboundPortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortDrop = this._outboundPortDrop;
    }
    if (this._outboundPortPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortPktSent = this._outboundPortPktSent;
    }
    if (this._outboundPortRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortRcvd = this._outboundPortRcvd;
    }
    if (this._patternFilter1Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter1Match = this._patternFilter1Match;
    }
    if (this._patternFilter2Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter2Match = this._patternFilter2Match;
    }
    if (this._patternFilter3Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter3Match = this._patternFilter3Match;
    }
    if (this._patternFilter4Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter4Match = this._patternFilter4Match;
    }
    if (this._patternFilter5Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter5Match = this._patternFilter5Match;
    }
    if (this._patternFilterDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilterDrop = this._patternFilterDrop;
    }
    if (this._patternNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternNotFound = this._patternNotFound;
    }
    if (this._patternRecognitionGenericError !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionGenericError = this._patternRecognitionGenericError;
    }
    if (this._patternRecognitionPatternChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionPatternChanged = this._patternRecognitionPatternChanged;
    }
    if (this._patternRecognitionProceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionProceeded = this._patternRecognitionProceeded;
    }
    if (this._patternRecognitionSamplingStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionSamplingStarted = this._patternRecognitionSamplingStarted;
    }
    if (this._payloadTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadTooBig = this._payloadTooBig;
    }
    if (this._payloadTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadTooSmall = this._payloadTooSmall;
    }
    if (this._portBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBytes = this._portBytes;
    }
    if (this._portBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBytesDrop = this._portBytesDrop;
    }
    if (this._portBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBytesSent = this._portBytesSent;
    }
    if (this._portConnLimmExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portConnLimmExceed = this._portConnLimmExceed;
    }
    if (this._portConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portConnRateExceed = this._portConnRateExceed;
    }
    if (this._portDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDrop = this._portDrop;
    }
    if (this._portKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKbitRateExceed = this._portKbitRateExceed;
    }
    if (this._portKbitRateExceedPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKbitRateExceedPkt = this._portKbitRateExceedPkt;
    }
    if (this._portPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPktRateExceed = this._portPktRateExceed;
    }
    if (this._portPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPktSent = this._portPktSent;
    }
    if (this._portRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRcvd = this._portRcvd;
    }
    if (this._portSrcBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSrcBl = this._portSrcBl;
    }
    if (this._queryTypeA !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTypeA = this._queryTypeA;
    }
    if (this._queryTypeAaaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTypeAaaa = this._queryTypeAaaa;
    }
    if (this._queryTypeAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTypeAny = this._queryTypeAny;
    }
    if (this._queryTypeAnyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTypeAnyDrop = this._queryTypeAnyDrop;
    }
    if (this._queryTypeCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTypeCname = this._queryTypeCname;
    }
    if (this._queryTypeMx !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTypeMx = this._queryTypeMx;
    }
    if (this._queryTypeNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTypeNs = this._queryTypeNs;
    }
    if (this._queryTypeOpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTypeOpt = this._queryTypeOpt;
    }
    if (this._queryTypeSoa !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTypeSoa = this._queryTypeSoa;
    }
    if (this._queryTypeSrv !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTypeSrv = this._queryTypeSrv;
    }
    if (this._rateLimitType0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitType0 = this._rateLimitType0;
    }
    if (this._rateLimitType1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitType1 = this._rateLimitType1;
    }
    if (this._rateLimitType2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitType2 = this._rateLimitType2;
    }
    if (this._rateLimitType3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitType3 = this._rateLimitType3;
    }
    if (this._rateLimitType4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitType4 = this._rateLimitType4;
    }
    if (this._reqRetrans !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRetrans = this._reqRetrans;
    }
    if (this._reqSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSent = this._reqSent;
    }
    if (this._reqSizeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSizeExceed = this._reqSizeExceed;
    }
    if (this._rrtypeDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrtypeDrop = this._rrtypeDrop;
    }
    if (this._sessAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessAged = this._sessAged;
    }
    if (this._sessCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreate = this._sessCreate;
    }
    if (this._sessCreateInbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreateInbound = this._sessCreateInbound;
    }
    if (this._sessCreateOutbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreateOutbound = this._sessCreateOutbound;
    }
    if (this._sflowExternalPacketsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowExternalPacketsSent = this._sflowExternalPacketsSent;
    }
    if (this._sflowExternalSamplesPacked !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowExternalSamplesPacked = this._sflowExternalSamplesPacked;
    }
    if (this._sflowInternalPacketsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowInternalPacketsSent = this._sflowInternalPacketsSent;
    }
    if (this._sflowInternalSamplesPacked !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowInternalSamplesPacked = this._sflowInternalSamplesPacked;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._spoofDetectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.spoofDetectFail = this._spoofDetectFail;
    }
    if (this._srcConnPktRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnPktRateExcd = this._srcConnPktRateExcd;
    }
    if (this._srcDnsAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsAuthDrop = this._srcDnsAuthDrop;
    }
    if (this._srcDnsFqdnLabelLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsFqdnLabelLenExceed = this._srcDnsFqdnLabelLenExceed;
    }
    if (this._srcDnsMalform !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsMalform = this._srcDnsMalform;
    }
    if (this._srcDnsMalformDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDnsMalformDrop = this._srcDnsMalformDrop;
    }
    if (this._srcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDrop = this._srcDrop;
    }
    if (this._srcFilter1Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter1Match = this._srcFilter1Match;
    }
    if (this._srcFilter2Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter2Match = this._srcFilter2Match;
    }
    if (this._srcFilter3Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter3Match = this._srcFilter3Match;
    }
    if (this._srcFilter4Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter4Match = this._srcFilter4Match;
    }
    if (this._srcFilter5Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter5Match = this._srcFilter5Match;
    }
    if (this._srcFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionBlacklist = this._srcFilterActionBlacklist;
    }
    if (this._srcFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionDefaultPass = this._srcFilterActionDefaultPass;
    }
    if (this._srcFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionDrop = this._srcFilterActionDrop;
    }
    if (this._srcFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionWhitelist = this._srcFilterActionWhitelist;
    }
    if (this._srcFilterAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterAuthFail = this._srcFilterAuthFail;
    }
    if (this._srcFilterNoneMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterNoneMatch = this._srcFilterNoneMatch;
    }
    if (this._srcFilterTotalNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterTotalNotMatch = this._srcFilterTotalNotMatch;
    }
    if (this._srcForceTcpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcForceTcpAuth = this._srcForceTcpAuth;
    }
    if (this._srcFqdnLabelCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFqdnLabelCountExceed = this._srcFqdnLabelCountExceed;
    }
    if (this._srcFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFragDrop = this._srcFragDrop;
    }
    if (this._srcNtpMonlistReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcNtpMonlistReq = this._srcNtpMonlistReq;
    }
    if (this._srcNtpMonlistResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcNtpMonlistResp = this._srcNtpMonlistResp;
    }
    if (this._srcPayloadTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPayloadTooBig = this._srcPayloadTooBig;
    }
    if (this._srcPayloadTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPayloadTooSmall = this._srcPayloadTooSmall;
    }
    if (this._srcQueryTypeAnyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcQueryTypeAnyDrop = this._srcQueryTypeAnyDrop;
    }
    if (this._srcRateLimitType0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateLimitType0 = this._srcRateLimitType0;
    }
    if (this._srcRateLimitType1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateLimitType1 = this._srcRateLimitType1;
    }
    if (this._srcRateLimitType2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateLimitType2 = this._srcRateLimitType2;
    }
    if (this._srcRateLimitType3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateLimitType3 = this._srcRateLimitType3;
    }
    if (this._srcRateLimitType4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateLimitType4 = this._srcRateLimitType4;
    }
    if (this._srcUdpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpAuth = this._srcUdpAuth;
    }
    if (this._srcUdpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpAuthDrop = this._srcUdpAuthDrop;
    }
    if (this._srcUdpAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpAuthFail = this._srcUdpAuthFail;
    }
    if (this._srcUdpAuthTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpAuthTimeout = this._srcUdpAuthTimeout;
    }
    if (this._srcUdpRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpRetryGapDrop = this._srcUdpRetryGapDrop;
    }
    if (this._srcUdpRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpRetryInit = this._srcUdpRetryInit;
    }
    if (this._srcUdpRetryPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpRetryPass = this._srcUdpRetryPass;
    }
    if (this._srcWellKnownPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcWellKnownPort = this._srcWellKnownPort;
    }
    if (this._tokenAuthenticationCurrSaltMatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationCurrSaltMatched = this._tokenAuthenticationCurrSaltMatched;
    }
    if (this._tokenAuthenticationInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationInvalid = this._tokenAuthenticationInvalid;
    }
    if (this._tokenAuthenticationMismatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationMismatched = this._tokenAuthenticationMismatched;
    }
    if (this._tokenAuthenticationPrevSaltMatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationPrevSaltMatched = this._tokenAuthenticationPrevSaltMatched;
    }
    if (this._tokenAuthenticationSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationSessionCreated = this._tokenAuthenticationSessionCreated;
    }
    if (this._tokenAuthenticationSessionCreatedFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationSessionCreatedFail = this._tokenAuthenticationSessionCreatedFail;
    }
    if (this._udpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuth = this._udpAuth;
    }
    if (this._udpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthDrop = this._udpAuthDrop;
    }
    if (this._udpAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthFail = this._udpAuthFail;
    }
    if (this._udpAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthPass = this._udpAuthPass;
    }
    if (this._udpAuthRetryFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthRetryFail = this._udpAuthRetryFail;
    }
    if (this._udpAuthRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthRetryGapDrop = this._udpAuthRetryGapDrop;
    }
    if (this._udpRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryGapDrop = this._udpRetryGapDrop;
    }
    if (this._udpRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryInit = this._udpRetryInit;
    }
    if (this._udpRetryPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryPass = this._udpRetryPass;
    }
    if (this._wellknownSportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellknownSportDrop = this._wellknownSportDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsUdpPortStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bl = undefined;
      this._connPrateExcd = undefined;
      this._dgActionDefault = undefined;
      this._dgActionDeny = undefined;
      this._dgActionPermit = undefined;
      this._dgRateExceed = undefined;
      this._dgRequestCheckFail = undefined;
      this._dnsAuthDrop = undefined;
      this._dnsAuthResp = undefined;
      this._dnsMalform = undefined;
      this._dnsMalformDrop = undefined;
      this._dnsQueryClassAny = undefined;
      this._dnsQueryClassChaos = undefined;
      this._dnsQueryClassCsnet = undefined;
      this._dnsQueryClassHs = undefined;
      this._dnsQueryClassIn = undefined;
      this._dnsQueryClassNone = undefined;
      this._dnsQueryClassWhitelistMiss = undefined;
      this._dstHwDrop = undefined;
      this._exceedActionDrop = undefined;
      this._exceedActionTunnel = undefined;
      this._exceedDropBrateSrc = undefined;
      this._exceedDropBrateSrcPkt = undefined;
      this._exceedDropClimitSrc = undefined;
      this._exceedDropCrateSrc = undefined;
      this._exceedDropPrateSrc = undefined;
      this._filter1Match = undefined;
      this._filter2Match = undefined;
      this._filter3Match = undefined;
      this._filter4Match = undefined;
      this._filter5Match = undefined;
      this._filterActionBlacklist = undefined;
      this._filterActionDefaultPass = undefined;
      this._filterActionDrop = undefined;
      this._filterActionWhitelist = undefined;
      this._filterAuthFail = undefined;
      this._filterNoneMatch = undefined;
      this._filterTotalNotMatch = undefined;
      this._forceTcpAuth = undefined;
      this._forceTcpAuthTimeout = undefined;
      this._fqdnLabelCountExceed = undefined;
      this._fqdnLabelLenExceed = undefined;
      this._fqdnRateByLabelCountCheck = undefined;
      this._fqdnRateByLabelCountExceed = undefined;
      this._fqdnStage2RateExceed = undefined;
      this._fragDrop = undefined;
      this._fragRcvd = undefined;
      this._fragTimeout = undefined;
      this._isNxdomain = undefined;
      this._nonQueryOpcodePassThrough = undefined;
      this._ntpMonlistReq = undefined;
      this._ntpMonlistResp = undefined;
      this._nxdomainBlDrop = undefined;
      this._nxdomainDrop = undefined;
      this._nxdomainRateExceed = undefined;
      this._outboundPortBytes = undefined;
      this._outboundPortBytesDrop = undefined;
      this._outboundPortBytesSent = undefined;
      this._outboundPortDrop = undefined;
      this._outboundPortPktSent = undefined;
      this._outboundPortRcvd = undefined;
      this._patternFilter1Match = undefined;
      this._patternFilter2Match = undefined;
      this._patternFilter3Match = undefined;
      this._patternFilter4Match = undefined;
      this._patternFilter5Match = undefined;
      this._patternFilterDrop = undefined;
      this._patternNotFound = undefined;
      this._patternRecognitionGenericError = undefined;
      this._patternRecognitionPatternChanged = undefined;
      this._patternRecognitionProceeded = undefined;
      this._patternRecognitionSamplingStarted = undefined;
      this._payloadTooBig = undefined;
      this._payloadTooSmall = undefined;
      this._portBytes = undefined;
      this._portBytesDrop = undefined;
      this._portBytesSent = undefined;
      this._portConnLimmExceed = undefined;
      this._portConnRateExceed = undefined;
      this._portDrop = undefined;
      this._portKbitRateExceed = undefined;
      this._portKbitRateExceedPkt = undefined;
      this._portPktRateExceed = undefined;
      this._portPktSent = undefined;
      this._portRcvd = undefined;
      this._portSrcBl = undefined;
      this._queryTypeA = undefined;
      this._queryTypeAaaa = undefined;
      this._queryTypeAny = undefined;
      this._queryTypeAnyDrop = undefined;
      this._queryTypeCname = undefined;
      this._queryTypeMx = undefined;
      this._queryTypeNs = undefined;
      this._queryTypeOpt = undefined;
      this._queryTypeSoa = undefined;
      this._queryTypeSrv = undefined;
      this._rateLimitType0 = undefined;
      this._rateLimitType1 = undefined;
      this._rateLimitType2 = undefined;
      this._rateLimitType3 = undefined;
      this._rateLimitType4 = undefined;
      this._reqRetrans = undefined;
      this._reqSent = undefined;
      this._reqSizeExceed = undefined;
      this._rrtypeDrop = undefined;
      this._sessAged = undefined;
      this._sessCreate = undefined;
      this._sessCreateInbound = undefined;
      this._sessCreateOutbound = undefined;
      this._sflowExternalPacketsSent = undefined;
      this._sflowExternalSamplesPacked = undefined;
      this._sflowInternalPacketsSent = undefined;
      this._sflowInternalSamplesPacked = undefined;
      this._snatFail = undefined;
      this._spoofDetectFail = undefined;
      this._srcConnPktRateExcd = undefined;
      this._srcDnsAuthDrop = undefined;
      this._srcDnsFqdnLabelLenExceed = undefined;
      this._srcDnsMalform = undefined;
      this._srcDnsMalformDrop = undefined;
      this._srcDrop = undefined;
      this._srcFilter1Match = undefined;
      this._srcFilter2Match = undefined;
      this._srcFilter3Match = undefined;
      this._srcFilter4Match = undefined;
      this._srcFilter5Match = undefined;
      this._srcFilterActionBlacklist = undefined;
      this._srcFilterActionDefaultPass = undefined;
      this._srcFilterActionDrop = undefined;
      this._srcFilterActionWhitelist = undefined;
      this._srcFilterAuthFail = undefined;
      this._srcFilterNoneMatch = undefined;
      this._srcFilterTotalNotMatch = undefined;
      this._srcForceTcpAuth = undefined;
      this._srcFqdnLabelCountExceed = undefined;
      this._srcFragDrop = undefined;
      this._srcNtpMonlistReq = undefined;
      this._srcNtpMonlistResp = undefined;
      this._srcPayloadTooBig = undefined;
      this._srcPayloadTooSmall = undefined;
      this._srcQueryTypeAnyDrop = undefined;
      this._srcRateLimitType0 = undefined;
      this._srcRateLimitType1 = undefined;
      this._srcRateLimitType2 = undefined;
      this._srcRateLimitType3 = undefined;
      this._srcRateLimitType4 = undefined;
      this._srcUdpAuth = undefined;
      this._srcUdpAuthDrop = undefined;
      this._srcUdpAuthFail = undefined;
      this._srcUdpAuthTimeout = undefined;
      this._srcUdpRetryGapDrop = undefined;
      this._srcUdpRetryInit = undefined;
      this._srcUdpRetryPass = undefined;
      this._srcWellKnownPort = undefined;
      this._tokenAuthenticationCurrSaltMatched = undefined;
      this._tokenAuthenticationInvalid = undefined;
      this._tokenAuthenticationMismatched = undefined;
      this._tokenAuthenticationPrevSaltMatched = undefined;
      this._tokenAuthenticationSessionCreated = undefined;
      this._tokenAuthenticationSessionCreatedFail = undefined;
      this._udpAuth = undefined;
      this._udpAuthDrop = undefined;
      this._udpAuthFail = undefined;
      this._udpAuthPass = undefined;
      this._udpAuthRetryFail = undefined;
      this._udpAuthRetryGapDrop = undefined;
      this._udpRetryGapDrop = undefined;
      this._udpRetryInit = undefined;
      this._udpRetryPass = undefined;
      this._wellknownSportDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bl = value.bl;
      this._connPrateExcd = value.connPrateExcd;
      this._dgActionDefault = value.dgActionDefault;
      this._dgActionDeny = value.dgActionDeny;
      this._dgActionPermit = value.dgActionPermit;
      this._dgRateExceed = value.dgRateExceed;
      this._dgRequestCheckFail = value.dgRequestCheckFail;
      this._dnsAuthDrop = value.dnsAuthDrop;
      this._dnsAuthResp = value.dnsAuthResp;
      this._dnsMalform = value.dnsMalform;
      this._dnsMalformDrop = value.dnsMalformDrop;
      this._dnsQueryClassAny = value.dnsQueryClassAny;
      this._dnsQueryClassChaos = value.dnsQueryClassChaos;
      this._dnsQueryClassCsnet = value.dnsQueryClassCsnet;
      this._dnsQueryClassHs = value.dnsQueryClassHs;
      this._dnsQueryClassIn = value.dnsQueryClassIn;
      this._dnsQueryClassNone = value.dnsQueryClassNone;
      this._dnsQueryClassWhitelistMiss = value.dnsQueryClassWhitelistMiss;
      this._dstHwDrop = value.dstHwDrop;
      this._exceedActionDrop = value.exceedActionDrop;
      this._exceedActionTunnel = value.exceedActionTunnel;
      this._exceedDropBrateSrc = value.exceedDropBrateSrc;
      this._exceedDropBrateSrcPkt = value.exceedDropBrateSrcPkt;
      this._exceedDropClimitSrc = value.exceedDropClimitSrc;
      this._exceedDropCrateSrc = value.exceedDropCrateSrc;
      this._exceedDropPrateSrc = value.exceedDropPrateSrc;
      this._filter1Match = value.filter1Match;
      this._filter2Match = value.filter2Match;
      this._filter3Match = value.filter3Match;
      this._filter4Match = value.filter4Match;
      this._filter5Match = value.filter5Match;
      this._filterActionBlacklist = value.filterActionBlacklist;
      this._filterActionDefaultPass = value.filterActionDefaultPass;
      this._filterActionDrop = value.filterActionDrop;
      this._filterActionWhitelist = value.filterActionWhitelist;
      this._filterAuthFail = value.filterAuthFail;
      this._filterNoneMatch = value.filterNoneMatch;
      this._filterTotalNotMatch = value.filterTotalNotMatch;
      this._forceTcpAuth = value.forceTcpAuth;
      this._forceTcpAuthTimeout = value.forceTcpAuthTimeout;
      this._fqdnLabelCountExceed = value.fqdnLabelCountExceed;
      this._fqdnLabelLenExceed = value.fqdnLabelLenExceed;
      this._fqdnRateByLabelCountCheck = value.fqdnRateByLabelCountCheck;
      this._fqdnRateByLabelCountExceed = value.fqdnRateByLabelCountExceed;
      this._fqdnStage2RateExceed = value.fqdnStage2RateExceed;
      this._fragDrop = value.fragDrop;
      this._fragRcvd = value.fragRcvd;
      this._fragTimeout = value.fragTimeout;
      this._isNxdomain = value.isNxdomain;
      this._nonQueryOpcodePassThrough = value.nonQueryOpcodePassThrough;
      this._ntpMonlistReq = value.ntpMonlistReq;
      this._ntpMonlistResp = value.ntpMonlistResp;
      this._nxdomainBlDrop = value.nxdomainBlDrop;
      this._nxdomainDrop = value.nxdomainDrop;
      this._nxdomainRateExceed = value.nxdomainRateExceed;
      this._outboundPortBytes = value.outboundPortBytes;
      this._outboundPortBytesDrop = value.outboundPortBytesDrop;
      this._outboundPortBytesSent = value.outboundPortBytesSent;
      this._outboundPortDrop = value.outboundPortDrop;
      this._outboundPortPktSent = value.outboundPortPktSent;
      this._outboundPortRcvd = value.outboundPortRcvd;
      this._patternFilter1Match = value.patternFilter1Match;
      this._patternFilter2Match = value.patternFilter2Match;
      this._patternFilter3Match = value.patternFilter3Match;
      this._patternFilter4Match = value.patternFilter4Match;
      this._patternFilter5Match = value.patternFilter5Match;
      this._patternFilterDrop = value.patternFilterDrop;
      this._patternNotFound = value.patternNotFound;
      this._patternRecognitionGenericError = value.patternRecognitionGenericError;
      this._patternRecognitionPatternChanged = value.patternRecognitionPatternChanged;
      this._patternRecognitionProceeded = value.patternRecognitionProceeded;
      this._patternRecognitionSamplingStarted = value.patternRecognitionSamplingStarted;
      this._payloadTooBig = value.payloadTooBig;
      this._payloadTooSmall = value.payloadTooSmall;
      this._portBytes = value.portBytes;
      this._portBytesDrop = value.portBytesDrop;
      this._portBytesSent = value.portBytesSent;
      this._portConnLimmExceed = value.portConnLimmExceed;
      this._portConnRateExceed = value.portConnRateExceed;
      this._portDrop = value.portDrop;
      this._portKbitRateExceed = value.portKbitRateExceed;
      this._portKbitRateExceedPkt = value.portKbitRateExceedPkt;
      this._portPktRateExceed = value.portPktRateExceed;
      this._portPktSent = value.portPktSent;
      this._portRcvd = value.portRcvd;
      this._portSrcBl = value.portSrcBl;
      this._queryTypeA = value.queryTypeA;
      this._queryTypeAaaa = value.queryTypeAaaa;
      this._queryTypeAny = value.queryTypeAny;
      this._queryTypeAnyDrop = value.queryTypeAnyDrop;
      this._queryTypeCname = value.queryTypeCname;
      this._queryTypeMx = value.queryTypeMx;
      this._queryTypeNs = value.queryTypeNs;
      this._queryTypeOpt = value.queryTypeOpt;
      this._queryTypeSoa = value.queryTypeSoa;
      this._queryTypeSrv = value.queryTypeSrv;
      this._rateLimitType0 = value.rateLimitType0;
      this._rateLimitType1 = value.rateLimitType1;
      this._rateLimitType2 = value.rateLimitType2;
      this._rateLimitType3 = value.rateLimitType3;
      this._rateLimitType4 = value.rateLimitType4;
      this._reqRetrans = value.reqRetrans;
      this._reqSent = value.reqSent;
      this._reqSizeExceed = value.reqSizeExceed;
      this._rrtypeDrop = value.rrtypeDrop;
      this._sessAged = value.sessAged;
      this._sessCreate = value.sessCreate;
      this._sessCreateInbound = value.sessCreateInbound;
      this._sessCreateOutbound = value.sessCreateOutbound;
      this._sflowExternalPacketsSent = value.sflowExternalPacketsSent;
      this._sflowExternalSamplesPacked = value.sflowExternalSamplesPacked;
      this._sflowInternalPacketsSent = value.sflowInternalPacketsSent;
      this._sflowInternalSamplesPacked = value.sflowInternalSamplesPacked;
      this._snatFail = value.snatFail;
      this._spoofDetectFail = value.spoofDetectFail;
      this._srcConnPktRateExcd = value.srcConnPktRateExcd;
      this._srcDnsAuthDrop = value.srcDnsAuthDrop;
      this._srcDnsFqdnLabelLenExceed = value.srcDnsFqdnLabelLenExceed;
      this._srcDnsMalform = value.srcDnsMalform;
      this._srcDnsMalformDrop = value.srcDnsMalformDrop;
      this._srcDrop = value.srcDrop;
      this._srcFilter1Match = value.srcFilter1Match;
      this._srcFilter2Match = value.srcFilter2Match;
      this._srcFilter3Match = value.srcFilter3Match;
      this._srcFilter4Match = value.srcFilter4Match;
      this._srcFilter5Match = value.srcFilter5Match;
      this._srcFilterActionBlacklist = value.srcFilterActionBlacklist;
      this._srcFilterActionDefaultPass = value.srcFilterActionDefaultPass;
      this._srcFilterActionDrop = value.srcFilterActionDrop;
      this._srcFilterActionWhitelist = value.srcFilterActionWhitelist;
      this._srcFilterAuthFail = value.srcFilterAuthFail;
      this._srcFilterNoneMatch = value.srcFilterNoneMatch;
      this._srcFilterTotalNotMatch = value.srcFilterTotalNotMatch;
      this._srcForceTcpAuth = value.srcForceTcpAuth;
      this._srcFqdnLabelCountExceed = value.srcFqdnLabelCountExceed;
      this._srcFragDrop = value.srcFragDrop;
      this._srcNtpMonlistReq = value.srcNtpMonlistReq;
      this._srcNtpMonlistResp = value.srcNtpMonlistResp;
      this._srcPayloadTooBig = value.srcPayloadTooBig;
      this._srcPayloadTooSmall = value.srcPayloadTooSmall;
      this._srcQueryTypeAnyDrop = value.srcQueryTypeAnyDrop;
      this._srcRateLimitType0 = value.srcRateLimitType0;
      this._srcRateLimitType1 = value.srcRateLimitType1;
      this._srcRateLimitType2 = value.srcRateLimitType2;
      this._srcRateLimitType3 = value.srcRateLimitType3;
      this._srcRateLimitType4 = value.srcRateLimitType4;
      this._srcUdpAuth = value.srcUdpAuth;
      this._srcUdpAuthDrop = value.srcUdpAuthDrop;
      this._srcUdpAuthFail = value.srcUdpAuthFail;
      this._srcUdpAuthTimeout = value.srcUdpAuthTimeout;
      this._srcUdpRetryGapDrop = value.srcUdpRetryGapDrop;
      this._srcUdpRetryInit = value.srcUdpRetryInit;
      this._srcUdpRetryPass = value.srcUdpRetryPass;
      this._srcWellKnownPort = value.srcWellKnownPort;
      this._tokenAuthenticationCurrSaltMatched = value.tokenAuthenticationCurrSaltMatched;
      this._tokenAuthenticationInvalid = value.tokenAuthenticationInvalid;
      this._tokenAuthenticationMismatched = value.tokenAuthenticationMismatched;
      this._tokenAuthenticationPrevSaltMatched = value.tokenAuthenticationPrevSaltMatched;
      this._tokenAuthenticationSessionCreated = value.tokenAuthenticationSessionCreated;
      this._tokenAuthenticationSessionCreatedFail = value.tokenAuthenticationSessionCreatedFail;
      this._udpAuth = value.udpAuth;
      this._udpAuthDrop = value.udpAuthDrop;
      this._udpAuthFail = value.udpAuthFail;
      this._udpAuthPass = value.udpAuthPass;
      this._udpAuthRetryFail = value.udpAuthRetryFail;
      this._udpAuthRetryGapDrop = value.udpAuthRetryGapDrop;
      this._udpRetryGapDrop = value.udpRetryGapDrop;
      this._udpRetryInit = value.udpRetryInit;
      this._udpRetryPass = value.udpRetryPass;
      this._wellknownSportDrop = value.wellknownSportDrop;
    }
  }

  // bl - computed: false, optional: true, required: false
  private _bl?: number; 
  public get bl() {
    return this.getNumberAttribute('bl');
  }
  public set bl(value: number) {
    this._bl = value;
  }
  public resetBl() {
    this._bl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blInput() {
    return this._bl;
  }

  // conn_prate_excd - computed: false, optional: true, required: false
  private _connPrateExcd?: number; 
  public get connPrateExcd() {
    return this.getNumberAttribute('conn_prate_excd');
  }
  public set connPrateExcd(value: number) {
    this._connPrateExcd = value;
  }
  public resetConnPrateExcd() {
    this._connPrateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connPrateExcdInput() {
    return this._connPrateExcd;
  }

  // dg_action_default - computed: false, optional: true, required: false
  private _dgActionDefault?: number; 
  public get dgActionDefault() {
    return this.getNumberAttribute('dg_action_default');
  }
  public set dgActionDefault(value: number) {
    this._dgActionDefault = value;
  }
  public resetDgActionDefault() {
    this._dgActionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgActionDefaultInput() {
    return this._dgActionDefault;
  }

  // dg_action_deny - computed: false, optional: true, required: false
  private _dgActionDeny?: number; 
  public get dgActionDeny() {
    return this.getNumberAttribute('dg_action_deny');
  }
  public set dgActionDeny(value: number) {
    this._dgActionDeny = value;
  }
  public resetDgActionDeny() {
    this._dgActionDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgActionDenyInput() {
    return this._dgActionDeny;
  }

  // dg_action_permit - computed: false, optional: true, required: false
  private _dgActionPermit?: number; 
  public get dgActionPermit() {
    return this.getNumberAttribute('dg_action_permit');
  }
  public set dgActionPermit(value: number) {
    this._dgActionPermit = value;
  }
  public resetDgActionPermit() {
    this._dgActionPermit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgActionPermitInput() {
    return this._dgActionPermit;
  }

  // dg_rate_exceed - computed: false, optional: true, required: false
  private _dgRateExceed?: number; 
  public get dgRateExceed() {
    return this.getNumberAttribute('dg_rate_exceed');
  }
  public set dgRateExceed(value: number) {
    this._dgRateExceed = value;
  }
  public resetDgRateExceed() {
    this._dgRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgRateExceedInput() {
    return this._dgRateExceed;
  }

  // dg_request_check_fail - computed: false, optional: true, required: false
  private _dgRequestCheckFail?: number; 
  public get dgRequestCheckFail() {
    return this.getNumberAttribute('dg_request_check_fail');
  }
  public set dgRequestCheckFail(value: number) {
    this._dgRequestCheckFail = value;
  }
  public resetDgRequestCheckFail() {
    this._dgRequestCheckFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgRequestCheckFailInput() {
    return this._dgRequestCheckFail;
  }

  // dns_auth_drop - computed: false, optional: true, required: false
  private _dnsAuthDrop?: number; 
  public get dnsAuthDrop() {
    return this.getNumberAttribute('dns_auth_drop');
  }
  public set dnsAuthDrop(value: number) {
    this._dnsAuthDrop = value;
  }
  public resetDnsAuthDrop() {
    this._dnsAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthDropInput() {
    return this._dnsAuthDrop;
  }

  // dns_auth_resp - computed: false, optional: true, required: false
  private _dnsAuthResp?: number; 
  public get dnsAuthResp() {
    return this.getNumberAttribute('dns_auth_resp');
  }
  public set dnsAuthResp(value: number) {
    this._dnsAuthResp = value;
  }
  public resetDnsAuthResp() {
    this._dnsAuthResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthRespInput() {
    return this._dnsAuthResp;
  }

  // dns_malform - computed: false, optional: true, required: false
  private _dnsMalform?: number; 
  public get dnsMalform() {
    return this.getNumberAttribute('dns_malform');
  }
  public set dnsMalform(value: number) {
    this._dnsMalform = value;
  }
  public resetDnsMalform() {
    this._dnsMalform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMalformInput() {
    return this._dnsMalform;
  }

  // dns_malform_drop - computed: false, optional: true, required: false
  private _dnsMalformDrop?: number; 
  public get dnsMalformDrop() {
    return this.getNumberAttribute('dns_malform_drop');
  }
  public set dnsMalformDrop(value: number) {
    this._dnsMalformDrop = value;
  }
  public resetDnsMalformDrop() {
    this._dnsMalformDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMalformDropInput() {
    return this._dnsMalformDrop;
  }

  // dns_query_class_any - computed: false, optional: true, required: false
  private _dnsQueryClassAny?: number; 
  public get dnsQueryClassAny() {
    return this.getNumberAttribute('dns_query_class_any');
  }
  public set dnsQueryClassAny(value: number) {
    this._dnsQueryClassAny = value;
  }
  public resetDnsQueryClassAny() {
    this._dnsQueryClassAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassAnyInput() {
    return this._dnsQueryClassAny;
  }

  // dns_query_class_chaos - computed: false, optional: true, required: false
  private _dnsQueryClassChaos?: number; 
  public get dnsQueryClassChaos() {
    return this.getNumberAttribute('dns_query_class_chaos');
  }
  public set dnsQueryClassChaos(value: number) {
    this._dnsQueryClassChaos = value;
  }
  public resetDnsQueryClassChaos() {
    this._dnsQueryClassChaos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassChaosInput() {
    return this._dnsQueryClassChaos;
  }

  // dns_query_class_csnet - computed: false, optional: true, required: false
  private _dnsQueryClassCsnet?: number; 
  public get dnsQueryClassCsnet() {
    return this.getNumberAttribute('dns_query_class_csnet');
  }
  public set dnsQueryClassCsnet(value: number) {
    this._dnsQueryClassCsnet = value;
  }
  public resetDnsQueryClassCsnet() {
    this._dnsQueryClassCsnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassCsnetInput() {
    return this._dnsQueryClassCsnet;
  }

  // dns_query_class_hs - computed: false, optional: true, required: false
  private _dnsQueryClassHs?: number; 
  public get dnsQueryClassHs() {
    return this.getNumberAttribute('dns_query_class_hs');
  }
  public set dnsQueryClassHs(value: number) {
    this._dnsQueryClassHs = value;
  }
  public resetDnsQueryClassHs() {
    this._dnsQueryClassHs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassHsInput() {
    return this._dnsQueryClassHs;
  }

  // dns_query_class_in - computed: false, optional: true, required: false
  private _dnsQueryClassIn?: number; 
  public get dnsQueryClassIn() {
    return this.getNumberAttribute('dns_query_class_in');
  }
  public set dnsQueryClassIn(value: number) {
    this._dnsQueryClassIn = value;
  }
  public resetDnsQueryClassIn() {
    this._dnsQueryClassIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassInInput() {
    return this._dnsQueryClassIn;
  }

  // dns_query_class_none - computed: false, optional: true, required: false
  private _dnsQueryClassNone?: number; 
  public get dnsQueryClassNone() {
    return this.getNumberAttribute('dns_query_class_none');
  }
  public set dnsQueryClassNone(value: number) {
    this._dnsQueryClassNone = value;
  }
  public resetDnsQueryClassNone() {
    this._dnsQueryClassNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassNoneInput() {
    return this._dnsQueryClassNone;
  }

  // dns_query_class_whitelist_miss - computed: false, optional: true, required: false
  private _dnsQueryClassWhitelistMiss?: number; 
  public get dnsQueryClassWhitelistMiss() {
    return this.getNumberAttribute('dns_query_class_whitelist_miss');
  }
  public set dnsQueryClassWhitelistMiss(value: number) {
    this._dnsQueryClassWhitelistMiss = value;
  }
  public resetDnsQueryClassWhitelistMiss() {
    this._dnsQueryClassWhitelistMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassWhitelistMissInput() {
    return this._dnsQueryClassWhitelistMiss;
  }

  // dst_hw_drop - computed: false, optional: true, required: false
  private _dstHwDrop?: number; 
  public get dstHwDrop() {
    return this.getNumberAttribute('dst_hw_drop');
  }
  public set dstHwDrop(value: number) {
    this._dstHwDrop = value;
  }
  public resetDstHwDrop() {
    this._dstHwDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHwDropInput() {
    return this._dstHwDrop;
  }

  // exceed_action_drop - computed: false, optional: true, required: false
  private _exceedActionDrop?: number; 
  public get exceedActionDrop() {
    return this.getNumberAttribute('exceed_action_drop');
  }
  public set exceedActionDrop(value: number) {
    this._exceedActionDrop = value;
  }
  public resetExceedActionDrop() {
    this._exceedActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionDropInput() {
    return this._exceedActionDrop;
  }

  // exceed_action_tunnel - computed: false, optional: true, required: false
  private _exceedActionTunnel?: number; 
  public get exceedActionTunnel() {
    return this.getNumberAttribute('exceed_action_tunnel');
  }
  public set exceedActionTunnel(value: number) {
    this._exceedActionTunnel = value;
  }
  public resetExceedActionTunnel() {
    this._exceedActionTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionTunnelInput() {
    return this._exceedActionTunnel;
  }

  // exceed_drop_brate_src - computed: false, optional: true, required: false
  private _exceedDropBrateSrc?: number; 
  public get exceedDropBrateSrc() {
    return this.getNumberAttribute('exceed_drop_brate_src');
  }
  public set exceedDropBrateSrc(value: number) {
    this._exceedDropBrateSrc = value;
  }
  public resetExceedDropBrateSrc() {
    this._exceedDropBrateSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropBrateSrcInput() {
    return this._exceedDropBrateSrc;
  }

  // exceed_drop_brate_src_pkt - computed: false, optional: true, required: false
  private _exceedDropBrateSrcPkt?: number; 
  public get exceedDropBrateSrcPkt() {
    return this.getNumberAttribute('exceed_drop_brate_src_pkt');
  }
  public set exceedDropBrateSrcPkt(value: number) {
    this._exceedDropBrateSrcPkt = value;
  }
  public resetExceedDropBrateSrcPkt() {
    this._exceedDropBrateSrcPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropBrateSrcPktInput() {
    return this._exceedDropBrateSrcPkt;
  }

  // exceed_drop_climit_src - computed: false, optional: true, required: false
  private _exceedDropClimitSrc?: number; 
  public get exceedDropClimitSrc() {
    return this.getNumberAttribute('exceed_drop_climit_src');
  }
  public set exceedDropClimitSrc(value: number) {
    this._exceedDropClimitSrc = value;
  }
  public resetExceedDropClimitSrc() {
    this._exceedDropClimitSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropClimitSrcInput() {
    return this._exceedDropClimitSrc;
  }

  // exceed_drop_crate_src - computed: false, optional: true, required: false
  private _exceedDropCrateSrc?: number; 
  public get exceedDropCrateSrc() {
    return this.getNumberAttribute('exceed_drop_crate_src');
  }
  public set exceedDropCrateSrc(value: number) {
    this._exceedDropCrateSrc = value;
  }
  public resetExceedDropCrateSrc() {
    this._exceedDropCrateSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropCrateSrcInput() {
    return this._exceedDropCrateSrc;
  }

  // exceed_drop_prate_src - computed: false, optional: true, required: false
  private _exceedDropPrateSrc?: number; 
  public get exceedDropPrateSrc() {
    return this.getNumberAttribute('exceed_drop_prate_src');
  }
  public set exceedDropPrateSrc(value: number) {
    this._exceedDropPrateSrc = value;
  }
  public resetExceedDropPrateSrc() {
    this._exceedDropPrateSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropPrateSrcInput() {
    return this._exceedDropPrateSrc;
  }

  // filter1_match - computed: false, optional: true, required: false
  private _filter1Match?: number; 
  public get filter1Match() {
    return this.getNumberAttribute('filter1_match');
  }
  public set filter1Match(value: number) {
    this._filter1Match = value;
  }
  public resetFilter1Match() {
    this._filter1Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter1MatchInput() {
    return this._filter1Match;
  }

  // filter2_match - computed: false, optional: true, required: false
  private _filter2Match?: number; 
  public get filter2Match() {
    return this.getNumberAttribute('filter2_match');
  }
  public set filter2Match(value: number) {
    this._filter2Match = value;
  }
  public resetFilter2Match() {
    this._filter2Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter2MatchInput() {
    return this._filter2Match;
  }

  // filter3_match - computed: false, optional: true, required: false
  private _filter3Match?: number; 
  public get filter3Match() {
    return this.getNumberAttribute('filter3_match');
  }
  public set filter3Match(value: number) {
    this._filter3Match = value;
  }
  public resetFilter3Match() {
    this._filter3Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter3MatchInput() {
    return this._filter3Match;
  }

  // filter4_match - computed: false, optional: true, required: false
  private _filter4Match?: number; 
  public get filter4Match() {
    return this.getNumberAttribute('filter4_match');
  }
  public set filter4Match(value: number) {
    this._filter4Match = value;
  }
  public resetFilter4Match() {
    this._filter4Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter4MatchInput() {
    return this._filter4Match;
  }

  // filter5_match - computed: false, optional: true, required: false
  private _filter5Match?: number; 
  public get filter5Match() {
    return this.getNumberAttribute('filter5_match');
  }
  public set filter5Match(value: number) {
    this._filter5Match = value;
  }
  public resetFilter5Match() {
    this._filter5Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter5MatchInput() {
    return this._filter5Match;
  }

  // filter_action_blacklist - computed: false, optional: true, required: false
  private _filterActionBlacklist?: number; 
  public get filterActionBlacklist() {
    return this.getNumberAttribute('filter_action_blacklist');
  }
  public set filterActionBlacklist(value: number) {
    this._filterActionBlacklist = value;
  }
  public resetFilterActionBlacklist() {
    this._filterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionBlacklistInput() {
    return this._filterActionBlacklist;
  }

  // filter_action_default_pass - computed: false, optional: true, required: false
  private _filterActionDefaultPass?: number; 
  public get filterActionDefaultPass() {
    return this.getNumberAttribute('filter_action_default_pass');
  }
  public set filterActionDefaultPass(value: number) {
    this._filterActionDefaultPass = value;
  }
  public resetFilterActionDefaultPass() {
    this._filterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionDefaultPassInput() {
    return this._filterActionDefaultPass;
  }

  // filter_action_drop - computed: false, optional: true, required: false
  private _filterActionDrop?: number; 
  public get filterActionDrop() {
    return this.getNumberAttribute('filter_action_drop');
  }
  public set filterActionDrop(value: number) {
    this._filterActionDrop = value;
  }
  public resetFilterActionDrop() {
    this._filterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionDropInput() {
    return this._filterActionDrop;
  }

  // filter_action_whitelist - computed: false, optional: true, required: false
  private _filterActionWhitelist?: number; 
  public get filterActionWhitelist() {
    return this.getNumberAttribute('filter_action_whitelist');
  }
  public set filterActionWhitelist(value: number) {
    this._filterActionWhitelist = value;
  }
  public resetFilterActionWhitelist() {
    this._filterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionWhitelistInput() {
    return this._filterActionWhitelist;
  }

  // filter_auth_fail - computed: false, optional: true, required: false
  private _filterAuthFail?: number; 
  public get filterAuthFail() {
    return this.getNumberAttribute('filter_auth_fail');
  }
  public set filterAuthFail(value: number) {
    this._filterAuthFail = value;
  }
  public resetFilterAuthFail() {
    this._filterAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAuthFailInput() {
    return this._filterAuthFail;
  }

  // filter_none_match - computed: false, optional: true, required: false
  private _filterNoneMatch?: number; 
  public get filterNoneMatch() {
    return this.getNumberAttribute('filter_none_match');
  }
  public set filterNoneMatch(value: number) {
    this._filterNoneMatch = value;
  }
  public resetFilterNoneMatch() {
    this._filterNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNoneMatchInput() {
    return this._filterNoneMatch;
  }

  // filter_total_not_match - computed: false, optional: true, required: false
  private _filterTotalNotMatch?: number; 
  public get filterTotalNotMatch() {
    return this.getNumberAttribute('filter_total_not_match');
  }
  public set filterTotalNotMatch(value: number) {
    this._filterTotalNotMatch = value;
  }
  public resetFilterTotalNotMatch() {
    this._filterTotalNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTotalNotMatchInput() {
    return this._filterTotalNotMatch;
  }

  // force_tcp_auth - computed: false, optional: true, required: false
  private _forceTcpAuth?: number; 
  public get forceTcpAuth() {
    return this.getNumberAttribute('force_tcp_auth');
  }
  public set forceTcpAuth(value: number) {
    this._forceTcpAuth = value;
  }
  public resetForceTcpAuth() {
    this._forceTcpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcpAuthInput() {
    return this._forceTcpAuth;
  }

  // force_tcp_auth_timeout - computed: false, optional: true, required: false
  private _forceTcpAuthTimeout?: number; 
  public get forceTcpAuthTimeout() {
    return this.getNumberAttribute('force_tcp_auth_timeout');
  }
  public set forceTcpAuthTimeout(value: number) {
    this._forceTcpAuthTimeout = value;
  }
  public resetForceTcpAuthTimeout() {
    this._forceTcpAuthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcpAuthTimeoutInput() {
    return this._forceTcpAuthTimeout;
  }

  // fqdn_label_count_exceed - computed: false, optional: true, required: false
  private _fqdnLabelCountExceed?: number; 
  public get fqdnLabelCountExceed() {
    return this.getNumberAttribute('fqdn_label_count_exceed');
  }
  public set fqdnLabelCountExceed(value: number) {
    this._fqdnLabelCountExceed = value;
  }
  public resetFqdnLabelCountExceed() {
    this._fqdnLabelCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLabelCountExceedInput() {
    return this._fqdnLabelCountExceed;
  }

  // fqdn_label_len_exceed - computed: false, optional: true, required: false
  private _fqdnLabelLenExceed?: number; 
  public get fqdnLabelLenExceed() {
    return this.getNumberAttribute('fqdn_label_len_exceed');
  }
  public set fqdnLabelLenExceed(value: number) {
    this._fqdnLabelLenExceed = value;
  }
  public resetFqdnLabelLenExceed() {
    this._fqdnLabelLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLabelLenExceedInput() {
    return this._fqdnLabelLenExceed;
  }

  // fqdn_rate_by_label_count_check - computed: false, optional: true, required: false
  private _fqdnRateByLabelCountCheck?: number; 
  public get fqdnRateByLabelCountCheck() {
    return this.getNumberAttribute('fqdn_rate_by_label_count_check');
  }
  public set fqdnRateByLabelCountCheck(value: number) {
    this._fqdnRateByLabelCountCheck = value;
  }
  public resetFqdnRateByLabelCountCheck() {
    this._fqdnRateByLabelCountCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnRateByLabelCountCheckInput() {
    return this._fqdnRateByLabelCountCheck;
  }

  // fqdn_rate_by_label_count_exceed - computed: false, optional: true, required: false
  private _fqdnRateByLabelCountExceed?: number; 
  public get fqdnRateByLabelCountExceed() {
    return this.getNumberAttribute('fqdn_rate_by_label_count_exceed');
  }
  public set fqdnRateByLabelCountExceed(value: number) {
    this._fqdnRateByLabelCountExceed = value;
  }
  public resetFqdnRateByLabelCountExceed() {
    this._fqdnRateByLabelCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnRateByLabelCountExceedInput() {
    return this._fqdnRateByLabelCountExceed;
  }

  // fqdn_stage_2_rate_exceed - computed: false, optional: true, required: false
  private _fqdnStage2RateExceed?: number; 
  public get fqdnStage2RateExceed() {
    return this.getNumberAttribute('fqdn_stage_2_rate_exceed');
  }
  public set fqdnStage2RateExceed(value: number) {
    this._fqdnStage2RateExceed = value;
  }
  public resetFqdnStage2RateExceed() {
    this._fqdnStage2RateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnStage2RateExceedInput() {
    return this._fqdnStage2RateExceed;
  }

  // frag_drop - computed: false, optional: true, required: false
  private _fragDrop?: number; 
  public get fragDrop() {
    return this.getNumberAttribute('frag_drop');
  }
  public set fragDrop(value: number) {
    this._fragDrop = value;
  }
  public resetFragDrop() {
    this._fragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragDropInput() {
    return this._fragDrop;
  }

  // frag_rcvd - computed: false, optional: true, required: false
  private _fragRcvd?: number; 
  public get fragRcvd() {
    return this.getNumberAttribute('frag_rcvd');
  }
  public set fragRcvd(value: number) {
    this._fragRcvd = value;
  }
  public resetFragRcvd() {
    this._fragRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragRcvdInput() {
    return this._fragRcvd;
  }

  // frag_timeout - computed: false, optional: true, required: false
  private _fragTimeout?: number; 
  public get fragTimeout() {
    return this.getNumberAttribute('frag_timeout');
  }
  public set fragTimeout(value: number) {
    this._fragTimeout = value;
  }
  public resetFragTimeout() {
    this._fragTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragTimeoutInput() {
    return this._fragTimeout;
  }

  // is_nxdomain - computed: false, optional: true, required: false
  private _isNxdomain?: number; 
  public get isNxdomain() {
    return this.getNumberAttribute('is_nxdomain');
  }
  public set isNxdomain(value: number) {
    this._isNxdomain = value;
  }
  public resetIsNxdomain() {
    this._isNxdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNxdomainInput() {
    return this._isNxdomain;
  }

  // non_query_opcode_pass_through - computed: false, optional: true, required: false
  private _nonQueryOpcodePassThrough?: number; 
  public get nonQueryOpcodePassThrough() {
    return this.getNumberAttribute('non_query_opcode_pass_through');
  }
  public set nonQueryOpcodePassThrough(value: number) {
    this._nonQueryOpcodePassThrough = value;
  }
  public resetNonQueryOpcodePassThrough() {
    this._nonQueryOpcodePassThrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonQueryOpcodePassThroughInput() {
    return this._nonQueryOpcodePassThrough;
  }

  // ntp_monlist_req - computed: false, optional: true, required: false
  private _ntpMonlistReq?: number; 
  public get ntpMonlistReq() {
    return this.getNumberAttribute('ntp_monlist_req');
  }
  public set ntpMonlistReq(value: number) {
    this._ntpMonlistReq = value;
  }
  public resetNtpMonlistReq() {
    this._ntpMonlistReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistReqInput() {
    return this._ntpMonlistReq;
  }

  // ntp_monlist_resp - computed: false, optional: true, required: false
  private _ntpMonlistResp?: number; 
  public get ntpMonlistResp() {
    return this.getNumberAttribute('ntp_monlist_resp');
  }
  public set ntpMonlistResp(value: number) {
    this._ntpMonlistResp = value;
  }
  public resetNtpMonlistResp() {
    this._ntpMonlistResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistRespInput() {
    return this._ntpMonlistResp;
  }

  // nxdomain_bl_drop - computed: false, optional: true, required: false
  private _nxdomainBlDrop?: number; 
  public get nxdomainBlDrop() {
    return this.getNumberAttribute('nxdomain_bl_drop');
  }
  public set nxdomainBlDrop(value: number) {
    this._nxdomainBlDrop = value;
  }
  public resetNxdomainBlDrop() {
    this._nxdomainBlDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainBlDropInput() {
    return this._nxdomainBlDrop;
  }

  // nxdomain_drop - computed: false, optional: true, required: false
  private _nxdomainDrop?: number; 
  public get nxdomainDrop() {
    return this.getNumberAttribute('nxdomain_drop');
  }
  public set nxdomainDrop(value: number) {
    this._nxdomainDrop = value;
  }
  public resetNxdomainDrop() {
    this._nxdomainDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainDropInput() {
    return this._nxdomainDrop;
  }

  // nxdomain_rate_exceed - computed: false, optional: true, required: false
  private _nxdomainRateExceed?: number; 
  public get nxdomainRateExceed() {
    return this.getNumberAttribute('nxdomain_rate_exceed');
  }
  public set nxdomainRateExceed(value: number) {
    this._nxdomainRateExceed = value;
  }
  public resetNxdomainRateExceed() {
    this._nxdomainRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainRateExceedInput() {
    return this._nxdomainRateExceed;
  }

  // outbound_port_bytes - computed: false, optional: true, required: false
  private _outboundPortBytes?: number; 
  public get outboundPortBytes() {
    return this.getNumberAttribute('outbound_port_bytes');
  }
  public set outboundPortBytes(value: number) {
    this._outboundPortBytes = value;
  }
  public resetOutboundPortBytes() {
    this._outboundPortBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortBytesInput() {
    return this._outboundPortBytes;
  }

  // outbound_port_bytes_drop - computed: false, optional: true, required: false
  private _outboundPortBytesDrop?: number; 
  public get outboundPortBytesDrop() {
    return this.getNumberAttribute('outbound_port_bytes_drop');
  }
  public set outboundPortBytesDrop(value: number) {
    this._outboundPortBytesDrop = value;
  }
  public resetOutboundPortBytesDrop() {
    this._outboundPortBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortBytesDropInput() {
    return this._outboundPortBytesDrop;
  }

  // outbound_port_bytes_sent - computed: false, optional: true, required: false
  private _outboundPortBytesSent?: number; 
  public get outboundPortBytesSent() {
    return this.getNumberAttribute('outbound_port_bytes_sent');
  }
  public set outboundPortBytesSent(value: number) {
    this._outboundPortBytesSent = value;
  }
  public resetOutboundPortBytesSent() {
    this._outboundPortBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortBytesSentInput() {
    return this._outboundPortBytesSent;
  }

  // outbound_port_drop - computed: false, optional: true, required: false
  private _outboundPortDrop?: number; 
  public get outboundPortDrop() {
    return this.getNumberAttribute('outbound_port_drop');
  }
  public set outboundPortDrop(value: number) {
    this._outboundPortDrop = value;
  }
  public resetOutboundPortDrop() {
    this._outboundPortDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortDropInput() {
    return this._outboundPortDrop;
  }

  // outbound_port_pkt_sent - computed: false, optional: true, required: false
  private _outboundPortPktSent?: number; 
  public get outboundPortPktSent() {
    return this.getNumberAttribute('outbound_port_pkt_sent');
  }
  public set outboundPortPktSent(value: number) {
    this._outboundPortPktSent = value;
  }
  public resetOutboundPortPktSent() {
    this._outboundPortPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortPktSentInput() {
    return this._outboundPortPktSent;
  }

  // outbound_port_rcvd - computed: false, optional: true, required: false
  private _outboundPortRcvd?: number; 
  public get outboundPortRcvd() {
    return this.getNumberAttribute('outbound_port_rcvd');
  }
  public set outboundPortRcvd(value: number) {
    this._outboundPortRcvd = value;
  }
  public resetOutboundPortRcvd() {
    this._outboundPortRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortRcvdInput() {
    return this._outboundPortRcvd;
  }

  // pattern_filter1_match - computed: false, optional: true, required: false
  private _patternFilter1Match?: number; 
  public get patternFilter1Match() {
    return this.getNumberAttribute('pattern_filter1_match');
  }
  public set patternFilter1Match(value: number) {
    this._patternFilter1Match = value;
  }
  public resetPatternFilter1Match() {
    this._patternFilter1Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter1MatchInput() {
    return this._patternFilter1Match;
  }

  // pattern_filter2_match - computed: false, optional: true, required: false
  private _patternFilter2Match?: number; 
  public get patternFilter2Match() {
    return this.getNumberAttribute('pattern_filter2_match');
  }
  public set patternFilter2Match(value: number) {
    this._patternFilter2Match = value;
  }
  public resetPatternFilter2Match() {
    this._patternFilter2Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter2MatchInput() {
    return this._patternFilter2Match;
  }

  // pattern_filter3_match - computed: false, optional: true, required: false
  private _patternFilter3Match?: number; 
  public get patternFilter3Match() {
    return this.getNumberAttribute('pattern_filter3_match');
  }
  public set patternFilter3Match(value: number) {
    this._patternFilter3Match = value;
  }
  public resetPatternFilter3Match() {
    this._patternFilter3Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter3MatchInput() {
    return this._patternFilter3Match;
  }

  // pattern_filter4_match - computed: false, optional: true, required: false
  private _patternFilter4Match?: number; 
  public get patternFilter4Match() {
    return this.getNumberAttribute('pattern_filter4_match');
  }
  public set patternFilter4Match(value: number) {
    this._patternFilter4Match = value;
  }
  public resetPatternFilter4Match() {
    this._patternFilter4Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter4MatchInput() {
    return this._patternFilter4Match;
  }

  // pattern_filter5_match - computed: false, optional: true, required: false
  private _patternFilter5Match?: number; 
  public get patternFilter5Match() {
    return this.getNumberAttribute('pattern_filter5_match');
  }
  public set patternFilter5Match(value: number) {
    this._patternFilter5Match = value;
  }
  public resetPatternFilter5Match() {
    this._patternFilter5Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter5MatchInput() {
    return this._patternFilter5Match;
  }

  // pattern_filter_drop - computed: false, optional: true, required: false
  private _patternFilterDrop?: number; 
  public get patternFilterDrop() {
    return this.getNumberAttribute('pattern_filter_drop');
  }
  public set patternFilterDrop(value: number) {
    this._patternFilterDrop = value;
  }
  public resetPatternFilterDrop() {
    this._patternFilterDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilterDropInput() {
    return this._patternFilterDrop;
  }

  // pattern_not_found - computed: false, optional: true, required: false
  private _patternNotFound?: number; 
  public get patternNotFound() {
    return this.getNumberAttribute('pattern_not_found');
  }
  public set patternNotFound(value: number) {
    this._patternNotFound = value;
  }
  public resetPatternNotFound() {
    this._patternNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternNotFoundInput() {
    return this._patternNotFound;
  }

  // pattern_recognition_generic_error - computed: false, optional: true, required: false
  private _patternRecognitionGenericError?: number; 
  public get patternRecognitionGenericError() {
    return this.getNumberAttribute('pattern_recognition_generic_error');
  }
  public set patternRecognitionGenericError(value: number) {
    this._patternRecognitionGenericError = value;
  }
  public resetPatternRecognitionGenericError() {
    this._patternRecognitionGenericError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionGenericErrorInput() {
    return this._patternRecognitionGenericError;
  }

  // pattern_recognition_pattern_changed - computed: false, optional: true, required: false
  private _patternRecognitionPatternChanged?: number; 
  public get patternRecognitionPatternChanged() {
    return this.getNumberAttribute('pattern_recognition_pattern_changed');
  }
  public set patternRecognitionPatternChanged(value: number) {
    this._patternRecognitionPatternChanged = value;
  }
  public resetPatternRecognitionPatternChanged() {
    this._patternRecognitionPatternChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionPatternChangedInput() {
    return this._patternRecognitionPatternChanged;
  }

  // pattern_recognition_proceeded - computed: false, optional: true, required: false
  private _patternRecognitionProceeded?: number; 
  public get patternRecognitionProceeded() {
    return this.getNumberAttribute('pattern_recognition_proceeded');
  }
  public set patternRecognitionProceeded(value: number) {
    this._patternRecognitionProceeded = value;
  }
  public resetPatternRecognitionProceeded() {
    this._patternRecognitionProceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionProceededInput() {
    return this._patternRecognitionProceeded;
  }

  // pattern_recognition_sampling_started - computed: false, optional: true, required: false
  private _patternRecognitionSamplingStarted?: number; 
  public get patternRecognitionSamplingStarted() {
    return this.getNumberAttribute('pattern_recognition_sampling_started');
  }
  public set patternRecognitionSamplingStarted(value: number) {
    this._patternRecognitionSamplingStarted = value;
  }
  public resetPatternRecognitionSamplingStarted() {
    this._patternRecognitionSamplingStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionSamplingStartedInput() {
    return this._patternRecognitionSamplingStarted;
  }

  // payload_too_big - computed: false, optional: true, required: false
  private _payloadTooBig?: number; 
  public get payloadTooBig() {
    return this.getNumberAttribute('payload_too_big');
  }
  public set payloadTooBig(value: number) {
    this._payloadTooBig = value;
  }
  public resetPayloadTooBig() {
    this._payloadTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTooBigInput() {
    return this._payloadTooBig;
  }

  // payload_too_small - computed: false, optional: true, required: false
  private _payloadTooSmall?: number; 
  public get payloadTooSmall() {
    return this.getNumberAttribute('payload_too_small');
  }
  public set payloadTooSmall(value: number) {
    this._payloadTooSmall = value;
  }
  public resetPayloadTooSmall() {
    this._payloadTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTooSmallInput() {
    return this._payloadTooSmall;
  }

  // port_bytes - computed: false, optional: true, required: false
  private _portBytes?: number; 
  public get portBytes() {
    return this.getNumberAttribute('port_bytes');
  }
  public set portBytes(value: number) {
    this._portBytes = value;
  }
  public resetPortBytes() {
    this._portBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBytesInput() {
    return this._portBytes;
  }

  // port_bytes_drop - computed: false, optional: true, required: false
  private _portBytesDrop?: number; 
  public get portBytesDrop() {
    return this.getNumberAttribute('port_bytes_drop');
  }
  public set portBytesDrop(value: number) {
    this._portBytesDrop = value;
  }
  public resetPortBytesDrop() {
    this._portBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBytesDropInput() {
    return this._portBytesDrop;
  }

  // port_bytes_sent - computed: false, optional: true, required: false
  private _portBytesSent?: number; 
  public get portBytesSent() {
    return this.getNumberAttribute('port_bytes_sent');
  }
  public set portBytesSent(value: number) {
    this._portBytesSent = value;
  }
  public resetPortBytesSent() {
    this._portBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBytesSentInput() {
    return this._portBytesSent;
  }

  // port_conn_limm_exceed - computed: false, optional: true, required: false
  private _portConnLimmExceed?: number; 
  public get portConnLimmExceed() {
    return this.getNumberAttribute('port_conn_limm_exceed');
  }
  public set portConnLimmExceed(value: number) {
    this._portConnLimmExceed = value;
  }
  public resetPortConnLimmExceed() {
    this._portConnLimmExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConnLimmExceedInput() {
    return this._portConnLimmExceed;
  }

  // port_conn_rate_exceed - computed: false, optional: true, required: false
  private _portConnRateExceed?: number; 
  public get portConnRateExceed() {
    return this.getNumberAttribute('port_conn_rate_exceed');
  }
  public set portConnRateExceed(value: number) {
    this._portConnRateExceed = value;
  }
  public resetPortConnRateExceed() {
    this._portConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConnRateExceedInput() {
    return this._portConnRateExceed;
  }

  // port_drop - computed: false, optional: true, required: false
  private _portDrop?: number; 
  public get portDrop() {
    return this.getNumberAttribute('port_drop');
  }
  public set portDrop(value: number) {
    this._portDrop = value;
  }
  public resetPortDrop() {
    this._portDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDropInput() {
    return this._portDrop;
  }

  // port_kbit_rate_exceed - computed: false, optional: true, required: false
  private _portKbitRateExceed?: number; 
  public get portKbitRateExceed() {
    return this.getNumberAttribute('port_kbit_rate_exceed');
  }
  public set portKbitRateExceed(value: number) {
    this._portKbitRateExceed = value;
  }
  public resetPortKbitRateExceed() {
    this._portKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKbitRateExceedInput() {
    return this._portKbitRateExceed;
  }

  // port_kbit_rate_exceed_pkt - computed: false, optional: true, required: false
  private _portKbitRateExceedPkt?: number; 
  public get portKbitRateExceedPkt() {
    return this.getNumberAttribute('port_kbit_rate_exceed_pkt');
  }
  public set portKbitRateExceedPkt(value: number) {
    this._portKbitRateExceedPkt = value;
  }
  public resetPortKbitRateExceedPkt() {
    this._portKbitRateExceedPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKbitRateExceedPktInput() {
    return this._portKbitRateExceedPkt;
  }

  // port_pkt_rate_exceed - computed: false, optional: true, required: false
  private _portPktRateExceed?: number; 
  public get portPktRateExceed() {
    return this.getNumberAttribute('port_pkt_rate_exceed');
  }
  public set portPktRateExceed(value: number) {
    this._portPktRateExceed = value;
  }
  public resetPortPktRateExceed() {
    this._portPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPktRateExceedInput() {
    return this._portPktRateExceed;
  }

  // port_pkt_sent - computed: false, optional: true, required: false
  private _portPktSent?: number; 
  public get portPktSent() {
    return this.getNumberAttribute('port_pkt_sent');
  }
  public set portPktSent(value: number) {
    this._portPktSent = value;
  }
  public resetPortPktSent() {
    this._portPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPktSentInput() {
    return this._portPktSent;
  }

  // port_rcvd - computed: false, optional: true, required: false
  private _portRcvd?: number; 
  public get portRcvd() {
    return this.getNumberAttribute('port_rcvd');
  }
  public set portRcvd(value: number) {
    this._portRcvd = value;
  }
  public resetPortRcvd() {
    this._portRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRcvdInput() {
    return this._portRcvd;
  }

  // port_src_bl - computed: false, optional: true, required: false
  private _portSrcBl?: number; 
  public get portSrcBl() {
    return this.getNumberAttribute('port_src_bl');
  }
  public set portSrcBl(value: number) {
    this._portSrcBl = value;
  }
  public resetPortSrcBl() {
    this._portSrcBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSrcBlInput() {
    return this._portSrcBl;
  }

  // query_type_a - computed: false, optional: true, required: false
  private _queryTypeA?: number; 
  public get queryTypeA() {
    return this.getNumberAttribute('query_type_a');
  }
  public set queryTypeA(value: number) {
    this._queryTypeA = value;
  }
  public resetQueryTypeA() {
    this._queryTypeA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeAInput() {
    return this._queryTypeA;
  }

  // query_type_aaaa - computed: false, optional: true, required: false
  private _queryTypeAaaa?: number; 
  public get queryTypeAaaa() {
    return this.getNumberAttribute('query_type_aaaa');
  }
  public set queryTypeAaaa(value: number) {
    this._queryTypeAaaa = value;
  }
  public resetQueryTypeAaaa() {
    this._queryTypeAaaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeAaaaInput() {
    return this._queryTypeAaaa;
  }

  // query_type_any - computed: false, optional: true, required: false
  private _queryTypeAny?: number; 
  public get queryTypeAny() {
    return this.getNumberAttribute('query_type_any');
  }
  public set queryTypeAny(value: number) {
    this._queryTypeAny = value;
  }
  public resetQueryTypeAny() {
    this._queryTypeAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeAnyInput() {
    return this._queryTypeAny;
  }

  // query_type_any_drop - computed: false, optional: true, required: false
  private _queryTypeAnyDrop?: number; 
  public get queryTypeAnyDrop() {
    return this.getNumberAttribute('query_type_any_drop');
  }
  public set queryTypeAnyDrop(value: number) {
    this._queryTypeAnyDrop = value;
  }
  public resetQueryTypeAnyDrop() {
    this._queryTypeAnyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeAnyDropInput() {
    return this._queryTypeAnyDrop;
  }

  // query_type_cname - computed: false, optional: true, required: false
  private _queryTypeCname?: number; 
  public get queryTypeCname() {
    return this.getNumberAttribute('query_type_cname');
  }
  public set queryTypeCname(value: number) {
    this._queryTypeCname = value;
  }
  public resetQueryTypeCname() {
    this._queryTypeCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeCnameInput() {
    return this._queryTypeCname;
  }

  // query_type_mx - computed: false, optional: true, required: false
  private _queryTypeMx?: number; 
  public get queryTypeMx() {
    return this.getNumberAttribute('query_type_mx');
  }
  public set queryTypeMx(value: number) {
    this._queryTypeMx = value;
  }
  public resetQueryTypeMx() {
    this._queryTypeMx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeMxInput() {
    return this._queryTypeMx;
  }

  // query_type_ns - computed: false, optional: true, required: false
  private _queryTypeNs?: number; 
  public get queryTypeNs() {
    return this.getNumberAttribute('query_type_ns');
  }
  public set queryTypeNs(value: number) {
    this._queryTypeNs = value;
  }
  public resetQueryTypeNs() {
    this._queryTypeNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeNsInput() {
    return this._queryTypeNs;
  }

  // query_type_opt - computed: false, optional: true, required: false
  private _queryTypeOpt?: number; 
  public get queryTypeOpt() {
    return this.getNumberAttribute('query_type_opt');
  }
  public set queryTypeOpt(value: number) {
    this._queryTypeOpt = value;
  }
  public resetQueryTypeOpt() {
    this._queryTypeOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeOptInput() {
    return this._queryTypeOpt;
  }

  // query_type_soa - computed: false, optional: true, required: false
  private _queryTypeSoa?: number; 
  public get queryTypeSoa() {
    return this.getNumberAttribute('query_type_soa');
  }
  public set queryTypeSoa(value: number) {
    this._queryTypeSoa = value;
  }
  public resetQueryTypeSoa() {
    this._queryTypeSoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeSoaInput() {
    return this._queryTypeSoa;
  }

  // query_type_srv - computed: false, optional: true, required: false
  private _queryTypeSrv?: number; 
  public get queryTypeSrv() {
    return this.getNumberAttribute('query_type_srv');
  }
  public set queryTypeSrv(value: number) {
    this._queryTypeSrv = value;
  }
  public resetQueryTypeSrv() {
    this._queryTypeSrv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeSrvInput() {
    return this._queryTypeSrv;
  }

  // rate_limit_type0 - computed: false, optional: true, required: false
  private _rateLimitType0?: number; 
  public get rateLimitType0() {
    return this.getNumberAttribute('rate_limit_type0');
  }
  public set rateLimitType0(value: number) {
    this._rateLimitType0 = value;
  }
  public resetRateLimitType0() {
    this._rateLimitType0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitType0Input() {
    return this._rateLimitType0;
  }

  // rate_limit_type1 - computed: false, optional: true, required: false
  private _rateLimitType1?: number; 
  public get rateLimitType1() {
    return this.getNumberAttribute('rate_limit_type1');
  }
  public set rateLimitType1(value: number) {
    this._rateLimitType1 = value;
  }
  public resetRateLimitType1() {
    this._rateLimitType1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitType1Input() {
    return this._rateLimitType1;
  }

  // rate_limit_type2 - computed: false, optional: true, required: false
  private _rateLimitType2?: number; 
  public get rateLimitType2() {
    return this.getNumberAttribute('rate_limit_type2');
  }
  public set rateLimitType2(value: number) {
    this._rateLimitType2 = value;
  }
  public resetRateLimitType2() {
    this._rateLimitType2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitType2Input() {
    return this._rateLimitType2;
  }

  // rate_limit_type3 - computed: false, optional: true, required: false
  private _rateLimitType3?: number; 
  public get rateLimitType3() {
    return this.getNumberAttribute('rate_limit_type3');
  }
  public set rateLimitType3(value: number) {
    this._rateLimitType3 = value;
  }
  public resetRateLimitType3() {
    this._rateLimitType3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitType3Input() {
    return this._rateLimitType3;
  }

  // rate_limit_type4 - computed: false, optional: true, required: false
  private _rateLimitType4?: number; 
  public get rateLimitType4() {
    return this.getNumberAttribute('rate_limit_type4');
  }
  public set rateLimitType4(value: number) {
    this._rateLimitType4 = value;
  }
  public resetRateLimitType4() {
    this._rateLimitType4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitType4Input() {
    return this._rateLimitType4;
  }

  // req_retrans - computed: false, optional: true, required: false
  private _reqRetrans?: number; 
  public get reqRetrans() {
    return this.getNumberAttribute('req_retrans');
  }
  public set reqRetrans(value: number) {
    this._reqRetrans = value;
  }
  public resetReqRetrans() {
    this._reqRetrans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRetransInput() {
    return this._reqRetrans;
  }

  // req_sent - computed: false, optional: true, required: false
  private _reqSent?: number; 
  public get reqSent() {
    return this.getNumberAttribute('req_sent');
  }
  public set reqSent(value: number) {
    this._reqSent = value;
  }
  public resetReqSent() {
    this._reqSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSentInput() {
    return this._reqSent;
  }

  // req_size_exceed - computed: false, optional: true, required: false
  private _reqSizeExceed?: number; 
  public get reqSizeExceed() {
    return this.getNumberAttribute('req_size_exceed');
  }
  public set reqSizeExceed(value: number) {
    this._reqSizeExceed = value;
  }
  public resetReqSizeExceed() {
    this._reqSizeExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSizeExceedInput() {
    return this._reqSizeExceed;
  }

  // rrtype_drop - computed: false, optional: true, required: false
  private _rrtypeDrop?: number; 
  public get rrtypeDrop() {
    return this.getNumberAttribute('rrtype_drop');
  }
  public set rrtypeDrop(value: number) {
    this._rrtypeDrop = value;
  }
  public resetRrtypeDrop() {
    this._rrtypeDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrtypeDropInput() {
    return this._rrtypeDrop;
  }

  // sess_aged - computed: false, optional: true, required: false
  private _sessAged?: number; 
  public get sessAged() {
    return this.getNumberAttribute('sess_aged');
  }
  public set sessAged(value: number) {
    this._sessAged = value;
  }
  public resetSessAged() {
    this._sessAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessAgedInput() {
    return this._sessAged;
  }

  // sess_create - computed: false, optional: true, required: false
  private _sessCreate?: number; 
  public get sessCreate() {
    return this.getNumberAttribute('sess_create');
  }
  public set sessCreate(value: number) {
    this._sessCreate = value;
  }
  public resetSessCreate() {
    this._sessCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateInput() {
    return this._sessCreate;
  }

  // sess_create_inbound - computed: false, optional: true, required: false
  private _sessCreateInbound?: number; 
  public get sessCreateInbound() {
    return this.getNumberAttribute('sess_create_inbound');
  }
  public set sessCreateInbound(value: number) {
    this._sessCreateInbound = value;
  }
  public resetSessCreateInbound() {
    this._sessCreateInbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateInboundInput() {
    return this._sessCreateInbound;
  }

  // sess_create_outbound - computed: false, optional: true, required: false
  private _sessCreateOutbound?: number; 
  public get sessCreateOutbound() {
    return this.getNumberAttribute('sess_create_outbound');
  }
  public set sessCreateOutbound(value: number) {
    this._sessCreateOutbound = value;
  }
  public resetSessCreateOutbound() {
    this._sessCreateOutbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateOutboundInput() {
    return this._sessCreateOutbound;
  }

  // sflow_external_packets_sent - computed: false, optional: true, required: false
  private _sflowExternalPacketsSent?: number; 
  public get sflowExternalPacketsSent() {
    return this.getNumberAttribute('sflow_external_packets_sent');
  }
  public set sflowExternalPacketsSent(value: number) {
    this._sflowExternalPacketsSent = value;
  }
  public resetSflowExternalPacketsSent() {
    this._sflowExternalPacketsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowExternalPacketsSentInput() {
    return this._sflowExternalPacketsSent;
  }

  // sflow_external_samples_packed - computed: false, optional: true, required: false
  private _sflowExternalSamplesPacked?: number; 
  public get sflowExternalSamplesPacked() {
    return this.getNumberAttribute('sflow_external_samples_packed');
  }
  public set sflowExternalSamplesPacked(value: number) {
    this._sflowExternalSamplesPacked = value;
  }
  public resetSflowExternalSamplesPacked() {
    this._sflowExternalSamplesPacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowExternalSamplesPackedInput() {
    return this._sflowExternalSamplesPacked;
  }

  // sflow_internal_packets_sent - computed: false, optional: true, required: false
  private _sflowInternalPacketsSent?: number; 
  public get sflowInternalPacketsSent() {
    return this.getNumberAttribute('sflow_internal_packets_sent');
  }
  public set sflowInternalPacketsSent(value: number) {
    this._sflowInternalPacketsSent = value;
  }
  public resetSflowInternalPacketsSent() {
    this._sflowInternalPacketsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInternalPacketsSentInput() {
    return this._sflowInternalPacketsSent;
  }

  // sflow_internal_samples_packed - computed: false, optional: true, required: false
  private _sflowInternalSamplesPacked?: number; 
  public get sflowInternalSamplesPacked() {
    return this.getNumberAttribute('sflow_internal_samples_packed');
  }
  public set sflowInternalSamplesPacked(value: number) {
    this._sflowInternalSamplesPacked = value;
  }
  public resetSflowInternalSamplesPacked() {
    this._sflowInternalSamplesPacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInternalSamplesPackedInput() {
    return this._sflowInternalSamplesPacked;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // spoof_detect_fail - computed: false, optional: true, required: false
  private _spoofDetectFail?: number; 
  public get spoofDetectFail() {
    return this.getNumberAttribute('spoof_detect_fail');
  }
  public set spoofDetectFail(value: number) {
    this._spoofDetectFail = value;
  }
  public resetSpoofDetectFail() {
    this._spoofDetectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofDetectFailInput() {
    return this._spoofDetectFail;
  }

  // src_conn_pkt_rate_excd - computed: false, optional: true, required: false
  private _srcConnPktRateExcd?: number; 
  public get srcConnPktRateExcd() {
    return this.getNumberAttribute('src_conn_pkt_rate_excd');
  }
  public set srcConnPktRateExcd(value: number) {
    this._srcConnPktRateExcd = value;
  }
  public resetSrcConnPktRateExcd() {
    this._srcConnPktRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnPktRateExcdInput() {
    return this._srcConnPktRateExcd;
  }

  // src_dns_auth_drop - computed: false, optional: true, required: false
  private _srcDnsAuthDrop?: number; 
  public get srcDnsAuthDrop() {
    return this.getNumberAttribute('src_dns_auth_drop');
  }
  public set srcDnsAuthDrop(value: number) {
    this._srcDnsAuthDrop = value;
  }
  public resetSrcDnsAuthDrop() {
    this._srcDnsAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsAuthDropInput() {
    return this._srcDnsAuthDrop;
  }

  // src_dns_fqdn_label_len_exceed - computed: false, optional: true, required: false
  private _srcDnsFqdnLabelLenExceed?: number; 
  public get srcDnsFqdnLabelLenExceed() {
    return this.getNumberAttribute('src_dns_fqdn_label_len_exceed');
  }
  public set srcDnsFqdnLabelLenExceed(value: number) {
    this._srcDnsFqdnLabelLenExceed = value;
  }
  public resetSrcDnsFqdnLabelLenExceed() {
    this._srcDnsFqdnLabelLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsFqdnLabelLenExceedInput() {
    return this._srcDnsFqdnLabelLenExceed;
  }

  // src_dns_malform - computed: false, optional: true, required: false
  private _srcDnsMalform?: number; 
  public get srcDnsMalform() {
    return this.getNumberAttribute('src_dns_malform');
  }
  public set srcDnsMalform(value: number) {
    this._srcDnsMalform = value;
  }
  public resetSrcDnsMalform() {
    this._srcDnsMalform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsMalformInput() {
    return this._srcDnsMalform;
  }

  // src_dns_malform_drop - computed: false, optional: true, required: false
  private _srcDnsMalformDrop?: number; 
  public get srcDnsMalformDrop() {
    return this.getNumberAttribute('src_dns_malform_drop');
  }
  public set srcDnsMalformDrop(value: number) {
    this._srcDnsMalformDrop = value;
  }
  public resetSrcDnsMalformDrop() {
    this._srcDnsMalformDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDnsMalformDropInput() {
    return this._srcDnsMalformDrop;
  }

  // src_drop - computed: false, optional: true, required: false
  private _srcDrop?: number; 
  public get srcDrop() {
    return this.getNumberAttribute('src_drop');
  }
  public set srcDrop(value: number) {
    this._srcDrop = value;
  }
  public resetSrcDrop() {
    this._srcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDropInput() {
    return this._srcDrop;
  }

  // src_filter1_match - computed: false, optional: true, required: false
  private _srcFilter1Match?: number; 
  public get srcFilter1Match() {
    return this.getNumberAttribute('src_filter1_match');
  }
  public set srcFilter1Match(value: number) {
    this._srcFilter1Match = value;
  }
  public resetSrcFilter1Match() {
    this._srcFilter1Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter1MatchInput() {
    return this._srcFilter1Match;
  }

  // src_filter2_match - computed: false, optional: true, required: false
  private _srcFilter2Match?: number; 
  public get srcFilter2Match() {
    return this.getNumberAttribute('src_filter2_match');
  }
  public set srcFilter2Match(value: number) {
    this._srcFilter2Match = value;
  }
  public resetSrcFilter2Match() {
    this._srcFilter2Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter2MatchInput() {
    return this._srcFilter2Match;
  }

  // src_filter3_match - computed: false, optional: true, required: false
  private _srcFilter3Match?: number; 
  public get srcFilter3Match() {
    return this.getNumberAttribute('src_filter3_match');
  }
  public set srcFilter3Match(value: number) {
    this._srcFilter3Match = value;
  }
  public resetSrcFilter3Match() {
    this._srcFilter3Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter3MatchInput() {
    return this._srcFilter3Match;
  }

  // src_filter4_match - computed: false, optional: true, required: false
  private _srcFilter4Match?: number; 
  public get srcFilter4Match() {
    return this.getNumberAttribute('src_filter4_match');
  }
  public set srcFilter4Match(value: number) {
    this._srcFilter4Match = value;
  }
  public resetSrcFilter4Match() {
    this._srcFilter4Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter4MatchInput() {
    return this._srcFilter4Match;
  }

  // src_filter5_match - computed: false, optional: true, required: false
  private _srcFilter5Match?: number; 
  public get srcFilter5Match() {
    return this.getNumberAttribute('src_filter5_match');
  }
  public set srcFilter5Match(value: number) {
    this._srcFilter5Match = value;
  }
  public resetSrcFilter5Match() {
    this._srcFilter5Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter5MatchInput() {
    return this._srcFilter5Match;
  }

  // src_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcFilterActionBlacklist?: number; 
  public get srcFilterActionBlacklist() {
    return this.getNumberAttribute('src_filter_action_blacklist');
  }
  public set srcFilterActionBlacklist(value: number) {
    this._srcFilterActionBlacklist = value;
  }
  public resetSrcFilterActionBlacklist() {
    this._srcFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionBlacklistInput() {
    return this._srcFilterActionBlacklist;
  }

  // src_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcFilterActionDefaultPass?: number; 
  public get srcFilterActionDefaultPass() {
    return this.getNumberAttribute('src_filter_action_default_pass');
  }
  public set srcFilterActionDefaultPass(value: number) {
    this._srcFilterActionDefaultPass = value;
  }
  public resetSrcFilterActionDefaultPass() {
    this._srcFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionDefaultPassInput() {
    return this._srcFilterActionDefaultPass;
  }

  // src_filter_action_drop - computed: false, optional: true, required: false
  private _srcFilterActionDrop?: number; 
  public get srcFilterActionDrop() {
    return this.getNumberAttribute('src_filter_action_drop');
  }
  public set srcFilterActionDrop(value: number) {
    this._srcFilterActionDrop = value;
  }
  public resetSrcFilterActionDrop() {
    this._srcFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionDropInput() {
    return this._srcFilterActionDrop;
  }

  // src_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcFilterActionWhitelist?: number; 
  public get srcFilterActionWhitelist() {
    return this.getNumberAttribute('src_filter_action_whitelist');
  }
  public set srcFilterActionWhitelist(value: number) {
    this._srcFilterActionWhitelist = value;
  }
  public resetSrcFilterActionWhitelist() {
    this._srcFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionWhitelistInput() {
    return this._srcFilterActionWhitelist;
  }

  // src_filter_auth_fail - computed: false, optional: true, required: false
  private _srcFilterAuthFail?: number; 
  public get srcFilterAuthFail() {
    return this.getNumberAttribute('src_filter_auth_fail');
  }
  public set srcFilterAuthFail(value: number) {
    this._srcFilterAuthFail = value;
  }
  public resetSrcFilterAuthFail() {
    this._srcFilterAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterAuthFailInput() {
    return this._srcFilterAuthFail;
  }

  // src_filter_none_match - computed: false, optional: true, required: false
  private _srcFilterNoneMatch?: number; 
  public get srcFilterNoneMatch() {
    return this.getNumberAttribute('src_filter_none_match');
  }
  public set srcFilterNoneMatch(value: number) {
    this._srcFilterNoneMatch = value;
  }
  public resetSrcFilterNoneMatch() {
    this._srcFilterNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterNoneMatchInput() {
    return this._srcFilterNoneMatch;
  }

  // src_filter_total_not_match - computed: false, optional: true, required: false
  private _srcFilterTotalNotMatch?: number; 
  public get srcFilterTotalNotMatch() {
    return this.getNumberAttribute('src_filter_total_not_match');
  }
  public set srcFilterTotalNotMatch(value: number) {
    this._srcFilterTotalNotMatch = value;
  }
  public resetSrcFilterTotalNotMatch() {
    this._srcFilterTotalNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterTotalNotMatchInput() {
    return this._srcFilterTotalNotMatch;
  }

  // src_force_tcp_auth - computed: false, optional: true, required: false
  private _srcForceTcpAuth?: number; 
  public get srcForceTcpAuth() {
    return this.getNumberAttribute('src_force_tcp_auth');
  }
  public set srcForceTcpAuth(value: number) {
    this._srcForceTcpAuth = value;
  }
  public resetSrcForceTcpAuth() {
    this._srcForceTcpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcForceTcpAuthInput() {
    return this._srcForceTcpAuth;
  }

  // src_fqdn_label_count_exceed - computed: false, optional: true, required: false
  private _srcFqdnLabelCountExceed?: number; 
  public get srcFqdnLabelCountExceed() {
    return this.getNumberAttribute('src_fqdn_label_count_exceed');
  }
  public set srcFqdnLabelCountExceed(value: number) {
    this._srcFqdnLabelCountExceed = value;
  }
  public resetSrcFqdnLabelCountExceed() {
    this._srcFqdnLabelCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFqdnLabelCountExceedInput() {
    return this._srcFqdnLabelCountExceed;
  }

  // src_frag_drop - computed: false, optional: true, required: false
  private _srcFragDrop?: number; 
  public get srcFragDrop() {
    return this.getNumberAttribute('src_frag_drop');
  }
  public set srcFragDrop(value: number) {
    this._srcFragDrop = value;
  }
  public resetSrcFragDrop() {
    this._srcFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFragDropInput() {
    return this._srcFragDrop;
  }

  // src_ntp_monlist_req - computed: false, optional: true, required: false
  private _srcNtpMonlistReq?: number; 
  public get srcNtpMonlistReq() {
    return this.getNumberAttribute('src_ntp_monlist_req');
  }
  public set srcNtpMonlistReq(value: number) {
    this._srcNtpMonlistReq = value;
  }
  public resetSrcNtpMonlistReq() {
    this._srcNtpMonlistReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNtpMonlistReqInput() {
    return this._srcNtpMonlistReq;
  }

  // src_ntp_monlist_resp - computed: false, optional: true, required: false
  private _srcNtpMonlistResp?: number; 
  public get srcNtpMonlistResp() {
    return this.getNumberAttribute('src_ntp_monlist_resp');
  }
  public set srcNtpMonlistResp(value: number) {
    this._srcNtpMonlistResp = value;
  }
  public resetSrcNtpMonlistResp() {
    this._srcNtpMonlistResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNtpMonlistRespInput() {
    return this._srcNtpMonlistResp;
  }

  // src_payload_too_big - computed: false, optional: true, required: false
  private _srcPayloadTooBig?: number; 
  public get srcPayloadTooBig() {
    return this.getNumberAttribute('src_payload_too_big');
  }
  public set srcPayloadTooBig(value: number) {
    this._srcPayloadTooBig = value;
  }
  public resetSrcPayloadTooBig() {
    this._srcPayloadTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPayloadTooBigInput() {
    return this._srcPayloadTooBig;
  }

  // src_payload_too_small - computed: false, optional: true, required: false
  private _srcPayloadTooSmall?: number; 
  public get srcPayloadTooSmall() {
    return this.getNumberAttribute('src_payload_too_small');
  }
  public set srcPayloadTooSmall(value: number) {
    this._srcPayloadTooSmall = value;
  }
  public resetSrcPayloadTooSmall() {
    this._srcPayloadTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPayloadTooSmallInput() {
    return this._srcPayloadTooSmall;
  }

  // src_query_type_any_drop - computed: false, optional: true, required: false
  private _srcQueryTypeAnyDrop?: number; 
  public get srcQueryTypeAnyDrop() {
    return this.getNumberAttribute('src_query_type_any_drop');
  }
  public set srcQueryTypeAnyDrop(value: number) {
    this._srcQueryTypeAnyDrop = value;
  }
  public resetSrcQueryTypeAnyDrop() {
    this._srcQueryTypeAnyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcQueryTypeAnyDropInput() {
    return this._srcQueryTypeAnyDrop;
  }

  // src_rate_limit_type0 - computed: false, optional: true, required: false
  private _srcRateLimitType0?: number; 
  public get srcRateLimitType0() {
    return this.getNumberAttribute('src_rate_limit_type0');
  }
  public set srcRateLimitType0(value: number) {
    this._srcRateLimitType0 = value;
  }
  public resetSrcRateLimitType0() {
    this._srcRateLimitType0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateLimitType0Input() {
    return this._srcRateLimitType0;
  }

  // src_rate_limit_type1 - computed: false, optional: true, required: false
  private _srcRateLimitType1?: number; 
  public get srcRateLimitType1() {
    return this.getNumberAttribute('src_rate_limit_type1');
  }
  public set srcRateLimitType1(value: number) {
    this._srcRateLimitType1 = value;
  }
  public resetSrcRateLimitType1() {
    this._srcRateLimitType1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateLimitType1Input() {
    return this._srcRateLimitType1;
  }

  // src_rate_limit_type2 - computed: false, optional: true, required: false
  private _srcRateLimitType2?: number; 
  public get srcRateLimitType2() {
    return this.getNumberAttribute('src_rate_limit_type2');
  }
  public set srcRateLimitType2(value: number) {
    this._srcRateLimitType2 = value;
  }
  public resetSrcRateLimitType2() {
    this._srcRateLimitType2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateLimitType2Input() {
    return this._srcRateLimitType2;
  }

  // src_rate_limit_type3 - computed: false, optional: true, required: false
  private _srcRateLimitType3?: number; 
  public get srcRateLimitType3() {
    return this.getNumberAttribute('src_rate_limit_type3');
  }
  public set srcRateLimitType3(value: number) {
    this._srcRateLimitType3 = value;
  }
  public resetSrcRateLimitType3() {
    this._srcRateLimitType3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateLimitType3Input() {
    return this._srcRateLimitType3;
  }

  // src_rate_limit_type4 - computed: false, optional: true, required: false
  private _srcRateLimitType4?: number; 
  public get srcRateLimitType4() {
    return this.getNumberAttribute('src_rate_limit_type4');
  }
  public set srcRateLimitType4(value: number) {
    this._srcRateLimitType4 = value;
  }
  public resetSrcRateLimitType4() {
    this._srcRateLimitType4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateLimitType4Input() {
    return this._srcRateLimitType4;
  }

  // src_udp_auth - computed: false, optional: true, required: false
  private _srcUdpAuth?: number; 
  public get srcUdpAuth() {
    return this.getNumberAttribute('src_udp_auth');
  }
  public set srcUdpAuth(value: number) {
    this._srcUdpAuth = value;
  }
  public resetSrcUdpAuth() {
    this._srcUdpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpAuthInput() {
    return this._srcUdpAuth;
  }

  // src_udp_auth_drop - computed: false, optional: true, required: false
  private _srcUdpAuthDrop?: number; 
  public get srcUdpAuthDrop() {
    return this.getNumberAttribute('src_udp_auth_drop');
  }
  public set srcUdpAuthDrop(value: number) {
    this._srcUdpAuthDrop = value;
  }
  public resetSrcUdpAuthDrop() {
    this._srcUdpAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpAuthDropInput() {
    return this._srcUdpAuthDrop;
  }

  // src_udp_auth_fail - computed: false, optional: true, required: false
  private _srcUdpAuthFail?: number; 
  public get srcUdpAuthFail() {
    return this.getNumberAttribute('src_udp_auth_fail');
  }
  public set srcUdpAuthFail(value: number) {
    this._srcUdpAuthFail = value;
  }
  public resetSrcUdpAuthFail() {
    this._srcUdpAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpAuthFailInput() {
    return this._srcUdpAuthFail;
  }

  // src_udp_auth_timeout - computed: false, optional: true, required: false
  private _srcUdpAuthTimeout?: number; 
  public get srcUdpAuthTimeout() {
    return this.getNumberAttribute('src_udp_auth_timeout');
  }
  public set srcUdpAuthTimeout(value: number) {
    this._srcUdpAuthTimeout = value;
  }
  public resetSrcUdpAuthTimeout() {
    this._srcUdpAuthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpAuthTimeoutInput() {
    return this._srcUdpAuthTimeout;
  }

  // src_udp_retry_gap_drop - computed: false, optional: true, required: false
  private _srcUdpRetryGapDrop?: number; 
  public get srcUdpRetryGapDrop() {
    return this.getNumberAttribute('src_udp_retry_gap_drop');
  }
  public set srcUdpRetryGapDrop(value: number) {
    this._srcUdpRetryGapDrop = value;
  }
  public resetSrcUdpRetryGapDrop() {
    this._srcUdpRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpRetryGapDropInput() {
    return this._srcUdpRetryGapDrop;
  }

  // src_udp_retry_init - computed: false, optional: true, required: false
  private _srcUdpRetryInit?: number; 
  public get srcUdpRetryInit() {
    return this.getNumberAttribute('src_udp_retry_init');
  }
  public set srcUdpRetryInit(value: number) {
    this._srcUdpRetryInit = value;
  }
  public resetSrcUdpRetryInit() {
    this._srcUdpRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpRetryInitInput() {
    return this._srcUdpRetryInit;
  }

  // src_udp_retry_pass - computed: false, optional: true, required: false
  private _srcUdpRetryPass?: number; 
  public get srcUdpRetryPass() {
    return this.getNumberAttribute('src_udp_retry_pass');
  }
  public set srcUdpRetryPass(value: number) {
    this._srcUdpRetryPass = value;
  }
  public resetSrcUdpRetryPass() {
    this._srcUdpRetryPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpRetryPassInput() {
    return this._srcUdpRetryPass;
  }

  // src_well_known_port - computed: false, optional: true, required: false
  private _srcWellKnownPort?: number; 
  public get srcWellKnownPort() {
    return this.getNumberAttribute('src_well_known_port');
  }
  public set srcWellKnownPort(value: number) {
    this._srcWellKnownPort = value;
  }
  public resetSrcWellKnownPort() {
    this._srcWellKnownPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcWellKnownPortInput() {
    return this._srcWellKnownPort;
  }

  // token_authentication_curr_salt_matched - computed: false, optional: true, required: false
  private _tokenAuthenticationCurrSaltMatched?: number; 
  public get tokenAuthenticationCurrSaltMatched() {
    return this.getNumberAttribute('token_authentication_curr_salt_matched');
  }
  public set tokenAuthenticationCurrSaltMatched(value: number) {
    this._tokenAuthenticationCurrSaltMatched = value;
  }
  public resetTokenAuthenticationCurrSaltMatched() {
    this._tokenAuthenticationCurrSaltMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationCurrSaltMatchedInput() {
    return this._tokenAuthenticationCurrSaltMatched;
  }

  // token_authentication_invalid - computed: false, optional: true, required: false
  private _tokenAuthenticationInvalid?: number; 
  public get tokenAuthenticationInvalid() {
    return this.getNumberAttribute('token_authentication_invalid');
  }
  public set tokenAuthenticationInvalid(value: number) {
    this._tokenAuthenticationInvalid = value;
  }
  public resetTokenAuthenticationInvalid() {
    this._tokenAuthenticationInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationInvalidInput() {
    return this._tokenAuthenticationInvalid;
  }

  // token_authentication_mismatched - computed: false, optional: true, required: false
  private _tokenAuthenticationMismatched?: number; 
  public get tokenAuthenticationMismatched() {
    return this.getNumberAttribute('token_authentication_mismatched');
  }
  public set tokenAuthenticationMismatched(value: number) {
    this._tokenAuthenticationMismatched = value;
  }
  public resetTokenAuthenticationMismatched() {
    this._tokenAuthenticationMismatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationMismatchedInput() {
    return this._tokenAuthenticationMismatched;
  }

  // token_authentication_prev_salt_matched - computed: false, optional: true, required: false
  private _tokenAuthenticationPrevSaltMatched?: number; 
  public get tokenAuthenticationPrevSaltMatched() {
    return this.getNumberAttribute('token_authentication_prev_salt_matched');
  }
  public set tokenAuthenticationPrevSaltMatched(value: number) {
    this._tokenAuthenticationPrevSaltMatched = value;
  }
  public resetTokenAuthenticationPrevSaltMatched() {
    this._tokenAuthenticationPrevSaltMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationPrevSaltMatchedInput() {
    return this._tokenAuthenticationPrevSaltMatched;
  }

  // token_authentication_session_created - computed: false, optional: true, required: false
  private _tokenAuthenticationSessionCreated?: number; 
  public get tokenAuthenticationSessionCreated() {
    return this.getNumberAttribute('token_authentication_session_created');
  }
  public set tokenAuthenticationSessionCreated(value: number) {
    this._tokenAuthenticationSessionCreated = value;
  }
  public resetTokenAuthenticationSessionCreated() {
    this._tokenAuthenticationSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationSessionCreatedInput() {
    return this._tokenAuthenticationSessionCreated;
  }

  // token_authentication_session_created_fail - computed: false, optional: true, required: false
  private _tokenAuthenticationSessionCreatedFail?: number; 
  public get tokenAuthenticationSessionCreatedFail() {
    return this.getNumberAttribute('token_authentication_session_created_fail');
  }
  public set tokenAuthenticationSessionCreatedFail(value: number) {
    this._tokenAuthenticationSessionCreatedFail = value;
  }
  public resetTokenAuthenticationSessionCreatedFail() {
    this._tokenAuthenticationSessionCreatedFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationSessionCreatedFailInput() {
    return this._tokenAuthenticationSessionCreatedFail;
  }

  // udp_auth - computed: false, optional: true, required: false
  private _udpAuth?: number; 
  public get udpAuth() {
    return this.getNumberAttribute('udp_auth');
  }
  public set udpAuth(value: number) {
    this._udpAuth = value;
  }
  public resetUdpAuth() {
    this._udpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthInput() {
    return this._udpAuth;
  }

  // udp_auth_drop - computed: false, optional: true, required: false
  private _udpAuthDrop?: number; 
  public get udpAuthDrop() {
    return this.getNumberAttribute('udp_auth_drop');
  }
  public set udpAuthDrop(value: number) {
    this._udpAuthDrop = value;
  }
  public resetUdpAuthDrop() {
    this._udpAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthDropInput() {
    return this._udpAuthDrop;
  }

  // udp_auth_fail - computed: false, optional: true, required: false
  private _udpAuthFail?: number; 
  public get udpAuthFail() {
    return this.getNumberAttribute('udp_auth_fail');
  }
  public set udpAuthFail(value: number) {
    this._udpAuthFail = value;
  }
  public resetUdpAuthFail() {
    this._udpAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthFailInput() {
    return this._udpAuthFail;
  }

  // udp_auth_pass - computed: false, optional: true, required: false
  private _udpAuthPass?: number; 
  public get udpAuthPass() {
    return this.getNumberAttribute('udp_auth_pass');
  }
  public set udpAuthPass(value: number) {
    this._udpAuthPass = value;
  }
  public resetUdpAuthPass() {
    this._udpAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthPassInput() {
    return this._udpAuthPass;
  }

  // udp_auth_retry_fail - computed: false, optional: true, required: false
  private _udpAuthRetryFail?: number; 
  public get udpAuthRetryFail() {
    return this.getNumberAttribute('udp_auth_retry_fail');
  }
  public set udpAuthRetryFail(value: number) {
    this._udpAuthRetryFail = value;
  }
  public resetUdpAuthRetryFail() {
    this._udpAuthRetryFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthRetryFailInput() {
    return this._udpAuthRetryFail;
  }

  // udp_auth_retry_gap_drop - computed: false, optional: true, required: false
  private _udpAuthRetryGapDrop?: number; 
  public get udpAuthRetryGapDrop() {
    return this.getNumberAttribute('udp_auth_retry_gap_drop');
  }
  public set udpAuthRetryGapDrop(value: number) {
    this._udpAuthRetryGapDrop = value;
  }
  public resetUdpAuthRetryGapDrop() {
    this._udpAuthRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthRetryGapDropInput() {
    return this._udpAuthRetryGapDrop;
  }

  // udp_retry_gap_drop - computed: false, optional: true, required: false
  private _udpRetryGapDrop?: number; 
  public get udpRetryGapDrop() {
    return this.getNumberAttribute('udp_retry_gap_drop');
  }
  public set udpRetryGapDrop(value: number) {
    this._udpRetryGapDrop = value;
  }
  public resetUdpRetryGapDrop() {
    this._udpRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryGapDropInput() {
    return this._udpRetryGapDrop;
  }

  // udp_retry_init - computed: false, optional: true, required: false
  private _udpRetryInit?: number; 
  public get udpRetryInit() {
    return this.getNumberAttribute('udp_retry_init');
  }
  public set udpRetryInit(value: number) {
    this._udpRetryInit = value;
  }
  public resetUdpRetryInit() {
    this._udpRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryInitInput() {
    return this._udpRetryInit;
  }

  // udp_retry_pass - computed: false, optional: true, required: false
  private _udpRetryPass?: number; 
  public get udpRetryPass() {
    return this.getNumberAttribute('udp_retry_pass');
  }
  public set udpRetryPass(value: number) {
    this._udpRetryPass = value;
  }
  public resetUdpRetryPass() {
    this._udpRetryPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryPassInput() {
    return this._udpRetryPass;
  }

  // wellknown_sport_drop - computed: false, optional: true, required: false
  private _wellknownSportDrop?: number; 
  public get wellknownSportDrop() {
    return this.getNumberAttribute('wellknown_sport_drop');
  }
  public set wellknownSportDrop(value: number) {
    this._wellknownSportDrop = value;
  }
  public resetWellknownSportDrop() {
    this._wellknownSportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellknownSportDropInput() {
    return this._wellknownSportDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats thunder_ddos_dns_udp_port_stats}
*/
export class DataThunderDdosDnsUdpPortStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dns_udp_port_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDnsUdpPortStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDnsUdpPortStats to import
  * @param importFromId The id of the existing DataThunderDdosDnsUdpPortStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDnsUdpPortStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dns_udp_port_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_udp_port_stats thunder_ddos_dns_udp_port_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDnsUdpPortStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDnsUdpPortStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dns_udp_port_stats',
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosDnsUdpPortStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosDnsUdpPortStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderDdosDnsUdpPortStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderDdosDnsUdpPortStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDnsUdpPortStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
