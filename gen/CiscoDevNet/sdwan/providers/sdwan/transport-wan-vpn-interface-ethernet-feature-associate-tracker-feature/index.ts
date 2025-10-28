// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/resources/transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportWanVpnInterfaceEthernetFeatureAssociateTrackerFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/resources/transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature#feature_profile_id TransportWanVpnInterfaceEthernetFeatureAssociateTrackerFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Transport Tracker Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/resources/transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature#transport_tracker_feature_id TransportWanVpnInterfaceEthernetFeatureAssociateTrackerFeature#transport_tracker_feature_id}
  */
  readonly transportTrackerFeatureId: string;
  /**
  * Transport WAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/resources/transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature#transport_wan_vpn_feature_id TransportWanVpnInterfaceEthernetFeatureAssociateTrackerFeature#transport_wan_vpn_feature_id}
  */
  readonly transportWanVpnFeatureId: string;
  /**
  * Transport WAN VPN Interface Ethernet Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/resources/transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature#transport_wan_vpn_interface_ethernet_feature_id TransportWanVpnInterfaceEthernetFeatureAssociateTrackerFeature#transport_wan_vpn_interface_ethernet_feature_id}
  */
  readonly transportWanVpnInterfaceEthernetFeatureId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/resources/transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature sdwan_transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature}
*/
export class TransportWanVpnInterfaceEthernetFeatureAssociateTrackerFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportWanVpnInterfaceEthernetFeatureAssociateTrackerFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportWanVpnInterfaceEthernetFeatureAssociateTrackerFeature to import
  * @param importFromId The id of the existing TransportWanVpnInterfaceEthernetFeatureAssociateTrackerFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/resources/transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportWanVpnInterfaceEthernetFeatureAssociateTrackerFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/resources/transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature sdwan_transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportWanVpnInterfaceEthernetFeatureAssociateTrackerFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportWanVpnInterfaceEthernetFeatureAssociateTrackerFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_wan_vpn_interface_ethernet_feature_associate_tracker_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._transportTrackerFeatureId = config.transportTrackerFeatureId;
    this._transportWanVpnFeatureId = config.transportWanVpnFeatureId;
    this._transportWanVpnInterfaceEthernetFeatureId = config.transportWanVpnInterfaceEthernetFeatureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // transport_tracker_feature_id - computed: false, optional: false, required: true
  private _transportTrackerFeatureId?: string; 
  public get transportTrackerFeatureId() {
    return this.getStringAttribute('transport_tracker_feature_id');
  }
  public set transportTrackerFeatureId(value: string) {
    this._transportTrackerFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTrackerFeatureIdInput() {
    return this._transportTrackerFeatureId;
  }

  // transport_wan_vpn_feature_id - computed: false, optional: false, required: true
  private _transportWanVpnFeatureId?: string; 
  public get transportWanVpnFeatureId() {
    return this.getStringAttribute('transport_wan_vpn_feature_id');
  }
  public set transportWanVpnFeatureId(value: string) {
    this._transportWanVpnFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportWanVpnFeatureIdInput() {
    return this._transportWanVpnFeatureId;
  }

  // transport_wan_vpn_interface_ethernet_feature_id - computed: false, optional: false, required: true
  private _transportWanVpnInterfaceEthernetFeatureId?: string; 
  public get transportWanVpnInterfaceEthernetFeatureId() {
    return this.getStringAttribute('transport_wan_vpn_interface_ethernet_feature_id');
  }
  public set transportWanVpnInterfaceEthernetFeatureId(value: string) {
    this._transportWanVpnInterfaceEthernetFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportWanVpnInterfaceEthernetFeatureIdInput() {
    return this._transportWanVpnInterfaceEthernetFeatureId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      transport_tracker_feature_id: cdktf.stringToTerraform(this._transportTrackerFeatureId),
      transport_wan_vpn_feature_id: cdktf.stringToTerraform(this._transportWanVpnFeatureId),
      transport_wan_vpn_interface_ethernet_feature_id: cdktf.stringToTerraform(this._transportWanVpnInterfaceEthernetFeatureId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_tracker_feature_id: {
        value: cdktf.stringToHclTerraform(this._transportTrackerFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_wan_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._transportWanVpnFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_wan_vpn_interface_ethernet_feature_id: {
        value: cdktf.stringToHclTerraform(this._transportWanVpnInterfaceEthernetFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
