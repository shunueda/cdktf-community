// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#metadata DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadata;
  /**
  * IPAddressSpec is the desired state of an IPAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#spec DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpec;
}
export interface DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#annotations DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#labels DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#name DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#namespace DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#name DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRefToTerraform(struct?: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRefToHclTerraform(struct?: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#api_group DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#kind DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#name DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRefToTerraform(struct?: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRefToHclTerraform(struct?: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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
}
export interface DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpec {
  /**
  * Address is the IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#address DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#address}
  */
  readonly address: string;
  /**
  * ClaimRef is a reference to the claim this IPAddress was created for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#claim_ref DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#claim_ref}
  */
  readonly claimRef: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRef;
  /**
  * Gateway is the network gateway of the network the address is from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#gateway DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#gateway}
  */
  readonly gateway?: string;
  /**
  * PoolRef is a reference to the pool that this IPAddress was created from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#pool_ref DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#pool_ref}
  */
  readonly poolRef: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRef;
  /**
  * Prefix is the prefix of the address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#prefix DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest#prefix}
  */
  readonly prefix: number;
}

export function dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecToTerraform(struct?: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    claim_ref: dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRefToTerraform(struct!.claimRef),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    pool_ref: dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRefToTerraform(struct!.poolRef),
    prefix: cdktf.numberToTerraform(struct!.prefix),
  }
}


export function dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_ref: {
      value: dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRefToHclTerraform(struct!.claimRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRef",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_ref: {
      value: dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRefToHclTerraform(struct!.poolRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRef",
    },
    prefix: {
      value: cdktf.numberToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._claimRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimRef = this._claimRef?.internalValue;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._poolRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolRef = this._poolRef?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._claimRef.internalValue = undefined;
      this._gateway = undefined;
      this._poolRef.internalValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._claimRef.internalValue = value.claimRef;
      this._gateway = value.gateway;
      this._poolRef.internalValue = value.poolRef;
      this._prefix = value.prefix;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // claim_ref - computed: false, optional: false, required: true
  private _claimRef = new DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRefOutputReference(this, "claim_ref");
  public get claimRef() {
    return this._claimRef;
  }
  public putClaimRef(value: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecClaimRef) {
    this._claimRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimRefInput() {
    return this._claimRef.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // pool_ref - computed: false, optional: false, required: true
  private _poolRef = new DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRefOutputReference(this, "pool_ref");
  public get poolRef() {
    return this._poolRef;
  }
  public putPoolRef(value: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecPoolRef) {
    this._poolRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolRefInput() {
    return this._poolRef.internalValue;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest k8s_ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest}
*/
export class DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SIpamClusterXK8SIoIpAddressV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest k8s_ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ipam_cluster_x_k8s_io_ip_address_v1alpha1_manifest',
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
  private _metadata = new DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpec) {
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
      metadata: dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIpamClusterXK8SIoIpAddressV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
