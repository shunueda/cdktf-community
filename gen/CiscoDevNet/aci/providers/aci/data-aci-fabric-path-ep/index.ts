// https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/fabric_path_ep
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciFabricPathEpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/fabric_path_ep#annotation DataAciFabricPathEp#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/fabric_path_ep#description DataAciFabricPathEp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/fabric_path_ep#id DataAciFabricPathEp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/fabric_path_ep#name DataAciFabricPathEp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/fabric_path_ep#node_id DataAciFabricPathEp#node_id}
  */
  readonly nodeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/fabric_path_ep#pod_id DataAciFabricPathEp#pod_id}
  */
  readonly podId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/fabric_path_ep#vpc DataAciFabricPathEp#vpc}
  */
  readonly vpc?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/fabric_path_ep aci_fabric_path_ep}
*/
export class DataAciFabricPathEp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_fabric_path_ep";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciFabricPathEp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciFabricPathEp to import
  * @param importFromId The id of the existing DataAciFabricPathEp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/fabric_path_ep#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciFabricPathEp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_fabric_path_ep", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/fabric_path_ep aci_fabric_path_ep} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciFabricPathEpConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciFabricPathEpConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_fabric_path_ep',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nodeId = config.nodeId;
    this._podId = config.podId;
    this._vpc = config.vpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // description - computed: true, optional: true, required: false
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

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // pod_id - computed: false, optional: false, required: true
  private _podId?: string; 
  public get podId() {
    return this.getStringAttribute('pod_id');
  }
  public set podId(value: string) {
    this._podId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdInput() {
    return this._podId;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc?: boolean | cdktf.IResolvable; 
  public get vpc() {
    return this.getBooleanAttribute('vpc');
  }
  public set vpc(value: boolean | cdktf.IResolvable) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_id: cdktf.stringToTerraform(this._nodeId),
      pod_id: cdktf.stringToTerraform(this._podId),
      vpc: cdktf.booleanToTerraform(this._vpc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_id: {
        value: cdktf.stringToHclTerraform(this._podId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc: {
        value: cdktf.booleanToHclTerraform(this._vpc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
