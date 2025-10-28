// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityPolicyRulesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#location SecurityPolicyRulesA#location}
  */
  readonly location: SecurityPolicyRulesLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#position SecurityPolicyRulesA#position}
  */
  readonly position: SecurityPolicyRulesPosition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#rules SecurityPolicyRulesA#rules}
  */
  readonly rules: SecurityPolicyRulesRules[] | cdktf.IResolvable;
}
export interface SecurityPolicyRulesLocationDeviceGroup {
  /**
  * The device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#name SecurityPolicyRulesA#name}
  */
  readonly name?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#panorama_device SecurityPolicyRulesA#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The rulebase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#rulebase SecurityPolicyRulesA#rulebase}
  */
  readonly rulebase?: string;
}

export function securityPolicyRulesLocationDeviceGroupToTerraform(struct?: SecurityPolicyRulesLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    rulebase: cdktf.stringToTerraform(struct!.rulebase),
  }
}


export function securityPolicyRulesLocationDeviceGroupToHclTerraform(struct?: SecurityPolicyRulesLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rulebase: {
      value: cdktf.stringToHclTerraform(struct!.rulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyRulesLocationDeviceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._rulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulebase = this._rulebase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesLocationDeviceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
      this._rulebase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
      this._rulebase = value.rulebase;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }

  // rulebase - computed: true, optional: true, required: false
  private _rulebase?: string; 
  public get rulebase() {
    return this.getStringAttribute('rulebase');
  }
  public set rulebase(value: string) {
    this._rulebase = value;
  }
  public resetRulebase() {
    this._rulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulebaseInput() {
    return this._rulebase;
  }
}
export interface SecurityPolicyRulesLocationShared {
  /**
  * Rulebase name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#rulebase SecurityPolicyRulesA#rulebase}
  */
  readonly rulebase?: string;
}

export function securityPolicyRulesLocationSharedToTerraform(struct?: SecurityPolicyRulesLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rulebase: cdktf.stringToTerraform(struct!.rulebase),
  }
}


export function securityPolicyRulesLocationSharedToHclTerraform(struct?: SecurityPolicyRulesLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rulebase: {
      value: cdktf.stringToHclTerraform(struct!.rulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyRulesLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulebase = this._rulebase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesLocationShared | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rulebase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rulebase = value.rulebase;
    }
  }

  // rulebase - computed: true, optional: true, required: false
  private _rulebase?: string; 
  public get rulebase() {
    return this.getStringAttribute('rulebase');
  }
  public set rulebase(value: string) {
    this._rulebase = value;
  }
  public resetRulebase() {
    this._rulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulebaseInput() {
    return this._rulebase;
  }
}
export interface SecurityPolicyRulesLocationVsys {
  /**
  * The vsys name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#name SecurityPolicyRulesA#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#ngfw_device SecurityPolicyRulesA#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function securityPolicyRulesLocationVsysToTerraform(struct?: SecurityPolicyRulesLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function securityPolicyRulesLocationVsysToHclTerraform(struct?: SecurityPolicyRulesLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyRulesLocationVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesLocationVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface SecurityPolicyRulesLocation {
  /**
  * Located in a specific device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#device_group SecurityPolicyRulesA#device_group}
  */
  readonly deviceGroup?: SecurityPolicyRulesLocationDeviceGroup;
  /**
  * Located in a shared rulebase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#shared SecurityPolicyRulesA#shared}
  */
  readonly shared?: SecurityPolicyRulesLocationShared;
  /**
  * Located in a specific vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#vsys SecurityPolicyRulesA#vsys}
  */
  readonly vsys?: SecurityPolicyRulesLocationVsys;
}

export function securityPolicyRulesLocationToTerraform(struct?: SecurityPolicyRulesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: securityPolicyRulesLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: securityPolicyRulesLocationSharedToTerraform(struct!.shared),
    vsys: securityPolicyRulesLocationVsysToTerraform(struct!.vsys),
  }
}


export function securityPolicyRulesLocationToHclTerraform(struct?: SecurityPolicyRulesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: securityPolicyRulesLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyRulesLocationDeviceGroup",
    },
    shared: {
      value: securityPolicyRulesLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyRulesLocationShared",
    },
    vsys: {
      value: securityPolicyRulesLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyRulesLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyRulesLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroup = this._deviceGroup?.internalValue;
    }
    if (this._shared?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared?.internalValue;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = undefined;
      this._shared.internalValue = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = value.deviceGroup;
      this._shared.internalValue = value.shared;
      this._vsys.internalValue = value.vsys;
    }
  }

  // device_group - computed: false, optional: true, required: false
  private _deviceGroup = new SecurityPolicyRulesLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: SecurityPolicyRulesLocationDeviceGroup) {
    this._deviceGroup.internalValue = value;
  }
  public resetDeviceGroup() {
    this._deviceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupInput() {
    return this._deviceGroup.internalValue;
  }

  // shared - computed: false, optional: true, required: false
  private _shared = new SecurityPolicyRulesLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: SecurityPolicyRulesLocationShared) {
    this._shared.internalValue = value;
  }
  public resetShared() {
    this._shared.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared.internalValue;
  }

  // vsys - computed: false, optional: true, required: false
  private _vsys = new SecurityPolicyRulesLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: SecurityPolicyRulesLocationVsys) {
    this._vsys.internalValue = value;
  }
  public resetVsys() {
    this._vsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys.internalValue;
  }
}
export interface SecurityPolicyRulesPosition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#directly SecurityPolicyRulesA#directly}
  */
  readonly directly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#pivot SecurityPolicyRulesA#pivot}
  */
  readonly pivot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#where SecurityPolicyRulesA#where}
  */
  readonly where: string;
}

export function securityPolicyRulesPositionToTerraform(struct?: SecurityPolicyRulesPosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directly: cdktf.booleanToTerraform(struct!.directly),
    pivot: cdktf.stringToTerraform(struct!.pivot),
    where: cdktf.stringToTerraform(struct!.where),
  }
}


export function securityPolicyRulesPositionToHclTerraform(struct?: SecurityPolicyRulesPosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directly: {
      value: cdktf.booleanToHclTerraform(struct!.directly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pivot: {
      value: cdktf.stringToHclTerraform(struct!.pivot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    where: {
      value: cdktf.stringToHclTerraform(struct!.where),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyRulesPosition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directly !== undefined) {
      hasAnyValues = true;
      internalValueResult.directly = this._directly;
    }
    if (this._pivot !== undefined) {
      hasAnyValues = true;
      internalValueResult.pivot = this._pivot;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesPosition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directly = undefined;
      this._pivot = undefined;
      this._where = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directly = value.directly;
      this._pivot = value.pivot;
      this._where = value.where;
    }
  }

  // directly - computed: false, optional: true, required: false
  private _directly?: boolean | cdktf.IResolvable; 
  public get directly() {
    return this.getBooleanAttribute('directly');
  }
  public set directly(value: boolean | cdktf.IResolvable) {
    this._directly = value;
  }
  public resetDirectly() {
    this._directly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directlyInput() {
    return this._directly;
  }

  // pivot - computed: false, optional: true, required: false
  private _pivot?: string; 
  public get pivot() {
    return this.getStringAttribute('pivot');
  }
  public set pivot(value: string) {
    this._pivot = value;
  }
  public resetPivot() {
    this._pivot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pivotInput() {
    return this._pivot;
  }

  // where - computed: false, optional: false, required: true
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }
}
export interface SecurityPolicyRulesRulesProfileSettingProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#data_filtering SecurityPolicyRulesA#data_filtering}
  */
  readonly dataFiltering?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#file_blocking SecurityPolicyRulesA#file_blocking}
  */
  readonly fileBlocking?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#gtp SecurityPolicyRulesA#gtp}
  */
  readonly gtp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#sctp SecurityPolicyRulesA#sctp}
  */
  readonly sctp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#spyware SecurityPolicyRulesA#spyware}
  */
  readonly spyware?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#url_filtering SecurityPolicyRulesA#url_filtering}
  */
  readonly urlFiltering?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#virus SecurityPolicyRulesA#virus}
  */
  readonly virus?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#vulnerability SecurityPolicyRulesA#vulnerability}
  */
  readonly vulnerability?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#wildfire_analysis SecurityPolicyRulesA#wildfire_analysis}
  */
  readonly wildfireAnalysis?: string[];
}

export function securityPolicyRulesRulesProfileSettingProfilesToTerraform(struct?: SecurityPolicyRulesRulesProfileSettingProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_filtering: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataFiltering),
    file_blocking: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileBlocking),
    gtp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gtp),
    sctp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sctp),
    spyware: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.spyware),
    url_filtering: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urlFiltering),
    virus: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.virus),
    vulnerability: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vulnerability),
    wildfire_analysis: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wildfireAnalysis),
  }
}


export function securityPolicyRulesRulesProfileSettingProfilesToHclTerraform(struct?: SecurityPolicyRulesRulesProfileSettingProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_filtering: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataFiltering),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_blocking: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileBlocking),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gtp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gtp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sctp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sctp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spyware: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.spyware),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url_filtering: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urlFiltering),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    virus: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.virus),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vulnerability: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vulnerability),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wildfire_analysis: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wildfireAnalysis),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesRulesProfileSettingProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyRulesRulesProfileSettingProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFiltering = this._dataFiltering;
    }
    if (this._fileBlocking !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileBlocking = this._fileBlocking;
    }
    if (this._gtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtp = this._gtp;
    }
    if (this._sctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctp = this._sctp;
    }
    if (this._spyware !== undefined) {
      hasAnyValues = true;
      internalValueResult.spyware = this._spyware;
    }
    if (this._urlFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFiltering = this._urlFiltering;
    }
    if (this._virus !== undefined) {
      hasAnyValues = true;
      internalValueResult.virus = this._virus;
    }
    if (this._vulnerability !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerability = this._vulnerability;
    }
    if (this._wildfireAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireAnalysis = this._wildfireAnalysis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesRulesProfileSettingProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataFiltering = undefined;
      this._fileBlocking = undefined;
      this._gtp = undefined;
      this._sctp = undefined;
      this._spyware = undefined;
      this._urlFiltering = undefined;
      this._virus = undefined;
      this._vulnerability = undefined;
      this._wildfireAnalysis = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataFiltering = value.dataFiltering;
      this._fileBlocking = value.fileBlocking;
      this._gtp = value.gtp;
      this._sctp = value.sctp;
      this._spyware = value.spyware;
      this._urlFiltering = value.urlFiltering;
      this._virus = value.virus;
      this._vulnerability = value.vulnerability;
      this._wildfireAnalysis = value.wildfireAnalysis;
    }
  }

  // data_filtering - computed: false, optional: true, required: false
  private _dataFiltering?: string[]; 
  public get dataFiltering() {
    return this.getListAttribute('data_filtering');
  }
  public set dataFiltering(value: string[]) {
    this._dataFiltering = value;
  }
  public resetDataFiltering() {
    this._dataFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFilteringInput() {
    return this._dataFiltering;
  }

  // file_blocking - computed: false, optional: true, required: false
  private _fileBlocking?: string[]; 
  public get fileBlocking() {
    return this.getListAttribute('file_blocking');
  }
  public set fileBlocking(value: string[]) {
    this._fileBlocking = value;
  }
  public resetFileBlocking() {
    this._fileBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockingInput() {
    return this._fileBlocking;
  }

  // gtp - computed: false, optional: true, required: false
  private _gtp?: string[]; 
  public get gtp() {
    return this.getListAttribute('gtp');
  }
  public set gtp(value: string[]) {
    this._gtp = value;
  }
  public resetGtp() {
    this._gtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
  }

  // sctp - computed: false, optional: true, required: false
  private _sctp?: string[]; 
  public get sctp() {
    return this.getListAttribute('sctp');
  }
  public set sctp(value: string[]) {
    this._sctp = value;
  }
  public resetSctp() {
    this._sctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpInput() {
    return this._sctp;
  }

  // spyware - computed: false, optional: true, required: false
  private _spyware?: string[]; 
  public get spyware() {
    return this.getListAttribute('spyware');
  }
  public set spyware(value: string[]) {
    this._spyware = value;
  }
  public resetSpyware() {
    this._spyware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spywareInput() {
    return this._spyware;
  }

  // url_filtering - computed: false, optional: true, required: false
  private _urlFiltering?: string[]; 
  public get urlFiltering() {
    return this.getListAttribute('url_filtering');
  }
  public set urlFiltering(value: string[]) {
    this._urlFiltering = value;
  }
  public resetUrlFiltering() {
    this._urlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringInput() {
    return this._urlFiltering;
  }

  // virus - computed: false, optional: true, required: false
  private _virus?: string[]; 
  public get virus() {
    return this.getListAttribute('virus');
  }
  public set virus(value: string[]) {
    this._virus = value;
  }
  public resetVirus() {
    this._virus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusInput() {
    return this._virus;
  }

  // vulnerability - computed: false, optional: true, required: false
  private _vulnerability?: string[]; 
  public get vulnerability() {
    return this.getListAttribute('vulnerability');
  }
  public set vulnerability(value: string[]) {
    this._vulnerability = value;
  }
  public resetVulnerability() {
    this._vulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityInput() {
    return this._vulnerability;
  }

  // wildfire_analysis - computed: false, optional: true, required: false
  private _wildfireAnalysis?: string[]; 
  public get wildfireAnalysis() {
    return this.getListAttribute('wildfire_analysis');
  }
  public set wildfireAnalysis(value: string[]) {
    this._wildfireAnalysis = value;
  }
  public resetWildfireAnalysis() {
    this._wildfireAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireAnalysisInput() {
    return this._wildfireAnalysis;
  }
}
export interface SecurityPolicyRulesRulesProfileSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#group SecurityPolicyRulesA#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#profiles SecurityPolicyRulesA#profiles}
  */
  readonly profiles?: SecurityPolicyRulesRulesProfileSettingProfiles;
}

export function securityPolicyRulesRulesProfileSettingToTerraform(struct?: SecurityPolicyRulesRulesProfileSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    profiles: securityPolicyRulesRulesProfileSettingProfilesToTerraform(struct!.profiles),
  }
}


export function securityPolicyRulesRulesProfileSettingToHclTerraform(struct?: SecurityPolicyRulesRulesProfileSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    profiles: {
      value: securityPolicyRulesRulesProfileSettingProfilesToHclTerraform(struct!.profiles),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyRulesRulesProfileSettingProfiles",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesRulesProfileSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyRulesRulesProfileSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._profiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesRulesProfileSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._profiles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._profiles.internalValue = value.profiles;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return this.getListAttribute('group');
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles = new SecurityPolicyRulesRulesProfileSettingProfilesOutputReference(this, "profiles");
  public get profiles() {
    return this._profiles;
  }
  public putProfiles(value: SecurityPolicyRulesRulesProfileSettingProfiles) {
    this._profiles.internalValue = value;
  }
  public resetProfiles() {
    this._profiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles.internalValue;
  }
}
export interface SecurityPolicyRulesRulesQosMarkingFollowC2SFlow {
}

export function securityPolicyRulesRulesQosMarkingFollowC2SFlowToTerraform(struct?: SecurityPolicyRulesRulesQosMarkingFollowC2SFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securityPolicyRulesRulesQosMarkingFollowC2SFlowToHclTerraform(struct?: SecurityPolicyRulesRulesQosMarkingFollowC2SFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityPolicyRulesRulesQosMarkingFollowC2SFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyRulesRulesQosMarkingFollowC2SFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesRulesQosMarkingFollowC2SFlow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface SecurityPolicyRulesRulesQosMarking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#follow_c2s_flow SecurityPolicyRulesA#follow_c2s_flow}
  */
  readonly followC2SFlow?: SecurityPolicyRulesRulesQosMarkingFollowC2SFlow;
  /**
  * IP DSCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#ip_dscp SecurityPolicyRulesA#ip_dscp}
  */
  readonly ipDscp?: string;
  /**
  * IP Precedence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#ip_precedence SecurityPolicyRulesA#ip_precedence}
  */
  readonly ipPrecedence?: string;
}

export function securityPolicyRulesRulesQosMarkingToTerraform(struct?: SecurityPolicyRulesRulesQosMarking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_c2s_flow: securityPolicyRulesRulesQosMarkingFollowC2SFlowToTerraform(struct!.followC2SFlow),
    ip_dscp: cdktf.stringToTerraform(struct!.ipDscp),
    ip_precedence: cdktf.stringToTerraform(struct!.ipPrecedence),
  }
}


export function securityPolicyRulesRulesQosMarkingToHclTerraform(struct?: SecurityPolicyRulesRulesQosMarking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_c2s_flow: {
      value: securityPolicyRulesRulesQosMarkingFollowC2SFlowToHclTerraform(struct!.followC2SFlow),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyRulesRulesQosMarkingFollowC2SFlow",
    },
    ip_dscp: {
      value: cdktf.stringToHclTerraform(struct!.ipDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_precedence: {
      value: cdktf.stringToHclTerraform(struct!.ipPrecedence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesRulesQosMarkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyRulesRulesQosMarking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followC2SFlow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.followC2SFlow = this._followC2SFlow?.internalValue;
    }
    if (this._ipDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDscp = this._ipDscp;
    }
    if (this._ipPrecedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrecedence = this._ipPrecedence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesRulesQosMarking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._followC2SFlow.internalValue = undefined;
      this._ipDscp = undefined;
      this._ipPrecedence = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._followC2SFlow.internalValue = value.followC2SFlow;
      this._ipDscp = value.ipDscp;
      this._ipPrecedence = value.ipPrecedence;
    }
  }

  // follow_c2s_flow - computed: false, optional: true, required: false
  private _followC2SFlow = new SecurityPolicyRulesRulesQosMarkingFollowC2SFlowOutputReference(this, "follow_c2s_flow");
  public get followC2SFlow() {
    return this._followC2SFlow;
  }
  public putFollowC2SFlow(value: SecurityPolicyRulesRulesQosMarkingFollowC2SFlow) {
    this._followC2SFlow.internalValue = value;
  }
  public resetFollowC2SFlow() {
    this._followC2SFlow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followC2SFlowInput() {
    return this._followC2SFlow.internalValue;
  }

  // ip_dscp - computed: false, optional: true, required: false
  private _ipDscp?: string; 
  public get ipDscp() {
    return this.getStringAttribute('ip_dscp');
  }
  public set ipDscp(value: string) {
    this._ipDscp = value;
  }
  public resetIpDscp() {
    this._ipDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDscpInput() {
    return this._ipDscp;
  }

  // ip_precedence - computed: false, optional: true, required: false
  private _ipPrecedence?: string; 
  public get ipPrecedence() {
    return this.getStringAttribute('ip_precedence');
  }
  public set ipPrecedence(value: string) {
    this._ipPrecedence = value;
  }
  public resetIpPrecedence() {
    this._ipPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrecedenceInput() {
    return this._ipPrecedence;
  }
}
export interface SecurityPolicyRulesRulesQos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#marking SecurityPolicyRulesA#marking}
  */
  readonly marking?: SecurityPolicyRulesRulesQosMarking;
}

export function securityPolicyRulesRulesQosToTerraform(struct?: SecurityPolicyRulesRulesQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    marking: securityPolicyRulesRulesQosMarkingToTerraform(struct!.marking),
  }
}


export function securityPolicyRulesRulesQosToHclTerraform(struct?: SecurityPolicyRulesRulesQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    marking: {
      value: securityPolicyRulesRulesQosMarkingToHclTerraform(struct!.marking),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyRulesRulesQosMarking",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesRulesQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyRulesRulesQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._marking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marking = this._marking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesRulesQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._marking.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._marking.internalValue = value.marking;
    }
  }

  // marking - computed: false, optional: true, required: false
  private _marking = new SecurityPolicyRulesRulesQosMarkingOutputReference(this, "marking");
  public get marking() {
    return this._marking;
  }
  public putMarking(value: SecurityPolicyRulesRulesQosMarking) {
    this._marking.internalValue = value;
  }
  public resetMarking() {
    this._marking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markingInput() {
    return this._marking.internalValue;
  }
}
export interface SecurityPolicyRulesRulesTargetDevicesVsys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#name SecurityPolicyRulesA#name}
  */
  readonly name: string;
}

export function securityPolicyRulesRulesTargetDevicesVsysToTerraform(struct?: SecurityPolicyRulesRulesTargetDevicesVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securityPolicyRulesRulesTargetDevicesVsysToHclTerraform(struct?: SecurityPolicyRulesRulesTargetDevicesVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesRulesTargetDevicesVsysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRulesRulesTargetDevicesVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesRulesTargetDevicesVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class SecurityPolicyRulesRulesTargetDevicesVsysList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRulesRulesTargetDevicesVsys[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRulesRulesTargetDevicesVsysOutputReference {
    return new SecurityPolicyRulesRulesTargetDevicesVsysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyRulesRulesTargetDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#name SecurityPolicyRulesA#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#vsys SecurityPolicyRulesA#vsys}
  */
  readonly vsys?: SecurityPolicyRulesRulesTargetDevicesVsys[] | cdktf.IResolvable;
}

export function securityPolicyRulesRulesTargetDevicesToTerraform(struct?: SecurityPolicyRulesRulesTargetDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vsys: cdktf.listMapper(securityPolicyRulesRulesTargetDevicesVsysToTerraform, false)(struct!.vsys),
  }
}


export function securityPolicyRulesRulesTargetDevicesToHclTerraform(struct?: SecurityPolicyRulesRulesTargetDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.listMapperHcl(securityPolicyRulesRulesTargetDevicesVsysToHclTerraform, false)(struct!.vsys),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRulesRulesTargetDevicesVsysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesRulesTargetDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRulesRulesTargetDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesRulesTargetDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vsys.internalValue = value.vsys;
    }
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

  // vsys - computed: false, optional: true, required: false
  private _vsys = new SecurityPolicyRulesRulesTargetDevicesVsysList(this, "vsys", false);
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: SecurityPolicyRulesRulesTargetDevicesVsys[] | cdktf.IResolvable) {
    this._vsys.internalValue = value;
  }
  public resetVsys() {
    this._vsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys.internalValue;
  }
}

export class SecurityPolicyRulesRulesTargetDevicesList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRulesRulesTargetDevices[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRulesRulesTargetDevicesOutputReference {
    return new SecurityPolicyRulesRulesTargetDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyRulesRulesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#devices SecurityPolicyRulesA#devices}
  */
  readonly devices?: SecurityPolicyRulesRulesTargetDevices[] | cdktf.IResolvable;
  /**
  * Target to all but these specified devices and tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#negate SecurityPolicyRulesA#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#tags SecurityPolicyRulesA#tags}
  */
  readonly tags?: string[];
}

export function securityPolicyRulesRulesTargetToTerraform(struct?: SecurityPolicyRulesRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(securityPolicyRulesRulesTargetDevicesToTerraform, false)(struct!.devices),
    negate: cdktf.booleanToTerraform(struct!.negate),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function securityPolicyRulesRulesTargetToHclTerraform(struct?: SecurityPolicyRulesRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(securityPolicyRulesRulesTargetDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRulesRulesTargetDevicesList",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesRulesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyRulesRulesTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesRulesTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devices.internalValue = undefined;
      this._negate = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devices.internalValue = value.devices;
      this._negate = value.negate;
      this._tags = value.tags;
    }
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new SecurityPolicyRulesRulesTargetDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: SecurityPolicyRulesRulesTargetDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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
}
export interface SecurityPolicyRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#action SecurityPolicyRulesA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#applications SecurityPolicyRulesA#applications}
  */
  readonly applications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#category SecurityPolicyRulesA#category}
  */
  readonly category?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#description SecurityPolicyRulesA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#destination_addresses SecurityPolicyRulesA#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#destination_hip SecurityPolicyRulesA#destination_hip}
  */
  readonly destinationHip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#destination_zones SecurityPolicyRulesA#destination_zones}
  */
  readonly destinationZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#disable_inspect SecurityPolicyRulesA#disable_inspect}
  */
  readonly disableInspect?: boolean | cdktf.IResolvable;
  /**
  * Disable inspection of server side traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#disable_server_response_inspection SecurityPolicyRulesA#disable_server_response_inspection}
  */
  readonly disableServerResponseInspection?: boolean | cdktf.IResolvable;
  /**
  * Disable the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#disabled SecurityPolicyRulesA#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#group_tag SecurityPolicyRulesA#group_tag}
  */
  readonly groupTag?: string;
  /**
  * Send ICMP unreachable error when action is drop or reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#icmp_unreachable SecurityPolicyRulesA#icmp_unreachable}
  */
  readonly icmpUnreachable?: boolean | cdktf.IResolvable;
  /**
  * Log at session end (required for certain ACC tables)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#log_end SecurityPolicyRulesA#log_end}
  */
  readonly logEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#log_setting SecurityPolicyRulesA#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Log at session start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#log_start SecurityPolicyRulesA#log_start}
  */
  readonly logStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#name SecurityPolicyRulesA#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#negate_destination SecurityPolicyRulesA#negate_destination}
  */
  readonly negateDestination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#negate_source SecurityPolicyRulesA#negate_source}
  */
  readonly negateSource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#profile_setting SecurityPolicyRulesA#profile_setting}
  */
  readonly profileSetting?: SecurityPolicyRulesRulesProfileSetting;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#qos SecurityPolicyRulesA#qos}
  */
  readonly qos?: SecurityPolicyRulesRulesQos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#rule_type SecurityPolicyRulesA#rule_type}
  */
  readonly ruleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#schedule SecurityPolicyRulesA#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#services SecurityPolicyRulesA#services}
  */
  readonly services?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#source_addresses SecurityPolicyRulesA#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#source_hip SecurityPolicyRulesA#source_hip}
  */
  readonly sourceHip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#source_imei SecurityPolicyRulesA#source_imei}
  */
  readonly sourceImei?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#source_imsi SecurityPolicyRulesA#source_imsi}
  */
  readonly sourceImsi?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#source_nw_slice SecurityPolicyRulesA#source_nw_slice}
  */
  readonly sourceNwSlice?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#source_users SecurityPolicyRulesA#source_users}
  */
  readonly sourceUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#source_zones SecurityPolicyRulesA#source_zones}
  */
  readonly sourceZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#tag SecurityPolicyRulesA#tag}
  */
  readonly tag?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#target SecurityPolicyRulesA#target}
  */
  readonly target?: SecurityPolicyRulesRulesTarget;
}

export function securityPolicyRulesRulesToTerraform(struct?: SecurityPolicyRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    category: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.category),
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddresses),
    destination_hip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationHip),
    destination_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationZones),
    disable_inspect: cdktf.booleanToTerraform(struct!.disableInspect),
    disable_server_response_inspection: cdktf.booleanToTerraform(struct!.disableServerResponseInspection),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    group_tag: cdktf.stringToTerraform(struct!.groupTag),
    icmp_unreachable: cdktf.booleanToTerraform(struct!.icmpUnreachable),
    log_end: cdktf.booleanToTerraform(struct!.logEnd),
    log_setting: cdktf.stringToTerraform(struct!.logSetting),
    log_start: cdktf.booleanToTerraform(struct!.logStart),
    name: cdktf.stringToTerraform(struct!.name),
    negate_destination: cdktf.booleanToTerraform(struct!.negateDestination),
    negate_source: cdktf.booleanToTerraform(struct!.negateSource),
    profile_setting: securityPolicyRulesRulesProfileSettingToTerraform(struct!.profileSetting),
    qos: securityPolicyRulesRulesQosToTerraform(struct!.qos),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddresses),
    source_hip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceHip),
    source_imei: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceImei),
    source_imsi: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceImsi),
    source_nw_slice: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceNwSlice),
    source_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUsers),
    source_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceZones),
    tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tag),
    target: securityPolicyRulesRulesTargetToTerraform(struct!.target),
  }
}


export function securityPolicyRulesRulesToHclTerraform(struct?: SecurityPolicyRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    category: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.category),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_hip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationHip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    disable_inspect: {
      value: cdktf.booleanToHclTerraform(struct!.disableInspect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_server_response_inspection: {
      value: cdktf.booleanToHclTerraform(struct!.disableServerResponseInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_tag: {
      value: cdktf.stringToHclTerraform(struct!.groupTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_unreachable: {
      value: cdktf.booleanToHclTerraform(struct!.icmpUnreachable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_end: {
      value: cdktf.booleanToHclTerraform(struct!.logEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_setting: {
      value: cdktf.stringToHclTerraform(struct!.logSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_start: {
      value: cdktf.booleanToHclTerraform(struct!.logStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate_destination: {
      value: cdktf.booleanToHclTerraform(struct!.negateDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate_source: {
      value: cdktf.booleanToHclTerraform(struct!.negateSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile_setting: {
      value: securityPolicyRulesRulesProfileSettingToHclTerraform(struct!.profileSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyRulesRulesProfileSetting",
    },
    qos: {
      value: securityPolicyRulesRulesQosToHclTerraform(struct!.qos),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyRulesRulesQos",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_hip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceHip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_imei: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceImei),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_imsi: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceImsi),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_nw_slice: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceNwSlice),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceUsers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: securityPolicyRulesRulesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyRulesRulesTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationHip !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationHip = this._destinationHip;
    }
    if (this._destinationZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationZones = this._destinationZones;
    }
    if (this._disableInspect !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInspect = this._disableInspect;
    }
    if (this._disableServerResponseInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableServerResponseInspection = this._disableServerResponseInspection;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._groupTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupTag = this._groupTag;
    }
    if (this._icmpUnreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpUnreachable = this._icmpUnreachable;
    }
    if (this._logEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnd = this._logEnd;
    }
    if (this._logSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetting = this._logSetting;
    }
    if (this._logStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStart = this._logStart;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negateDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateDestination = this._negateDestination;
    }
    if (this._negateSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateSource = this._negateSource;
    }
    if (this._profileSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileSetting = this._profileSetting?.internalValue;
    }
    if (this._qos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qos = this._qos?.internalValue;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourceHip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHip = this._sourceHip;
    }
    if (this._sourceImei !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceImei = this._sourceImei;
    }
    if (this._sourceImsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceImsi = this._sourceImsi;
    }
    if (this._sourceNwSlice !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNwSlice = this._sourceNwSlice;
    }
    if (this._sourceUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUsers = this._sourceUsers;
    }
    if (this._sourceZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceZones = this._sourceZones;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._applications = undefined;
      this._category = undefined;
      this._description = undefined;
      this._destinationAddresses = undefined;
      this._destinationHip = undefined;
      this._destinationZones = undefined;
      this._disableInspect = undefined;
      this._disableServerResponseInspection = undefined;
      this._disabled = undefined;
      this._groupTag = undefined;
      this._icmpUnreachable = undefined;
      this._logEnd = undefined;
      this._logSetting = undefined;
      this._logStart = undefined;
      this._name = undefined;
      this._negateDestination = undefined;
      this._negateSource = undefined;
      this._profileSetting.internalValue = undefined;
      this._qos.internalValue = undefined;
      this._ruleType = undefined;
      this._schedule = undefined;
      this._services = undefined;
      this._sourceAddresses = undefined;
      this._sourceHip = undefined;
      this._sourceImei = undefined;
      this._sourceImsi = undefined;
      this._sourceNwSlice = undefined;
      this._sourceUsers = undefined;
      this._sourceZones = undefined;
      this._tag = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._applications = value.applications;
      this._category = value.category;
      this._description = value.description;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationHip = value.destinationHip;
      this._destinationZones = value.destinationZones;
      this._disableInspect = value.disableInspect;
      this._disableServerResponseInspection = value.disableServerResponseInspection;
      this._disabled = value.disabled;
      this._groupTag = value.groupTag;
      this._icmpUnreachable = value.icmpUnreachable;
      this._logEnd = value.logEnd;
      this._logSetting = value.logSetting;
      this._logStart = value.logStart;
      this._name = value.name;
      this._negateDestination = value.negateDestination;
      this._negateSource = value.negateSource;
      this._profileSetting.internalValue = value.profileSetting;
      this._qos.internalValue = value.qos;
      this._ruleType = value.ruleType;
      this._schedule = value.schedule;
      this._services = value.services;
      this._sourceAddresses = value.sourceAddresses;
      this._sourceHip = value.sourceHip;
      this._sourceImei = value.sourceImei;
      this._sourceImsi = value.sourceImsi;
      this._sourceNwSlice = value.sourceNwSlice;
      this._sourceUsers = value.sourceUsers;
      this._sourceZones = value.sourceZones;
      this._tag = value.tag;
      this._target.internalValue = value.target;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string[]; 
  public get category() {
    return this.getListAttribute('category');
  }
  public set category(value: string[]) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

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

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_addresses'));
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_hip - computed: false, optional: true, required: false
  private _destinationHip?: string[]; 
  public get destinationHip() {
    return this.getListAttribute('destination_hip');
  }
  public set destinationHip(value: string[]) {
    this._destinationHip = value;
  }
  public resetDestinationHip() {
    this._destinationHip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationHipInput() {
    return this._destinationHip;
  }

  // destination_zones - computed: false, optional: true, required: false
  private _destinationZones?: string[]; 
  public get destinationZones() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_zones'));
  }
  public set destinationZones(value: string[]) {
    this._destinationZones = value;
  }
  public resetDestinationZones() {
    this._destinationZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationZonesInput() {
    return this._destinationZones;
  }

  // disable_inspect - computed: false, optional: true, required: false
  private _disableInspect?: boolean | cdktf.IResolvable; 
  public get disableInspect() {
    return this.getBooleanAttribute('disable_inspect');
  }
  public set disableInspect(value: boolean | cdktf.IResolvable) {
    this._disableInspect = value;
  }
  public resetDisableInspect() {
    this._disableInspect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInspectInput() {
    return this._disableInspect;
  }

  // disable_server_response_inspection - computed: false, optional: true, required: false
  private _disableServerResponseInspection?: boolean | cdktf.IResolvable; 
  public get disableServerResponseInspection() {
    return this.getBooleanAttribute('disable_server_response_inspection');
  }
  public set disableServerResponseInspection(value: boolean | cdktf.IResolvable) {
    this._disableServerResponseInspection = value;
  }
  public resetDisableServerResponseInspection() {
    this._disableServerResponseInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableServerResponseInspectionInput() {
    return this._disableServerResponseInspection;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // group_tag - computed: false, optional: true, required: false
  private _groupTag?: string; 
  public get groupTag() {
    return this.getStringAttribute('group_tag');
  }
  public set groupTag(value: string) {
    this._groupTag = value;
  }
  public resetGroupTag() {
    this._groupTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTagInput() {
    return this._groupTag;
  }

  // icmp_unreachable - computed: false, optional: true, required: false
  private _icmpUnreachable?: boolean | cdktf.IResolvable; 
  public get icmpUnreachable() {
    return this.getBooleanAttribute('icmp_unreachable');
  }
  public set icmpUnreachable(value: boolean | cdktf.IResolvable) {
    this._icmpUnreachable = value;
  }
  public resetIcmpUnreachable() {
    this._icmpUnreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpUnreachableInput() {
    return this._icmpUnreachable;
  }

  // log_end - computed: false, optional: true, required: false
  private _logEnd?: boolean | cdktf.IResolvable; 
  public get logEnd() {
    return this.getBooleanAttribute('log_end');
  }
  public set logEnd(value: boolean | cdktf.IResolvable) {
    this._logEnd = value;
  }
  public resetLogEnd() {
    this._logEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEndInput() {
    return this._logEnd;
  }

  // log_setting - computed: false, optional: true, required: false
  private _logSetting?: string; 
  public get logSetting() {
    return this.getStringAttribute('log_setting');
  }
  public set logSetting(value: string) {
    this._logSetting = value;
  }
  public resetLogSetting() {
    this._logSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingInput() {
    return this._logSetting;
  }

  // log_start - computed: false, optional: true, required: false
  private _logStart?: boolean | cdktf.IResolvable; 
  public get logStart() {
    return this.getBooleanAttribute('log_start');
  }
  public set logStart(value: boolean | cdktf.IResolvable) {
    this._logStart = value;
  }
  public resetLogStart() {
    this._logStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStartInput() {
    return this._logStart;
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

  // negate_destination - computed: false, optional: true, required: false
  private _negateDestination?: boolean | cdktf.IResolvable; 
  public get negateDestination() {
    return this.getBooleanAttribute('negate_destination');
  }
  public set negateDestination(value: boolean | cdktf.IResolvable) {
    this._negateDestination = value;
  }
  public resetNegateDestination() {
    this._negateDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateDestinationInput() {
    return this._negateDestination;
  }

  // negate_source - computed: false, optional: true, required: false
  private _negateSource?: boolean | cdktf.IResolvable; 
  public get negateSource() {
    return this.getBooleanAttribute('negate_source');
  }
  public set negateSource(value: boolean | cdktf.IResolvable) {
    this._negateSource = value;
  }
  public resetNegateSource() {
    this._negateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateSourceInput() {
    return this._negateSource;
  }

  // profile_setting - computed: false, optional: true, required: false
  private _profileSetting = new SecurityPolicyRulesRulesProfileSettingOutputReference(this, "profile_setting");
  public get profileSetting() {
    return this._profileSetting;
  }
  public putProfileSetting(value: SecurityPolicyRulesRulesProfileSetting) {
    this._profileSetting.internalValue = value;
  }
  public resetProfileSetting() {
    this._profileSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileSettingInput() {
    return this._profileSetting.internalValue;
  }

  // qos - computed: false, optional: true, required: false
  private _qos = new SecurityPolicyRulesRulesQosOutputReference(this, "qos");
  public get qos() {
    return this._qos;
  }
  public putQos(value: SecurityPolicyRulesRulesQos) {
    this._qos.internalValue = value;
  }
  public resetQos() {
    this._qos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos.internalValue;
  }

  // rule_type - computed: true, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
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

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('source_addresses'));
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_hip - computed: false, optional: true, required: false
  private _sourceHip?: string[]; 
  public get sourceHip() {
    return this.getListAttribute('source_hip');
  }
  public set sourceHip(value: string[]) {
    this._sourceHip = value;
  }
  public resetSourceHip() {
    this._sourceHip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHipInput() {
    return this._sourceHip;
  }

  // source_imei - computed: false, optional: true, required: false
  private _sourceImei?: string[]; 
  public get sourceImei() {
    return this.getListAttribute('source_imei');
  }
  public set sourceImei(value: string[]) {
    this._sourceImei = value;
  }
  public resetSourceImei() {
    this._sourceImei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImeiInput() {
    return this._sourceImei;
  }

  // source_imsi - computed: false, optional: true, required: false
  private _sourceImsi?: string[]; 
  public get sourceImsi() {
    return this.getListAttribute('source_imsi');
  }
  public set sourceImsi(value: string[]) {
    this._sourceImsi = value;
  }
  public resetSourceImsi() {
    this._sourceImsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImsiInput() {
    return this._sourceImsi;
  }

  // source_nw_slice - computed: false, optional: true, required: false
  private _sourceNwSlice?: string[]; 
  public get sourceNwSlice() {
    return this.getListAttribute('source_nw_slice');
  }
  public set sourceNwSlice(value: string[]) {
    this._sourceNwSlice = value;
  }
  public resetSourceNwSlice() {
    this._sourceNwSlice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNwSliceInput() {
    return this._sourceNwSlice;
  }

  // source_users - computed: false, optional: true, required: false
  private _sourceUsers?: string[]; 
  public get sourceUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('source_users'));
  }
  public set sourceUsers(value: string[]) {
    this._sourceUsers = value;
  }
  public resetSourceUsers() {
    this._sourceUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUsersInput() {
    return this._sourceUsers;
  }

  // source_zones - computed: false, optional: true, required: false
  private _sourceZones?: string[]; 
  public get sourceZones() {
    return cdktf.Fn.tolist(this.getListAttribute('source_zones'));
  }
  public set sourceZones(value: string[]) {
    this._sourceZones = value;
  }
  public resetSourceZones() {
    this._sourceZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceZonesInput() {
    return this._sourceZones;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // target - computed: false, optional: true, required: false
  private _target = new SecurityPolicyRulesRulesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: SecurityPolicyRulesRulesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class SecurityPolicyRulesRulesList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRulesRules[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRulesRulesOutputReference {
    return new SecurityPolicyRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules panos_security_policy_rules}
*/
export class SecurityPolicyRulesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_security_policy_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityPolicyRulesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityPolicyRulesA to import
  * @param importFromId The id of the existing SecurityPolicyRulesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityPolicyRulesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_security_policy_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/security_policy_rules panos_security_policy_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityPolicyRulesAConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityPolicyRulesAConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_security_policy_rules',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._location.internalValue = config.location;
    this._position.internalValue = config.position;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // location - computed: false, optional: false, required: true
  private _location = new SecurityPolicyRulesLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: SecurityPolicyRulesLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // position - computed: false, optional: false, required: true
  private _position = new SecurityPolicyRulesPositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: SecurityPolicyRulesPosition) {
    this._position.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new SecurityPolicyRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SecurityPolicyRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: securityPolicyRulesLocationToTerraform(this._location.internalValue),
      position: securityPolicyRulesPositionToTerraform(this._position.internalValue),
      rules: cdktf.listMapper(securityPolicyRulesRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: securityPolicyRulesLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityPolicyRulesLocation",
      },
      position: {
        value: securityPolicyRulesPositionToHclTerraform(this._position.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityPolicyRulesPosition",
      },
      rules: {
        value: cdktf.listMapperHcl(securityPolicyRulesRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityPolicyRulesRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
