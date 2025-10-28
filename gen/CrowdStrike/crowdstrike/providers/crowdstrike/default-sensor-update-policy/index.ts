// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultSensorUpdatePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sensor build to use for the default sensor update policy. Use an empty string to turn off sensor version updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy#build DefaultSensorUpdatePolicy#build}
  */
  readonly buildAttribute: string;
  /**
  * Sensor arm64 build to use for the default sensor update policy (Linux only). Required if platform_name is Linux. Use an empty string to turn off sensor version updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy#build_arm64 DefaultSensorUpdatePolicy#build_arm64}
  */
  readonly buildArm64?: string;
  /**
  * Chooses which default sensor update policy to manage. (Windows, Mac, Linux). Changing this value will require replacing the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy#platform_name DefaultSensorUpdatePolicy#platform_name}
  */
  readonly platformName: string;
  /**
  * Prohibit sensor updates during a set of time blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy#schedule DefaultSensorUpdatePolicy#schedule}
  */
  readonly schedule: DefaultSensorUpdatePolicySchedule;
  /**
  * Enable uninstall protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy#uninstall_protection DefaultSensorUpdatePolicy#uninstall_protection}
  */
  readonly uninstallProtection?: boolean | cdktf.IResolvable;
}
export interface DefaultSensorUpdatePolicyScheduleTimeBlocks {
  /**
  * The days of the week the time block should be active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy#days DefaultSensorUpdatePolicy#days}
  */
  readonly days: string[];
  /**
  * The end time for the time block in 24HR format. Must be atleast 1 hour more than start_time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy#end_time DefaultSensorUpdatePolicy#end_time}
  */
  readonly endTime: string;
  /**
  * The start time for the time block in 24HR format. Must be atleast 1 hour before end_time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy#start_time DefaultSensorUpdatePolicy#start_time}
  */
  readonly startTime: string;
}

export function defaultSensorUpdatePolicyScheduleTimeBlocksToTerraform(struct?: DefaultSensorUpdatePolicyScheduleTimeBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function defaultSensorUpdatePolicyScheduleTimeBlocksToHclTerraform(struct?: DefaultSensorUpdatePolicyScheduleTimeBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultSensorUpdatePolicyScheduleTimeBlocksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultSensorUpdatePolicyScheduleTimeBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSensorUpdatePolicyScheduleTimeBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: string[]; 
  public get days() {
    return cdktf.Fn.tolist(this.getListAttribute('days'));
  }
  public set days(value: string[]) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class DefaultSensorUpdatePolicyScheduleTimeBlocksList extends cdktf.ComplexList {
  public internalValue? : DefaultSensorUpdatePolicyScheduleTimeBlocks[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DefaultSensorUpdatePolicyScheduleTimeBlocksOutputReference {
    return new DefaultSensorUpdatePolicyScheduleTimeBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultSensorUpdatePolicySchedule {
  /**
  * Enable the scheduler for sensor update policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy#enabled DefaultSensorUpdatePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The time block to prevent sensor updates. Only set when enabled is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy#time_blocks DefaultSensorUpdatePolicy#time_blocks}
  */
  readonly timeBlocks?: DefaultSensorUpdatePolicyScheduleTimeBlocks[] | cdktf.IResolvable;
  /**
  * The time zones that will be used for the time blocks. Only set when enabled is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy#timezone DefaultSensorUpdatePolicy#timezone}
  */
  readonly timezone?: string;
}

export function defaultSensorUpdatePolicyScheduleToTerraform(struct?: DefaultSensorUpdatePolicySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time_blocks: cdktf.listMapper(defaultSensorUpdatePolicyScheduleTimeBlocksToTerraform, false)(struct!.timeBlocks),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function defaultSensorUpdatePolicyScheduleToHclTerraform(struct?: DefaultSensorUpdatePolicySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_blocks: {
      value: cdktf.listMapperHcl(defaultSensorUpdatePolicyScheduleTimeBlocksToHclTerraform, false)(struct!.timeBlocks),
      isBlock: true,
      type: "set",
      storageClassType: "DefaultSensorUpdatePolicyScheduleTimeBlocksList",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultSensorUpdatePolicyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultSensorUpdatePolicySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBlocks = this._timeBlocks?.internalValue;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSensorUpdatePolicySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._timeBlocks.internalValue = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._timeBlocks.internalValue = value.timeBlocks;
      this._timezone = value.timezone;
    }
  }

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

  // time_blocks - computed: false, optional: true, required: false
  private _timeBlocks = new DefaultSensorUpdatePolicyScheduleTimeBlocksList(this, "time_blocks", true);
  public get timeBlocks() {
    return this._timeBlocks;
  }
  public putTimeBlocks(value: DefaultSensorUpdatePolicyScheduleTimeBlocks[] | cdktf.IResolvable) {
    this._timeBlocks.internalValue = value;
  }
  public resetTimeBlocks() {
    this._timeBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBlocksInput() {
    return this._timeBlocks.internalValue;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy crowdstrike_default_sensor_update_policy}
*/
export class DefaultSensorUpdatePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_default_sensor_update_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultSensorUpdatePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultSensorUpdatePolicy to import
  * @param importFromId The id of the existing DefaultSensorUpdatePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultSensorUpdatePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_default_sensor_update_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.39/docs/resources/default_sensor_update_policy crowdstrike_default_sensor_update_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultSensorUpdatePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultSensorUpdatePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_default_sensor_update_policy',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._build = config.buildAttribute;
    this._buildArm64 = config.buildArm64;
    this._platformName = config.platformName;
    this._schedule.internalValue = config.schedule;
    this._uninstallProtection = config.uninstallProtection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build - computed: false, optional: false, required: true
  private _build?: string; 
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }
  public set buildAttribute(value: string) {
    this._build = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build;
  }

  // build_arm64 - computed: false, optional: true, required: false
  private _buildArm64?: string; 
  public get buildArm64() {
    return this.getStringAttribute('build_arm64');
  }
  public set buildArm64(value: string) {
    this._buildArm64 = value;
  }
  public resetBuildArm64() {
    this._buildArm64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildArm64Input() {
    return this._buildArm64;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // platform_name - computed: false, optional: false, required: true
  private _platformName?: string; 
  public get platformName() {
    return this.getStringAttribute('platform_name');
  }
  public set platformName(value: string) {
    this._platformName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformNameInput() {
    return this._platformName;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new DefaultSensorUpdatePolicyScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DefaultSensorUpdatePolicySchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // uninstall_protection - computed: true, optional: true, required: false
  private _uninstallProtection?: boolean | cdktf.IResolvable; 
  public get uninstallProtection() {
    return this.getBooleanAttribute('uninstall_protection');
  }
  public set uninstallProtection(value: boolean | cdktf.IResolvable) {
    this._uninstallProtection = value;
  }
  public resetUninstallProtection() {
    this._uninstallProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uninstallProtectionInput() {
    return this._uninstallProtection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      build: cdktf.stringToTerraform(this._build),
      build_arm64: cdktf.stringToTerraform(this._buildArm64),
      platform_name: cdktf.stringToTerraform(this._platformName),
      schedule: defaultSensorUpdatePolicyScheduleToTerraform(this._schedule.internalValue),
      uninstall_protection: cdktf.booleanToTerraform(this._uninstallProtection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      build: {
        value: cdktf.stringToHclTerraform(this._build),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_arm64: {
        value: cdktf.stringToHclTerraform(this._buildArm64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_name: {
        value: cdktf.stringToHclTerraform(this._platformName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: defaultSensorUpdatePolicyScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultSensorUpdatePolicySchedule",
      },
      uninstall_protection: {
        value: cdktf.booleanToHclTerraform(this._uninstallProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
