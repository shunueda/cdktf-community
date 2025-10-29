// generated from terraform resource schema

import { DataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadata, 
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadataToTerraform, 
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadataToHclTerraform, 
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadataOutputReference, 
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpec, 
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecToTerraform, 
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecToHclTerraform, 
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecOutputReference, 
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecs, 
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsToTerraform, 
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsToHclTerraform, 
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#metadata DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#metadata}
  */
  readonly metadata: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadata;
  /**
  * Spec is the desired Cilium specific rule specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#spec DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#spec}
  */
  readonly spec?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpec;
  /**
  * Specs is a list of desired Cilium specific rule specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#specs DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#specs}
  */
  readonly specs?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecs[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest k8s_cilium_io_cilium_network_policy_v2_manifest}
*/
export class DataK8SCiliumIoCiliumNetworkPolicyV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cilium_io_cilium_network_policy_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCiliumIoCiliumNetworkPolicyV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCiliumIoCiliumNetworkPolicyV2Manifest to import
  * @param importFromId The id of the existing DataK8SCiliumIoCiliumNetworkPolicyV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCiliumIoCiliumNetworkPolicyV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cilium_io_cilium_network_policy_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest k8s_cilium_io_cilium_network_policy_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCiliumIoCiliumNetworkPolicyV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cilium_io_cilium_network_policy_v2_manifest',
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
    this._specs.internalValue = config.specs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // specs - computed: false, optional: true, required: false
  private _specs = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsList(this, "specs", false);
  public get specs() {
    return this._specs;
  }
  public putSpecs(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecs[] | cdktf.IResolvable) {
    this._specs.internalValue = value;
  }
  public resetSpecs() {
    this._specs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specsInput() {
    return this._specs.internalValue;
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
      metadata: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecToTerraform(this._spec.internalValue),
      specs: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsToTerraform, false)(this._specs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadata",
      },
      spec: {
        value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpec",
      },
      specs: {
        value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsToHclTerraform, false)(this._specs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
