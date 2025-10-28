// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/rds_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRdsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/rds_cluster#cluster_identifier DataAwsRdsCluster#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/rds_cluster#id DataAwsRdsCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/rds_cluster#tags DataAwsRdsCluster#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/rds_cluster aws_rds_cluster}
*/
export class DataAwsRdsCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsRdsCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsRdsCluster to import
  * @param importFromId The id of the existing DataAwsRdsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/rds_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsRdsCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/data-sources/rds_cluster aws_rds_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRdsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRdsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster',
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
    this._clusterIdentifier = config.clusterIdentifier;
    this._id = config.id;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }

  // backtrack_window - computed: true, optional: false, required: false
  public get backtrackWindow() {
    return this.getNumberAttribute('backtrack_window');
  }

  // backup_retention_period - computed: true, optional: false, required: false
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // cluster_members - computed: true, optional: false, required: false
  public get clusterMembers() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_members'));
  }

  // cluster_resource_id - computed: true, optional: false, required: false
  public get clusterResourceId() {
    return this.getStringAttribute('cluster_resource_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // db_cluster_parameter_group_name - computed: true, optional: false, required: false
  public get dbClusterParameterGroupName() {
    return this.getStringAttribute('db_cluster_parameter_group_name');
  }

  // db_subnet_group_name - computed: true, optional: false, required: false
  public get dbSubnetGroupName() {
    return this.getStringAttribute('db_subnet_group_name');
  }

  // enabled_cloudwatch_logs_exports - computed: true, optional: false, required: false
  public get enabledCloudwatchLogsExports() {
    return this.getListAttribute('enabled_cloudwatch_logs_exports');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // final_snapshot_identifier - computed: true, optional: false, required: false
  public get finalSnapshotIdentifier() {
    return this.getStringAttribute('final_snapshot_identifier');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // iam_database_authentication_enabled - computed: true, optional: false, required: false
  public get iamDatabaseAuthenticationEnabled() {
    return this.getBooleanAttribute('iam_database_authentication_enabled');
  }

  // iam_roles - computed: true, optional: false, required: false
  public get iamRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('iam_roles'));
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // master_username - computed: true, optional: false, required: false
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preferred_backup_window - computed: true, optional: false, required: false
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }

  // preferred_maintenance_window - computed: true, optional: false, required: false
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }

  // reader_endpoint - computed: true, optional: false, required: false
  public get readerEndpoint() {
    return this.getStringAttribute('reader_endpoint');
  }

  // replication_source_identifier - computed: true, optional: false, required: false
  public get replicationSourceIdentifier() {
    return this.getStringAttribute('replication_source_identifier');
  }

  // storage_encrypted - computed: true, optional: false, required: false
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_security_group_ids - computed: true, optional: false, required: false
  public get vpcSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_security_group_ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_identifier: {
        value: cdktf.stringToHclTerraform(this._clusterIdentifier),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
