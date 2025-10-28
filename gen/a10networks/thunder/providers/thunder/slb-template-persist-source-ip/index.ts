// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplatePersistSourceIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Do not observe connection rate rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#dont_honor_conn_rules SlbTemplatePersistSourceIp#dont_honor_conn_rules}
  */
  readonly dontHonorConnRules?: number;
  /**
  * Enforce to use high priority node if available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#enforce_higher_priority SlbTemplatePersistSourceIp#enforce_higher_priority}
  */
  readonly enforceHigherPriority?: number;
  /**
  * Use hash value of source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#hash_persist SlbTemplatePersistSourceIp#hash_persist}
  */
  readonly hashPersist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#id SlbTemplatePersistSourceIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include destination IP on the persist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#incl_dst_ip SlbTemplatePersistSourceIp#incl_dst_ip}
  */
  readonly inclDstIp?: number;
  /**
  * Include source port on the persist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#incl_sport SlbTemplatePersistSourceIp#incl_sport}
  */
  readonly inclSport?: number;
  /**
  * Persistence type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#match_type SlbTemplatePersistSourceIp#match_type}
  */
  readonly matchType?: number;
  /**
  * Source IP persistence template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#name SlbTemplatePersistSourceIp#name}
  */
  readonly name: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#netmask SlbTemplatePersistSourceIp#netmask}
  */
  readonly netmask?: string;
  /**
  * IPV6 subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#netmask6 SlbTemplatePersistSourceIp#netmask6}
  */
  readonly netmask6?: number;
  /**
  * Primary port to create the persist session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#primary_port SlbTemplatePersistSourceIp#primary_port}
  */
  readonly primaryPort?: number;
  /**
  * Persist with SCAN of all members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#scan_all_members SlbTemplatePersistSourceIp#scan_all_members}
  */
  readonly scanAllMembers?: number;
  /**
  * Persist to the same server, default is port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#server SlbTemplatePersistSourceIp#server}
  */
  readonly server?: number;
  /**
  * Persist within the same service group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#service_group SlbTemplatePersistSourceIp#service_group}
  */
  readonly serviceGroup?: number;
  /**
  * Persistence timeout (in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#timeout SlbTemplatePersistSourceIp#timeout}
  */
  readonly timeout?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#user_tag SlbTemplatePersistSourceIp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#uuid SlbTemplatePersistSourceIp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip thunder_slb_template_persist_source_ip}
*/
export class SlbTemplatePersistSourceIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_persist_source_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplatePersistSourceIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplatePersistSourceIp to import
  * @param importFromId The id of the existing SlbTemplatePersistSourceIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplatePersistSourceIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_persist_source_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_persist_source_ip thunder_slb_template_persist_source_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplatePersistSourceIpConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplatePersistSourceIpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_persist_source_ip',
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
    this._dontHonorConnRules = config.dontHonorConnRules;
    this._enforceHigherPriority = config.enforceHigherPriority;
    this._hashPersist = config.hashPersist;
    this._id = config.id;
    this._inclDstIp = config.inclDstIp;
    this._inclSport = config.inclSport;
    this._matchType = config.matchType;
    this._name = config.name;
    this._netmask = config.netmask;
    this._netmask6 = config.netmask6;
    this._primaryPort = config.primaryPort;
    this._scanAllMembers = config.scanAllMembers;
    this._server = config.server;
    this._serviceGroup = config.serviceGroup;
    this._timeout = config.timeout;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dont_honor_conn_rules - computed: false, optional: true, required: false
  private _dontHonorConnRules?: number; 
  public get dontHonorConnRules() {
    return this.getNumberAttribute('dont_honor_conn_rules');
  }
  public set dontHonorConnRules(value: number) {
    this._dontHonorConnRules = value;
  }
  public resetDontHonorConnRules() {
    this._dontHonorConnRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontHonorConnRulesInput() {
    return this._dontHonorConnRules;
  }

  // enforce_higher_priority - computed: false, optional: true, required: false
  private _enforceHigherPriority?: number; 
  public get enforceHigherPriority() {
    return this.getNumberAttribute('enforce_higher_priority');
  }
  public set enforceHigherPriority(value: number) {
    this._enforceHigherPriority = value;
  }
  public resetEnforceHigherPriority() {
    this._enforceHigherPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceHigherPriorityInput() {
    return this._enforceHigherPriority;
  }

  // hash_persist - computed: false, optional: true, required: false
  private _hashPersist?: number; 
  public get hashPersist() {
    return this.getNumberAttribute('hash_persist');
  }
  public set hashPersist(value: number) {
    this._hashPersist = value;
  }
  public resetHashPersist() {
    this._hashPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashPersistInput() {
    return this._hashPersist;
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

  // incl_dst_ip - computed: false, optional: true, required: false
  private _inclDstIp?: number; 
  public get inclDstIp() {
    return this.getNumberAttribute('incl_dst_ip');
  }
  public set inclDstIp(value: number) {
    this._inclDstIp = value;
  }
  public resetInclDstIp() {
    this._inclDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclDstIpInput() {
    return this._inclDstIp;
  }

  // incl_sport - computed: false, optional: true, required: false
  private _inclSport?: number; 
  public get inclSport() {
    return this.getNumberAttribute('incl_sport');
  }
  public set inclSport(value: number) {
    this._inclSport = value;
  }
  public resetInclSport() {
    this._inclSport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclSportInput() {
    return this._inclSport;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: number; 
  public get matchType() {
    return this.getNumberAttribute('match_type');
  }
  public set matchType(value: number) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // netmask6 - computed: false, optional: true, required: false
  private _netmask6?: number; 
  public get netmask6() {
    return this.getNumberAttribute('netmask6');
  }
  public set netmask6(value: number) {
    this._netmask6 = value;
  }
  public resetNetmask6() {
    this._netmask6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmask6Input() {
    return this._netmask6;
  }

  // primary_port - computed: false, optional: true, required: false
  private _primaryPort?: number; 
  public get primaryPort() {
    return this.getNumberAttribute('primary_port');
  }
  public set primaryPort(value: number) {
    this._primaryPort = value;
  }
  public resetPrimaryPort() {
    this._primaryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPortInput() {
    return this._primaryPort;
  }

  // scan_all_members - computed: false, optional: true, required: false
  private _scanAllMembers?: number; 
  public get scanAllMembers() {
    return this.getNumberAttribute('scan_all_members');
  }
  public set scanAllMembers(value: number) {
    this._scanAllMembers = value;
  }
  public resetScanAllMembers() {
    this._scanAllMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanAllMembersInput() {
    return this._scanAllMembers;
  }

  // server - computed: false, optional: true, required: false
  private _server?: number; 
  public get server() {
    return this.getNumberAttribute('server');
  }
  public set server(value: number) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: number; 
  public get serviceGroup() {
    return this.getNumberAttribute('service_group');
  }
  public set serviceGroup(value: number) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dont_honor_conn_rules: cdktf.numberToTerraform(this._dontHonorConnRules),
      enforce_higher_priority: cdktf.numberToTerraform(this._enforceHigherPriority),
      hash_persist: cdktf.numberToTerraform(this._hashPersist),
      id: cdktf.stringToTerraform(this._id),
      incl_dst_ip: cdktf.numberToTerraform(this._inclDstIp),
      incl_sport: cdktf.numberToTerraform(this._inclSport),
      match_type: cdktf.numberToTerraform(this._matchType),
      name: cdktf.stringToTerraform(this._name),
      netmask: cdktf.stringToTerraform(this._netmask),
      netmask6: cdktf.numberToTerraform(this._netmask6),
      primary_port: cdktf.numberToTerraform(this._primaryPort),
      scan_all_members: cdktf.numberToTerraform(this._scanAllMembers),
      server: cdktf.numberToTerraform(this._server),
      service_group: cdktf.numberToTerraform(this._serviceGroup),
      timeout: cdktf.numberToTerraform(this._timeout),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dont_honor_conn_rules: {
        value: cdktf.numberToHclTerraform(this._dontHonorConnRules),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enforce_higher_priority: {
        value: cdktf.numberToHclTerraform(this._enforceHigherPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hash_persist: {
        value: cdktf.numberToHclTerraform(this._hashPersist),
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
      incl_dst_ip: {
        value: cdktf.numberToHclTerraform(this._inclDstIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      incl_sport: {
        value: cdktf.numberToHclTerraform(this._inclSport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_type: {
        value: cdktf.numberToHclTerraform(this._matchType),
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
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask6: {
        value: cdktf.numberToHclTerraform(this._netmask6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_port: {
        value: cdktf.numberToHclTerraform(this._primaryPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_all_members: {
        value: cdktf.numberToHclTerraform(this._scanAllMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.numberToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group: {
        value: cdktf.numberToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
