// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Last failure code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate#failure_code VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA#failure_code}
  */
  readonly failureCode?: number;
  /**
  * Enable automatic packet-capture for Total failure count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate#failure_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA#failure_count}
  */
  readonly failureCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Max queued request count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate#max_outstanding_request_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA#max_outstanding_request_count}
  */
  readonly maxOutstandingRequestCount?: number;
  /**
  * Enable automatic packet-capture for Max queued submit count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate#max_outstanding_submit_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA#max_outstanding_submit_count}
  */
  readonly maxOutstandingSubmitCount?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Compression queue full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate#ring_full_count VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA#ring_full_count}
  */
  readonly ringFullCount?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHwCompressTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_hw_compress_trigger_stats_rate',
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
    this._failureCode = config.failureCode;
    this._failureCount = config.failureCount;
    this._id = config.id;
    this._maxOutstandingRequestCount = config.maxOutstandingRequestCount;
    this._maxOutstandingSubmitCount = config.maxOutstandingSubmitCount;
    this._name = config.name;
    this._ringFullCount = config.ringFullCount;
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

  // failure_code - computed: false, optional: true, required: false
  private _failureCode?: number; 
  public get failureCode() {
    return this.getNumberAttribute('failure_code');
  }
  public set failureCode(value: number) {
    this._failureCode = value;
  }
  public resetFailureCode() {
    this._failureCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCodeInput() {
    return this._failureCode;
  }

  // failure_count - computed: false, optional: true, required: false
  private _failureCount?: number; 
  public get failureCount() {
    return this.getNumberAttribute('failure_count');
  }
  public set failureCount(value: number) {
    this._failureCount = value;
  }
  public resetFailureCount() {
    this._failureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCountInput() {
    return this._failureCount;
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

  // max_outstanding_request_count - computed: false, optional: true, required: false
  private _maxOutstandingRequestCount?: number; 
  public get maxOutstandingRequestCount() {
    return this.getNumberAttribute('max_outstanding_request_count');
  }
  public set maxOutstandingRequestCount(value: number) {
    this._maxOutstandingRequestCount = value;
  }
  public resetMaxOutstandingRequestCount() {
    this._maxOutstandingRequestCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOutstandingRequestCountInput() {
    return this._maxOutstandingRequestCount;
  }

  // max_outstanding_submit_count - computed: false, optional: true, required: false
  private _maxOutstandingSubmitCount?: number; 
  public get maxOutstandingSubmitCount() {
    return this.getNumberAttribute('max_outstanding_submit_count');
  }
  public set maxOutstandingSubmitCount(value: number) {
    this._maxOutstandingSubmitCount = value;
  }
  public resetMaxOutstandingSubmitCount() {
    this._maxOutstandingSubmitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOutstandingSubmitCountInput() {
    return this._maxOutstandingSubmitCount;
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

  // ring_full_count - computed: false, optional: true, required: false
  private _ringFullCount?: number; 
  public get ringFullCount() {
    return this.getNumberAttribute('ring_full_count');
  }
  public set ringFullCount(value: number) {
    this._ringFullCount = value;
  }
  public resetRingFullCount() {
    this._ringFullCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringFullCountInput() {
    return this._ringFullCount;
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
      failure_code: cdktf.numberToTerraform(this._failureCode),
      failure_count: cdktf.numberToTerraform(this._failureCount),
      id: cdktf.stringToTerraform(this._id),
      max_outstanding_request_count: cdktf.numberToTerraform(this._maxOutstandingRequestCount),
      max_outstanding_submit_count: cdktf.numberToTerraform(this._maxOutstandingSubmitCount),
      name: cdktf.stringToTerraform(this._name),
      ring_full_count: cdktf.numberToTerraform(this._ringFullCount),
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
      failure_code: {
        value: cdktf.numberToHclTerraform(this._failureCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failure_count: {
        value: cdktf.numberToHclTerraform(this._failureCount),
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
      max_outstanding_request_count: {
        value: cdktf.numberToHclTerraform(this._maxOutstandingRequestCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_outstanding_submit_count: {
        value: cdktf.numberToHclTerraform(this._maxOutstandingSubmitCount),
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
      ring_full_count: {
        value: cdktf.numberToHclTerraform(this._ringFullCount),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
