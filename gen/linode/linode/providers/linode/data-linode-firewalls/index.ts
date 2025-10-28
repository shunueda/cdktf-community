// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeFirewallsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The order in which results should be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls#order DataLinodeFirewalls#order}
  */
  readonly order?: string;
  /**
  * The attribute to order the results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls#order_by DataLinodeFirewalls#order_by}
  */
  readonly orderBy?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls#filter DataLinodeFirewalls#filter}
  */
  readonly filter?: DataLinodeFirewallsFilter[] | cdktf.IResolvable;
  /**
  * firewalls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls#firewalls DataLinodeFirewalls#firewalls}
  */
  readonly firewalls?: DataLinodeFirewallsFirewalls[] | cdktf.IResolvable;
}
export interface DataLinodeFirewallsFilter {
  /**
  * The type of comparison to use for this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls#match_by DataLinodeFirewalls#match_by}
  */
  readonly matchBy?: string;
  /**
  * The name of the attribute to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls#name DataLinodeFirewalls#name}
  */
  readonly name: string;
  /**
  * The value(s) to be used in the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls#values DataLinodeFirewalls#values}
  */
  readonly values: string[];
}

export function dataLinodeFirewallsFilterToTerraform(struct?: DataLinodeFirewallsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_by: cdktf.stringToTerraform(struct!.matchBy),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataLinodeFirewallsFilterToHclTerraform(struct?: DataLinodeFirewallsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_by: {
      value: cdktf.stringToHclTerraform(struct!.matchBy),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinodeFirewallsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeFirewallsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBy = this._matchBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeFirewallsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchBy = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchBy = value.matchBy;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // match_by - computed: false, optional: true, required: false
  private _matchBy?: string; 
  public get matchBy() {
    return this.getStringAttribute('match_by');
  }
  public set matchBy(value: string) {
    this._matchBy = value;
  }
  public resetMatchBy() {
    this._matchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchByInput() {
    return this._matchBy;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataLinodeFirewallsFilterList extends cdktf.ComplexList {
  public internalValue? : DataLinodeFirewallsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeFirewallsFilterOutputReference {
    return new DataLinodeFirewallsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeFirewallsFirewallsDevices {
}

export function dataLinodeFirewallsFirewallsDevicesToTerraform(struct?: DataLinodeFirewallsFirewallsDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeFirewallsFirewallsDevicesToHclTerraform(struct?: DataLinodeFirewallsFirewallsDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeFirewallsFirewallsDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeFirewallsFirewallsDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeFirewallsFirewallsDevices | cdktf.IResolvable | undefined) {
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

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getNumberAttribute('entity_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataLinodeFirewallsFirewallsDevicesList extends cdktf.ComplexList {
  public internalValue? : DataLinodeFirewallsFirewallsDevices[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeFirewallsFirewallsDevicesOutputReference {
    return new DataLinodeFirewallsFirewallsDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeFirewallsFirewallsInbound {
}

export function dataLinodeFirewallsFirewallsInboundToTerraform(struct?: DataLinodeFirewallsFirewallsInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeFirewallsFirewallsInboundToHclTerraform(struct?: DataLinodeFirewallsFirewallsInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeFirewallsFirewallsInboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeFirewallsFirewallsInbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeFirewallsFirewallsInbound | cdktf.IResolvable | undefined) {
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

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4'));
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6'));
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getStringAttribute('ports');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataLinodeFirewallsFirewallsInboundList extends cdktf.ComplexList {
  public internalValue? : DataLinodeFirewallsFirewallsInbound[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeFirewallsFirewallsInboundOutputReference {
    return new DataLinodeFirewallsFirewallsInboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeFirewallsFirewallsOutbound {
}

export function dataLinodeFirewallsFirewallsOutboundToTerraform(struct?: DataLinodeFirewallsFirewallsOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeFirewallsFirewallsOutboundToHclTerraform(struct?: DataLinodeFirewallsFirewallsOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeFirewallsFirewallsOutboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeFirewallsFirewallsOutbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeFirewallsFirewallsOutbound | cdktf.IResolvable | undefined) {
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

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4'));
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6'));
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getStringAttribute('ports');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataLinodeFirewallsFirewallsOutboundList extends cdktf.ComplexList {
  public internalValue? : DataLinodeFirewallsFirewallsOutbound[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeFirewallsFirewallsOutboundOutputReference {
    return new DataLinodeFirewallsFirewallsOutboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeFirewallsFirewalls {
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls#devices DataLinodeFirewalls#devices}
  */
  readonly devices?: DataLinodeFirewallsFirewallsDevices[] | cdktf.IResolvable;
  /**
  * inbound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls#inbound DataLinodeFirewalls#inbound}
  */
  readonly inbound?: DataLinodeFirewallsFirewallsInbound[] | cdktf.IResolvable;
  /**
  * outbound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls#outbound DataLinodeFirewalls#outbound}
  */
  readonly outbound?: DataLinodeFirewallsFirewallsOutbound[] | cdktf.IResolvable;
}

export function dataLinodeFirewallsFirewallsToTerraform(struct?: DataLinodeFirewallsFirewalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(dataLinodeFirewallsFirewallsDevicesToTerraform, true)(struct!.devices),
    inbound: cdktf.listMapper(dataLinodeFirewallsFirewallsInboundToTerraform, true)(struct!.inbound),
    outbound: cdktf.listMapper(dataLinodeFirewallsFirewallsOutboundToTerraform, true)(struct!.outbound),
  }
}


export function dataLinodeFirewallsFirewallsToHclTerraform(struct?: DataLinodeFirewallsFirewalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(dataLinodeFirewallsFirewallsDevicesToHclTerraform, true)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "DataLinodeFirewallsFirewallsDevicesList",
    },
    inbound: {
      value: cdktf.listMapperHcl(dataLinodeFirewallsFirewallsInboundToHclTerraform, true)(struct!.inbound),
      isBlock: true,
      type: "list",
      storageClassType: "DataLinodeFirewallsFirewallsInboundList",
    },
    outbound: {
      value: cdktf.listMapperHcl(dataLinodeFirewallsFirewallsOutboundToHclTerraform, true)(struct!.outbound),
      isBlock: true,
      type: "list",
      storageClassType: "DataLinodeFirewallsFirewallsOutboundList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinodeFirewallsFirewallsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeFirewallsFirewalls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    if (this._inbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound?.internalValue;
    }
    if (this._outbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeFirewallsFirewalls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devices.internalValue = undefined;
      this._inbound.internalValue = undefined;
      this._outbound.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devices.internalValue = value.devices;
      this._inbound.internalValue = value.inbound;
      this._outbound.internalValue = value.outbound;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // inbound_policy - computed: true, optional: false, required: false
  public get inboundPolicy() {
    return this.getStringAttribute('inbound_policy');
  }

  // interfaces - computed: true, optional: false, required: false
  public get interfaces() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('interfaces')));
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // linodes - computed: true, optional: false, required: false
  public get linodes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('linodes')));
  }

  // nodebalancers - computed: true, optional: false, required: false
  public get nodebalancers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('nodebalancers')));
  }

  // outbound_policy - computed: true, optional: false, required: false
  public get outboundPolicy() {
    return this.getStringAttribute('outbound_policy');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new DataLinodeFirewallsFirewallsDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DataLinodeFirewallsFirewallsDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound = new DataLinodeFirewallsFirewallsInboundList(this, "inbound", false);
  public get inbound() {
    return this._inbound;
  }
  public putInbound(value: DataLinodeFirewallsFirewallsInbound[] | cdktf.IResolvable) {
    this._inbound.internalValue = value;
  }
  public resetInbound() {
    this._inbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound.internalValue;
  }

  // outbound - computed: false, optional: true, required: false
  private _outbound = new DataLinodeFirewallsFirewallsOutboundList(this, "outbound", false);
  public get outbound() {
    return this._outbound;
  }
  public putOutbound(value: DataLinodeFirewallsFirewallsOutbound[] | cdktf.IResolvable) {
    this._outbound.internalValue = value;
  }
  public resetOutbound() {
    this._outbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound.internalValue;
  }
}

export class DataLinodeFirewallsFirewallsList extends cdktf.ComplexList {
  public internalValue? : DataLinodeFirewallsFirewalls[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeFirewallsFirewallsOutputReference {
    return new DataLinodeFirewallsFirewallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls linode_firewalls}
*/
export class DataLinodeFirewalls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_firewalls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeFirewalls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeFirewalls to import
  * @param importFromId The id of the existing DataLinodeFirewalls that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeFirewalls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_firewalls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewalls linode_firewalls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeFirewallsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLinodeFirewallsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_firewalls',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._order = config.order;
    this._orderBy = config.orderBy;
    this._filter.internalValue = config.filter;
    this._firewalls.internalValue = config.firewalls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataLinodeFirewallsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataLinodeFirewallsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // firewalls - computed: false, optional: true, required: false
  private _firewalls = new DataLinodeFirewallsFirewallsList(this, "firewalls", false);
  public get firewalls() {
    return this._firewalls;
  }
  public putFirewalls(value: DataLinodeFirewallsFirewalls[] | cdktf.IResolvable) {
    this._firewalls.internalValue = value;
  }
  public resetFirewalls() {
    this._firewalls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallsInput() {
    return this._firewalls.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      order: cdktf.stringToTerraform(this._order),
      order_by: cdktf.stringToTerraform(this._orderBy),
      filter: cdktf.listMapper(dataLinodeFirewallsFilterToTerraform, true)(this._filter.internalValue),
      firewalls: cdktf.listMapper(dataLinodeFirewallsFirewallsToTerraform, true)(this._firewalls.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataLinodeFirewallsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataLinodeFirewallsFilterList",
      },
      firewalls: {
        value: cdktf.listMapperHcl(dataLinodeFirewallsFirewallsToHclTerraform, true)(this._firewalls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLinodeFirewallsFirewallsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
