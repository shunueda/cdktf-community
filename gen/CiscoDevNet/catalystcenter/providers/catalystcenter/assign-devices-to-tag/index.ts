// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/resources/assign_devices_to_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssignDevicesToTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device Ids List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/resources/assign_devices_to_tag#device_ids AssignDevicesToTag#device_ids}
  */
  readonly deviceIds?: string[];
  /**
  * Tag Id to be associated with the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/resources/assign_devices_to_tag#tag_id AssignDevicesToTag#tag_id}
  */
  readonly tagId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/resources/assign_devices_to_tag catalystcenter_assign_devices_to_tag}
*/
export class AssignDevicesToTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_assign_devices_to_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssignDevicesToTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssignDevicesToTag to import
  * @param importFromId The id of the existing AssignDevicesToTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/resources/assign_devices_to_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssignDevicesToTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_assign_devices_to_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/resources/assign_devices_to_tag catalystcenter_assign_devices_to_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssignDevicesToTagConfig
  */
  public constructor(scope: Construct, id: string, config: AssignDevicesToTagConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_assign_devices_to_tag',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceIds = config.deviceIds;
    this._tagId = config.tagId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_ids - computed: false, optional: true, required: false
  private _deviceIds?: string[]; 
  public get deviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('device_ids'));
  }
  public set deviceIds(value: string[]) {
    this._deviceIds = value;
  }
  public resetDeviceIds() {
    this._deviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tag_id - computed: false, optional: false, required: true
  private _tagId?: string; 
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }
  public set tagId(value: string) {
    this._tagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceIds),
      tag_id: cdktf.stringToTerraform(this._tagId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_id: {
        value: cdktf.stringToHclTerraform(this._tagId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
