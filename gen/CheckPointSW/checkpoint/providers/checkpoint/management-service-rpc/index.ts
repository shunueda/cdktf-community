// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementServiceRpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc#color ManagementServiceRpc#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc#comments ManagementServiceRpc#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc#id ManagementServiceRpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc#ignore_errors ManagementServiceRpc#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc#ignore_warnings ManagementServiceRpc#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Keep connections open after policy has been installed even if they are not allowed under the new policy. This overrides the settings in the Connection Persistence page. If you change this property, the change will not affect open connections, but only future connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc#keep_connections_open_after_policy_installation ManagementServiceRpc#keep_connections_open_after_policy_installation}
  */
  readonly keepConnectionsOpenAfterPolicyInstallation?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc#name ManagementServiceRpc#name}
  */
  readonly name: string;
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc#program_number ManagementServiceRpc#program_number}
  */
  readonly programNumber?: number;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc#tags ManagementServiceRpc#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc checkpoint_management_service_rpc}
*/
export class ManagementServiceRpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_service_rpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementServiceRpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementServiceRpc to import
  * @param importFromId The id of the existing ManagementServiceRpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementServiceRpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_service_rpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_rpc checkpoint_management_service_rpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementServiceRpcConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementServiceRpcConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_service_rpc',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._keepConnectionsOpenAfterPolicyInstallation = config.keepConnectionsOpenAfterPolicyInstallation;
    this._name = config.name;
    this._programNumber = config.programNumber;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // keep_connections_open_after_policy_installation - computed: false, optional: true, required: false
  private _keepConnectionsOpenAfterPolicyInstallation?: boolean | cdktf.IResolvable; 
  public get keepConnectionsOpenAfterPolicyInstallation() {
    return this.getBooleanAttribute('keep_connections_open_after_policy_installation');
  }
  public set keepConnectionsOpenAfterPolicyInstallation(value: boolean | cdktf.IResolvable) {
    this._keepConnectionsOpenAfterPolicyInstallation = value;
  }
  public resetKeepConnectionsOpenAfterPolicyInstallation() {
    this._keepConnectionsOpenAfterPolicyInstallation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepConnectionsOpenAfterPolicyInstallationInput() {
    return this._keepConnectionsOpenAfterPolicyInstallation;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // program_number - computed: false, optional: true, required: false
  private _programNumber?: number; 
  public get programNumber() {
    return this.getNumberAttribute('program_number');
  }
  public set programNumber(value: number) {
    this._programNumber = value;
  }
  public resetProgramNumber() {
    this._programNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programNumberInput() {
    return this._programNumber;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      keep_connections_open_after_policy_installation: cdktf.booleanToTerraform(this._keepConnectionsOpenAfterPolicyInstallation),
      name: cdktf.stringToTerraform(this._name),
      program_number: cdktf.numberToTerraform(this._programNumber),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_connections_open_after_policy_installation: {
        value: cdktf.booleanToHclTerraform(this._keepConnectionsOpenAfterPolicyInstallation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_number: {
        value: cdktf.numberToHclTerraform(this._programNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
