// https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_config_var
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineConfigVarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_config_var#id PipelineConfigVar#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_config_var#pipeline_id PipelineConfigVar#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_config_var#pipeline_stage PipelineConfigVar#pipeline_stage}
  */
  readonly pipelineStage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_config_var#sensitive_vars PipelineConfigVar#sensitive_vars}
  */
  readonly sensitiveVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_config_var#vars PipelineConfigVar#vars}
  */
  readonly vars?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_config_var heroku_pipeline_config_var}
*/
export class PipelineConfigVar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "heroku_pipeline_config_var";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PipelineConfigVar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipelineConfigVar to import
  * @param importFromId The id of the existing PipelineConfigVar that should be imported. Refer to the {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_config_var#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipelineConfigVar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "heroku_pipeline_config_var", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_config_var heroku_pipeline_config_var} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineConfigVarConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineConfigVarConfig) {
    super(scope, id, {
      terraformResourceType: 'heroku_pipeline_config_var',
      terraformGeneratorMetadata: {
        providerName: 'heroku',
        providerVersion: '5.3.1'
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
    this._pipelineId = config.pipelineId;
    this._pipelineStage = config.pipelineStage;
    this._sensitiveVars = config.sensitiveVars;
    this._vars = config.vars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_vars - computed: true, optional: false, required: false
  private _allVars = new cdktf.StringMap(this, "all_vars");
  public get allVars() {
    return this._allVars;
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

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // pipeline_stage - computed: false, optional: false, required: true
  private _pipelineStage?: string; 
  public get pipelineStage() {
    return this.getStringAttribute('pipeline_stage');
  }
  public set pipelineStage(value: string) {
    this._pipelineStage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineStageInput() {
    return this._pipelineStage;
  }

  // sensitive_vars - computed: false, optional: true, required: false
  private _sensitiveVars?: { [key: string]: string }; 
  public get sensitiveVars() {
    return this.getStringMapAttribute('sensitive_vars');
  }
  public set sensitiveVars(value: { [key: string]: string }) {
    this._sensitiveVars = value;
  }
  public resetSensitiveVars() {
    this._sensitiveVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveVarsInput() {
    return this._sensitiveVars;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      pipeline_stage: cdktf.stringToTerraform(this._pipelineStage),
      sensitive_vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._sensitiveVars),
      vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._vars),
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
      pipeline_id: {
        value: cdktf.stringToHclTerraform(this._pipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_stage: {
        value: cdktf.stringToHclTerraform(this._pipelineStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sensitiveVars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
