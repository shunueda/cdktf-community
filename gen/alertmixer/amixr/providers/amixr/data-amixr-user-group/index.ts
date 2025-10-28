// https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/data-sources/user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAmixrUserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/data-sources/user_group#id DataAmixrUserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/data-sources/user_group#slack_handle DataAmixrUserGroup#slack_handle}
  */
  readonly slackHandle: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/data-sources/user_group amixr_user_group}
*/
export class DataAmixrUserGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "amixr_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAmixrUserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAmixrUserGroup to import
  * @param importFromId The id of the existing DataAmixrUserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/data-sources/user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAmixrUserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "amixr_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/data-sources/user_group amixr_user_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAmixrUserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAmixrUserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'amixr_user_group',
      terraformGeneratorMetadata: {
        providerName: 'amixr',
        providerVersion: '0.2.3'
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
    this._slackHandle = config.slackHandle;
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

  // slack_handle - computed: false, optional: false, required: true
  private _slackHandle?: string; 
  public get slackHandle() {
    return this.getStringAttribute('slack_handle');
  }
  public set slackHandle(value: string) {
    this._slackHandle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slackHandleInput() {
    return this._slackHandle;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      slack_handle: cdktf.stringToTerraform(this._slackHandle),
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
      slack_handle: {
        value: cdktf.stringToHclTerraform(this._slackHandle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
