// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest#metadata DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadata;
  /**
  * Specification of the desired behavior of the pod group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest#spec DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpec;
}
export interface DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest#annotations DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest#labels DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest#name DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest#namespace DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpec {
  /**
  * MinMember defines the minimal number of members/tasks to run the pod group; if there's not enough resources to start all tasks, the scheduler will not start anyone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest#min_member DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest#min_member}
  */
  readonly minMember?: number;
  /**
  * MinResources defines the minimal resource of members/tasks to run the pod group; if there's not enough resources to start all tasks, the scheduler will not start anyone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest#min_resources DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest#min_resources}
  */
  readonly minResources?: { [key: string]: string };
  /**
  * ScheduleTimeoutSeconds defines the maximal time of members/tasks to wait before run the pod group;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest#schedule_timeout_seconds DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest#schedule_timeout_seconds}
  */
  readonly scheduleTimeoutSeconds?: number;
}

export function dataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_member: cdktf.numberToTerraform(struct!.minMember),
    min_resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.minResources),
    schedule_timeout_seconds: cdktf.numberToTerraform(struct!.scheduleTimeoutSeconds),
  }
}


export function dataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_member: {
      value: cdktf.numberToHclTerraform(struct!.minMember),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.minResources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    schedule_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.scheduleTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMember = this._minMember;
    }
    if (this._minResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.minResources = this._minResources;
    }
    if (this._scheduleTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleTimeoutSeconds = this._scheduleTimeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minMember = undefined;
      this._minResources = undefined;
      this._scheduleTimeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minMember = value.minMember;
      this._minResources = value.minResources;
      this._scheduleTimeoutSeconds = value.scheduleTimeoutSeconds;
    }
  }

  // min_member - computed: false, optional: true, required: false
  private _minMember?: number; 
  public get minMember() {
    return this.getNumberAttribute('min_member');
  }
  public set minMember(value: number) {
    this._minMember = value;
  }
  public resetMinMember() {
    this._minMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemberInput() {
    return this._minMember;
  }

  // min_resources - computed: false, optional: true, required: false
  private _minResources?: { [key: string]: string }; 
  public get minResources() {
    return this.getStringMapAttribute('min_resources');
  }
  public set minResources(value: { [key: string]: string }) {
    this._minResources = value;
  }
  public resetMinResources() {
    this._minResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minResourcesInput() {
    return this._minResources;
  }

  // schedule_timeout_seconds - computed: false, optional: true, required: false
  private _scheduleTimeoutSeconds?: number; 
  public get scheduleTimeoutSeconds() {
    return this.getNumberAttribute('schedule_timeout_seconds');
  }
  public set scheduleTimeoutSeconds(value: number) {
    this._scheduleTimeoutSeconds = value;
  }
  public resetScheduleTimeoutSeconds() {
    this._scheduleTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimeoutSecondsInput() {
    return this._scheduleTimeoutSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest k8s_scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest}
*/
export class DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest k8s_scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_scheduling_sigs_k8s_io_pod_group_v1alpha1_manifest',
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
  private _metadata = new DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingSigsK8SIoPodGroupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
