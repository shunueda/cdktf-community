// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Number of SMPP messages received from client but failed to forward to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc#msg_proxy_client_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA#msg_proxy_client_fail}
  */
  readonly msgProxyClientFail?: number;
  /**
  * Enable automatic packet-capture for Number of server connection created failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc#msg_proxy_fail_start_server_conn VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA#msg_proxy_fail_start_server_conn}
  */
  readonly msgProxyFailStartServerConn?: number;
  /**
  * Enable automatic packet-capture for Number of SMPP messages received from server but failed to forward to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc#msg_proxy_server_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA#msg_proxy_server_fail}
  */
  readonly msgProxyServerFail?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Select failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc#select_client_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA#select_client_fail}
  */
  readonly selectClientFail?: number;
  /**
  * Enable automatic packet-capture for Fail to select server conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc#select_server_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA#select_server_fail}
  */
  readonly selectServerFail?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmppTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smpp_trigger_stats_inc',
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
    this._msgProxyClientFail = config.msgProxyClientFail;
    this._msgProxyFailStartServerConn = config.msgProxyFailStartServerConn;
    this._msgProxyServerFail = config.msgProxyServerFail;
    this._name = config.name;
    this._selectClientFail = config.selectClientFail;
    this._selectServerFail = config.selectServerFail;
    this._uuid = config.uuid;
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

  // select_client_fail - computed: false, optional: true, required: false
  private _selectClientFail?: number; 
  public get selectClientFail() {
    return this.getNumberAttribute('select_client_fail');
  }
  public set selectClientFail(value: number) {
    this._selectClientFail = value;
  }
  public resetSelectClientFail() {
    this._selectClientFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectClientFailInput() {
    return this._selectClientFail;
  }

  // select_server_fail - computed: false, optional: true, required: false
  private _selectServerFail?: number; 
  public get selectServerFail() {
    return this.getNumberAttribute('select_server_fail');
  }
  public set selectServerFail(value: number) {
    this._selectServerFail = value;
  }
  public resetSelectServerFail() {
    this._selectServerFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerFailInput() {
    return this._selectServerFail;
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
      id: cdktf.stringToTerraform(this._id),
      msg_proxy_client_fail: cdktf.numberToTerraform(this._msgProxyClientFail),
      msg_proxy_fail_start_server_conn: cdktf.numberToTerraform(this._msgProxyFailStartServerConn),
      msg_proxy_server_fail: cdktf.numberToTerraform(this._msgProxyServerFail),
      name: cdktf.stringToTerraform(this._name),
      select_client_fail: cdktf.numberToTerraform(this._selectClientFail),
      select_server_fail: cdktf.numberToTerraform(this._selectServerFail),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      select_client_fail: {
        value: cdktf.numberToHclTerraform(this._selectClientFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      select_server_fail: {
        value: cdktf.numberToHclTerraform(this._selectServerFail),
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
