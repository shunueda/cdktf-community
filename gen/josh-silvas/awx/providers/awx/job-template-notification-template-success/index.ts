// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_notification_template_success
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JobTemplateNotificationTemplateSuccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_notification_template_success#id JobTemplateNotificationTemplateSuccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The job template ID that the notification template is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_notification_template_success#job_template_id JobTemplateNotificationTemplateSuccess#job_template_id}
  */
  readonly jobTemplateId: number;
  /**
  * The notification template ID that the notification template is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_notification_template_success#notification_template_id JobTemplateNotificationTemplateSuccess#notification_template_id}
  */
  readonly notificationTemplateId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_notification_template_success awx_job_template_notification_template_success}
*/
export class JobTemplateNotificationTemplateSuccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_job_template_notification_template_success";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JobTemplateNotificationTemplateSuccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JobTemplateNotificationTemplateSuccess to import
  * @param importFromId The id of the existing JobTemplateNotificationTemplateSuccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_notification_template_success#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JobTemplateNotificationTemplateSuccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_job_template_notification_template_success", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/job_template_notification_template_success awx_job_template_notification_template_success} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JobTemplateNotificationTemplateSuccessConfig
  */
  public constructor(scope: Construct, id: string, config: JobTemplateNotificationTemplateSuccessConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_job_template_notification_template_success',
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
    this._id = config.id;
    this._jobTemplateId = config.jobTemplateId;
    this._notificationTemplateId = config.notificationTemplateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // job_template_id - computed: false, optional: false, required: true
  private _jobTemplateId?: number; 
  public get jobTemplateId() {
    return this.getNumberAttribute('job_template_id');
  }
  public set jobTemplateId(value: number) {
    this._jobTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateIdInput() {
    return this._jobTemplateId;
  }

  // notification_template_id - computed: false, optional: false, required: true
  private _notificationTemplateId?: number; 
  public get notificationTemplateId() {
    return this.getNumberAttribute('notification_template_id');
  }
  public set notificationTemplateId(value: number) {
    this._notificationTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTemplateIdInput() {
    return this._notificationTemplateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      job_template_id: cdktf.numberToTerraform(this._jobTemplateId),
      notification_template_id: cdktf.numberToTerraform(this._notificationTemplateId),
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
      job_template_id: {
        value: cdktf.numberToHclTerraform(this._jobTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notification_template_id: {
        value: cdktf.numberToHclTerraform(this._notificationTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
