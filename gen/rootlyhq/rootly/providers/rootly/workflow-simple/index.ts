// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowSimpleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#cause_ids WorkflowSimple#cause_ids}
  */
  readonly causeIds?: string[];
  /**
  * Workflow command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#command WorkflowSimple#command}
  */
  readonly command?: string;
  /**
  * This will notify you back when the workflow is starting. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#command_feedback_enabled WorkflowSimple#command_feedback_enabled}
  */
  readonly commandFeedbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * When continuously repeat is true, repeat workflows aren't automatically stopped when conditions aren't met. This setting won't override your conditions set by repeat_condition_duration_since_first_run and repeat_condition_number_of_repeats parameters.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#continuously_repeat WorkflowSimple#continuously_repeat}
  */
  readonly continuouslyRepeat?: boolean | cdktf.IResolvable;
  /**
  * The description of the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#description WorkflowSimple#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#enabled WorkflowSimple#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#environment_ids WorkflowSimple#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#functionality_ids WorkflowSimple#functionality_ids}
  */
  readonly functionalityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#group_ids WorkflowSimple#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#id WorkflowSimple#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#incident_role_ids WorkflowSimple#incident_role_ids}
  */
  readonly incidentRoleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#incident_type_ids WorkflowSimple#incident_type_ids}
  */
  readonly incidentTypeIds?: string[];
  /**
  * Restricts workflow edits to admins when turned on. Only admins can set this field.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#locked WorkflowSimple#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * The title of the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#name WorkflowSimple#name}
  */
  readonly name: string;
  /**
  * The order which the workflow should run with other workflows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#position WorkflowSimple#position}
  */
  readonly position?: number;
  /**
  * The workflow will stop repeating if its runtime since it's first workflow run exceeds the duration set in this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#repeat_condition_duration_since_first_run WorkflowSimple#repeat_condition_duration_since_first_run}
  */
  readonly repeatConditionDurationSinceFirstRun?: string;
  /**
  * The workflow will stop repeating if the number of repeats exceeds the value set in this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#repeat_condition_number_of_repeats WorkflowSimple#repeat_condition_number_of_repeats}
  */
  readonly repeatConditionNumberOfRepeats?: number;
  /**
  * Repeat workflow every duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#repeat_every_duration WorkflowSimple#repeat_every_duration}
  */
  readonly repeatEveryDuration?: string;
  /**
  * Repeat on weekdays. Value must be one of `S`, `M`, `T`, `W`, `R`, `F`, `U`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#repeat_on WorkflowSimple#repeat_on}
  */
  readonly repeatOn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#service_ids WorkflowSimple#service_ids}
  */
  readonly serviceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#severity_ids WorkflowSimple#severity_ids}
  */
  readonly severityIds?: string[];
  /**
  * The slug of the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#slug WorkflowSimple#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#sub_status_ids WorkflowSimple#sub_status_ids}
  */
  readonly subStatusIds?: string[];
  /**
  * Wait this duration before executing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#wait WorkflowSimple#wait}
  */
  readonly wait?: string;
  /**
  * The group this workflow belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#workflow_group_id WorkflowSimple#workflow_group_id}
  */
  readonly workflowGroupId?: string;
  /**
  * trigger_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#trigger_params WorkflowSimple#trigger_params}
  */
  readonly triggerParams?: WorkflowSimpleTriggerParams;
}
export interface WorkflowSimpleTriggerParams {
  /**
  * Value must be one off `simple`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#trigger_type WorkflowSimple#trigger_type}
  */
  readonly triggerType?: string;
  /**
  * Actions that trigger the workflow. Value must be one of `slack_command`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#triggers WorkflowSimple#triggers}
  */
  readonly triggers?: string[];
}

export function workflowSimpleTriggerParamsToTerraform(struct?: WorkflowSimpleTriggerParamsOutputReference | WorkflowSimpleTriggerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
    triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.triggers),
  }
}


export function workflowSimpleTriggerParamsToHclTerraform(struct?: WorkflowSimpleTriggerParamsOutputReference | WorkflowSimpleTriggerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trigger_type: {
      value: cdktf.stringToHclTerraform(struct!.triggerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.triggers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowSimpleTriggerParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowSimpleTriggerParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    if (this._triggers !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggers = this._triggers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowSimpleTriggerParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._triggerType = undefined;
      this._triggers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._triggerType = value.triggerType;
      this._triggers = value.triggers;
    }
  }

  // trigger_type - computed: false, optional: true, required: false
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // triggers - computed: true, optional: true, required: false
  private _triggers?: string[]; 
  public get triggers() {
    return this.getListAttribute('triggers');
  }
  public set triggers(value: string[]) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple rootly_workflow_simple}
*/
export class WorkflowSimple extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_simple";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowSimple resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowSimple to import
  * @param importFromId The id of the existing WorkflowSimple that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowSimple to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_simple", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_simple rootly_workflow_simple} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowSimpleConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowSimpleConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_simple',
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
    this._causeIds = config.causeIds;
    this._command = config.command;
    this._commandFeedbackEnabled = config.commandFeedbackEnabled;
    this._continuouslyRepeat = config.continuouslyRepeat;
    this._description = config.description;
    this._enabled = config.enabled;
    this._environmentIds = config.environmentIds;
    this._functionalityIds = config.functionalityIds;
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._incidentRoleIds = config.incidentRoleIds;
    this._incidentTypeIds = config.incidentTypeIds;
    this._locked = config.locked;
    this._name = config.name;
    this._position = config.position;
    this._repeatConditionDurationSinceFirstRun = config.repeatConditionDurationSinceFirstRun;
    this._repeatConditionNumberOfRepeats = config.repeatConditionNumberOfRepeats;
    this._repeatEveryDuration = config.repeatEveryDuration;
    this._repeatOn = config.repeatOn;
    this._serviceIds = config.serviceIds;
    this._severityIds = config.severityIds;
    this._slug = config.slug;
    this._subStatusIds = config.subStatusIds;
    this._wait = config.wait;
    this._workflowGroupId = config.workflowGroupId;
    this._triggerParams.internalValue = config.triggerParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cause_ids - computed: true, optional: true, required: false
  private _causeIds?: string[]; 
  public get causeIds() {
    return this.getListAttribute('cause_ids');
  }
  public set causeIds(value: string[]) {
    this._causeIds = value;
  }
  public resetCauseIds() {
    this._causeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get causeIdsInput() {
    return this._causeIds;
  }

  // command - computed: true, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // command_feedback_enabled - computed: true, optional: true, required: false
  private _commandFeedbackEnabled?: boolean | cdktf.IResolvable; 
  public get commandFeedbackEnabled() {
    return this.getBooleanAttribute('command_feedback_enabled');
  }
  public set commandFeedbackEnabled(value: boolean | cdktf.IResolvable) {
    this._commandFeedbackEnabled = value;
  }
  public resetCommandFeedbackEnabled() {
    this._commandFeedbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandFeedbackEnabledInput() {
    return this._commandFeedbackEnabled;
  }

  // continuously_repeat - computed: true, optional: true, required: false
  private _continuouslyRepeat?: boolean | cdktf.IResolvable; 
  public get continuouslyRepeat() {
    return this.getBooleanAttribute('continuously_repeat');
  }
  public set continuouslyRepeat(value: boolean | cdktf.IResolvable) {
    this._continuouslyRepeat = value;
  }
  public resetContinuouslyRepeat() {
    this._continuouslyRepeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuouslyRepeatInput() {
    return this._continuouslyRepeat;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // environment_ids - computed: true, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return this.getListAttribute('environment_ids');
  }
  public set environmentIds(value: string[]) {
    this._environmentIds = value;
  }
  public resetEnvironmentIds() {
    this._environmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdsInput() {
    return this._environmentIds;
  }

  // functionality_ids - computed: true, optional: true, required: false
  private _functionalityIds?: string[]; 
  public get functionalityIds() {
    return this.getListAttribute('functionality_ids');
  }
  public set functionalityIds(value: string[]) {
    this._functionalityIds = value;
  }
  public resetFunctionalityIds() {
    this._functionalityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionalityIdsInput() {
    return this._functionalityIds;
  }

  // group_ids - computed: true, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // incident_role_ids - computed: true, optional: true, required: false
  private _incidentRoleIds?: string[]; 
  public get incidentRoleIds() {
    return this.getListAttribute('incident_role_ids');
  }
  public set incidentRoleIds(value: string[]) {
    this._incidentRoleIds = value;
  }
  public resetIncidentRoleIds() {
    this._incidentRoleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentRoleIdsInput() {
    return this._incidentRoleIds;
  }

  // incident_type_ids - computed: true, optional: true, required: false
  private _incidentTypeIds?: string[]; 
  public get incidentTypeIds() {
    return this.getListAttribute('incident_type_ids');
  }
  public set incidentTypeIds(value: string[]) {
    this._incidentTypeIds = value;
  }
  public resetIncidentTypeIds() {
    this._incidentTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTypeIdsInput() {
    return this._incidentTypeIds;
  }

  // locked - computed: true, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
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

  // repeat_condition_duration_since_first_run - computed: true, optional: true, required: false
  private _repeatConditionDurationSinceFirstRun?: string; 
  public get repeatConditionDurationSinceFirstRun() {
    return this.getStringAttribute('repeat_condition_duration_since_first_run');
  }
  public set repeatConditionDurationSinceFirstRun(value: string) {
    this._repeatConditionDurationSinceFirstRun = value;
  }
  public resetRepeatConditionDurationSinceFirstRun() {
    this._repeatConditionDurationSinceFirstRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatConditionDurationSinceFirstRunInput() {
    return this._repeatConditionDurationSinceFirstRun;
  }

  // repeat_condition_number_of_repeats - computed: true, optional: true, required: false
  private _repeatConditionNumberOfRepeats?: number; 
  public get repeatConditionNumberOfRepeats() {
    return this.getNumberAttribute('repeat_condition_number_of_repeats');
  }
  public set repeatConditionNumberOfRepeats(value: number) {
    this._repeatConditionNumberOfRepeats = value;
  }
  public resetRepeatConditionNumberOfRepeats() {
    this._repeatConditionNumberOfRepeats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatConditionNumberOfRepeatsInput() {
    return this._repeatConditionNumberOfRepeats;
  }

  // repeat_every_duration - computed: true, optional: true, required: false
  private _repeatEveryDuration?: string; 
  public get repeatEveryDuration() {
    return this.getStringAttribute('repeat_every_duration');
  }
  public set repeatEveryDuration(value: string) {
    this._repeatEveryDuration = value;
  }
  public resetRepeatEveryDuration() {
    this._repeatEveryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatEveryDurationInput() {
    return this._repeatEveryDuration;
  }

  // repeat_on - computed: true, optional: true, required: false
  private _repeatOn?: string[]; 
  public get repeatOn() {
    return this.getListAttribute('repeat_on');
  }
  public set repeatOn(value: string[]) {
    this._repeatOn = value;
  }
  public resetRepeatOn() {
    this._repeatOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatOnInput() {
    return this._repeatOn;
  }

  // service_ids - computed: true, optional: true, required: false
  private _serviceIds?: string[]; 
  public get serviceIds() {
    return this.getListAttribute('service_ids');
  }
  public set serviceIds(value: string[]) {
    this._serviceIds = value;
  }
  public resetServiceIds() {
    this._serviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }

  // severity_ids - computed: true, optional: true, required: false
  private _severityIds?: string[]; 
  public get severityIds() {
    return this.getListAttribute('severity_ids');
  }
  public set severityIds(value: string[]) {
    this._severityIds = value;
  }
  public resetSeverityIds() {
    this._severityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityIdsInput() {
    return this._severityIds;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // sub_status_ids - computed: true, optional: true, required: false
  private _subStatusIds?: string[]; 
  public get subStatusIds() {
    return this.getListAttribute('sub_status_ids');
  }
  public set subStatusIds(value: string[]) {
    this._subStatusIds = value;
  }
  public resetSubStatusIds() {
    this._subStatusIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subStatusIdsInput() {
    return this._subStatusIds;
  }

  // wait - computed: true, optional: true, required: false
  private _wait?: string; 
  public get wait() {
    return this.getStringAttribute('wait');
  }
  public set wait(value: string) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // workflow_group_id - computed: true, optional: true, required: false
  private _workflowGroupId?: string; 
  public get workflowGroupId() {
    return this.getStringAttribute('workflow_group_id');
  }
  public set workflowGroupId(value: string) {
    this._workflowGroupId = value;
  }
  public resetWorkflowGroupId() {
    this._workflowGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowGroupIdInput() {
    return this._workflowGroupId;
  }

  // trigger_params - computed: false, optional: true, required: false
  private _triggerParams = new WorkflowSimpleTriggerParamsOutputReference(this, "trigger_params");
  public get triggerParams() {
    return this._triggerParams;
  }
  public putTriggerParams(value: WorkflowSimpleTriggerParams) {
    this._triggerParams.internalValue = value;
  }
  public resetTriggerParams() {
    this._triggerParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerParamsInput() {
    return this._triggerParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cause_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._causeIds),
      command: cdktf.stringToTerraform(this._command),
      command_feedback_enabled: cdktf.booleanToTerraform(this._commandFeedbackEnabled),
      continuously_repeat: cdktf.booleanToTerraform(this._continuouslyRepeat),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentIds),
      functionality_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._functionalityIds),
      group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      incident_role_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incidentRoleIds),
      incident_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incidentTypeIds),
      locked: cdktf.booleanToTerraform(this._locked),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      repeat_condition_duration_since_first_run: cdktf.stringToTerraform(this._repeatConditionDurationSinceFirstRun),
      repeat_condition_number_of_repeats: cdktf.numberToTerraform(this._repeatConditionNumberOfRepeats),
      repeat_every_duration: cdktf.stringToTerraform(this._repeatEveryDuration),
      repeat_on: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repeatOn),
      service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceIds),
      severity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severityIds),
      slug: cdktf.stringToTerraform(this._slug),
      sub_status_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subStatusIds),
      wait: cdktf.stringToTerraform(this._wait),
      workflow_group_id: cdktf.stringToTerraform(this._workflowGroupId),
      trigger_params: workflowSimpleTriggerParamsToTerraform(this._triggerParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cause_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._causeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_feedback_enabled: {
        value: cdktf.booleanToHclTerraform(this._commandFeedbackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      continuously_repeat: {
        value: cdktf.booleanToHclTerraform(this._continuouslyRepeat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      functionality_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._functionalityIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_role_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incidentRoleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      incident_type_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incidentTypeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      repeat_condition_duration_since_first_run: {
        value: cdktf.stringToHclTerraform(this._repeatConditionDurationSinceFirstRun),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_condition_number_of_repeats: {
        value: cdktf.numberToHclTerraform(this._repeatConditionNumberOfRepeats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repeat_every_duration: {
        value: cdktf.stringToHclTerraform(this._repeatEveryDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_on: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repeatOn),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      severity_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severityIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_status_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subStatusIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wait: {
        value: cdktf.stringToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_group_id: {
        value: cdktf.stringToHclTerraform(this._workflowGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_params: {
        value: workflowSimpleTriggerParamsToHclTerraform(this._triggerParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowSimpleTriggerParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
