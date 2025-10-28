// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SfnStateMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine#definition SfnStateMachine#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine#id SfnStateMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine#name SfnStateMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine#role_arn SfnStateMachine#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine#tags SfnStateMachine#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine#type SfnStateMachine#type}
  */
  readonly type?: string;
  /**
  * logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine#logging_configuration SfnStateMachine#logging_configuration}
  */
  readonly loggingConfiguration?: SfnStateMachineLoggingConfiguration;
}
export interface SfnStateMachineLoggingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine#include_execution_data SfnStateMachine#include_execution_data}
  */
  readonly includeExecutionData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine#level SfnStateMachine#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine#log_destination SfnStateMachine#log_destination}
  */
  readonly logDestination?: string;
}

export function sfnStateMachineLoggingConfigurationToTerraform(struct?: SfnStateMachineLoggingConfigurationOutputReference | SfnStateMachineLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_execution_data: cdktf.booleanToTerraform(struct!.includeExecutionData),
    level: cdktf.stringToTerraform(struct!.level),
    log_destination: cdktf.stringToTerraform(struct!.logDestination),
  }
}


export function sfnStateMachineLoggingConfigurationToHclTerraform(struct?: SfnStateMachineLoggingConfigurationOutputReference | SfnStateMachineLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_execution_data: {
      value: cdktf.booleanToHclTerraform(struct!.includeExecutionData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_destination: {
      value: cdktf.stringToHclTerraform(struct!.logDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SfnStateMachineLoggingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SfnStateMachineLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeExecutionData !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeExecutionData = this._includeExecutionData;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._logDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDestination = this._logDestination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SfnStateMachineLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeExecutionData = undefined;
      this._level = undefined;
      this._logDestination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeExecutionData = value.includeExecutionData;
      this._level = value.level;
      this._logDestination = value.logDestination;
    }
  }

  // include_execution_data - computed: false, optional: true, required: false
  private _includeExecutionData?: boolean | cdktf.IResolvable; 
  public get includeExecutionData() {
    return this.getBooleanAttribute('include_execution_data');
  }
  public set includeExecutionData(value: boolean | cdktf.IResolvable) {
    this._includeExecutionData = value;
  }
  public resetIncludeExecutionData() {
    this._includeExecutionData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExecutionDataInput() {
    return this._includeExecutionData;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // log_destination - computed: false, optional: true, required: false
  private _logDestination?: string; 
  public get logDestination() {
    return this.getStringAttribute('log_destination');
  }
  public set logDestination(value: string) {
    this._logDestination = value;
  }
  public resetLogDestination() {
    this._logDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationInput() {
    return this._logDestination;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine aws_sfn_state_machine}
*/
export class SfnStateMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sfn_state_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SfnStateMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SfnStateMachine to import
  * @param importFromId The id of the existing SfnStateMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SfnStateMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sfn_state_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sfn_state_machine aws_sfn_state_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SfnStateMachineConfig
  */
  public constructor(scope: Construct, id: string, config: SfnStateMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sfn_state_machine',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definition = config.definition;
    this._id = config.id;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._type = config.type;
    this._loggingConfiguration.internalValue = config.loggingConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration = new SfnStateMachineLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public putLoggingConfiguration(value: SfnStateMachineLoggingConfiguration) {
    this._loggingConfiguration.internalValue = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: cdktf.stringToTerraform(this._definition),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      logging_configuration: sfnStateMachineLoggingConfigurationToTerraform(this._loggingConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      definition: {
        value: cdktf.stringToHclTerraform(this._definition),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_configuration: {
        value: sfnStateMachineLoggingConfigurationToHclTerraform(this._loggingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SfnStateMachineLoggingConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
