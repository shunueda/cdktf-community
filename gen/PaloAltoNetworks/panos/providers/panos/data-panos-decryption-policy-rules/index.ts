// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosDecryptionPolicyRulesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#location DataPanosDecryptionPolicyRulesA#location}
  */
  readonly location: DataPanosDecryptionPolicyRulesLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#position DataPanosDecryptionPolicyRulesA#position}
  */
  readonly position: DataPanosDecryptionPolicyRulesPosition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#rules DataPanosDecryptionPolicyRulesA#rules}
  */
  readonly rules: DataPanosDecryptionPolicyRulesRules[] | cdktf.IResolvable;
}
export interface DataPanosDecryptionPolicyRulesLocationDeviceGroup {
  /**
  * The device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#name DataPanosDecryptionPolicyRulesA#name}
  */
  readonly name?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#panorama_device DataPanosDecryptionPolicyRulesA#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The rulebase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#rulebase DataPanosDecryptionPolicyRulesA#rulebase}
  */
  readonly rulebase?: string;
}

export function dataPanosDecryptionPolicyRulesLocationDeviceGroupToTerraform(struct?: DataPanosDecryptionPolicyRulesLocationDeviceGroup | cdktf.IResolvable): any {
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


export function dataPanosDecryptionPolicyRulesLocationDeviceGroupToHclTerraform(struct?: DataPanosDecryptionPolicyRulesLocationDeviceGroup | cdktf.IResolvable): any {
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

export class DataPanosDecryptionPolicyRulesLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDecryptionPolicyRulesLocationDeviceGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosDecryptionPolicyRulesLocationDeviceGroup | cdktf.IResolvable | undefined) {
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
export interface DataPanosDecryptionPolicyRulesLocationShared {
  /**
  * Rulebase name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#rulebase DataPanosDecryptionPolicyRulesA#rulebase}
  */
  readonly rulebase?: string;
}

export function dataPanosDecryptionPolicyRulesLocationSharedToTerraform(struct?: DataPanosDecryptionPolicyRulesLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rulebase: cdktf.stringToTerraform(struct!.rulebase),
  }
}


export function dataPanosDecryptionPolicyRulesLocationSharedToHclTerraform(struct?: DataPanosDecryptionPolicyRulesLocationShared | cdktf.IResolvable): any {
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

export class DataPanosDecryptionPolicyRulesLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDecryptionPolicyRulesLocationShared | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosDecryptionPolicyRulesLocationShared | cdktf.IResolvable | undefined) {
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
export interface DataPanosDecryptionPolicyRulesLocationVsys {
  /**
  * The vsys name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#name DataPanosDecryptionPolicyRulesA#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#ngfw_device DataPanosDecryptionPolicyRulesA#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosDecryptionPolicyRulesLocationVsysToTerraform(struct?: DataPanosDecryptionPolicyRulesLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosDecryptionPolicyRulesLocationVsysToHclTerraform(struct?: DataPanosDecryptionPolicyRulesLocationVsys | cdktf.IResolvable): any {
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

export class DataPanosDecryptionPolicyRulesLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDecryptionPolicyRulesLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosDecryptionPolicyRulesLocationVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosDecryptionPolicyRulesLocation {
  /**
  * Located in a specific device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#device_group DataPanosDecryptionPolicyRulesA#device_group}
  */
  readonly deviceGroup?: DataPanosDecryptionPolicyRulesLocationDeviceGroup;
  /**
  * Located in a shared rulebase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#shared DataPanosDecryptionPolicyRulesA#shared}
  */
  readonly shared?: DataPanosDecryptionPolicyRulesLocationShared;
  /**
  * Located in a specific vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#vsys DataPanosDecryptionPolicyRulesA#vsys}
  */
  readonly vsys?: DataPanosDecryptionPolicyRulesLocationVsys;
}

export function dataPanosDecryptionPolicyRulesLocationToTerraform(struct?: DataPanosDecryptionPolicyRulesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: dataPanosDecryptionPolicyRulesLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: dataPanosDecryptionPolicyRulesLocationSharedToTerraform(struct!.shared),
    vsys: dataPanosDecryptionPolicyRulesLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosDecryptionPolicyRulesLocationToHclTerraform(struct?: DataPanosDecryptionPolicyRulesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: dataPanosDecryptionPolicyRulesLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDecryptionPolicyRulesLocationDeviceGroup",
    },
    shared: {
      value: dataPanosDecryptionPolicyRulesLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDecryptionPolicyRulesLocationShared",
    },
    vsys: {
      value: dataPanosDecryptionPolicyRulesLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDecryptionPolicyRulesLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDecryptionPolicyRulesLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDecryptionPolicyRulesLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosDecryptionPolicyRulesLocation | cdktf.IResolvable | undefined) {
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
  private _deviceGroup = new DataPanosDecryptionPolicyRulesLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: DataPanosDecryptionPolicyRulesLocationDeviceGroup) {
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
  private _shared = new DataPanosDecryptionPolicyRulesLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosDecryptionPolicyRulesLocationShared) {
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
  private _vsys = new DataPanosDecryptionPolicyRulesLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosDecryptionPolicyRulesLocationVsys) {
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
export interface DataPanosDecryptionPolicyRulesPosition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#directly DataPanosDecryptionPolicyRulesA#directly}
  */
  readonly directly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#pivot DataPanosDecryptionPolicyRulesA#pivot}
  */
  readonly pivot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#where DataPanosDecryptionPolicyRulesA#where}
  */
  readonly where: string;
}

export function dataPanosDecryptionPolicyRulesPositionToTerraform(struct?: DataPanosDecryptionPolicyRulesPosition | cdktf.IResolvable): any {
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


export function dataPanosDecryptionPolicyRulesPositionToHclTerraform(struct?: DataPanosDecryptionPolicyRulesPosition | cdktf.IResolvable): any {
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

export class DataPanosDecryptionPolicyRulesPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDecryptionPolicyRulesPosition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosDecryptionPolicyRulesPosition | cdktf.IResolvable | undefined) {
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
export interface DataPanosDecryptionPolicyRulesRulesTargetDevicesVsys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#name DataPanosDecryptionPolicyRulesA#name}
  */
  readonly name: string;
}

export function dataPanosDecryptionPolicyRulesRulesTargetDevicesVsysToTerraform(struct?: DataPanosDecryptionPolicyRulesRulesTargetDevicesVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosDecryptionPolicyRulesRulesTargetDevicesVsysToHclTerraform(struct?: DataPanosDecryptionPolicyRulesRulesTargetDevicesVsys | cdktf.IResolvable): any {
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

export class DataPanosDecryptionPolicyRulesRulesTargetDevicesVsysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosDecryptionPolicyRulesRulesTargetDevicesVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosDecryptionPolicyRulesRulesTargetDevicesVsys | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosDecryptionPolicyRulesRulesTargetDevicesVsysList extends cdktf.ComplexList {
  public internalValue? : DataPanosDecryptionPolicyRulesRulesTargetDevicesVsys[] | cdktf.IResolvable

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
  public get(index: number): DataPanosDecryptionPolicyRulesRulesTargetDevicesVsysOutputReference {
    return new DataPanosDecryptionPolicyRulesRulesTargetDevicesVsysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosDecryptionPolicyRulesRulesTargetDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#name DataPanosDecryptionPolicyRulesA#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#vsys DataPanosDecryptionPolicyRulesA#vsys}
  */
  readonly vsys?: DataPanosDecryptionPolicyRulesRulesTargetDevicesVsys[] | cdktf.IResolvable;
}

export function dataPanosDecryptionPolicyRulesRulesTargetDevicesToTerraform(struct?: DataPanosDecryptionPolicyRulesRulesTargetDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vsys: cdktf.listMapper(dataPanosDecryptionPolicyRulesRulesTargetDevicesVsysToTerraform, false)(struct!.vsys),
  }
}


export function dataPanosDecryptionPolicyRulesRulesTargetDevicesToHclTerraform(struct?: DataPanosDecryptionPolicyRulesRulesTargetDevices | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosDecryptionPolicyRulesRulesTargetDevicesVsysToHclTerraform, false)(struct!.vsys),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosDecryptionPolicyRulesRulesTargetDevicesVsysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDecryptionPolicyRulesRulesTargetDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosDecryptionPolicyRulesRulesTargetDevices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosDecryptionPolicyRulesRulesTargetDevices | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // vsys - computed: true, optional: true, required: false
  private _vsys = new DataPanosDecryptionPolicyRulesRulesTargetDevicesVsysList(this, "vsys", false);
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosDecryptionPolicyRulesRulesTargetDevicesVsys[] | cdktf.IResolvable) {
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

export class DataPanosDecryptionPolicyRulesRulesTargetDevicesList extends cdktf.ComplexList {
  public internalValue? : DataPanosDecryptionPolicyRulesRulesTargetDevices[] | cdktf.IResolvable

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
  public get(index: number): DataPanosDecryptionPolicyRulesRulesTargetDevicesOutputReference {
    return new DataPanosDecryptionPolicyRulesRulesTargetDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosDecryptionPolicyRulesRulesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#devices DataPanosDecryptionPolicyRulesA#devices}
  */
  readonly devices?: DataPanosDecryptionPolicyRulesRulesTargetDevices[] | cdktf.IResolvable;
  /**
  * Target to all but these specified devices and tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#negate DataPanosDecryptionPolicyRulesA#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#tags DataPanosDecryptionPolicyRulesA#tags}
  */
  readonly tags?: string[];
}

export function dataPanosDecryptionPolicyRulesRulesTargetToTerraform(struct?: DataPanosDecryptionPolicyRulesRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(dataPanosDecryptionPolicyRulesRulesTargetDevicesToTerraform, false)(struct!.devices),
    negate: cdktf.booleanToTerraform(struct!.negate),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataPanosDecryptionPolicyRulesRulesTargetToHclTerraform(struct?: DataPanosDecryptionPolicyRulesRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(dataPanosDecryptionPolicyRulesRulesTargetDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosDecryptionPolicyRulesRulesTargetDevicesList",
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

export class DataPanosDecryptionPolicyRulesRulesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDecryptionPolicyRulesRulesTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosDecryptionPolicyRulesRulesTarget | cdktf.IResolvable | undefined) {
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

  // devices - computed: true, optional: true, required: false
  private _devices = new DataPanosDecryptionPolicyRulesRulesTargetDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DataPanosDecryptionPolicyRulesRulesTargetDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // negate - computed: true, optional: true, required: false
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

  // tags - computed: true, optional: true, required: false
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
export interface DataPanosDecryptionPolicyRulesRulesTypeSshProxy {
}

export function dataPanosDecryptionPolicyRulesRulesTypeSshProxyToTerraform(struct?: DataPanosDecryptionPolicyRulesRulesTypeSshProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosDecryptionPolicyRulesRulesTypeSshProxyToHclTerraform(struct?: DataPanosDecryptionPolicyRulesRulesTypeSshProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosDecryptionPolicyRulesRulesTypeSshProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDecryptionPolicyRulesRulesTypeSshProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDecryptionPolicyRulesRulesTypeSshProxy | cdktf.IResolvable | undefined) {
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
export interface DataPanosDecryptionPolicyRulesRulesTypeSslForwardProxy {
}

export function dataPanosDecryptionPolicyRulesRulesTypeSslForwardProxyToTerraform(struct?: DataPanosDecryptionPolicyRulesRulesTypeSslForwardProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosDecryptionPolicyRulesRulesTypeSslForwardProxyToHclTerraform(struct?: DataPanosDecryptionPolicyRulesRulesTypeSslForwardProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosDecryptionPolicyRulesRulesTypeSslForwardProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDecryptionPolicyRulesRulesTypeSslForwardProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDecryptionPolicyRulesRulesTypeSslForwardProxy | cdktf.IResolvable | undefined) {
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
export interface DataPanosDecryptionPolicyRulesRulesTypeSslInboundInspection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#certificates DataPanosDecryptionPolicyRulesA#certificates}
  */
  readonly certificates?: string[];
}

export function dataPanosDecryptionPolicyRulesRulesTypeSslInboundInspectionToTerraform(struct?: DataPanosDecryptionPolicyRulesRulesTypeSslInboundInspection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificates),
  }
}


export function dataPanosDecryptionPolicyRulesRulesTypeSslInboundInspectionToHclTerraform(struct?: DataPanosDecryptionPolicyRulesRulesTypeSslInboundInspection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDecryptionPolicyRulesRulesTypeSslInboundInspectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDecryptionPolicyRulesRulesTypeSslInboundInspection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDecryptionPolicyRulesRulesTypeSslInboundInspection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificates = value.certificates;
    }
  }

  // certificates - computed: true, optional: true, required: false
  private _certificates?: string[]; 
  public get certificates() {
    return this.getListAttribute('certificates');
  }
  public set certificates(value: string[]) {
    this._certificates = value;
  }
  public resetCertificates() {
    this._certificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }
}
export interface DataPanosDecryptionPolicyRulesRulesType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#ssh_proxy DataPanosDecryptionPolicyRulesA#ssh_proxy}
  */
  readonly sshProxy?: DataPanosDecryptionPolicyRulesRulesTypeSshProxy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#ssl_forward_proxy DataPanosDecryptionPolicyRulesA#ssl_forward_proxy}
  */
  readonly sslForwardProxy?: DataPanosDecryptionPolicyRulesRulesTypeSslForwardProxy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#ssl_inbound_inspection DataPanosDecryptionPolicyRulesA#ssl_inbound_inspection}
  */
  readonly sslInboundInspection?: DataPanosDecryptionPolicyRulesRulesTypeSslInboundInspection;
}

export function dataPanosDecryptionPolicyRulesRulesTypeToTerraform(struct?: DataPanosDecryptionPolicyRulesRulesType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_proxy: dataPanosDecryptionPolicyRulesRulesTypeSshProxyToTerraform(struct!.sshProxy),
    ssl_forward_proxy: dataPanosDecryptionPolicyRulesRulesTypeSslForwardProxyToTerraform(struct!.sslForwardProxy),
    ssl_inbound_inspection: dataPanosDecryptionPolicyRulesRulesTypeSslInboundInspectionToTerraform(struct!.sslInboundInspection),
  }
}


export function dataPanosDecryptionPolicyRulesRulesTypeToHclTerraform(struct?: DataPanosDecryptionPolicyRulesRulesType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh_proxy: {
      value: dataPanosDecryptionPolicyRulesRulesTypeSshProxyToHclTerraform(struct!.sshProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDecryptionPolicyRulesRulesTypeSshProxy",
    },
    ssl_forward_proxy: {
      value: dataPanosDecryptionPolicyRulesRulesTypeSslForwardProxyToHclTerraform(struct!.sslForwardProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDecryptionPolicyRulesRulesTypeSslForwardProxy",
    },
    ssl_inbound_inspection: {
      value: dataPanosDecryptionPolicyRulesRulesTypeSslInboundInspectionToHclTerraform(struct!.sslInboundInspection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDecryptionPolicyRulesRulesTypeSslInboundInspection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDecryptionPolicyRulesRulesTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDecryptionPolicyRulesRulesType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshProxy = this._sshProxy?.internalValue;
    }
    if (this._sslForwardProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslForwardProxy = this._sslForwardProxy?.internalValue;
    }
    if (this._sslInboundInspection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInboundInspection = this._sslInboundInspection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDecryptionPolicyRulesRulesType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sshProxy.internalValue = undefined;
      this._sslForwardProxy.internalValue = undefined;
      this._sslInboundInspection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sshProxy.internalValue = value.sshProxy;
      this._sslForwardProxy.internalValue = value.sslForwardProxy;
      this._sslInboundInspection.internalValue = value.sslInboundInspection;
    }
  }

  // ssh_proxy - computed: true, optional: true, required: false
  private _sshProxy = new DataPanosDecryptionPolicyRulesRulesTypeSshProxyOutputReference(this, "ssh_proxy");
  public get sshProxy() {
    return this._sshProxy;
  }
  public putSshProxy(value: DataPanosDecryptionPolicyRulesRulesTypeSshProxy) {
    this._sshProxy.internalValue = value;
  }
  public resetSshProxy() {
    this._sshProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshProxyInput() {
    return this._sshProxy.internalValue;
  }

  // ssl_forward_proxy - computed: true, optional: true, required: false
  private _sslForwardProxy = new DataPanosDecryptionPolicyRulesRulesTypeSslForwardProxyOutputReference(this, "ssl_forward_proxy");
  public get sslForwardProxy() {
    return this._sslForwardProxy;
  }
  public putSslForwardProxy(value: DataPanosDecryptionPolicyRulesRulesTypeSslForwardProxy) {
    this._sslForwardProxy.internalValue = value;
  }
  public resetSslForwardProxy() {
    this._sslForwardProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslForwardProxyInput() {
    return this._sslForwardProxy.internalValue;
  }

  // ssl_inbound_inspection - computed: true, optional: true, required: false
  private _sslInboundInspection = new DataPanosDecryptionPolicyRulesRulesTypeSslInboundInspectionOutputReference(this, "ssl_inbound_inspection");
  public get sslInboundInspection() {
    return this._sslInboundInspection;
  }
  public putSslInboundInspection(value: DataPanosDecryptionPolicyRulesRulesTypeSslInboundInspection) {
    this._sslInboundInspection.internalValue = value;
  }
  public resetSslInboundInspection() {
    this._sslInboundInspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInboundInspectionInput() {
    return this._sslInboundInspection.internalValue;
  }
}
export interface DataPanosDecryptionPolicyRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#action DataPanosDecryptionPolicyRulesA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#category DataPanosDecryptionPolicyRulesA#category}
  */
  readonly category?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#description DataPanosDecryptionPolicyRulesA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#destination_addresses DataPanosDecryptionPolicyRulesA#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#destination_hip DataPanosDecryptionPolicyRulesA#destination_hip}
  */
  readonly destinationHip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#destination_zones DataPanosDecryptionPolicyRulesA#destination_zones}
  */
  readonly destinationZones?: string[];
  /**
  * Disable the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#disabled DataPanosDecryptionPolicyRulesA#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#group_tag DataPanosDecryptionPolicyRulesA#group_tag}
  */
  readonly groupTag?: string;
  /**
  * Log unsuccessful TLS handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#log_fail DataPanosDecryptionPolicyRulesA#log_fail}
  */
  readonly logFail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#log_setting DataPanosDecryptionPolicyRulesA#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Log successful TLS handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#log_success DataPanosDecryptionPolicyRulesA#log_success}
  */
  readonly logSuccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#name DataPanosDecryptionPolicyRulesA#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#negate_destination DataPanosDecryptionPolicyRulesA#negate_destination}
  */
  readonly negateDestination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#negate_source DataPanosDecryptionPolicyRulesA#negate_source}
  */
  readonly negateSource?: boolean | cdktf.IResolvable;
  /**
  * packet-broker profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#packet_broker_profile DataPanosDecryptionPolicyRulesA#packet_broker_profile}
  */
  readonly packetBrokerProfile?: string;
  /**
  * decryption profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#profile DataPanosDecryptionPolicyRulesA#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#services DataPanosDecryptionPolicyRulesA#services}
  */
  readonly services?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#source_addresses DataPanosDecryptionPolicyRulesA#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#source_hip DataPanosDecryptionPolicyRulesA#source_hip}
  */
  readonly sourceHip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#source_user DataPanosDecryptionPolicyRulesA#source_user}
  */
  readonly sourceUser?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#source_zones DataPanosDecryptionPolicyRulesA#source_zones}
  */
  readonly sourceZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#tag DataPanosDecryptionPolicyRulesA#tag}
  */
  readonly tag?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#target DataPanosDecryptionPolicyRulesA#target}
  */
  readonly target?: DataPanosDecryptionPolicyRulesRulesTarget;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#type DataPanosDecryptionPolicyRulesA#type}
  */
  readonly type?: DataPanosDecryptionPolicyRulesRulesType;
}

export function dataPanosDecryptionPolicyRulesRulesToTerraform(struct?: DataPanosDecryptionPolicyRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.category),
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddresses),
    destination_hip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationHip),
    destination_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationZones),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    group_tag: cdktf.stringToTerraform(struct!.groupTag),
    log_fail: cdktf.booleanToTerraform(struct!.logFail),
    log_setting: cdktf.stringToTerraform(struct!.logSetting),
    log_success: cdktf.booleanToTerraform(struct!.logSuccess),
    name: cdktf.stringToTerraform(struct!.name),
    negate_destination: cdktf.booleanToTerraform(struct!.negateDestination),
    negate_source: cdktf.booleanToTerraform(struct!.negateSource),
    packet_broker_profile: cdktf.stringToTerraform(struct!.packetBrokerProfile),
    profile: cdktf.stringToTerraform(struct!.profile),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddresses),
    source_hip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceHip),
    source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUser),
    source_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceZones),
    tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tag),
    target: dataPanosDecryptionPolicyRulesRulesTargetToTerraform(struct!.target),
    type: dataPanosDecryptionPolicyRulesRulesTypeToTerraform(struct!.type),
  }
}


export function dataPanosDecryptionPolicyRulesRulesToHclTerraform(struct?: DataPanosDecryptionPolicyRulesRules | cdktf.IResolvable): any {
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
      type: "list",
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
      type: "list",
      storageClassType: "stringList",
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
    log_fail: {
      value: cdktf.booleanToHclTerraform(struct!.logFail),
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
    log_success: {
      value: cdktf.booleanToHclTerraform(struct!.logSuccess),
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
    packet_broker_profile: {
      value: cdktf.stringToHclTerraform(struct!.packetBrokerProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_hip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceHip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_user: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceUser),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: dataPanosDecryptionPolicyRulesRulesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDecryptionPolicyRulesRulesTarget",
    },
    type: {
      value: dataPanosDecryptionPolicyRulesRulesTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDecryptionPolicyRulesRulesType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDecryptionPolicyRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosDecryptionPolicyRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
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
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._groupTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupTag = this._groupTag;
    }
    if (this._logFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFail = this._logFail;
    }
    if (this._logSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetting = this._logSetting;
    }
    if (this._logSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSuccess = this._logSuccess;
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
    if (this._packetBrokerProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBrokerProfile = this._packetBrokerProfile;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
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
    if (this._sourceUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUser = this._sourceUser;
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
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDecryptionPolicyRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._category = undefined;
      this._description = undefined;
      this._destinationAddresses = undefined;
      this._destinationHip = undefined;
      this._destinationZones = undefined;
      this._disabled = undefined;
      this._groupTag = undefined;
      this._logFail = undefined;
      this._logSetting = undefined;
      this._logSuccess = undefined;
      this._name = undefined;
      this._negateDestination = undefined;
      this._negateSource = undefined;
      this._packetBrokerProfile = undefined;
      this._profile = undefined;
      this._services = undefined;
      this._sourceAddresses = undefined;
      this._sourceHip = undefined;
      this._sourceUser = undefined;
      this._sourceZones = undefined;
      this._tag = undefined;
      this._target.internalValue = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._category = value.category;
      this._description = value.description;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationHip = value.destinationHip;
      this._destinationZones = value.destinationZones;
      this._disabled = value.disabled;
      this._groupTag = value.groupTag;
      this._logFail = value.logFail;
      this._logSetting = value.logSetting;
      this._logSuccess = value.logSuccess;
      this._name = value.name;
      this._negateDestination = value.negateDestination;
      this._negateSource = value.negateSource;
      this._packetBrokerProfile = value.packetBrokerProfile;
      this._profile = value.profile;
      this._services = value.services;
      this._sourceAddresses = value.sourceAddresses;
      this._sourceHip = value.sourceHip;
      this._sourceUser = value.sourceUser;
      this._sourceZones = value.sourceZones;
      this._tag = value.tag;
      this._target.internalValue = value.target;
      this._type.internalValue = value.type;
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

  // category - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
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

  // destination_addresses - computed: true, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
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

  // destination_hip - computed: true, optional: true, required: false
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

  // destination_zones - computed: true, optional: true, required: false
  private _destinationZones?: string[]; 
  public get destinationZones() {
    return this.getListAttribute('destination_zones');
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

  // disabled - computed: true, optional: true, required: false
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

  // group_tag - computed: true, optional: true, required: false
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

  // log_fail - computed: true, optional: true, required: false
  private _logFail?: boolean | cdktf.IResolvable; 
  public get logFail() {
    return this.getBooleanAttribute('log_fail');
  }
  public set logFail(value: boolean | cdktf.IResolvable) {
    this._logFail = value;
  }
  public resetLogFail() {
    this._logFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFailInput() {
    return this._logFail;
  }

  // log_setting - computed: true, optional: true, required: false
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

  // log_success - computed: true, optional: true, required: false
  private _logSuccess?: boolean | cdktf.IResolvable; 
  public get logSuccess() {
    return this.getBooleanAttribute('log_success');
  }
  public set logSuccess(value: boolean | cdktf.IResolvable) {
    this._logSuccess = value;
  }
  public resetLogSuccess() {
    this._logSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSuccessInput() {
    return this._logSuccess;
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

  // negate_destination - computed: true, optional: true, required: false
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

  // negate_source - computed: true, optional: true, required: false
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

  // packet_broker_profile - computed: true, optional: true, required: false
  private _packetBrokerProfile?: string; 
  public get packetBrokerProfile() {
    return this.getStringAttribute('packet_broker_profile');
  }
  public set packetBrokerProfile(value: string) {
    this._packetBrokerProfile = value;
  }
  public resetPacketBrokerProfile() {
    this._packetBrokerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBrokerProfileInput() {
    return this._packetBrokerProfile;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // services - computed: true, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
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

  // source_addresses - computed: true, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
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

  // source_hip - computed: true, optional: true, required: false
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

  // source_user - computed: true, optional: true, required: false
  private _sourceUser?: string[]; 
  public get sourceUser() {
    return this.getListAttribute('source_user');
  }
  public set sourceUser(value: string[]) {
    this._sourceUser = value;
  }
  public resetSourceUser() {
    this._sourceUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserInput() {
    return this._sourceUser;
  }

  // source_zones - computed: true, optional: true, required: false
  private _sourceZones?: string[]; 
  public get sourceZones() {
    return this.getListAttribute('source_zones');
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

  // tag - computed: true, optional: true, required: false
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

  // target - computed: true, optional: true, required: false
  private _target = new DataPanosDecryptionPolicyRulesRulesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataPanosDecryptionPolicyRulesRulesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type = new DataPanosDecryptionPolicyRulesRulesTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosDecryptionPolicyRulesRulesType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

export class DataPanosDecryptionPolicyRulesRulesList extends cdktf.ComplexList {
  public internalValue? : DataPanosDecryptionPolicyRulesRules[] | cdktf.IResolvable

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
  public get(index: number): DataPanosDecryptionPolicyRulesRulesOutputReference {
    return new DataPanosDecryptionPolicyRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules panos_decryption_policy_rules}
*/
export class DataPanosDecryptionPolicyRulesA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_decryption_policy_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosDecryptionPolicyRulesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosDecryptionPolicyRulesA to import
  * @param importFromId The id of the existing DataPanosDecryptionPolicyRulesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosDecryptionPolicyRulesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_decryption_policy_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/decryption_policy_rules panos_decryption_policy_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosDecryptionPolicyRulesAConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosDecryptionPolicyRulesAConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_decryption_policy_rules',
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
  private _location = new DataPanosDecryptionPolicyRulesLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosDecryptionPolicyRulesLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // position - computed: false, optional: false, required: true
  private _position = new DataPanosDecryptionPolicyRulesPositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: DataPanosDecryptionPolicyRulesPosition) {
    this._position.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataPanosDecryptionPolicyRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataPanosDecryptionPolicyRulesRules[] | cdktf.IResolvable) {
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
      location: dataPanosDecryptionPolicyRulesLocationToTerraform(this._location.internalValue),
      position: dataPanosDecryptionPolicyRulesPositionToTerraform(this._position.internalValue),
      rules: cdktf.listMapper(dataPanosDecryptionPolicyRulesRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: dataPanosDecryptionPolicyRulesLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosDecryptionPolicyRulesLocation",
      },
      position: {
        value: dataPanosDecryptionPolicyRulesPositionToHclTerraform(this._position.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosDecryptionPolicyRulesPosition",
      },
      rules: {
        value: cdktf.listMapperHcl(dataPanosDecryptionPolicyRulesRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosDecryptionPolicyRulesRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
