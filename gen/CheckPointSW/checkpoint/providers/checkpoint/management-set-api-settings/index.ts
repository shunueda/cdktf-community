// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_api_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSetApiSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clients allowed to connect to the API Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_api_settings#accepted_api_calls_from ManagementSetApiSettings#accepted_api_calls_from}
  */
  readonly acceptedApiCallsFrom?: string;
  /**
  * MGMT API will start after server will start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_api_settings#automatic_start ManagementSetApiSettings#automatic_start}
  */
  readonly automaticStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_api_settings#id ManagementSetApiSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_api_settings checkpoint_management_set_api_settings}
*/
export class ManagementSetApiSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_set_api_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSetApiSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSetApiSettings to import
  * @param importFromId The id of the existing ManagementSetApiSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_api_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSetApiSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_set_api_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_api_settings checkpoint_management_set_api_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSetApiSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementSetApiSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_set_api_settings',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptedApiCallsFrom = config.acceptedApiCallsFrom;
    this._automaticStart = config.automaticStart;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted_api_calls_from - computed: false, optional: true, required: false
  private _acceptedApiCallsFrom?: string; 
  public get acceptedApiCallsFrom() {
    return this.getStringAttribute('accepted_api_calls_from');
  }
  public set acceptedApiCallsFrom(value: string) {
    this._acceptedApiCallsFrom = value;
  }
  public resetAcceptedApiCallsFrom() {
    this._acceptedApiCallsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedApiCallsFromInput() {
    return this._acceptedApiCallsFrom;
  }

  // automatic_start - computed: false, optional: true, required: false
  private _automaticStart?: boolean | cdktf.IResolvable; 
  public get automaticStart() {
    return this.getBooleanAttribute('automatic_start');
  }
  public set automaticStart(value: boolean | cdktf.IResolvable) {
    this._automaticStart = value;
  }
  public resetAutomaticStart() {
    this._automaticStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticStartInput() {
    return this._automaticStart;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accepted_api_calls_from: cdktf.stringToTerraform(this._acceptedApiCallsFrom),
      automatic_start: cdktf.booleanToTerraform(this._automaticStart),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accepted_api_calls_from: {
        value: cdktf.stringToHclTerraform(this._acceptedApiCallsFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_start: {
        value: cdktf.booleanToHclTerraform(this._automaticStart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
