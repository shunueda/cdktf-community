// https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/myjfrog_ip_allowlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MyjfrogIpAllowlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of IPs for the JPD allowlist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/myjfrog_ip_allowlist#ips MyjfrogIpAllowlist#ips}
  */
  readonly ips: string[];
  /**
  * Name of the server. If your JFrog URL is `myserver.jfrog.io`, the `server_name` is `myserver`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/myjfrog_ip_allowlist#server_name MyjfrogIpAllowlist#server_name}
  */
  readonly serverName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/myjfrog_ip_allowlist platform_myjfrog_ip_allowlist}
*/
export class MyjfrogIpAllowlist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "platform_myjfrog_ip_allowlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MyjfrogIpAllowlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MyjfrogIpAllowlist to import
  * @param importFromId The id of the existing MyjfrogIpAllowlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/myjfrog_ip_allowlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MyjfrogIpAllowlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "platform_myjfrog_ip_allowlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/myjfrog_ip_allowlist platform_myjfrog_ip_allowlist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MyjfrogIpAllowlistConfig
  */
  public constructor(scope: Construct, id: string, config: MyjfrogIpAllowlistConfig) {
    super(scope, id, {
      terraformResourceType: 'platform_myjfrog_ip_allowlist',
      terraformGeneratorMetadata: {
        providerName: 'platform',
        providerVersion: '2.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ips = config.ips;
    this._serverName = config.serverName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ips - computed: false, optional: false, required: true
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ips),
      server_name: cdktf.stringToTerraform(this._serverName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ips),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
