// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalDynamicListConfig extends cdktf.TerraformMetaArguments {
  /**
  * disable object override in child device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#disable_override ExternalDynamicList#disable_override}
  */
  readonly disableOverride?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#location ExternalDynamicList#location}
  */
  readonly location: ExternalDynamicListLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#name ExternalDynamicList#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#type ExternalDynamicList#type}
  */
  readonly type?: ExternalDynamicListType;
}
export interface ExternalDynamicListLocationDeviceGroup {
  /**
  * Device Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#name ExternalDynamicList#name}
  */
  readonly name?: string;
  /**
  * Panorama device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#panorama_device ExternalDynamicList#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function externalDynamicListLocationDeviceGroupToTerraform(struct?: ExternalDynamicListLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function externalDynamicListLocationDeviceGroupToHclTerraform(struct?: ExternalDynamicListLocationDeviceGroup | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListLocationDeviceGroup | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListLocationDeviceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
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
}
export interface ExternalDynamicListLocationShared {
}

export function externalDynamicListLocationSharedToTerraform(struct?: ExternalDynamicListLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalDynamicListLocationSharedToHclTerraform(struct?: ExternalDynamicListLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalDynamicListLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListLocationShared | cdktf.IResolvable | undefined) {
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
export interface ExternalDynamicListLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#name ExternalDynamicList#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#ngfw_device ExternalDynamicList#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function externalDynamicListLocationVsysToTerraform(struct?: ExternalDynamicListLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function externalDynamicListLocationVsysToHclTerraform(struct?: ExternalDynamicListLocationVsys | cdktf.IResolvable): any {
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

export class ExternalDynamicListLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExternalDynamicListLocationVsys | cdktf.IResolvable | undefined) {
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
export interface ExternalDynamicListLocation {
  /**
  * Located in a specific Device Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#device_group ExternalDynamicList#device_group}
  */
  readonly deviceGroup?: ExternalDynamicListLocationDeviceGroup;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#shared ExternalDynamicList#shared}
  */
  readonly shared?: ExternalDynamicListLocationShared;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#vsys ExternalDynamicList#vsys}
  */
  readonly vsys?: ExternalDynamicListLocationVsys;
}

export function externalDynamicListLocationToTerraform(struct?: ExternalDynamicListLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: externalDynamicListLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: externalDynamicListLocationSharedToTerraform(struct!.shared),
    vsys: externalDynamicListLocationVsysToTerraform(struct!.vsys),
  }
}


export function externalDynamicListLocationToHclTerraform(struct?: ExternalDynamicListLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: externalDynamicListLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListLocationDeviceGroup",
    },
    shared: {
      value: externalDynamicListLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListLocationShared",
    },
    vsys: {
      value: externalDynamicListLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExternalDynamicListLocation | cdktf.IResolvable | undefined) {
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
  private _deviceGroup = new ExternalDynamicListLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: ExternalDynamicListLocationDeviceGroup) {
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
  private _shared = new ExternalDynamicListLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: ExternalDynamicListLocationShared) {
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
  private _vsys = new ExternalDynamicListLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: ExternalDynamicListLocationVsys) {
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
export interface ExternalDynamicListTypeDomainAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#password ExternalDynamicList#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#username ExternalDynamicList#username}
  */
  readonly username?: string;
}

export function externalDynamicListTypeDomainAuthToTerraform(struct?: ExternalDynamicListTypeDomainAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function externalDynamicListTypeDomainAuthToHclTerraform(struct?: ExternalDynamicListTypeDomainAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeDomainAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeDomainAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeDomainAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ExternalDynamicListTypeDomainRecurringDaily {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
}

export function externalDynamicListTypeDomainRecurringDailyToTerraform(struct?: ExternalDynamicListTypeDomainRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function externalDynamicListTypeDomainRecurringDailyToHclTerraform(struct?: ExternalDynamicListTypeDomainRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeDomainRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeDomainRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeDomainRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface ExternalDynamicListTypeDomainRecurringFiveMinute {
}

export function externalDynamicListTypeDomainRecurringFiveMinuteToTerraform(struct?: ExternalDynamicListTypeDomainRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalDynamicListTypeDomainRecurringFiveMinuteToHclTerraform(struct?: ExternalDynamicListTypeDomainRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalDynamicListTypeDomainRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeDomainRecurringFiveMinute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeDomainRecurringFiveMinute | cdktf.IResolvable | undefined) {
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
export interface ExternalDynamicListTypeDomainRecurringHourly {
}

export function externalDynamicListTypeDomainRecurringHourlyToTerraform(struct?: ExternalDynamicListTypeDomainRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalDynamicListTypeDomainRecurringHourlyToHclTerraform(struct?: ExternalDynamicListTypeDomainRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalDynamicListTypeDomainRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeDomainRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeDomainRecurringHourly | cdktf.IResolvable | undefined) {
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
export interface ExternalDynamicListTypeDomainRecurringMonthly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#day_of_month ExternalDynamicList#day_of_month}
  */
  readonly dayOfMonth?: number;
}

export function externalDynamicListTypeDomainRecurringMonthlyToTerraform(struct?: ExternalDynamicListTypeDomainRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
  }
}


export function externalDynamicListTypeDomainRecurringMonthlyToHclTerraform(struct?: ExternalDynamicListTypeDomainRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeDomainRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeDomainRecurringMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeDomainRecurringMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfMonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfMonth = value.dayOfMonth;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }
}
export interface ExternalDynamicListTypeDomainRecurringWeekly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#day_of_week ExternalDynamicList#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function externalDynamicListTypeDomainRecurringWeeklyToTerraform(struct?: ExternalDynamicListTypeDomainRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function externalDynamicListTypeDomainRecurringWeeklyToHclTerraform(struct?: ExternalDynamicListTypeDomainRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeDomainRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeDomainRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeDomainRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface ExternalDynamicListTypeDomainRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#daily ExternalDynamicList#daily}
  */
  readonly daily?: ExternalDynamicListTypeDomainRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#five_minute ExternalDynamicList#five_minute}
  */
  readonly fiveMinute?: ExternalDynamicListTypeDomainRecurringFiveMinute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#hourly ExternalDynamicList#hourly}
  */
  readonly hourly?: ExternalDynamicListTypeDomainRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#monthly ExternalDynamicList#monthly}
  */
  readonly monthly?: ExternalDynamicListTypeDomainRecurringMonthly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#weekly ExternalDynamicList#weekly}
  */
  readonly weekly?: ExternalDynamicListTypeDomainRecurringWeekly;
}

export function externalDynamicListTypeDomainRecurringToTerraform(struct?: ExternalDynamicListTypeDomainRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: externalDynamicListTypeDomainRecurringDailyToTerraform(struct!.daily),
    five_minute: externalDynamicListTypeDomainRecurringFiveMinuteToTerraform(struct!.fiveMinute),
    hourly: externalDynamicListTypeDomainRecurringHourlyToTerraform(struct!.hourly),
    monthly: externalDynamicListTypeDomainRecurringMonthlyToTerraform(struct!.monthly),
    weekly: externalDynamicListTypeDomainRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function externalDynamicListTypeDomainRecurringToHclTerraform(struct?: ExternalDynamicListTypeDomainRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: externalDynamicListTypeDomainRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeDomainRecurringDaily",
    },
    five_minute: {
      value: externalDynamicListTypeDomainRecurringFiveMinuteToHclTerraform(struct!.fiveMinute),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeDomainRecurringFiveMinute",
    },
    hourly: {
      value: externalDynamicListTypeDomainRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeDomainRecurringHourly",
    },
    monthly: {
      value: externalDynamicListTypeDomainRecurringMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeDomainRecurringMonthly",
    },
    weekly: {
      value: externalDynamicListTypeDomainRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeDomainRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeDomainRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeDomainRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._fiveMinute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveMinute = this._fiveMinute?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeDomainRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._fiveMinute.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._fiveMinute.internalValue = value.fiveMinute;
      this._hourly.internalValue = value.hourly;
      this._monthly.internalValue = value.monthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new ExternalDynamicListTypeDomainRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: ExternalDynamicListTypeDomainRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // five_minute - computed: false, optional: true, required: false
  private _fiveMinute = new ExternalDynamicListTypeDomainRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }
  public putFiveMinute(value: ExternalDynamicListTypeDomainRecurringFiveMinute) {
    this._fiveMinute.internalValue = value;
  }
  public resetFiveMinute() {
    this._fiveMinute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveMinuteInput() {
    return this._fiveMinute.internalValue;
  }

  // hourly - computed: false, optional: true, required: false
  private _hourly = new ExternalDynamicListTypeDomainRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: ExternalDynamicListTypeDomainRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly = new ExternalDynamicListTypeDomainRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: ExternalDynamicListTypeDomainRecurringMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new ExternalDynamicListTypeDomainRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: ExternalDynamicListTypeDomainRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface ExternalDynamicListTypeDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#auth ExternalDynamicList#auth}
  */
  readonly auth?: ExternalDynamicListTypeDomainAuth;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#certificate_profile ExternalDynamicList#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#description ExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#exception_list ExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Enable/Disable expand domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#expand_domain ExternalDynamicList#expand_domain}
  */
  readonly expandDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#recurring ExternalDynamicList#recurring}
  */
  readonly recurring?: ExternalDynamicListTypeDomainRecurring;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#url ExternalDynamicList#url}
  */
  readonly url?: string;
}

export function externalDynamicListTypeDomainToTerraform(struct?: ExternalDynamicListTypeDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: externalDynamicListTypeDomainAuthToTerraform(struct!.auth),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    expand_domain: cdktf.booleanToTerraform(struct!.expandDomain),
    recurring: externalDynamicListTypeDomainRecurringToTerraform(struct!.recurring),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function externalDynamicListTypeDomainToHclTerraform(struct?: ExternalDynamicListTypeDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: externalDynamicListTypeDomainAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeDomainAuth",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expand_domain: {
      value: cdktf.booleanToHclTerraform(struct!.expandDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recurring: {
      value: externalDynamicListTypeDomainRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeDomainRecurring",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._expandDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandDomain = this._expandDomain;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._certificateProfile = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._expandDomain = undefined;
      this._recurring.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._certificateProfile = value.certificateProfile;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._expandDomain = value.expandDomain;
      this._recurring.internalValue = value.recurring;
      this._url = value.url;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ExternalDynamicListTypeDomainAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ExternalDynamicListTypeDomainAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
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

  // exception_list - computed: false, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // expand_domain - computed: false, optional: true, required: false
  private _expandDomain?: boolean | cdktf.IResolvable; 
  public get expandDomain() {
    return this.getBooleanAttribute('expand_domain');
  }
  public set expandDomain(value: boolean | cdktf.IResolvable) {
    this._expandDomain = value;
  }
  public resetExpandDomain() {
    this._expandDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandDomainInput() {
    return this._expandDomain;
  }

  // recurring - computed: false, optional: true, required: false
  private _recurring = new ExternalDynamicListTypeDomainRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: ExternalDynamicListTypeDomainRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ExternalDynamicListTypeImeiAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#password ExternalDynamicList#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#username ExternalDynamicList#username}
  */
  readonly username?: string;
}

export function externalDynamicListTypeImeiAuthToTerraform(struct?: ExternalDynamicListTypeImeiAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function externalDynamicListTypeImeiAuthToHclTerraform(struct?: ExternalDynamicListTypeImeiAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeImeiAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImeiAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImeiAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ExternalDynamicListTypeImeiRecurringDaily {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
}

export function externalDynamicListTypeImeiRecurringDailyToTerraform(struct?: ExternalDynamicListTypeImeiRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function externalDynamicListTypeImeiRecurringDailyToHclTerraform(struct?: ExternalDynamicListTypeImeiRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeImeiRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImeiRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImeiRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface ExternalDynamicListTypeImeiRecurringFiveMinute {
}

export function externalDynamicListTypeImeiRecurringFiveMinuteToTerraform(struct?: ExternalDynamicListTypeImeiRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalDynamicListTypeImeiRecurringFiveMinuteToHclTerraform(struct?: ExternalDynamicListTypeImeiRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalDynamicListTypeImeiRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImeiRecurringFiveMinute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImeiRecurringFiveMinute | cdktf.IResolvable | undefined) {
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
export interface ExternalDynamicListTypeImeiRecurringHourly {
}

export function externalDynamicListTypeImeiRecurringHourlyToTerraform(struct?: ExternalDynamicListTypeImeiRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalDynamicListTypeImeiRecurringHourlyToHclTerraform(struct?: ExternalDynamicListTypeImeiRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalDynamicListTypeImeiRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImeiRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImeiRecurringHourly | cdktf.IResolvable | undefined) {
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
export interface ExternalDynamicListTypeImeiRecurringMonthly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#day_of_month ExternalDynamicList#day_of_month}
  */
  readonly dayOfMonth?: number;
}

export function externalDynamicListTypeImeiRecurringMonthlyToTerraform(struct?: ExternalDynamicListTypeImeiRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
  }
}


export function externalDynamicListTypeImeiRecurringMonthlyToHclTerraform(struct?: ExternalDynamicListTypeImeiRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeImeiRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImeiRecurringMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImeiRecurringMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfMonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfMonth = value.dayOfMonth;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }
}
export interface ExternalDynamicListTypeImeiRecurringWeekly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#day_of_week ExternalDynamicList#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function externalDynamicListTypeImeiRecurringWeeklyToTerraform(struct?: ExternalDynamicListTypeImeiRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function externalDynamicListTypeImeiRecurringWeeklyToHclTerraform(struct?: ExternalDynamicListTypeImeiRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeImeiRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImeiRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImeiRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface ExternalDynamicListTypeImeiRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#daily ExternalDynamicList#daily}
  */
  readonly daily?: ExternalDynamicListTypeImeiRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#five_minute ExternalDynamicList#five_minute}
  */
  readonly fiveMinute?: ExternalDynamicListTypeImeiRecurringFiveMinute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#hourly ExternalDynamicList#hourly}
  */
  readonly hourly?: ExternalDynamicListTypeImeiRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#monthly ExternalDynamicList#monthly}
  */
  readonly monthly?: ExternalDynamicListTypeImeiRecurringMonthly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#weekly ExternalDynamicList#weekly}
  */
  readonly weekly?: ExternalDynamicListTypeImeiRecurringWeekly;
}

export function externalDynamicListTypeImeiRecurringToTerraform(struct?: ExternalDynamicListTypeImeiRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: externalDynamicListTypeImeiRecurringDailyToTerraform(struct!.daily),
    five_minute: externalDynamicListTypeImeiRecurringFiveMinuteToTerraform(struct!.fiveMinute),
    hourly: externalDynamicListTypeImeiRecurringHourlyToTerraform(struct!.hourly),
    monthly: externalDynamicListTypeImeiRecurringMonthlyToTerraform(struct!.monthly),
    weekly: externalDynamicListTypeImeiRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function externalDynamicListTypeImeiRecurringToHclTerraform(struct?: ExternalDynamicListTypeImeiRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: externalDynamicListTypeImeiRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImeiRecurringDaily",
    },
    five_minute: {
      value: externalDynamicListTypeImeiRecurringFiveMinuteToHclTerraform(struct!.fiveMinute),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImeiRecurringFiveMinute",
    },
    hourly: {
      value: externalDynamicListTypeImeiRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImeiRecurringHourly",
    },
    monthly: {
      value: externalDynamicListTypeImeiRecurringMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImeiRecurringMonthly",
    },
    weekly: {
      value: externalDynamicListTypeImeiRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImeiRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeImeiRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImeiRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._fiveMinute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveMinute = this._fiveMinute?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImeiRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._fiveMinute.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._fiveMinute.internalValue = value.fiveMinute;
      this._hourly.internalValue = value.hourly;
      this._monthly.internalValue = value.monthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new ExternalDynamicListTypeImeiRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: ExternalDynamicListTypeImeiRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // five_minute - computed: false, optional: true, required: false
  private _fiveMinute = new ExternalDynamicListTypeImeiRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }
  public putFiveMinute(value: ExternalDynamicListTypeImeiRecurringFiveMinute) {
    this._fiveMinute.internalValue = value;
  }
  public resetFiveMinute() {
    this._fiveMinute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveMinuteInput() {
    return this._fiveMinute.internalValue;
  }

  // hourly - computed: false, optional: true, required: false
  private _hourly = new ExternalDynamicListTypeImeiRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: ExternalDynamicListTypeImeiRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly = new ExternalDynamicListTypeImeiRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: ExternalDynamicListTypeImeiRecurringMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new ExternalDynamicListTypeImeiRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: ExternalDynamicListTypeImeiRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface ExternalDynamicListTypeImei {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#auth ExternalDynamicList#auth}
  */
  readonly auth?: ExternalDynamicListTypeImeiAuth;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#certificate_profile ExternalDynamicList#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#description ExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#exception_list ExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#recurring ExternalDynamicList#recurring}
  */
  readonly recurring?: ExternalDynamicListTypeImeiRecurring;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#url ExternalDynamicList#url}
  */
  readonly url?: string;
}

export function externalDynamicListTypeImeiToTerraform(struct?: ExternalDynamicListTypeImei | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: externalDynamicListTypeImeiAuthToTerraform(struct!.auth),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    recurring: externalDynamicListTypeImeiRecurringToTerraform(struct!.recurring),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function externalDynamicListTypeImeiToHclTerraform(struct?: ExternalDynamicListTypeImei | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: externalDynamicListTypeImeiAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImeiAuth",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recurring: {
      value: externalDynamicListTypeImeiRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImeiRecurring",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeImeiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImei | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImei | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._certificateProfile = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._recurring.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._certificateProfile = value.certificateProfile;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._recurring.internalValue = value.recurring;
      this._url = value.url;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ExternalDynamicListTypeImeiAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ExternalDynamicListTypeImeiAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
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

  // exception_list - computed: false, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // recurring - computed: false, optional: true, required: false
  private _recurring = new ExternalDynamicListTypeImeiRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: ExternalDynamicListTypeImeiRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ExternalDynamicListTypeImsiAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#password ExternalDynamicList#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#username ExternalDynamicList#username}
  */
  readonly username?: string;
}

export function externalDynamicListTypeImsiAuthToTerraform(struct?: ExternalDynamicListTypeImsiAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function externalDynamicListTypeImsiAuthToHclTerraform(struct?: ExternalDynamicListTypeImsiAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeImsiAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImsiAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImsiAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ExternalDynamicListTypeImsiRecurringDaily {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
}

export function externalDynamicListTypeImsiRecurringDailyToTerraform(struct?: ExternalDynamicListTypeImsiRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function externalDynamicListTypeImsiRecurringDailyToHclTerraform(struct?: ExternalDynamicListTypeImsiRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeImsiRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImsiRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImsiRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface ExternalDynamicListTypeImsiRecurringFiveMinute {
}

export function externalDynamicListTypeImsiRecurringFiveMinuteToTerraform(struct?: ExternalDynamicListTypeImsiRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalDynamicListTypeImsiRecurringFiveMinuteToHclTerraform(struct?: ExternalDynamicListTypeImsiRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalDynamicListTypeImsiRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImsiRecurringFiveMinute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImsiRecurringFiveMinute | cdktf.IResolvable | undefined) {
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
export interface ExternalDynamicListTypeImsiRecurringHourly {
}

export function externalDynamicListTypeImsiRecurringHourlyToTerraform(struct?: ExternalDynamicListTypeImsiRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalDynamicListTypeImsiRecurringHourlyToHclTerraform(struct?: ExternalDynamicListTypeImsiRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalDynamicListTypeImsiRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImsiRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImsiRecurringHourly | cdktf.IResolvable | undefined) {
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
export interface ExternalDynamicListTypeImsiRecurringMonthly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#day_of_month ExternalDynamicList#day_of_month}
  */
  readonly dayOfMonth?: number;
}

export function externalDynamicListTypeImsiRecurringMonthlyToTerraform(struct?: ExternalDynamicListTypeImsiRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
  }
}


export function externalDynamicListTypeImsiRecurringMonthlyToHclTerraform(struct?: ExternalDynamicListTypeImsiRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeImsiRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImsiRecurringMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImsiRecurringMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfMonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfMonth = value.dayOfMonth;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }
}
export interface ExternalDynamicListTypeImsiRecurringWeekly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#day_of_week ExternalDynamicList#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function externalDynamicListTypeImsiRecurringWeeklyToTerraform(struct?: ExternalDynamicListTypeImsiRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function externalDynamicListTypeImsiRecurringWeeklyToHclTerraform(struct?: ExternalDynamicListTypeImsiRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeImsiRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImsiRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImsiRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface ExternalDynamicListTypeImsiRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#daily ExternalDynamicList#daily}
  */
  readonly daily?: ExternalDynamicListTypeImsiRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#five_minute ExternalDynamicList#five_minute}
  */
  readonly fiveMinute?: ExternalDynamicListTypeImsiRecurringFiveMinute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#hourly ExternalDynamicList#hourly}
  */
  readonly hourly?: ExternalDynamicListTypeImsiRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#monthly ExternalDynamicList#monthly}
  */
  readonly monthly?: ExternalDynamicListTypeImsiRecurringMonthly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#weekly ExternalDynamicList#weekly}
  */
  readonly weekly?: ExternalDynamicListTypeImsiRecurringWeekly;
}

export function externalDynamicListTypeImsiRecurringToTerraform(struct?: ExternalDynamicListTypeImsiRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: externalDynamicListTypeImsiRecurringDailyToTerraform(struct!.daily),
    five_minute: externalDynamicListTypeImsiRecurringFiveMinuteToTerraform(struct!.fiveMinute),
    hourly: externalDynamicListTypeImsiRecurringHourlyToTerraform(struct!.hourly),
    monthly: externalDynamicListTypeImsiRecurringMonthlyToTerraform(struct!.monthly),
    weekly: externalDynamicListTypeImsiRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function externalDynamicListTypeImsiRecurringToHclTerraform(struct?: ExternalDynamicListTypeImsiRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: externalDynamicListTypeImsiRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImsiRecurringDaily",
    },
    five_minute: {
      value: externalDynamicListTypeImsiRecurringFiveMinuteToHclTerraform(struct!.fiveMinute),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImsiRecurringFiveMinute",
    },
    hourly: {
      value: externalDynamicListTypeImsiRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImsiRecurringHourly",
    },
    monthly: {
      value: externalDynamicListTypeImsiRecurringMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImsiRecurringMonthly",
    },
    weekly: {
      value: externalDynamicListTypeImsiRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImsiRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeImsiRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImsiRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._fiveMinute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveMinute = this._fiveMinute?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImsiRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._fiveMinute.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._fiveMinute.internalValue = value.fiveMinute;
      this._hourly.internalValue = value.hourly;
      this._monthly.internalValue = value.monthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new ExternalDynamicListTypeImsiRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: ExternalDynamicListTypeImsiRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // five_minute - computed: false, optional: true, required: false
  private _fiveMinute = new ExternalDynamicListTypeImsiRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }
  public putFiveMinute(value: ExternalDynamicListTypeImsiRecurringFiveMinute) {
    this._fiveMinute.internalValue = value;
  }
  public resetFiveMinute() {
    this._fiveMinute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveMinuteInput() {
    return this._fiveMinute.internalValue;
  }

  // hourly - computed: false, optional: true, required: false
  private _hourly = new ExternalDynamicListTypeImsiRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: ExternalDynamicListTypeImsiRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly = new ExternalDynamicListTypeImsiRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: ExternalDynamicListTypeImsiRecurringMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new ExternalDynamicListTypeImsiRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: ExternalDynamicListTypeImsiRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface ExternalDynamicListTypeImsi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#auth ExternalDynamicList#auth}
  */
  readonly auth?: ExternalDynamicListTypeImsiAuth;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#certificate_profile ExternalDynamicList#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#description ExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#exception_list ExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#recurring ExternalDynamicList#recurring}
  */
  readonly recurring?: ExternalDynamicListTypeImsiRecurring;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#url ExternalDynamicList#url}
  */
  readonly url?: string;
}

export function externalDynamicListTypeImsiToTerraform(struct?: ExternalDynamicListTypeImsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: externalDynamicListTypeImsiAuthToTerraform(struct!.auth),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    recurring: externalDynamicListTypeImsiRecurringToTerraform(struct!.recurring),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function externalDynamicListTypeImsiToHclTerraform(struct?: ExternalDynamicListTypeImsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: externalDynamicListTypeImsiAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImsiAuth",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recurring: {
      value: externalDynamicListTypeImsiRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImsiRecurring",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeImsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeImsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeImsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._certificateProfile = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._recurring.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._certificateProfile = value.certificateProfile;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._recurring.internalValue = value.recurring;
      this._url = value.url;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ExternalDynamicListTypeImsiAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ExternalDynamicListTypeImsiAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
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

  // exception_list - computed: false, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // recurring - computed: false, optional: true, required: false
  private _recurring = new ExternalDynamicListTypeImsiRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: ExternalDynamicListTypeImsiRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ExternalDynamicListTypeIpAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#password ExternalDynamicList#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#username ExternalDynamicList#username}
  */
  readonly username?: string;
}

export function externalDynamicListTypeIpAuthToTerraform(struct?: ExternalDynamicListTypeIpAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function externalDynamicListTypeIpAuthToHclTerraform(struct?: ExternalDynamicListTypeIpAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeIpAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeIpAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeIpAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ExternalDynamicListTypeIpRecurringDaily {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
}

export function externalDynamicListTypeIpRecurringDailyToTerraform(struct?: ExternalDynamicListTypeIpRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function externalDynamicListTypeIpRecurringDailyToHclTerraform(struct?: ExternalDynamicListTypeIpRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeIpRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeIpRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeIpRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface ExternalDynamicListTypeIpRecurringFiveMinute {
}

export function externalDynamicListTypeIpRecurringFiveMinuteToTerraform(struct?: ExternalDynamicListTypeIpRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalDynamicListTypeIpRecurringFiveMinuteToHclTerraform(struct?: ExternalDynamicListTypeIpRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalDynamicListTypeIpRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeIpRecurringFiveMinute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeIpRecurringFiveMinute | cdktf.IResolvable | undefined) {
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
export interface ExternalDynamicListTypeIpRecurringHourly {
}

export function externalDynamicListTypeIpRecurringHourlyToTerraform(struct?: ExternalDynamicListTypeIpRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalDynamicListTypeIpRecurringHourlyToHclTerraform(struct?: ExternalDynamicListTypeIpRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalDynamicListTypeIpRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeIpRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeIpRecurringHourly | cdktf.IResolvable | undefined) {
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
export interface ExternalDynamicListTypeIpRecurringMonthly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#day_of_month ExternalDynamicList#day_of_month}
  */
  readonly dayOfMonth?: number;
}

export function externalDynamicListTypeIpRecurringMonthlyToTerraform(struct?: ExternalDynamicListTypeIpRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
  }
}


export function externalDynamicListTypeIpRecurringMonthlyToHclTerraform(struct?: ExternalDynamicListTypeIpRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeIpRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeIpRecurringMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeIpRecurringMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfMonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfMonth = value.dayOfMonth;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }
}
export interface ExternalDynamicListTypeIpRecurringWeekly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#day_of_week ExternalDynamicList#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function externalDynamicListTypeIpRecurringWeeklyToTerraform(struct?: ExternalDynamicListTypeIpRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function externalDynamicListTypeIpRecurringWeeklyToHclTerraform(struct?: ExternalDynamicListTypeIpRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeIpRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeIpRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeIpRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface ExternalDynamicListTypeIpRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#daily ExternalDynamicList#daily}
  */
  readonly daily?: ExternalDynamicListTypeIpRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#five_minute ExternalDynamicList#five_minute}
  */
  readonly fiveMinute?: ExternalDynamicListTypeIpRecurringFiveMinute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#hourly ExternalDynamicList#hourly}
  */
  readonly hourly?: ExternalDynamicListTypeIpRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#monthly ExternalDynamicList#monthly}
  */
  readonly monthly?: ExternalDynamicListTypeIpRecurringMonthly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#weekly ExternalDynamicList#weekly}
  */
  readonly weekly?: ExternalDynamicListTypeIpRecurringWeekly;
}

export function externalDynamicListTypeIpRecurringToTerraform(struct?: ExternalDynamicListTypeIpRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: externalDynamicListTypeIpRecurringDailyToTerraform(struct!.daily),
    five_minute: externalDynamicListTypeIpRecurringFiveMinuteToTerraform(struct!.fiveMinute),
    hourly: externalDynamicListTypeIpRecurringHourlyToTerraform(struct!.hourly),
    monthly: externalDynamicListTypeIpRecurringMonthlyToTerraform(struct!.monthly),
    weekly: externalDynamicListTypeIpRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function externalDynamicListTypeIpRecurringToHclTerraform(struct?: ExternalDynamicListTypeIpRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: externalDynamicListTypeIpRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeIpRecurringDaily",
    },
    five_minute: {
      value: externalDynamicListTypeIpRecurringFiveMinuteToHclTerraform(struct!.fiveMinute),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeIpRecurringFiveMinute",
    },
    hourly: {
      value: externalDynamicListTypeIpRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeIpRecurringHourly",
    },
    monthly: {
      value: externalDynamicListTypeIpRecurringMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeIpRecurringMonthly",
    },
    weekly: {
      value: externalDynamicListTypeIpRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeIpRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeIpRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeIpRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._fiveMinute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveMinute = this._fiveMinute?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeIpRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._fiveMinute.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._fiveMinute.internalValue = value.fiveMinute;
      this._hourly.internalValue = value.hourly;
      this._monthly.internalValue = value.monthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new ExternalDynamicListTypeIpRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: ExternalDynamicListTypeIpRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // five_minute - computed: false, optional: true, required: false
  private _fiveMinute = new ExternalDynamicListTypeIpRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }
  public putFiveMinute(value: ExternalDynamicListTypeIpRecurringFiveMinute) {
    this._fiveMinute.internalValue = value;
  }
  public resetFiveMinute() {
    this._fiveMinute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveMinuteInput() {
    return this._fiveMinute.internalValue;
  }

  // hourly - computed: false, optional: true, required: false
  private _hourly = new ExternalDynamicListTypeIpRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: ExternalDynamicListTypeIpRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly = new ExternalDynamicListTypeIpRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: ExternalDynamicListTypeIpRecurringMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new ExternalDynamicListTypeIpRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: ExternalDynamicListTypeIpRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface ExternalDynamicListTypeIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#auth ExternalDynamicList#auth}
  */
  readonly auth?: ExternalDynamicListTypeIpAuth;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#certificate_profile ExternalDynamicList#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#description ExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#exception_list ExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#recurring ExternalDynamicList#recurring}
  */
  readonly recurring?: ExternalDynamicListTypeIpRecurring;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#url ExternalDynamicList#url}
  */
  readonly url?: string;
}

export function externalDynamicListTypeIpToTerraform(struct?: ExternalDynamicListTypeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: externalDynamicListTypeIpAuthToTerraform(struct!.auth),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    recurring: externalDynamicListTypeIpRecurringToTerraform(struct!.recurring),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function externalDynamicListTypeIpToHclTerraform(struct?: ExternalDynamicListTypeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: externalDynamicListTypeIpAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeIpAuth",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recurring: {
      value: externalDynamicListTypeIpRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeIpRecurring",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._certificateProfile = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._recurring.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._certificateProfile = value.certificateProfile;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._recurring.internalValue = value.recurring;
      this._url = value.url;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ExternalDynamicListTypeIpAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ExternalDynamicListTypeIpAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
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

  // exception_list - computed: false, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // recurring - computed: false, optional: true, required: false
  private _recurring = new ExternalDynamicListTypeIpRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: ExternalDynamicListTypeIpRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ExternalDynamicListTypePredefinedIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#description ExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#exception_list ExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#url ExternalDynamicList#url}
  */
  readonly url?: string;
}

export function externalDynamicListTypePredefinedIpToTerraform(struct?: ExternalDynamicListTypePredefinedIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function externalDynamicListTypePredefinedIpToHclTerraform(struct?: ExternalDynamicListTypePredefinedIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypePredefinedIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypePredefinedIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypePredefinedIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._url = value.url;
    }
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

  // exception_list - computed: false, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ExternalDynamicListTypePredefinedUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#description ExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#exception_list ExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#url ExternalDynamicList#url}
  */
  readonly url?: string;
}

export function externalDynamicListTypePredefinedUrlToTerraform(struct?: ExternalDynamicListTypePredefinedUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function externalDynamicListTypePredefinedUrlToHclTerraform(struct?: ExternalDynamicListTypePredefinedUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypePredefinedUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypePredefinedUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypePredefinedUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._url = value.url;
    }
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

  // exception_list - computed: false, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ExternalDynamicListTypeUrlAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#password ExternalDynamicList#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#username ExternalDynamicList#username}
  */
  readonly username?: string;
}

export function externalDynamicListTypeUrlAuthToTerraform(struct?: ExternalDynamicListTypeUrlAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function externalDynamicListTypeUrlAuthToHclTerraform(struct?: ExternalDynamicListTypeUrlAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeUrlAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeUrlAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeUrlAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ExternalDynamicListTypeUrlRecurringDaily {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
}

export function externalDynamicListTypeUrlRecurringDailyToTerraform(struct?: ExternalDynamicListTypeUrlRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function externalDynamicListTypeUrlRecurringDailyToHclTerraform(struct?: ExternalDynamicListTypeUrlRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeUrlRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeUrlRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeUrlRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface ExternalDynamicListTypeUrlRecurringFiveMinute {
}

export function externalDynamicListTypeUrlRecurringFiveMinuteToTerraform(struct?: ExternalDynamicListTypeUrlRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalDynamicListTypeUrlRecurringFiveMinuteToHclTerraform(struct?: ExternalDynamicListTypeUrlRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalDynamicListTypeUrlRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeUrlRecurringFiveMinute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeUrlRecurringFiveMinute | cdktf.IResolvable | undefined) {
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
export interface ExternalDynamicListTypeUrlRecurringHourly {
}

export function externalDynamicListTypeUrlRecurringHourlyToTerraform(struct?: ExternalDynamicListTypeUrlRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalDynamicListTypeUrlRecurringHourlyToHclTerraform(struct?: ExternalDynamicListTypeUrlRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalDynamicListTypeUrlRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeUrlRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeUrlRecurringHourly | cdktf.IResolvable | undefined) {
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
export interface ExternalDynamicListTypeUrlRecurringMonthly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#day_of_month ExternalDynamicList#day_of_month}
  */
  readonly dayOfMonth?: number;
}

export function externalDynamicListTypeUrlRecurringMonthlyToTerraform(struct?: ExternalDynamicListTypeUrlRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
  }
}


export function externalDynamicListTypeUrlRecurringMonthlyToHclTerraform(struct?: ExternalDynamicListTypeUrlRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeUrlRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeUrlRecurringMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeUrlRecurringMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfMonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfMonth = value.dayOfMonth;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }
}
export interface ExternalDynamicListTypeUrlRecurringWeekly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#at ExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#day_of_week ExternalDynamicList#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function externalDynamicListTypeUrlRecurringWeeklyToTerraform(struct?: ExternalDynamicListTypeUrlRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function externalDynamicListTypeUrlRecurringWeeklyToHclTerraform(struct?: ExternalDynamicListTypeUrlRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeUrlRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeUrlRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeUrlRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface ExternalDynamicListTypeUrlRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#daily ExternalDynamicList#daily}
  */
  readonly daily?: ExternalDynamicListTypeUrlRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#five_minute ExternalDynamicList#five_minute}
  */
  readonly fiveMinute?: ExternalDynamicListTypeUrlRecurringFiveMinute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#hourly ExternalDynamicList#hourly}
  */
  readonly hourly?: ExternalDynamicListTypeUrlRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#monthly ExternalDynamicList#monthly}
  */
  readonly monthly?: ExternalDynamicListTypeUrlRecurringMonthly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#weekly ExternalDynamicList#weekly}
  */
  readonly weekly?: ExternalDynamicListTypeUrlRecurringWeekly;
}

export function externalDynamicListTypeUrlRecurringToTerraform(struct?: ExternalDynamicListTypeUrlRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: externalDynamicListTypeUrlRecurringDailyToTerraform(struct!.daily),
    five_minute: externalDynamicListTypeUrlRecurringFiveMinuteToTerraform(struct!.fiveMinute),
    hourly: externalDynamicListTypeUrlRecurringHourlyToTerraform(struct!.hourly),
    monthly: externalDynamicListTypeUrlRecurringMonthlyToTerraform(struct!.monthly),
    weekly: externalDynamicListTypeUrlRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function externalDynamicListTypeUrlRecurringToHclTerraform(struct?: ExternalDynamicListTypeUrlRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: externalDynamicListTypeUrlRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeUrlRecurringDaily",
    },
    five_minute: {
      value: externalDynamicListTypeUrlRecurringFiveMinuteToHclTerraform(struct!.fiveMinute),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeUrlRecurringFiveMinute",
    },
    hourly: {
      value: externalDynamicListTypeUrlRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeUrlRecurringHourly",
    },
    monthly: {
      value: externalDynamicListTypeUrlRecurringMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeUrlRecurringMonthly",
    },
    weekly: {
      value: externalDynamicListTypeUrlRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeUrlRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeUrlRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeUrlRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._fiveMinute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveMinute = this._fiveMinute?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeUrlRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._fiveMinute.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._fiveMinute.internalValue = value.fiveMinute;
      this._hourly.internalValue = value.hourly;
      this._monthly.internalValue = value.monthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new ExternalDynamicListTypeUrlRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: ExternalDynamicListTypeUrlRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // five_minute - computed: false, optional: true, required: false
  private _fiveMinute = new ExternalDynamicListTypeUrlRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }
  public putFiveMinute(value: ExternalDynamicListTypeUrlRecurringFiveMinute) {
    this._fiveMinute.internalValue = value;
  }
  public resetFiveMinute() {
    this._fiveMinute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveMinuteInput() {
    return this._fiveMinute.internalValue;
  }

  // hourly - computed: false, optional: true, required: false
  private _hourly = new ExternalDynamicListTypeUrlRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: ExternalDynamicListTypeUrlRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly = new ExternalDynamicListTypeUrlRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: ExternalDynamicListTypeUrlRecurringMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new ExternalDynamicListTypeUrlRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: ExternalDynamicListTypeUrlRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface ExternalDynamicListTypeUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#auth ExternalDynamicList#auth}
  */
  readonly auth?: ExternalDynamicListTypeUrlAuth;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#certificate_profile ExternalDynamicList#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#description ExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#exception_list ExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#recurring ExternalDynamicList#recurring}
  */
  readonly recurring?: ExternalDynamicListTypeUrlRecurring;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#url ExternalDynamicList#url}
  */
  readonly url?: string;
}

export function externalDynamicListTypeUrlToTerraform(struct?: ExternalDynamicListTypeUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: externalDynamicListTypeUrlAuthToTerraform(struct!.auth),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    recurring: externalDynamicListTypeUrlRecurringToTerraform(struct!.recurring),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function externalDynamicListTypeUrlToHclTerraform(struct?: ExternalDynamicListTypeUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: externalDynamicListTypeUrlAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeUrlAuth",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recurring: {
      value: externalDynamicListTypeUrlRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeUrlRecurring",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListTypeUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListTypeUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._certificateProfile = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._recurring.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._certificateProfile = value.certificateProfile;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._recurring.internalValue = value.recurring;
      this._url = value.url;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ExternalDynamicListTypeUrlAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ExternalDynamicListTypeUrlAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
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

  // exception_list - computed: false, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // recurring - computed: false, optional: true, required: false
  private _recurring = new ExternalDynamicListTypeUrlRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: ExternalDynamicListTypeUrlRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ExternalDynamicListType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#domain ExternalDynamicList#domain}
  */
  readonly domain?: ExternalDynamicListTypeDomain;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#imei ExternalDynamicList#imei}
  */
  readonly imei?: ExternalDynamicListTypeImei;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#imsi ExternalDynamicList#imsi}
  */
  readonly imsi?: ExternalDynamicListTypeImsi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#ip ExternalDynamicList#ip}
  */
  readonly ip?: ExternalDynamicListTypeIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#predefined_ip ExternalDynamicList#predefined_ip}
  */
  readonly predefinedIp?: ExternalDynamicListTypePredefinedIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#predefined_url ExternalDynamicList#predefined_url}
  */
  readonly predefinedUrl?: ExternalDynamicListTypePredefinedUrl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#url ExternalDynamicList#url}
  */
  readonly url?: ExternalDynamicListTypeUrl;
}

export function externalDynamicListTypeToTerraform(struct?: ExternalDynamicListType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: externalDynamicListTypeDomainToTerraform(struct!.domain),
    imei: externalDynamicListTypeImeiToTerraform(struct!.imei),
    imsi: externalDynamicListTypeImsiToTerraform(struct!.imsi),
    ip: externalDynamicListTypeIpToTerraform(struct!.ip),
    predefined_ip: externalDynamicListTypePredefinedIpToTerraform(struct!.predefinedIp),
    predefined_url: externalDynamicListTypePredefinedUrlToTerraform(struct!.predefinedUrl),
    url: externalDynamicListTypeUrlToTerraform(struct!.url),
  }
}


export function externalDynamicListTypeToHclTerraform(struct?: ExternalDynamicListType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: externalDynamicListTypeDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeDomain",
    },
    imei: {
      value: externalDynamicListTypeImeiToHclTerraform(struct!.imei),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImei",
    },
    imsi: {
      value: externalDynamicListTypeImsiToHclTerraform(struct!.imsi),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeImsi",
    },
    ip: {
      value: externalDynamicListTypeIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeIp",
    },
    predefined_ip: {
      value: externalDynamicListTypePredefinedIpToHclTerraform(struct!.predefinedIp),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypePredefinedIp",
    },
    predefined_url: {
      value: externalDynamicListTypePredefinedUrlToHclTerraform(struct!.predefinedUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypePredefinedUrl",
    },
    url: {
      value: externalDynamicListTypeUrlToHclTerraform(struct!.url),
      isBlock: true,
      type: "struct",
      storageClassType: "ExternalDynamicListTypeUrl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalDynamicListTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalDynamicListType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._imei?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imei = this._imei?.internalValue;
    }
    if (this._imsi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsi = this._imsi?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._predefinedIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedIp = this._predefinedIp?.internalValue;
    }
    if (this._predefinedUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedUrl = this._predefinedUrl?.internalValue;
    }
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalDynamicListType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain.internalValue = undefined;
      this._imei.internalValue = undefined;
      this._imsi.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._predefinedIp.internalValue = undefined;
      this._predefinedUrl.internalValue = undefined;
      this._url.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain.internalValue = value.domain;
      this._imei.internalValue = value.imei;
      this._imsi.internalValue = value.imsi;
      this._ip.internalValue = value.ip;
      this._predefinedIp.internalValue = value.predefinedIp;
      this._predefinedUrl.internalValue = value.predefinedUrl;
      this._url.internalValue = value.url;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new ExternalDynamicListTypeDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: ExternalDynamicListTypeDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // imei - computed: false, optional: true, required: false
  private _imei = new ExternalDynamicListTypeImeiOutputReference(this, "imei");
  public get imei() {
    return this._imei;
  }
  public putImei(value: ExternalDynamicListTypeImei) {
    this._imei.internalValue = value;
  }
  public resetImei() {
    this._imei.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imeiInput() {
    return this._imei.internalValue;
  }

  // imsi - computed: false, optional: true, required: false
  private _imsi = new ExternalDynamicListTypeImsiOutputReference(this, "imsi");
  public get imsi() {
    return this._imsi;
  }
  public putImsi(value: ExternalDynamicListTypeImsi) {
    this._imsi.internalValue = value;
  }
  public resetImsi() {
    this._imsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiInput() {
    return this._imsi.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new ExternalDynamicListTypeIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: ExternalDynamicListTypeIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // predefined_ip - computed: false, optional: true, required: false
  private _predefinedIp = new ExternalDynamicListTypePredefinedIpOutputReference(this, "predefined_ip");
  public get predefinedIp() {
    return this._predefinedIp;
  }
  public putPredefinedIp(value: ExternalDynamicListTypePredefinedIp) {
    this._predefinedIp.internalValue = value;
  }
  public resetPredefinedIp() {
    this._predefinedIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedIpInput() {
    return this._predefinedIp.internalValue;
  }

  // predefined_url - computed: false, optional: true, required: false
  private _predefinedUrl = new ExternalDynamicListTypePredefinedUrlOutputReference(this, "predefined_url");
  public get predefinedUrl() {
    return this._predefinedUrl;
  }
  public putPredefinedUrl(value: ExternalDynamicListTypePredefinedUrl) {
    this._predefinedUrl.internalValue = value;
  }
  public resetPredefinedUrl() {
    this._predefinedUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedUrlInput() {
    return this._predefinedUrl.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url = new ExternalDynamicListTypeUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: ExternalDynamicListTypeUrl) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list panos_external_dynamic_list}
*/
export class ExternalDynamicList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_external_dynamic_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalDynamicList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalDynamicList to import
  * @param importFromId The id of the existing ExternalDynamicList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalDynamicList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_external_dynamic_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/external_dynamic_list panos_external_dynamic_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalDynamicListConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalDynamicListConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_external_dynamic_list',
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
    this._disableOverride = config.disableOverride;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._type.internalValue = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_override - computed: false, optional: true, required: false
  private _disableOverride?: string; 
  public get disableOverride() {
    return this.getStringAttribute('disable_override');
  }
  public set disableOverride(value: string) {
    this._disableOverride = value;
  }
  public resetDisableOverride() {
    this._disableOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOverrideInput() {
    return this._disableOverride;
  }

  // location - computed: false, optional: false, required: true
  private _location = new ExternalDynamicListLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: ExternalDynamicListLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // type - computed: false, optional: true, required: false
  private _type = new ExternalDynamicListTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: ExternalDynamicListType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_override: cdktf.stringToTerraform(this._disableOverride),
      location: externalDynamicListLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      type: externalDynamicListTypeToTerraform(this._type.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_override: {
        value: cdktf.stringToHclTerraform(this._disableOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: externalDynamicListLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExternalDynamicListLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: externalDynamicListTypeToHclTerraform(this._type.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExternalDynamicListType",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
