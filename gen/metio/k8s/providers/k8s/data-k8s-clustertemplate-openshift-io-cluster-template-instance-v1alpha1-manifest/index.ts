// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#metadata DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#spec DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpec;
}
export interface DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#annotations DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#labels DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#name DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#namespace DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParameters {
  /**
  * Name of the application set to which parameter is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#cluster_setup DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest#cluster_setup}
  */
  readonly clusterSetup?: string;
  /**
  * Name of the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#name DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#value DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParametersToTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_setup: cdktf.stringToTerraform(struct!.clusterSetup),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParametersToHclTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_setup: {
      value: cdktf.stringToHclTerraform(struct!.clusterSetup),
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

export class DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterSetup !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSetup = this._clusterSetup;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterSetup = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterSetup = value.clusterSetup;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // cluster_setup - computed: false, optional: true, required: false
  private _clusterSetup?: string; 
  public get clusterSetup() {
    return this.getStringAttribute('cluster_setup');
  }
  public set clusterSetup(value: string) {
    this._clusterSetup = value;
  }
  public resetClusterSetup() {
    this._clusterSetup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSetupInput() {
    return this._clusterSetup;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParametersOutputReference {
    return new DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpec {
  /**
  * A reference to ClusterTemplate which will be used for installing and setting up the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#cluster_template_ref DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest#cluster_template_ref}
  */
  readonly clusterTemplateRef: string;
  /**
  * A reference to a secret which contains kubeconfig of the cluster. If specified day1 operation won't be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#kubeconfig_secret_ref DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest#kubeconfig_secret_ref}
  */
  readonly kubeconfigSecretRef?: string;
  /**
  * Helm parameters to be passed to cluster installation or setup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#parameters DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParameters[] | cdktf.IResolvable;
}

export function dataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_template_ref: cdktf.stringToTerraform(struct!.clusterTemplateRef),
    kubeconfig_secret_ref: cdktf.stringToTerraform(struct!.kubeconfigSecretRef),
    parameters: cdktf.listMapper(dataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_template_ref: {
      value: cdktf.stringToHclTerraform(struct!.clusterTemplateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig_secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfigSecretRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterTemplateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTemplateRef = this._clusterTemplateRef;
    }
    if (this._kubeconfigSecretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfigSecretRef = this._kubeconfigSecretRef;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterTemplateRef = undefined;
      this._kubeconfigSecretRef = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterTemplateRef = value.clusterTemplateRef;
      this._kubeconfigSecretRef = value.kubeconfigSecretRef;
      this._parameters.internalValue = value.parameters;
    }
  }

  // cluster_template_ref - computed: false, optional: false, required: true
  private _clusterTemplateRef?: string; 
  public get clusterTemplateRef() {
    return this.getStringAttribute('cluster_template_ref');
  }
  public set clusterTemplateRef(value: string) {
    this._clusterTemplateRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTemplateRefInput() {
    return this._clusterTemplateRef;
  }

  // kubeconfig_secret_ref - computed: false, optional: true, required: false
  private _kubeconfigSecretRef?: string; 
  public get kubeconfigSecretRef() {
    return this.getStringAttribute('kubeconfig_secret_ref');
  }
  public set kubeconfigSecretRef(value: string) {
    this._kubeconfigSecretRef = value;
  }
  public resetKubeconfigSecretRef() {
    this._kubeconfigSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigSecretRefInput() {
    return this._kubeconfigSecretRef;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest k8s_clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest}
*/
export class DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest k8s_clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_clustertemplate_openshift_io_cluster_template_instance_v1alpha1_manifest',
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
  private _metadata = new DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClustertemplateOpenshiftIoClusterTemplateInstanceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
