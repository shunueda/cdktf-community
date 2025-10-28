// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/dhcp_relay_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosDhcpRelayInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/dhcp_relay_interface#device DataNxosDhcpRelayInterface#device}
  */
  readonly device?: string;
  /**
  * Must match first field in the output of `show intf brief`. Example: `eth1/1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/dhcp_relay_interface#interface_id DataNxosDhcpRelayInterface#interface_id}
  */
  readonly interfaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/dhcp_relay_interface nxos_dhcp_relay_interface}
*/
export class DataNxosDhcpRelayInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_dhcp_relay_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosDhcpRelayInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosDhcpRelayInterface to import
  * @param importFromId The id of the existing DataNxosDhcpRelayInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/dhcp_relay_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosDhcpRelayInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_dhcp_relay_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/dhcp_relay_interface nxos_dhcp_relay_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosDhcpRelayInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNxosDhcpRelayInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_dhcp_relay_interface',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._interfaceId = config.interfaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
