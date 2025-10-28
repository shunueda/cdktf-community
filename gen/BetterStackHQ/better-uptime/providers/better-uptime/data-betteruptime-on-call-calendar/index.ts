// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_on_call_calendar
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBetteruptimeOnCallCalendarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the on-call calendar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_on_call_calendar#name DataBetteruptimeOnCallCalendar#name}
  */
  readonly name?: string;
}
export interface DataBetteruptimeOnCallCalendarOnCallRotation {
}

export function dataBetteruptimeOnCallCalendarOnCallRotationToTerraform(struct?: DataBetteruptimeOnCallCalendarOnCallRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeOnCallCalendarOnCallRotationToHclTerraform(struct?: DataBetteruptimeOnCallCalendarOnCallRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeOnCallCalendarOnCallRotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBetteruptimeOnCallCalendarOnCallRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeOnCallCalendarOnCallRotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_rotations_at - computed: true, optional: false, required: false
  public get endRotationsAt() {
    return this.getStringAttribute('end_rotations_at');
  }

  // rotation_interval - computed: true, optional: false, required: false
  public get rotationInterval() {
    return this.getStringAttribute('rotation_interval');
  }

  // rotation_length - computed: true, optional: false, required: false
  public get rotationLength() {
    return this.getNumberAttribute('rotation_length');
  }

  // start_rotations_at - computed: true, optional: false, required: false
  public get startRotationsAt() {
    return this.getStringAttribute('start_rotations_at');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export class DataBetteruptimeOnCallCalendarOnCallRotationList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeOnCallCalendarOnCallRotationOutputReference {
    return new DataBetteruptimeOnCallCalendarOnCallRotationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimeOnCallCalendarOnCallUsers {
}

export function dataBetteruptimeOnCallCalendarOnCallUsersToTerraform(struct?: DataBetteruptimeOnCallCalendarOnCallUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeOnCallCalendarOnCallUsersToHclTerraform(struct?: DataBetteruptimeOnCallCalendarOnCallUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeOnCallCalendarOnCallUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBetteruptimeOnCallCalendarOnCallUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeOnCallCalendarOnCallUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // phone_numbers - computed: true, optional: false, required: false
  public get phoneNumbers() {
    return this.getListAttribute('phone_numbers');
  }
}

export class DataBetteruptimeOnCallCalendarOnCallUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeOnCallCalendarOnCallUsersOutputReference {
    return new DataBetteruptimeOnCallCalendarOnCallUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_on_call_calendar betteruptime_on_call_calendar}
*/
export class DataBetteruptimeOnCallCalendar extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_on_call_calendar";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBetteruptimeOnCallCalendar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBetteruptimeOnCallCalendar to import
  * @param importFromId The id of the existing DataBetteruptimeOnCallCalendar that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_on_call_calendar#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBetteruptimeOnCallCalendar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_on_call_calendar", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_on_call_calendar betteruptime_on_call_calendar} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBetteruptimeOnCallCalendarConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBetteruptimeOnCallCalendarConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_on_call_calendar',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_calendar - computed: true, optional: false, required: false
  public get defaultCalendar() {
    return this.getBooleanAttribute('default_calendar');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_call_rotation - computed: true, optional: false, required: false
  private _onCallRotation = new DataBetteruptimeOnCallCalendarOnCallRotationList(this, "on_call_rotation", false);
  public get onCallRotation() {
    return this._onCallRotation;
  }

  // on_call_users - computed: true, optional: false, required: false
  private _onCallUsers = new DataBetteruptimeOnCallCalendarOnCallUsersList(this, "on_call_users", false);
  public get onCallUsers() {
    return this._onCallUsers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
