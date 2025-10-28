// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Compression miss no client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc#compression_miss_no_client VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA#compression_miss_no_client}
  */
  readonly compressionMissNoClient?: number;
  /**
  * Enable automatic packet-capture for Compression miss template exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc#compression_miss_template_exclusion VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA#compression_miss_template_exclusion}
  */
  readonly compressionMissTemplateExclusion?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Bad FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc#dnsrrl_bad_fqdn VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA#dnsrrl_bad_fqdn}
  */
  readonly dnsrrlBadFqdn?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Total Responses Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc#dnsrrl_total_dropped VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA#dnsrrl_total_dropped}
  */
  readonly dnsrrlTotalDropped?: number;
  /**
  * Enable automatic packet-capture for Total failure actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc#es_total_failure_actions VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA#es_total_failure_actions}
  */
  readonly esTotalFailureActions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Geo-location Deny count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc#loc_deny VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA#loc_deny}
  */
  readonly locDeny?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc#name VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Total MF DNS packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc#total_mf_dns_pkts VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA#total_mf_dns_pkts}
  */
  readonly totalMfDnsPkts?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesSlbVportTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_slb_vport_tmpl_trigger_stats_inc',
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
    this._compressionMissNoClient = config.compressionMissNoClient;
    this._compressionMissTemplateExclusion = config.compressionMissTemplateExclusion;
    this._dnsrrlBadFqdn = config.dnsrrlBadFqdn;
    this._dnsrrlTotalDropped = config.dnsrrlTotalDropped;
    this._esTotalFailureActions = config.esTotalFailureActions;
    this._id = config.id;
    this._locDeny = config.locDeny;
    this._name = config.name;
    this._totalMfDnsPkts = config.totalMfDnsPkts;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compression_miss_no_client: cdktf.numberToTerraform(this._compressionMissNoClient),
      compression_miss_template_exclusion: cdktf.numberToTerraform(this._compressionMissTemplateExclusion),
      dnsrrl_bad_fqdn: cdktf.numberToTerraform(this._dnsrrlBadFqdn),
      dnsrrl_total_dropped: cdktf.numberToTerraform(this._dnsrrlTotalDropped),
      es_total_failure_actions: cdktf.numberToTerraform(this._esTotalFailureActions),
      id: cdktf.stringToTerraform(this._id),
      loc_deny: cdktf.numberToTerraform(this._locDeny),
      name: cdktf.stringToTerraform(this._name),
      total_mf_dns_pkts: cdktf.numberToTerraform(this._totalMfDnsPkts),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compression_miss_no_client: {
        value: cdktf.numberToHclTerraform(this._compressionMissNoClient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_miss_template_exclusion: {
        value: cdktf.numberToHclTerraform(this._compressionMissTemplateExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dnsrrl_bad_fqdn: {
        value: cdktf.numberToHclTerraform(this._dnsrrlBadFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dnsrrl_total_dropped: {
        value: cdktf.numberToHclTerraform(this._dnsrrlTotalDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      es_total_failure_actions: {
        value: cdktf.numberToHclTerraform(this._esTotalFailureActions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loc_deny: {
        value: cdktf.numberToHclTerraform(this._locDeny),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_mf_dns_pkts: {
        value: cdktf.numberToHclTerraform(this._totalMfDnsPkts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
