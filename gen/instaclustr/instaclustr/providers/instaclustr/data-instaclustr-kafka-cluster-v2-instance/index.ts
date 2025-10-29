// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrKafkaClusterV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allows topics to be deleted via the kafka-topics tool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#allow_delete_topics DataInstaclustrKafkaClusterV2Instance#allow_delete_topics}
  */
  readonly allowDeleteTopics?: boolean | cdktf.IResolvable;
  /**
  * Allows topics to be auto created by brokers when messages are published to a non-existent topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#auto_create_topics DataInstaclustrKafkaClusterV2Instance#auto_create_topics}
  */
  readonly autoCreateTopics?: boolean | cdktf.IResolvable;
  /**
  * Provision this cluster for [Bundled Use only](https://www.instaclustr.com/support/documentation/cadence/getting-started-with-cadence/bundled-use-only-cluster-deployments/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#bundled_use_only DataInstaclustrKafkaClusterV2Instance#bundled_use_only}
  */
  readonly bundledUseOnly?: boolean | cdktf.IResolvable;
  /**
  * Enables Client ⇄ Broker Authentication with mTLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#client_broker_auth_with_mtls DataInstaclustrKafkaClusterV2Instance#client_broker_auth_with_mtls}
  */
  readonly clientBrokerAuthWithMtls?: boolean | cdktf.IResolvable;
  /**
  * Enables Client ⇄ Cluster Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#client_to_cluster_encryption DataInstaclustrKafkaClusterV2Instance#client_to_cluster_encryption}
  */
  readonly clientToClusterEncryption?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#current_cluster_operation_status DataInstaclustrKafkaClusterV2Instance#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * Default number of partitions to use when created new topics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#default_number_of_partitions DataInstaclustrKafkaClusterV2Instance#default_number_of_partitions}
  */
  readonly defaultNumberOfPartitions?: number;
  /**
  * Default Replication factor to use for new topic. Also represents the number of racks to use when allocating nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#default_replication_factor DataInstaclustrKafkaClusterV2Instance#default_replication_factor}
  */
  readonly defaultReplicationFactor?: number;
  /**
  * Password for the default Kafka user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#default_user_password DataInstaclustrKafkaClusterV2Instance#default_user_password}
  */
  readonly defaultUserPassword?: string;
  /**
  * A description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#description DataInstaclustrKafkaClusterV2Instance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#id DataInstaclustrKafkaClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Version of Kafka to run on the cluster. Available versions: <ul> <li>`3.9.1`</li> <li>`4.0.0`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#kafka_version DataInstaclustrKafkaClusterV2Instance#kafka_version}
  */
  readonly kafkaVersion?: string;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#name DataInstaclustrKafkaClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * Creates a PCI compliant cluster, see [PCI Compliance](https://www.instaclustr.com/support/documentation/useful-information/pci-compliance/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#pci_compliance_mode DataInstaclustrKafkaClusterV2Instance#pci_compliance_mode}
  */
  readonly pciComplianceMode?: boolean | cdktf.IResolvable;
  /**
  * Creates the cluster with private network only, see [Private Network Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#private_network_cluster DataInstaclustrKafkaClusterV2Instance#private_network_cluster}
  */
  readonly privateNetworkCluster?: boolean | cdktf.IResolvable;
  /**
  * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is not available when using Developer class nodes. See [SLA Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#sla_tier DataInstaclustrKafkaClusterV2Instance#sla_tier}
  */
  readonly slaTier?: string;
  /**
  * Status of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#status DataInstaclustrKafkaClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * collocated_zookeeper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#collocated_zookeeper DataInstaclustrKafkaClusterV2Instance#collocated_zookeeper}
  */
  readonly collocatedZookeeper?: DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeper[] | cdktf.IResolvable;
  /**
  * data_centre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#data_centre DataInstaclustrKafkaClusterV2Instance#data_centre}
  */
  readonly dataCentre?: DataInstaclustrKafkaClusterV2InstanceDataCentre[] | cdktf.IResolvable;
  /**
  * dedicated_kraft_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#dedicated_kraft_controller DataInstaclustrKafkaClusterV2Instance#dedicated_kraft_controller}
  */
  readonly dedicatedKraftController?: DataInstaclustrKafkaClusterV2InstanceDedicatedKraftController[] | cdktf.IResolvable;
  /**
  * dedicated_zookeeper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#dedicated_zookeeper DataInstaclustrKafkaClusterV2Instance#dedicated_zookeeper}
  */
  readonly dedicatedZookeeper?: DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeper[] | cdktf.IResolvable;
  /**
  * karapace_rest_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#karapace_rest_proxy DataInstaclustrKafkaClusterV2Instance#karapace_rest_proxy}
  */
  readonly karapaceRestProxy?: DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxy[] | cdktf.IResolvable;
  /**
  * karapace_schema_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#karapace_schema_registry DataInstaclustrKafkaClusterV2Instance#karapace_schema_registry}
  */
  readonly karapaceSchemaRegistry?: DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistry[] | cdktf.IResolvable;
  /**
  * kraft block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#kraft DataInstaclustrKafkaClusterV2Instance#kraft}
  */
  readonly kraft?: DataInstaclustrKafkaClusterV2InstanceKraft[] | cdktf.IResolvable;
  /**
  * resize_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#resize_settings DataInstaclustrKafkaClusterV2Instance#resize_settings}
  */
  readonly resizeSettings?: DataInstaclustrKafkaClusterV2InstanceResizeSettings[] | cdktf.IResolvable;
  /**
  * rest_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#rest_proxy DataInstaclustrKafkaClusterV2Instance#rest_proxy}
  */
  readonly restProxy?: DataInstaclustrKafkaClusterV2InstanceRestProxy[] | cdktf.IResolvable;
  /**
  * schema_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#schema_registry DataInstaclustrKafkaClusterV2Instance#schema_registry}
  */
  readonly schemaRegistry?: DataInstaclustrKafkaClusterV2InstanceSchemaRegistry[] | cdktf.IResolvable;
  /**
  * tiered_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#tiered_storage DataInstaclustrKafkaClusterV2Instance#tiered_storage}
  */
  readonly tieredStorage?: DataInstaclustrKafkaClusterV2InstanceTieredStorage[] | cdktf.IResolvable;
  /**
  * two_factor_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#two_factor_delete DataInstaclustrKafkaClusterV2Instance#two_factor_delete}
  */
  readonly twoFactorDelete?: DataInstaclustrKafkaClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable;
}
export interface DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeper {
  /**
  * Number of Zookeeper nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#node_count DataInstaclustrKafkaClusterV2Instance#node_count}
  */
  readonly nodeCount?: number;
}

export function dataInstaclustrKafkaClusterV2InstanceCollocatedZookeeperToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceCollocatedZookeeperToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeCount = value.nodeCount;
    }
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeperList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeper[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeperOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLink {
  /**
  * Name of the advertised host for this listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#advertised_hostname DataInstaclustrKafkaClusterV2Instance#advertised_hostname}
  */
  readonly advertisedHostname?: string;
  /**
  * The Instaclustr ID of the AWS endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#end_point_service_id DataInstaclustrKafkaClusterV2Instance#end_point_service_id}
  */
  readonly endPointServiceId?: string;
  /**
  * Name of the created endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#end_point_service_name DataInstaclustrKafkaClusterV2Instance#end_point_service_name}
  */
  readonly endPointServiceName?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLinkToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_hostname: cdktf.stringToTerraform(struct!.advertisedHostname),
    end_point_service_id: cdktf.stringToTerraform(struct!.endPointServiceId),
    end_point_service_name: cdktf.stringToTerraform(struct!.endPointServiceName),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLinkToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_hostname: {
      value: cdktf.stringToHclTerraform(struct!.advertisedHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_id: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_name: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedHostname = this._advertisedHostname;
    }
    if (this._endPointServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceId = this._endPointServiceId;
    }
    if (this._endPointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceName = this._endPointServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertisedHostname = undefined;
      this._endPointServiceId = undefined;
      this._endPointServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertisedHostname = value.advertisedHostname;
      this._endPointServiceId = value.endPointServiceId;
      this._endPointServiceName = value.endPointServiceName;
    }
  }

  // advertised_hostname - computed: true, optional: true, required: false
  private _advertisedHostname?: string; 
  public get advertisedHostname() {
    return this.getStringAttribute('advertised_hostname');
  }
  public set advertisedHostname(value: string) {
    this._advertisedHostname = value;
  }
  public resetAdvertisedHostname() {
    this._advertisedHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedHostnameInput() {
    return this._advertisedHostname;
  }

  // end_point_service_id - computed: true, optional: true, required: false
  private _endPointServiceId?: string; 
  public get endPointServiceId() {
    return this.getStringAttribute('end_point_service_id');
  }
  public set endPointServiceId(value: string) {
    this._endPointServiceId = value;
  }
  public resetEndPointServiceId() {
    this._endPointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceIdInput() {
    return this._endPointServiceId;
  }

  // end_point_service_name - computed: true, optional: true, required: false
  private _endPointServiceName?: string; 
  public get endPointServiceName() {
    return this.getStringAttribute('end_point_service_name');
  }
  public set endPointServiceName(value: string) {
    this._endPointServiceName = value;
  }
  public resetEndPointServiceName() {
    this._endPointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceNameInput() {
    return this._endPointServiceName;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLinkList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLink[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLinkOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListeners {
  /**
  * ID of the PrivateLink listener. Only available after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#id DataInstaclustrKafkaClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the PrivateLink listener. Only available after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#name DataInstaclustrKafkaClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * Port of the PrivateLink listener. Only available after creation. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#port DataInstaclustrKafkaClusterV2Instance#port}
  */
  readonly port?: number;
  /**
  * Kafka listener protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#protocol DataInstaclustrKafkaClusterV2Instance#protocol}
  */
  readonly protocol?: string;
  /**
  * Kafka listener types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#types DataInstaclustrKafkaClusterV2Instance#types}
  */
  readonly types?: string[];
  /**
  * private_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#private_link DataInstaclustrKafkaClusterV2Instance#private_link}
  */
  readonly privateLink?: DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLink[] | cdktf.IResolvable;
}

export function dataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
    private_link: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLinkToTerraform, true)(struct!.privateLink),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    private_link: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLinkToHclTerraform, true)(struct!.privateLink),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._privateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLink = this._privateLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._types = undefined;
      this._privateLink.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
      this._types = value.types;
      this._privateLink.internalValue = value.privateLink;
    }
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // private_link - computed: false, optional: true, required: false
  private _privateLink = new DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLinkList(this, "private_link", false);
  public get privateLink() {
    return this._privateLink;
  }
  public putPrivateLink(value: DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersPrivateLink[] | cdktf.IResolvable) {
    this._privateLink.internalValue = value;
  }
  public resetPrivateLink() {
    this._privateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkInput() {
    return this._privateLink.internalValue;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListeners[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettings {
  /**
  * VPC ID into which the Data Centre will be provisioned. The Data Centre's network allocation must match the IPv4 CIDR block of the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#custom_virtual_network_id DataInstaclustrKafkaClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * ID of a KMS encryption key to encrypt data on nodes. KMS encryption key must be set in Cluster Resources through the Instaclustr Console before provisioning an encrypted Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#ebs_encryption_key DataInstaclustrKafkaClusterV2Instance#ebs_encryption_key}
  */
  readonly ebsEncryptionKey?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettingsToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    ebs_encryption_key: cdktf.stringToTerraform(struct!.ebsEncryptionKey),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettingsToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.ebsEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    if (this._ebsEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsEncryptionKey = this._ebsEncryptionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
      this._ebsEncryptionKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
      this._ebsEncryptionKey = value.ebsEncryptionKey;
    }
  }

  // custom_virtual_network_id - computed: true, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }

  // ebs_encryption_key - computed: true, optional: true, required: false
  private _ebsEncryptionKey?: string; 
  public get ebsEncryptionKey() {
    return this.getStringAttribute('ebs_encryption_key');
  }
  public set ebsEncryptionKey(value: string) {
    this._ebsEncryptionKey = value;
  }
  public resetEbsEncryptionKey() {
    this._ebsEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsEncryptionKeyInput() {
    return this._ebsEncryptionKey;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettingsOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettings {
  /**
  * VNet ID into which the Data Centre will be provisioned. The VNet must have an available address space for the Data Centre's network allocation to be appended to the VNet. Currently supported for PostgreSQL clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#custom_virtual_network_id DataInstaclustrKafkaClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * The name of the Azure Resource Group into which the Data Centre will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#resource_group DataInstaclustrKafkaClusterV2Instance#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The private network address block to be used for the storage network. This is only used for certain node sizes, currently limited to those which use Azure NetApp Files: for all other node sizes, this field should not be provided. The network must have a prefix length between /16 and /28, and must be part of a private address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#storage_network DataInstaclustrKafkaClusterV2Instance#storage_network}
  */
  readonly storageNetwork?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettingsToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    storage_network: cdktf.stringToTerraform(struct!.storageNetwork),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettingsToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_network: {
      value: cdktf.stringToHclTerraform(struct!.storageNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._storageNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageNetwork = this._storageNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
      this._resourceGroup = undefined;
      this._storageNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
      this._resourceGroup = value.resourceGroup;
      this._storageNetwork = value.storageNetwork;
    }
  }

  // custom_virtual_network_id - computed: true, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // storage_network - computed: true, optional: true, required: false
  private _storageNetwork?: string; 
  public get storageNetwork() {
    return this.getStringAttribute('storage_network');
  }
  public set storageNetwork(value: string) {
    this._storageNetwork = value;
  }
  public resetStorageNetwork() {
    this._storageNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNetworkInput() {
    return this._storageNetwork;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettingsOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#deletion_time DataInstaclustrKafkaClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#id DataInstaclustrKafkaClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#node_roles DataInstaclustrKafkaClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#node_size DataInstaclustrKafkaClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#private_address DataInstaclustrKafkaClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#public_address DataInstaclustrKafkaClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#rack DataInstaclustrKafkaClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#start_time DataInstaclustrKafkaClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#status DataInstaclustrKafkaClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodesToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_time: cdktf.stringToTerraform(struct!.deletionTime),
    id: cdktf.stringToTerraform(struct!.id),
    node_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeRoles),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    public_address: cdktf.stringToTerraform(struct!.publicAddress),
    rack: cdktf.stringToTerraform(struct!.rack),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodesToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_time: {
      value: cdktf.stringToHclTerraform(struct!.deletionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_address: {
      value: cdktf.stringToHclTerraform(struct!.publicAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack: {
      value: cdktf.stringToHclTerraform(struct!.rack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionTime = this._deletionTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoles = this._nodeRoles;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._publicAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAddress = this._publicAddress;
    }
    if (this._rack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionTime = undefined;
      this._id = undefined;
      this._nodeRoles = undefined;
      this._nodeSize = undefined;
      this._privateAddress = undefined;
      this._publicAddress = undefined;
      this._rack = undefined;
      this._startTime = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionTime = value.deletionTime;
      this._id = value.id;
      this._nodeRoles = value.nodeRoles;
      this._nodeSize = value.nodeSize;
      this._privateAddress = value.privateAddress;
      this._publicAddress = value.publicAddress;
      this._rack = value.rack;
      this._startTime = value.startTime;
      this._status = value.status;
    }
  }

  // deletion_time - computed: true, optional: true, required: false
  private _deletionTime?: string; 
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }
  public set deletionTime(value: string) {
    this._deletionTime = value;
  }
  public resetDeletionTime() {
    this._deletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionTimeInput() {
    return this._deletionTime;
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

  // node_roles - computed: true, optional: true, required: false
  private _nodeRoles?: string[]; 
  public get nodeRoles() {
    return this.getListAttribute('node_roles');
  }
  public set nodeRoles(value: string[]) {
    this._nodeRoles = value;
  }
  public resetNodeRoles() {
    this._nodeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRolesInput() {
    return this._nodeRoles;
  }

  // node_size - computed: true, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // private_address - computed: true, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // public_address - computed: true, optional: true, required: false
  private _publicAddress?: string; 
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }
  public set publicAddress(value: string) {
    this._publicAddress = value;
  }
  public resetPublicAddress() {
    this._publicAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressInput() {
    return this._publicAddress;
  }

  // rack - computed: true, optional: true, required: false
  private _rack?: string; 
  public get rack() {
    return this.getStringAttribute('rack');
  }
  public set rack(value: string) {
    this._rack = value;
  }
  public resetRack() {
    this._rack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInput() {
    return this._rack;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodesOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettings {
  /**
  * Network name or a relative Network or Subnetwork URI.
  * The Data Centre's network allocation must match the IPv4 CIDR block of the specified subnet.
  * 
  * Examples:
  * - Network URI: <code>projects/{riyoa-gcp-project-name}/global/networks/{network-name}</code>.
  * - Network name: <code>{network-name}</code>, equivalent to <code>projects/{riyoa-gcp-project-name}/global/networks/{network-name}</code>.
  * - Same-project subnetwork URI: <code>projects/{riyoa-gcp-project-name}/regions/{region-id}/subnetworks/{subnetwork-name}</code>.
  * - Shared VPC subnetwork URI: <code>projects/{riyoa-gcp-host-project-name}/regions/{region-id}/subnetworks/{subnetwork-name}</code>.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#custom_virtual_network_id DataInstaclustrKafkaClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettingsToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettingsToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
    }
  }

  // custom_virtual_network_id - computed: true, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettingsOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceDataCentreNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#deletion_time DataInstaclustrKafkaClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#id DataInstaclustrKafkaClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#node_roles DataInstaclustrKafkaClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#node_size DataInstaclustrKafkaClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#private_address DataInstaclustrKafkaClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#public_address DataInstaclustrKafkaClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#rack DataInstaclustrKafkaClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#start_time DataInstaclustrKafkaClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#status DataInstaclustrKafkaClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceDataCentreNodesToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_time: cdktf.stringToTerraform(struct!.deletionTime),
    id: cdktf.stringToTerraform(struct!.id),
    node_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeRoles),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    public_address: cdktf.stringToTerraform(struct!.publicAddress),
    rack: cdktf.stringToTerraform(struct!.rack),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceDataCentreNodesToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_time: {
      value: cdktf.stringToHclTerraform(struct!.deletionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_address: {
      value: cdktf.stringToHclTerraform(struct!.publicAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack: {
      value: cdktf.stringToHclTerraform(struct!.rack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionTime = this._deletionTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoles = this._nodeRoles;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._publicAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAddress = this._publicAddress;
    }
    if (this._rack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionTime = undefined;
      this._id = undefined;
      this._nodeRoles = undefined;
      this._nodeSize = undefined;
      this._privateAddress = undefined;
      this._publicAddress = undefined;
      this._rack = undefined;
      this._startTime = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionTime = value.deletionTime;
      this._id = value.id;
      this._nodeRoles = value.nodeRoles;
      this._nodeSize = value.nodeSize;
      this._privateAddress = value.privateAddress;
      this._publicAddress = value.publicAddress;
      this._rack = value.rack;
      this._startTime = value.startTime;
      this._status = value.status;
    }
  }

  // deletion_time - computed: true, optional: true, required: false
  private _deletionTime?: string; 
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }
  public set deletionTime(value: string) {
    this._deletionTime = value;
  }
  public resetDeletionTime() {
    this._deletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionTimeInput() {
    return this._deletionTime;
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

  // node_roles - computed: true, optional: true, required: false
  private _nodeRoles?: string[]; 
  public get nodeRoles() {
    return this.getListAttribute('node_roles');
  }
  public set nodeRoles(value: string[]) {
    this._nodeRoles = value;
  }
  public resetNodeRoles() {
    this._nodeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRolesInput() {
    return this._nodeRoles;
  }

  // node_size - computed: true, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // private_address - computed: true, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // public_address - computed: true, optional: true, required: false
  private _publicAddress?: string; 
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }
  public set publicAddress(value: string) {
    this._publicAddress = value;
  }
  public resetPublicAddress() {
    this._publicAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressInput() {
    return this._publicAddress;
  }

  // rack - computed: true, optional: true, required: false
  private _rack?: string; 
  public get rack() {
    return this.getStringAttribute('rack');
  }
  public set rack(value: string) {
    this._rack = value;
  }
  public resetRack() {
    this._rack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInput() {
    return this._rack;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceDataCentreNodesOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceDataCentreNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLink {
  /**
  * The hostname to be used to connect to the PrivateLink cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#advertised_hostname DataInstaclustrKafkaClusterV2Instance#advertised_hostname}
  */
  readonly advertisedHostname?: string;
  /**
  * The Instaclustr ID of the AWS endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#end_point_service_id DataInstaclustrKafkaClusterV2Instance#end_point_service_id}
  */
  readonly endPointServiceId?: string;
  /**
  * Name of the created endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#end_point_service_name DataInstaclustrKafkaClusterV2Instance#end_point_service_name}
  */
  readonly endPointServiceName?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLinkToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_hostname: cdktf.stringToTerraform(struct!.advertisedHostname),
    end_point_service_id: cdktf.stringToTerraform(struct!.endPointServiceId),
    end_point_service_name: cdktf.stringToTerraform(struct!.endPointServiceName),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLinkToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_hostname: {
      value: cdktf.stringToHclTerraform(struct!.advertisedHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_id: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_name: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedHostname = this._advertisedHostname;
    }
    if (this._endPointServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceId = this._endPointServiceId;
    }
    if (this._endPointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceName = this._endPointServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertisedHostname = undefined;
      this._endPointServiceId = undefined;
      this._endPointServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertisedHostname = value.advertisedHostname;
      this._endPointServiceId = value.endPointServiceId;
      this._endPointServiceName = value.endPointServiceName;
    }
  }

  // advertised_hostname - computed: true, optional: true, required: false
  private _advertisedHostname?: string; 
  public get advertisedHostname() {
    return this.getStringAttribute('advertised_hostname');
  }
  public set advertisedHostname(value: string) {
    this._advertisedHostname = value;
  }
  public resetAdvertisedHostname() {
    this._advertisedHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedHostnameInput() {
    return this._advertisedHostname;
  }

  // end_point_service_id - computed: true, optional: true, required: false
  private _endPointServiceId?: string; 
  public get endPointServiceId() {
    return this.getStringAttribute('end_point_service_id');
  }
  public set endPointServiceId(value: string) {
    this._endPointServiceId = value;
  }
  public resetEndPointServiceId() {
    this._endPointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceIdInput() {
    return this._endPointServiceId;
  }

  // end_point_service_name - computed: true, optional: true, required: false
  private _endPointServiceName?: string; 
  public get endPointServiceName() {
    return this.getStringAttribute('end_point_service_name');
  }
  public set endPointServiceName(value: string) {
    this._endPointServiceName = value;
  }
  public resetEndPointServiceName() {
    this._endPointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceNameInput() {
    return this._endPointServiceName;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLinkList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLink[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLinkOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceDataCentreTag {
  /**
  * Key of the tag for the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#key DataInstaclustrKafkaClusterV2Instance#key}
  */
  readonly key?: string;
  /**
  * Value of the tag for the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#value DataInstaclustrKafkaClusterV2Instance#value}
  */
  readonly value?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceDataCentreTagToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceDataCentreTagToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreTagList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceDataCentreTag[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceDataCentreTagOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceDataCentreTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceDataCentre {
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#cloud_provider DataInstaclustrKafkaClusterV2Instance#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * List of Subject Alternative Names FQDNs as per RFC 1035.  Used by the applications with self signed certificates in keystores of nodes in the datacenter. NOTE: No private link cluster support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#custom_subject_alternative_names DataInstaclustrKafkaClusterV2Instance#custom_subject_alternative_names}
  */
  readonly customSubjectAlternativeNames?: string[];
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#id DataInstaclustrKafkaClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A logical name for the data centre within a cluster. These names must be unique in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#name DataInstaclustrKafkaClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * The private network address block for the Data Centre specified using CIDR address notation. The network must have a prefix length between `/16` and `/26` and must be part of a private address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#network DataInstaclustrKafkaClusterV2Instance#network}
  */
  readonly network?: string;
  /**
  * Size of the nodes provisioned in the Data Centre. Available node sizes: <details> <summary>*Amazon Web Services* [__AWS_VPC__]</summary> <br> <details> <summary>*Africa (Cape Town)* [__AF_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hong Kong)* [__AP_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hyderabad)* [__AP_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Jakarta)* [__AP_SOUTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Malaysia)* [__AP_SOUTHEAST_5__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Melbourne)* [__AP_SOUTHEAST_4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Mumbai)* [__AP_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Osaka)* [__AP_NORTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Seoul)* [__AP_NORTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Singapore)* [__AP_SOUTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Sydney)* [__AP_SOUTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Thailand)* [__AP_SOUTHEAST_7__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Tokyo)* [__AP_NORTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada (Central)* [__CA_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada West (Calgary)* [__CA_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Frankfurt)* [__EU_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Zurich)* [__EU_CENTRAL_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU North (Stockholm)* [__EU_NORTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Milan)* [__EU_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Spain)* [__EU_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (Ireland)* [__EU_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (London)* [__EU_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (Paris)* [__EU_WEST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Israel (Tel Aviv)* [__IL_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Middle East (Bahrain)* [__ME_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Middle East (UAE)* [__ME_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*South America (São Paulo)* [__SA_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US East (Northern Virginia)* [__US_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US East (Ohio)* [__US_EAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US West (Northern California)* [__US_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US West (Oregon)* [__US_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>i3.2xlarge-1900-gp2 </td> <td>General Availability</td> </tr> <tr> <td>i3.xlarge-950-gp2 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-t4g.small-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-KR-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.2xlarge-4656 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-i3en.xlarge-2328 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.2xlarge-4500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-ZK-PRD-m8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDR-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-250 </td> <td>Deprecated</td> </tr> <tr> <td>KDZ-PRD-m6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.2xlarge-4500 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>KFK-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-3000-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-4500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.large-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-1500-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-2250-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-750-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-800-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-80-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>zk-developer-t3.small-20 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>zk-production-m5.xlarge-120 </td> <td>Deprecated</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Microsoft Azure* [__AZURE_AZ__]</summary> <br> <details> <summary>*Australia East (NSW)* [__AUSTRALIA_EAST__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada Central (Toronto)* [__CANADA_CENTRAL__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US (Virginia)* [__EAST_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US 2 (Virginia)* [__EAST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*North Europe (Ireland)* [__NORTH_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South Central US (Texas)* [__SOUTH_CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeast Asia (Singapore)* [__SOUTHEAST_ASIA__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Switzerland North (Zurich)* [__SWITZERLAND_NORTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*UK South (London)* [__UK_SOUTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West Europe (Netherlands)* [__WEST_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West US 2 (Washington)* [__WEST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KDR-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-standard_ds1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d2s_v3-64 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-standard_d4s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-512 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS11_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2250 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-768 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-1500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-3000 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-4500 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Google Cloud Platform* [__GCP__]</summary> <br> <details> <summary>*Central Europe (Warsaw)* [__europe-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central Middle East (Dammam)* [__me-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__us-central1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern Asia-Pacific (Taiwan)* [__asia-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern South America (Brazil)* [__southamerica-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (North Virginia)* [__us-east4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (South Carolina)* [__us-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern Asia-pacific (Japan)* [__asia-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern North America (Canada)* [__northamerica-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northern Europe (Finland)* [__europe-north1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Jakarta)* [__asia-southeast2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Singapore)* [__asia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Australia (Sydney)* [__australia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southern Asia (India)* [__asia-south1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southwestern Europe (Madrid)* [__europe-southwest1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Belgium)* [__europe-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (England)* [__europe-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Germany)* [__europe-west3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Milan)* [__europe-west8__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Netherlands)* [__europe-west4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Paris)* [__europe-west9__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Zurich)* [__europe-west6__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (California)* [__us-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (Oregon)* [__us-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>kafka-production-n2-standard-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>kafka-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDR-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n1-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-2-60 </td> <td>General Availability</td> </tr> <tr> <td>KDZ-PRD-n2-standard-4-120 </td> <td>General Availability</td> </tr> <tr> <td>KFK-DEV-n2-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>KFK-PRD-n2-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-4-40 </td> <td>General Availability</td> </tr> <tr> <td>KFK-SO-PRD-c2d-highcpu-8-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-2250 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-4-750 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-3000 </td> <td>General Availability</td> </tr> <tr> <td>n1-highmem-8-4500 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-1-80 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#node_size DataInstaclustrKafkaClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Total number of Kafka brokers in the Data Centre. Must be a multiple of `defaultReplicationFactor`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#number_of_nodes DataInstaclustrKafkaClusterV2Instance#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#provider_account_name DataInstaclustrKafkaClusterV2Instance#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * Region of the Data Centre. See the description for node size for a compatible Data Centre for a given node size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#region DataInstaclustrKafkaClusterV2Instance#region}
  */
  readonly region?: string;
  /**
  * Status of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#status DataInstaclustrKafkaClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * Zero Inbound Access gateways eliminate the requirement for any public IP addresses in cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#zero_inbound_access DataInstaclustrKafkaClusterV2Instance#zero_inbound_access}
  */
  readonly zeroInboundAccess?: boolean | cdktf.IResolvable;
  /**
  * additional_listeners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#additional_listeners DataInstaclustrKafkaClusterV2Instance#additional_listeners}
  */
  readonly additionalListeners?: DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListeners[] | cdktf.IResolvable;
  /**
  * aws_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#aws_settings DataInstaclustrKafkaClusterV2Instance#aws_settings}
  */
  readonly awsSettings?: DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable;
  /**
  * azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#azure_settings DataInstaclustrKafkaClusterV2Instance#azure_settings}
  */
  readonly azureSettings?: DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable;
  /**
  * deleted_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#deleted_nodes DataInstaclustrKafkaClusterV2Instance#deleted_nodes}
  */
  readonly deletedNodes?: DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable;
  /**
  * gcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#gcp_settings DataInstaclustrKafkaClusterV2Instance#gcp_settings}
  */
  readonly gcpSettings?: DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#nodes DataInstaclustrKafkaClusterV2Instance#nodes}
  */
  readonly nodes?: DataInstaclustrKafkaClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable;
  /**
  * private_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#private_link DataInstaclustrKafkaClusterV2Instance#private_link}
  */
  readonly privateLink?: DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLink[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#tag DataInstaclustrKafkaClusterV2Instance#tag}
  */
  readonly tag?: DataInstaclustrKafkaClusterV2InstanceDataCentreTag[] | cdktf.IResolvable;
}

export function dataInstaclustrKafkaClusterV2InstanceDataCentreToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    custom_subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customSubjectAlternativeNames),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    provider_account_name: cdktf.stringToTerraform(struct!.providerAccountName),
    region: cdktf.stringToTerraform(struct!.region),
    status: cdktf.stringToTerraform(struct!.status),
    zero_inbound_access: cdktf.booleanToTerraform(struct!.zeroInboundAccess),
    additional_listeners: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersToTerraform, true)(struct!.additionalListeners),
    aws_settings: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettingsToTerraform, true)(struct!.awsSettings),
    azure_settings: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettingsToTerraform, true)(struct!.azureSettings),
    deleted_nodes: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodesToTerraform, true)(struct!.deletedNodes),
    gcp_settings: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettingsToTerraform, true)(struct!.gcpSettings),
    nodes: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceDataCentreNodesToTerraform, true)(struct!.nodes),
    private_link: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLinkToTerraform, true)(struct!.privateLink),
    tag: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceDataCentreTagToTerraform, true)(struct!.tag),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceDataCentreToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_subject_alternative_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customSubjectAlternativeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider_account_name: {
      value: cdktf.stringToHclTerraform(struct!.providerAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_inbound_access: {
      value: cdktf.booleanToHclTerraform(struct!.zeroInboundAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    additional_listeners: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersToHclTerraform, true)(struct!.additionalListeners),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersList",
    },
    aws_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettingsToHclTerraform, true)(struct!.awsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettingsList",
    },
    azure_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettingsToHclTerraform, true)(struct!.azureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettingsList",
    },
    deleted_nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodesToHclTerraform, true)(struct!.deletedNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodesList",
    },
    gcp_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettingsToHclTerraform, true)(struct!.gcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettingsList",
    },
    nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceDataCentreNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaClusterV2InstanceDataCentreNodesList",
    },
    private_link: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLinkToHclTerraform, true)(struct!.privateLink),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLinkList",
    },
    tag: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceDataCentreTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaClusterV2InstanceDataCentreTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceDataCentre | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._customSubjectAlternativeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSubjectAlternativeNames = this._customSubjectAlternativeNames;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._numberOfNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodes = this._numberOfNodes;
    }
    if (this._providerAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountName = this._providerAccountName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._zeroInboundAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroInboundAccess = this._zeroInboundAccess;
    }
    if (this._additionalListeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalListeners = this._additionalListeners?.internalValue;
    }
    if (this._awsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSettings = this._awsSettings?.internalValue;
    }
    if (this._azureSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSettings = this._azureSettings?.internalValue;
    }
    if (this._deletedNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletedNodes = this._deletedNodes?.internalValue;
    }
    if (this._gcpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSettings = this._gcpSettings?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._privateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLink = this._privateLink?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceDataCentre | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProvider = undefined;
      this._customSubjectAlternativeNames = undefined;
      this._id = undefined;
      this._name = undefined;
      this._network = undefined;
      this._nodeSize = undefined;
      this._numberOfNodes = undefined;
      this._providerAccountName = undefined;
      this._region = undefined;
      this._status = undefined;
      this._zeroInboundAccess = undefined;
      this._additionalListeners.internalValue = undefined;
      this._awsSettings.internalValue = undefined;
      this._azureSettings.internalValue = undefined;
      this._deletedNodes.internalValue = undefined;
      this._gcpSettings.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._privateLink.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudProvider = value.cloudProvider;
      this._customSubjectAlternativeNames = value.customSubjectAlternativeNames;
      this._id = value.id;
      this._name = value.name;
      this._network = value.network;
      this._nodeSize = value.nodeSize;
      this._numberOfNodes = value.numberOfNodes;
      this._providerAccountName = value.providerAccountName;
      this._region = value.region;
      this._status = value.status;
      this._zeroInboundAccess = value.zeroInboundAccess;
      this._additionalListeners.internalValue = value.additionalListeners;
      this._awsSettings.internalValue = value.awsSettings;
      this._azureSettings.internalValue = value.azureSettings;
      this._deletedNodes.internalValue = value.deletedNodes;
      this._gcpSettings.internalValue = value.gcpSettings;
      this._nodes.internalValue = value.nodes;
      this._privateLink.internalValue = value.privateLink;
      this._tag.internalValue = value.tag;
    }
  }

  // cloud_provider - computed: true, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // custom_subject_alternative_names - computed: true, optional: true, required: false
  private _customSubjectAlternativeNames?: string[]; 
  public get customSubjectAlternativeNames() {
    return this.getListAttribute('custom_subject_alternative_names');
  }
  public set customSubjectAlternativeNames(value: string[]) {
    this._customSubjectAlternativeNames = value;
  }
  public resetCustomSubjectAlternativeNames() {
    this._customSubjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubjectAlternativeNamesInput() {
    return this._customSubjectAlternativeNames;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // node_size - computed: true, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // number_of_nodes - computed: true, optional: true, required: false
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  public resetNumberOfNodes() {
    this._numberOfNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // provider_account_name - computed: true, optional: true, required: false
  private _providerAccountName?: string; 
  public get providerAccountName() {
    return this.getStringAttribute('provider_account_name');
  }
  public set providerAccountName(value: string) {
    this._providerAccountName = value;
  }
  public resetProviderAccountName() {
    this._providerAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAccountNameInput() {
    return this._providerAccountName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // zero_inbound_access - computed: true, optional: true, required: false
  private _zeroInboundAccess?: boolean | cdktf.IResolvable; 
  public get zeroInboundAccess() {
    return this.getBooleanAttribute('zero_inbound_access');
  }
  public set zeroInboundAccess(value: boolean | cdktf.IResolvable) {
    this._zeroInboundAccess = value;
  }
  public resetZeroInboundAccess() {
    this._zeroInboundAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroInboundAccessInput() {
    return this._zeroInboundAccess;
  }

  // additional_listeners - computed: false, optional: true, required: false
  private _additionalListeners = new DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListenersList(this, "additional_listeners", false);
  public get additionalListeners() {
    return this._additionalListeners;
  }
  public putAdditionalListeners(value: DataInstaclustrKafkaClusterV2InstanceDataCentreAdditionalListeners[] | cdktf.IResolvable) {
    this._additionalListeners.internalValue = value;
  }
  public resetAdditionalListeners() {
    this._additionalListeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalListenersInput() {
    return this._additionalListeners.internalValue;
  }

  // aws_settings - computed: false, optional: true, required: false
  private _awsSettings = new DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettingsList(this, "aws_settings", false);
  public get awsSettings() {
    return this._awsSettings;
  }
  public putAwsSettings(value: DataInstaclustrKafkaClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable) {
    this._awsSettings.internalValue = value;
  }
  public resetAwsSettings() {
    this._awsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSettingsInput() {
    return this._awsSettings.internalValue;
  }

  // azure_settings - computed: false, optional: true, required: false
  private _azureSettings = new DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettingsList(this, "azure_settings", false);
  public get azureSettings() {
    return this._azureSettings;
  }
  public putAzureSettings(value: DataInstaclustrKafkaClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable) {
    this._azureSettings.internalValue = value;
  }
  public resetAzureSettings() {
    this._azureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSettingsInput() {
    return this._azureSettings.internalValue;
  }

  // deleted_nodes - computed: false, optional: true, required: false
  private _deletedNodes = new DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodesList(this, "deleted_nodes", false);
  public get deletedNodes() {
    return this._deletedNodes;
  }
  public putDeletedNodes(value: DataInstaclustrKafkaClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable) {
    this._deletedNodes.internalValue = value;
  }
  public resetDeletedNodes() {
    this._deletedNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedNodesInput() {
    return this._deletedNodes.internalValue;
  }

  // gcp_settings - computed: false, optional: true, required: false
  private _gcpSettings = new DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettingsList(this, "gcp_settings", false);
  public get gcpSettings() {
    return this._gcpSettings;
  }
  public putGcpSettings(value: DataInstaclustrKafkaClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable) {
    this._gcpSettings.internalValue = value;
  }
  public resetGcpSettings() {
    this._gcpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSettingsInput() {
    return this._gcpSettings.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new DataInstaclustrKafkaClusterV2InstanceDataCentreNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataInstaclustrKafkaClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // private_link - computed: false, optional: true, required: false
  private _privateLink = new DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLinkList(this, "private_link", false);
  public get privateLink() {
    return this._privateLink;
  }
  public putPrivateLink(value: DataInstaclustrKafkaClusterV2InstanceDataCentrePrivateLink[] | cdktf.IResolvable) {
    this._privateLink.internalValue = value;
  }
  public resetPrivateLink() {
    this._privateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkInput() {
    return this._privateLink.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataInstaclustrKafkaClusterV2InstanceDataCentreTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataInstaclustrKafkaClusterV2InstanceDataCentreTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceDataCentreList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceDataCentre[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceDataCentreOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceDataCentreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceDedicatedKraftController {
  /**
  * Number of dedicated KRaft Controller nodes. Must be 3 or 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#controller_node_count DataInstaclustrKafkaClusterV2Instance#controller_node_count}
  */
  readonly controllerNodeCount?: number;
  /**
  * Size of the nodes provisioned as dedicated KRaftController nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#controller_node_size DataInstaclustrKafkaClusterV2Instance#controller_node_size}
  */
  readonly controllerNodeSize?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceDedicatedKraftControllerToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDedicatedKraftController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_node_count: cdktf.numberToTerraform(struct!.controllerNodeCount),
    controller_node_size: cdktf.stringToTerraform(struct!.controllerNodeSize),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceDedicatedKraftControllerToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDedicatedKraftController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_node_count: {
      value: cdktf.numberToHclTerraform(struct!.controllerNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    controller_node_size: {
      value: cdktf.stringToHclTerraform(struct!.controllerNodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceDedicatedKraftControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceDedicatedKraftController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerNodeCount = this._controllerNodeCount;
    }
    if (this._controllerNodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerNodeSize = this._controllerNodeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceDedicatedKraftController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerNodeCount = undefined;
      this._controllerNodeSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerNodeCount = value.controllerNodeCount;
      this._controllerNodeSize = value.controllerNodeSize;
    }
  }

  // controller_node_count - computed: true, optional: true, required: false
  private _controllerNodeCount?: number; 
  public get controllerNodeCount() {
    return this.getNumberAttribute('controller_node_count');
  }
  public set controllerNodeCount(value: number) {
    this._controllerNodeCount = value;
  }
  public resetControllerNodeCount() {
    this._controllerNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerNodeCountInput() {
    return this._controllerNodeCount;
  }

  // controller_node_size - computed: true, optional: true, required: false
  private _controllerNodeSize?: string; 
  public get controllerNodeSize() {
    return this.getStringAttribute('controller_node_size');
  }
  public set controllerNodeSize(value: string) {
    this._controllerNodeSize = value;
  }
  public resetControllerNodeSize() {
    this._controllerNodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerNodeSizeInput() {
    return this._controllerNodeSize;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceDedicatedKraftControllerList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceDedicatedKraftController[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceDedicatedKraftControllerOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceDedicatedKraftControllerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeper {
  /**
  * Number of dedicated Zookeeper node count, it must be 3 or 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#zookeeper_node_count DataInstaclustrKafkaClusterV2Instance#zookeeper_node_count}
  */
  readonly zookeeperNodeCount?: number;
  /**
  * Size of the nodes provisioned as dedicated Zookeeper nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#zookeeper_node_size DataInstaclustrKafkaClusterV2Instance#zookeeper_node_size}
  */
  readonly zookeeperNodeSize?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceDedicatedZookeeperToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zookeeper_node_count: cdktf.numberToTerraform(struct!.zookeeperNodeCount),
    zookeeper_node_size: cdktf.stringToTerraform(struct!.zookeeperNodeSize),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceDedicatedZookeeperToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zookeeper_node_count: {
      value: cdktf.numberToHclTerraform(struct!.zookeeperNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zookeeper_node_size: {
      value: cdktf.stringToHclTerraform(struct!.zookeeperNodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zookeeperNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperNodeCount = this._zookeeperNodeCount;
    }
    if (this._zookeeperNodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperNodeSize = this._zookeeperNodeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._zookeeperNodeCount = undefined;
      this._zookeeperNodeSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._zookeeperNodeCount = value.zookeeperNodeCount;
      this._zookeeperNodeSize = value.zookeeperNodeSize;
    }
  }

  // zookeeper_node_count - computed: true, optional: true, required: false
  private _zookeeperNodeCount?: number; 
  public get zookeeperNodeCount() {
    return this.getNumberAttribute('zookeeper_node_count');
  }
  public set zookeeperNodeCount(value: number) {
    this._zookeeperNodeCount = value;
  }
  public resetZookeeperNodeCount() {
    this._zookeeperNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperNodeCountInput() {
    return this._zookeeperNodeCount;
  }

  // zookeeper_node_size - computed: true, optional: true, required: false
  private _zookeeperNodeSize?: string; 
  public get zookeeperNodeSize() {
    return this.getStringAttribute('zookeeper_node_size');
  }
  public set zookeeperNodeSize(value: string) {
    this._zookeeperNodeSize = value;
  }
  public resetZookeeperNodeSize() {
    this._zookeeperNodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperNodeSizeInput() {
    return this._zookeeperNodeSize;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeperList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeper[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeperOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxy {
  /**
  * Enables Integration of the Karapace REST proxy with the local Karapace Schema registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#integrate_rest_proxy_with_schema_registry DataInstaclustrKafkaClusterV2Instance#integrate_rest_proxy_with_schema_registry}
  */
  readonly integrateRestProxyWithSchemaRegistry?: boolean | cdktf.IResolvable;
  /**
  * Adds the specified version of Kafka REST Proxy to the Kafka cluster. Available versions: <ul> <li>`5.0.0`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#version DataInstaclustrKafkaClusterV2Instance#version}
  */
  readonly version?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceKarapaceRestProxyToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integrate_rest_proxy_with_schema_registry: cdktf.booleanToTerraform(struct!.integrateRestProxyWithSchemaRegistry),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceKarapaceRestProxyToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integrate_rest_proxy_with_schema_registry: {
      value: cdktf.booleanToHclTerraform(struct!.integrateRestProxyWithSchemaRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrateRestProxyWithSchemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrateRestProxyWithSchemaRegistry = this._integrateRestProxyWithSchemaRegistry;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrateRestProxyWithSchemaRegistry = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrateRestProxyWithSchemaRegistry = value.integrateRestProxyWithSchemaRegistry;
      this._version = value.version;
    }
  }

  // integrate_rest_proxy_with_schema_registry - computed: true, optional: true, required: false
  private _integrateRestProxyWithSchemaRegistry?: boolean | cdktf.IResolvable; 
  public get integrateRestProxyWithSchemaRegistry() {
    return this.getBooleanAttribute('integrate_rest_proxy_with_schema_registry');
  }
  public set integrateRestProxyWithSchemaRegistry(value: boolean | cdktf.IResolvable) {
    this._integrateRestProxyWithSchemaRegistry = value;
  }
  public resetIntegrateRestProxyWithSchemaRegistry() {
    this._integrateRestProxyWithSchemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrateRestProxyWithSchemaRegistryInput() {
    return this._integrateRestProxyWithSchemaRegistry;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxyList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxy[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxyOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistry {
  /**
  * Adds the specified version of Kafka Schema Registry to the Kafka cluster. Available versions: <ul> <li>`5.0.0`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#version DataInstaclustrKafkaClusterV2Instance#version}
  */
  readonly version?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistryToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistryToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistryList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistry[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistryOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceKraft {
  /**
  * Number of KRaft controller nodes (only 3 is currently supported).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#controller_node_count DataInstaclustrKafkaClusterV2Instance#controller_node_count}
  */
  readonly controllerNodeCount?: number;
}

export function dataInstaclustrKafkaClusterV2InstanceKraftToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceKraft | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_node_count: cdktf.numberToTerraform(struct!.controllerNodeCount),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceKraftToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceKraft | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_node_count: {
      value: cdktf.numberToHclTerraform(struct!.controllerNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceKraftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceKraft | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerNodeCount = this._controllerNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceKraft | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerNodeCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerNodeCount = value.controllerNodeCount;
    }
  }

  // controller_node_count - computed: true, optional: true, required: false
  private _controllerNodeCount?: number; 
  public get controllerNodeCount() {
    return this.getNumberAttribute('controller_node_count');
  }
  public set controllerNodeCount(value: number) {
    this._controllerNodeCount = value;
  }
  public resetControllerNodeCount() {
    this._controllerNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerNodeCountInput() {
    return this._controllerNodeCount;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceKraftList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceKraft[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceKraftOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceKraftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceResizeSettings {
  /**
  * Number of concurrent nodes to resize during a resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#concurrency DataInstaclustrKafkaClusterV2Instance#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Setting this property to `true` will notify the Instaclustr Account's designated support contacts on resize completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#notify_support_contacts DataInstaclustrKafkaClusterV2Instance#notify_support_contacts}
  */
  readonly notifySupportContacts?: boolean | cdktf.IResolvable;
}

export function dataInstaclustrKafkaClusterV2InstanceResizeSettingsToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    notify_support_contacts: cdktf.booleanToTerraform(struct!.notifySupportContacts),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceResizeSettingsToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify_support_contacts: {
      value: cdktf.booleanToHclTerraform(struct!.notifySupportContacts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceResizeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceResizeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._notifySupportContacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifySupportContacts = this._notifySupportContacts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceResizeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency = undefined;
      this._notifySupportContacts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency = value.concurrency;
      this._notifySupportContacts = value.notifySupportContacts;
    }
  }

  // concurrency - computed: true, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // notify_support_contacts - computed: true, optional: true, required: false
  private _notifySupportContacts?: boolean | cdktf.IResolvable; 
  public get notifySupportContacts() {
    return this.getBooleanAttribute('notify_support_contacts');
  }
  public set notifySupportContacts(value: boolean | cdktf.IResolvable) {
    this._notifySupportContacts = value;
  }
  public resetNotifySupportContacts() {
    this._notifySupportContacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifySupportContactsInput() {
    return this._notifySupportContacts;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceResizeSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceResizeSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceResizeSettingsOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceResizeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceRestProxy {
  /**
  * Enables Integration of the REST proxy with a Schema registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#integrate_rest_proxy_with_schema_registry DataInstaclustrKafkaClusterV2Instance#integrate_rest_proxy_with_schema_registry}
  */
  readonly integrateRestProxyWithSchemaRegistry?: boolean | cdktf.IResolvable;
  /**
  * Password to use when connecting to the Kafka schema registry. Requires 'integrateRestProxyWithSchemaRegistry' to be 'true' and useLocalSchemaRegistry to be 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#schema_registry_password DataInstaclustrKafkaClusterV2Instance#schema_registry_password}
  */
  readonly schemaRegistryPassword?: string;
  /**
  * URL of the Kafka schema registry to integrate with. Requires 'integrateRestProxyWithSchemaRegistry' to be 'true' and useLocalSchemaRegistry to be 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#schema_registry_server_url DataInstaclustrKafkaClusterV2Instance#schema_registry_server_url}
  */
  readonly schemaRegistryServerUrl?: string;
  /**
  * Username to use when connecting to the Kafka schema registry. Requires 'integrateRestProxyWithSchemaRegistry' to be 'true' and useLocalSchemaRegistry to be 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#schema_registry_username DataInstaclustrKafkaClusterV2Instance#schema_registry_username}
  */
  readonly schemaRegistryUsername?: string;
  /**
  * Integrates the REST proxy with the Schema registry attached to this cluster. Requires 'integrateRestProxyWithSchemaRegistry' to be 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#use_local_schema_registry DataInstaclustrKafkaClusterV2Instance#use_local_schema_registry}
  */
  readonly useLocalSchemaRegistry?: boolean | cdktf.IResolvable;
  /**
  * Adds the specified version of Kafka REST Proxy to the Kafka cluster. Available versions: <ul> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#version DataInstaclustrKafkaClusterV2Instance#version}
  */
  readonly version?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceRestProxyToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceRestProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integrate_rest_proxy_with_schema_registry: cdktf.booleanToTerraform(struct!.integrateRestProxyWithSchemaRegistry),
    schema_registry_password: cdktf.stringToTerraform(struct!.schemaRegistryPassword),
    schema_registry_server_url: cdktf.stringToTerraform(struct!.schemaRegistryServerUrl),
    schema_registry_username: cdktf.stringToTerraform(struct!.schemaRegistryUsername),
    use_local_schema_registry: cdktf.booleanToTerraform(struct!.useLocalSchemaRegistry),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceRestProxyToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceRestProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integrate_rest_proxy_with_schema_registry: {
      value: cdktf.booleanToHclTerraform(struct!.integrateRestProxyWithSchemaRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_registry_password: {
      value: cdktf.stringToHclTerraform(struct!.schemaRegistryPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_server_url: {
      value: cdktf.stringToHclTerraform(struct!.schemaRegistryServerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_username: {
      value: cdktf.stringToHclTerraform(struct!.schemaRegistryUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_local_schema_registry: {
      value: cdktf.booleanToHclTerraform(struct!.useLocalSchemaRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceRestProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceRestProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrateRestProxyWithSchemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrateRestProxyWithSchemaRegistry = this._integrateRestProxyWithSchemaRegistry;
    }
    if (this._schemaRegistryPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryPassword = this._schemaRegistryPassword;
    }
    if (this._schemaRegistryServerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryServerUrl = this._schemaRegistryServerUrl;
    }
    if (this._schemaRegistryUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryUsername = this._schemaRegistryUsername;
    }
    if (this._useLocalSchemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLocalSchemaRegistry = this._useLocalSchemaRegistry;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceRestProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrateRestProxyWithSchemaRegistry = undefined;
      this._schemaRegistryPassword = undefined;
      this._schemaRegistryServerUrl = undefined;
      this._schemaRegistryUsername = undefined;
      this._useLocalSchemaRegistry = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrateRestProxyWithSchemaRegistry = value.integrateRestProxyWithSchemaRegistry;
      this._schemaRegistryPassword = value.schemaRegistryPassword;
      this._schemaRegistryServerUrl = value.schemaRegistryServerUrl;
      this._schemaRegistryUsername = value.schemaRegistryUsername;
      this._useLocalSchemaRegistry = value.useLocalSchemaRegistry;
      this._version = value.version;
    }
  }

  // integrate_rest_proxy_with_schema_registry - computed: true, optional: true, required: false
  private _integrateRestProxyWithSchemaRegistry?: boolean | cdktf.IResolvable; 
  public get integrateRestProxyWithSchemaRegistry() {
    return this.getBooleanAttribute('integrate_rest_proxy_with_schema_registry');
  }
  public set integrateRestProxyWithSchemaRegistry(value: boolean | cdktf.IResolvable) {
    this._integrateRestProxyWithSchemaRegistry = value;
  }
  public resetIntegrateRestProxyWithSchemaRegistry() {
    this._integrateRestProxyWithSchemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrateRestProxyWithSchemaRegistryInput() {
    return this._integrateRestProxyWithSchemaRegistry;
  }

  // schema_registry_password - computed: true, optional: true, required: false
  private _schemaRegistryPassword?: string; 
  public get schemaRegistryPassword() {
    return this.getStringAttribute('schema_registry_password');
  }
  public set schemaRegistryPassword(value: string) {
    this._schemaRegistryPassword = value;
  }
  public resetSchemaRegistryPassword() {
    this._schemaRegistryPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryPasswordInput() {
    return this._schemaRegistryPassword;
  }

  // schema_registry_server_url - computed: true, optional: true, required: false
  private _schemaRegistryServerUrl?: string; 
  public get schemaRegistryServerUrl() {
    return this.getStringAttribute('schema_registry_server_url');
  }
  public set schemaRegistryServerUrl(value: string) {
    this._schemaRegistryServerUrl = value;
  }
  public resetSchemaRegistryServerUrl() {
    this._schemaRegistryServerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryServerUrlInput() {
    return this._schemaRegistryServerUrl;
  }

  // schema_registry_username - computed: true, optional: true, required: false
  private _schemaRegistryUsername?: string; 
  public get schemaRegistryUsername() {
    return this.getStringAttribute('schema_registry_username');
  }
  public set schemaRegistryUsername(value: string) {
    this._schemaRegistryUsername = value;
  }
  public resetSchemaRegistryUsername() {
    this._schemaRegistryUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryUsernameInput() {
    return this._schemaRegistryUsername;
  }

  // use_local_schema_registry - computed: true, optional: true, required: false
  private _useLocalSchemaRegistry?: boolean | cdktf.IResolvable; 
  public get useLocalSchemaRegistry() {
    return this.getBooleanAttribute('use_local_schema_registry');
  }
  public set useLocalSchemaRegistry(value: boolean | cdktf.IResolvable) {
    this._useLocalSchemaRegistry = value;
  }
  public resetUseLocalSchemaRegistry() {
    this._useLocalSchemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLocalSchemaRegistryInput() {
    return this._useLocalSchemaRegistry;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceRestProxyList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceRestProxy[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceRestProxyOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceRestProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceSchemaRegistry {
  /**
  * Adds the specified version of Kafka Schema Registry to the Kafka cluster. Available versions: <ul> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#version DataInstaclustrKafkaClusterV2Instance#version}
  */
  readonly version?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceSchemaRegistryToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceSchemaRegistryToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceSchemaRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceSchemaRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceSchemaRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceSchemaRegistryList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceSchemaRegistry[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceSchemaRegistryOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceSchemaRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettings {
  /**
  * GCS bucket name for Kafka remote storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#gcs_bucket_name DataInstaclustrKafkaClusterV2Instance#gcs_bucket_name}
  */
  readonly gcsBucketName?: string;
  /**
  * GCS prefix to store the remote data in the GCS bucket, by default the prefix format is `<cluster_id>-data/`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#prefix DataInstaclustrKafkaClusterV2Instance#prefix}
  */
  readonly prefix?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettingsToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcs_bucket_name: cdktf.stringToTerraform(struct!.gcsBucketName),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettingsToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcs_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.gcsBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcsBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucketName = this._gcsBucketName;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcsBucketName = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcsBucketName = value.gcsBucketName;
      this._prefix = value.prefix;
    }
  }

  // gcs_bucket_name - computed: true, optional: true, required: false
  private _gcsBucketName?: string; 
  public get gcsBucketName() {
    return this.getStringAttribute('gcs_bucket_name');
  }
  public set gcsBucketName(value: string) {
    this._gcsBucketName = value;
  }
  public resetGcsBucketName() {
    this._gcsBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketNameInput() {
    return this._gcsBucketName;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettingsOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceTieredStorageS3Settings {
  /**
  * S3 prefix to store the remote data in the S3 bucket, by default the prefix format is `<cluster_id>-data/`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#prefix DataInstaclustrKafkaClusterV2Instance#prefix}
  */
  readonly prefix?: string;
  /**
  * S3 bucket name for Kafka remote storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#s3_bucket_name DataInstaclustrKafkaClusterV2Instance#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * Use custom provided S3 bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#use_custom_bucket DataInstaclustrKafkaClusterV2Instance#use_custom_bucket}
  */
  readonly useCustomBucket?: boolean | cdktf.IResolvable;
}

export function dataInstaclustrKafkaClusterV2InstanceTieredStorageS3SettingsToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceTieredStorageS3Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    use_custom_bucket: cdktf.booleanToTerraform(struct!.useCustomBucket),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceTieredStorageS3SettingsToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceTieredStorageS3Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_custom_bucket: {
      value: cdktf.booleanToHclTerraform(struct!.useCustomBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceTieredStorageS3SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceTieredStorageS3Settings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._useCustomBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCustomBucket = this._useCustomBucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceTieredStorageS3Settings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._s3BucketName = undefined;
      this._useCustomBucket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._s3BucketName = value.s3BucketName;
      this._useCustomBucket = value.useCustomBucket;
    }
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // s3_bucket_name - computed: true, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // use_custom_bucket - computed: true, optional: true, required: false
  private _useCustomBucket?: boolean | cdktf.IResolvable; 
  public get useCustomBucket() {
    return this.getBooleanAttribute('use_custom_bucket');
  }
  public set useCustomBucket(value: boolean | cdktf.IResolvable) {
    this._useCustomBucket = value;
  }
  public resetUseCustomBucket() {
    this._useCustomBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomBucketInput() {
    return this._useCustomBucket;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceTieredStorageS3SettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceTieredStorageS3Settings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceTieredStorageS3SettingsOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceTieredStorageS3SettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceTieredStorage {
  /**
  * gcs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#gcs_settings DataInstaclustrKafkaClusterV2Instance#gcs_settings}
  */
  readonly gcsSettings?: DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettings[] | cdktf.IResolvable;
  /**
  * s3_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#s3_settings DataInstaclustrKafkaClusterV2Instance#s3_settings}
  */
  readonly s3Settings?: DataInstaclustrKafkaClusterV2InstanceTieredStorageS3Settings[] | cdktf.IResolvable;
}

export function dataInstaclustrKafkaClusterV2InstanceTieredStorageToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceTieredStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcs_settings: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettingsToTerraform, true)(struct!.gcsSettings),
    s3_settings: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceTieredStorageS3SettingsToTerraform, true)(struct!.s3Settings),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceTieredStorageToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceTieredStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcs_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettingsToHclTerraform, true)(struct!.gcsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettingsList",
    },
    s3_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceTieredStorageS3SettingsToHclTerraform, true)(struct!.s3Settings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaClusterV2InstanceTieredStorageS3SettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceTieredStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceTieredStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsSettings = this._gcsSettings?.internalValue;
    }
    if (this._s3Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Settings = this._s3Settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceTieredStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcsSettings.internalValue = undefined;
      this._s3Settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcsSettings.internalValue = value.gcsSettings;
      this._s3Settings.internalValue = value.s3Settings;
    }
  }

  // gcs_settings - computed: false, optional: true, required: false
  private _gcsSettings = new DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettingsList(this, "gcs_settings", false);
  public get gcsSettings() {
    return this._gcsSettings;
  }
  public putGcsSettings(value: DataInstaclustrKafkaClusterV2InstanceTieredStorageGcsSettings[] | cdktf.IResolvable) {
    this._gcsSettings.internalValue = value;
  }
  public resetGcsSettings() {
    this._gcsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsSettingsInput() {
    return this._gcsSettings.internalValue;
  }

  // s3_settings - computed: false, optional: true, required: false
  private _s3Settings = new DataInstaclustrKafkaClusterV2InstanceTieredStorageS3SettingsList(this, "s3_settings", false);
  public get s3Settings() {
    return this._s3Settings;
  }
  public putS3Settings(value: DataInstaclustrKafkaClusterV2InstanceTieredStorageS3Settings[] | cdktf.IResolvable) {
    this._s3Settings.internalValue = value;
  }
  public resetS3Settings() {
    this._s3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SettingsInput() {
    return this._s3Settings.internalValue;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceTieredStorageList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceTieredStorage[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceTieredStorageOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceTieredStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaClusterV2InstanceTwoFactorDelete {
  /**
  * The email address which will be contacted when the cluster is requested to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#confirmation_email DataInstaclustrKafkaClusterV2Instance#confirmation_email}
  */
  readonly confirmationEmail?: string;
  /**
  * The phone number which will be contacted when the cluster is requested to be delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#confirmation_phone_number DataInstaclustrKafkaClusterV2Instance#confirmation_phone_number}
  */
  readonly confirmationPhoneNumber?: string;
}

export function dataInstaclustrKafkaClusterV2InstanceTwoFactorDeleteToTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_email: cdktf.stringToTerraform(struct!.confirmationEmail),
    confirmation_phone_number: cdktf.stringToTerraform(struct!.confirmationPhoneNumber),
  }
}


export function dataInstaclustrKafkaClusterV2InstanceTwoFactorDeleteToHclTerraform(struct?: DataInstaclustrKafkaClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confirmation_email: {
      value: cdktf.stringToHclTerraform(struct!.confirmationEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirmation_phone_number: {
      value: cdktf.stringToHclTerraform(struct!.confirmationPhoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaClusterV2InstanceTwoFactorDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrKafkaClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirmationEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationEmail = this._confirmationEmail;
    }
    if (this._confirmationPhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationPhoneNumber = this._confirmationPhoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confirmationEmail = undefined;
      this._confirmationPhoneNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confirmationEmail = value.confirmationEmail;
      this._confirmationPhoneNumber = value.confirmationPhoneNumber;
    }
  }

  // confirmation_email - computed: true, optional: true, required: false
  private _confirmationEmail?: string; 
  public get confirmationEmail() {
    return this.getStringAttribute('confirmation_email');
  }
  public set confirmationEmail(value: string) {
    this._confirmationEmail = value;
  }
  public resetConfirmationEmail() {
    this._confirmationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationEmailInput() {
    return this._confirmationEmail;
  }

  // confirmation_phone_number - computed: true, optional: true, required: false
  private _confirmationPhoneNumber?: string; 
  public get confirmationPhoneNumber() {
    return this.getStringAttribute('confirmation_phone_number');
  }
  public set confirmationPhoneNumber(value: string) {
    this._confirmationPhoneNumber = value;
  }
  public resetConfirmationPhoneNumber() {
    this._confirmationPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationPhoneNumberInput() {
    return this._confirmationPhoneNumber;
  }
}

export class DataInstaclustrKafkaClusterV2InstanceTwoFactorDeleteList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaClusterV2InstanceTwoFactorDeleteOutputReference {
    return new DataInstaclustrKafkaClusterV2InstanceTwoFactorDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance instaclustr_kafka_cluster_v2_instance}
*/
export class DataInstaclustrKafkaClusterV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_cluster_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrKafkaClusterV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrKafkaClusterV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrKafkaClusterV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrKafkaClusterV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_cluster_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.23/docs/data-sources/kafka_cluster_v2_instance instaclustr_kafka_cluster_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrKafkaClusterV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrKafkaClusterV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_cluster_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDeleteTopics = config.allowDeleteTopics;
    this._autoCreateTopics = config.autoCreateTopics;
    this._bundledUseOnly = config.bundledUseOnly;
    this._clientBrokerAuthWithMtls = config.clientBrokerAuthWithMtls;
    this._clientToClusterEncryption = config.clientToClusterEncryption;
    this._currentClusterOperationStatus = config.currentClusterOperationStatus;
    this._defaultNumberOfPartitions = config.defaultNumberOfPartitions;
    this._defaultReplicationFactor = config.defaultReplicationFactor;
    this._defaultUserPassword = config.defaultUserPassword;
    this._description = config.description;
    this._id = config.id;
    this._kafkaVersion = config.kafkaVersion;
    this._name = config.name;
    this._pciComplianceMode = config.pciComplianceMode;
    this._privateNetworkCluster = config.privateNetworkCluster;
    this._slaTier = config.slaTier;
    this._status = config.status;
    this._collocatedZookeeper.internalValue = config.collocatedZookeeper;
    this._dataCentre.internalValue = config.dataCentre;
    this._dedicatedKraftController.internalValue = config.dedicatedKraftController;
    this._dedicatedZookeeper.internalValue = config.dedicatedZookeeper;
    this._karapaceRestProxy.internalValue = config.karapaceRestProxy;
    this._karapaceSchemaRegistry.internalValue = config.karapaceSchemaRegistry;
    this._kraft.internalValue = config.kraft;
    this._resizeSettings.internalValue = config.resizeSettings;
    this._restProxy.internalValue = config.restProxy;
    this._schemaRegistry.internalValue = config.schemaRegistry;
    this._tieredStorage.internalValue = config.tieredStorage;
    this._twoFactorDelete.internalValue = config.twoFactorDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_delete_topics - computed: true, optional: true, required: false
  private _allowDeleteTopics?: boolean | cdktf.IResolvable; 
  public get allowDeleteTopics() {
    return this.getBooleanAttribute('allow_delete_topics');
  }
  public set allowDeleteTopics(value: boolean | cdktf.IResolvable) {
    this._allowDeleteTopics = value;
  }
  public resetAllowDeleteTopics() {
    this._allowDeleteTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDeleteTopicsInput() {
    return this._allowDeleteTopics;
  }

  // auto_create_topics - computed: true, optional: true, required: false
  private _autoCreateTopics?: boolean | cdktf.IResolvable; 
  public get autoCreateTopics() {
    return this.getBooleanAttribute('auto_create_topics');
  }
  public set autoCreateTopics(value: boolean | cdktf.IResolvable) {
    this._autoCreateTopics = value;
  }
  public resetAutoCreateTopics() {
    this._autoCreateTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateTopicsInput() {
    return this._autoCreateTopics;
  }

  // bundled_use_only - computed: true, optional: true, required: false
  private _bundledUseOnly?: boolean | cdktf.IResolvable; 
  public get bundledUseOnly() {
    return this.getBooleanAttribute('bundled_use_only');
  }
  public set bundledUseOnly(value: boolean | cdktf.IResolvable) {
    this._bundledUseOnly = value;
  }
  public resetBundledUseOnly() {
    this._bundledUseOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundledUseOnlyInput() {
    return this._bundledUseOnly;
  }

  // client_broker_auth_with_mtls - computed: true, optional: true, required: false
  private _clientBrokerAuthWithMtls?: boolean | cdktf.IResolvable; 
  public get clientBrokerAuthWithMtls() {
    return this.getBooleanAttribute('client_broker_auth_with_mtls');
  }
  public set clientBrokerAuthWithMtls(value: boolean | cdktf.IResolvable) {
    this._clientBrokerAuthWithMtls = value;
  }
  public resetClientBrokerAuthWithMtls() {
    this._clientBrokerAuthWithMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBrokerAuthWithMtlsInput() {
    return this._clientBrokerAuthWithMtls;
  }

  // client_to_cluster_encryption - computed: true, optional: true, required: false
  private _clientToClusterEncryption?: boolean | cdktf.IResolvable; 
  public get clientToClusterEncryption() {
    return this.getBooleanAttribute('client_to_cluster_encryption');
  }
  public set clientToClusterEncryption(value: boolean | cdktf.IResolvable) {
    this._clientToClusterEncryption = value;
  }
  public resetClientToClusterEncryption() {
    this._clientToClusterEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToClusterEncryptionInput() {
    return this._clientToClusterEncryption;
  }

  // current_cluster_operation_status - computed: true, optional: true, required: false
  private _currentClusterOperationStatus?: string; 
  public get currentClusterOperationStatus() {
    return this.getStringAttribute('current_cluster_operation_status');
  }
  public set currentClusterOperationStatus(value: string) {
    this._currentClusterOperationStatus = value;
  }
  public resetCurrentClusterOperationStatus() {
    this._currentClusterOperationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentClusterOperationStatusInput() {
    return this._currentClusterOperationStatus;
  }

  // default_number_of_partitions - computed: true, optional: true, required: false
  private _defaultNumberOfPartitions?: number; 
  public get defaultNumberOfPartitions() {
    return this.getNumberAttribute('default_number_of_partitions');
  }
  public set defaultNumberOfPartitions(value: number) {
    this._defaultNumberOfPartitions = value;
  }
  public resetDefaultNumberOfPartitions() {
    this._defaultNumberOfPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNumberOfPartitionsInput() {
    return this._defaultNumberOfPartitions;
  }

  // default_replication_factor - computed: true, optional: true, required: false
  private _defaultReplicationFactor?: number; 
  public get defaultReplicationFactor() {
    return this.getNumberAttribute('default_replication_factor');
  }
  public set defaultReplicationFactor(value: number) {
    this._defaultReplicationFactor = value;
  }
  public resetDefaultReplicationFactor() {
    this._defaultReplicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReplicationFactorInput() {
    return this._defaultReplicationFactor;
  }

  // default_user_password - computed: true, optional: true, required: false
  private _defaultUserPassword?: string; 
  public get defaultUserPassword() {
    return this.getStringAttribute('default_user_password');
  }
  public set defaultUserPassword(value: string) {
    this._defaultUserPassword = value;
  }
  public resetDefaultUserPassword() {
    this._defaultUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserPasswordInput() {
    return this._defaultUserPassword;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // kafka_version - computed: true, optional: true, required: false
  private _kafkaVersion?: string; 
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }
  public set kafkaVersion(value: string) {
    this._kafkaVersion = value;
  }
  public resetKafkaVersion() {
    this._kafkaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionInput() {
    return this._kafkaVersion;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pci_compliance_mode - computed: true, optional: true, required: false
  private _pciComplianceMode?: boolean | cdktf.IResolvable; 
  public get pciComplianceMode() {
    return this.getBooleanAttribute('pci_compliance_mode');
  }
  public set pciComplianceMode(value: boolean | cdktf.IResolvable) {
    this._pciComplianceMode = value;
  }
  public resetPciComplianceMode() {
    this._pciComplianceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciComplianceModeInput() {
    return this._pciComplianceMode;
  }

  // private_network_cluster - computed: true, optional: true, required: false
  private _privateNetworkCluster?: boolean | cdktf.IResolvable; 
  public get privateNetworkCluster() {
    return this.getBooleanAttribute('private_network_cluster');
  }
  public set privateNetworkCluster(value: boolean | cdktf.IResolvable) {
    this._privateNetworkCluster = value;
  }
  public resetPrivateNetworkCluster() {
    this._privateNetworkCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkClusterInput() {
    return this._privateNetworkCluster;
  }

  // sla_tier - computed: true, optional: true, required: false
  private _slaTier?: string; 
  public get slaTier() {
    return this.getStringAttribute('sla_tier');
  }
  public set slaTier(value: string) {
    this._slaTier = value;
  }
  public resetSlaTier() {
    this._slaTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaTierInput() {
    return this._slaTier;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // collocated_zookeeper - computed: false, optional: true, required: false
  private _collocatedZookeeper = new DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeperList(this, "collocated_zookeeper", false);
  public get collocatedZookeeper() {
    return this._collocatedZookeeper;
  }
  public putCollocatedZookeeper(value: DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeper[] | cdktf.IResolvable) {
    this._collocatedZookeeper.internalValue = value;
  }
  public resetCollocatedZookeeper() {
    this._collocatedZookeeper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collocatedZookeeperInput() {
    return this._collocatedZookeeper.internalValue;
  }

  // data_centre - computed: false, optional: true, required: false
  private _dataCentre = new DataInstaclustrKafkaClusterV2InstanceDataCentreList(this, "data_centre", false);
  public get dataCentre() {
    return this._dataCentre;
  }
  public putDataCentre(value: DataInstaclustrKafkaClusterV2InstanceDataCentre[] | cdktf.IResolvable) {
    this._dataCentre.internalValue = value;
  }
  public resetDataCentre() {
    this._dataCentre.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreInput() {
    return this._dataCentre.internalValue;
  }

  // dedicated_kraft_controller - computed: false, optional: true, required: false
  private _dedicatedKraftController = new DataInstaclustrKafkaClusterV2InstanceDedicatedKraftControllerList(this, "dedicated_kraft_controller", false);
  public get dedicatedKraftController() {
    return this._dedicatedKraftController;
  }
  public putDedicatedKraftController(value: DataInstaclustrKafkaClusterV2InstanceDedicatedKraftController[] | cdktf.IResolvable) {
    this._dedicatedKraftController.internalValue = value;
  }
  public resetDedicatedKraftController() {
    this._dedicatedKraftController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedKraftControllerInput() {
    return this._dedicatedKraftController.internalValue;
  }

  // dedicated_zookeeper - computed: false, optional: true, required: false
  private _dedicatedZookeeper = new DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeperList(this, "dedicated_zookeeper", false);
  public get dedicatedZookeeper() {
    return this._dedicatedZookeeper;
  }
  public putDedicatedZookeeper(value: DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeper[] | cdktf.IResolvable) {
    this._dedicatedZookeeper.internalValue = value;
  }
  public resetDedicatedZookeeper() {
    this._dedicatedZookeeper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedZookeeperInput() {
    return this._dedicatedZookeeper.internalValue;
  }

  // karapace_rest_proxy - computed: false, optional: true, required: false
  private _karapaceRestProxy = new DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxyList(this, "karapace_rest_proxy", false);
  public get karapaceRestProxy() {
    return this._karapaceRestProxy;
  }
  public putKarapaceRestProxy(value: DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxy[] | cdktf.IResolvable) {
    this._karapaceRestProxy.internalValue = value;
  }
  public resetKarapaceRestProxy() {
    this._karapaceRestProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get karapaceRestProxyInput() {
    return this._karapaceRestProxy.internalValue;
  }

  // karapace_schema_registry - computed: false, optional: true, required: false
  private _karapaceSchemaRegistry = new DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistryList(this, "karapace_schema_registry", false);
  public get karapaceSchemaRegistry() {
    return this._karapaceSchemaRegistry;
  }
  public putKarapaceSchemaRegistry(value: DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistry[] | cdktf.IResolvable) {
    this._karapaceSchemaRegistry.internalValue = value;
  }
  public resetKarapaceSchemaRegistry() {
    this._karapaceSchemaRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get karapaceSchemaRegistryInput() {
    return this._karapaceSchemaRegistry.internalValue;
  }

  // kraft - computed: false, optional: true, required: false
  private _kraft = new DataInstaclustrKafkaClusterV2InstanceKraftList(this, "kraft", false);
  public get kraft() {
    return this._kraft;
  }
  public putKraft(value: DataInstaclustrKafkaClusterV2InstanceKraft[] | cdktf.IResolvable) {
    this._kraft.internalValue = value;
  }
  public resetKraft() {
    this._kraft.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kraftInput() {
    return this._kraft.internalValue;
  }

  // resize_settings - computed: false, optional: true, required: false
  private _resizeSettings = new DataInstaclustrKafkaClusterV2InstanceResizeSettingsList(this, "resize_settings", false);
  public get resizeSettings() {
    return this._resizeSettings;
  }
  public putResizeSettings(value: DataInstaclustrKafkaClusterV2InstanceResizeSettings[] | cdktf.IResolvable) {
    this._resizeSettings.internalValue = value;
  }
  public resetResizeSettings() {
    this._resizeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeSettingsInput() {
    return this._resizeSettings.internalValue;
  }

  // rest_proxy - computed: false, optional: true, required: false
  private _restProxy = new DataInstaclustrKafkaClusterV2InstanceRestProxyList(this, "rest_proxy", false);
  public get restProxy() {
    return this._restProxy;
  }
  public putRestProxy(value: DataInstaclustrKafkaClusterV2InstanceRestProxy[] | cdktf.IResolvable) {
    this._restProxy.internalValue = value;
  }
  public resetRestProxy() {
    this._restProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restProxyInput() {
    return this._restProxy.internalValue;
  }

  // schema_registry - computed: false, optional: true, required: false
  private _schemaRegistry = new DataInstaclustrKafkaClusterV2InstanceSchemaRegistryList(this, "schema_registry", false);
  public get schemaRegistry() {
    return this._schemaRegistry;
  }
  public putSchemaRegistry(value: DataInstaclustrKafkaClusterV2InstanceSchemaRegistry[] | cdktf.IResolvable) {
    this._schemaRegistry.internalValue = value;
  }
  public resetSchemaRegistry() {
    this._schemaRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryInput() {
    return this._schemaRegistry.internalValue;
  }

  // tiered_storage - computed: false, optional: true, required: false
  private _tieredStorage = new DataInstaclustrKafkaClusterV2InstanceTieredStorageList(this, "tiered_storage", false);
  public get tieredStorage() {
    return this._tieredStorage;
  }
  public putTieredStorage(value: DataInstaclustrKafkaClusterV2InstanceTieredStorage[] | cdktf.IResolvable) {
    this._tieredStorage.internalValue = value;
  }
  public resetTieredStorage() {
    this._tieredStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieredStorageInput() {
    return this._tieredStorage.internalValue;
  }

  // two_factor_delete - computed: false, optional: true, required: false
  private _twoFactorDelete = new DataInstaclustrKafkaClusterV2InstanceTwoFactorDeleteList(this, "two_factor_delete", false);
  public get twoFactorDelete() {
    return this._twoFactorDelete;
  }
  public putTwoFactorDelete(value: DataInstaclustrKafkaClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable) {
    this._twoFactorDelete.internalValue = value;
  }
  public resetTwoFactorDelete() {
    this._twoFactorDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorDeleteInput() {
    return this._twoFactorDelete.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_delete_topics: cdktf.booleanToTerraform(this._allowDeleteTopics),
      auto_create_topics: cdktf.booleanToTerraform(this._autoCreateTopics),
      bundled_use_only: cdktf.booleanToTerraform(this._bundledUseOnly),
      client_broker_auth_with_mtls: cdktf.booleanToTerraform(this._clientBrokerAuthWithMtls),
      client_to_cluster_encryption: cdktf.booleanToTerraform(this._clientToClusterEncryption),
      current_cluster_operation_status: cdktf.stringToTerraform(this._currentClusterOperationStatus),
      default_number_of_partitions: cdktf.numberToTerraform(this._defaultNumberOfPartitions),
      default_replication_factor: cdktf.numberToTerraform(this._defaultReplicationFactor),
      default_user_password: cdktf.stringToTerraform(this._defaultUserPassword),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kafka_version: cdktf.stringToTerraform(this._kafkaVersion),
      name: cdktf.stringToTerraform(this._name),
      pci_compliance_mode: cdktf.booleanToTerraform(this._pciComplianceMode),
      private_network_cluster: cdktf.booleanToTerraform(this._privateNetworkCluster),
      sla_tier: cdktf.stringToTerraform(this._slaTier),
      status: cdktf.stringToTerraform(this._status),
      collocated_zookeeper: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceCollocatedZookeeperToTerraform, true)(this._collocatedZookeeper.internalValue),
      data_centre: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceDataCentreToTerraform, true)(this._dataCentre.internalValue),
      dedicated_kraft_controller: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceDedicatedKraftControllerToTerraform, true)(this._dedicatedKraftController.internalValue),
      dedicated_zookeeper: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceDedicatedZookeeperToTerraform, true)(this._dedicatedZookeeper.internalValue),
      karapace_rest_proxy: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceKarapaceRestProxyToTerraform, true)(this._karapaceRestProxy.internalValue),
      karapace_schema_registry: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistryToTerraform, true)(this._karapaceSchemaRegistry.internalValue),
      kraft: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceKraftToTerraform, true)(this._kraft.internalValue),
      resize_settings: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceResizeSettingsToTerraform, true)(this._resizeSettings.internalValue),
      rest_proxy: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceRestProxyToTerraform, true)(this._restProxy.internalValue),
      schema_registry: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceSchemaRegistryToTerraform, true)(this._schemaRegistry.internalValue),
      tiered_storage: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceTieredStorageToTerraform, true)(this._tieredStorage.internalValue),
      two_factor_delete: cdktf.listMapper(dataInstaclustrKafkaClusterV2InstanceTwoFactorDeleteToTerraform, true)(this._twoFactorDelete.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_delete_topics: {
        value: cdktf.booleanToHclTerraform(this._allowDeleteTopics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_create_topics: {
        value: cdktf.booleanToHclTerraform(this._autoCreateTopics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundled_use_only: {
        value: cdktf.booleanToHclTerraform(this._bundledUseOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_broker_auth_with_mtls: {
        value: cdktf.booleanToHclTerraform(this._clientBrokerAuthWithMtls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_to_cluster_encryption: {
        value: cdktf.booleanToHclTerraform(this._clientToClusterEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      current_cluster_operation_status: {
        value: cdktf.stringToHclTerraform(this._currentClusterOperationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_number_of_partitions: {
        value: cdktf.numberToHclTerraform(this._defaultNumberOfPartitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_replication_factor: {
        value: cdktf.numberToHclTerraform(this._defaultReplicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_user_password: {
        value: cdktf.stringToHclTerraform(this._defaultUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      kafka_version: {
        value: cdktf.stringToHclTerraform(this._kafkaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pci_compliance_mode: {
        value: cdktf.booleanToHclTerraform(this._pciComplianceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_network_cluster: {
        value: cdktf.booleanToHclTerraform(this._privateNetworkCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sla_tier: {
        value: cdktf.stringToHclTerraform(this._slaTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collocated_zookeeper: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceCollocatedZookeeperToHclTerraform, true)(this._collocatedZookeeper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterV2InstanceCollocatedZookeeperList",
      },
      data_centre: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceDataCentreToHclTerraform, true)(this._dataCentre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterV2InstanceDataCentreList",
      },
      dedicated_kraft_controller: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceDedicatedKraftControllerToHclTerraform, true)(this._dedicatedKraftController.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterV2InstanceDedicatedKraftControllerList",
      },
      dedicated_zookeeper: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceDedicatedZookeeperToHclTerraform, true)(this._dedicatedZookeeper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterV2InstanceDedicatedZookeeperList",
      },
      karapace_rest_proxy: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceKarapaceRestProxyToHclTerraform, true)(this._karapaceRestProxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterV2InstanceKarapaceRestProxyList",
      },
      karapace_schema_registry: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistryToHclTerraform, true)(this._karapaceSchemaRegistry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterV2InstanceKarapaceSchemaRegistryList",
      },
      kraft: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceKraftToHclTerraform, true)(this._kraft.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterV2InstanceKraftList",
      },
      resize_settings: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceResizeSettingsToHclTerraform, true)(this._resizeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterV2InstanceResizeSettingsList",
      },
      rest_proxy: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceRestProxyToHclTerraform, true)(this._restProxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterV2InstanceRestProxyList",
      },
      schema_registry: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceSchemaRegistryToHclTerraform, true)(this._schemaRegistry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterV2InstanceSchemaRegistryList",
      },
      tiered_storage: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceTieredStorageToHclTerraform, true)(this._tieredStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterV2InstanceTieredStorageList",
      },
      two_factor_delete: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaClusterV2InstanceTwoFactorDeleteToHclTerraform, true)(this._twoFactorDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaClusterV2InstanceTwoFactorDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
