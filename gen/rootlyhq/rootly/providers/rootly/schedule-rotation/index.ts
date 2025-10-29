// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduleRotationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Schedule rotation active all week?. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#active_all_week ScheduleRotation#active_all_week}
  */
  readonly activeAllWeek?: boolean | cdktf.IResolvable;
  /**
  * Value must be one of `S`, `M`, `T`, `W`, `R`, `F`, `U`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#active_days ScheduleRotation#active_days}
  */
  readonly activeDays?: string[];
  /**
  * Value must be one of `all_day`, `same_time`, or `custom`. The value chosen will override `active_time_attributes` in any `rootly_schedule_rotation_active_day` resources linked to this `rootly_schedule_rotation`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#active_time_type ScheduleRotation#active_time_type}
  */
  readonly activeTimeType?: string;
  /**
  * ISO8601 date and time when rotation ends. Shifts will only be created before this time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#end_time ScheduleRotation#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#id ScheduleRotation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the schedule rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#name ScheduleRotation#name}
  */
  readonly name: string;
  /**
  * Position of the schedule rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#position ScheduleRotation#position}
  */
  readonly position?: number;
  /**
  * The ID of parent schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#schedule_id ScheduleRotation#schedule_id}
  */
  readonly scheduleId: string;
  /**
  * handoff_time and/or handoff_day may be required, depending on schedule_rotationable_type. Please see API docs for options based on schedule_rotationable_type: https://docs.rootly.com/api-reference/schedulerotations/creates-a-schedule-rotation#response-data-attributes-schedule-rotationable-attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#schedule_rotationable_attributes ScheduleRotation#schedule_rotationable_attributes}
  */
  readonly scheduleRotationableAttributes: { [key: string]: string };
  /**
  * Schedule rotation type. Value must be one of `ScheduleDailyRotation`, `ScheduleWeeklyRotation`, `ScheduleBiweeklyRotation`, `ScheduleMonthlyRotation`, `ScheduleCustomRotation`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#schedule_rotationable_type ScheduleRotation#schedule_rotationable_type}
  */
  readonly scheduleRotationableType?: string;
  /**
  * ISO8601 date and time when rotation starts. Shifts will only be created after this time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#start_time ScheduleRotation#start_time}
  */
  readonly startTime?: string;
  /**
  * A valid IANA time zone name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#time_zone ScheduleRotation#time_zone}
  */
  readonly timeZone?: string;
  /**
  * active_time_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#active_time_attributes ScheduleRotation#active_time_attributes}
  */
  readonly activeTimeAttributes?: ScheduleRotationActiveTimeAttributes[] | cdktf.IResolvable;
}
export interface ScheduleRotationActiveTimeAttributes {
  /**
  * End time for schedule rotation active time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#end_time ScheduleRotation#end_time}
  */
  readonly endTime?: string;
  /**
  * Start time for schedule rotation active time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#start_time ScheduleRotation#start_time}
  */
  readonly startTime?: string;
}

export function scheduleRotationActiveTimeAttributesToTerraform(struct?: ScheduleRotationActiveTimeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function scheduleRotationActiveTimeAttributesToHclTerraform(struct?: ScheduleRotationActiveTimeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ScheduleRotationActiveTimeAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScheduleRotationActiveTimeAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ScheduleRotationActiveTimeAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class ScheduleRotationActiveTimeAttributesList extends cdktf.ComplexList {
  public internalValue? : ScheduleRotationActiveTimeAttributes[] | cdktf.IResolvable

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
  public get(index: number): ScheduleRotationActiveTimeAttributesOutputReference {
    return new ScheduleRotationActiveTimeAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation rootly_schedule_rotation}
*/
export class ScheduleRotation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_schedule_rotation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScheduleRotation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScheduleRotation to import
  * @param importFromId The id of the existing ScheduleRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScheduleRotation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_schedule_rotation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/schedule_rotation rootly_schedule_rotation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduleRotationConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduleRotationConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_schedule_rotation',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeAllWeek = config.activeAllWeek;
    this._activeDays = config.activeDays;
    this._activeTimeType = config.activeTimeType;
    this._endTime = config.endTime;
    this._id = config.id;
    this._name = config.name;
    this._position = config.position;
    this._scheduleId = config.scheduleId;
    this._scheduleRotationableAttributes = config.scheduleRotationableAttributes;
    this._scheduleRotationableType = config.scheduleRotationableType;
    this._startTime = config.startTime;
    this._timeZone = config.timeZone;
    this._activeTimeAttributes.internalValue = config.activeTimeAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_all_week - computed: true, optional: true, required: false
  private _activeAllWeek?: boolean | cdktf.IResolvable; 
  public get activeAllWeek() {
    return this.getBooleanAttribute('active_all_week');
  }
  public set activeAllWeek(value: boolean | cdktf.IResolvable) {
    this._activeAllWeek = value;
  }
  public resetActiveAllWeek() {
    this._activeAllWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAllWeekInput() {
    return this._activeAllWeek;
  }

  // active_days - computed: true, optional: true, required: false
  private _activeDays?: string[]; 
  public get activeDays() {
    return this.getListAttribute('active_days');
  }
  public set activeDays(value: string[]) {
    this._activeDays = value;
  }
  public resetActiveDays() {
    this._activeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDaysInput() {
    return this._activeDays;
  }

  // active_time_type - computed: true, optional: true, required: false
  private _activeTimeType?: string; 
  public get activeTimeType() {
    return this.getStringAttribute('active_time_type');
  }
  public set activeTimeType(value: string) {
    this._activeTimeType = value;
  }
  public resetActiveTimeType() {
    this._activeTimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeTypeInput() {
    return this._activeTimeType;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // schedule_id - computed: false, optional: false, required: true
  private _scheduleId?: string; 
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
  public set scheduleId(value: string) {
    this._scheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdInput() {
    return this._scheduleId;
  }

  // schedule_rotationable_attributes - computed: false, optional: false, required: true
  private _scheduleRotationableAttributes?: { [key: string]: string }; 
  public get scheduleRotationableAttributes() {
    return this.getStringMapAttribute('schedule_rotationable_attributes');
  }
  public set scheduleRotationableAttributes(value: { [key: string]: string }) {
    this._scheduleRotationableAttributes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleRotationableAttributesInput() {
    return this._scheduleRotationableAttributes;
  }

  // schedule_rotationable_type - computed: false, optional: true, required: false
  private _scheduleRotationableType?: string; 
  public get scheduleRotationableType() {
    return this.getStringAttribute('schedule_rotationable_type');
  }
  public set scheduleRotationableType(value: string) {
    this._scheduleRotationableType = value;
  }
  public resetScheduleRotationableType() {
    this._scheduleRotationableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleRotationableTypeInput() {
    return this._scheduleRotationableType;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // active_time_attributes - computed: false, optional: true, required: false
  private _activeTimeAttributes = new ScheduleRotationActiveTimeAttributesList(this, "active_time_attributes", false);
  public get activeTimeAttributes() {
    return this._activeTimeAttributes;
  }
  public putActiveTimeAttributes(value: ScheduleRotationActiveTimeAttributes[] | cdktf.IResolvable) {
    this._activeTimeAttributes.internalValue = value;
  }
  public resetActiveTimeAttributes() {
    this._activeTimeAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeAttributesInput() {
    return this._activeTimeAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_all_week: cdktf.booleanToTerraform(this._activeAllWeek),
      active_days: cdktf.listMapper(cdktf.stringToTerraform, false)(this._activeDays),
      active_time_type: cdktf.stringToTerraform(this._activeTimeType),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      schedule_rotationable_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._scheduleRotationableAttributes),
      schedule_rotationable_type: cdktf.stringToTerraform(this._scheduleRotationableType),
      start_time: cdktf.stringToTerraform(this._startTime),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      active_time_attributes: cdktf.listMapper(scheduleRotationActiveTimeAttributesToTerraform, true)(this._activeTimeAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_all_week: {
        value: cdktf.booleanToHclTerraform(this._activeAllWeek),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      active_days: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._activeDays),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      active_time_type: {
        value: cdktf.stringToHclTerraform(this._activeTimeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schedule_id: {
        value: cdktf.stringToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_rotationable_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._scheduleRotationableAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      schedule_rotationable_type: {
        value: cdktf.stringToHclTerraform(this._scheduleRotationableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_time_attributes: {
        value: cdktf.listMapperHcl(scheduleRotationActiveTimeAttributesToHclTerraform, true)(this._activeTimeAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScheduleRotationActiveTimeAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
