// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby_persistent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpAForceSelfStandbyPersistentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby_persistent#id VrrpAForceSelfStandbyPersistent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby_persistent#uuid VrrpAForceSelfStandbyPersistent#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify one VRRP-A vrid to force into standby state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby_persistent#vrid VrrpAForceSelfStandbyPersistent#vrid}
  */
  readonly vrid: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby_persistent thunder_vrrp_a_force_self_standby_persistent}
*/
export class VrrpAForceSelfStandbyPersistent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_force_self_standby_persistent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpAForceSelfStandbyPersistent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpAForceSelfStandbyPersistent to import
  * @param importFromId The id of the existing VrrpAForceSelfStandbyPersistent that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby_persistent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpAForceSelfStandbyPersistent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_force_self_standby_persistent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_force_self_standby_persistent thunder_vrrp_a_force_self_standby_persistent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpAForceSelfStandbyPersistentConfig
  */
  public constructor(scope: Construct, id: string, config: VrrpAForceSelfStandbyPersistentConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_force_self_standby_persistent',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._uuid = config.uuid;
    this._vrid = config.vrid;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vrid - computed: false, optional: false, required: true
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid: cdktf.numberToTerraform(this._vrid),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
