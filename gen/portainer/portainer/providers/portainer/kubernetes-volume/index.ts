// https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/kubernetes_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/kubernetes_volume#endpoint_id KubernetesVolume#endpoint_id}
  */
  readonly endpointId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/kubernetes_volume#id KubernetesVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/kubernetes_volume#manifest KubernetesVolume#manifest}
  */
  readonly manifest: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/kubernetes_volume#namespace KubernetesVolume#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/kubernetes_volume#type KubernetesVolume#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/kubernetes_volume portainer_kubernetes_volume}
*/
export class KubernetesVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_kubernetes_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesVolume to import
  * @param importFromId The id of the existing KubernetesVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/kubernetes_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_kubernetes_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.14.1/docs/resources/kubernetes_volume portainer_kubernetes_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_kubernetes_volume',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._manifest = config.manifest;
    this._namespace = config.namespace;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: number; 
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }
  public set endpointId(value: number) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // manifest - computed: false, optional: false, required: true
  private _manifest?: string; 
  public get manifest() {
    return this.getStringAttribute('manifest');
  }
  public set manifest(value: string) {
    this._manifest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      manifest: cdktf.stringToTerraform(this._manifest),
      namespace: cdktf.stringToTerraform(this._namespace),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_id: {
        value: cdktf.numberToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifest: {
        value: cdktf.stringToHclTerraform(this._manifest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
