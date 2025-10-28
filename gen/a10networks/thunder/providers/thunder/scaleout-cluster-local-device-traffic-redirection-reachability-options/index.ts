// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_traffic_redirection_reachability_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * ClusterId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_traffic_redirection_reachability_options#cluster_id ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_traffic_redirection_reachability_options#id ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Do not choose default route for redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_traffic_redirection_reachability_options#skip_default_route ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA#skip_default_route}
  */
  readonly skipDefaultRoute?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_traffic_redirection_reachability_options#uuid ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_traffic_redirection_reachability_options thunder_scaleout_cluster_local_device_traffic_redirection_reachability_options}
*/
export class ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_cluster_local_device_traffic_redirection_reachability_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA to import
  * @param importFromId The id of the existing ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_traffic_redirection_reachability_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_cluster_local_device_traffic_redirection_reachability_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_traffic_redirection_reachability_options thunder_scaleout_cluster_local_device_traffic_redirection_reachability_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAConfig
  */
  public constructor(scope: Construct, id: string, config: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_cluster_local_device_traffic_redirection_reachability_options',
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
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._skipDefaultRoute = config.skipDefaultRoute;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // skip_default_route - computed: false, optional: true, required: false
  private _skipDefaultRoute?: number; 
  public get skipDefaultRoute() {
    return this.getNumberAttribute('skip_default_route');
  }
  public set skipDefaultRoute(value: number) {
    this._skipDefaultRoute = value;
  }
  public resetSkipDefaultRoute() {
    this._skipDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDefaultRouteInput() {
    return this._skipDefaultRoute;
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      skip_default_route: cdktf.numberToTerraform(this._skipDefaultRoute),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      skip_default_route: {
        value: cdktf.numberToHclTerraform(this._skipDefaultRoute),
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
