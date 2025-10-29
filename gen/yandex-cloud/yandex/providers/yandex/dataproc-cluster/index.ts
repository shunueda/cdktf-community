// https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Service account to be used for managing hosts in an autoscaled subcluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#autoscaling_service_account_id DataprocCluster#autoscaling_service_account_id}
  */
  readonly autoscalingServiceAccountId?: string;
  /**
  * Name of the Object Storage bucket to use for Yandex Data Processing jobs. Yandex Data Processing Agent saves output of job driver's process to specified bucket. In order for this to work service account (specified by the `service_account_id` argument) should be given permission to create objects within this bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#bucket DataprocCluster#bucket}
  */
  readonly bucket?: string;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#deletion_protection DataprocCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#description DataprocCluster#description}
  */
  readonly description?: string;
  /**
  * Deployment environment of the cluster. Can be either `PRESTABLE` or `PRODUCTION`. The default is `PRESTABLE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#environment DataprocCluster#environment}
  */
  readonly environment?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#folder_id DataprocCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * A list of host group IDs to place VMs of the cluster on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#host_group_ids DataprocCluster#host_group_ids}
  */
  readonly hostGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#id DataprocCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#labels DataprocCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * ID of the cloud logging group for cluster logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#log_group_id DataprocCluster#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#name DataprocCluster#name}
  */
  readonly name: string;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#security_group_ids DataprocCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Service account to be used by the Yandex Data Processing agent to access resources of Yandex Cloud. Selected service account should have `mdb.dataproc.agent` role on the folder where the Yandex Data Processing cluster will be located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#service_account_id DataprocCluster#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Whether to enable UI Proxy feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#ui_proxy DataprocCluster#ui_proxy}
  */
  readonly uiProxy?: boolean | cdktf.IResolvable;
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#zone_id DataprocCluster#zone_id}
  */
  readonly zoneId?: string;
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#cluster_config DataprocCluster#cluster_config}
  */
  readonly clusterConfig: DataprocClusterClusterConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#timeouts DataprocCluster#timeouts}
  */
  readonly timeouts?: DataprocClusterTimeouts;
}
export interface DataprocClusterClusterConfigHadoopInitializationAction {
  /**
  * List of arguments of the initialization script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#args DataprocCluster#args}
  */
  readonly args?: string[];
  /**
  * Script execution timeout, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#timeout DataprocCluster#timeout}
  */
  readonly timeout?: string;
  /**
  * Script URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#uri DataprocCluster#uri}
  */
  readonly uri: string;
}

export function dataprocClusterClusterConfigHadoopInitializationActionToTerraform(struct?: DataprocClusterClusterConfigHadoopInitializationAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataprocClusterClusterConfigHadoopInitializationActionToHclTerraform(struct?: DataprocClusterClusterConfigHadoopInitializationAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigHadoopInitializationActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigHadoopInitializationAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigHadoopInitializationAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._timeout = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._timeout = value.timeout;
      this._uri = value.uri;
    }
  }

  // args - computed: true, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class DataprocClusterClusterConfigHadoopInitializationActionList extends cdktf.ComplexList {
  public internalValue? : DataprocClusterClusterConfigHadoopInitializationAction[] | cdktf.IResolvable

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
  public get(index: number): DataprocClusterClusterConfigHadoopInitializationActionOutputReference {
    return new DataprocClusterClusterConfigHadoopInitializationActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigHadoop {
  /**
  * Whether to enable authorization via OS Login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#oslogin DataprocCluster#oslogin}
  */
  readonly oslogin?: boolean | cdktf.IResolvable;
  /**
  * A set of key/value pairs that are used to configure cluster services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#properties DataprocCluster#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * List of services to run on Yandex Data Processing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#services DataprocCluster#services}
  */
  readonly services?: string[];
  /**
  * List of SSH public keys to put to the hosts of the cluster. For information on how to connect to the cluster, see [the official documentation](https://yandex.cloud/docs/data-proc/operations/connect).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#ssh_public_keys DataprocCluster#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * initialization_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#initialization_action DataprocCluster#initialization_action}
  */
  readonly initializationAction?: DataprocClusterClusterConfigHadoopInitializationAction[] | cdktf.IResolvable;
}

export function dataprocClusterClusterConfigHadoopToTerraform(struct?: DataprocClusterClusterConfigHadoopOutputReference | DataprocClusterClusterConfigHadoop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oslogin: cdktf.booleanToTerraform(struct!.oslogin),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshPublicKeys),
    initialization_action: cdktf.listMapper(dataprocClusterClusterConfigHadoopInitializationActionToTerraform, true)(struct!.initializationAction),
  }
}


export function dataprocClusterClusterConfigHadoopToHclTerraform(struct?: DataprocClusterClusterConfigHadoopOutputReference | DataprocClusterClusterConfigHadoop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oslogin: {
      value: cdktf.booleanToHclTerraform(struct!.oslogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ssh_public_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshPublicKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    initialization_action: {
      value: cdktf.listMapperHcl(dataprocClusterClusterConfigHadoopInitializationActionToHclTerraform, true)(struct!.initializationAction),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigHadoopInitializationActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigHadoopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigHadoop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oslogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.oslogin = this._oslogin;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._initializationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializationAction = this._initializationAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigHadoop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oslogin = undefined;
      this._properties = undefined;
      this._services = undefined;
      this._sshPublicKeys = undefined;
      this._initializationAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oslogin = value.oslogin;
      this._properties = value.properties;
      this._services = value.services;
      this._sshPublicKeys = value.sshPublicKeys;
      this._initializationAction.internalValue = value.initializationAction;
    }
  }

  // oslogin - computed: false, optional: true, required: false
  private _oslogin?: boolean | cdktf.IResolvable; 
  public get oslogin() {
    return this.getBooleanAttribute('oslogin');
  }
  public set oslogin(value: boolean | cdktf.IResolvable) {
    this._oslogin = value;
  }
  public resetOslogin() {
    this._oslogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osloginInput() {
    return this._oslogin;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // ssh_public_keys - computed: false, optional: true, required: false
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_public_keys'));
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // initialization_action - computed: false, optional: true, required: false
  private _initializationAction = new DataprocClusterClusterConfigHadoopInitializationActionList(this, "initialization_action", false);
  public get initializationAction() {
    return this._initializationAction;
  }
  public putInitializationAction(value: DataprocClusterClusterConfigHadoopInitializationAction[] | cdktf.IResolvable) {
    this._initializationAction.internalValue = value;
  }
  public resetInitializationAction() {
    this._initializationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationActionInput() {
    return this._initializationAction.internalValue;
  }
}
export interface DataprocClusterClusterConfigSubclusterSpecAutoscalingConfig {
  /**
  * Defines an autoscaling rule based on the average CPU utilization of the instance group. If not set default autoscaling metric will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#cpu_utilization_target DataprocCluster#cpu_utilization_target}
  */
  readonly cpuUtilizationTarget?: string;
  /**
  * Timeout to gracefully decommission nodes during downscaling. In seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#decommission_timeout DataprocCluster#decommission_timeout}
  */
  readonly decommissionTimeout?: string;
  /**
  * Maximum number of nodes in autoscaling subclusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#max_hosts_count DataprocCluster#max_hosts_count}
  */
  readonly maxHostsCount: number;
  /**
  * Time in seconds allotted for averaging metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#measurement_duration DataprocCluster#measurement_duration}
  */
  readonly measurementDuration?: string;
  /**
  * Use preemptible compute instances. Preemptible instances are stopped at least once every 24 hours, and can be stopped at any time if their resources are needed by Compute. For more information, see [Preemptible Virtual Machines](https://yandex.cloud/docs/compute/concepts/preemptible-vm).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#preemptible DataprocCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * Minimum amount of time in seconds allotted for monitoring before Instance Groups can reduce the number of instances in the group. During this time, the group size doesn't decrease, even if the new metric values indicate that it should.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#stabilization_duration DataprocCluster#stabilization_duration}
  */
  readonly stabilizationDuration?: string;
  /**
  * The warmup time of the instance in seconds. During this time, traffic is sent to the instance, but instance metrics are not collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#warmup_duration DataprocCluster#warmup_duration}
  */
  readonly warmupDuration?: string;
}

export function dataprocClusterClusterConfigSubclusterSpecAutoscalingConfigToTerraform(struct?: DataprocClusterClusterConfigSubclusterSpecAutoscalingConfigOutputReference | DataprocClusterClusterConfigSubclusterSpecAutoscalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_utilization_target: cdktf.stringToTerraform(struct!.cpuUtilizationTarget),
    decommission_timeout: cdktf.stringToTerraform(struct!.decommissionTimeout),
    max_hosts_count: cdktf.numberToTerraform(struct!.maxHostsCount),
    measurement_duration: cdktf.stringToTerraform(struct!.measurementDuration),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    stabilization_duration: cdktf.stringToTerraform(struct!.stabilizationDuration),
    warmup_duration: cdktf.stringToTerraform(struct!.warmupDuration),
  }
}


export function dataprocClusterClusterConfigSubclusterSpecAutoscalingConfigToHclTerraform(struct?: DataprocClusterClusterConfigSubclusterSpecAutoscalingConfigOutputReference | DataprocClusterClusterConfigSubclusterSpecAutoscalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_utilization_target: {
      value: cdktf.stringToHclTerraform(struct!.cpuUtilizationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decommission_timeout: {
      value: cdktf.stringToHclTerraform(struct!.decommissionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_hosts_count: {
      value: cdktf.numberToHclTerraform(struct!.maxHostsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    measurement_duration: {
      value: cdktf.stringToHclTerraform(struct!.measurementDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stabilization_duration: {
      value: cdktf.stringToHclTerraform(struct!.stabilizationDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warmup_duration: {
      value: cdktf.stringToHclTerraform(struct!.warmupDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigSubclusterSpecAutoscalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigSubclusterSpecAutoscalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuUtilizationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUtilizationTarget = this._cpuUtilizationTarget;
    }
    if (this._decommissionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.decommissionTimeout = this._decommissionTimeout;
    }
    if (this._maxHostsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHostsCount = this._maxHostsCount;
    }
    if (this._measurementDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.measurementDuration = this._measurementDuration;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._stabilizationDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizationDuration = this._stabilizationDuration;
    }
    if (this._warmupDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmupDuration = this._warmupDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigSubclusterSpecAutoscalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuUtilizationTarget = undefined;
      this._decommissionTimeout = undefined;
      this._maxHostsCount = undefined;
      this._measurementDuration = undefined;
      this._preemptible = undefined;
      this._stabilizationDuration = undefined;
      this._warmupDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuUtilizationTarget = value.cpuUtilizationTarget;
      this._decommissionTimeout = value.decommissionTimeout;
      this._maxHostsCount = value.maxHostsCount;
      this._measurementDuration = value.measurementDuration;
      this._preemptible = value.preemptible;
      this._stabilizationDuration = value.stabilizationDuration;
      this._warmupDuration = value.warmupDuration;
    }
  }

  // cpu_utilization_target - computed: true, optional: true, required: false
  private _cpuUtilizationTarget?: string; 
  public get cpuUtilizationTarget() {
    return this.getStringAttribute('cpu_utilization_target');
  }
  public set cpuUtilizationTarget(value: string) {
    this._cpuUtilizationTarget = value;
  }
  public resetCpuUtilizationTarget() {
    this._cpuUtilizationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUtilizationTargetInput() {
    return this._cpuUtilizationTarget;
  }

  // decommission_timeout - computed: true, optional: true, required: false
  private _decommissionTimeout?: string; 
  public get decommissionTimeout() {
    return this.getStringAttribute('decommission_timeout');
  }
  public set decommissionTimeout(value: string) {
    this._decommissionTimeout = value;
  }
  public resetDecommissionTimeout() {
    this._decommissionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decommissionTimeoutInput() {
    return this._decommissionTimeout;
  }

  // max_hosts_count - computed: false, optional: false, required: true
  private _maxHostsCount?: number; 
  public get maxHostsCount() {
    return this.getNumberAttribute('max_hosts_count');
  }
  public set maxHostsCount(value: number) {
    this._maxHostsCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHostsCountInput() {
    return this._maxHostsCount;
  }

  // measurement_duration - computed: true, optional: true, required: false
  private _measurementDuration?: string; 
  public get measurementDuration() {
    return this.getStringAttribute('measurement_duration');
  }
  public set measurementDuration(value: string) {
    this._measurementDuration = value;
  }
  public resetMeasurementDuration() {
    this._measurementDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measurementDurationInput() {
    return this._measurementDuration;
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // stabilization_duration - computed: true, optional: true, required: false
  private _stabilizationDuration?: string; 
  public get stabilizationDuration() {
    return this.getStringAttribute('stabilization_duration');
  }
  public set stabilizationDuration(value: string) {
    this._stabilizationDuration = value;
  }
  public resetStabilizationDuration() {
    this._stabilizationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizationDurationInput() {
    return this._stabilizationDuration;
  }

  // warmup_duration - computed: true, optional: true, required: false
  private _warmupDuration?: string; 
  public get warmupDuration() {
    return this.getStringAttribute('warmup_duration');
  }
  public set warmupDuration(value: string) {
    this._warmupDuration = value;
  }
  public resetWarmupDuration() {
    this._warmupDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmupDurationInput() {
    return this._warmupDuration;
  }
}
export interface DataprocClusterClusterConfigSubclusterSpecResources {
  /**
  * Volume of the storage available to a host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#disk_size DataprocCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Type of the storage of a host. One of `network-hdd` (default) or `network-ssd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#disk_type_id DataprocCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * The ID of the preset for computational resources available to a host. All available presets are listed in the [documentation](https://yandex.cloud/docs/data-proc/concepts/instance-types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#resource_preset_id DataprocCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function dataprocClusterClusterConfigSubclusterSpecResourcesToTerraform(struct?: DataprocClusterClusterConfigSubclusterSpecResourcesOutputReference | DataprocClusterClusterConfigSubclusterSpecResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function dataprocClusterClusterConfigSubclusterSpecResourcesToHclTerraform(struct?: DataprocClusterClusterConfigSubclusterSpecResourcesOutputReference | DataprocClusterClusterConfigSubclusterSpecResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type_id: {
      value: cdktf.stringToHclTerraform(struct!.diskTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigSubclusterSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigSubclusterSpecResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigSubclusterSpecResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: false, optional: true, required: false
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  public resetDiskTypeId() {
    this._diskTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface DataprocClusterClusterConfigSubclusterSpec {
  /**
  * If `true` then assign public IP addresses to the hosts of the subclusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#assign_public_ip DataprocCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Number of hosts within Yandex Data Processing subcluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#hosts_count DataprocCluster#hosts_count}
  */
  readonly hostsCount: number;
  /**
  * Name of the Yandex Data Processing subcluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#name DataprocCluster#name}
  */
  readonly name: string;
  /**
  * Role of the subcluster in the Yandex Data Processing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#role DataprocCluster#role}
  */
  readonly role: string;
  /**
  * The ID of the subnet, to which hosts of the subcluster belong. Subnets of all the subclusters must belong to the same VPC network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#subnet_id DataprocCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * autoscaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#autoscaling_config DataprocCluster#autoscaling_config}
  */
  readonly autoscalingConfig?: DataprocClusterClusterConfigSubclusterSpecAutoscalingConfig;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#resources DataprocCluster#resources}
  */
  readonly resources: DataprocClusterClusterConfigSubclusterSpecResources;
}

export function dataprocClusterClusterConfigSubclusterSpecToTerraform(struct?: DataprocClusterClusterConfigSubclusterSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    hosts_count: cdktf.numberToTerraform(struct!.hostsCount),
    name: cdktf.stringToTerraform(struct!.name),
    role: cdktf.stringToTerraform(struct!.role),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    autoscaling_config: dataprocClusterClusterConfigSubclusterSpecAutoscalingConfigToTerraform(struct!.autoscalingConfig),
    resources: dataprocClusterClusterConfigSubclusterSpecResourcesToTerraform(struct!.resources),
  }
}


export function dataprocClusterClusterConfigSubclusterSpecToHclTerraform(struct?: DataprocClusterClusterConfigSubclusterSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hosts_count: {
      value: cdktf.numberToHclTerraform(struct!.hostsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling_config: {
      value: dataprocClusterClusterConfigSubclusterSpecAutoscalingConfigToHclTerraform(struct!.autoscalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigSubclusterSpecAutoscalingConfigList",
    },
    resources: {
      value: dataprocClusterClusterConfigSubclusterSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigSubclusterSpecResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigSubclusterSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigSubclusterSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._hostsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostsCount = this._hostsCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._autoscalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingConfig = this._autoscalingConfig?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigSubclusterSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._hostsCount = undefined;
      this._name = undefined;
      this._role = undefined;
      this._subnetId = undefined;
      this._autoscalingConfig.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignPublicIp = value.assignPublicIp;
      this._hostsCount = value.hostsCount;
      this._name = value.name;
      this._role = value.role;
      this._subnetId = value.subnetId;
      this._autoscalingConfig.internalValue = value.autoscalingConfig;
      this._resources.internalValue = value.resources;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // hosts_count - computed: false, optional: false, required: true
  private _hostsCount?: number; 
  public get hostsCount() {
    return this.getNumberAttribute('hosts_count');
  }
  public set hostsCount(value: number) {
    this._hostsCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsCountInput() {
    return this._hostsCount;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // autoscaling_config - computed: false, optional: true, required: false
  private _autoscalingConfig = new DataprocClusterClusterConfigSubclusterSpecAutoscalingConfigOutputReference(this, "autoscaling_config");
  public get autoscalingConfig() {
    return this._autoscalingConfig;
  }
  public putAutoscalingConfig(value: DataprocClusterClusterConfigSubclusterSpecAutoscalingConfig) {
    this._autoscalingConfig.internalValue = value;
  }
  public resetAutoscalingConfig() {
    this._autoscalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingConfigInput() {
    return this._autoscalingConfig.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new DataprocClusterClusterConfigSubclusterSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataprocClusterClusterConfigSubclusterSpecResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataprocClusterClusterConfigSubclusterSpecList extends cdktf.ComplexList {
  public internalValue? : DataprocClusterClusterConfigSubclusterSpec[] | cdktf.IResolvable

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
  public get(index: number): DataprocClusterClusterConfigSubclusterSpecOutputReference {
    return new DataprocClusterClusterConfigSubclusterSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfig {
  /**
  * Version of Yandex Data Processing image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#version_id DataprocCluster#version_id}
  */
  readonly versionId?: string;
  /**
  * hadoop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#hadoop DataprocCluster#hadoop}
  */
  readonly hadoop?: DataprocClusterClusterConfigHadoop;
  /**
  * subcluster_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#subcluster_spec DataprocCluster#subcluster_spec}
  */
  readonly subclusterSpec: DataprocClusterClusterConfigSubclusterSpec[] | cdktf.IResolvable;
}

export function dataprocClusterClusterConfigToTerraform(struct?: DataprocClusterClusterConfigOutputReference | DataprocClusterClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version_id: cdktf.stringToTerraform(struct!.versionId),
    hadoop: dataprocClusterClusterConfigHadoopToTerraform(struct!.hadoop),
    subcluster_spec: cdktf.listMapper(dataprocClusterClusterConfigSubclusterSpecToTerraform, true)(struct!.subclusterSpec),
  }
}


export function dataprocClusterClusterConfigToHclTerraform(struct?: DataprocClusterClusterConfigOutputReference | DataprocClusterClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version_id: {
      value: cdktf.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hadoop: {
      value: dataprocClusterClusterConfigHadoopToHclTerraform(struct!.hadoop),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigHadoopList",
    },
    subcluster_spec: {
      value: cdktf.listMapperHcl(dataprocClusterClusterConfigSubclusterSpecToHclTerraform, true)(struct!.subclusterSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigSubclusterSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._hadoop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hadoop = this._hadoop?.internalValue;
    }
    if (this._subclusterSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subclusterSpec = this._subclusterSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._versionId = undefined;
      this._hadoop.internalValue = undefined;
      this._subclusterSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._versionId = value.versionId;
      this._hadoop.internalValue = value.hadoop;
      this._subclusterSpec.internalValue = value.subclusterSpec;
    }
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // hadoop - computed: false, optional: true, required: false
  private _hadoop = new DataprocClusterClusterConfigHadoopOutputReference(this, "hadoop");
  public get hadoop() {
    return this._hadoop;
  }
  public putHadoop(value: DataprocClusterClusterConfigHadoop) {
    this._hadoop.internalValue = value;
  }
  public resetHadoop() {
    this._hadoop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hadoopInput() {
    return this._hadoop.internalValue;
  }

  // subcluster_spec - computed: false, optional: false, required: true
  private _subclusterSpec = new DataprocClusterClusterConfigSubclusterSpecList(this, "subcluster_spec", false);
  public get subclusterSpec() {
    return this._subclusterSpec;
  }
  public putSubclusterSpec(value: DataprocClusterClusterConfigSubclusterSpec[] | cdktf.IResolvable) {
    this._subclusterSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subclusterSpecInput() {
    return this._subclusterSpec.internalValue;
  }
}
export interface DataprocClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#create DataprocCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#delete DataprocCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#update DataprocCluster#update}
  */
  readonly update?: string;
}

export function dataprocClusterTimeoutsToTerraform(struct?: DataprocClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataprocClusterTimeoutsToHclTerraform(struct?: DataprocClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataprocClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster yandex_dataproc_cluster}
*/
export class DataprocCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_dataproc_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataprocCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataprocCluster to import
  * @param importFromId The id of the existing DataprocCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataprocCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_dataproc_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/dataproc_cluster yandex_dataproc_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_dataproc_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.168.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoscalingServiceAccountId = config.autoscalingServiceAccountId;
    this._bucket = config.bucket;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._hostGroupIds = config.hostGroupIds;
    this._id = config.id;
    this._labels = config.labels;
    this._logGroupId = config.logGroupId;
    this._name = config.name;
    this._securityGroupIds = config.securityGroupIds;
    this._serviceAccountId = config.serviceAccountId;
    this._uiProxy = config.uiProxy;
    this._zoneId = config.zoneId;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling_service_account_id - computed: false, optional: true, required: false
  private _autoscalingServiceAccountId?: string; 
  public get autoscalingServiceAccountId() {
    return this.getStringAttribute('autoscaling_service_account_id');
  }
  public set autoscalingServiceAccountId(value: string) {
    this._autoscalingServiceAccountId = value;
  }
  public resetAutoscalingServiceAccountId() {
    this._autoscalingServiceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingServiceAccountIdInput() {
    return this._autoscalingServiceAccountId;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // description - computed: false, optional: true, required: false
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

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // host_group_ids - computed: false, optional: true, required: false
  private _hostGroupIds?: string[]; 
  public get hostGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_group_ids'));
  }
  public set hostGroupIds(value: string[]) {
    this._hostGroupIds = value;
  }
  public resetHostGroupIds() {
    this._hostGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdsInput() {
    return this._hostGroupIds;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // log_group_id - computed: false, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // security_group_ids - computed: false, optional: true, required: false
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

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // ui_proxy - computed: false, optional: true, required: false
  private _uiProxy?: boolean | cdktf.IResolvable; 
  public get uiProxy() {
    return this.getBooleanAttribute('ui_proxy');
  }
  public set uiProxy(value: boolean | cdktf.IResolvable) {
    this._uiProxy = value;
  }
  public resetUiProxy() {
    this._uiProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiProxyInput() {
    return this._uiProxy;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new DataprocClusterClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataprocClusterClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataprocClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataprocClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_service_account_id: cdktf.stringToTerraform(this._autoscalingServiceAccountId),
      bucket: cdktf.stringToTerraform(this._bucket),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroupIds),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      log_group_id: cdktf.stringToTerraform(this._logGroupId),
      name: cdktf.stringToTerraform(this._name),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      ui_proxy: cdktf.booleanToTerraform(this._uiProxy),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      cluster_config: dataprocClusterClusterConfigToTerraform(this._clusterConfig.internalValue),
      timeouts: dataprocClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoscaling_service_account_id: {
        value: cdktf.stringToHclTerraform(this._autoscalingServiceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      log_group_id: {
        value: cdktf.stringToHclTerraform(this._logGroupId),
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
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ui_proxy: {
        value: cdktf.booleanToHclTerraform(this._uiProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_config: {
        value: dataprocClusterClusterConfigToHclTerraform(this._clusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocClusterClusterConfigList",
      },
      timeouts: {
        value: dataprocClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataprocClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
