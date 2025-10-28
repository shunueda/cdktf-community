// https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZillizcloudClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/cluster#id DataZillizcloudCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/cluster zillizcloud_cluster}
*/
export class DataZillizcloudCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zillizcloud_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZillizcloudCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZillizcloudCluster to import
  * @param importFromId The id of the existing DataZillizcloudCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZillizcloudCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zillizcloud_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/data-sources/cluster zillizcloud_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZillizcloudClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataZillizcloudClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'zillizcloud_cluster',
      terraformGeneratorMetadata: {
        providerName: 'zillizcloud',
        providerVersion: '0.6.23'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // connect_address - computed: true, optional: false, required: false
  public get connectAddress() {
    return this.getStringAttribute('connect_address');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cu_size - computed: true, optional: false, required: false
  public get cuSize() {
    return this.getNumberAttribute('cu_size');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // private_link_address - computed: true, optional: false, required: false
  public get privateLinkAddress() {
    return this.getStringAttribute('private_link_address');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
