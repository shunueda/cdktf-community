// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#metadata DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadata;
  /**
  * DeploymentSpec defines the desired state of Deployment. An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#spec DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpec;
}
export interface DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#annotations DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#labels DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFromToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFromToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#from DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFrom;
}

export function dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFromToTerraform(struct!.from),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#api_id DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#api_id}
  */
  readonly apiId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#api_ref DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#api_ref}
  */
  readonly apiRef?: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#description DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#stage_name DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest#stage_name}
  */
  readonly stageName?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_id: cdktf.stringToTerraform(struct!.apiId),
    api_ref: dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefToTerraform(struct!.apiRef),
    description: cdktf.stringToTerraform(struct!.description),
    stage_name: cdktf.stringToTerraform(struct!.stageName),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_id: {
      value: cdktf.stringToHclTerraform(struct!.apiId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_ref: {
      value: dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefToHclTerraform(struct!.apiRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage_name: {
      value: cdktf.stringToHclTerraform(struct!.stageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiId = this._apiId;
    }
    if (this._apiRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiRef = this._apiRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._stageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageName = this._stageName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiId = undefined;
      this._apiRef.internalValue = undefined;
      this._description = undefined;
      this._stageName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiId = value.apiId;
      this._apiRef.internalValue = value.apiRef;
      this._description = value.description;
      this._stageName = value.stageName;
    }
  }

  // api_id - computed: false, optional: true, required: false
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  public resetApiId() {
    this._apiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // api_ref - computed: false, optional: true, required: false
  private _apiRef = new DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRefOutputReference(this, "api_ref");
  public get apiRef() {
    return this._apiRef;
  }
  public putApiRef(value: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecApiRef) {
    this._apiRef.internalValue = value;
  }
  public resetApiRef() {
    this._apiRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRefInput() {
    return this._apiRef.internalValue;
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

  // stage_name - computed: false, optional: true, required: false
  private _stageName?: string; 
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string) {
    this._stageName = value;
  }
  public resetStageName() {
    this._stageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNameInput() {
    return this._stageName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest k8s_apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest}
*/
export class DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest k8s_apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apigatewayv2_services_k8s_aws_deployment_v1alpha1_manifest',
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
  private _metadata = new DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApigatewayv2ServicesK8SAwsDeploymentV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
