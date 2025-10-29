// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesSlbVportTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#capture_config VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#id VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#name VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#user_tag VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#uuid VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsInc;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRate;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverity;
}
export interface VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsInc {
  /**
  * Enable automatic packet-capture for Compression miss no client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#compression_miss_no_client VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#compression_miss_no_client}
  */
  readonly compressionMissNoClient?: number;
  /**
  * Enable automatic packet-capture for Compression miss template exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#compression_miss_template_exclusion VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#compression_miss_template_exclusion}
  */
  readonly compressionMissTemplateExclusion?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Bad FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#dnsrrl_bad_fqdn VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#dnsrrl_bad_fqdn}
  */
  readonly dnsrrlBadFqdn?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Total Responses Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#dnsrrl_total_dropped VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#dnsrrl_total_dropped}
  */
  readonly dnsrrlTotalDropped?: number;
  /**
  * Enable automatic packet-capture for Total failure actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#es_total_failure_actions VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#es_total_failure_actions}
  */
  readonly esTotalFailureActions?: number;
  /**
  * Enable automatic packet-capture for Geo-location Deny count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#loc_deny VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#loc_deny}
  */
  readonly locDeny?: number;
  /**
  * Enable automatic packet-capture for Total MF DNS packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#total_mf_dns_pkts VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#total_mf_dns_pkts}
  */
  readonly totalMfDnsPkts?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#uuid VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_miss_no_client: cdktf.numberToTerraform(struct!.compressionMissNoClient),
    compression_miss_template_exclusion: cdktf.numberToTerraform(struct!.compressionMissTemplateExclusion),
    dnsrrl_bad_fqdn: cdktf.numberToTerraform(struct!.dnsrrlBadFqdn),
    dnsrrl_total_dropped: cdktf.numberToTerraform(struct!.dnsrrlTotalDropped),
    es_total_failure_actions: cdktf.numberToTerraform(struct!.esTotalFailureActions),
    loc_deny: cdktf.numberToTerraform(struct!.locDeny),
    total_mf_dns_pkts: cdktf.numberToTerraform(struct!.totalMfDnsPkts),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_miss_no_client: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissNoClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_miss_template_exclusion: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissTemplateExclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_bad_fqdn: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlBadFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_total_dropped: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlTotalDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_total_failure_actions: {
      value: cdktf.numberToHclTerraform(struct!.esTotalFailureActions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loc_deny: {
      value: cdktf.numberToHclTerraform(struct!.locDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_mf_dns_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalMfDnsPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsInc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionMissNoClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissNoClient = this._compressionMissNoClient;
    }
    if (this._compressionMissTemplateExclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissTemplateExclusion = this._compressionMissTemplateExclusion;
    }
    if (this._dnsrrlBadFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlBadFqdn = this._dnsrrlBadFqdn;
    }
    if (this._dnsrrlTotalDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlTotalDropped = this._dnsrrlTotalDropped;
    }
    if (this._esTotalFailureActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.esTotalFailureActions = this._esTotalFailureActions;
    }
    if (this._locDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.locDeny = this._locDeny;
    }
    if (this._totalMfDnsPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMfDnsPkts = this._totalMfDnsPkts;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsInc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionMissNoClient = undefined;
      this._compressionMissTemplateExclusion = undefined;
      this._dnsrrlBadFqdn = undefined;
      this._dnsrrlTotalDropped = undefined;
      this._esTotalFailureActions = undefined;
      this._locDeny = undefined;
      this._totalMfDnsPkts = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionMissNoClient = value.compressionMissNoClient;
      this._compressionMissTemplateExclusion = value.compressionMissTemplateExclusion;
      this._dnsrrlBadFqdn = value.dnsrrlBadFqdn;
      this._dnsrrlTotalDropped = value.dnsrrlTotalDropped;
      this._esTotalFailureActions = value.esTotalFailureActions;
      this._locDeny = value.locDeny;
      this._totalMfDnsPkts = value.totalMfDnsPkts;
      this._uuid = value.uuid;
    }
  }

  // compression_miss_no_client - computed: false, optional: true, required: false
  private _compressionMissNoClient?: number; 
  public get compressionMissNoClient() {
    return this.getNumberAttribute('compression_miss_no_client');
  }
  public set compressionMissNoClient(value: number) {
    this._compressionMissNoClient = value;
  }
  public resetCompressionMissNoClient() {
    this._compressionMissNoClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissNoClientInput() {
    return this._compressionMissNoClient;
  }

  // compression_miss_template_exclusion - computed: false, optional: true, required: false
  private _compressionMissTemplateExclusion?: number; 
  public get compressionMissTemplateExclusion() {
    return this.getNumberAttribute('compression_miss_template_exclusion');
  }
  public set compressionMissTemplateExclusion(value: number) {
    this._compressionMissTemplateExclusion = value;
  }
  public resetCompressionMissTemplateExclusion() {
    this._compressionMissTemplateExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissTemplateExclusionInput() {
    return this._compressionMissTemplateExclusion;
  }

  // dnsrrl_bad_fqdn - computed: false, optional: true, required: false
  private _dnsrrlBadFqdn?: number; 
  public get dnsrrlBadFqdn() {
    return this.getNumberAttribute('dnsrrl_bad_fqdn');
  }
  public set dnsrrlBadFqdn(value: number) {
    this._dnsrrlBadFqdn = value;
  }
  public resetDnsrrlBadFqdn() {
    this._dnsrrlBadFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlBadFqdnInput() {
    return this._dnsrrlBadFqdn;
  }

  // dnsrrl_total_dropped - computed: false, optional: true, required: false
  private _dnsrrlTotalDropped?: number; 
  public get dnsrrlTotalDropped() {
    return this.getNumberAttribute('dnsrrl_total_dropped');
  }
  public set dnsrrlTotalDropped(value: number) {
    this._dnsrrlTotalDropped = value;
  }
  public resetDnsrrlTotalDropped() {
    this._dnsrrlTotalDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlTotalDroppedInput() {
    return this._dnsrrlTotalDropped;
  }

  // es_total_failure_actions - computed: false, optional: true, required: false
  private _esTotalFailureActions?: number; 
  public get esTotalFailureActions() {
    return this.getNumberAttribute('es_total_failure_actions');
  }
  public set esTotalFailureActions(value: number) {
    this._esTotalFailureActions = value;
  }
  public resetEsTotalFailureActions() {
    this._esTotalFailureActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esTotalFailureActionsInput() {
    return this._esTotalFailureActions;
  }

  // loc_deny - computed: false, optional: true, required: false
  private _locDeny?: number; 
  public get locDeny() {
    return this.getNumberAttribute('loc_deny');
  }
  public set locDeny(value: number) {
    this._locDeny = value;
  }
  public resetLocDeny() {
    this._locDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locDenyInput() {
    return this._locDeny;
  }

  // total_mf_dns_pkts - computed: false, optional: true, required: false
  private _totalMfDnsPkts?: number; 
  public get totalMfDnsPkts() {
    return this.getNumberAttribute('total_mf_dns_pkts');
  }
  public set totalMfDnsPkts(value: number) {
    this._totalMfDnsPkts = value;
  }
  public resetTotalMfDnsPkts() {
    this._totalMfDnsPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMfDnsPktsInput() {
    return this._totalMfDnsPkts;
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
}
export interface VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRate {
  /**
  * Enable automatic packet-capture for Compression miss no client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#compression_miss_no_client VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#compression_miss_no_client}
  */
  readonly compressionMissNoClient?: number;
  /**
  * Enable automatic packet-capture for Compression miss template exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#compression_miss_template_exclusion VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#compression_miss_template_exclusion}
  */
  readonly compressionMissTemplateExclusion?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Bad FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#dnsrrl_bad_fqdn VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#dnsrrl_bad_fqdn}
  */
  readonly dnsrrlBadFqdn?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Total Responses Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#dnsrrl_total_dropped VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#dnsrrl_total_dropped}
  */
  readonly dnsrrlTotalDropped?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#duration VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Total failure actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#es_total_failure_actions VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#es_total_failure_actions}
  */
  readonly esTotalFailureActions?: number;
  /**
  * Enable automatic packet-capture for Geo-location Deny count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#loc_deny VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#loc_deny}
  */
  readonly locDeny?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Total MF DNS packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#total_mf_dns_pkts VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#total_mf_dns_pkts}
  */
  readonly totalMfDnsPkts?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#uuid VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRateToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_miss_no_client: cdktf.numberToTerraform(struct!.compressionMissNoClient),
    compression_miss_template_exclusion: cdktf.numberToTerraform(struct!.compressionMissTemplateExclusion),
    dnsrrl_bad_fqdn: cdktf.numberToTerraform(struct!.dnsrrlBadFqdn),
    dnsrrl_total_dropped: cdktf.numberToTerraform(struct!.dnsrrlTotalDropped),
    duration: cdktf.numberToTerraform(struct!.duration),
    es_total_failure_actions: cdktf.numberToTerraform(struct!.esTotalFailureActions),
    loc_deny: cdktf.numberToTerraform(struct!.locDeny),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    total_mf_dns_pkts: cdktf.numberToTerraform(struct!.totalMfDnsPkts),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRateToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_miss_no_client: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissNoClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_miss_template_exclusion: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissTemplateExclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_bad_fqdn: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlBadFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_total_dropped: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlTotalDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_total_failure_actions: {
      value: cdktf.numberToHclTerraform(struct!.esTotalFailureActions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loc_deny: {
      value: cdktf.numberToHclTerraform(struct!.locDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_exceeded_by: {
      value: cdktf.numberToHclTerraform(struct!.thresholdExceededBy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_mf_dns_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalMfDnsPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionMissNoClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissNoClient = this._compressionMissNoClient;
    }
    if (this._compressionMissTemplateExclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissTemplateExclusion = this._compressionMissTemplateExclusion;
    }
    if (this._dnsrrlBadFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlBadFqdn = this._dnsrrlBadFqdn;
    }
    if (this._dnsrrlTotalDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlTotalDropped = this._dnsrrlTotalDropped;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._esTotalFailureActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.esTotalFailureActions = this._esTotalFailureActions;
    }
    if (this._locDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.locDeny = this._locDeny;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._totalMfDnsPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMfDnsPkts = this._totalMfDnsPkts;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionMissNoClient = undefined;
      this._compressionMissTemplateExclusion = undefined;
      this._dnsrrlBadFqdn = undefined;
      this._dnsrrlTotalDropped = undefined;
      this._duration = undefined;
      this._esTotalFailureActions = undefined;
      this._locDeny = undefined;
      this._thresholdExceededBy = undefined;
      this._totalMfDnsPkts = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionMissNoClient = value.compressionMissNoClient;
      this._compressionMissTemplateExclusion = value.compressionMissTemplateExclusion;
      this._dnsrrlBadFqdn = value.dnsrrlBadFqdn;
      this._dnsrrlTotalDropped = value.dnsrrlTotalDropped;
      this._duration = value.duration;
      this._esTotalFailureActions = value.esTotalFailureActions;
      this._locDeny = value.locDeny;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._totalMfDnsPkts = value.totalMfDnsPkts;
      this._uuid = value.uuid;
    }
  }

  // compression_miss_no_client - computed: false, optional: true, required: false
  private _compressionMissNoClient?: number; 
  public get compressionMissNoClient() {
    return this.getNumberAttribute('compression_miss_no_client');
  }
  public set compressionMissNoClient(value: number) {
    this._compressionMissNoClient = value;
  }
  public resetCompressionMissNoClient() {
    this._compressionMissNoClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissNoClientInput() {
    return this._compressionMissNoClient;
  }

  // compression_miss_template_exclusion - computed: false, optional: true, required: false
  private _compressionMissTemplateExclusion?: number; 
  public get compressionMissTemplateExclusion() {
    return this.getNumberAttribute('compression_miss_template_exclusion');
  }
  public set compressionMissTemplateExclusion(value: number) {
    this._compressionMissTemplateExclusion = value;
  }
  public resetCompressionMissTemplateExclusion() {
    this._compressionMissTemplateExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissTemplateExclusionInput() {
    return this._compressionMissTemplateExclusion;
  }

  // dnsrrl_bad_fqdn - computed: false, optional: true, required: false
  private _dnsrrlBadFqdn?: number; 
  public get dnsrrlBadFqdn() {
    return this.getNumberAttribute('dnsrrl_bad_fqdn');
  }
  public set dnsrrlBadFqdn(value: number) {
    this._dnsrrlBadFqdn = value;
  }
  public resetDnsrrlBadFqdn() {
    this._dnsrrlBadFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlBadFqdnInput() {
    return this._dnsrrlBadFqdn;
  }

  // dnsrrl_total_dropped - computed: false, optional: true, required: false
  private _dnsrrlTotalDropped?: number; 
  public get dnsrrlTotalDropped() {
    return this.getNumberAttribute('dnsrrl_total_dropped');
  }
  public set dnsrrlTotalDropped(value: number) {
    this._dnsrrlTotalDropped = value;
  }
  public resetDnsrrlTotalDropped() {
    this._dnsrrlTotalDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlTotalDroppedInput() {
    return this._dnsrrlTotalDropped;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // es_total_failure_actions - computed: false, optional: true, required: false
  private _esTotalFailureActions?: number; 
  public get esTotalFailureActions() {
    return this.getNumberAttribute('es_total_failure_actions');
  }
  public set esTotalFailureActions(value: number) {
    this._esTotalFailureActions = value;
  }
  public resetEsTotalFailureActions() {
    this._esTotalFailureActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esTotalFailureActionsInput() {
    return this._esTotalFailureActions;
  }

  // loc_deny - computed: false, optional: true, required: false
  private _locDeny?: number; 
  public get locDeny() {
    return this.getNumberAttribute('loc_deny');
  }
  public set locDeny(value: number) {
    this._locDeny = value;
  }
  public resetLocDeny() {
    this._locDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locDenyInput() {
    return this._locDeny;
  }

  // threshold_exceeded_by - computed: false, optional: true, required: false
  private _thresholdExceededBy?: number; 
  public get thresholdExceededBy() {
    return this.getNumberAttribute('threshold_exceeded_by');
  }
  public set thresholdExceededBy(value: number) {
    this._thresholdExceededBy = value;
  }
  public resetThresholdExceededBy() {
    this._thresholdExceededBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceededByInput() {
    return this._thresholdExceededBy;
  }

  // total_mf_dns_pkts - computed: false, optional: true, required: false
  private _totalMfDnsPkts?: number; 
  public get totalMfDnsPkts() {
    return this.getNumberAttribute('total_mf_dns_pkts');
  }
  public set totalMfDnsPkts(value: number) {
    this._totalMfDnsPkts = value;
  }
  public resetTotalMfDnsPkts() {
    this._totalMfDnsPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMfDnsPktsInput() {
    return this._totalMfDnsPkts;
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
}
export interface VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverity {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#drop VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#drop_alert VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#drop_critical VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#drop_warning VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#error VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#error_alert VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#error_critical VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#error_warning VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#uuid VisibilityPacketCaptureObjectTemplatesSlbVportTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverityToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
    drop_alert: cdktf.numberToTerraform(struct!.dropAlert),
    drop_critical: cdktf.numberToTerraform(struct!.dropCritical),
    drop_warning: cdktf.numberToTerraform(struct!.dropWarning),
    error: cdktf.numberToTerraform(struct!.error),
    error_alert: cdktf.numberToTerraform(struct!.errorAlert),
    error_critical: cdktf.numberToTerraform(struct!.errorCritical),
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverityToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_alert: {
      value: cdktf.numberToHclTerraform(struct!.dropAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_critical: {
      value: cdktf.numberToHclTerraform(struct!.dropCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_warning: {
      value: cdktf.numberToHclTerraform(struct!.dropWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_alert: {
      value: cdktf.numberToHclTerraform(struct!.errorAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_critical: {
      value: cdktf.numberToHclTerraform(struct!.errorCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_warning: {
      value: cdktf.numberToHclTerraform(struct!.errorWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dropAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAlert = this._dropAlert;
    }
    if (this._dropCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCritical = this._dropCritical;
    }
    if (this._dropWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropWarning = this._dropWarning;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._errorAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAlert = this._errorAlert;
    }
    if (this._errorCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCritical = this._errorCritical;
    }
    if (this._errorWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorWarning = this._errorWarning;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drop = undefined;
      this._dropAlert = undefined;
      this._dropCritical = undefined;
      this._dropWarning = undefined;
      this._error = undefined;
      this._errorAlert = undefined;
      this._errorCritical = undefined;
      this._errorWarning = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drop = value.drop;
      this._dropAlert = value.dropAlert;
      this._dropCritical = value.dropCritical;
      this._dropWarning = value.dropWarning;
      this._error = value.error;
      this._errorAlert = value.errorAlert;
      this._errorCritical = value.errorCritical;
      this._errorWarning = value.errorWarning;
      this._uuid = value.uuid;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_alert - computed: false, optional: true, required: false
  private _dropAlert?: number; 
  public get dropAlert() {
    return this.getNumberAttribute('drop_alert');
  }
  public set dropAlert(value: number) {
    this._dropAlert = value;
  }
  public resetDropAlert() {
    this._dropAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAlertInput() {
    return this._dropAlert;
  }

  // drop_critical - computed: false, optional: true, required: false
  private _dropCritical?: number; 
  public get dropCritical() {
    return this.getNumberAttribute('drop_critical');
  }
  public set dropCritical(value: number) {
    this._dropCritical = value;
  }
  public resetDropCritical() {
    this._dropCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCriticalInput() {
    return this._dropCritical;
  }

  // drop_warning - computed: false, optional: true, required: false
  private _dropWarning?: number; 
  public get dropWarning() {
    return this.getNumberAttribute('drop_warning');
  }
  public set dropWarning(value: number) {
    this._dropWarning = value;
  }
  public resetDropWarning() {
    this._dropWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWarningInput() {
    return this._dropWarning;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // error_alert - computed: false, optional: true, required: false
  private _errorAlert?: number; 
  public get errorAlert() {
    return this.getNumberAttribute('error_alert');
  }
  public set errorAlert(value: number) {
    this._errorAlert = value;
  }
  public resetErrorAlert() {
    this._errorAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAlertInput() {
    return this._errorAlert;
  }

  // error_critical - computed: false, optional: true, required: false
  private _errorCritical?: number; 
  public get errorCritical() {
    return this.getNumberAttribute('error_critical');
  }
  public set errorCritical(value: number) {
    this._errorCritical = value;
  }
  public resetErrorCritical() {
    this._errorCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCriticalInput() {
    return this._errorCritical;
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl thunder_visibility_packet_capture_object_templates_slb_vport_tmpl}
*/
export class VisibilityPacketCaptureObjectTemplatesSlbVportTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_slb_vport_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesSlbVportTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesSlbVportTmpl to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesSlbVportTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesSlbVportTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_slb_vport_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl thunder_visibility_packet_capture_object_templates_slb_vport_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesSlbVportTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesSlbVportTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_slb_vport_tmpl',
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
    this._captureConfig = config.captureConfig;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._triggerStatsInc.internalValue = config.triggerStatsInc;
    this._triggerStatsRate.internalValue = config.triggerStatsRate;
    this._triggerStatsSeverity.internalValue = config.triggerStatsSeverity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // trigger_stats_inc - computed: false, optional: true, required: false
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsInc) {
    this._triggerStatsInc.internalValue = value;
  }
  public resetTriggerStatsInc() {
    this._triggerStatsInc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsIncInput() {
    return this._triggerStatsInc.internalValue;
  }

  // trigger_stats_rate - computed: false, optional: true, required: false
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRateOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRate) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // trigger_stats_severity - computed: false, optional: true, required: false
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverityOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverity) {
    this._triggerStatsSeverity.internalValue = value;
  }
  public resetTriggerStatsSeverity() {
    this._triggerStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsSeverityInput() {
    return this._triggerStatsSeverity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capture_config: cdktf.stringToTerraform(this._captureConfig),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRateToTerraform(this._triggerStatsRate.internalValue),
      trigger_stats_severity: visibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverityToTerraform(this._triggerStatsSeverity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capture_config: {
        value: cdktf.stringToHclTerraform(this._captureConfig),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      trigger_stats_inc: {
        value: visibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRateToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsRateList",
      },
      trigger_stats_severity: {
        value: visibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverityToHclTerraform(this._triggerStatsSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
