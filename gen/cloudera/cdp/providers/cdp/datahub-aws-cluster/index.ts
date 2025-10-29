// https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatahubAwsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the cluster definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#cluster_definition DatahubAwsCluster#cluster_definition}
  */
  readonly clusterDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#cluster_extension DatahubAwsCluster#cluster_extension}
  */
  readonly clusterExtension?: DatahubAwsClusterClusterExtension;
  /**
  * The name of the cluster template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#cluster_template DatahubAwsCluster#cluster_template}
  */
  readonly clusterTemplate?: string;
  /**
  * The name of the custom configurations to use for cluster creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#custom_configurations_name DatahubAwsCluster#custom_configurations_name}
  */
  readonly customConfigurationsName?: string;
  /**
  * Database type for datahub. Currently supported values: NONE, NON_HA, HA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#datahub_database DatahubAwsCluster#datahub_database}
  */
  readonly datahubDatabase?: string;
  /**
  * Cluster deletion options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#destroy_options DatahubAwsCluster#destroy_options}
  */
  readonly destroyOptions?: DatahubAwsClusterDestroyOptions;
  /**
  * Flag that decides whether to provision a load-balancer to front var- ious service endpoints for the given datahub. This will typically be used for HA cluster shapes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#enable_load_balancer DatahubAwsCluster#enable_load_balancer}
  */
  readonly enableLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * The name of the environment where the cluster will belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#environment DatahubAwsCluster#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#image DatahubAwsCluster#image}
  */
  readonly image?: DatahubAwsClusterImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#instance_group DatahubAwsCluster#instance_group}
  */
  readonly instanceGroup?: DatahubAwsClusterInstanceGroup[] | cdktf.IResolvable;
  /**
  * Configure the major version of Java on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#java_version DatahubAwsCluster#java_version}
  */
  readonly javaVersion?: number;
  /**
  * Flag  that toggles the multi availability zone for the given datahub cluster when you are not sure what subnet IDs can be used. This  way the subnet IDs will be used what the environment suggests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#multi_az DatahubAwsCluster#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * The name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#name DatahubAwsCluster#name}
  */
  readonly name: string;
  /**
  * Polling related configuration options that could specify various values that will be used during CDP resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#polling_options DatahubAwsCluster#polling_options}
  */
  readonly pollingOptions?: DatahubAwsClusterPollingOptions;
  /**
  * JSON  template  to  use for cluster creation. This is different from cluster template and would be removed in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#request_template DatahubAwsCluster#request_template}
  */
  readonly requestTemplate?: string;
  /**
  * The subnet id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#subnet_id DatahubAwsCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The subnet ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#subnet_ids DatahubAwsCluster#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#tags DatahubAwsCluster#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DatahubAwsClusterClusterExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#custom_properties DatahubAwsCluster#custom_properties}
  */
  readonly customProperties?: string;
}

export function datahubAwsClusterClusterExtensionToTerraform(struct?: DatahubAwsClusterClusterExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_properties: cdktf.stringToTerraform(struct!.customProperties),
  }
}


export function datahubAwsClusterClusterExtensionToHclTerraform(struct?: DatahubAwsClusterClusterExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_properties: {
      value: cdktf.stringToHclTerraform(struct!.customProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubAwsClusterClusterExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatahubAwsClusterClusterExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubAwsClusterClusterExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customProperties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customProperties = value.customProperties;
    }
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties?: string; 
  public get customProperties() {
    return this.getStringAttribute('custom_properties');
  }
  public set customProperties(value: string) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
  }
}
export interface DatahubAwsClusterDestroyOptions {
  /**
  * An indicator that will take place once the cluster termination will be performed. If it is true, that means if something would go sideways during termination, the operation will proceed, however in such a case no notification would come thus it is advisable to check the cloud provider if there are no leftover resources once the destroy is finished.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#force_delete_cluster DatahubAwsCluster#force_delete_cluster}
  */
  readonly forceDeleteCluster?: boolean | cdktf.IResolvable;
}

export function datahubAwsClusterDestroyOptionsToTerraform(struct?: DatahubAwsClusterDestroyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_delete_cluster: cdktf.booleanToTerraform(struct!.forceDeleteCluster),
  }
}


export function datahubAwsClusterDestroyOptionsToHclTerraform(struct?: DatahubAwsClusterDestroyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_delete_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.forceDeleteCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubAwsClusterDestroyOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatahubAwsClusterDestroyOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceDeleteCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceDeleteCluster = this._forceDeleteCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubAwsClusterDestroyOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceDeleteCluster = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceDeleteCluster = value.forceDeleteCluster;
    }
  }

  // force_delete_cluster - computed: true, optional: true, required: false
  private _forceDeleteCluster?: boolean | cdktf.IResolvable; 
  public get forceDeleteCluster() {
    return this.getBooleanAttribute('force_delete_cluster');
  }
  public set forceDeleteCluster(value: boolean | cdktf.IResolvable) {
    this._forceDeleteCluster = value;
  }
  public resetForceDeleteCluster() {
    this._forceDeleteCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteClusterInput() {
    return this._forceDeleteCluster;
  }
}
export interface DatahubAwsClusterImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#catalog DatahubAwsCluster#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#id DatahubAwsCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#os DatahubAwsCluster#os}
  */
  readonly os?: string;
}

export function datahubAwsClusterImageToTerraform(struct?: DatahubAwsClusterImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    id: cdktf.stringToTerraform(struct!.id),
    os: cdktf.stringToTerraform(struct!.os),
  }
}


export function datahubAwsClusterImageToHclTerraform(struct?: DatahubAwsClusterImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
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
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubAwsClusterImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatahubAwsClusterImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubAwsClusterImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._id = undefined;
      this._os = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._id = value.id;
      this._os = value.os;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
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

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }
}
export interface DatahubAwsClusterInstanceGroupAttachedVolumeConfiguration {
  /**
  * The number of volumes to be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#volume_count DatahubAwsCluster#volume_count}
  */
  readonly volumeCount: number;
  /**
  * The size of the volume in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#volume_size DatahubAwsCluster#volume_size}
  */
  readonly volumeSize: number;
  /**
  * The - cloud provider - type of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#volume_type DatahubAwsCluster#volume_type}
  */
  readonly volumeType: string;
}

export function datahubAwsClusterInstanceGroupAttachedVolumeConfigurationToTerraform(struct?: DatahubAwsClusterInstanceGroupAttachedVolumeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_count: cdktf.numberToTerraform(struct!.volumeCount),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function datahubAwsClusterInstanceGroupAttachedVolumeConfigurationToHclTerraform(struct?: DatahubAwsClusterInstanceGroupAttachedVolumeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_count: {
      value: cdktf.numberToHclTerraform(struct!.volumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubAwsClusterInstanceGroupAttachedVolumeConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatahubAwsClusterInstanceGroupAttachedVolumeConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeCount = this._volumeCount;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubAwsClusterInstanceGroupAttachedVolumeConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeCount = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeCount = value.volumeCount;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // volume_count - computed: false, optional: false, required: true
  private _volumeCount?: number; 
  public get volumeCount() {
    return this.getNumberAttribute('volume_count');
  }
  public set volumeCount(value: number) {
    this._volumeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeCountInput() {
    return this._volumeCount;
  }

  // volume_size - computed: false, optional: false, required: true
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class DatahubAwsClusterInstanceGroupAttachedVolumeConfigurationList extends cdktf.ComplexList {
  public internalValue? : DatahubAwsClusterInstanceGroupAttachedVolumeConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DatahubAwsClusterInstanceGroupAttachedVolumeConfigurationOutputReference {
    return new DatahubAwsClusterInstanceGroupAttachedVolumeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatahubAwsClusterInstanceGroupVolumeEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#encryption DatahubAwsCluster#encryption}
  */
  readonly encryption: boolean | cdktf.IResolvable;
}

export function datahubAwsClusterInstanceGroupVolumeEncryptionToTerraform(struct?: DatahubAwsClusterInstanceGroupVolumeEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.booleanToTerraform(struct!.encryption),
  }
}


export function datahubAwsClusterInstanceGroupVolumeEncryptionToHclTerraform(struct?: DatahubAwsClusterInstanceGroupVolumeEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubAwsClusterInstanceGroupVolumeEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatahubAwsClusterInstanceGroupVolumeEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubAwsClusterInstanceGroupVolumeEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption = value.encryption;
    }
  }

  // encryption - computed: false, optional: false, required: true
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }
}
export interface DatahubAwsClusterInstanceGroup {
  /**
  * Configuration regarding the attached volume to the specific instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#attached_volume_configuration DatahubAwsCluster#attached_volume_configuration}
  */
  readonly attachedVolumeConfiguration: DatahubAwsClusterInstanceGroupAttachedVolumeConfiguration[] | cdktf.IResolvable;
  /**
  * The set of availability zones that are going to be used for cluster creation on the given instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#availability_zones DatahubAwsCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * The name of the instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#instance_group_name DatahubAwsCluster#instance_group_name}
  */
  readonly instanceGroupName: string;
  /**
  * The type of the instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#instance_group_type DatahubAwsCluster#instance_group_type}
  */
  readonly instanceGroupType: string;
  /**
  * The cloud provider-side instance type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#instance_type DatahubAwsCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * The cluster node count. Has to be greater or equal than 0 and less than 100,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#node_count DatahubAwsCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * The set of recipe names that are going to be applied on the given instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#recipes DatahubAwsCluster#recipes}
  */
  readonly recipes?: string[];
  /**
  * The type of the recovery mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#recovery_mode DatahubAwsCluster#recovery_mode}
  */
  readonly recoveryMode: string;
  /**
  * The size of the root volume in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#root_volume_size DatahubAwsCluster#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * The volume encryption related configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#volume_encryption DatahubAwsCluster#volume_encryption}
  */
  readonly volumeEncryption: DatahubAwsClusterInstanceGroupVolumeEncryption;
}

export function datahubAwsClusterInstanceGroupToTerraform(struct?: DatahubAwsClusterInstanceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attached_volume_configuration: cdktf.listMapper(datahubAwsClusterInstanceGroupAttachedVolumeConfigurationToTerraform, false)(struct!.attachedVolumeConfiguration),
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    instance_group_name: cdktf.stringToTerraform(struct!.instanceGroupName),
    instance_group_type: cdktf.stringToTerraform(struct!.instanceGroupType),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipes),
    recovery_mode: cdktf.stringToTerraform(struct!.recoveryMode),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    volume_encryption: datahubAwsClusterInstanceGroupVolumeEncryptionToTerraform(struct!.volumeEncryption),
  }
}


export function datahubAwsClusterInstanceGroupToHclTerraform(struct?: DatahubAwsClusterInstanceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attached_volume_configuration: {
      value: cdktf.listMapperHcl(datahubAwsClusterInstanceGroupAttachedVolumeConfigurationToHclTerraform, false)(struct!.attachedVolumeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DatahubAwsClusterInstanceGroupAttachedVolumeConfigurationList",
    },
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_group_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_group_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recipes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    recovery_mode: {
      value: cdktf.stringToHclTerraform(struct!.recoveryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.rootVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_encryption: {
      value: datahubAwsClusterInstanceGroupVolumeEncryptionToHclTerraform(struct!.volumeEncryption),
      isBlock: true,
      type: "struct",
      storageClassType: "DatahubAwsClusterInstanceGroupVolumeEncryption",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubAwsClusterInstanceGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatahubAwsClusterInstanceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachedVolumeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachedVolumeConfiguration = this._attachedVolumeConfiguration?.internalValue;
    }
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._instanceGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupType = this._instanceGroupType;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._recipes !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipes = this._recipes;
    }
    if (this._recoveryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryMode = this._recoveryMode;
    }
    if (this._rootVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeSize = this._rootVolumeSize;
    }
    if (this._volumeEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeEncryption = this._volumeEncryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubAwsClusterInstanceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachedVolumeConfiguration.internalValue = undefined;
      this._availabilityZones = undefined;
      this._instanceGroupName = undefined;
      this._instanceGroupType = undefined;
      this._instanceType = undefined;
      this._nodeCount = undefined;
      this._recipes = undefined;
      this._recoveryMode = undefined;
      this._rootVolumeSize = undefined;
      this._volumeEncryption.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachedVolumeConfiguration.internalValue = value.attachedVolumeConfiguration;
      this._availabilityZones = value.availabilityZones;
      this._instanceGroupName = value.instanceGroupName;
      this._instanceGroupType = value.instanceGroupType;
      this._instanceType = value.instanceType;
      this._nodeCount = value.nodeCount;
      this._recipes = value.recipes;
      this._recoveryMode = value.recoveryMode;
      this._rootVolumeSize = value.rootVolumeSize;
      this._volumeEncryption.internalValue = value.volumeEncryption;
    }
  }

  // attached_volume_configuration - computed: false, optional: false, required: true
  private _attachedVolumeConfiguration = new DatahubAwsClusterInstanceGroupAttachedVolumeConfigurationList(this, "attached_volume_configuration", false);
  public get attachedVolumeConfiguration() {
    return this._attachedVolumeConfiguration;
  }
  public putAttachedVolumeConfiguration(value: DatahubAwsClusterInstanceGroupAttachedVolumeConfiguration[] | cdktf.IResolvable) {
    this._attachedVolumeConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedVolumeConfigurationInput() {
    return this._attachedVolumeConfiguration.internalValue;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // instance_group_name - computed: false, optional: false, required: true
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // instance_group_type - computed: false, optional: false, required: true
  private _instanceGroupType?: string; 
  public get instanceGroupType() {
    return this.getStringAttribute('instance_group_type');
  }
  public set instanceGroupType(value: string) {
    this._instanceGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupTypeInput() {
    return this._instanceGroupType;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // recipes - computed: false, optional: true, required: false
  private _recipes?: string[]; 
  public get recipes() {
    return cdktf.Fn.tolist(this.getListAttribute('recipes'));
  }
  public set recipes(value: string[]) {
    this._recipes = value;
  }
  public resetRecipes() {
    this._recipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipesInput() {
    return this._recipes;
  }

  // recovery_mode - computed: false, optional: false, required: true
  private _recoveryMode?: string; 
  public get recoveryMode() {
    return this.getStringAttribute('recovery_mode');
  }
  public set recoveryMode(value: string) {
    this._recoveryMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryModeInput() {
    return this._recoveryMode;
  }

  // root_volume_size - computed: false, optional: false, required: true
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }

  // volume_encryption - computed: false, optional: false, required: true
  private _volumeEncryption = new DatahubAwsClusterInstanceGroupVolumeEncryptionOutputReference(this, "volume_encryption");
  public get volumeEncryption() {
    return this._volumeEncryption;
  }
  public putVolumeEncryption(value: DatahubAwsClusterInstanceGroupVolumeEncryption) {
    this._volumeEncryption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeEncryptionInput() {
    return this._volumeEncryption.internalValue;
  }
}

export class DatahubAwsClusterInstanceGroupList extends cdktf.ComplexList {
  public internalValue? : DatahubAwsClusterInstanceGroup[] | cdktf.IResolvable

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
  public get(index: number): DatahubAwsClusterInstanceGroupOutputReference {
    return new DatahubAwsClusterInstanceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatahubAwsClusterPollingOptions {
  /**
  * Threshold value that specifies how many times should a single call failure happen before giving up the polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#call_failure_threshold DatahubAwsCluster#call_failure_threshold}
  */
  readonly callFailureThreshold?: number;
  /**
  * Timeout value in minutes that specifies for how long should the polling go for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#polling_timeout DatahubAwsCluster#polling_timeout}
  */
  readonly pollingTimeout?: number;
}

export function datahubAwsClusterPollingOptionsToTerraform(struct?: DatahubAwsClusterPollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call_failure_threshold: cdktf.numberToTerraform(struct!.callFailureThreshold),
    polling_timeout: cdktf.numberToTerraform(struct!.pollingTimeout),
  }
}


export function datahubAwsClusterPollingOptionsToHclTerraform(struct?: DatahubAwsClusterPollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    call_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.callFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.pollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubAwsClusterPollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatahubAwsClusterPollingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.callFailureThreshold = this._callFailureThreshold;
    }
    if (this._pollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingTimeout = this._pollingTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubAwsClusterPollingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callFailureThreshold = undefined;
      this._pollingTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callFailureThreshold = value.callFailureThreshold;
      this._pollingTimeout = value.pollingTimeout;
    }
  }

  // call_failure_threshold - computed: true, optional: true, required: false
  private _callFailureThreshold?: number; 
  public get callFailureThreshold() {
    return this.getNumberAttribute('call_failure_threshold');
  }
  public set callFailureThreshold(value: number) {
    this._callFailureThreshold = value;
  }
  public resetCallFailureThreshold() {
    this._callFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callFailureThresholdInput() {
    return this._callFailureThreshold;
  }

  // polling_timeout - computed: true, optional: true, required: false
  private _pollingTimeout?: number; 
  public get pollingTimeout() {
    return this.getNumberAttribute('polling_timeout');
  }
  public set pollingTimeout(value: number) {
    this._pollingTimeout = value;
  }
  public resetPollingTimeout() {
    this._pollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingTimeoutInput() {
    return this._pollingTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster cdp_datahub_aws_cluster}
*/
export class DatahubAwsCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_datahub_aws_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatahubAwsCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatahubAwsCluster to import
  * @param importFromId The id of the existing DatahubAwsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatahubAwsCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_datahub_aws_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.7/docs/resources/datahub_aws_cluster cdp_datahub_aws_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatahubAwsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DatahubAwsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_datahub_aws_cluster',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterDefinition = config.clusterDefinition;
    this._clusterExtension.internalValue = config.clusterExtension;
    this._clusterTemplate = config.clusterTemplate;
    this._customConfigurationsName = config.customConfigurationsName;
    this._datahubDatabase = config.datahubDatabase;
    this._destroyOptions.internalValue = config.destroyOptions;
    this._enableLoadBalancer = config.enableLoadBalancer;
    this._environment = config.environment;
    this._image.internalValue = config.image;
    this._instanceGroup.internalValue = config.instanceGroup;
    this._javaVersion = config.javaVersion;
    this._multiAz = config.multiAz;
    this._name = config.name;
    this._pollingOptions.internalValue = config.pollingOptions;
    this._requestTemplate = config.requestTemplate;
    this._subnetId = config.subnetId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_definition - computed: false, optional: true, required: false
  private _clusterDefinition?: string; 
  public get clusterDefinition() {
    return this.getStringAttribute('cluster_definition');
  }
  public set clusterDefinition(value: string) {
    this._clusterDefinition = value;
  }
  public resetClusterDefinition() {
    this._clusterDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDefinitionInput() {
    return this._clusterDefinition;
  }

  // cluster_extension - computed: false, optional: true, required: false
  private _clusterExtension = new DatahubAwsClusterClusterExtensionOutputReference(this, "cluster_extension");
  public get clusterExtension() {
    return this._clusterExtension;
  }
  public putClusterExtension(value: DatahubAwsClusterClusterExtension) {
    this._clusterExtension.internalValue = value;
  }
  public resetClusterExtension() {
    this._clusterExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExtensionInput() {
    return this._clusterExtension.internalValue;
  }

  // cluster_template - computed: false, optional: true, required: false
  private _clusterTemplate?: string; 
  public get clusterTemplate() {
    return this.getStringAttribute('cluster_template');
  }
  public set clusterTemplate(value: string) {
    this._clusterTemplate = value;
  }
  public resetClusterTemplate() {
    this._clusterTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTemplateInput() {
    return this._clusterTemplate;
  }

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
  }

  // custom_configurations_name - computed: false, optional: true, required: false
  private _customConfigurationsName?: string; 
  public get customConfigurationsName() {
    return this.getStringAttribute('custom_configurations_name');
  }
  public set customConfigurationsName(value: string) {
    this._customConfigurationsName = value;
  }
  public resetCustomConfigurationsName() {
    this._customConfigurationsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigurationsNameInput() {
    return this._customConfigurationsName;
  }

  // datahub_database - computed: false, optional: true, required: false
  private _datahubDatabase?: string; 
  public get datahubDatabase() {
    return this.getStringAttribute('datahub_database');
  }
  public set datahubDatabase(value: string) {
    this._datahubDatabase = value;
  }
  public resetDatahubDatabase() {
    this._datahubDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datahubDatabaseInput() {
    return this._datahubDatabase;
  }

  // destroy_options - computed: false, optional: true, required: false
  private _destroyOptions = new DatahubAwsClusterDestroyOptionsOutputReference(this, "destroy_options");
  public get destroyOptions() {
    return this._destroyOptions;
  }
  public putDestroyOptions(value: DatahubAwsClusterDestroyOptions) {
    this._destroyOptions.internalValue = value;
  }
  public resetDestroyOptions() {
    this._destroyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyOptionsInput() {
    return this._destroyOptions.internalValue;
  }

  // enable_load_balancer - computed: false, optional: true, required: false
  private _enableLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableLoadBalancer() {
    return this.getBooleanAttribute('enable_load_balancer');
  }
  public set enableLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableLoadBalancer = value;
  }
  public resetEnableLoadBalancer() {
    this._enableLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoadBalancerInput() {
    return this._enableLoadBalancer;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: true, required: false
  private _image = new DatahubAwsClusterImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DatahubAwsClusterImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // instance_group - computed: false, optional: true, required: false
  private _instanceGroup = new DatahubAwsClusterInstanceGroupList(this, "instance_group", false);
  public get instanceGroup() {
    return this._instanceGroup;
  }
  public putInstanceGroup(value: DatahubAwsClusterInstanceGroup[] | cdktf.IResolvable) {
    this._instanceGroup.internalValue = value;
  }
  public resetInstanceGroup() {
    this._instanceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupInput() {
    return this._instanceGroup.internalValue;
  }

  // java_version - computed: false, optional: true, required: false
  private _javaVersion?: number; 
  public get javaVersion() {
    return this.getNumberAttribute('java_version');
  }
  public set javaVersion(value: number) {
    this._javaVersion = value;
  }
  public resetJavaVersion() {
    this._javaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaVersionInput() {
    return this._javaVersion;
  }

  // multi_az - computed: false, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
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

  // polling_options - computed: false, optional: true, required: false
  private _pollingOptions = new DatahubAwsClusterPollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }
  public putPollingOptions(value: DatahubAwsClusterPollingOptions) {
    this._pollingOptions.internalValue = value;
  }
  public resetPollingOptions() {
    this._pollingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingOptionsInput() {
    return this._pollingOptions.internalValue;
  }

  // request_template - computed: false, optional: true, required: false
  private _requestTemplate?: string; 
  public get requestTemplate() {
    return this.getStringAttribute('request_template');
  }
  public set requestTemplate(value: string) {
    this._requestTemplate = value;
  }
  public resetRequestTemplate() {
    this._requestTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplateInput() {
    return this._requestTemplate;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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
      cluster_definition: cdktf.stringToTerraform(this._clusterDefinition),
      cluster_extension: datahubAwsClusterClusterExtensionToTerraform(this._clusterExtension.internalValue),
      cluster_template: cdktf.stringToTerraform(this._clusterTemplate),
      custom_configurations_name: cdktf.stringToTerraform(this._customConfigurationsName),
      datahub_database: cdktf.stringToTerraform(this._datahubDatabase),
      destroy_options: datahubAwsClusterDestroyOptionsToTerraform(this._destroyOptions.internalValue),
      enable_load_balancer: cdktf.booleanToTerraform(this._enableLoadBalancer),
      environment: cdktf.stringToTerraform(this._environment),
      image: datahubAwsClusterImageToTerraform(this._image.internalValue),
      instance_group: cdktf.listMapper(datahubAwsClusterInstanceGroupToTerraform, false)(this._instanceGroup.internalValue),
      java_version: cdktf.numberToTerraform(this._javaVersion),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      name: cdktf.stringToTerraform(this._name),
      polling_options: datahubAwsClusterPollingOptionsToTerraform(this._pollingOptions.internalValue),
      request_template: cdktf.stringToTerraform(this._requestTemplate),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_definition: {
        value: cdktf.stringToHclTerraform(this._clusterDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_extension: {
        value: datahubAwsClusterClusterExtensionToHclTerraform(this._clusterExtension.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatahubAwsClusterClusterExtension",
      },
      cluster_template: {
        value: cdktf.stringToHclTerraform(this._clusterTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_configurations_name: {
        value: cdktf.stringToHclTerraform(this._customConfigurationsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datahub_database: {
        value: cdktf.stringToHclTerraform(this._datahubDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_options: {
        value: datahubAwsClusterDestroyOptionsToHclTerraform(this._destroyOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatahubAwsClusterDestroyOptions",
      },
      enable_load_balancer: {
        value: cdktf.booleanToHclTerraform(this._enableLoadBalancer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: datahubAwsClusterImageToHclTerraform(this._image.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatahubAwsClusterImage",
      },
      instance_group: {
        value: cdktf.listMapperHcl(datahubAwsClusterInstanceGroupToHclTerraform, false)(this._instanceGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatahubAwsClusterInstanceGroupList",
      },
      java_version: {
        value: cdktf.numberToHclTerraform(this._javaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_az: {
        value: cdktf.booleanToHclTerraform(this._multiAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_options: {
        value: datahubAwsClusterPollingOptionsToHclTerraform(this._pollingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatahubAwsClusterPollingOptions",
      },
      request_template: {
        value: cdktf.stringToHclTerraform(this._requestTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
