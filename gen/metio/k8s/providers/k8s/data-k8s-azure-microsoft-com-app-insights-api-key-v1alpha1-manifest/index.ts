// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadata;
  /**
  * AppInsightsApiKeySpec defines the desired state of AppInsightsApiKey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest#spec DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest#labels DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest#name DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest#app_insights DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest#app_insights}
  */
  readonly appInsights: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest#auth_sdk_control_channel DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest#auth_sdk_control_channel}
  */
  readonly authSdkControlChannel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest#read_telemetry DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest#read_telemetry}
  */
  readonly readTelemetry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest#write_annotations DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest#write_annotations}
  */
  readonly writeAnnotations?: boolean | cdktf.IResolvable;
}

export function dataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_insights: cdktf.stringToTerraform(struct!.appInsights),
    auth_sdk_control_channel: cdktf.booleanToTerraform(struct!.authSdkControlChannel),
    read_telemetry: cdktf.booleanToTerraform(struct!.readTelemetry),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    write_annotations: cdktf.booleanToTerraform(struct!.writeAnnotations),
  }
}


export function dataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_insights: {
      value: cdktf.stringToHclTerraform(struct!.appInsights),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_sdk_control_channel: {
      value: cdktf.booleanToHclTerraform(struct!.authSdkControlChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_telemetry: {
      value: cdktf.booleanToHclTerraform(struct!.readTelemetry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_annotations: {
      value: cdktf.booleanToHclTerraform(struct!.writeAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appInsights !== undefined) {
      hasAnyValues = true;
      internalValueResult.appInsights = this._appInsights;
    }
    if (this._authSdkControlChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSdkControlChannel = this._authSdkControlChannel;
    }
    if (this._readTelemetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTelemetry = this._readTelemetry;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._writeAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeAnnotations = this._writeAnnotations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appInsights = undefined;
      this._authSdkControlChannel = undefined;
      this._readTelemetry = undefined;
      this._resourceGroup = undefined;
      this._writeAnnotations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appInsights = value.appInsights;
      this._authSdkControlChannel = value.authSdkControlChannel;
      this._readTelemetry = value.readTelemetry;
      this._resourceGroup = value.resourceGroup;
      this._writeAnnotations = value.writeAnnotations;
    }
  }

  // app_insights - computed: false, optional: false, required: true
  private _appInsights?: string; 
  public get appInsights() {
    return this.getStringAttribute('app_insights');
  }
  public set appInsights(value: string) {
    this._appInsights = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInsightsInput() {
    return this._appInsights;
  }

  // auth_sdk_control_channel - computed: false, optional: true, required: false
  private _authSdkControlChannel?: boolean | cdktf.IResolvable; 
  public get authSdkControlChannel() {
    return this.getBooleanAttribute('auth_sdk_control_channel');
  }
  public set authSdkControlChannel(value: boolean | cdktf.IResolvable) {
    this._authSdkControlChannel = value;
  }
  public resetAuthSdkControlChannel() {
    this._authSdkControlChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSdkControlChannelInput() {
    return this._authSdkControlChannel;
  }

  // read_telemetry - computed: false, optional: true, required: false
  private _readTelemetry?: boolean | cdktf.IResolvable; 
  public get readTelemetry() {
    return this.getBooleanAttribute('read_telemetry');
  }
  public set readTelemetry(value: boolean | cdktf.IResolvable) {
    this._readTelemetry = value;
  }
  public resetReadTelemetry() {
    this._readTelemetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTelemetryInput() {
    return this._readTelemetry;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // write_annotations - computed: false, optional: true, required: false
  private _writeAnnotations?: boolean | cdktf.IResolvable; 
  public get writeAnnotations() {
    return this.getBooleanAttribute('write_annotations');
  }
  public set writeAnnotations(value: boolean | cdktf.IResolvable) {
    this._writeAnnotations = value;
  }
  public resetWriteAnnotations() {
    this._writeAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAnnotationsInput() {
    return this._writeAnnotations;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest k8s_azure_microsoft_com_app_insights_api_key_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_app_insights_api_key_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_app_insights_api_key_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/azure_microsoft_com_app_insights_api_key_v1alpha1_manifest k8s_azure_microsoft_com_app_insights_api_key_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_app_insights_api_key_v1alpha1_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAppInsightsApiKeyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
