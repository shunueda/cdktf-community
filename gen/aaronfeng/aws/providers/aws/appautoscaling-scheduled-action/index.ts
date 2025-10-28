// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppautoscalingScheduledActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}
  */
  readonly scalableDimension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}
  */
  readonly serviceNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}
  */
  readonly startTime?: string;
  /**
  * scalable_target_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action#scalable_target_action AppautoscalingScheduledAction#scalable_target_action}
  */
  readonly scalableTargetAction?: AppautoscalingScheduledActionScalableTargetAction;
}
export interface AppautoscalingScheduledActionScalableTargetAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action#max_capacity AppautoscalingScheduledAction#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action#min_capacity AppautoscalingScheduledAction#min_capacity}
  */
  readonly minCapacity?: number;
}

export function appautoscalingScheduledActionScalableTargetActionToTerraform(struct?: AppautoscalingScheduledActionScalableTargetActionOutputReference | AppautoscalingScheduledActionScalableTargetAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
  }
}


export function appautoscalingScheduledActionScalableTargetActionToHclTerraform(struct?: AppautoscalingScheduledActionScalableTargetActionOutputReference | AppautoscalingScheduledActionScalableTargetAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktf.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingScheduledActionScalableTargetActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingScheduledActionScalableTargetAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppautoscalingScheduledActionScalableTargetAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
    }
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: true, required: false
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action aws_appautoscaling_scheduled_action}
*/
export class AppautoscalingScheduledAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appautoscaling_scheduled_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppautoscalingScheduledAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppautoscalingScheduledAction to import
  * @param importFromId The id of the existing AppautoscalingScheduledAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppautoscalingScheduledAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appautoscaling_scheduled_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/appautoscaling_scheduled_action aws_appautoscaling_scheduled_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppautoscalingScheduledActionConfig
  */
  public constructor(scope: Construct, id: string, config: AppautoscalingScheduledActionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appautoscaling_scheduled_action',
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
    this._endTime = config.endTime;
    this._id = config.id;
    this._name = config.name;
    this._resourceId = config.resourceId;
    this._scalableDimension = config.scalableDimension;
    this._schedule = config.schedule;
    this._serviceNamespace = config.serviceNamespace;
    this._startTime = config.startTime;
    this._scalableTargetAction.internalValue = config.scalableTargetAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // scalable_dimension - computed: false, optional: true, required: false
  private _scalableDimension?: string; 
  public get scalableDimension() {
    return this.getStringAttribute('scalable_dimension');
  }
  public set scalableDimension(value: string) {
    this._scalableDimension = value;
  }
  public resetScalableDimension() {
    this._scalableDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableDimensionInput() {
    return this._scalableDimension;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace?: string; 
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamespaceInput() {
    return this._serviceNamespace;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // scalable_target_action - computed: false, optional: true, required: false
  private _scalableTargetAction = new AppautoscalingScheduledActionScalableTargetActionOutputReference(this, "scalable_target_action");
  public get scalableTargetAction() {
    return this._scalableTargetAction;
  }
  public putScalableTargetAction(value: AppautoscalingScheduledActionScalableTargetAction) {
    this._scalableTargetAction.internalValue = value;
  }
  public resetScalableTargetAction() {
    this._scalableTargetAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableTargetActionInput() {
    return this._scalableTargetAction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
      schedule: cdktf.stringToTerraform(this._schedule),
      service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
      start_time: cdktf.stringToTerraform(this._startTime),
      scalable_target_action: appautoscalingScheduledActionScalableTargetActionToTerraform(this._scalableTargetAction.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scalable_dimension: {
        value: cdktf.stringToHclTerraform(this._scalableDimension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_namespace: {
        value: cdktf.stringToHclTerraform(this._serviceNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scalable_target_action: {
        value: appautoscalingScheduledActionScalableTargetActionToHclTerraform(this._scalableTargetAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppautoscalingScheduledActionScalableTargetActionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
