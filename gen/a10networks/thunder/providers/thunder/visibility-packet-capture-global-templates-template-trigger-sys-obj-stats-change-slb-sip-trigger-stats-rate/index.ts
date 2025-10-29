// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Number of SIP messages received from client but failed to forward to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate#msg_proxy_client_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA#msg_proxy_client_fail}
  */
  readonly msgProxyClientFail?: number;
  /**
  * Enable automatic packet-capture for Number of server connection create failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate#msg_proxy_fail_start_server_conn VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA#msg_proxy_fail_start_server_conn}
  */
  readonly msgProxyFailStartServerConn?: number;
  /**
  * Enable automatic packet-capture for Number of SIP messages received from server but failed to forward to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate#msg_proxy_server_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA#msg_proxy_server_fail}
  */
  readonly msgProxyServerFail?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSipTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_sip_trigger_stats_rate',
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
    this._duration = config.duration;
    this._id = config.id;
    this._msgProxyClientFail = config.msgProxyClientFail;
    this._msgProxyFailStartServerConn = config.msgProxyFailStartServerConn;
    this._msgProxyServerFail = config.msgProxyServerFail;
    this._name = config.name;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // msg_proxy_client_fail - computed: false, optional: true, required: false
  private _msgProxyClientFail?: number; 
  public get msgProxyClientFail() {
    return this.getNumberAttribute('msg_proxy_client_fail');
  }
  public set msgProxyClientFail(value: number) {
    this._msgProxyClientFail = value;
  }
  public resetMsgProxyClientFail() {
    this._msgProxyClientFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientFailInput() {
    return this._msgProxyClientFail;
  }

  // msg_proxy_fail_start_server_conn - computed: false, optional: true, required: false
  private _msgProxyFailStartServerConn?: number; 
  public get msgProxyFailStartServerConn() {
    return this.getNumberAttribute('msg_proxy_fail_start_server_conn');
  }
  public set msgProxyFailStartServerConn(value: number) {
    this._msgProxyFailStartServerConn = value;
  }
  public resetMsgProxyFailStartServerConn() {
    this._msgProxyFailStartServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyFailStartServerConnInput() {
    return this._msgProxyFailStartServerConn;
  }

  // msg_proxy_server_fail - computed: false, optional: true, required: false
  private _msgProxyServerFail?: number; 
  public get msgProxyServerFail() {
    return this.getNumberAttribute('msg_proxy_server_fail');
  }
  public set msgProxyServerFail(value: number) {
    this._msgProxyServerFail = value;
  }
  public resetMsgProxyServerFail() {
    this._msgProxyServerFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerFailInput() {
    return this._msgProxyServerFail;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      msg_proxy_client_fail: cdktf.numberToTerraform(this._msgProxyClientFail),
      msg_proxy_fail_start_server_conn: cdktf.numberToTerraform(this._msgProxyFailStartServerConn),
      msg_proxy_server_fail: cdktf.numberToTerraform(this._msgProxyServerFail),
      name: cdktf.stringToTerraform(this._name),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
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
      msg_proxy_client_fail: {
        value: cdktf.numberToHclTerraform(this._msgProxyClientFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msg_proxy_fail_start_server_conn: {
        value: cdktf.numberToHclTerraform(this._msgProxyFailStartServerConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msg_proxy_server_fail: {
        value: cdktf.numberToHclTerraform(this._msgProxyServerFail),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
