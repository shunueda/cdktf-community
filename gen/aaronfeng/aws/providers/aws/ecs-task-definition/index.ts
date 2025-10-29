// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}
  */
  readonly containerDefinitions: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#cpu EcsTaskDefinition#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#family EcsTaskDefinition#family}
  */
  readonly family: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#id EcsTaskDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}
  */
  readonly ipcMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#memory EcsTaskDefinition#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}
  */
  readonly pidMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}
  */
  readonly requiresCompatibilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#tags EcsTaskDefinition#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}
  */
  readonly taskRoleArn?: string;
  /**
  * inference_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#inference_accelerator EcsTaskDefinition#inference_accelerator}
  */
  readonly inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[] | cdktf.IResolvable;
  /**
  * placement_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#placement_constraints EcsTaskDefinition#placement_constraints}
  */
  readonly placementConstraints?: EcsTaskDefinitionPlacementConstraints[] | cdktf.IResolvable;
  /**
  * proxy_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#proxy_configuration EcsTaskDefinition#proxy_configuration}
  */
  readonly proxyConfiguration?: EcsTaskDefinitionProxyConfiguration;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#volume EcsTaskDefinition#volume}
  */
  readonly volume?: EcsTaskDefinitionVolume[] | cdktf.IResolvable;
}
export interface EcsTaskDefinitionInferenceAccelerator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#device_name EcsTaskDefinition#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#device_type EcsTaskDefinition#device_type}
  */
  readonly deviceType: string;
}

export function ecsTaskDefinitionInferenceAcceleratorToTerraform(struct?: EcsTaskDefinitionInferenceAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
  }
}


export function ecsTaskDefinitionInferenceAcceleratorToHclTerraform(struct?: EcsTaskDefinitionInferenceAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionInferenceAcceleratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsTaskDefinitionInferenceAccelerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionInferenceAccelerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._deviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._deviceType = value.deviceType;
    }
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_type - computed: false, optional: false, required: true
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }
}

export class EcsTaskDefinitionInferenceAcceleratorList extends cdktf.ComplexList {
  public internalValue? : EcsTaskDefinitionInferenceAccelerator[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EcsTaskDefinitionInferenceAcceleratorOutputReference {
    return new EcsTaskDefinitionInferenceAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsTaskDefinitionPlacementConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#expression EcsTaskDefinition#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#type EcsTaskDefinition#type}
  */
  readonly type: string;
}

export function ecsTaskDefinitionPlacementConstraintsToTerraform(struct?: EcsTaskDefinitionPlacementConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ecsTaskDefinitionPlacementConstraintsToHclTerraform(struct?: EcsTaskDefinitionPlacementConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionPlacementConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsTaskDefinitionPlacementConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionPlacementConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._type = value.type;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EcsTaskDefinitionPlacementConstraintsList extends cdktf.ComplexList {
  public internalValue? : EcsTaskDefinitionPlacementConstraints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EcsTaskDefinitionPlacementConstraintsOutputReference {
    return new EcsTaskDefinitionPlacementConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsTaskDefinitionProxyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#container_name EcsTaskDefinition#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#properties EcsTaskDefinition#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#type EcsTaskDefinition#type}
  */
  readonly type?: string;
}

export function ecsTaskDefinitionProxyConfigurationToTerraform(struct?: EcsTaskDefinitionProxyConfigurationOutputReference | EcsTaskDefinitionProxyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ecsTaskDefinitionProxyConfigurationToHclTerraform(struct?: EcsTaskDefinitionProxyConfigurationOutputReference | EcsTaskDefinitionProxyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionProxyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionProxyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionProxyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerName = undefined;
      this._properties = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerName = value.containerName;
      this._properties = value.properties;
      this._type = value.type;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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
}
export interface EcsTaskDefinitionVolumeDockerVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#autoprovision EcsTaskDefinition#autoprovision}
  */
  readonly autoprovision?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#driver EcsTaskDefinition#driver}
  */
  readonly driver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#driver_opts EcsTaskDefinition#driver_opts}
  */
  readonly driverOpts?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#labels EcsTaskDefinition#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#scope EcsTaskDefinition#scope}
  */
  readonly scope?: string;
}

export function ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeDockerVolumeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoprovision: cdktf.booleanToTerraform(struct!.autoprovision),
    driver: cdktf.stringToTerraform(struct!.driver),
    driver_opts: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.driverOpts),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function ecsTaskDefinitionVolumeDockerVolumeConfigurationToHclTerraform(struct?: EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeDockerVolumeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoprovision: {
      value: cdktf.booleanToHclTerraform(struct!.autoprovision),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_opts: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.driverOpts),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoprovision !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoprovision = this._autoprovision;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._driverOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverOpts = this._driverOpts;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoprovision = undefined;
      this._driver = undefined;
      this._driverOpts = undefined;
      this._labels = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoprovision = value.autoprovision;
      this._driver = value.driver;
      this._driverOpts = value.driverOpts;
      this._labels = value.labels;
      this._scope = value.scope;
    }
  }

  // autoprovision - computed: false, optional: true, required: false
  private _autoprovision?: boolean | cdktf.IResolvable; 
  public get autoprovision() {
    return this.getBooleanAttribute('autoprovision');
  }
  public set autoprovision(value: boolean | cdktf.IResolvable) {
    this._autoprovision = value;
  }
  public resetAutoprovision() {
    this._autoprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoprovisionInput() {
    return this._autoprovision;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // driver_opts - computed: false, optional: true, required: false
  private _driverOpts?: { [key: string]: string }; 
  public get driverOpts() {
    return this.getStringMapAttribute('driver_opts');
  }
  public set driverOpts(value: { [key: string]: string }) {
    this._driverOpts = value;
  }
  public resetDriverOpts() {
    this._driverOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverOptsInput() {
    return this._driverOpts;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#access_point_id EcsTaskDefinition#access_point_id}
  */
  readonly accessPointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#iam EcsTaskDefinition#iam}
  */
  readonly iam?: string;
}

export function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_point_id: cdktf.stringToTerraform(struct!.accessPointId),
    iam: cdktf.stringToTerraform(struct!.iam),
  }
}


export function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_point_id: {
      value: cdktf.stringToHclTerraform(struct!.accessPointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam: {
      value: cdktf.stringToHclTerraform(struct!.iam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointId = this._accessPointId;
    }
    if (this._iam !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessPointId = undefined;
      this._iam = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessPointId = value.accessPointId;
      this._iam = value.iam;
    }
  }

  // access_point_id - computed: false, optional: true, required: false
  private _accessPointId?: string; 
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }
  public set accessPointId(value: string) {
    this._accessPointId = value;
  }
  public resetAccessPointId() {
    this._accessPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointIdInput() {
    return this._accessPointId;
  }

  // iam - computed: false, optional: true, required: false
  private _iam?: string; 
  public get iam() {
    return this.getStringAttribute('iam');
  }
  public set iam(value: string) {
    this._iam = value;
  }
  public resetIam() {
    this._iam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam;
  }
}
export interface EcsTaskDefinitionVolumeEfsVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}
  */
  readonly rootDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#transit_encryption EcsTaskDefinition#transit_encryption}
  */
  readonly transitEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}
  */
  readonly transitEncryptionPort?: number;
  /**
  * authorization_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}
  */
  readonly authorizationConfig?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig;
}

export function ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
    transit_encryption: cdktf.stringToTerraform(struct!.transitEncryption),
    transit_encryption_port: cdktf.numberToTerraform(struct!.transitEncryptionPort),
    authorization_config: ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct!.authorizationConfig),
  }
}


export function ecsTaskDefinitionVolumeEfsVolumeConfigurationToHclTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_directory: {
      value: cdktf.stringToHclTerraform(struct!.rootDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_encryption: {
      value: cdktf.stringToHclTerraform(struct!.transitEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_encryption_port: {
      value: cdktf.numberToHclTerraform(struct!.transitEncryptionPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorization_config: {
      value: ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._rootDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDirectory = this._rootDirectory;
    }
    if (this._transitEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitEncryption = this._transitEncryption;
    }
    if (this._transitEncryptionPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitEncryptionPort = this._transitEncryptionPort;
    }
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._rootDirectory = undefined;
      this._transitEncryption = undefined;
      this._transitEncryptionPort = undefined;
      this._authorizationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._rootDirectory = value.rootDirectory;
      this._transitEncryption = value.transitEncryption;
      this._transitEncryptionPort = value.transitEncryptionPort;
      this._authorizationConfig.internalValue = value.authorizationConfig;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // root_directory - computed: false, optional: true, required: false
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  public resetRootDirectory() {
    this._rootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }

  // transit_encryption - computed: false, optional: true, required: false
  private _transitEncryption?: string; 
  public get transitEncryption() {
    return this.getStringAttribute('transit_encryption');
  }
  public set transitEncryption(value: string) {
    this._transitEncryption = value;
  }
  public resetTransitEncryption() {
    this._transitEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionInput() {
    return this._transitEncryption;
  }

  // transit_encryption_port - computed: false, optional: true, required: false
  private _transitEncryptionPort?: number; 
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
  public set transitEncryptionPort(value: number) {
    this._transitEncryptionPort = value;
  }
  public resetTransitEncryptionPort() {
    this._transitEncryptionPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionPortInput() {
    return this._transitEncryptionPort;
  }

  // authorization_config - computed: false, optional: true, required: false
  private _authorizationConfig = new EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
  }
}
export interface EcsTaskDefinitionVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#host_path EcsTaskDefinition#host_path}
  */
  readonly hostPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#name EcsTaskDefinition#name}
  */
  readonly name: string;
  /**
  * docker_volume_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}
  */
  readonly dockerVolumeConfiguration?: EcsTaskDefinitionVolumeDockerVolumeConfiguration;
  /**
  * efs_volume_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}
  */
  readonly efsVolumeConfiguration?: EcsTaskDefinitionVolumeEfsVolumeConfiguration;
}

export function ecsTaskDefinitionVolumeToTerraform(struct?: EcsTaskDefinitionVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    name: cdktf.stringToTerraform(struct!.name),
    docker_volume_configuration: ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct!.dockerVolumeConfiguration),
    efs_volume_configuration: ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct!.efsVolumeConfiguration),
  }
}


export function ecsTaskDefinitionVolumeToHclTerraform(struct?: EcsTaskDefinitionVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_path: {
      value: cdktf.stringToHclTerraform(struct!.hostPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_volume_configuration: {
      value: ecsTaskDefinitionVolumeDockerVolumeConfigurationToHclTerraform(struct!.dockerVolumeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsTaskDefinitionVolumeDockerVolumeConfigurationList",
    },
    efs_volume_configuration: {
      value: ecsTaskDefinitionVolumeEfsVolumeConfigurationToHclTerraform(struct!.efsVolumeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsTaskDefinitionVolumeEfsVolumeConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsTaskDefinitionVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._dockerVolumeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerVolumeConfiguration = this._dockerVolumeConfiguration?.internalValue;
    }
    if (this._efsVolumeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsVolumeConfiguration = this._efsVolumeConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostPath = undefined;
      this._name = undefined;
      this._dockerVolumeConfiguration.internalValue = undefined;
      this._efsVolumeConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostPath = value.hostPath;
      this._name = value.name;
      this._dockerVolumeConfiguration.internalValue = value.dockerVolumeConfiguration;
      this._efsVolumeConfiguration.internalValue = value.efsVolumeConfiguration;
    }
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath?: string; 
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }
  public set hostPath(value: string) {
    this._hostPath = value;
  }
  public resetHostPath() {
    this._hostPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath;
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

  // docker_volume_configuration - computed: false, optional: true, required: false
  private _dockerVolumeConfiguration = new EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference(this, "docker_volume_configuration");
  public get dockerVolumeConfiguration() {
    return this._dockerVolumeConfiguration;
  }
  public putDockerVolumeConfiguration(value: EcsTaskDefinitionVolumeDockerVolumeConfiguration) {
    this._dockerVolumeConfiguration.internalValue = value;
  }
  public resetDockerVolumeConfiguration() {
    this._dockerVolumeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerVolumeConfigurationInput() {
    return this._dockerVolumeConfiguration.internalValue;
  }

  // efs_volume_configuration - computed: false, optional: true, required: false
  private _efsVolumeConfiguration = new EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference(this, "efs_volume_configuration");
  public get efsVolumeConfiguration() {
    return this._efsVolumeConfiguration;
  }
  public putEfsVolumeConfiguration(value: EcsTaskDefinitionVolumeEfsVolumeConfiguration) {
    this._efsVolumeConfiguration.internalValue = value;
  }
  public resetEfsVolumeConfiguration() {
    this._efsVolumeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsVolumeConfigurationInput() {
    return this._efsVolumeConfiguration.internalValue;
  }
}

export class EcsTaskDefinitionVolumeList extends cdktf.ComplexList {
  public internalValue? : EcsTaskDefinitionVolume[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EcsTaskDefinitionVolumeOutputReference {
    return new EcsTaskDefinitionVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition aws_ecs_task_definition}
*/
export class EcsTaskDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecs_task_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsTaskDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsTaskDefinition to import
  * @param importFromId The id of the existing EcsTaskDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsTaskDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_task_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ecs_task_definition aws_ecs_task_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsTaskDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: EcsTaskDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_task_definition',
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
    this._containerDefinitions = config.containerDefinitions;
    this._cpu = config.cpu;
    this._executionRoleArn = config.executionRoleArn;
    this._family = config.family;
    this._id = config.id;
    this._ipcMode = config.ipcMode;
    this._memory = config.memory;
    this._networkMode = config.networkMode;
    this._pidMode = config.pidMode;
    this._requiresCompatibilities = config.requiresCompatibilities;
    this._tags = config.tags;
    this._taskRoleArn = config.taskRoleArn;
    this._inferenceAccelerator.internalValue = config.inferenceAccelerator;
    this._placementConstraints.internalValue = config.placementConstraints;
    this._proxyConfiguration.internalValue = config.proxyConfiguration;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_definitions - computed: false, optional: false, required: true
  private _containerDefinitions?: string; 
  public get containerDefinitions() {
    return this.getStringAttribute('container_definitions');
  }
  public set containerDefinitions(value: string) {
    this._containerDefinitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDefinitionsInput() {
    return this._containerDefinitions;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

  // ipc_mode - computed: false, optional: true, required: false
  private _ipcMode?: string; 
  public get ipcMode() {
    return this.getStringAttribute('ipc_mode');
  }
  public set ipcMode(value: string) {
    this._ipcMode = value;
  }
  public resetIpcMode() {
    this._ipcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcModeInput() {
    return this._ipcMode;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // network_mode - computed: true, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // pid_mode - computed: false, optional: true, required: false
  private _pidMode?: string; 
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }
  public set pidMode(value: string) {
    this._pidMode = value;
  }
  public resetPidMode() {
    this._pidMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidModeInput() {
    return this._pidMode;
  }

  // requires_compatibilities - computed: false, optional: true, required: false
  private _requiresCompatibilities?: string[]; 
  public get requiresCompatibilities() {
    return cdktf.Fn.tolist(this.getListAttribute('requires_compatibilities'));
  }
  public set requiresCompatibilities(value: string[]) {
    this._requiresCompatibilities = value;
  }
  public resetRequiresCompatibilities() {
    this._requiresCompatibilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresCompatibilitiesInput() {
    return this._requiresCompatibilities;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
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

  // task_role_arn - computed: false, optional: true, required: false
  private _taskRoleArn?: string; 
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }
  public set taskRoleArn(value: string) {
    this._taskRoleArn = value;
  }
  public resetTaskRoleArn() {
    this._taskRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRoleArnInput() {
    return this._taskRoleArn;
  }

  // inference_accelerator - computed: false, optional: true, required: false
  private _inferenceAccelerator = new EcsTaskDefinitionInferenceAcceleratorList(this, "inference_accelerator", true);
  public get inferenceAccelerator() {
    return this._inferenceAccelerator;
  }
  public putInferenceAccelerator(value: EcsTaskDefinitionInferenceAccelerator[] | cdktf.IResolvable) {
    this._inferenceAccelerator.internalValue = value;
  }
  public resetInferenceAccelerator() {
    this._inferenceAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAcceleratorInput() {
    return this._inferenceAccelerator.internalValue;
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints = new EcsTaskDefinitionPlacementConstraintsList(this, "placement_constraints", true);
  public get placementConstraints() {
    return this._placementConstraints;
  }
  public putPlacementConstraints(value: EcsTaskDefinitionPlacementConstraints[] | cdktf.IResolvable) {
    this._placementConstraints.internalValue = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints.internalValue;
  }

  // proxy_configuration - computed: false, optional: true, required: false
  private _proxyConfiguration = new EcsTaskDefinitionProxyConfigurationOutputReference(this, "proxy_configuration");
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }
  public putProxyConfiguration(value: EcsTaskDefinitionProxyConfiguration) {
    this._proxyConfiguration.internalValue = value;
  }
  public resetProxyConfiguration() {
    this._proxyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigurationInput() {
    return this._proxyConfiguration.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new EcsTaskDefinitionVolumeList(this, "volume", true);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: EcsTaskDefinitionVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_definitions: cdktf.stringToTerraform(this._containerDefinitions),
      cpu: cdktf.stringToTerraform(this._cpu),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      family: cdktf.stringToTerraform(this._family),
      id: cdktf.stringToTerraform(this._id),
      ipc_mode: cdktf.stringToTerraform(this._ipcMode),
      memory: cdktf.stringToTerraform(this._memory),
      network_mode: cdktf.stringToTerraform(this._networkMode),
      pid_mode: cdktf.stringToTerraform(this._pidMode),
      requires_compatibilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requiresCompatibilities),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      task_role_arn: cdktf.stringToTerraform(this._taskRoleArn),
      inference_accelerator: cdktf.listMapper(ecsTaskDefinitionInferenceAcceleratorToTerraform, true)(this._inferenceAccelerator.internalValue),
      placement_constraints: cdktf.listMapper(ecsTaskDefinitionPlacementConstraintsToTerraform, true)(this._placementConstraints.internalValue),
      proxy_configuration: ecsTaskDefinitionProxyConfigurationToTerraform(this._proxyConfiguration.internalValue),
      volume: cdktf.listMapper(ecsTaskDefinitionVolumeToTerraform, true)(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_definitions: {
        value: cdktf.stringToHclTerraform(this._containerDefinitions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.stringToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family: {
        value: cdktf.stringToHclTerraform(this._family),
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
      ipc_mode: {
        value: cdktf.stringToHclTerraform(this._ipcMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.stringToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_mode: {
        value: cdktf.stringToHclTerraform(this._networkMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_mode: {
        value: cdktf.stringToHclTerraform(this._pidMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requires_compatibilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requiresCompatibilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      task_role_arn: {
        value: cdktf.stringToHclTerraform(this._taskRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inference_accelerator: {
        value: cdktf.listMapperHcl(ecsTaskDefinitionInferenceAcceleratorToHclTerraform, true)(this._inferenceAccelerator.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsTaskDefinitionInferenceAcceleratorList",
      },
      placement_constraints: {
        value: cdktf.listMapperHcl(ecsTaskDefinitionPlacementConstraintsToHclTerraform, true)(this._placementConstraints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsTaskDefinitionPlacementConstraintsList",
      },
      proxy_configuration: {
        value: ecsTaskDefinitionProxyConfigurationToHclTerraform(this._proxyConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsTaskDefinitionProxyConfigurationList",
      },
      volume: {
        value: cdktf.listMapperHcl(ecsTaskDefinitionVolumeToHclTerraform, true)(this._volume.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsTaskDefinitionVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
