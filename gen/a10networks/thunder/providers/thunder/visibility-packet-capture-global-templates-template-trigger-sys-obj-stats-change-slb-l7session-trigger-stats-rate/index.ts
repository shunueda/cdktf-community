// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Conn does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#conn_not_exist VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#conn_not_exist}
  */
  readonly connNotExist?: number;
  /**
  * Enable automatic packet-capture for Data event callback fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#data_cb_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#data_cb_failed}
  */
  readonly dataCbFailed?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Err event callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#err_cb_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#err_cb_failed}
  */
  readonly errCbFailed?: number;
  /**
  * Enable automatic packet-capture for Err event from TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#err_event VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#err_event}
  */
  readonly errEvent?: number;
  /**
  * Enable automatic packet-capture for Fwd req fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#hps_fwdreq_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#hps_fwdreq_fail}
  */
  readonly hpsFwdreqFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Server connection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#server_conn_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#server_conn_failed}
  */
  readonly serverConnFailed?: number;
  /**
  * Enable automatic packet-capture for Server selection fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#server_select_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#server_select_fail}
  */
  readonly serverSelectFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for Wbuf event callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#wbuf_cb_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA#wbuf_cb_failed}
  */
  readonly wbufCbFailed?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session_trigger_stats_rate',
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
    this._connNotExist = config.connNotExist;
    this._dataCbFailed = config.dataCbFailed;
    this._duration = config.duration;
    this._errCbFailed = config.errCbFailed;
    this._errEvent = config.errEvent;
    this._hpsFwdreqFail = config.hpsFwdreqFail;
    this._id = config.id;
    this._name = config.name;
    this._serverConnFailed = config.serverConnFailed;
    this._serverSelectFail = config.serverSelectFail;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._uuid = config.uuid;
    this._wbufCbFailed = config.wbufCbFailed;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conn_not_exist - computed: false, optional: true, required: false
  private _connNotExist?: number; 
  public get connNotExist() {
    return this.getNumberAttribute('conn_not_exist');
  }
  public set connNotExist(value: number) {
    this._connNotExist = value;
  }
  public resetConnNotExist() {
    this._connNotExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connNotExistInput() {
    return this._connNotExist;
  }

  // data_cb_failed - computed: false, optional: true, required: false
  private _dataCbFailed?: number; 
  public get dataCbFailed() {
    return this.getNumberAttribute('data_cb_failed');
  }
  public set dataCbFailed(value: number) {
    this._dataCbFailed = value;
  }
  public resetDataCbFailed() {
    this._dataCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCbFailedInput() {
    return this._dataCbFailed;
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

  // err_cb_failed - computed: false, optional: true, required: false
  private _errCbFailed?: number; 
  public get errCbFailed() {
    return this.getNumberAttribute('err_cb_failed');
  }
  public set errCbFailed(value: number) {
    this._errCbFailed = value;
  }
  public resetErrCbFailed() {
    this._errCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errCbFailedInput() {
    return this._errCbFailed;
  }

  // err_event - computed: false, optional: true, required: false
  private _errEvent?: number; 
  public get errEvent() {
    return this.getNumberAttribute('err_event');
  }
  public set errEvent(value: number) {
    this._errEvent = value;
  }
  public resetErrEvent() {
    this._errEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEventInput() {
    return this._errEvent;
  }

  // hps_fwdreq_fail - computed: false, optional: true, required: false
  private _hpsFwdreqFail?: number; 
  public get hpsFwdreqFail() {
    return this.getNumberAttribute('hps_fwdreq_fail');
  }
  public set hpsFwdreqFail(value: number) {
    this._hpsFwdreqFail = value;
  }
  public resetHpsFwdreqFail() {
    this._hpsFwdreqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsFwdreqFailInput() {
    return this._hpsFwdreqFail;
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

  // server_conn_failed - computed: false, optional: true, required: false
  private _serverConnFailed?: number; 
  public get serverConnFailed() {
    return this.getNumberAttribute('server_conn_failed');
  }
  public set serverConnFailed(value: number) {
    this._serverConnFailed = value;
  }
  public resetServerConnFailed() {
    this._serverConnFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnFailedInput() {
    return this._serverConnFailed;
  }

  // server_select_fail - computed: false, optional: true, required: false
  private _serverSelectFail?: number; 
  public get serverSelectFail() {
    return this.getNumberAttribute('server_select_fail');
  }
  public set serverSelectFail(value: number) {
    this._serverSelectFail = value;
  }
  public resetServerSelectFail() {
    this._serverSelectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectFailInput() {
    return this._serverSelectFail;
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

  // wbuf_cb_failed - computed: false, optional: true, required: false
  private _wbufCbFailed?: number; 
  public get wbufCbFailed() {
    return this.getNumberAttribute('wbuf_cb_failed');
  }
  public set wbufCbFailed(value: number) {
    this._wbufCbFailed = value;
  }
  public resetWbufCbFailed() {
    this._wbufCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wbufCbFailedInput() {
    return this._wbufCbFailed;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conn_not_exist: cdktf.numberToTerraform(this._connNotExist),
      data_cb_failed: cdktf.numberToTerraform(this._dataCbFailed),
      duration: cdktf.numberToTerraform(this._duration),
      err_cb_failed: cdktf.numberToTerraform(this._errCbFailed),
      err_event: cdktf.numberToTerraform(this._errEvent),
      hps_fwdreq_fail: cdktf.numberToTerraform(this._hpsFwdreqFail),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      server_conn_failed: cdktf.numberToTerraform(this._serverConnFailed),
      server_select_fail: cdktf.numberToTerraform(this._serverSelectFail),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      uuid: cdktf.stringToTerraform(this._uuid),
      wbuf_cb_failed: cdktf.numberToTerraform(this._wbufCbFailed),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conn_not_exist: {
        value: cdktf.numberToHclTerraform(this._connNotExist),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_cb_failed: {
        value: cdktf.numberToHclTerraform(this._dataCbFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_cb_failed: {
        value: cdktf.numberToHclTerraform(this._errCbFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_event: {
        value: cdktf.numberToHclTerraform(this._errEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hps_fwdreq_fail: {
        value: cdktf.numberToHclTerraform(this._hpsFwdreqFail),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_conn_failed: {
        value: cdktf.numberToHclTerraform(this._serverConnFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_select_fail: {
        value: cdktf.numberToHclTerraform(this._serverSelectFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_exceeded_by: {
        value: cdktf.numberToHclTerraform(this._thresholdExceededBy),
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
      wbuf_cb_failed: {
        value: cdktf.numberToHclTerraform(this._wbufCbFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
