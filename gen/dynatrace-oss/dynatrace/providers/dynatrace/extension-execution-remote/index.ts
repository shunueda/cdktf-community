// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/extension_execution_remote
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensionExecutionRemoteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/extension_execution_remote#id ExtensionExecutionRemote#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Select performance profile for Extension Execution Controller [Documentation](https://www.dynatrace.com/support/help/shortlink/extensions-concepts#resource-consumption "More about performance profiles")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/extension_execution_remote#performance_profile ExtensionExecutionRemote#performance_profile}
  */
  readonly performanceProfile: string;
  /**
  * The scope of this setting (ENVIRONMENT_ACTIVE_GATE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/extension_execution_remote#scope ExtensionExecutionRemote#scope}
  */
  readonly scope: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/extension_execution_remote dynatrace_extension_execution_remote}
*/
export class ExtensionExecutionRemote extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_extension_execution_remote";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtensionExecutionRemote resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtensionExecutionRemote to import
  * @param importFromId The id of the existing ExtensionExecutionRemote that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/extension_execution_remote#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtensionExecutionRemote to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_extension_execution_remote", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/extension_execution_remote dynatrace_extension_execution_remote} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtensionExecutionRemoteConfig
  */
  public constructor(scope: Construct, id: string, config: ExtensionExecutionRemoteConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_extension_execution_remote',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.86.0'
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
    this._performanceProfile = config.performanceProfile;
    this._scope = config.scope;
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

  // performance_profile - computed: false, optional: false, required: true
  private _performanceProfile?: string; 
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
  public set performanceProfile(value: string) {
    this._performanceProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      performance_profile: cdktf.stringToTerraform(this._performanceProfile),
      scope: cdktf.stringToTerraform(this._scope),
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
      performance_profile: {
        value: cdktf.stringToHclTerraform(this._performanceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
