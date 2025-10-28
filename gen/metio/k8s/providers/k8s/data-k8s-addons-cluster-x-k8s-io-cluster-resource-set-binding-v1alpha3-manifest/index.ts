// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#metadata DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#metadata}
  */
  readonly metadata: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadata;
  /**
  * ClusterResourceSetBindingSpec defines the desired state of ClusterResourceSetBinding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#spec DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#spec}
  */
  readonly spec?: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpec;
}
export interface DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#annotations DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#labels DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#name DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#namespace DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadataToTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadataToHclTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResources {
  /**
  * Applied is to track if a resource is applied to the cluster or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#applied DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#applied}
  */
  readonly applied: boolean | cdktf.IResolvable;
  /**
  * Hash is the hash of a resource's data. This can be used to decide if a resource is changed. For 'ApplyOnce' ClusterResourceSet.spec.strategy, this is no-op as that strategy does not act on change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#hash DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#hash}
  */
  readonly hash?: string;
  /**
  * Kind of the resource. Supported kinds are: Secrets and ConfigMaps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#kind DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#kind}
  */
  readonly kind: string;
  /**
  * LastAppliedTime identifies when this resource was last applied to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#last_applied_time DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#last_applied_time}
  */
  readonly lastAppliedTime?: string;
  /**
  * Name of the resource that is in the same namespace with ClusterResourceSet object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#name DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResourcesToTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applied: cdktf.booleanToTerraform(struct!.applied),
    hash: cdktf.stringToTerraform(struct!.hash),
    kind: cdktf.stringToTerraform(struct!.kind),
    last_applied_time: cdktf.stringToTerraform(struct!.lastAppliedTime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResourcesToHclTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applied: {
      value: cdktf.booleanToHclTerraform(struct!.applied),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
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
    last_applied_time: {
      value: cdktf.stringToHclTerraform(struct!.lastAppliedTime),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applied !== undefined) {
      hasAnyValues = true;
      internalValueResult.applied = this._applied;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._lastAppliedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAppliedTime = this._lastAppliedTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applied = undefined;
      this._hash = undefined;
      this._kind = undefined;
      this._lastAppliedTime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applied = value.applied;
      this._hash = value.hash;
      this._kind = value.kind;
      this._lastAppliedTime = value.lastAppliedTime;
      this._name = value.name;
    }
  }

  // applied - computed: false, optional: false, required: true
  private _applied?: boolean | cdktf.IResolvable; 
  public get applied() {
    return this.getBooleanAttribute('applied');
  }
  public set applied(value: boolean | cdktf.IResolvable) {
    this._applied = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appliedInput() {
    return this._applied;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
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

  // last_applied_time - computed: false, optional: true, required: false
  private _lastAppliedTime?: string; 
  public get lastAppliedTime() {
    return this.getStringAttribute('last_applied_time');
  }
  public set lastAppliedTime(value: string) {
    this._lastAppliedTime = value;
  }
  public resetLastAppliedTime() {
    this._lastAppliedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAppliedTimeInput() {
    return this._lastAppliedTime;
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

export class DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResourcesOutputReference {
    return new DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindings {
  /**
  * ClusterResourceSetName is the name of the ClusterResourceSet that is applied to the owner cluster of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#cluster_resource_set_name DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#cluster_resource_set_name}
  */
  readonly clusterResourceSetName: string;
  /**
  * Resources is a list of resources that the ClusterResourceSet has.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#resources DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#resources}
  */
  readonly resources?: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResources[] | cdktf.IResolvable;
}

export function dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsToTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_resource_set_name: cdktf.stringToTerraform(struct!.clusterResourceSetName),
    resources: cdktf.listMapper(dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResourcesToTerraform, false)(struct!.resources),
  }
}


export function dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsToHclTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_resource_set_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterResourceSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterResourceSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterResourceSetName = this._clusterResourceSetName;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterResourceSetName = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterResourceSetName = value.clusterResourceSetName;
      this._resources.internalValue = value.resources;
    }
  }

  // cluster_resource_set_name - computed: false, optional: false, required: true
  private _clusterResourceSetName?: string; 
  public get clusterResourceSetName() {
    return this.getStringAttribute('cluster_resource_set_name');
  }
  public set clusterResourceSetName(value: string) {
    this._clusterResourceSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceSetNameInput() {
    return this._clusterResourceSetName;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsOutputReference {
    return new DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpec {
  /**
  * Bindings is a list of ClusterResourceSets and their resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#bindings DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest#bindings}
  */
  readonly bindings?: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindings[] | cdktf.IResolvable;
}

export function dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecToTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsToTerraform, false)(struct!.bindings),
  }
}


export function dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecToHclTerraform(struct?: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindings = this._bindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindings.internalValue = value.bindings;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest k8s_addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest}
*/
export class DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest to import
  * @param importFromId The id of the existing DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest k8s_addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_addons_cluster_x_k8s_io_cluster_resource_set_binding_v1alpha3_manifest',
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
  private _metadata = new DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
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
      metadata: dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestMetadata",
      },
      spec: {
        value: dataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAddonsClusterXK8SIoClusterResourceSetBindingV1Alpha3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
