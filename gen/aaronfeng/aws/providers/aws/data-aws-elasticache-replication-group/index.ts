// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/elasticache_replication_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElasticacheReplicationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/elasticache_replication_group#id DataAwsElasticacheReplicationGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/elasticache_replication_group#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}
  */
  readonly replicationGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/elasticache_replication_group aws_elasticache_replication_group}
*/
export class DataAwsElasticacheReplicationGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticache_replication_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsElasticacheReplicationGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsElasticacheReplicationGroup to import
  * @param importFromId The id of the existing DataAwsElasticacheReplicationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/elasticache_replication_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsElasticacheReplicationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elasticache_replication_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/elasticache_replication_group aws_elasticache_replication_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsElasticacheReplicationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsElasticacheReplicationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_replication_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.29.6'
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
    this._replicationGroupId = config.replicationGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_token_enabled - computed: true, optional: false, required: false
  public get authTokenEnabled() {
    return this.getBooleanAttribute('auth_token_enabled');
  }

  // automatic_failover_enabled - computed: true, optional: false, required: false
  public get automaticFailoverEnabled() {
    return this.getBooleanAttribute('automatic_failover_enabled');
  }

  // configuration_endpoint_address - computed: true, optional: false, required: false
  public get configurationEndpointAddress() {
    return this.getStringAttribute('configuration_endpoint_address');
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

  // member_clusters - computed: true, optional: false, required: false
  public get memberClusters() {
    return cdktf.Fn.tolist(this.getListAttribute('member_clusters'));
  }

  // multi_az_enabled - computed: true, optional: false, required: false
  public get multiAzEnabled() {
    return this.getBooleanAttribute('multi_az_enabled');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // number_cache_clusters - computed: true, optional: false, required: false
  public get numberCacheClusters() {
    return this.getNumberAttribute('number_cache_clusters');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // primary_endpoint_address - computed: true, optional: false, required: false
  public get primaryEndpointAddress() {
    return this.getStringAttribute('primary_endpoint_address');
  }

  // reader_endpoint_address - computed: true, optional: false, required: false
  public get readerEndpointAddress() {
    return this.getStringAttribute('reader_endpoint_address');
  }

  // replication_group_description - computed: true, optional: false, required: false
  public get replicationGroupDescription() {
    return this.getStringAttribute('replication_group_description');
  }

  // replication_group_id - computed: false, optional: false, required: true
  private _replicationGroupId?: string; 
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }
  public set replicationGroupId(value: string) {
    this._replicationGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupIdInput() {
    return this._replicationGroupId;
  }

  // snapshot_retention_limit - computed: true, optional: false, required: false
  public get snapshotRetentionLimit() {
    return this.getNumberAttribute('snapshot_retention_limit');
  }

  // snapshot_window - computed: true, optional: false, required: false
  public get snapshotWindow() {
    return this.getStringAttribute('snapshot_window');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      replication_group_id: cdktf.stringToTerraform(this._replicationGroupId),
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
      replication_group_id: {
        value: cdktf.stringToHclTerraform(this._replicationGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
