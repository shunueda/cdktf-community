// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest#metadata DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest#metadata}
  */
  readonly metadata: DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest#spec DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest#spec}
  */
  readonly spec?: DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpec;
}
export interface DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest#annotations DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest#labels DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest#name DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest#namespace DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadataToTerraform(struct?: DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadataToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest#config DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest#plugin_name DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest#plugin_name}
  */
  readonly pluginName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest#selector DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest#selector}
  */
  readonly selector: { [key: string]: string };
}

export function dataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpecToTerraform(struct?: DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
  }
}


export function dataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpecToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    plugin_name: {
      value: cdktf.stringToHclTerraform(struct!.pluginName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._pluginName = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._pluginName = value.pluginName;
      this._selector = value.selector;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // plugin_name - computed: false, optional: false, required: true
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest k8s_apps_emqx_io_emqx_plugin_v1beta4_manifest}
*/
export class DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_emqx_io_emqx_plugin_v1beta4_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest to import
  * @param importFromId The id of the existing DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsEmqxIoEmqxPluginV1Beta4Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_emqx_io_emqx_plugin_v1beta4_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/apps_emqx_io_emqx_plugin_v1beta4_manifest k8s_apps_emqx_io_emqx_plugin_v1beta4_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_emqx_io_emqx_plugin_v1beta4_manifest',
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
  private _metadata = new DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpec) {
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
      metadata: dataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsEmqxIoEmqxPluginV1Beta4ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
