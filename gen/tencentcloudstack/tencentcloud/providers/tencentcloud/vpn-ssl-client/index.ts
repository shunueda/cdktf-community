// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/vpn_ssl_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnSslClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/vpn_ssl_client#id VpnSslClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of ssl vpn client to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/vpn_ssl_client#ssl_vpn_client_name VpnSslClient#ssl_vpn_client_name}
  */
  readonly sslVpnClientName: string;
  /**
  * VPN ssl server id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/vpn_ssl_client#ssl_vpn_server_id VpnSslClient#ssl_vpn_server_id}
  */
  readonly sslVpnServerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/vpn_ssl_client tencentcloud_vpn_ssl_client}
*/
export class VpnSslClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpn_ssl_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnSslClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnSslClient to import
  * @param importFromId The id of the existing VpnSslClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/vpn_ssl_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnSslClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpn_ssl_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/vpn_ssl_client tencentcloud_vpn_ssl_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnSslClientConfig
  */
  public constructor(scope: Construct, id: string, config: VpnSslClientConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpn_ssl_client',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.32'
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
    this._sslVpnClientName = config.sslVpnClientName;
    this._sslVpnServerId = config.sslVpnServerId;
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

  // ssl_vpn_client_name - computed: false, optional: false, required: true
  private _sslVpnClientName?: string; 
  public get sslVpnClientName() {
    return this.getStringAttribute('ssl_vpn_client_name');
  }
  public set sslVpnClientName(value: string) {
    this._sslVpnClientName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVpnClientNameInput() {
    return this._sslVpnClientName;
  }

  // ssl_vpn_server_id - computed: false, optional: false, required: true
  private _sslVpnServerId?: string; 
  public get sslVpnServerId() {
    return this.getStringAttribute('ssl_vpn_server_id');
  }
  public set sslVpnServerId(value: string) {
    this._sslVpnServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVpnServerIdInput() {
    return this._sslVpnServerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ssl_vpn_client_name: cdktf.stringToTerraform(this._sslVpnClientName),
      ssl_vpn_server_id: cdktf.stringToTerraform(this._sslVpnServerId),
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
      ssl_vpn_client_name: {
        value: cdktf.stringToHclTerraform(this._sslVpnClientName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_vpn_server_id: {
        value: cdktf.stringToHclTerraform(this._sslVpnServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
