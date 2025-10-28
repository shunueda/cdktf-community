// https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_promotion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelinePromotionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_promotion#id PipelinePromotion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Pipeline ID for the promotion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_promotion#pipeline PipelinePromotion#pipeline}
  */
  readonly pipeline: string;
  /**
  * Release ID to promote to target apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_promotion#release_id PipelinePromotion#release_id}
  */
  readonly releaseId: string;
  /**
  * Source app ID to promote from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_promotion#source_app_id PipelinePromotion#source_app_id}
  */
  readonly sourceAppId: string;
  /**
  * Set of target app IDs to promote to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_promotion#targets PipelinePromotion#targets}
  */
  readonly targets: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_promotion heroku_pipeline_promotion}
*/
export class PipelinePromotion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "heroku_pipeline_promotion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PipelinePromotion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipelinePromotion to import
  * @param importFromId The id of the existing PipelinePromotion that should be imported. Refer to the {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_promotion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipelinePromotion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "heroku_pipeline_promotion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/heroku/heroku/5.3.1/docs/resources/pipeline_promotion heroku_pipeline_promotion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelinePromotionConfig
  */
  public constructor(scope: Construct, id: string, config: PipelinePromotionConfig) {
    super(scope, id, {
      terraformResourceType: 'heroku_pipeline_promotion',
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
    this._pipeline = config.pipeline;
    this._releaseId = config.releaseId;
    this._sourceAppId = config.sourceAppId;
    this._targets = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // pipeline - computed: false, optional: false, required: true
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // promoted_release_id - computed: true, optional: false, required: false
  public get promotedReleaseId() {
    return this.getStringAttribute('promoted_release_id');
  }

  // release_id - computed: false, optional: false, required: true
  private _releaseId?: string; 
  public get releaseId() {
    return this.getStringAttribute('release_id');
  }
  public set releaseId(value: string) {
    this._releaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseIdInput() {
    return this._releaseId;
  }

  // source_app_id - computed: false, optional: false, required: true
  private _sourceAppId?: string; 
  public get sourceAppId() {
    return this.getStringAttribute('source_app_id');
  }
  public set sourceAppId(value: string) {
    this._sourceAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAppIdInput() {
    return this._sourceAppId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return cdktf.Fn.tolist(this.getListAttribute('targets'));
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pipeline: cdktf.stringToTerraform(this._pipeline),
      release_id: cdktf.stringToTerraform(this._releaseId),
      source_app_id: cdktf.stringToTerraform(this._sourceAppId),
      targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targets),
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
      pipeline: {
        value: cdktf.stringToHclTerraform(this._pipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_id: {
        value: cdktf.stringToHclTerraform(this._releaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_app_id: {
        value: cdktf.stringToHclTerraform(this._sourceAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
