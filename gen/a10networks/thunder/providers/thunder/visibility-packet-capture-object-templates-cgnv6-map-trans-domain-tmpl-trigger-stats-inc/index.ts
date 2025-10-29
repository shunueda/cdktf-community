// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Inbound IPv4 Destination Address Port Validation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc#inbound_addr_port_validation_failed VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA#inbound_addr_port_validation_failed}
  */
  readonly inboundAddrPortValidationFailed?: number;
  /**
  * Enable automatic packet-capture for Inbound IPv6 Destination Address Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc#inbound_dest_unreachable VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA#inbound_dest_unreachable}
  */
  readonly inboundDestUnreachable?: number;
  /**
  * Enable automatic packet-capture for Inbound IPv4 Reverse Route Lookup Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc#inbound_rev_lookup_failed VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA#inbound_rev_lookup_failed}
  */
  readonly inboundRevLookupFailed?: number;
  /**
  * Enable automatic packet-capture for Interfaces not Configured Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc#interface_not_configured VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA#interface_not_configured}
  */
  readonly interfaceNotConfigured?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc#name VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Outbound IPv6 Source Address Validation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc#outbound_addr_validation_failed VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA#outbound_addr_validation_failed}
  */
  readonly outboundAddrValidationFailed?: number;
  /**
  * Enable automatic packet-capture for Outbound IPv4 Destination Address Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc#outbound_dest_unreachable VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA#outbound_dest_unreachable}
  */
  readonly outboundDestUnreachable?: number;
  /**
  * Enable automatic packet-capture for Outbound IPv6 Reverse Route Lookup Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc#outbound_rev_lookup_failed VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA#outbound_rev_lookup_failed}
  */
  readonly outboundRevLookupFailed?: number;
  /**
  * Enable automatic packet-capture for Packet Exceeded MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc#packet_mtu_exceeded VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA#packet_mtu_exceeded}
  */
  readonly packetMtuExceeded?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl_trigger_stats_inc',
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
    this._inboundAddrPortValidationFailed = config.inboundAddrPortValidationFailed;
    this._inboundDestUnreachable = config.inboundDestUnreachable;
    this._inboundRevLookupFailed = config.inboundRevLookupFailed;
    this._interfaceNotConfigured = config.interfaceNotConfigured;
    this._name = config.name;
    this._outboundAddrValidationFailed = config.outboundAddrValidationFailed;
    this._outboundDestUnreachable = config.outboundDestUnreachable;
    this._outboundRevLookupFailed = config.outboundRevLookupFailed;
    this._packetMtuExceeded = config.packetMtuExceeded;
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

  // inbound_addr_port_validation_failed - computed: false, optional: true, required: false
  private _inboundAddrPortValidationFailed?: number; 
  public get inboundAddrPortValidationFailed() {
    return this.getNumberAttribute('inbound_addr_port_validation_failed');
  }
  public set inboundAddrPortValidationFailed(value: number) {
    this._inboundAddrPortValidationFailed = value;
  }
  public resetInboundAddrPortValidationFailed() {
    this._inboundAddrPortValidationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundAddrPortValidationFailedInput() {
    return this._inboundAddrPortValidationFailed;
  }

  // inbound_dest_unreachable - computed: false, optional: true, required: false
  private _inboundDestUnreachable?: number; 
  public get inboundDestUnreachable() {
    return this.getNumberAttribute('inbound_dest_unreachable');
  }
  public set inboundDestUnreachable(value: number) {
    this._inboundDestUnreachable = value;
  }
  public resetInboundDestUnreachable() {
    this._inboundDestUnreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundDestUnreachableInput() {
    return this._inboundDestUnreachable;
  }

  // inbound_rev_lookup_failed - computed: false, optional: true, required: false
  private _inboundRevLookupFailed?: number; 
  public get inboundRevLookupFailed() {
    return this.getNumberAttribute('inbound_rev_lookup_failed');
  }
  public set inboundRevLookupFailed(value: number) {
    this._inboundRevLookupFailed = value;
  }
  public resetInboundRevLookupFailed() {
    this._inboundRevLookupFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRevLookupFailedInput() {
    return this._inboundRevLookupFailed;
  }

  // interface_not_configured - computed: false, optional: true, required: false
  private _interfaceNotConfigured?: number; 
  public get interfaceNotConfigured() {
    return this.getNumberAttribute('interface_not_configured');
  }
  public set interfaceNotConfigured(value: number) {
    this._interfaceNotConfigured = value;
  }
  public resetInterfaceNotConfigured() {
    this._interfaceNotConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNotConfiguredInput() {
    return this._interfaceNotConfigured;
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

  // outbound_addr_validation_failed - computed: false, optional: true, required: false
  private _outboundAddrValidationFailed?: number; 
  public get outboundAddrValidationFailed() {
    return this.getNumberAttribute('outbound_addr_validation_failed');
  }
  public set outboundAddrValidationFailed(value: number) {
    this._outboundAddrValidationFailed = value;
  }
  public resetOutboundAddrValidationFailed() {
    this._outboundAddrValidationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundAddrValidationFailedInput() {
    return this._outboundAddrValidationFailed;
  }

  // outbound_dest_unreachable - computed: false, optional: true, required: false
  private _outboundDestUnreachable?: number; 
  public get outboundDestUnreachable() {
    return this.getNumberAttribute('outbound_dest_unreachable');
  }
  public set outboundDestUnreachable(value: number) {
    this._outboundDestUnreachable = value;
  }
  public resetOutboundDestUnreachable() {
    this._outboundDestUnreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundDestUnreachableInput() {
    return this._outboundDestUnreachable;
  }

  // outbound_rev_lookup_failed - computed: false, optional: true, required: false
  private _outboundRevLookupFailed?: number; 
  public get outboundRevLookupFailed() {
    return this.getNumberAttribute('outbound_rev_lookup_failed');
  }
  public set outboundRevLookupFailed(value: number) {
    this._outboundRevLookupFailed = value;
  }
  public resetOutboundRevLookupFailed() {
    this._outboundRevLookupFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundRevLookupFailedInput() {
    return this._outboundRevLookupFailed;
  }

  // packet_mtu_exceeded - computed: false, optional: true, required: false
  private _packetMtuExceeded?: number; 
  public get packetMtuExceeded() {
    return this.getNumberAttribute('packet_mtu_exceeded');
  }
  public set packetMtuExceeded(value: number) {
    this._packetMtuExceeded = value;
  }
  public resetPacketMtuExceeded() {
    this._packetMtuExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetMtuExceededInput() {
    return this._packetMtuExceeded;
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
      inbound_addr_port_validation_failed: cdktf.numberToTerraform(this._inboundAddrPortValidationFailed),
      inbound_dest_unreachable: cdktf.numberToTerraform(this._inboundDestUnreachable),
      inbound_rev_lookup_failed: cdktf.numberToTerraform(this._inboundRevLookupFailed),
      interface_not_configured: cdktf.numberToTerraform(this._interfaceNotConfigured),
      name: cdktf.stringToTerraform(this._name),
      outbound_addr_validation_failed: cdktf.numberToTerraform(this._outboundAddrValidationFailed),
      outbound_dest_unreachable: cdktf.numberToTerraform(this._outboundDestUnreachable),
      outbound_rev_lookup_failed: cdktf.numberToTerraform(this._outboundRevLookupFailed),
      packet_mtu_exceeded: cdktf.numberToTerraform(this._packetMtuExceeded),
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
      inbound_addr_port_validation_failed: {
        value: cdktf.numberToHclTerraform(this._inboundAddrPortValidationFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inbound_dest_unreachable: {
        value: cdktf.numberToHclTerraform(this._inboundDestUnreachable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inbound_rev_lookup_failed: {
        value: cdktf.numberToHclTerraform(this._inboundRevLookupFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_not_configured: {
        value: cdktf.numberToHclTerraform(this._interfaceNotConfigured),
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
      outbound_addr_validation_failed: {
        value: cdktf.numberToHclTerraform(this._outboundAddrValidationFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbound_dest_unreachable: {
        value: cdktf.numberToHclTerraform(this._outboundDestUnreachable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbound_rev_lookup_failed: {
        value: cdktf.numberToHclTerraform(this._outboundRevLookupFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_mtu_exceeded: {
        value: cdktf.numberToHclTerraform(this._packetMtuExceeded),
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
