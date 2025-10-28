// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogfortiguardOverridesettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting#access_config LogfortiguardOverridesetting#access_config}
  */
  readonly accessConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting#id LogfortiguardOverridesetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting#max_log_rate LogfortiguardOverridesetting#max_log_rate}
  */
  readonly maxLogRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting#override LogfortiguardOverridesetting#override}
  */
  readonly override?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting#priority LogfortiguardOverridesetting#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting#status LogfortiguardOverridesetting#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting#upload_day LogfortiguardOverridesetting#upload_day}
  */
  readonly uploadDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting#upload_interval LogfortiguardOverridesetting#upload_interval}
  */
  readonly uploadInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting#upload_option LogfortiguardOverridesetting#upload_option}
  */
  readonly uploadOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting#upload_time LogfortiguardOverridesetting#upload_time}
  */
  readonly uploadTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting#vdomparam LogfortiguardOverridesetting#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting fortios_logfortiguard_overridesetting}
*/
export class LogfortiguardOverridesetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_logfortiguard_overridesetting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogfortiguardOverridesetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogfortiguardOverridesetting to import
  * @param importFromId The id of the existing LogfortiguardOverridesetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogfortiguardOverridesetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_logfortiguard_overridesetting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logfortiguard_overridesetting fortios_logfortiguard_overridesetting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogfortiguardOverridesettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogfortiguardOverridesettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_logfortiguard_overridesetting',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessConfig = config.accessConfig;
    this._id = config.id;
    this._maxLogRate = config.maxLogRate;
    this._override = config.override;
    this._priority = config.priority;
    this._status = config.status;
    this._uploadDay = config.uploadDay;
    this._uploadInterval = config.uploadInterval;
    this._uploadOption = config.uploadOption;
    this._uploadTime = config.uploadTime;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_config - computed: true, optional: true, required: false
  private _accessConfig?: string; 
  public get accessConfig() {
    return this.getStringAttribute('access_config');
  }
  public set accessConfig(value: string) {
    this._accessConfig = value;
  }
  public resetAccessConfig() {
    this._accessConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig;
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

  // max_log_rate - computed: false, optional: true, required: false
  private _maxLogRate?: number; 
  public get maxLogRate() {
    return this.getNumberAttribute('max_log_rate');
  }
  public set maxLogRate(value: number) {
    this._maxLogRate = value;
  }
  public resetMaxLogRate() {
    this._maxLogRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogRateInput() {
    return this._maxLogRate;
  }

  // override - computed: true, optional: true, required: false
  private _override?: string; 
  public get override() {
    return this.getStringAttribute('override');
  }
  public set override(value: string) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // upload_day - computed: false, optional: true, required: false
  private _uploadDay?: string; 
  public get uploadDay() {
    return this.getStringAttribute('upload_day');
  }
  public set uploadDay(value: string) {
    this._uploadDay = value;
  }
  public resetUploadDay() {
    this._uploadDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadDayInput() {
    return this._uploadDay;
  }

  // upload_interval - computed: true, optional: true, required: false
  private _uploadInterval?: string; 
  public get uploadInterval() {
    return this.getStringAttribute('upload_interval');
  }
  public set uploadInterval(value: string) {
    this._uploadInterval = value;
  }
  public resetUploadInterval() {
    this._uploadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadIntervalInput() {
    return this._uploadInterval;
  }

  // upload_option - computed: true, optional: true, required: false
  private _uploadOption?: string; 
  public get uploadOption() {
    return this.getStringAttribute('upload_option');
  }
  public set uploadOption(value: string) {
    this._uploadOption = value;
  }
  public resetUploadOption() {
    this._uploadOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadOptionInput() {
    return this._uploadOption;
  }

  // upload_time - computed: false, optional: true, required: false
  private _uploadTime?: string; 
  public get uploadTime() {
    return this.getStringAttribute('upload_time');
  }
  public set uploadTime(value: string) {
    this._uploadTime = value;
  }
  public resetUploadTime() {
    this._uploadTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTimeInput() {
    return this._uploadTime;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_config: cdktf.stringToTerraform(this._accessConfig),
      id: cdktf.stringToTerraform(this._id),
      max_log_rate: cdktf.numberToTerraform(this._maxLogRate),
      override: cdktf.stringToTerraform(this._override),
      priority: cdktf.stringToTerraform(this._priority),
      status: cdktf.stringToTerraform(this._status),
      upload_day: cdktf.stringToTerraform(this._uploadDay),
      upload_interval: cdktf.stringToTerraform(this._uploadInterval),
      upload_option: cdktf.stringToTerraform(this._uploadOption),
      upload_time: cdktf.stringToTerraform(this._uploadTime),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_config: {
        value: cdktf.stringToHclTerraform(this._accessConfig),
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
      max_log_rate: {
        value: cdktf.numberToHclTerraform(this._maxLogRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      override: {
        value: cdktf.stringToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_day: {
        value: cdktf.stringToHclTerraform(this._uploadDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_interval: {
        value: cdktf.stringToHclTerraform(this._uploadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_option: {
        value: cdktf.stringToHclTerraform(this._uploadOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_time: {
        value: cdktf.stringToHclTerraform(this._uploadTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
