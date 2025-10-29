// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowJobTemplateNodeSuccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether all parents must converge before this node can start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#all_parents_must_converge WorkflowJobTemplateNodeSuccess#all_parents_must_converge}
  */
  readonly allParentsMustConverge?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable diff mode for the job template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#diff_mode WorkflowJobTemplateNodeSuccess#diff_mode}
  */
  readonly diffMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#extra_data WorkflowJobTemplateNodeSuccess#extra_data}
  */
  readonly extraData?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#id WorkflowJobTemplateNodeSuccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier for the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#identifier WorkflowJobTemplateNodeSuccess#identifier}
  */
  readonly identifier: string;
  /**
  * Inventory applied as a prompt, assuming job template prompts for inventory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#inventory_id WorkflowJobTemplateNodeSuccess#inventory_id}
  */
  readonly inventoryId?: number;
  /**
  * A list of job tags to use for the job template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#job_tags WorkflowJobTemplateNodeSuccess#job_tags}
  */
  readonly jobTags?: string;
  /**
  * The type of job to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#job_type WorkflowJobTemplateNodeSuccess#job_type}
  */
  readonly jobType?: string;
  /**
  * A host pattern to limit the job template to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#limit WorkflowJobTemplateNodeSuccess#limit}
  */
  readonly limit?: string;
  /**
  * The SCM branch to use for the job template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#scm_branch WorkflowJobTemplateNodeSuccess#scm_branch}
  */
  readonly scmBranch?: string;
  /**
  * A list of job tags to skip for the job template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#skip_tags WorkflowJobTemplateNodeSuccess#skip_tags}
  */
  readonly skipTags?: string;
  /**
  * The unified job template id to which the node belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#unified_job_template_id WorkflowJobTemplateNodeSuccess#unified_job_template_id}
  */
  readonly unifiedJobTemplateId: number;
  /**
  * The verbosity level for the job template. Can be one of 0, 1, 2, 3, or 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#verbosity WorkflowJobTemplateNodeSuccess#verbosity}
  */
  readonly verbosity?: number;
  /**
  * The workflow job template id to which the node belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#workflow_job_template_id WorkflowJobTemplateNodeSuccess#workflow_job_template_id}
  */
  readonly workflowJobTemplateId: number;
  /**
  * The workflow_job_template_node id from with the new node will start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#workflow_job_template_node_id WorkflowJobTemplateNodeSuccess#workflow_job_template_node_id}
  */
  readonly workflowJobTemplateNodeId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success awx_workflow_job_template_node_success}
*/
export class WorkflowJobTemplateNodeSuccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_workflow_job_template_node_success";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowJobTemplateNodeSuccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowJobTemplateNodeSuccess to import
  * @param importFromId The id of the existing WorkflowJobTemplateNodeSuccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowJobTemplateNodeSuccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_workflow_job_template_node_success", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_success awx_workflow_job_template_node_success} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowJobTemplateNodeSuccessConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowJobTemplateNodeSuccessConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_workflow_job_template_node_success',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allParentsMustConverge = config.allParentsMustConverge;
    this._diffMode = config.diffMode;
    this._extraData = config.extraData;
    this._id = config.id;
    this._identifier = config.identifier;
    this._inventoryId = config.inventoryId;
    this._jobTags = config.jobTags;
    this._jobType = config.jobType;
    this._limit = config.limit;
    this._scmBranch = config.scmBranch;
    this._skipTags = config.skipTags;
    this._unifiedJobTemplateId = config.unifiedJobTemplateId;
    this._verbosity = config.verbosity;
    this._workflowJobTemplateId = config.workflowJobTemplateId;
    this._workflowJobTemplateNodeId = config.workflowJobTemplateNodeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_parents_must_converge - computed: false, optional: true, required: false
  private _allParentsMustConverge?: boolean | cdktf.IResolvable; 
  public get allParentsMustConverge() {
    return this.getBooleanAttribute('all_parents_must_converge');
  }
  public set allParentsMustConverge(value: boolean | cdktf.IResolvable) {
    this._allParentsMustConverge = value;
  }
  public resetAllParentsMustConverge() {
    this._allParentsMustConverge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allParentsMustConvergeInput() {
    return this._allParentsMustConverge;
  }

  // diff_mode - computed: false, optional: true, required: false
  private _diffMode?: boolean | cdktf.IResolvable; 
  public get diffMode() {
    return this.getBooleanAttribute('diff_mode');
  }
  public set diffMode(value: boolean | cdktf.IResolvable) {
    this._diffMode = value;
  }
  public resetDiffMode() {
    this._diffMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffModeInput() {
    return this._diffMode;
  }

  // extra_data - computed: false, optional: true, required: false
  private _extraData?: { [key: string]: string }; 
  public get extraData() {
    return this.getStringMapAttribute('extra_data');
  }
  public set extraData(value: { [key: string]: string }) {
    this._extraData = value;
  }
  public resetExtraData() {
    this._extraData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraDataInput() {
    return this._extraData;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // inventory_id - computed: false, optional: true, required: false
  private _inventoryId?: number; 
  public get inventoryId() {
    return this.getNumberAttribute('inventory_id');
  }
  public set inventoryId(value: number) {
    this._inventoryId = value;
  }
  public resetInventoryId() {
    this._inventoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryIdInput() {
    return this._inventoryId;
  }

  // job_tags - computed: false, optional: true, required: false
  private _jobTags?: string; 
  public get jobTags() {
    return this.getStringAttribute('job_tags');
  }
  public set jobTags(value: string) {
    this._jobTags = value;
  }
  public resetJobTags() {
    this._jobTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTagsInput() {
    return this._jobTags;
  }

  // job_type - computed: false, optional: true, required: false
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  public resetJobType() {
    this._jobType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // scm_branch - computed: false, optional: true, required: false
  private _scmBranch?: string; 
  public get scmBranch() {
    return this.getStringAttribute('scm_branch');
  }
  public set scmBranch(value: string) {
    this._scmBranch = value;
  }
  public resetScmBranch() {
    this._scmBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmBranchInput() {
    return this._scmBranch;
  }

  // skip_tags - computed: false, optional: true, required: false
  private _skipTags?: string; 
  public get skipTags() {
    return this.getStringAttribute('skip_tags');
  }
  public set skipTags(value: string) {
    this._skipTags = value;
  }
  public resetSkipTags() {
    this._skipTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTagsInput() {
    return this._skipTags;
  }

  // unified_job_template_id - computed: false, optional: false, required: true
  private _unifiedJobTemplateId?: number; 
  public get unifiedJobTemplateId() {
    return this.getNumberAttribute('unified_job_template_id');
  }
  public set unifiedJobTemplateId(value: number) {
    this._unifiedJobTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedJobTemplateIdInput() {
    return this._unifiedJobTemplateId;
  }

  // verbosity - computed: false, optional: true, required: false
  private _verbosity?: number; 
  public get verbosity() {
    return this.getNumberAttribute('verbosity');
  }
  public set verbosity(value: number) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }

  // workflow_job_template_id - computed: false, optional: false, required: true
  private _workflowJobTemplateId?: number; 
  public get workflowJobTemplateId() {
    return this.getNumberAttribute('workflow_job_template_id');
  }
  public set workflowJobTemplateId(value: number) {
    this._workflowJobTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowJobTemplateIdInput() {
    return this._workflowJobTemplateId;
  }

  // workflow_job_template_node_id - computed: false, optional: false, required: true
  private _workflowJobTemplateNodeId?: number; 
  public get workflowJobTemplateNodeId() {
    return this.getNumberAttribute('workflow_job_template_node_id');
  }
  public set workflowJobTemplateNodeId(value: number) {
    this._workflowJobTemplateNodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowJobTemplateNodeIdInput() {
    return this._workflowJobTemplateNodeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_parents_must_converge: cdktf.booleanToTerraform(this._allParentsMustConverge),
      diff_mode: cdktf.booleanToTerraform(this._diffMode),
      extra_data: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraData),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      inventory_id: cdktf.numberToTerraform(this._inventoryId),
      job_tags: cdktf.stringToTerraform(this._jobTags),
      job_type: cdktf.stringToTerraform(this._jobType),
      limit: cdktf.stringToTerraform(this._limit),
      scm_branch: cdktf.stringToTerraform(this._scmBranch),
      skip_tags: cdktf.stringToTerraform(this._skipTags),
      unified_job_template_id: cdktf.numberToTerraform(this._unifiedJobTemplateId),
      verbosity: cdktf.numberToTerraform(this._verbosity),
      workflow_job_template_id: cdktf.numberToTerraform(this._workflowJobTemplateId),
      workflow_job_template_node_id: cdktf.numberToTerraform(this._workflowJobTemplateNodeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_parents_must_converge: {
        value: cdktf.booleanToHclTerraform(this._allParentsMustConverge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      diff_mode: {
        value: cdktf.booleanToHclTerraform(this._diffMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extra_data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraData),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_id: {
        value: cdktf.numberToHclTerraform(this._inventoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      job_tags: {
        value: cdktf.stringToHclTerraform(this._jobTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_type: {
        value: cdktf.stringToHclTerraform(this._jobType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.stringToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scm_branch: {
        value: cdktf.stringToHclTerraform(this._scmBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_tags: {
        value: cdktf.stringToHclTerraform(this._skipTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unified_job_template_id: {
        value: cdktf.numberToHclTerraform(this._unifiedJobTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      verbosity: {
        value: cdktf.numberToHclTerraform(this._verbosity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workflow_job_template_id: {
        value: cdktf.numberToHclTerraform(this._workflowJobTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workflow_job_template_node_id: {
        value: cdktf.numberToHclTerraform(this._workflowJobTemplateNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
