// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/resources/vpc_peering_reject
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPeeringRejectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/resources/vpc_peering_reject#id VpcPeeringReject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Vpc Peering Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/resources/vpc_peering_reject#vpc_peering_id VpcPeeringReject#vpc_peering_id}
  */
  readonly vpcPeeringId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/resources/vpc_peering_reject samsungcloudplatform_vpc_peering_reject}
*/
export class VpcPeeringReject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_vpc_peering_reject";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcPeeringReject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcPeeringReject to import
  * @param importFromId The id of the existing VpcPeeringReject that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/resources/vpc_peering_reject#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcPeeringReject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_vpc_peering_reject", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/resources/vpc_peering_reject samsungcloudplatform_vpc_peering_reject} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPeeringRejectConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPeeringRejectConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_vpc_peering_reject',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._vpcPeeringId = config.vpcPeeringId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // vpc_peering_id - computed: false, optional: false, required: true
  private _vpcPeeringId?: string; 
  public get vpcPeeringId() {
    return this.getStringAttribute('vpc_peering_id');
  }
  public set vpcPeeringId(value: string) {
    this._vpcPeeringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringIdInput() {
    return this._vpcPeeringId;
  }

  // vpc_peering_state - computed: true, optional: false, required: false
  public get vpcPeeringState() {
    return this.getStringAttribute('vpc_peering_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vpc_peering_id: cdktf.stringToTerraform(this._vpcPeeringId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peering_id: {
        value: cdktf.stringToHclTerraform(this._vpcPeeringId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
