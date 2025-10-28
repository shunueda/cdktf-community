// https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/resources/schema_template_deploy_ndo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaTemplateDeployNdoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/resources/schema_template_deploy_ndo#force_apply SchemaTemplateDeployNdo#force_apply}
  */
  readonly forceApply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/resources/schema_template_deploy_ndo#id SchemaTemplateDeployNdo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/resources/schema_template_deploy_ndo#re_deploy SchemaTemplateDeployNdo#re_deploy}
  */
  readonly reDeploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/resources/schema_template_deploy_ndo#schema_id SchemaTemplateDeployNdo#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/resources/schema_template_deploy_ndo#template_name SchemaTemplateDeployNdo#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/resources/schema_template_deploy_ndo mso_schema_template_deploy_ndo}
*/
export class SchemaTemplateDeployNdo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_deploy_ndo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaTemplateDeployNdo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaTemplateDeployNdo to import
  * @param importFromId The id of the existing SchemaTemplateDeployNdo that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/resources/schema_template_deploy_ndo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaTemplateDeployNdo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_deploy_ndo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/resources/schema_template_deploy_ndo mso_schema_template_deploy_ndo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaTemplateDeployNdoConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaTemplateDeployNdoConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_deploy_ndo',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forceApply = config.forceApply;
    this._id = config.id;
    this._reDeploy = config.reDeploy;
    this._schemaId = config.schemaId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force_apply - computed: false, optional: true, required: false
  private _forceApply?: string; 
  public get forceApply() {
    return this.getStringAttribute('force_apply');
  }
  public set forceApply(value: string) {
    this._forceApply = value;
  }
  public resetForceApply() {
    this._forceApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceApplyInput() {
    return this._forceApply;
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

  // re_deploy - computed: false, optional: true, required: false
  private _reDeploy?: boolean | cdktf.IResolvable; 
  public get reDeploy() {
    return this.getBooleanAttribute('re_deploy');
  }
  public set reDeploy(value: boolean | cdktf.IResolvable) {
    this._reDeploy = value;
  }
  public resetReDeploy() {
    this._reDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reDeployInput() {
    return this._reDeploy;
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_apply: cdktf.stringToTerraform(this._forceApply),
      id: cdktf.stringToTerraform(this._id),
      re_deploy: cdktf.booleanToTerraform(this._reDeploy),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_apply: {
        value: cdktf.stringToHclTerraform(this._forceApply),
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
      re_deploy: {
        value: cdktf.booleanToHclTerraform(this._reDeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
