// https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/lbaas_network_healthcheck
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMgcLbaasNetworkHealthcheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Health Check ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/lbaas_network_healthcheck#id DataMgcLbaasNetworkHealthcheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The Network Load Balancer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/lbaas_network_healthcheck#lb_id DataMgcLbaasNetworkHealthcheck#lb_id}
  */
  readonly lbId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/lbaas_network_healthcheck mgc_lbaas_network_healthcheck}
*/
export class DataMgcLbaasNetworkHealthcheck extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_lbaas_network_healthcheck";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMgcLbaasNetworkHealthcheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMgcLbaasNetworkHealthcheck to import
  * @param importFromId The id of the existing DataMgcLbaasNetworkHealthcheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/lbaas_network_healthcheck#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMgcLbaasNetworkHealthcheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_lbaas_network_healthcheck", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/lbaas_network_healthcheck mgc_lbaas_network_healthcheck} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMgcLbaasNetworkHealthcheckConfig
  */
  public constructor(scope: Construct, id: string, config: DataMgcLbaasNetworkHealthcheckConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_lbaas_network_healthcheck',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.39.0'
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
    this._lbId = config.lbId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // healthy_status_code - computed: true, optional: false, required: false
  public get healthyStatusCode() {
    return this.getNumberAttribute('healthy_status_code');
  }

  // healthy_threshold_count - computed: true, optional: false, required: false
  public get healthyThresholdCount() {
    return this.getNumberAttribute('healthy_threshold_count');
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

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // interval_seconds - computed: true, optional: false, required: false
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }

  // lb_id - computed: false, optional: false, required: true
  private _lbId?: string; 
  public get lbId() {
    return this.getStringAttribute('lb_id');
  }
  public set lbId(value: string) {
    this._lbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbIdInput() {
    return this._lbId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // unhealthy_threshold_count - computed: true, optional: false, required: false
  public get unhealthyThresholdCount() {
    return this.getNumberAttribute('unhealthy_threshold_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lb_id: cdktf.stringToTerraform(this._lbId),
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
      lb_id: {
        value: cdktf.stringToHclTerraform(this._lbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
