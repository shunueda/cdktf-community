// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneIpProtoProtoNumberManualModeConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'configuration': Manual-mode configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode#config DdosDstZoneIpProtoProtoNumberManualMode#config}
  */
  readonly config: string;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode#glid_action DdosDstZoneIpProtoProtoNumberManualMode#glid_action}
  */
  readonly glidAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode#id DdosDstZoneIpProtoProtoNumberManualMode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ProtocolNum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode#protocol_num DdosDstZoneIpProtoProtoNumberManualMode#protocol_num}
  */
  readonly protocolNum: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode#src_default_glid DdosDstZoneIpProtoProtoNumberManualMode#src_default_glid}
  */
  readonly srcDefaultGlid?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode#user_tag DdosDstZoneIpProtoProtoNumberManualMode#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode#uuid DdosDstZoneIpProtoProtoNumberManualMode#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode#zone_name DdosDstZoneIpProtoProtoNumberManualMode#zone_name}
  */
  readonly zoneName: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode#zone_template DdosDstZoneIpProtoProtoNumberManualMode#zone_template}
  */
  readonly zoneTemplate?: DdosDstZoneIpProtoProtoNumberManualModeZoneTemplate;
}
export interface DdosDstZoneIpProtoProtoNumberManualModeZoneTemplate {
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode#encap DdosDstZoneIpProtoProtoNumberManualMode#encap}
  */
  readonly encap?: string;
  /**
  * DDOS ip-proto template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode#ip_proto DdosDstZoneIpProtoProtoNumberManualMode#ip_proto}
  */
  readonly ipProto?: string;
}

export function ddosDstZoneIpProtoProtoNumberManualModeZoneTemplateToTerraform(struct?: DdosDstZoneIpProtoProtoNumberManualModeZoneTemplateOutputReference | DdosDstZoneIpProtoProtoNumberManualModeZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap: cdktf.stringToTerraform(struct!.encap),
    ip_proto: cdktf.stringToTerraform(struct!.ipProto),
  }
}


export function ddosDstZoneIpProtoProtoNumberManualModeZoneTemplateToHclTerraform(struct?: DdosDstZoneIpProtoProtoNumberManualModeZoneTemplateOutputReference | DdosDstZoneIpProtoProtoNumberManualModeZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_proto: {
      value: cdktf.stringToHclTerraform(struct!.ipProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneIpProtoProtoNumberManualModeZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneIpProtoProtoNumberManualModeZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._ipProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProto = this._ipProto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneIpProtoProtoNumberManualModeZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encap = undefined;
      this._ipProto = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encap = value.encap;
      this._ipProto = value.ipProto;
    }
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // ip_proto - computed: false, optional: true, required: false
  private _ipProto?: string; 
  public get ipProto() {
    return this.getStringAttribute('ip_proto');
  }
  public set ipProto(value: string) {
    this._ipProto = value;
  }
  public resetIpProto() {
    this._ipProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoInput() {
    return this._ipProto;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode thunder_ddos_dst_zone_ip_proto_proto_number_manual_mode}
*/
export class DdosDstZoneIpProtoProtoNumberManualMode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_ip_proto_proto_number_manual_mode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneIpProtoProtoNumberManualMode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneIpProtoProtoNumberManualMode to import
  * @param importFromId The id of the existing DdosDstZoneIpProtoProtoNumberManualMode that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneIpProtoProtoNumberManualMode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_ip_proto_proto_number_manual_mode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_ip_proto_proto_number_manual_mode thunder_ddos_dst_zone_ip_proto_proto_number_manual_mode} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneIpProtoProtoNumberManualModeConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneIpProtoProtoNumberManualModeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_ip_proto_proto_number_manual_mode',
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
    this._config = config.config;
    this._glidAction = config.glidAction;
    this._id = config.id;
    this._protocolNum = config.protocolNum;
    this._srcDefaultGlid = config.srcDefaultGlid;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
    this._zoneTemplate.internalValue = config.zoneTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
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

  // protocol_num - computed: false, optional: false, required: true
  private _protocolNum?: string; 
  public get protocolNum() {
    return this.getStringAttribute('protocol_num');
  }
  public set protocolNum(value: string) {
    this._protocolNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumInput() {
    return this._protocolNum;
  }

  // src_default_glid - computed: false, optional: true, required: false
  private _srcDefaultGlid?: string; 
  public get srcDefaultGlid() {
    return this.getStringAttribute('src_default_glid');
  }
  public set srcDefaultGlid(value: string) {
    this._srcDefaultGlid = value;
  }
  public resetSrcDefaultGlid() {
    this._srcDefaultGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDefaultGlidInput() {
    return this._srcDefaultGlid;
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

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZoneIpProtoProtoNumberManualModeZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZoneIpProtoProtoNumberManualModeZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      glid_action: cdktf.stringToTerraform(this._glidAction),
      id: cdktf.stringToTerraform(this._id),
      protocol_num: cdktf.stringToTerraform(this._protocolNum),
      src_default_glid: cdktf.stringToTerraform(this._srcDefaultGlid),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      zone_template: ddosDstZoneIpProtoProtoNumberManualModeZoneTemplateToTerraform(this._zoneTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glid_action: {
        value: cdktf.stringToHclTerraform(this._glidAction),
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
      protocol_num: {
        value: cdktf.stringToHclTerraform(this._protocolNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_default_glid: {
        value: cdktf.stringToHclTerraform(this._srcDefaultGlid),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_template: {
        value: ddosDstZoneIpProtoProtoNumberManualModeZoneTemplateToHclTerraform(this._zoneTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneIpProtoProtoNumberManualModeZoneTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
