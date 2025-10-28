// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector_gcpprojectlist_move
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemSdnconnectorGcpprojectlistMoveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector_gcpprojectlist_move#adom ObjectSystemSdnconnectorGcpprojectlistMove#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector_gcpprojectlist_move#gcp_project_list ObjectSystemSdnconnectorGcpprojectlistMove#gcp_project_list}
  */
  readonly gcpProjectList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector_gcpprojectlist_move#id ObjectSystemSdnconnectorGcpprojectlistMove#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector_gcpprojectlist_move#option ObjectSystemSdnconnectorGcpprojectlistMove#option}
  */
  readonly option: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector_gcpprojectlist_move#scopetype ObjectSystemSdnconnectorGcpprojectlistMove#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector_gcpprojectlist_move#sdn_connector ObjectSystemSdnconnectorGcpprojectlistMove#sdn_connector}
  */
  readonly sdnConnector: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector_gcpprojectlist_move#state_pos ObjectSystemSdnconnectorGcpprojectlistMove#state_pos}
  */
  readonly statePos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector_gcpprojectlist_move#target ObjectSystemSdnconnectorGcpprojectlistMove#target}
  */
  readonly target: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector_gcpprojectlist_move fortimanager_object_system_sdnconnector_gcpprojectlist_move}
*/
export class ObjectSystemSdnconnectorGcpprojectlistMove extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_sdnconnector_gcpprojectlist_move";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemSdnconnectorGcpprojectlistMove resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemSdnconnectorGcpprojectlistMove to import
  * @param importFromId The id of the existing ObjectSystemSdnconnectorGcpprojectlistMove that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector_gcpprojectlist_move#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemSdnconnectorGcpprojectlistMove to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_sdnconnector_gcpprojectlist_move", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector_gcpprojectlist_move fortimanager_object_system_sdnconnector_gcpprojectlist_move} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemSdnconnectorGcpprojectlistMoveConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemSdnconnectorGcpprojectlistMoveConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_sdnconnector_gcpprojectlist_move',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._gcpProjectList = config.gcpProjectList;
    this._id = config.id;
    this._option = config.option;
    this._scopetype = config.scopetype;
    this._sdnConnector = config.sdnConnector;
    this._statePos = config.statePos;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // gcp_project_list - computed: false, optional: false, required: true
  private _gcpProjectList?: string; 
  public get gcpProjectList() {
    return this.getStringAttribute('gcp_project_list');
  }
  public set gcpProjectList(value: string) {
    this._gcpProjectList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectListInput() {
    return this._gcpProjectList;
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

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sdn_connector - computed: false, optional: false, required: true
  private _sdnConnector?: string; 
  public get sdnConnector() {
    return this.getStringAttribute('sdn_connector');
  }
  public set sdnConnector(value: string) {
    this._sdnConnector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnConnectorInput() {
    return this._sdnConnector;
  }

  // state_pos - computed: true, optional: true, required: false
  private _statePos?: string; 
  public get statePos() {
    return this.getStringAttribute('state_pos');
  }
  public set statePos(value: string) {
    this._statePos = value;
  }
  public resetStatePos() {
    this._statePos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statePosInput() {
    return this._statePos;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      gcp_project_list: cdktf.stringToTerraform(this._gcpProjectList),
      id: cdktf.stringToTerraform(this._id),
      option: cdktf.stringToTerraform(this._option),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sdn_connector: cdktf.stringToTerraform(this._sdnConnector),
      state_pos: cdktf.stringToTerraform(this._statePos),
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_project_list: {
        value: cdktf.stringToHclTerraform(this._gcpProjectList),
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
      option: {
        value: cdktf.stringToHclTerraform(this._option),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn_connector: {
        value: cdktf.stringToHclTerraform(this._sdnConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_pos: {
        value: cdktf.stringToHclTerraform(this._statePos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
