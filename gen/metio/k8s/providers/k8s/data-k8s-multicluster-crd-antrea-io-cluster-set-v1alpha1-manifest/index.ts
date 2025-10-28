// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#metadata DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadata;
  /**
  * ClusterSetSpec defines the desired state of ClusterSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#spec DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpec;
}
export interface DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#annotations DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#labels DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#name DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#namespace DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeaders {
  /**
  * Identify member cluster in ClusterSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#cluster_id DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Secret name to access API server of the member from the leader cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#secret DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
  /**
  * API server of the destination cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#server DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#server}
  */
  readonly server?: string;
  /**
  * ServiceAccount used by the member cluster to access into leader cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#service_account DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeadersToTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    secret: cdktf.stringToTerraform(struct!.secret),
    server: cdktf.stringToTerraform(struct!.server),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeadersToHclTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._secret = undefined;
      this._server = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._secret = value.secret;
      this._server = value.server;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}

export class DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeadersOutputReference {
    return new DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembers {
  /**
  * Identify member cluster in ClusterSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#cluster_id DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Secret name to access API server of the member from the leader cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#secret DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
  /**
  * API server of the destination cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#server DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#server}
  */
  readonly server?: string;
  /**
  * ServiceAccount used by the member cluster to access into leader cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#service_account DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembersToTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    secret: cdktf.stringToTerraform(struct!.secret),
    server: cdktf.stringToTerraform(struct!.server),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembersToHclTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._secret = undefined;
      this._server = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._secret = value.secret;
      this._server = value.server;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}

export class DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembersList extends cdktf.ComplexList {
  public internalValue? : DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembersOutputReference {
    return new DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpec {
  /**
  * Leaders include leader clusters known to the member clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#leaders DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#leaders}
  */
  readonly leaders: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeaders[] | cdktf.IResolvable;
  /**
  * Members include member clusters known to the leader clusters. Used in leader cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#members DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#members}
  */
  readonly members?: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembers[] | cdktf.IResolvable;
  /**
  * The leader cluster Namespace in which the ClusterSet is defined. Used in member cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#namespace DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    leaders: cdktf.listMapper(dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeadersToTerraform, false)(struct!.leaders),
    members: cdktf.listMapper(dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembersToTerraform, false)(struct!.members),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    leaders: {
      value: cdktf.listMapperHcl(dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeadersToHclTerraform, false)(struct!.leaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeadersList",
    },
    members: {
      value: cdktf.listMapperHcl(dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembersToHclTerraform, false)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembersList",
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

export class DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaders = this._leaders?.internalValue;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._leaders.internalValue = undefined;
      this._members.internalValue = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._leaders.internalValue = value.leaders;
      this._members.internalValue = value.members;
      this._namespace = value.namespace;
    }
  }

  // leaders - computed: false, optional: false, required: true
  private _leaders = new DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeadersList(this, "leaders", false);
  public get leaders() {
    return this._leaders;
  }
  public putLeaders(value: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecLeaders[] | cdktf.IResolvable) {
    this._leaders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leadersInput() {
    return this._leaders.internalValue;
  }

  // members - computed: false, optional: true, required: false
  private _members = new DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest k8s_multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest}
*/
export class DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest k8s_multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_multicluster_crd_antrea_io_cluster_set_v1alpha1_manifest',
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
  private _metadata = new DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMulticlusterCrdAntreaIoClusterSetV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
