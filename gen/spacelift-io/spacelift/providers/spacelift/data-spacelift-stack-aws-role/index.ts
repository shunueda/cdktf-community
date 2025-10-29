// https://registry.terraform.io/providers/spacelift-io/spacelift/1.35.1/docs/data-sources/stack_aws_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpaceliftStackAwsRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.35.1/docs/data-sources/stack_aws_role#id DataSpaceliftStackAwsRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the module which assumes the AWS IAM role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.35.1/docs/data-sources/stack_aws_role#module_id DataSpaceliftStackAwsRole#module_id}
  */
  readonly moduleId?: string;
  /**
  * ID of the stack which assumes the AWS IAM role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.35.1/docs/data-sources/stack_aws_role#stack_id DataSpaceliftStackAwsRole#stack_id}
  */
  readonly stackId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.35.1/docs/data-sources/stack_aws_role spacelift_stack_aws_role}
*/
export class DataSpaceliftStackAwsRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_stack_aws_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpaceliftStackAwsRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpaceliftStackAwsRole to import
  * @param importFromId The id of the existing DataSpaceliftStackAwsRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.35.1/docs/data-sources/stack_aws_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpaceliftStackAwsRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_stack_aws_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.35.1/docs/data-sources/stack_aws_role spacelift_stack_aws_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpaceliftStackAwsRoleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSpaceliftStackAwsRoleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spacelift_stack_aws_role',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.35.1'
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
    this._moduleId = config.moduleId;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // duration_seconds - computed: true, optional: false, required: false
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // generate_credentials_in_worker - computed: true, optional: false, required: false
  public get generateCredentialsInWorker() {
    return this.getBooleanAttribute('generate_credentials_in_worker');
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

  // module_id - computed: false, optional: true, required: false
  private _moduleId?: string; 
  public get moduleId() {
    return this.getStringAttribute('module_id');
  }
  public set moduleId(value: string) {
    this._moduleId = value;
  }
  public resetModuleId() {
    this._moduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleIdInput() {
    return this._moduleId;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stack_id - computed: false, optional: true, required: false
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      module_id: cdktf.stringToTerraform(this._moduleId),
      stack_id: cdktf.stringToTerraform(this._stackId),
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
      module_id: {
        value: cdktf.stringToHclTerraform(this._moduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
