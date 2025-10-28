// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#metadata DataK8SMonitoringCoreosComPodMonitorV1Manifest#metadata}
  */
  readonly metadata: DataK8SMonitoringCoreosComPodMonitorV1ManifestMetadata;
  /**
  * Specification of desired Pod selection for target discovery by Prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#spec DataK8SMonitoringCoreosComPodMonitorV1Manifest#spec}
  */
  readonly spec: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpec;
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#annotations DataK8SMonitoringCoreosComPodMonitorV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#labels DataK8SMonitoringCoreosComPodMonitorV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#namespace DataK8SMonitoringCoreosComPodMonitorV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestMetadataToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestMetadataToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadata {
  /**
  * When set to true, Prometheus attaches node metadata to the discovered targets. The Prometheus service account must have the 'list' and 'watch' permissions on the 'Nodes' objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#node DataK8SMonitoringCoreosComPodMonitorV1Manifest#node}
  */
  readonly nodeAttribute?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadataToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.booleanToTerraform(struct!.nodeAttribute),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadataToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: cdktf.booleanToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._node = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._node = value.nodeAttribute;
    }
  }

  // node - computed: false, optional: true, required: false
  private _node?: boolean | cdktf.IResolvable; 
  public get nodeAttribute() {
    return this.getBooleanAttribute('node');
  }
  public set nodeAttribute(value: boolean | cdktf.IResolvable) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelector {
  /**
  * Boolean describing whether all namespaces are selected in contrast to a list restricting them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#any DataK8SMonitoringCoreosComPodMonitorV1Manifest#any}
  */
  readonly any?: boolean | cdktf.IResolvable;
  /**
  * List of namespace names to select from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#match_names DataK8SMonitoringCoreosComPodMonitorV1Manifest#match_names}
  */
  readonly matchNames?: string[];
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelectorToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: cdktf.booleanToTerraform(struct!.any),
    match_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchNames),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelectorToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: cdktf.booleanToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._matchNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchNames = this._matchNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._any = undefined;
      this._matchNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._any = value.any;
      this._matchNames = value.matchNames;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any?: boolean | cdktf.IResolvable; 
  public get any() {
    return this.getBooleanAttribute('any');
  }
  public set any(value: boolean | cdktf.IResolvable) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // match_names - computed: false, optional: true, required: false
  private _matchNames?: string[]; 
  public get matchNames() {
    return this.getListAttribute('match_names');
  }
  public set matchNames(value: string[]) {
    this._matchNames = value;
  }
  public resetMatchNames() {
    this._matchNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNamesInput() {
    return this._matchNames;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentials {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentialsToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentialsToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentials | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorization {
  /**
  * Selects a key of a Secret in the namespace that contains the credentials for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#credentials DataK8SMonitoringCoreosComPodMonitorV1Manifest#credentials}
  */
  readonly credentials?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentials;
  /**
  * Defines the authentication type. The value is case-insensitive. 'Basic' is not a supported value. Default: 'Bearer'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#type DataK8SMonitoringCoreosComPodMonitorV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentialsToTerraform(struct!.credentials),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentials",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._type = value.type;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPassword {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPasswordToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPasswordToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPassword | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsername {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsernameToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsernameToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsername | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuth {
  /**
  * 'password' specifies a key of a Secret containing the password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#password DataK8SMonitoringCoreosComPodMonitorV1Manifest#password}
  */
  readonly password?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPassword;
  /**
  * 'username' specifies a key of a Secret containing the username for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#username DataK8SMonitoringCoreosComPodMonitorV1Manifest#username}
  */
  readonly username?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsername;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPasswordToTerraform(struct!.password),
    username: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPassword",
    },
    username: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecretToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelings {
  /**
  * Action to perform based on the regex matching. 'Uppercase' and 'Lowercase' actions require Prometheus >= v2.36.0. 'DropEqual' and 'KeepEqual' actions require Prometheus >= v2.41.0. Default: 'Replace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#action DataK8SMonitoringCoreosComPodMonitorV1Manifest#action}
  */
  readonly action?: string;
  /**
  * Modulus to take of the hash of the source label values. Only applicable when the action is 'HashMod'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#modulus DataK8SMonitoringCoreosComPodMonitorV1Manifest#modulus}
  */
  readonly modulus?: number;
  /**
  * Regular expression against which the extracted value is matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#regex DataK8SMonitoringCoreosComPodMonitorV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Replacement value against which a Replace action is performed if the regular expression matches. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#replacement DataK8SMonitoringCoreosComPodMonitorV1Manifest#replacement}
  */
  readonly replacement?: string;
  /**
  * Separator is the string between concatenated SourceLabels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#separator DataK8SMonitoringCoreosComPodMonitorV1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * The source labels select values from existing labels. Their content is concatenated using the configured Separator and matched against the configured regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#source_labels DataK8SMonitoringCoreosComPodMonitorV1Manifest#source_labels}
  */
  readonly sourceLabels?: string[];
  /**
  * Label to which the resulting string is written in a replacement. It is mandatory for 'Replace', 'HashMod', 'Lowercase', 'Uppercase', 'KeepEqual' and 'DropEqual' actions. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#target_label DataK8SMonitoringCoreosComPodMonitorV1Manifest#target_label}
  */
  readonly targetLabel?: string;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelingsToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    modulus: cdktf.numberToTerraform(struct!.modulus),
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLabels),
    target_label: cdktf.stringToTerraform(struct!.targetLabel),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelingsToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulus: {
      value: cdktf.numberToHclTerraform(struct!.modulus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_label: {
      value: cdktf.stringToHclTerraform(struct!.targetLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._modulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulus = this._modulus;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._targetLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabel = this._targetLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._modulus = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._separator = undefined;
      this._sourceLabels = undefined;
      this._targetLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._modulus = value.modulus;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._separator = value.separator;
      this._sourceLabels = value.sourceLabels;
      this._targetLabel = value.targetLabel;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // modulus - computed: false, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: string[]; 
  public get sourceLabels() {
    return this.getListAttribute('source_labels');
  }
  public set sourceLabels(value: string[]) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // target_label - computed: false, optional: true, required: false
  private _targetLabel?: string; 
  public get targetLabel() {
    return this.getStringAttribute('target_label');
  }
  public set targetLabel(value: string) {
    this._targetLabel = value;
  }
  public resetTargetLabel() {
    this._targetLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelInput() {
    return this._targetLabel;
  }
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelingsOutputReference {
    return new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMap | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecretToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientId {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#config_map DataK8SMonitoringCoreosComPodMonitorV1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#secret DataK8SMonitoringCoreosComPodMonitorV1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecret;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecretToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMap | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecretToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#config_map DataK8SMonitoringCoreosComPodMonitorV1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#secret DataK8SMonitoringCoreosComPodMonitorV1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecret;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMap | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecretToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#config_map DataK8SMonitoringCoreosComPodMonitorV1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#secret DataK8SMonitoringCoreosComPodMonitorV1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecret;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecretToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfig {
  /**
  * Certificate authority used when verifying server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#ca DataK8SMonitoringCoreosComPodMonitorV1Manifest#ca}
  */
  readonly ca?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCa;
  /**
  * Client certificate to present when doing client-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#cert DataK8SMonitoringCoreosComPodMonitorV1Manifest#cert}
  */
  readonly cert?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCert;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#insecure_skip_verify DataK8SMonitoringCoreosComPodMonitorV1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key_secret DataK8SMonitoringCoreosComPodMonitorV1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecret;
  /**
  * Maximum acceptable TLS version. It requires Prometheus >= v2.41.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#max_version DataK8SMonitoringCoreosComPodMonitorV1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum acceptable TLS version. It requires Prometheus >= v2.35.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#min_version DataK8SMonitoringCoreosComPodMonitorV1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#server_name DataK8SMonitoringCoreosComPodMonitorV1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaToTerraform(struct!.ca),
    cert: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertToTerraform(struct!.cert),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_secret: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecretToTerraform(struct!.keySecret),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCa",
    },
    cert: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCert",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_secret: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecret",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._cert.internalValue = undefined;
      this._insecureSkipVerify = undefined;
      this._keySecret.internalValue = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._cert.internalValue = value.cert;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._keySecret.internalValue = value.keySecret;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._serverName = value.serverName;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key_secret - computed: false, optional: true, required: false
  private _keySecret = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigKeySecret) {
    this._keySecret.internalValue = value;
  }
  public resetKeySecret() {
    this._keySecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2 {
  /**
  * 'clientId' specifies a key of a Secret or ConfigMap containing the OAuth2 client's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#client_id DataK8SMonitoringCoreosComPodMonitorV1Manifest#client_id}
  */
  readonly clientId: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientId;
  /**
  * 'clientSecret' specifies a key of a Secret containing the OAuth2 client's secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#client_secret DataK8SMonitoringCoreosComPodMonitorV1Manifest#client_secret}
  */
  readonly clientSecret: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecret;
  /**
  * 'endpointParams' configures the HTTP parameters to append to the token URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#endpoint_params DataK8SMonitoringCoreosComPodMonitorV1Manifest#endpoint_params}
  */
  readonly endpointParams?: { [key: string]: string };
  /**
  * 'noProxy' is a comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#no_proxy DataK8SMonitoringCoreosComPodMonitorV1Manifest#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * ProxyConnectHeader optionally specifies headers to send to proxies during CONNECT requests. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#proxy_connect_header DataK8SMonitoringCoreosComPodMonitorV1Manifest#proxy_connect_header}
  */
  readonly proxyConnectHeader?: { [key: string]: string };
  /**
  * Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY). It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#proxy_from_environment DataK8SMonitoringCoreosComPodMonitorV1Manifest#proxy_from_environment}
  */
  readonly proxyFromEnvironment?: boolean | cdktf.IResolvable;
  /**
  * 'proxyURL' defines the HTTP proxy server to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#proxy_url DataK8SMonitoringCoreosComPodMonitorV1Manifest#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * 'scopes' defines the OAuth2 scopes used for the token request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#scopes DataK8SMonitoringCoreosComPodMonitorV1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * TLS configuration to use when connecting to the OAuth2 server. It requires Prometheus >= v2.43.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#tls_config DataK8SMonitoringCoreosComPodMonitorV1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfig;
  /**
  * 'tokenURL' configures the URL to fetch the token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#token_url DataK8SMonitoringCoreosComPodMonitorV1Manifest#token_url}
  */
  readonly tokenUrl: string;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdToTerraform(struct!.clientId),
    client_secret: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecretToTerraform(struct!.clientSecret),
    endpoint_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointParams),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    proxy_connect_header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.proxyConnectHeader),
    proxy_from_environment: cdktf.booleanToTerraform(struct!.proxyFromEnvironment),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    tls_config: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigToTerraform(struct!.tlsConfig),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdToHclTerraform(struct!.clientId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientId",
    },
    client_secret: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecret",
    },
    endpoint_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.endpointParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_connect_header: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.proxyConnectHeader),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    proxy_from_environment: {
      value: cdktf.booleanToHclTerraform(struct!.proxyFromEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_config: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfig",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId?.internalValue;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._endpointParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointParams = this._endpointParams;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._proxyConnectHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConnectHeader = this._proxyConnectHeader;
    }
    if (this._proxyFromEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyFromEnvironment = this._proxyFromEnvironment;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId.internalValue = undefined;
      this._clientSecret.internalValue = undefined;
      this._endpointParams = undefined;
      this._noProxy = undefined;
      this._proxyConnectHeader = undefined;
      this._proxyFromEnvironment = undefined;
      this._proxyUrl = undefined;
      this._scopes = undefined;
      this._tlsConfig.internalValue = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId.internalValue = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._endpointParams = value.endpointParams;
      this._noProxy = value.noProxy;
      this._proxyConnectHeader = value.proxyConnectHeader;
      this._proxyFromEnvironment = value.proxyFromEnvironment;
      this._proxyUrl = value.proxyUrl;
      this._scopes = value.scopes;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientIdOutputReference(this, "client_id");
  public get clientId() {
    return this._clientId;
  }
  public putClientId(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientId) {
    this._clientId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId.internalValue;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ClientSecret) {
    this._clientSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // endpoint_params - computed: false, optional: true, required: false
  private _endpointParams?: { [key: string]: string }; 
  public get endpointParams() {
    return this.getStringMapAttribute('endpoint_params');
  }
  public set endpointParams(value: { [key: string]: string }) {
    this._endpointParams = value;
  }
  public resetEndpointParams() {
    this._endpointParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointParamsInput() {
    return this._endpointParams;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // proxy_connect_header - computed: false, optional: true, required: false
  private _proxyConnectHeader?: { [key: string]: string }; 
  public get proxyConnectHeader() {
    return this.getStringMapAttribute('proxy_connect_header');
  }
  public set proxyConnectHeader(value: { [key: string]: string }) {
    this._proxyConnectHeader = value;
  }
  public resetProxyConnectHeader() {
    this._proxyConnectHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConnectHeaderInput() {
    return this._proxyConnectHeader;
  }

  // proxy_from_environment - computed: false, optional: true, required: false
  private _proxyFromEnvironment?: boolean | cdktf.IResolvable; 
  public get proxyFromEnvironment() {
    return this.getBooleanAttribute('proxy_from_environment');
  }
  public set proxyFromEnvironment(value: boolean | cdktf.IResolvable) {
    this._proxyFromEnvironment = value;
  }
  public resetProxyFromEnvironment() {
    this._proxyFromEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyFromEnvironmentInput() {
    return this._proxyFromEnvironment;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2TlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelings {
  /**
  * Action to perform based on the regex matching. 'Uppercase' and 'Lowercase' actions require Prometheus >= v2.36.0. 'DropEqual' and 'KeepEqual' actions require Prometheus >= v2.41.0. Default: 'Replace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#action DataK8SMonitoringCoreosComPodMonitorV1Manifest#action}
  */
  readonly action?: string;
  /**
  * Modulus to take of the hash of the source label values. Only applicable when the action is 'HashMod'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#modulus DataK8SMonitoringCoreosComPodMonitorV1Manifest#modulus}
  */
  readonly modulus?: number;
  /**
  * Regular expression against which the extracted value is matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#regex DataK8SMonitoringCoreosComPodMonitorV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Replacement value against which a Replace action is performed if the regular expression matches. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#replacement DataK8SMonitoringCoreosComPodMonitorV1Manifest#replacement}
  */
  readonly replacement?: string;
  /**
  * Separator is the string between concatenated SourceLabels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#separator DataK8SMonitoringCoreosComPodMonitorV1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * The source labels select values from existing labels. Their content is concatenated using the configured Separator and matched against the configured regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#source_labels DataK8SMonitoringCoreosComPodMonitorV1Manifest#source_labels}
  */
  readonly sourceLabels?: string[];
  /**
  * Label to which the resulting string is written in a replacement. It is mandatory for 'Replace', 'HashMod', 'Lowercase', 'Uppercase', 'KeepEqual' and 'DropEqual' actions. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#target_label DataK8SMonitoringCoreosComPodMonitorV1Manifest#target_label}
  */
  readonly targetLabel?: string;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelingsToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    modulus: cdktf.numberToTerraform(struct!.modulus),
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLabels),
    target_label: cdktf.stringToTerraform(struct!.targetLabel),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelingsToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulus: {
      value: cdktf.numberToHclTerraform(struct!.modulus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_label: {
      value: cdktf.stringToHclTerraform(struct!.targetLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._modulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulus = this._modulus;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._targetLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabel = this._targetLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._modulus = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._separator = undefined;
      this._sourceLabels = undefined;
      this._targetLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._modulus = value.modulus;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._separator = value.separator;
      this._sourceLabels = value.sourceLabels;
      this._targetLabel = value.targetLabel;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // modulus - computed: false, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: string[]; 
  public get sourceLabels() {
    return this.getListAttribute('source_labels');
  }
  public set sourceLabels(value: string[]) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // target_label - computed: false, optional: true, required: false
  private _targetLabel?: string; 
  public get targetLabel() {
    return this.getStringAttribute('target_label');
  }
  public set targetLabel(value: string) {
    this._targetLabel = value;
  }
  public resetTargetLabel() {
    this._targetLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelInput() {
    return this._targetLabel;
  }
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelingsOutputReference {
    return new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMap | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecretToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#config_map DataK8SMonitoringCoreosComPodMonitorV1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#secret DataK8SMonitoringCoreosComPodMonitorV1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecret;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMap | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecretToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#config_map DataK8SMonitoringCoreosComPodMonitorV1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#secret DataK8SMonitoringCoreosComPodMonitorV1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecret;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#name DataK8SMonitoringCoreosComPodMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#optional DataK8SMonitoringCoreosComPodMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecretToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfig {
  /**
  * Certificate authority used when verifying server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#ca DataK8SMonitoringCoreosComPodMonitorV1Manifest#ca}
  */
  readonly ca?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCa;
  /**
  * Client certificate to present when doing client-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#cert DataK8SMonitoringCoreosComPodMonitorV1Manifest#cert}
  */
  readonly cert?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCert;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#insecure_skip_verify DataK8SMonitoringCoreosComPodMonitorV1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key_secret DataK8SMonitoringCoreosComPodMonitorV1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecret;
  /**
  * Maximum acceptable TLS version. It requires Prometheus >= v2.41.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#max_version DataK8SMonitoringCoreosComPodMonitorV1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum acceptable TLS version. It requires Prometheus >= v2.35.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#min_version DataK8SMonitoringCoreosComPodMonitorV1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#server_name DataK8SMonitoringCoreosComPodMonitorV1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaToTerraform(struct!.ca),
    cert: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertToTerraform(struct!.cert),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_secret: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecretToTerraform(struct!.keySecret),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCa",
    },
    cert: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCert",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_secret: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecret",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._cert.internalValue = undefined;
      this._insecureSkipVerify = undefined;
      this._keySecret.internalValue = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._cert.internalValue = value.cert;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._keySecret.internalValue = value.keySecret;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._serverName = value.serverName;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key_secret - computed: false, optional: true, required: false
  private _keySecret = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigKeySecret) {
    this._keySecret.internalValue = value;
  }
  public resetKeySecret() {
    this._keySecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpoints {
  /**
  * 'authorization' configures the Authorization header credentials to use when scraping the target. Cannot be set at the same time as 'basicAuth', or 'oauth2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#authorization DataK8SMonitoringCoreosComPodMonitorV1Manifest#authorization}
  */
  readonly authorization?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorization;
  /**
  * 'basicAuth' configures the Basic Authentication credentials to use when scraping the target. Cannot be set at the same time as 'authorization', or 'oauth2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#basic_auth DataK8SMonitoringCoreosComPodMonitorV1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuth;
  /**
  * 'bearerTokenSecret' specifies a key of a Secret containing the bearer token for scraping targets. The secret needs to be in the same namespace as the PodMonitor object and readable by the Prometheus Operator. Deprecated: use 'authorization' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#bearer_token_secret DataK8SMonitoringCoreosComPodMonitorV1Manifest#bearer_token_secret}
  */
  readonly bearerTokenSecret?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecret;
  /**
  * 'enableHttp2' can be used to disable HTTP2 when scraping the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#enable_http2 DataK8SMonitoringCoreosComPodMonitorV1Manifest#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
  /**
  * When true, the pods which are not running (e.g. either in Failed or Succeeded state) are dropped during the target discovery. If unset, the filtering is enabled. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#filter_running DataK8SMonitoringCoreosComPodMonitorV1Manifest#filter_running}
  */
  readonly filterRunning?: boolean | cdktf.IResolvable;
  /**
  * 'followRedirects' defines whether the scrape requests should follow HTTP 3xx redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#follow_redirects DataK8SMonitoringCoreosComPodMonitorV1Manifest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * When true, 'honorLabels' preserves the metric's labels when they collide with the target's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#honor_labels DataK8SMonitoringCoreosComPodMonitorV1Manifest#honor_labels}
  */
  readonly honorLabels?: boolean | cdktf.IResolvable;
  /**
  * 'honorTimestamps' controls whether Prometheus preserves the timestamps when exposed by the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#honor_timestamps DataK8SMonitoringCoreosComPodMonitorV1Manifest#honor_timestamps}
  */
  readonly honorTimestamps?: boolean | cdktf.IResolvable;
  /**
  * Interval at which Prometheus scrapes the metrics from the target. If empty, Prometheus uses the global scrape interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#interval DataK8SMonitoringCoreosComPodMonitorV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * 'metricRelabelings' configures the relabeling rules to apply to the samples before ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#metric_relabelings DataK8SMonitoringCoreosComPodMonitorV1Manifest#metric_relabelings}
  */
  readonly metricRelabelings?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelings[] | cdktf.IResolvable;
  /**
  * 'oauth2' configures the OAuth2 settings to use when scraping the target. It requires Prometheus >= 2.27.0. Cannot be set at the same time as 'authorization', or 'basicAuth'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#oauth2 DataK8SMonitoringCoreosComPodMonitorV1Manifest#oauth2}
  */
  readonly oauth2?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2;
  /**
  * 'params' define optional HTTP URL parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#params DataK8SMonitoringCoreosComPodMonitorV1Manifest#params}
  */
  readonly params?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * HTTP path from which to scrape for metrics. If empty, Prometheus uses the default value (e.g. '/metrics').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#path DataK8SMonitoringCoreosComPodMonitorV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name of the Pod port which this endpoint refers to. It takes precedence over 'targetPort'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#port DataK8SMonitoringCoreosComPodMonitorV1Manifest#port}
  */
  readonly port?: string;
  /**
  * 'proxyURL' configures the HTTP Proxy URL (e.g. 'http://proxyserver:2195') to go through when scraping the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#proxy_url DataK8SMonitoringCoreosComPodMonitorV1Manifest#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * 'relabelings' configures the relabeling rules to apply the target's metadata labels. The Operator automatically adds relabelings for a few standard Kubernetes fields. The original scrape job's name is available via the '__tmp_prometheus_job_name' label. More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#relabelings DataK8SMonitoringCoreosComPodMonitorV1Manifest#relabelings}
  */
  readonly relabelings?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelings[] | cdktf.IResolvable;
  /**
  * HTTP scheme to use for scraping. 'http' and 'https' are the expected values unless you rewrite the '__scheme__' label via relabeling. If empty, Prometheus uses the default value 'http'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#scheme DataK8SMonitoringCoreosComPodMonitorV1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * Timeout after which Prometheus considers the scrape to be failed. If empty, Prometheus uses the global scrape timeout unless it is less than the target's scrape interval value in which the latter is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#scrape_timeout DataK8SMonitoringCoreosComPodMonitorV1Manifest#scrape_timeout}
  */
  readonly scrapeTimeout?: string;
  /**
  * Name or number of the target port of the 'Pod' object behind the Service, the port must be specified with container port property. Deprecated: use 'port' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#target_port DataK8SMonitoringCoreosComPodMonitorV1Manifest#target_port}
  */
  readonly targetPort?: string;
  /**
  * TLS configuration to use when scraping the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#tls_config DataK8SMonitoringCoreosComPodMonitorV1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfig;
  /**
  * 'trackTimestampsStaleness' defines whether Prometheus tracks staleness of the metrics that have an explicit timestamp present in scraped data. Has no effect if 'honorTimestamps' is false. It requires Prometheus >= v2.48.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#track_timestamps_staleness DataK8SMonitoringCoreosComPodMonitorV1Manifest#track_timestamps_staleness}
  */
  readonly trackTimestampsStaleness?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationToTerraform(struct!.authorization),
    basic_auth: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthToTerraform(struct!.basicAuth),
    bearer_token_secret: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecretToTerraform(struct!.bearerTokenSecret),
    enable_http2: cdktf.booleanToTerraform(struct!.enableHttp2),
    filter_running: cdktf.booleanToTerraform(struct!.filterRunning),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    honor_labels: cdktf.booleanToTerraform(struct!.honorLabels),
    honor_timestamps: cdktf.booleanToTerraform(struct!.honorTimestamps),
    interval: cdktf.stringToTerraform(struct!.interval),
    metric_relabelings: cdktf.listMapper(dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelingsToTerraform, false)(struct!.metricRelabelings),
    oauth2: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ToTerraform(struct!.oauth2),
    params: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.params),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    relabelings: cdktf.listMapper(dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelingsToTerraform, false)(struct!.relabelings),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    scrape_timeout: cdktf.stringToTerraform(struct!.scrapeTimeout),
    target_port: cdktf.stringToTerraform(struct!.targetPort),
    tls_config: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigToTerraform(struct!.tlsConfig),
    track_timestamps_staleness: cdktf.booleanToTerraform(struct!.trackTimestampsStaleness),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorization",
    },
    basic_auth: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuth",
    },
    bearer_token_secret: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecretToHclTerraform(struct!.bearerTokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecret",
    },
    enable_http2: {
      value: cdktf.booleanToHclTerraform(struct!.enableHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_running: {
      value: cdktf.booleanToHclTerraform(struct!.filterRunning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    honor_labels: {
      value: cdktf.booleanToHclTerraform(struct!.honorLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    honor_timestamps: {
      value: cdktf.booleanToHclTerraform(struct!.honorTimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_relabelings: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelingsToHclTerraform, false)(struct!.metricRelabelings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelingsList",
    },
    oauth2: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relabelings: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelingsToHclTerraform, false)(struct!.relabelings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelingsList",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_timeout: {
      value: cdktf.stringToHclTerraform(struct!.scrapeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.stringToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_config: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfig",
    },
    track_timestamps_staleness: {
      value: cdktf.booleanToHclTerraform(struct!.trackTimestampsStaleness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._bearerTokenSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenSecret = this._bearerTokenSecret?.internalValue;
    }
    if (this._enableHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttp2 = this._enableHttp2;
    }
    if (this._filterRunning !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterRunning = this._filterRunning;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._honorLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorLabels = this._honorLabels;
    }
    if (this._honorTimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorTimestamps = this._honorTimestamps;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._metricRelabelings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricRelabelings = this._metricRelabelings?.internalValue;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._relabelings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relabelings = this._relabelings?.internalValue;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._scrapeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeTimeout = this._scrapeTimeout;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._trackTimestampsStaleness !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackTimestampsStaleness = this._trackTimestampsStaleness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization.internalValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._bearerTokenSecret.internalValue = undefined;
      this._enableHttp2 = undefined;
      this._filterRunning = undefined;
      this._followRedirects = undefined;
      this._honorLabels = undefined;
      this._honorTimestamps = undefined;
      this._interval = undefined;
      this._metricRelabelings.internalValue = undefined;
      this._oauth2.internalValue = undefined;
      this._params = undefined;
      this._path = undefined;
      this._port = undefined;
      this._proxyUrl = undefined;
      this._relabelings.internalValue = undefined;
      this._scheme = undefined;
      this._scrapeTimeout = undefined;
      this._targetPort = undefined;
      this._tlsConfig.internalValue = undefined;
      this._trackTimestampsStaleness = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization.internalValue = value.authorization;
      this._basicAuth.internalValue = value.basicAuth;
      this._bearerTokenSecret.internalValue = value.bearerTokenSecret;
      this._enableHttp2 = value.enableHttp2;
      this._filterRunning = value.filterRunning;
      this._followRedirects = value.followRedirects;
      this._honorLabels = value.honorLabels;
      this._honorTimestamps = value.honorTimestamps;
      this._interval = value.interval;
      this._metricRelabelings.internalValue = value.metricRelabelings;
      this._oauth2.internalValue = value.oauth2;
      this._params = value.params;
      this._path = value.path;
      this._port = value.port;
      this._proxyUrl = value.proxyUrl;
      this._relabelings.internalValue = value.relabelings;
      this._scheme = value.scheme;
      this._scrapeTimeout = value.scrapeTimeout;
      this._targetPort = value.targetPort;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._trackTimestampsStaleness = value.trackTimestampsStaleness;
    }
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // bearer_token_secret - computed: false, optional: true, required: false
  private _bearerTokenSecret = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecretOutputReference(this, "bearer_token_secret");
  public get bearerTokenSecret() {
    return this._bearerTokenSecret;
  }
  public putBearerTokenSecret(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsBearerTokenSecret) {
    this._bearerTokenSecret.internalValue = value;
  }
  public resetBearerTokenSecret() {
    this._bearerTokenSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenSecretInput() {
    return this._bearerTokenSecret.internalValue;
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable; 
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2;
  }

  // filter_running - computed: false, optional: true, required: false
  private _filterRunning?: boolean | cdktf.IResolvable; 
  public get filterRunning() {
    return this.getBooleanAttribute('filter_running');
  }
  public set filterRunning(value: boolean | cdktf.IResolvable) {
    this._filterRunning = value;
  }
  public resetFilterRunning() {
    this._filterRunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRunningInput() {
    return this._filterRunning;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // honor_labels - computed: false, optional: true, required: false
  private _honorLabels?: boolean | cdktf.IResolvable; 
  public get honorLabels() {
    return this.getBooleanAttribute('honor_labels');
  }
  public set honorLabels(value: boolean | cdktf.IResolvable) {
    this._honorLabels = value;
  }
  public resetHonorLabels() {
    this._honorLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorLabelsInput() {
    return this._honorLabels;
  }

  // honor_timestamps - computed: false, optional: true, required: false
  private _honorTimestamps?: boolean | cdktf.IResolvable; 
  public get honorTimestamps() {
    return this.getBooleanAttribute('honor_timestamps');
  }
  public set honorTimestamps(value: boolean | cdktf.IResolvable) {
    this._honorTimestamps = value;
  }
  public resetHonorTimestamps() {
    this._honorTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorTimestampsInput() {
    return this._honorTimestamps;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // metric_relabelings - computed: false, optional: true, required: false
  private _metricRelabelings = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelingsList(this, "metric_relabelings", false);
  public get metricRelabelings() {
    return this._metricRelabelings;
  }
  public putMetricRelabelings(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsMetricRelabelings[] | cdktf.IResolvable) {
    this._metricRelabelings.internalValue = value;
  }
  public resetMetricRelabelings() {
    this._metricRelabelings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRelabelingsInput() {
    return this._metricRelabelings.internalValue;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get params() {
    return this.interpolationForAttribute('params');
  }
  public set params(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // relabelings - computed: false, optional: true, required: false
  private _relabelings = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelingsList(this, "relabelings", false);
  public get relabelings() {
    return this._relabelings;
  }
  public putRelabelings(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsRelabelings[] | cdktf.IResolvable) {
    this._relabelings.internalValue = value;
  }
  public resetRelabelings() {
    this._relabelings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relabelingsInput() {
    return this._relabelings.internalValue;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // scrape_timeout - computed: false, optional: true, required: false
  private _scrapeTimeout?: string; 
  public get scrapeTimeout() {
    return this.getStringAttribute('scrape_timeout');
  }
  public set scrapeTimeout(value: string) {
    this._scrapeTimeout = value;
  }
  public resetScrapeTimeout() {
    this._scrapeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeTimeoutInput() {
    return this._scrapeTimeout;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: string; 
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
  public set targetPort(value: string) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // track_timestamps_staleness - computed: false, optional: true, required: false
  private _trackTimestampsStaleness?: boolean | cdktf.IResolvable; 
  public get trackTimestampsStaleness() {
    return this.getBooleanAttribute('track_timestamps_staleness');
  }
  public set trackTimestampsStaleness(value: boolean | cdktf.IResolvable) {
    this._trackTimestampsStaleness = value;
  }
  public resetTrackTimestampsStaleness() {
    this._trackTimestampsStaleness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackTimestampsStalenessInput() {
    return this._trackTimestampsStaleness;
  }
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOutputReference {
    return new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#key DataK8SMonitoringCoreosComPodMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#operator DataK8SMonitoringCoreosComPodMonitorV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#values DataK8SMonitoringCoreosComPodMonitorV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#match_expressions DataK8SMonitoringCoreosComPodMonitorV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#match_labels DataK8SMonitoringCoreosComPodMonitorV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SMonitoringCoreosComPodMonitorV1ManifestSpec {
  /**
  * 'attachMetadata' defines additional metadata which is added to the discovered targets. It requires Prometheus >= v2.35.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#attach_metadata DataK8SMonitoringCoreosComPodMonitorV1Manifest#attach_metadata}
  */
  readonly attachMetadata?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadata;
  /**
  * When defined, bodySizeLimit specifies a job level limit on the size of uncompressed response body that will be accepted by Prometheus. It requires Prometheus >= v2.28.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#body_size_limit DataK8SMonitoringCoreosComPodMonitorV1Manifest#body_size_limit}
  */
  readonly bodySizeLimit?: string;
  /**
  * The label to use to retrieve the job name from. 'jobLabel' selects the label from the associated Kubernetes 'Pod' object which will be used as the 'job' label for all metrics. For example if 'jobLabel' is set to 'foo' and the Kubernetes 'Pod' object is labeled with 'foo: bar', then Prometheus adds the 'job='bar'' label to all ingested metrics. If the value of this field is empty, the 'job' label of the metrics defaults to the namespace and name of the PodMonitor object (e.g. '<namespace>/<name>').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#job_label DataK8SMonitoringCoreosComPodMonitorV1Manifest#job_label}
  */
  readonly jobLabel?: string;
  /**
  * Per-scrape limit on the number of targets dropped by relabeling that will be kept in memory. 0 means no limit. It requires Prometheus >= v2.47.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#keep_dropped_targets DataK8SMonitoringCoreosComPodMonitorV1Manifest#keep_dropped_targets}
  */
  readonly keepDroppedTargets?: number;
  /**
  * Per-scrape limit on number of labels that will be accepted for a sample. It requires Prometheus >= v2.27.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#label_limit DataK8SMonitoringCoreosComPodMonitorV1Manifest#label_limit}
  */
  readonly labelLimit?: number;
  /**
  * Per-scrape limit on length of labels name that will be accepted for a sample. It requires Prometheus >= v2.27.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#label_name_length_limit DataK8SMonitoringCoreosComPodMonitorV1Manifest#label_name_length_limit}
  */
  readonly labelNameLengthLimit?: number;
  /**
  * Per-scrape limit on length of labels value that will be accepted for a sample. It requires Prometheus >= v2.27.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#label_value_length_limit DataK8SMonitoringCoreosComPodMonitorV1Manifest#label_value_length_limit}
  */
  readonly labelValueLengthLimit?: number;
  /**
  * 'namespaceSelector' defines in which namespace(s) Prometheus should discover the pods. By default, the pods are discovered in the same namespace as the 'PodMonitor' object but it is possible to select pods across different/all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#namespace_selector DataK8SMonitoringCoreosComPodMonitorV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelector;
  /**
  * Defines how to scrape metrics from the selected pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#pod_metrics_endpoints DataK8SMonitoringCoreosComPodMonitorV1Manifest#pod_metrics_endpoints}
  */
  readonly podMetricsEndpoints?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpoints[] | cdktf.IResolvable;
  /**
  * 'podTargetLabels' defines the labels which are transferred from the associated Kubernetes 'Pod' object onto the ingested metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#pod_target_labels DataK8SMonitoringCoreosComPodMonitorV1Manifest#pod_target_labels}
  */
  readonly podTargetLabels?: string[];
  /**
  * 'sampleLimit' defines a per-scrape limit on the number of scraped samples that will be accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#sample_limit DataK8SMonitoringCoreosComPodMonitorV1Manifest#sample_limit}
  */
  readonly sampleLimit?: number;
  /**
  * The scrape class to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#scrape_class DataK8SMonitoringCoreosComPodMonitorV1Manifest#scrape_class}
  */
  readonly scrapeClass?: string;
  /**
  * 'scrapeProtocols' defines the protocols to negotiate during a scrape. It tells clients the protocols supported by Prometheus in order of preference (from most to least preferred). If unset, Prometheus uses its default value. It requires Prometheus >= v2.49.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#scrape_protocols DataK8SMonitoringCoreosComPodMonitorV1Manifest#scrape_protocols}
  */
  readonly scrapeProtocols?: string[];
  /**
  * Label selector to select the Kubernetes 'Pod' objects to scrape metrics from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#selector DataK8SMonitoringCoreosComPodMonitorV1Manifest#selector}
  */
  readonly selector: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelector;
  /**
  * 'targetLimit' defines a limit on the number of scraped targets that will be accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#target_limit DataK8SMonitoringCoreosComPodMonitorV1Manifest#target_limit}
  */
  readonly targetLimit?: number;
}

export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecToTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_metadata: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadataToTerraform(struct!.attachMetadata),
    body_size_limit: cdktf.stringToTerraform(struct!.bodySizeLimit),
    job_label: cdktf.stringToTerraform(struct!.jobLabel),
    keep_dropped_targets: cdktf.numberToTerraform(struct!.keepDroppedTargets),
    label_limit: cdktf.numberToTerraform(struct!.labelLimit),
    label_name_length_limit: cdktf.numberToTerraform(struct!.labelNameLengthLimit),
    label_value_length_limit: cdktf.numberToTerraform(struct!.labelValueLengthLimit),
    namespace_selector: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_metrics_endpoints: cdktf.listMapper(dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsToTerraform, false)(struct!.podMetricsEndpoints),
    pod_target_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podTargetLabels),
    sample_limit: cdktf.numberToTerraform(struct!.sampleLimit),
    scrape_class: cdktf.stringToTerraform(struct!.scrapeClass),
    scrape_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scrapeProtocols),
    selector: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorToTerraform(struct!.selector),
    target_limit: cdktf.numberToTerraform(struct!.targetLimit),
  }
}


export function dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecToHclTerraform(struct?: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach_metadata: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadataToHclTerraform(struct!.attachMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadata",
    },
    body_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.bodySizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_label: {
      value: cdktf.stringToHclTerraform(struct!.jobLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_dropped_targets: {
      value: cdktf.numberToHclTerraform(struct!.keepDroppedTargets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_limit: {
      value: cdktf.numberToHclTerraform(struct!.labelLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_name_length_limit: {
      value: cdktf.numberToHclTerraform(struct!.labelNameLengthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_value_length_limit: {
      value: cdktf.numberToHclTerraform(struct!.labelValueLengthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    namespace_selector: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelector",
    },
    pod_metrics_endpoints: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsToHclTerraform, false)(struct!.podMetricsEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsList",
    },
    pod_target_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podTargetLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sample_limit: {
      value: cdktf.numberToHclTerraform(struct!.sampleLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scrape_class: {
      value: cdktf.stringToHclTerraform(struct!.scrapeClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scrapeProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelector",
    },
    target_limit: {
      value: cdktf.numberToHclTerraform(struct!.targetLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPodMonitorV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachMetadata = this._attachMetadata?.internalValue;
    }
    if (this._bodySizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodySizeLimit = this._bodySizeLimit;
    }
    if (this._jobLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobLabel = this._jobLabel;
    }
    if (this._keepDroppedTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDroppedTargets = this._keepDroppedTargets;
    }
    if (this._labelLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelLimit = this._labelLimit;
    }
    if (this._labelNameLengthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelNameLengthLimit = this._labelNameLengthLimit;
    }
    if (this._labelValueLengthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelValueLengthLimit = this._labelValueLengthLimit;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._podMetricsEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMetricsEndpoints = this._podMetricsEndpoints?.internalValue;
    }
    if (this._podTargetLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.podTargetLabels = this._podTargetLabels;
    }
    if (this._sampleLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleLimit = this._sampleLimit;
    }
    if (this._scrapeClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeClass = this._scrapeClass;
    }
    if (this._scrapeProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeProtocols = this._scrapeProtocols;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._targetLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLimit = this._targetLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachMetadata.internalValue = undefined;
      this._bodySizeLimit = undefined;
      this._jobLabel = undefined;
      this._keepDroppedTargets = undefined;
      this._labelLimit = undefined;
      this._labelNameLengthLimit = undefined;
      this._labelValueLengthLimit = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._podMetricsEndpoints.internalValue = undefined;
      this._podTargetLabels = undefined;
      this._sampleLimit = undefined;
      this._scrapeClass = undefined;
      this._scrapeProtocols = undefined;
      this._selector.internalValue = undefined;
      this._targetLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachMetadata.internalValue = value.attachMetadata;
      this._bodySizeLimit = value.bodySizeLimit;
      this._jobLabel = value.jobLabel;
      this._keepDroppedTargets = value.keepDroppedTargets;
      this._labelLimit = value.labelLimit;
      this._labelNameLengthLimit = value.labelNameLengthLimit;
      this._labelValueLengthLimit = value.labelValueLengthLimit;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podMetricsEndpoints.internalValue = value.podMetricsEndpoints;
      this._podTargetLabels = value.podTargetLabels;
      this._sampleLimit = value.sampleLimit;
      this._scrapeClass = value.scrapeClass;
      this._scrapeProtocols = value.scrapeProtocols;
      this._selector.internalValue = value.selector;
      this._targetLimit = value.targetLimit;
    }
  }

  // attach_metadata - computed: false, optional: true, required: false
  private _attachMetadata = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadataOutputReference(this, "attach_metadata");
  public get attachMetadata() {
    return this._attachMetadata;
  }
  public putAttachMetadata(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecAttachMetadata) {
    this._attachMetadata.internalValue = value;
  }
  public resetAttachMetadata() {
    this._attachMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachMetadataInput() {
    return this._attachMetadata.internalValue;
  }

  // body_size_limit - computed: false, optional: true, required: false
  private _bodySizeLimit?: string; 
  public get bodySizeLimit() {
    return this.getStringAttribute('body_size_limit');
  }
  public set bodySizeLimit(value: string) {
    this._bodySizeLimit = value;
  }
  public resetBodySizeLimit() {
    this._bodySizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodySizeLimitInput() {
    return this._bodySizeLimit;
  }

  // job_label - computed: false, optional: true, required: false
  private _jobLabel?: string; 
  public get jobLabel() {
    return this.getStringAttribute('job_label');
  }
  public set jobLabel(value: string) {
    this._jobLabel = value;
  }
  public resetJobLabel() {
    this._jobLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobLabelInput() {
    return this._jobLabel;
  }

  // keep_dropped_targets - computed: false, optional: true, required: false
  private _keepDroppedTargets?: number; 
  public get keepDroppedTargets() {
    return this.getNumberAttribute('keep_dropped_targets');
  }
  public set keepDroppedTargets(value: number) {
    this._keepDroppedTargets = value;
  }
  public resetKeepDroppedTargets() {
    this._keepDroppedTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDroppedTargetsInput() {
    return this._keepDroppedTargets;
  }

  // label_limit - computed: false, optional: true, required: false
  private _labelLimit?: number; 
  public get labelLimit() {
    return this.getNumberAttribute('label_limit');
  }
  public set labelLimit(value: number) {
    this._labelLimit = value;
  }
  public resetLabelLimit() {
    this._labelLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelLimitInput() {
    return this._labelLimit;
  }

  // label_name_length_limit - computed: false, optional: true, required: false
  private _labelNameLengthLimit?: number; 
  public get labelNameLengthLimit() {
    return this.getNumberAttribute('label_name_length_limit');
  }
  public set labelNameLengthLimit(value: number) {
    this._labelNameLengthLimit = value;
  }
  public resetLabelNameLengthLimit() {
    this._labelNameLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameLengthLimitInput() {
    return this._labelNameLengthLimit;
  }

  // label_value_length_limit - computed: false, optional: true, required: false
  private _labelValueLengthLimit?: number; 
  public get labelValueLengthLimit() {
    return this.getNumberAttribute('label_value_length_limit');
  }
  public set labelValueLengthLimit(value: number) {
    this._labelValueLengthLimit = value;
  }
  public resetLabelValueLengthLimit() {
    this._labelValueLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelValueLengthLimitInput() {
    return this._labelValueLengthLimit;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_metrics_endpoints - computed: false, optional: true, required: false
  private _podMetricsEndpoints = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpointsList(this, "pod_metrics_endpoints", false);
  public get podMetricsEndpoints() {
    return this._podMetricsEndpoints;
  }
  public putPodMetricsEndpoints(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecPodMetricsEndpoints[] | cdktf.IResolvable) {
    this._podMetricsEndpoints.internalValue = value;
  }
  public resetPodMetricsEndpoints() {
    this._podMetricsEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMetricsEndpointsInput() {
    return this._podMetricsEndpoints.internalValue;
  }

  // pod_target_labels - computed: false, optional: true, required: false
  private _podTargetLabels?: string[]; 
  public get podTargetLabels() {
    return this.getListAttribute('pod_target_labels');
  }
  public set podTargetLabels(value: string[]) {
    this._podTargetLabels = value;
  }
  public resetPodTargetLabels() {
    this._podTargetLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podTargetLabelsInput() {
    return this._podTargetLabels;
  }

  // sample_limit - computed: false, optional: true, required: false
  private _sampleLimit?: number; 
  public get sampleLimit() {
    return this.getNumberAttribute('sample_limit');
  }
  public set sampleLimit(value: number) {
    this._sampleLimit = value;
  }
  public resetSampleLimit() {
    this._sampleLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleLimitInput() {
    return this._sampleLimit;
  }

  // scrape_class - computed: false, optional: true, required: false
  private _scrapeClass?: string; 
  public get scrapeClass() {
    return this.getStringAttribute('scrape_class');
  }
  public set scrapeClass(value: string) {
    this._scrapeClass = value;
  }
  public resetScrapeClass() {
    this._scrapeClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeClassInput() {
    return this._scrapeClass;
  }

  // scrape_protocols - computed: false, optional: true, required: false
  private _scrapeProtocols?: string[]; 
  public get scrapeProtocols() {
    return this.getListAttribute('scrape_protocols');
  }
  public set scrapeProtocols(value: string[]) {
    this._scrapeProtocols = value;
  }
  public resetScrapeProtocols() {
    this._scrapeProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeProtocolsInput() {
    return this._scrapeProtocols;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // target_limit - computed: false, optional: true, required: false
  private _targetLimit?: number; 
  public get targetLimit() {
    return this.getNumberAttribute('target_limit');
  }
  public set targetLimit(value: number) {
    this._targetLimit = value;
  }
  public resetTargetLimit() {
    this._targetLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLimitInput() {
    return this._targetLimit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest k8s_monitoring_coreos_com_pod_monitor_v1_manifest}
*/
export class DataK8SMonitoringCoreosComPodMonitorV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_monitoring_coreos_com_pod_monitor_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMonitoringCoreosComPodMonitorV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMonitoringCoreosComPodMonitorV1Manifest to import
  * @param importFromId The id of the existing DataK8SMonitoringCoreosComPodMonitorV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMonitoringCoreosComPodMonitorV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_monitoring_coreos_com_pod_monitor_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/monitoring_coreos_com_pod_monitor_v1_manifest k8s_monitoring_coreos_com_pod_monitor_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMonitoringCoreosComPodMonitorV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMonitoringCoreosComPodMonitorV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_monitoring_coreos_com_pod_monitor_v1_manifest',
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
  private _metadata = new DataK8SMonitoringCoreosComPodMonitorV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SMonitoringCoreosComPodMonitorV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMonitoringCoreosComPodMonitorV1ManifestSpec) {
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
      metadata: dataK8SMonitoringCoreosComPodMonitorV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMonitoringCoreosComPodMonitorV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestMetadata",
      },
      spec: {
        value: dataK8SMonitoringCoreosComPodMonitorV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMonitoringCoreosComPodMonitorV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
