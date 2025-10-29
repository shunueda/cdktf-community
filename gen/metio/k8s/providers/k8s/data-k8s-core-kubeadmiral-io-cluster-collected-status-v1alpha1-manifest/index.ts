// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clusters is the list of member clusters and collected fields for its propagated Kubernetes object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest#clusters DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest#clusters}
  */
  readonly clusters: DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClusters[] | cdktf.IResolvable;
  /**
  * LastUpdateTime is the last time that a collection was performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest#last_update_time DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest#last_update_time}
  */
  readonly lastUpdateTime: string;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest#metadata DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadata;
}
export interface DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClusters {
  /**
  * Cluster is the name of the member cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest#cluster DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest#cluster}
  */
  readonly cluster: string;
  /**
  * CollectedFields is the the set of fields collected for the Kubernetes object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest#collected_fields DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest#collected_fields}
  */
  readonly collectedFields: { [key: string]: string };
  /**
  * Error records any errors encountered while collecting fields from the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest#error DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest#error}
  */
  readonly error?: string;
}

export function dataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClustersToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    collected_fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.collectedFields),
    error: cdktf.stringToTerraform(struct!.error),
  }
}


export function dataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClustersToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collected_fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.collectedFields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    error: {
      value: cdktf.stringToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._collectedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectedFields = this._collectedFields;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._collectedFields = undefined;
      this._error = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._collectedFields = value.collectedFields;
      this._error = value.error;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // collected_fields - computed: false, optional: false, required: true
  private _collectedFields?: { [key: string]: string }; 
  public get collectedFields() {
    return this.getStringMapAttribute('collected_fields');
  }
  public set collectedFields(value: { [key: string]: string }) {
    this._collectedFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectedFieldsInput() {
    return this._collectedFields;
  }

  // error - computed: false, optional: true, required: false
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }
}

export class DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClustersOutputReference {
    return new DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest#annotations DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest#labels DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest k8s_core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest}
*/
export class DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest k8s_core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_core_kubeadmiral_io_cluster_collected_status_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.10.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusters.internalValue = config.clusters;
    this._lastUpdateTime = config.lastUpdateTime;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters - computed: false, optional: false, required: true
  private _clusters = new DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // last_update_time - computed: false, optional: false, required: true
  private _lastUpdateTime?: string; 
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }
  public set lastUpdateTime(value: string) {
    this._lastUpdateTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateTimeInput() {
    return this._lastUpdateTime;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clusters: cdktf.listMapper(dataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClustersToTerraform, false)(this._clusters.internalValue),
      last_update_time: cdktf.stringToTerraform(this._lastUpdateTime),
      metadata: dataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clusters: {
        value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClustersToHclTerraform, false)(this._clusters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestClustersList",
      },
      last_update_time: {
        value: cdktf.stringToHclTerraform(this._lastUpdateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: dataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoClusterCollectedStatusV1Alpha1ManifestMetadata",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
