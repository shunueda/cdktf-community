// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/monitored_technologies_dotnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoredTechnologiesDotnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/monitored_technologies_dotnet#enabled MonitoredTechnologiesDotnet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Requires Dynatrace OneAgent version 1.117 or later on Windows and version 1.127 or later on Linux and .NET monitoring enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/monitored_technologies_dotnet#enabled_dot_net_core MonitoredTechnologiesDotnet#enabled_dot_net_core}
  */
  readonly enabledDotNetCore?: boolean | cdktf.IResolvable;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/monitored_technologies_dotnet#host_id MonitoredTechnologiesDotnet#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/monitored_technologies_dotnet#id MonitoredTechnologiesDotnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/monitored_technologies_dotnet dynatrace_monitored_technologies_dotnet}
*/
export class MonitoredTechnologiesDotnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_monitored_technologies_dotnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitoredTechnologiesDotnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitoredTechnologiesDotnet to import
  * @param importFromId The id of the existing MonitoredTechnologiesDotnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/monitored_technologies_dotnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitoredTechnologiesDotnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_monitored_technologies_dotnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/monitored_technologies_dotnet dynatrace_monitored_technologies_dotnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoredTechnologiesDotnetConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoredTechnologiesDotnetConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_monitored_technologies_dotnet',
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
    this._enabled = config.enabled;
    this._enabledDotNetCore = config.enabledDotNetCore;
    this._hostId = config.hostId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enabled_dot_net_core - computed: false, optional: true, required: false
  private _enabledDotNetCore?: boolean | cdktf.IResolvable; 
  public get enabledDotNetCore() {
    return this.getBooleanAttribute('enabled_dot_net_core');
  }
  public set enabledDotNetCore(value: boolean | cdktf.IResolvable) {
    this._enabledDotNetCore = value;
  }
  public resetEnabledDotNetCore() {
    this._enabledDotNetCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledDotNetCoreInput() {
    return this._enabledDotNetCore;
  }

  // host_id - computed: false, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      enabled_dot_net_core: cdktf.booleanToTerraform(this._enabledDotNetCore),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_dot_net_core: {
        value: cdktf.booleanToHclTerraform(this._enabledDotNetCore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
