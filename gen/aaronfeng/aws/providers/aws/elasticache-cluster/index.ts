// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticacheClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#apply_immediately ElasticacheCluster#apply_immediately}
  */
  readonly applyImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#availability_zone ElasticacheCluster#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#az_mode ElasticacheCluster#az_mode}
  */
  readonly azMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#cluster_id ElasticacheCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#engine ElasticacheCluster#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#engine_version ElasticacheCluster#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}
  */
  readonly finalSnapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#id ElasticacheCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#maintenance_window ElasticacheCluster#maintenance_window}
  */
  readonly maintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#node_type ElasticacheCluster#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#notification_topic_arn ElasticacheCluster#notification_topic_arn}
  */
  readonly notificationTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#num_cache_nodes ElasticacheCluster#num_cache_nodes}
  */
  readonly numCacheNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#parameter_group_name ElasticacheCluster#parameter_group_name}
  */
  readonly parameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#port ElasticacheCluster#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}
  */
  readonly preferredAvailabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#replication_group_id ElasticacheCluster#replication_group_id}
  */
  readonly replicationGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#security_group_ids ElasticacheCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#security_group_names ElasticacheCluster#security_group_names}
  */
  readonly securityGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#snapshot_arns ElasticacheCluster#snapshot_arns}
  */
  readonly snapshotArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#snapshot_name ElasticacheCluster#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}
  */
  readonly snapshotRetentionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#snapshot_window ElasticacheCluster#snapshot_window}
  */
  readonly snapshotWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#subnet_group_name ElasticacheCluster#subnet_group_name}
  */
  readonly subnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#tags ElasticacheCluster#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface ElasticacheClusterCacheNodes {
}

export function elasticacheClusterCacheNodesToTerraform(struct?: ElasticacheClusterCacheNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function elasticacheClusterCacheNodesToHclTerraform(struct?: ElasticacheClusterCacheNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ElasticacheClusterCacheNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ElasticacheClusterCacheNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticacheClusterCacheNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class ElasticacheClusterCacheNodesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ElasticacheClusterCacheNodesOutputReference {
    return new ElasticacheClusterCacheNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster aws_elasticache_cluster}
*/
export class ElasticacheCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticache_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticacheCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticacheCluster to import
  * @param importFromId The id of the existing ElasticacheCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticacheCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elasticache_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/elasticache_cluster aws_elasticache_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticacheClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticacheClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_cluster',
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
    this._applyImmediately = config.applyImmediately;
    this._availabilityZone = config.availabilityZone;
    this._azMode = config.azMode;
    this._clusterId = config.clusterId;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._id = config.id;
    this._maintenanceWindow = config.maintenanceWindow;
    this._nodeType = config.nodeType;
    this._notificationTopicArn = config.notificationTopicArn;
    this._numCacheNodes = config.numCacheNodes;
    this._parameterGroupName = config.parameterGroupName;
    this._port = config.port;
    this._preferredAvailabilityZones = config.preferredAvailabilityZones;
    this._replicationGroupId = config.replicationGroupId;
    this._securityGroupIds = config.securityGroupIds;
    this._securityGroupNames = config.securityGroupNames;
    this._snapshotArns = config.snapshotArns;
    this._snapshotName = config.snapshotName;
    this._snapshotRetentionLimit = config.snapshotRetentionLimit;
    this._snapshotWindow = config.snapshotWindow;
    this._subnetGroupName = config.subnetGroupName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_immediately - computed: true, optional: true, required: false
  private _applyImmediately?: boolean | cdktf.IResolvable; 
  public get applyImmediately() {
    return this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean | cdktf.IResolvable) {
    this._applyImmediately = value;
  }
  public resetApplyImmediately() {
    this._applyImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyImmediatelyInput() {
    return this._applyImmediately;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // az_mode - computed: true, optional: true, required: false
  private _azMode?: string; 
  public get azMode() {
    return this.getStringAttribute('az_mode');
  }
  public set azMode(value: string) {
    this._azMode = value;
  }
  public resetAzMode() {
    this._azMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azModeInput() {
    return this._azMode;
  }

  // cache_nodes - computed: true, optional: false, required: false
  private _cacheNodes = new ElasticacheClusterCacheNodesList(this, "cache_nodes", false);
  public get cacheNodes() {
    return this._cacheNodes;
  }

  // cluster_address - computed: true, optional: false, required: false
  public get clusterAddress() {
    return this.getStringAttribute('cluster_address');
  }

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

  // configuration_endpoint - computed: true, optional: false, required: false
  public get configurationEndpoint() {
    return this.getStringAttribute('configuration_endpoint');
  }

  // engine - computed: true, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // final_snapshot_identifier - computed: false, optional: true, required: false
  private _finalSnapshotIdentifier?: string; 
  public get finalSnapshotIdentifier() {
    return this.getStringAttribute('final_snapshot_identifier');
  }
  public set finalSnapshotIdentifier(value: string) {
    this._finalSnapshotIdentifier = value;
  }
  public resetFinalSnapshotIdentifier() {
    this._finalSnapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalSnapshotIdentifierInput() {
    return this._finalSnapshotIdentifier;
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

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow?: string; 
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string) {
    this._maintenanceWindow = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // notification_topic_arn - computed: false, optional: true, required: false
  private _notificationTopicArn?: string; 
  public get notificationTopicArn() {
    return this.getStringAttribute('notification_topic_arn');
  }
  public set notificationTopicArn(value: string) {
    this._notificationTopicArn = value;
  }
  public resetNotificationTopicArn() {
    this._notificationTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicArnInput() {
    return this._notificationTopicArn;
  }

  // num_cache_nodes - computed: true, optional: true, required: false
  private _numCacheNodes?: number; 
  public get numCacheNodes() {
    return this.getNumberAttribute('num_cache_nodes');
  }
  public set numCacheNodes(value: number) {
    this._numCacheNodes = value;
  }
  public resetNumCacheNodes() {
    this._numCacheNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCacheNodesInput() {
    return this._numCacheNodes;
  }

  // parameter_group_name - computed: true, optional: true, required: false
  private _parameterGroupName?: string; 
  public get parameterGroupName() {
    return this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string) {
    this._parameterGroupName = value;
  }
  public resetParameterGroupName() {
    this._parameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupNameInput() {
    return this._parameterGroupName;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // preferred_availability_zones - computed: false, optional: true, required: false
  private _preferredAvailabilityZones?: string[]; 
  public get preferredAvailabilityZones() {
    return this.getListAttribute('preferred_availability_zones');
  }
  public set preferredAvailabilityZones(value: string[]) {
    this._preferredAvailabilityZones = value;
  }
  public resetPreferredAvailabilityZones() {
    this._preferredAvailabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAvailabilityZonesInput() {
    return this._preferredAvailabilityZones;
  }

  // replication_group_id - computed: true, optional: true, required: false
  private _replicationGroupId?: string; 
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }
  public set replicationGroupId(value: string) {
    this._replicationGroupId = value;
  }
  public resetReplicationGroupId() {
    this._replicationGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupIdInput() {
    return this._replicationGroupId;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // security_group_names - computed: true, optional: true, required: false
  private _securityGroupNames?: string[]; 
  public get securityGroupNames() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_names'));
  }
  public set securityGroupNames(value: string[]) {
    this._securityGroupNames = value;
  }
  public resetSecurityGroupNames() {
    this._securityGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNamesInput() {
    return this._securityGroupNames;
  }

  // snapshot_arns - computed: false, optional: true, required: false
  private _snapshotArns?: string[]; 
  public get snapshotArns() {
    return this.getListAttribute('snapshot_arns');
  }
  public set snapshotArns(value: string[]) {
    this._snapshotArns = value;
  }
  public resetSnapshotArns() {
    this._snapshotArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotArnsInput() {
    return this._snapshotArns;
  }

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // snapshot_retention_limit - computed: false, optional: true, required: false
  private _snapshotRetentionLimit?: number; 
  public get snapshotRetentionLimit() {
    return this.getNumberAttribute('snapshot_retention_limit');
  }
  public set snapshotRetentionLimit(value: number) {
    this._snapshotRetentionLimit = value;
  }
  public resetSnapshotRetentionLimit() {
    this._snapshotRetentionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionLimitInput() {
    return this._snapshotRetentionLimit;
  }

  // snapshot_window - computed: true, optional: true, required: false
  private _snapshotWindow?: string; 
  public get snapshotWindow() {
    return this.getStringAttribute('snapshot_window');
  }
  public set snapshotWindow(value: string) {
    this._snapshotWindow = value;
  }
  public resetSnapshotWindow() {
    this._snapshotWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotWindowInput() {
    return this._snapshotWindow;
  }

  // subnet_group_name - computed: true, optional: true, required: false
  private _subnetGroupName?: string; 
  public get subnetGroupName() {
    return this.getStringAttribute('subnet_group_name');
  }
  public set subnetGroupName(value: string) {
    this._subnetGroupName = value;
  }
  public resetSubnetGroupName() {
    this._subnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetGroupNameInput() {
    return this._subnetGroupName;
  }

  // tags - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      az_mode: cdktf.stringToTerraform(this._azMode),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
      id: cdktf.stringToTerraform(this._id),
      maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
      node_type: cdktf.stringToTerraform(this._nodeType),
      notification_topic_arn: cdktf.stringToTerraform(this._notificationTopicArn),
      num_cache_nodes: cdktf.numberToTerraform(this._numCacheNodes),
      parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
      port: cdktf.numberToTerraform(this._port),
      preferred_availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredAvailabilityZones),
      replication_group_id: cdktf.stringToTerraform(this._replicationGroupId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      security_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupNames),
      snapshot_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snapshotArns),
      snapshot_name: cdktf.stringToTerraform(this._snapshotName),
      snapshot_retention_limit: cdktf.numberToTerraform(this._snapshotRetentionLimit),
      snapshot_window: cdktf.stringToTerraform(this._snapshotWindow),
      subnet_group_name: cdktf.stringToTerraform(this._subnetGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_immediately: {
        value: cdktf.booleanToHclTerraform(this._applyImmediately),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      az_mode: {
        value: cdktf.stringToHclTerraform(this._azMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      final_snapshot_identifier: {
        value: cdktf.stringToHclTerraform(this._finalSnapshotIdentifier),
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
      maintenance_window: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_topic_arn: {
        value: cdktf.stringToHclTerraform(this._notificationTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_cache_nodes: {
        value: cdktf.numberToHclTerraform(this._numCacheNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parameter_group_name: {
        value: cdktf.stringToHclTerraform(this._parameterGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferred_availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredAvailabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      replication_group_id: {
        value: cdktf.stringToHclTerraform(this._replicationGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      snapshot_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snapshotArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      snapshot_name: {
        value: cdktf.stringToHclTerraform(this._snapshotName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_retention_limit: {
        value: cdktf.numberToHclTerraform(this._snapshotRetentionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_window: {
        value: cdktf.stringToHclTerraform(this._snapshotWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_group_name: {
        value: cdktf.stringToHclTerraform(this._subnetGroupName),
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
