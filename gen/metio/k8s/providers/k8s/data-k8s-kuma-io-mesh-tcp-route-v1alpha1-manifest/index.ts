// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#metadata DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadata;
  /**
  * Spec is the specification of the Kuma MeshTCPRoute resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#spec DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpec;
}
export interface DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#annotations DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#labels DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#name DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#namespace DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#kind DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#labels DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#mesh DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#name DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#namespace DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#section_name DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#tags DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mesh: cdktf.stringToTerraform(struct!.mesh),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mesh: {
      value: cdktf.stringToHclTerraform(struct!.mesh),
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
    proxy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.mesh = this._mesh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._proxyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTypes = this._proxyTypes;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._labels = value.labels;
      this._mesh = value.mesh;
      this._name = value.name;
      this._namespace = value.namespace;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // mesh - computed: false, optional: true, required: false
  private _mesh?: string; 
  public get mesh() {
    return this.getStringAttribute('mesh');
  }
  public set mesh(value: string) {
    this._mesh = value;
  }
  public resetMesh() {
    this._mesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh;
  }

  // name - computed: false, optional: true, required: false
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

  // proxy_types - computed: false, optional: true, required: false
  private _proxyTypes?: string[]; 
  public get proxyTypes() {
    return this.getListAttribute('proxy_types');
  }
  public set proxyTypes(value: string[]) {
    this._proxyTypes = value;
  }
  public resetProxyTypes() {
    this._proxyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes;
  }

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
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
}
export interface DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#kind DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#labels DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#mesh DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#name DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#namespace DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port is only supported when this ref refers to a real MeshService object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#port DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#section_name DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#tags DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#weight DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsToTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mesh: cdktf.stringToTerraform(struct!.mesh),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsToHclTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mesh: {
      value: cdktf.stringToHclTerraform(struct!.mesh),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.mesh = this._mesh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTypes = this._proxyTypes;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._labels = value.labels;
      this._mesh = value.mesh;
      this._name = value.name;
      this._namespace = value.namespace;
      this._port = value.port;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
      this._weight = value.weight;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // mesh - computed: false, optional: true, required: false
  private _mesh?: string; 
  public get mesh() {
    return this.getStringAttribute('mesh');
  }
  public set mesh(value: string) {
    this._mesh = value;
  }
  public resetMesh() {
    this._mesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh;
  }

  // name - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
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

  // proxy_types - computed: false, optional: true, required: false
  private _proxyTypes?: string[]; 
  public get proxyTypes() {
    return this.getListAttribute('proxy_types');
  }
  public set proxyTypes(value: string[]) {
    this._proxyTypes = value;
  }
  public resetProxyTypes() {
    this._proxyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes;
  }

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsOutputReference {
    return new DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#backend_refs DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#backend_refs}
  */
  readonly backendRefs: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultToTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_refs: cdktf.listMapper(dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsToTerraform, false)(struct!.backendRefs),
  }
}


export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultToHclTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_refs: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsToHclTerraform, false)(struct!.backendRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendRefs = this._backendRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendRefs.internalValue = value.backendRefs;
    }
  }

  // backend_refs - computed: false, optional: false, required: true
  private _backendRefs = new DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsList(this, "backend_refs", false);
  public get backendRefs() {
    return this._backendRefs;
  }
  public putBackendRefs(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs[] | cdktf.IResolvable) {
    this._backendRefs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRefsInput() {
    return this._backendRefs.internalValue;
  }
}
export interface DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRules {
  /**
  * Default holds routing rules that can be merged with rules from other policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#default DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#default}
  */
  readonly default: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefault;
}

export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesToTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultToTerraform(struct!.default),
  }
}


export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesToHclTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default.internalValue = value.default;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default = new DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesDefault) {
    this._default.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }
}

export class DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesOutputReference {
    return new DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#kind DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#labels DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#mesh DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#name DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#namespace DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#section_name DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#tags DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRefToTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mesh: cdktf.stringToTerraform(struct!.mesh),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mesh: {
      value: cdktf.stringToHclTerraform(struct!.mesh),
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
    proxy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.mesh = this._mesh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._proxyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTypes = this._proxyTypes;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._labels = value.labels;
      this._mesh = value.mesh;
      this._name = value.name;
      this._namespace = value.namespace;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // mesh - computed: false, optional: true, required: false
  private _mesh?: string; 
  public get mesh() {
    return this.getStringAttribute('mesh');
  }
  public set mesh(value: string) {
    this._mesh = value;
  }
  public resetMesh() {
    this._mesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh;
  }

  // name - computed: false, optional: true, required: false
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

  // proxy_types - computed: false, optional: true, required: false
  private _proxyTypes?: string[]; 
  public get proxyTypes() {
    return this.getListAttribute('proxy_types');
  }
  public set proxyTypes(value: string[]) {
    this._proxyTypes = value;
  }
  public resetProxyTypes() {
    this._proxyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes;
  }

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
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
}
export interface DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTo {
  /**
  * Rules contains the routing rules applies to a combination of top-level targetRef and the targetRef in this entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#rules DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#rules}
  */
  readonly rules?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRules[] | cdktf.IResolvable;
  /**
  * TargetRef is a reference to the resource that represents a group of destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#target_ref DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#target_ref}
  */
  readonly targetRef: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRef;
}

export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToToTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesToTerraform, false)(struct!.rules),
    target_ref: dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToToHclTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesList",
    },
    target_ref: {
      value: dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToOutputReference {
    return new DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpec {
  /**
  * TargetRef is a reference to the resource the policy takes an effect on. The resource could be either a real store object or virtual resource defined in-place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#target_ref DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRef;
  /**
  * To list makes a match between the consumed services and corresponding configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#to DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest#to}
  */
  readonly to?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTo[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_ref: dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    to: cdktf.listMapper(dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToToTerraform, false)(struct!.to),
  }
}


export function dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_ref: {
      value: dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRef",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetRef.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetRef.internalValue = value.targetRef;
      this._to.internalValue = value.to;
    }
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecTo[] | cdktf.IResolvable) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest k8s_kuma_io_mesh_tcp_route_v1alpha1_manifest}
*/
export class DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuma_io_mesh_tcp_route_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKumaIoMeshTcpRouteV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuma_io_mesh_tcp_route_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kuma_io_mesh_tcp_route_v1alpha1_manifest k8s_kuma_io_mesh_tcp_route_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuma_io_mesh_tcp_route_v1alpha1_manifest',
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
  private _metadata = new DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshTcpRouteV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
