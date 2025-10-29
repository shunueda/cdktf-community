// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#metadata DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadata;
  /**
  * Spec represents the desired behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#spec DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpec;
}
export interface DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#annotations DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#labels DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#name DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClusters {
  /**
  * Name of target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#name DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Replicas in target cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#replicas DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClustersToTerraform(struct?: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClustersToHclTerraform(struct?: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._replicas = value.replicas;
    }
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

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}

export class DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClustersOutputReference {
    return new DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResource {
  /**
  * APIVersion represents the API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#api_version DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind represents the Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#kind DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name represents the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#name DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace represents the namespace for the referent. For non-namespace scoped resources(e.g. 'ClusterRole')，do not need specify Namespace, and for namespace scoped resources, Namespace is required. If Namespace is not specified, means the resource is non-namespace scoped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#namespace DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Replicas represents the replica number of the referencing resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#replicas DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * ReplicaResourceRequirements represents the resources required by each replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#resource_per_replicas DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#resource_per_replicas}
  */
  readonly resourcePerReplicas?: { [key: string]: string };
  /**
  * ResourceVersion represents the internal version of the referenced object, that can be used by clients to determine when object has changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#resource_version DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
}

export function dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResourceToTerraform(struct?: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resource_per_replicas: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourcePerReplicas),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
  }
}


export function dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResourceToHclTerraform(struct?: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_per_replicas: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourcePerReplicas),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resourcePerReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePerReplicas = this._resourcePerReplicas;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._replicas = undefined;
      this._resourcePerReplicas = undefined;
      this._resourceVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._replicas = value.replicas;
      this._resourcePerReplicas = value.resourcePerReplicas;
      this._resourceVersion = value.resourceVersion;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resource_per_replicas - computed: false, optional: true, required: false
  private _resourcePerReplicas?: { [key: string]: string }; 
  public get resourcePerReplicas() {
    return this.getStringMapAttribute('resource_per_replicas');
  }
  public set resourcePerReplicas(value: { [key: string]: string }) {
    this._resourcePerReplicas = value;
  }
  public resetResourcePerReplicas() {
    this._resourcePerReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePerReplicasInput() {
    return this._resourcePerReplicas;
  }

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }
}
export interface DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpec {
  /**
  * Clusters represents target member clusters where the resource to be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#clusters DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClusters[] | cdktf.IResolvable;
  /**
  * Resource represents the Kubernetes resource to be propagated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#resource DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest#resource}
  */
  readonly resource: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResource;
}

export function dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecToTerraform(struct?: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clusters: cdktf.listMapper(dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClustersToTerraform, false)(struct!.clusters),
    resource: dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResourceToTerraform(struct!.resource),
  }
}


export function dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clusters: {
      value: cdktf.listMapperHcl(dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClustersToHclTerraform, false)(struct!.clusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClustersList",
    },
    resource: {
      value: dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusters.internalValue = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusters.internalValue = value.clusters;
      this._resource.internalValue = value.resource;
    }
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest k8s_work_karmada_io_cluster_resource_binding_v1alpha1_manifest}
*/
export class DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_work_karmada_io_cluster_resource_binding_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_work_karmada_io_cluster_resource_binding_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/work_karmada_io_cluster_resource_binding_v1alpha1_manifest k8s_work_karmada_io_cluster_resource_binding_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_work_karmada_io_cluster_resource_binding_v1alpha1_manifest',
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
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
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
      metadata: dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWorkKarmadaIoClusterResourceBindingV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
