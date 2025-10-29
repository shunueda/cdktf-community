// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_host_ipv6_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerHostIpv6HostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_host_ipv6_host#id SnmpServerHostIpv6Host#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPV6 address of SNMP trap host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_host_ipv6_host#ipv6_addr SnmpServerHostIpv6Host#ipv6_addr}
  */
  readonly ipv6Addr: string;
  /**
  * The trap host's UDP port number(default: 162)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_host_ipv6_host#udp_port SnmpServerHostIpv6Host#udp_port}
  */
  readonly udpPort?: number;
  /**
  * SNMPv3 user to send traps (User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_host_ipv6_host#user SnmpServerHostIpv6Host#user}
  */
  readonly user?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_host_ipv6_host#uuid SnmpServerHostIpv6Host#uuid}
  */
  readonly uuid?: string;
  /**
  * SNMPv1/v2c community string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_host_ipv6_host#v1_v2c_comm SnmpServerHostIpv6Host#v1_v2c_comm}
  */
  readonly v1V2CComm?: string;
  /**
  * 'v1': Use SNMPv1; 'v2c': Use SNMPv2c; 'v3': User SNMPv3;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_host_ipv6_host#version SnmpServerHostIpv6Host#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_host_ipv6_host thunder_snmp_server_host_ipv6_host}
*/
export class SnmpServerHostIpv6Host extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_host_ipv6_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerHostIpv6Host resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerHostIpv6Host to import
  * @param importFromId The id of the existing SnmpServerHostIpv6Host that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_host_ipv6_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerHostIpv6Host to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_host_ipv6_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_host_ipv6_host thunder_snmp_server_host_ipv6_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerHostIpv6HostConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpServerHostIpv6HostConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_host_ipv6_host',
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
    this._ipv6Addr = config.ipv6Addr;
    this._udpPort = config.udpPort;
    this._user = config.user;
    this._uuid = config.uuid;
    this._v1V2CComm = config.v1V2CComm;
    this._version = config.version;
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

  // ipv6_addr - computed: false, optional: false, required: true
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // udp_port - computed: false, optional: true, required: false
  private _udpPort?: number; 
  public get udpPort() {
    return this.getNumberAttribute('udp_port');
  }
  public set udpPort(value: number) {
    this._udpPort = value;
  }
  public resetUdpPort() {
    this._udpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortInput() {
    return this._udpPort;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
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

  // v1_v2c_comm - computed: false, optional: true, required: false
  private _v1V2CComm?: string; 
  public get v1V2CComm() {
    return this.getStringAttribute('v1_v2c_comm');
  }
  public set v1V2CComm(value: string) {
    this._v1V2CComm = value;
  }
  public resetV1V2CComm() {
    this._v1V2CComm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1V2CCommInput() {
    return this._v1V2CComm;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv6_addr: cdktf.stringToTerraform(this._ipv6Addr),
      udp_port: cdktf.numberToTerraform(this._udpPort),
      user: cdktf.stringToTerraform(this._user),
      uuid: cdktf.stringToTerraform(this._uuid),
      v1_v2c_comm: cdktf.stringToTerraform(this._v1V2CComm),
      version: cdktf.stringToTerraform(this._version),
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
      ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._ipv6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_port: {
        value: cdktf.numberToHclTerraform(this._udpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
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
      v1_v2c_comm: {
        value: cdktf.stringToHclTerraform(this._v1V2CComm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
