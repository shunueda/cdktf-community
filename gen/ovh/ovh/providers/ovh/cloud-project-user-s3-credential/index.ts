// https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/resources/cloud_project_user_s3_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectUserS3CredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/resources/cloud_project_user_s3_credential#id CloudProjectUserS3Credential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Service name of the resource representing the ID of the cloud project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/resources/cloud_project_user_s3_credential#service_name CloudProjectUserS3Credential#service_name}
  */
  readonly serviceName: string;
  /**
  * The user ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/resources/cloud_project_user_s3_credential#user_id CloudProjectUserS3Credential#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/resources/cloud_project_user_s3_credential ovh_cloud_project_user_s3_credential}
*/
export class CloudProjectUserS3Credential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_user_s3_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectUserS3Credential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectUserS3Credential to import
  * @param importFromId The id of the existing CloudProjectUserS3Credential that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/resources/cloud_project_user_s3_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectUserS3Credential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_user_s3_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/resources/cloud_project_user_s3_credential ovh_cloud_project_user_s3_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectUserS3CredentialConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectUserS3CredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_user_s3_credential',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.8.0'
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
    this._serviceName = config.serviceName;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
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

  // internal_user_id - computed: true, optional: false, required: false
  public get internalUserId() {
    return this.getStringAttribute('internal_user_id');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service_name: cdktf.stringToTerraform(this._serviceName),
      user_id: cdktf.stringToTerraform(this._userId),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
