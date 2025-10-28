// https://registry.terraform.io/providers/fastly/fastly/8.3.2/docs/resources/ngwaf_alert_slack_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NgwafAlertSlackIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.3.2/docs/resources/ngwaf_alert_slack_integration#description NgwafAlertSlackIntegration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.3.2/docs/resources/ngwaf_alert_slack_integration#id NgwafAlertSlackIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Slack webhook URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.3.2/docs/resources/ngwaf_alert_slack_integration#webhook NgwafAlertSlackIntegration#webhook}
  */
  readonly webhook: string;
  /**
  * The ID of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.3.2/docs/resources/ngwaf_alert_slack_integration#workspace_id NgwafAlertSlackIntegration#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.3.2/docs/resources/ngwaf_alert_slack_integration fastly_ngwaf_alert_slack_integration}
*/
export class NgwafAlertSlackIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_ngwaf_alert_slack_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NgwafAlertSlackIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NgwafAlertSlackIntegration to import
  * @param importFromId The id of the existing NgwafAlertSlackIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.3.2/docs/resources/ngwaf_alert_slack_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NgwafAlertSlackIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_ngwaf_alert_slack_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.3.2/docs/resources/ngwaf_alert_slack_integration fastly_ngwaf_alert_slack_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NgwafAlertSlackIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: NgwafAlertSlackIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_ngwaf_alert_slack_integration',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._webhook = config.webhook;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // webhook - computed: false, optional: false, required: true
  private _webhook?: string; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string) {
    this._webhook = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      webhook: cdktf.stringToTerraform(this._webhook),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      webhook: {
        value: cdktf.stringToHclTerraform(this._webhook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
