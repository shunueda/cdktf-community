// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_l2vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeBgpAddressFamilyL2VpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_l2vpn#af_name DataIosxeBgpAddressFamilyL2Vpn#af_name}
  */
  readonly afName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_l2vpn#asn DataIosxeBgpAddressFamilyL2Vpn#asn}
  */
  readonly asn: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_l2vpn#device DataIosxeBgpAddressFamilyL2Vpn#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_l2vpn iosxe_bgp_address_family_l2vpn}
*/
export class DataIosxeBgpAddressFamilyL2Vpn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_address_family_l2vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeBgpAddressFamilyL2Vpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeBgpAddressFamilyL2Vpn to import
  * @param importFromId The id of the existing DataIosxeBgpAddressFamilyL2Vpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_l2vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeBgpAddressFamilyL2Vpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_address_family_l2vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/bgp_address_family_l2vpn iosxe_bgp_address_family_l2vpn} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeBgpAddressFamilyL2VpnConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeBgpAddressFamilyL2VpnConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_address_family_l2vpn',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._afName = config.afName;
    this._asn = config.asn;
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // af_name - computed: false, optional: false, required: true
  private _afName?: string; 
  public get afName() {
    return this.getStringAttribute('af_name');
  }
  public set afName(value: string) {
    this._afName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afNameInput() {
    return this._afName;
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      af_name: cdktf.stringToTerraform(this._afName),
      asn: cdktf.stringToTerraform(this._asn),
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      af_name: {
        value: cdktf.stringToHclTerraform(this._afName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
