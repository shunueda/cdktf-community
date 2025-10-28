// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#metadata DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadata;
  /**
  * DicomEventDrivenIngestionSpec defines the desired state of DicomEventDrivenIngestion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#spec DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpec;
}
export interface DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#annotations DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#labels DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#name DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#namespace DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessor {
  /**
  * Container Concurrency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#concurrency DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#image DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Max Replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#max_replicas DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Min Replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#min_replicas DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
}

export function dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessorToTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    image: cdktf.stringToTerraform(struct!.image),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
  }
}


export function dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessorToHclTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency = undefined;
      this._image = undefined;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency = value.concurrency;
      this._image = value.image;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
    }
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }
}
export interface DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#name DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpec {
  /**
  * Database Config Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#database_config_name DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#database_config_name}
  */
  readonly databaseConfigName?: string;
  /**
  * Database Secret Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#database_secret_name DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#database_secret_name}
  */
  readonly databaseSecretName?: string;
  /**
  * Event Processor Spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#event_processor DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#event_processor}
  */
  readonly eventProcessor?: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessor;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#image_pull_policy DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Image Pull Secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#image_pull_secrets DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Revisioning Delay in Seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#revisioning_delay DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest#revisioning_delay}
  */
  readonly revisioningDelay?: number;
}

export function dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_config_name: cdktf.stringToTerraform(struct!.databaseConfigName),
    database_secret_name: cdktf.stringToTerraform(struct!.databaseSecretName),
    event_processor: dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessorToTerraform(struct!.eventProcessor),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    revisioning_delay: cdktf.numberToTerraform(struct!.revisioningDelay),
  }
}


export function dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_config_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_processor: {
      value: dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessorToHclTerraform(struct!.eventProcessor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessor",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecretsList",
    },
    revisioning_delay: {
      value: cdktf.numberToHclTerraform(struct!.revisioningDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseConfigName = this._databaseConfigName;
    }
    if (this._databaseSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseSecretName = this._databaseSecretName;
    }
    if (this._eventProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventProcessor = this._eventProcessor?.internalValue;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._revisioningDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisioningDelay = this._revisioningDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseConfigName = undefined;
      this._databaseSecretName = undefined;
      this._eventProcessor.internalValue = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._revisioningDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseConfigName = value.databaseConfigName;
      this._databaseSecretName = value.databaseSecretName;
      this._eventProcessor.internalValue = value.eventProcessor;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._revisioningDelay = value.revisioningDelay;
    }
  }

  // database_config_name - computed: false, optional: true, required: false
  private _databaseConfigName?: string; 
  public get databaseConfigName() {
    return this.getStringAttribute('database_config_name');
  }
  public set databaseConfigName(value: string) {
    this._databaseConfigName = value;
  }
  public resetDatabaseConfigName() {
    this._databaseConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConfigNameInput() {
    return this._databaseConfigName;
  }

  // database_secret_name - computed: false, optional: true, required: false
  private _databaseSecretName?: string; 
  public get databaseSecretName() {
    return this.getStringAttribute('database_secret_name');
  }
  public set databaseSecretName(value: string) {
    this._databaseSecretName = value;
  }
  public resetDatabaseSecretName() {
    this._databaseSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSecretNameInput() {
    return this._databaseSecretName;
  }

  // event_processor - computed: false, optional: true, required: false
  private _eventProcessor = new DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessorOutputReference(this, "event_processor");
  public get eventProcessor() {
    return this._eventProcessor;
  }
  public putEventProcessor(value: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecEventProcessor) {
    this._eventProcessor.internalValue = value;
  }
  public resetEventProcessor() {
    this._eventProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProcessorInput() {
    return this._eventProcessor.internalValue;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // revisioning_delay - computed: false, optional: true, required: false
  private _revisioningDelay?: number; 
  public get revisioningDelay() {
    return this.getNumberAttribute('revisioning_delay');
  }
  public set revisioningDelay(value: number) {
    this._revisioningDelay = value;
  }
  public resetRevisioningDelay() {
    this._revisioningDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisioningDelayInput() {
    return this._revisioningDelay;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest k8s_imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest}
*/
export class DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest k8s_imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_imaging_ingestion_alvearie_org_dicom_event_driven_ingestion_v1alpha1_manifest',
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
  private _metadata = new DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SImagingIngestionAlvearieOrgDicomEventDrivenIngestionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
