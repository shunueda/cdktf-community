// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskCreateJiraSubtaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#enabled WorkflowTaskCreateJiraSubtask#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#id WorkflowTaskCreateJiraSubtask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#name WorkflowTaskCreateJiraSubtask#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#position WorkflowTaskCreateJiraSubtask#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#skip_on_failure WorkflowTaskCreateJiraSubtask#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#workflow_id WorkflowTaskCreateJiraSubtask#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#task_params WorkflowTaskCreateJiraSubtask#task_params}
  */
  readonly taskParams: WorkflowTaskCreateJiraSubtaskTaskParams;
}
export interface WorkflowTaskCreateJiraSubtaskTaskParams {
  /**
  * The assigned user's email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#assign_user_email WorkflowTaskCreateJiraSubtask#assign_user_email}
  */
  readonly assignUserEmail?: string;
  /**
  * Custom field mappings. Can contain liquid markup and need to be valid JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#custom_fields_mapping WorkflowTaskCreateJiraSubtask#custom_fields_mapping}
  */
  readonly customFieldsMapping?: string;
  /**
  * The issue description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#description WorkflowTaskCreateJiraSubtask#description}
  */
  readonly description?: string;
  /**
  * The due date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#due_date WorkflowTaskCreateJiraSubtask#due_date}
  */
  readonly dueDate?: string;
  /**
  * Map must contain two fields, `id` and `name`. Specify integration id if you have more than one Jira instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#integration WorkflowTaskCreateJiraSubtask#integration}
  */
  readonly integration?: { [key: string]: string };
  /**
  * The issue labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#labels WorkflowTaskCreateJiraSubtask#labels}
  */
  readonly labels?: string;
  /**
  * The parent issue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#parent_issue_id WorkflowTaskCreateJiraSubtask#parent_issue_id}
  */
  readonly parentIssueId: string;
  /**
  * Map must contain two fields, `id` and `name`. The priority id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#priority WorkflowTaskCreateJiraSubtask#priority}
  */
  readonly priority?: { [key: string]: string };
  /**
  * The project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#project_key WorkflowTaskCreateJiraSubtask#project_key}
  */
  readonly projectKey: string;
  /**
  * The reporter user's email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#reporter_user_email WorkflowTaskCreateJiraSubtask#reporter_user_email}
  */
  readonly reporterUserEmail?: string;
  /**
  * Map must contain two fields, `id` and `name`. The status id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#status WorkflowTaskCreateJiraSubtask#status}
  */
  readonly status?: { [key: string]: string };
  /**
  * Map must contain two fields, `id` and `name`. The issue type id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#subtask_issue_type WorkflowTaskCreateJiraSubtask#subtask_issue_type}
  */
  readonly subtaskIssueType: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#task_type WorkflowTaskCreateJiraSubtask#task_type}
  */
  readonly taskType?: string;
  /**
  * The issue title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#title WorkflowTaskCreateJiraSubtask#title}
  */
  readonly title: string;
  /**
  * Update payload. Can contain liquid markup and need to be valid JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#update_payload WorkflowTaskCreateJiraSubtask#update_payload}
  */
  readonly updatePayload?: string;
}

export function workflowTaskCreateJiraSubtaskTaskParamsToTerraform(struct?: WorkflowTaskCreateJiraSubtaskTaskParamsOutputReference | WorkflowTaskCreateJiraSubtaskTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_user_email: cdktf.stringToTerraform(struct!.assignUserEmail),
    custom_fields_mapping: cdktf.stringToTerraform(struct!.customFieldsMapping),
    description: cdktf.stringToTerraform(struct!.description),
    due_date: cdktf.stringToTerraform(struct!.dueDate),
    integration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.integration),
    labels: cdktf.stringToTerraform(struct!.labels),
    parent_issue_id: cdktf.stringToTerraform(struct!.parentIssueId),
    priority: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.priority),
    project_key: cdktf.stringToTerraform(struct!.projectKey),
    reporter_user_email: cdktf.stringToTerraform(struct!.reporterUserEmail),
    status: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.status),
    subtask_issue_type: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.subtaskIssueType),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    title: cdktf.stringToTerraform(struct!.title),
    update_payload: cdktf.stringToTerraform(struct!.updatePayload),
  }
}


export function workflowTaskCreateJiraSubtaskTaskParamsToHclTerraform(struct?: WorkflowTaskCreateJiraSubtaskTaskParamsOutputReference | WorkflowTaskCreateJiraSubtaskTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_user_email: {
      value: cdktf.stringToHclTerraform(struct!.assignUserEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_fields_mapping: {
      value: cdktf.stringToHclTerraform(struct!.customFieldsMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    due_date: {
      value: cdktf.stringToHclTerraform(struct!.dueDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.integration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.stringToHclTerraform(struct!.labels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_issue_id: {
      value: cdktf.stringToHclTerraform(struct!.parentIssueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.priority),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    project_key: {
      value: cdktf.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reporter_user_email: {
      value: cdktf.stringToHclTerraform(struct!.reporterUserEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.status),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    subtask_issue_type: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.subtaskIssueType),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_payload: {
      value: cdktf.stringToHclTerraform(struct!.updatePayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskCreateJiraSubtaskTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskCreateJiraSubtaskTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignUserEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignUserEmail = this._assignUserEmail;
    }
    if (this._customFieldsMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFieldsMapping = this._customFieldsMapping;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dueDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dueDate = this._dueDate;
    }
    if (this._integration !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._parentIssueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentIssueId = this._parentIssueId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    if (this._reporterUserEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.reporterUserEmail = this._reporterUserEmail;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._subtaskIssueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtaskIssueType = this._subtaskIssueType;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._updatePayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePayload = this._updatePayload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskCreateJiraSubtaskTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignUserEmail = undefined;
      this._customFieldsMapping = undefined;
      this._description = undefined;
      this._dueDate = undefined;
      this._integration = undefined;
      this._labels = undefined;
      this._parentIssueId = undefined;
      this._priority = undefined;
      this._projectKey = undefined;
      this._reporterUserEmail = undefined;
      this._status = undefined;
      this._subtaskIssueType = undefined;
      this._taskType = undefined;
      this._title = undefined;
      this._updatePayload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignUserEmail = value.assignUserEmail;
      this._customFieldsMapping = value.customFieldsMapping;
      this._description = value.description;
      this._dueDate = value.dueDate;
      this._integration = value.integration;
      this._labels = value.labels;
      this._parentIssueId = value.parentIssueId;
      this._priority = value.priority;
      this._projectKey = value.projectKey;
      this._reporterUserEmail = value.reporterUserEmail;
      this._status = value.status;
      this._subtaskIssueType = value.subtaskIssueType;
      this._taskType = value.taskType;
      this._title = value.title;
      this._updatePayload = value.updatePayload;
    }
  }

  // assign_user_email - computed: false, optional: true, required: false
  private _assignUserEmail?: string; 
  public get assignUserEmail() {
    return this.getStringAttribute('assign_user_email');
  }
  public set assignUserEmail(value: string) {
    this._assignUserEmail = value;
  }
  public resetAssignUserEmail() {
    this._assignUserEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignUserEmailInput() {
    return this._assignUserEmail;
  }

  // custom_fields_mapping - computed: false, optional: true, required: false
  private _customFieldsMapping?: string; 
  public get customFieldsMapping() {
    return this.getStringAttribute('custom_fields_mapping');
  }
  public set customFieldsMapping(value: string) {
    this._customFieldsMapping = value;
  }
  public resetCustomFieldsMapping() {
    this._customFieldsMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsMappingInput() {
    return this._customFieldsMapping;
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

  // due_date - computed: false, optional: true, required: false
  private _dueDate?: string; 
  public get dueDate() {
    return this.getStringAttribute('due_date');
  }
  public set dueDate(value: string) {
    this._dueDate = value;
  }
  public resetDueDate() {
    this._dueDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dueDateInput() {
    return this._dueDate;
  }

  // integration - computed: false, optional: true, required: false
  private _integration?: { [key: string]: string }; 
  public get integration() {
    return this.getStringMapAttribute('integration');
  }
  public set integration(value: { [key: string]: string }) {
    this._integration = value;
  }
  public resetIntegration() {
    this._integration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // parent_issue_id - computed: false, optional: false, required: true
  private _parentIssueId?: string; 
  public get parentIssueId() {
    return this.getStringAttribute('parent_issue_id');
  }
  public set parentIssueId(value: string) {
    this._parentIssueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIssueIdInput() {
    return this._parentIssueId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: { [key: string]: string }; 
  public get priority() {
    return this.getStringMapAttribute('priority');
  }
  public set priority(value: { [key: string]: string }) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // reporter_user_email - computed: false, optional: true, required: false
  private _reporterUserEmail?: string; 
  public get reporterUserEmail() {
    return this.getStringAttribute('reporter_user_email');
  }
  public set reporterUserEmail(value: string) {
    this._reporterUserEmail = value;
  }
  public resetReporterUserEmail() {
    this._reporterUserEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reporterUserEmailInput() {
    return this._reporterUserEmail;
  }

  // status - computed: false, optional: true, required: false
  private _status?: { [key: string]: string }; 
  public get status() {
    return this.getStringMapAttribute('status');
  }
  public set status(value: { [key: string]: string }) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subtask_issue_type - computed: false, optional: false, required: true
  private _subtaskIssueType?: { [key: string]: string }; 
  public get subtaskIssueType() {
    return this.getStringMapAttribute('subtask_issue_type');
  }
  public set subtaskIssueType(value: { [key: string]: string }) {
    this._subtaskIssueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subtaskIssueTypeInput() {
    return this._subtaskIssueType;
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

  // update_payload - computed: false, optional: true, required: false
  private _updatePayload?: string; 
  public get updatePayload() {
    return this.getStringAttribute('update_payload');
  }
  public set updatePayload(value: string) {
    this._updatePayload = value;
  }
  public resetUpdatePayload() {
    this._updatePayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePayloadInput() {
    return this._updatePayload;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask rootly_workflow_task_create_jira_subtask}
*/
export class WorkflowTaskCreateJiraSubtask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_create_jira_subtask";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskCreateJiraSubtask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskCreateJiraSubtask to import
  * @param importFromId The id of the existing WorkflowTaskCreateJiraSubtask that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskCreateJiraSubtask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_create_jira_subtask", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.4/docs/resources/workflow_task_create_jira_subtask rootly_workflow_task_create_jira_subtask} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskCreateJiraSubtaskConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskCreateJiraSubtaskConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_create_jira_subtask',
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
  private _taskParams = new WorkflowTaskCreateJiraSubtaskTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskCreateJiraSubtaskTaskParams) {
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
      task_params: workflowTaskCreateJiraSubtaskTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskCreateJiraSubtaskTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskCreateJiraSubtaskTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
