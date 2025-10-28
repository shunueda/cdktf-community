// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2FleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}
  */
  readonly excessCapacityTerminationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#id Ec2Fleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}
  */
  readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#tags Ec2Fleet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}
  */
  readonly terminateInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}
  */
  readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#type Ec2Fleet#type}
  */
  readonly type?: string;
  /**
  * launch_template_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#launch_template_config Ec2Fleet#launch_template_config}
  */
  readonly launchTemplateConfig: Ec2FleetLaunchTemplateConfig;
  /**
  * on_demand_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#on_demand_options Ec2Fleet#on_demand_options}
  */
  readonly onDemandOptions?: Ec2FleetOnDemandOptions;
  /**
  * spot_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#spot_options Ec2Fleet#spot_options}
  */
  readonly spotOptions?: Ec2FleetSpotOptions;
  /**
  * target_capacity_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#target_capacity_specification Ec2Fleet#target_capacity_specification}
  */
  readonly targetCapacitySpecification: Ec2FleetTargetCapacitySpecification;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#timeouts Ec2Fleet#timeouts}
  */
  readonly timeouts?: Ec2FleetTimeouts;
}
export interface Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#launch_template_id Ec2Fleet#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#launch_template_name Ec2Fleet#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#version Ec2Fleet#version}
  */
  readonly version: string;
}

export function ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct?: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    launch_template_id: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._version = value.version;
    }
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface Ec2FleetLaunchTemplateConfigOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#availability_zone Ec2Fleet#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#instance_type Ec2Fleet#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#max_price Ec2Fleet#max_price}
  */
  readonly maxPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#priority Ec2Fleet#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#subnet_id Ec2Fleet#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#weighted_capacity Ec2Fleet#weighted_capacity}
  */
  readonly weightedCapacity?: number;
}

export function ec2FleetLaunchTemplateConfigOverrideToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    max_price: cdktf.stringToTerraform(struct!.maxPrice),
    priority: cdktf.numberToTerraform(struct!.priority),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}


export function ec2FleetLaunchTemplateConfigOverrideToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_price: {
      value: cdktf.stringToHclTerraform(struct!.maxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weighted_capacity: {
      value: cdktf.numberToHclTerraform(struct!.weightedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FleetLaunchTemplateConfigOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ec2FleetLaunchTemplateConfigOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._maxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrice = this._maxPrice;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FleetLaunchTemplateConfigOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._instanceType = undefined;
      this._maxPrice = undefined;
      this._priority = undefined;
      this._subnetId = undefined;
      this._weightedCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._instanceType = value.instanceType;
      this._maxPrice = value.maxPrice;
      this._priority = value.priority;
      this._subnetId = value.subnetId;
      this._weightedCapacity = value.weightedCapacity;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // max_price - computed: false, optional: true, required: false
  private _maxPrice?: string; 
  public get maxPrice() {
    return this.getStringAttribute('max_price');
  }
  public set maxPrice(value: string) {
    this._maxPrice = value;
  }
  public resetMaxPrice() {
    this._maxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriceInput() {
    return this._maxPrice;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // weighted_capacity - computed: false, optional: true, required: false
  private _weightedCapacity?: number; 
  public get weightedCapacity() {
    return this.getNumberAttribute('weighted_capacity');
  }
  public set weightedCapacity(value: number) {
    this._weightedCapacity = value;
  }
  public resetWeightedCapacity() {
    this._weightedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedCapacityInput() {
    return this._weightedCapacity;
  }
}

export class Ec2FleetLaunchTemplateConfigOverrideList extends cdktf.ComplexList {
  public internalValue? : Ec2FleetLaunchTemplateConfigOverride[] | cdktf.IResolvable

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
  public get(index: number): Ec2FleetLaunchTemplateConfigOverrideOutputReference {
    return new Ec2FleetLaunchTemplateConfigOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2FleetLaunchTemplateConfig {
  /**
  * launch_template_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#launch_template_specification Ec2Fleet#launch_template_specification}
  */
  readonly launchTemplateSpecification: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#override Ec2Fleet#override}
  */
  readonly override?: Ec2FleetLaunchTemplateConfigOverride[] | cdktf.IResolvable;
}

export function ec2FleetLaunchTemplateConfigToTerraform(struct?: Ec2FleetLaunchTemplateConfigOutputReference | Ec2FleetLaunchTemplateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    launch_template_specification: ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct!.launchTemplateSpecification),
    override: cdktf.listMapper(ec2FleetLaunchTemplateConfigOverrideToTerraform, true)(struct!.override),
  }
}


export function ec2FleetLaunchTemplateConfigToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOutputReference | Ec2FleetLaunchTemplateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    launch_template_specification: {
      value: ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform(struct!.launchTemplateSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationList",
    },
    override: {
      value: cdktf.listMapperHcl(ec2FleetLaunchTemplateConfigOverrideToHclTerraform, true)(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2FleetLaunchTemplateConfigOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FleetLaunchTemplateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2FleetLaunchTemplateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateSpecification = this._launchTemplateSpecification?.internalValue;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FleetLaunchTemplateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._launchTemplateSpecification.internalValue = undefined;
      this._override.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._launchTemplateSpecification.internalValue = value.launchTemplateSpecification;
      this._override.internalValue = value.override;
    }
  }

  // launch_template_specification - computed: false, optional: false, required: true
  private _launchTemplateSpecification = new Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference(this, "launch_template_specification");
  public get launchTemplateSpecification() {
    return this._launchTemplateSpecification;
  }
  public putLaunchTemplateSpecification(value: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification) {
    this._launchTemplateSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateSpecificationInput() {
    return this._launchTemplateSpecification.internalValue;
  }

  // override - computed: false, optional: true, required: false
  private _override = new Ec2FleetLaunchTemplateConfigOverrideList(this, "override", false);
  public get override() {
    return this._override;
  }
  public putOverride(value: Ec2FleetLaunchTemplateConfigOverride[] | cdktf.IResolvable) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}
export interface Ec2FleetOnDemandOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}
  */
  readonly allocationStrategy?: string;
}

export function ec2FleetOnDemandOptionsToTerraform(struct?: Ec2FleetOnDemandOptionsOutputReference | Ec2FleetOnDemandOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
  }
}


export function ec2FleetOnDemandOptionsToHclTerraform(struct?: Ec2FleetOnDemandOptionsOutputReference | Ec2FleetOnDemandOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FleetOnDemandOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2FleetOnDemandOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FleetOnDemandOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocationStrategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocationStrategy = value.allocationStrategy;
    }
  }

  // allocation_strategy - computed: false, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }
}
export interface Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#replacement_strategy Ec2Fleet#replacement_strategy}
  */
  readonly replacementStrategy?: string;
}

export function ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference | Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replacement_strategy: cdktf.stringToTerraform(struct!.replacementStrategy),
  }
}


export function ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToHclTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference | Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replacement_strategy: {
      value: cdktf.stringToHclTerraform(struct!.replacementStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replacementStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementStrategy = this._replacementStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replacementStrategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replacementStrategy = value.replacementStrategy;
    }
  }

  // replacement_strategy - computed: false, optional: true, required: false
  private _replacementStrategy?: string; 
  public get replacementStrategy() {
    return this.getStringAttribute('replacement_strategy');
  }
  public set replacementStrategy(value: string) {
    this._replacementStrategy = value;
  }
  public resetReplacementStrategy() {
    this._replacementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementStrategyInput() {
    return this._replacementStrategy;
  }
}
export interface Ec2FleetSpotOptionsMaintenanceStrategies {
  /**
  * capacity_rebalance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#capacity_rebalance Ec2Fleet#capacity_rebalance}
  */
  readonly capacityRebalance?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance;
}

export function ec2FleetSpotOptionsMaintenanceStrategiesToTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference | Ec2FleetSpotOptionsMaintenanceStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_rebalance: ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform(struct!.capacityRebalance),
  }
}


export function ec2FleetSpotOptionsMaintenanceStrategiesToHclTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference | Ec2FleetSpotOptionsMaintenanceStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_rebalance: {
      value: ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToHclTerraform(struct!.capacityRebalance),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2FleetSpotOptionsMaintenanceStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityRebalance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityRebalance = this._capacityRebalance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FleetSpotOptionsMaintenanceStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityRebalance.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityRebalance.internalValue = value.capacityRebalance;
    }
  }

  // capacity_rebalance - computed: false, optional: true, required: false
  private _capacityRebalance = new Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference(this, "capacity_rebalance");
  public get capacityRebalance() {
    return this._capacityRebalance;
  }
  public putCapacityRebalance(value: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance) {
    this._capacityRebalance.internalValue = value;
  }
  public resetCapacityRebalance() {
    this._capacityRebalance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityRebalanceInput() {
    return this._capacityRebalance.internalValue;
  }
}
export interface Ec2FleetSpotOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}
  */
  readonly instanceInterruptionBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}
  */
  readonly instancePoolsToUseCount?: number;
  /**
  * maintenance_strategies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#maintenance_strategies Ec2Fleet#maintenance_strategies}
  */
  readonly maintenanceStrategies?: Ec2FleetSpotOptionsMaintenanceStrategies;
}

export function ec2FleetSpotOptionsToTerraform(struct?: Ec2FleetSpotOptionsOutputReference | Ec2FleetSpotOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    instance_interruption_behavior: cdktf.stringToTerraform(struct!.instanceInterruptionBehavior),
    instance_pools_to_use_count: cdktf.numberToTerraform(struct!.instancePoolsToUseCount),
    maintenance_strategies: ec2FleetSpotOptionsMaintenanceStrategiesToTerraform(struct!.maintenanceStrategies),
  }
}


export function ec2FleetSpotOptionsToHclTerraform(struct?: Ec2FleetSpotOptionsOutputReference | Ec2FleetSpotOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_interruption_behavior: {
      value: cdktf.stringToHclTerraform(struct!.instanceInterruptionBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_pools_to_use_count: {
      value: cdktf.numberToHclTerraform(struct!.instancePoolsToUseCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maintenance_strategies: {
      value: ec2FleetSpotOptionsMaintenanceStrategiesToHclTerraform(struct!.maintenanceStrategies),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2FleetSpotOptionsMaintenanceStrategiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FleetSpotOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2FleetSpotOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._instanceInterruptionBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceInterruptionBehavior = this._instanceInterruptionBehavior;
    }
    if (this._instancePoolsToUseCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolsToUseCount = this._instancePoolsToUseCount;
    }
    if (this._maintenanceStrategies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceStrategies = this._maintenanceStrategies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FleetSpotOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocationStrategy = undefined;
      this._instanceInterruptionBehavior = undefined;
      this._instancePoolsToUseCount = undefined;
      this._maintenanceStrategies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocationStrategy = value.allocationStrategy;
      this._instanceInterruptionBehavior = value.instanceInterruptionBehavior;
      this._instancePoolsToUseCount = value.instancePoolsToUseCount;
      this._maintenanceStrategies.internalValue = value.maintenanceStrategies;
    }
  }

  // allocation_strategy - computed: false, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // instance_interruption_behavior - computed: false, optional: true, required: false
  private _instanceInterruptionBehavior?: string; 
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }
  public set instanceInterruptionBehavior(value: string) {
    this._instanceInterruptionBehavior = value;
  }
  public resetInstanceInterruptionBehavior() {
    this._instanceInterruptionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInterruptionBehaviorInput() {
    return this._instanceInterruptionBehavior;
  }

  // instance_pools_to_use_count - computed: false, optional: true, required: false
  private _instancePoolsToUseCount?: number; 
  public get instancePoolsToUseCount() {
    return this.getNumberAttribute('instance_pools_to_use_count');
  }
  public set instancePoolsToUseCount(value: number) {
    this._instancePoolsToUseCount = value;
  }
  public resetInstancePoolsToUseCount() {
    this._instancePoolsToUseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolsToUseCountInput() {
    return this._instancePoolsToUseCount;
  }

  // maintenance_strategies - computed: false, optional: true, required: false
  private _maintenanceStrategies = new Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference(this, "maintenance_strategies");
  public get maintenanceStrategies() {
    return this._maintenanceStrategies;
  }
  public putMaintenanceStrategies(value: Ec2FleetSpotOptionsMaintenanceStrategies) {
    this._maintenanceStrategies.internalValue = value;
  }
  public resetMaintenanceStrategies() {
    this._maintenanceStrategies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceStrategiesInput() {
    return this._maintenanceStrategies.internalValue;
  }
}
export interface Ec2FleetTargetCapacitySpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#default_target_capacity_type Ec2Fleet#default_target_capacity_type}
  */
  readonly defaultTargetCapacityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}
  */
  readonly onDemandTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#spot_target_capacity Ec2Fleet#spot_target_capacity}
  */
  readonly spotTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#total_target_capacity Ec2Fleet#total_target_capacity}
  */
  readonly totalTargetCapacity: number;
}

export function ec2FleetTargetCapacitySpecificationToTerraform(struct?: Ec2FleetTargetCapacitySpecificationOutputReference | Ec2FleetTargetCapacitySpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_target_capacity_type: cdktf.stringToTerraform(struct!.defaultTargetCapacityType),
    on_demand_target_capacity: cdktf.numberToTerraform(struct!.onDemandTargetCapacity),
    spot_target_capacity: cdktf.numberToTerraform(struct!.spotTargetCapacity),
    total_target_capacity: cdktf.numberToTerraform(struct!.totalTargetCapacity),
  }
}


export function ec2FleetTargetCapacitySpecificationToHclTerraform(struct?: Ec2FleetTargetCapacitySpecificationOutputReference | Ec2FleetTargetCapacitySpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_target_capacity_type: {
      value: cdktf.stringToHclTerraform(struct!.defaultTargetCapacityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_demand_target_capacity: {
      value: cdktf.numberToHclTerraform(struct!.onDemandTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_target_capacity: {
      value: cdktf.numberToHclTerraform(struct!.spotTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_target_capacity: {
      value: cdktf.numberToHclTerraform(struct!.totalTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FleetTargetCapacitySpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2FleetTargetCapacitySpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTargetCapacityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTargetCapacityType = this._defaultTargetCapacityType;
    }
    if (this._onDemandTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandTargetCapacity = this._onDemandTargetCapacity;
    }
    if (this._spotTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotTargetCapacity = this._spotTargetCapacity;
    }
    if (this._totalTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTargetCapacity = this._totalTargetCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FleetTargetCapacitySpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTargetCapacityType = undefined;
      this._onDemandTargetCapacity = undefined;
      this._spotTargetCapacity = undefined;
      this._totalTargetCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTargetCapacityType = value.defaultTargetCapacityType;
      this._onDemandTargetCapacity = value.onDemandTargetCapacity;
      this._spotTargetCapacity = value.spotTargetCapacity;
      this._totalTargetCapacity = value.totalTargetCapacity;
    }
  }

  // default_target_capacity_type - computed: false, optional: false, required: true
  private _defaultTargetCapacityType?: string; 
  public get defaultTargetCapacityType() {
    return this.getStringAttribute('default_target_capacity_type');
  }
  public set defaultTargetCapacityType(value: string) {
    this._defaultTargetCapacityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetCapacityTypeInput() {
    return this._defaultTargetCapacityType;
  }

  // on_demand_target_capacity - computed: false, optional: true, required: false
  private _onDemandTargetCapacity?: number; 
  public get onDemandTargetCapacity() {
    return this.getNumberAttribute('on_demand_target_capacity');
  }
  public set onDemandTargetCapacity(value: number) {
    this._onDemandTargetCapacity = value;
  }
  public resetOnDemandTargetCapacity() {
    this._onDemandTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandTargetCapacityInput() {
    return this._onDemandTargetCapacity;
  }

  // spot_target_capacity - computed: false, optional: true, required: false
  private _spotTargetCapacity?: number; 
  public get spotTargetCapacity() {
    return this.getNumberAttribute('spot_target_capacity');
  }
  public set spotTargetCapacity(value: number) {
    this._spotTargetCapacity = value;
  }
  public resetSpotTargetCapacity() {
    this._spotTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotTargetCapacityInput() {
    return this._spotTargetCapacity;
  }

  // total_target_capacity - computed: false, optional: false, required: true
  private _totalTargetCapacity?: number; 
  public get totalTargetCapacity() {
    return this.getNumberAttribute('total_target_capacity');
  }
  public set totalTargetCapacity(value: number) {
    this._totalTargetCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTargetCapacityInput() {
    return this._totalTargetCapacity;
  }
}
export interface Ec2FleetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#create Ec2Fleet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#delete Ec2Fleet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#update Ec2Fleet#update}
  */
  readonly update?: string;
}

export function ec2FleetTimeoutsToTerraform(struct?: Ec2FleetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ec2FleetTimeoutsToHclTerraform(struct?: Ec2FleetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2FleetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2FleetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2FleetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet aws_ec2_fleet}
*/
export class Ec2Fleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ec2Fleet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2Fleet to import
  * @param importFromId The id of the existing Ec2Fleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2Fleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_fleet aws_ec2_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2FleetConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2FleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_fleet',
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
    this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
    this._id = config.id;
    this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
    this._tags = config.tags;
    this._terminateInstances = config.terminateInstances;
    this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
    this._type = config.type;
    this._launchTemplateConfig.internalValue = config.launchTemplateConfig;
    this._onDemandOptions.internalValue = config.onDemandOptions;
    this._spotOptions.internalValue = config.spotOptions;
    this._targetCapacitySpecification.internalValue = config.targetCapacitySpecification;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // excess_capacity_termination_policy - computed: false, optional: true, required: false
  private _excessCapacityTerminationPolicy?: string; 
  public get excessCapacityTerminationPolicy() {
    return this.getStringAttribute('excess_capacity_termination_policy');
  }
  public set excessCapacityTerminationPolicy(value: string) {
    this._excessCapacityTerminationPolicy = value;
  }
  public resetExcessCapacityTerminationPolicy() {
    this._excessCapacityTerminationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excessCapacityTerminationPolicyInput() {
    return this._excessCapacityTerminationPolicy;
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

  // replace_unhealthy_instances - computed: false, optional: true, required: false
  private _replaceUnhealthyInstances?: boolean | cdktf.IResolvable; 
  public get replaceUnhealthyInstances() {
    return this.getBooleanAttribute('replace_unhealthy_instances');
  }
  public set replaceUnhealthyInstances(value: boolean | cdktf.IResolvable) {
    this._replaceUnhealthyInstances = value;
  }
  public resetReplaceUnhealthyInstances() {
    this._replaceUnhealthyInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceUnhealthyInstancesInput() {
    return this._replaceUnhealthyInstances;
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

  // terminate_instances - computed: false, optional: true, required: false
  private _terminateInstances?: boolean | cdktf.IResolvable; 
  public get terminateInstances() {
    return this.getBooleanAttribute('terminate_instances');
  }
  public set terminateInstances(value: boolean | cdktf.IResolvable) {
    this._terminateInstances = value;
  }
  public resetTerminateInstances() {
    this._terminateInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInstancesInput() {
    return this._terminateInstances;
  }

  // terminate_instances_with_expiration - computed: false, optional: true, required: false
  private _terminateInstancesWithExpiration?: boolean | cdktf.IResolvable; 
  public get terminateInstancesWithExpiration() {
    return this.getBooleanAttribute('terminate_instances_with_expiration');
  }
  public set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable) {
    this._terminateInstancesWithExpiration = value;
  }
  public resetTerminateInstancesWithExpiration() {
    this._terminateInstancesWithExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInstancesWithExpirationInput() {
    return this._terminateInstancesWithExpiration;
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

  // launch_template_config - computed: false, optional: false, required: true
  private _launchTemplateConfig = new Ec2FleetLaunchTemplateConfigOutputReference(this, "launch_template_config");
  public get launchTemplateConfig() {
    return this._launchTemplateConfig;
  }
  public putLaunchTemplateConfig(value: Ec2FleetLaunchTemplateConfig) {
    this._launchTemplateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateConfigInput() {
    return this._launchTemplateConfig.internalValue;
  }

  // on_demand_options - computed: false, optional: true, required: false
  private _onDemandOptions = new Ec2FleetOnDemandOptionsOutputReference(this, "on_demand_options");
  public get onDemandOptions() {
    return this._onDemandOptions;
  }
  public putOnDemandOptions(value: Ec2FleetOnDemandOptions) {
    this._onDemandOptions.internalValue = value;
  }
  public resetOnDemandOptions() {
    this._onDemandOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandOptionsInput() {
    return this._onDemandOptions.internalValue;
  }

  // spot_options - computed: false, optional: true, required: false
  private _spotOptions = new Ec2FleetSpotOptionsOutputReference(this, "spot_options");
  public get spotOptions() {
    return this._spotOptions;
  }
  public putSpotOptions(value: Ec2FleetSpotOptions) {
    this._spotOptions.internalValue = value;
  }
  public resetSpotOptions() {
    this._spotOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotOptionsInput() {
    return this._spotOptions.internalValue;
  }

  // target_capacity_specification - computed: false, optional: false, required: true
  private _targetCapacitySpecification = new Ec2FleetTargetCapacitySpecificationOutputReference(this, "target_capacity_specification");
  public get targetCapacitySpecification() {
    return this._targetCapacitySpecification;
  }
  public putTargetCapacitySpecification(value: Ec2FleetTargetCapacitySpecification) {
    this._targetCapacitySpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacitySpecificationInput() {
    return this._targetCapacitySpecification.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Ec2FleetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Ec2FleetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
      id: cdktf.stringToTerraform(this._id),
      replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      terminate_instances: cdktf.booleanToTerraform(this._terminateInstances),
      terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
      type: cdktf.stringToTerraform(this._type),
      launch_template_config: ec2FleetLaunchTemplateConfigToTerraform(this._launchTemplateConfig.internalValue),
      on_demand_options: ec2FleetOnDemandOptionsToTerraform(this._onDemandOptions.internalValue),
      spot_options: ec2FleetSpotOptionsToTerraform(this._spotOptions.internalValue),
      target_capacity_specification: ec2FleetTargetCapacitySpecificationToTerraform(this._targetCapacitySpecification.internalValue),
      timeouts: ec2FleetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      excess_capacity_termination_policy: {
        value: cdktf.stringToHclTerraform(this._excessCapacityTerminationPolicy),
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
      replace_unhealthy_instances: {
        value: cdktf.booleanToHclTerraform(this._replaceUnhealthyInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      terminate_instances: {
        value: cdktf.booleanToHclTerraform(this._terminateInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      terminate_instances_with_expiration: {
        value: cdktf.booleanToHclTerraform(this._terminateInstancesWithExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template_config: {
        value: ec2FleetLaunchTemplateConfigToHclTerraform(this._launchTemplateConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2FleetLaunchTemplateConfigList",
      },
      on_demand_options: {
        value: ec2FleetOnDemandOptionsToHclTerraform(this._onDemandOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2FleetOnDemandOptionsList",
      },
      spot_options: {
        value: ec2FleetSpotOptionsToHclTerraform(this._spotOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2FleetSpotOptionsList",
      },
      target_capacity_specification: {
        value: ec2FleetTargetCapacitySpecificationToHclTerraform(this._targetCapacitySpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2FleetTargetCapacitySpecificationList",
      },
      timeouts: {
        value: ec2FleetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2FleetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
