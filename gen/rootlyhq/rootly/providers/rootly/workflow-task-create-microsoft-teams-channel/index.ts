// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskCreateMicrosoftTeamsChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#enabled WorkflowTaskCreateMicrosoftTeamsChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#id WorkflowTaskCreateMicrosoftTeamsChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#name WorkflowTaskCreateMicrosoftTeamsChannel#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#position WorkflowTaskCreateMicrosoftTeamsChannel#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#skip_on_failure WorkflowTaskCreateMicrosoftTeamsChannel#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#workflow_id WorkflowTaskCreateMicrosoftTeamsChannel#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#task_params WorkflowTaskCreateMicrosoftTeamsChannel#task_params}
  */
  readonly taskParams: WorkflowTaskCreateMicrosoftTeamsChannelTaskParams;
}
export interface WorkflowTaskCreateMicrosoftTeamsChannelTaskParams {
  /**
  * Microsoft Team channel description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#description WorkflowTaskCreateMicrosoftTeamsChannel#description}
  */
  readonly description?: string;
  /**
  * Value must be one of `auto`, `true`, `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#private WorkflowTaskCreateMicrosoftTeamsChannel#private}
  */
  readonly private?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#task_type WorkflowTaskCreateMicrosoftTeamsChannel#task_type}
  */
  readonly taskType?: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#team WorkflowTaskCreateMicrosoftTeamsChannel#team}
  */
  readonly team?: { [key: string]: string };
  /**
  * Microsoft Team channel title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#title WorkflowTaskCreateMicrosoftTeamsChannel#title}
  */
  readonly title: string;
}

export function workflowTaskCreateMicrosoftTeamsChannelTaskParamsToTerraform(struct?: WorkflowTaskCreateMicrosoftTeamsChannelTaskParamsOutputReference | WorkflowTaskCreateMicrosoftTeamsChannelTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    private: cdktf.stringToTerraform(struct!.private),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    team: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.team),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function workflowTaskCreateMicrosoftTeamsChannelTaskParamsToHclTerraform(struct?: WorkflowTaskCreateMicrosoftTeamsChannelTaskParamsOutputReference | WorkflowTaskCreateMicrosoftTeamsChannelTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private: {
      value: cdktf.stringToHclTerraform(struct!.private),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.team),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskCreateMicrosoftTeamsChannelTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskCreateMicrosoftTeamsChannelTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._private !== undefined) {
      hasAnyValues = true;
      internalValueResult.private = this._private;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskCreateMicrosoftTeamsChannelTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._private = undefined;
      this._taskType = undefined;
      this._team = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._private = value.private;
      this._taskType = value.taskType;
      this._team = value.team;
      this._title = value.title;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // private - computed: false, optional: true, required: false
  private _private?: string; 
  public get private() {
    return this.getStringAttribute('private');
  }
  public set private(value: string) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // task_type - computed: false, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // team - computed: false, optional: true, required: false
  private _team?: { [key: string]: string }; 
  public get team() {
    return this.getStringMapAttribute('team');
  }
  public set team(value: { [key: string]: string }) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel rootly_workflow_task_create_microsoft_teams_channel}
*/
export class WorkflowTaskCreateMicrosoftTeamsChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_create_microsoft_teams_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskCreateMicrosoftTeamsChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskCreateMicrosoftTeamsChannel to import
  * @param importFromId The id of the existing WorkflowTaskCreateMicrosoftTeamsChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskCreateMicrosoftTeamsChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_create_microsoft_teams_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_microsoft_teams_channel rootly_workflow_task_create_microsoft_teams_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskCreateMicrosoftTeamsChannelConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskCreateMicrosoftTeamsChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_create_microsoft_teams_channel',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._position = config.position;
    this._skipOnFailure = config.skipOnFailure;
    this._workflowId = config.workflowId;
    this._taskParams.internalValue = config.taskParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: true, optional: true, required: false
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

  // skip_on_failure - computed: false, optional: true, required: false
  private _skipOnFailure?: boolean | cdktf.IResolvable; 
  public get skipOnFailure() {
    return this.getBooleanAttribute('skip_on_failure');
  }
  public set skipOnFailure(value: boolean | cdktf.IResolvable) {
    this._skipOnFailure = value;
  }
  public resetSkipOnFailure() {
    this._skipOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOnFailureInput() {
    return this._skipOnFailure;
  }

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // task_params - computed: false, optional: false, required: true
  private _taskParams = new WorkflowTaskCreateMicrosoftTeamsChannelTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskCreateMicrosoftTeamsChannelTaskParams) {
    this._taskParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskParamsInput() {
    return this._taskParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      skip_on_failure: cdktf.booleanToTerraform(this._skipOnFailure),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
      task_params: workflowTaskCreateMicrosoftTeamsChannelTaskParamsToTerraform(this._taskParams.internalValue),
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
      skip_on_failure: {
        value: cdktf.booleanToHclTerraform(this._skipOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workflow_id: {
        value: cdktf.stringToHclTerraform(this._workflowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_params: {
        value: workflowTaskCreateMicrosoftTeamsChannelTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskCreateMicrosoftTeamsChannelTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
