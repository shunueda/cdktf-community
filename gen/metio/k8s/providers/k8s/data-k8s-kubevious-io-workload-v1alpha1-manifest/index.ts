// generated from terraform resource schema

import { DataK8SKubeviousIoWorkloadV1Alpha1ManifestMetadata, 
dataK8SKubeviousIoWorkloadV1Alpha1ManifestMetadataToTerraform, 
dataK8SKubeviousIoWorkloadV1Alpha1ManifestMetadataToHclTerraform, 
DataK8SKubeviousIoWorkloadV1Alpha1ManifestMetadataOutputReference, 
DataK8SKubeviousIoWorkloadV1Alpha1ManifestScale, 
dataK8SKubeviousIoWorkloadV1Alpha1ManifestScaleToTerraform, 
dataK8SKubeviousIoWorkloadV1Alpha1ManifestScaleToHclTerraform, 
DataK8SKubeviousIoWorkloadV1Alpha1ManifestScaleOutputReference, 
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpec, 
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecToTerraform, 
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecToHclTerraform, 
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#metadata DataK8SKubeviousIoWorkloadV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKubeviousIoWorkloadV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#scale DataK8SKubeviousIoWorkloadV1Alpha1Manifest#scale}
  */
  readonly scale?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestScale;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#spec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpec;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kubevious_io_workload_v1alpha1_manifest k8s_kubevious_io_workload_v1alpha1_manifest}
*/
export class DataK8SKubeviousIoWorkloadV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kubevious_io_workload_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKubeviousIoWorkloadV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKubeviousIoWorkloadV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKubeviousIoWorkloadV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKubeviousIoWorkloadV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kubevious_io_workload_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/kubevious_io_workload_v1alpha1_manifest k8s_kubevious_io_workload_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKubeviousIoWorkloadV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKubeviousIoWorkloadV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kubevious_io_workload_v1alpha1_manifest',
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
    this._scale.internalValue = config.scale;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // scale - computed: false, optional: true, required: false
  private _scale = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestScaleOutputReference(this, "scale");
  public get scale() {
    return this._scale;
  }
  public putScale(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestScale) {
    this._scale.internalValue = value;
  }
  public resetScale() {
    this._scale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKubeviousIoWorkloadV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      scale: dataK8SKubeviousIoWorkloadV1Alpha1ManifestScaleToTerraform(this._scale.internalValue),
      spec: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestMetadata",
      },
      scale: {
        value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestScaleToHclTerraform(this._scale.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestScale",
      },
      spec: {
        value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
