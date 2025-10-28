// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/service_lan_vpn_feature_associate_routing_ospfv3_ipv4_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanServiceLanVpnFeatureAssociateRoutingOspfv3Ipv4FeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/service_lan_vpn_feature_associate_routing_ospfv3_ipv4_feature#feature_profile_id DataSdwanServiceLanVpnFeatureAssociateRoutingOspfv3Ipv4Feature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/service_lan_vpn_feature_associate_routing_ospfv3_ipv4_feature#id DataSdwanServiceLanVpnFeatureAssociateRoutingOspfv3Ipv4Feature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Service LAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/service_lan_vpn_feature_associate_routing_ospfv3_ipv4_feature#service_lan_vpn_feature_id DataSdwanServiceLanVpnFeatureAssociateRoutingOspfv3Ipv4Feature#service_lan_vpn_feature_id}
  */
  readonly serviceLanVpnFeatureId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/service_lan_vpn_feature_associate_routing_ospfv3_ipv4_feature sdwan_service_lan_vpn_feature_associate_routing_ospfv3_ipv4_feature}
*/
export class DataSdwanServiceLanVpnFeatureAssociateRoutingOspfv3Ipv4Feature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_lan_vpn_feature_associate_routing_ospfv3_ipv4_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanServiceLanVpnFeatureAssociateRoutingOspfv3Ipv4Feature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanServiceLanVpnFeatureAssociateRoutingOspfv3Ipv4Feature to import
  * @param importFromId The id of the existing DataSdwanServiceLanVpnFeatureAssociateRoutingOspfv3Ipv4Feature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/service_lan_vpn_feature_associate_routing_ospfv3_ipv4_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanServiceLanVpnFeatureAssociateRoutingOspfv3Ipv4Feature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_lan_vpn_feature_associate_routing_ospfv3_ipv4_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/service_lan_vpn_feature_associate_routing_ospfv3_ipv4_feature sdwan_service_lan_vpn_feature_associate_routing_ospfv3_ipv4_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanServiceLanVpnFeatureAssociateRoutingOspfv3Ipv4FeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanServiceLanVpnFeatureAssociateRoutingOspfv3Ipv4FeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_lan_vpn_feature_associate_routing_ospfv3_ipv4_feature',
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
    this._id = config.id;
    this._serviceLanVpnFeatureId = config.serviceLanVpnFeatureId;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // service_lan_vpn_feature_id - computed: false, optional: false, required: true
  private _serviceLanVpnFeatureId?: string; 
  public get serviceLanVpnFeatureId() {
    return this.getStringAttribute('service_lan_vpn_feature_id');
  }
  public set serviceLanVpnFeatureId(value: string) {
    this._serviceLanVpnFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLanVpnFeatureIdInput() {
    return this._serviceLanVpnFeatureId;
  }

  // service_routing_ospfv3_ipv4_feature_id - computed: true, optional: false, required: false
  public get serviceRoutingOspfv3Ipv4FeatureId() {
    return this.getStringAttribute('service_routing_ospfv3_ipv4_feature_id');
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
      id: cdktf.stringToTerraform(this._id),
      service_lan_vpn_feature_id: cdktf.stringToTerraform(this._serviceLanVpnFeatureId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_lan_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._serviceLanVpnFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
