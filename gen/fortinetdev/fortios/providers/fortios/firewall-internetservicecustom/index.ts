// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallInternetservicecustomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#comment FirewallInternetservicecustom#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#dynamic_sort_subtable FirewallInternetservicecustom#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#get_all_tables FirewallInternetservicecustom#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#id FirewallInternetservicecustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#name FirewallInternetservicecustom#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#reputation FirewallInternetservicecustom#reputation}
  */
  readonly reputation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#vdomparam FirewallInternetservicecustom#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#entry FirewallInternetservicecustom#entry}
  */
  readonly entry?: FirewallInternetservicecustomEntry[] | cdktf.IResolvable;
}
export interface FirewallInternetservicecustomEntryDst {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#name FirewallInternetservicecustom#name}
  */
  readonly name?: string;
}

export function firewallInternetservicecustomEntryDstToTerraform(struct?: FirewallInternetservicecustomEntryDst | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallInternetservicecustomEntryDstToHclTerraform(struct?: FirewallInternetservicecustomEntryDst | cdktf.IResolvable): any {
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

export class FirewallInternetservicecustomEntryDstOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetservicecustomEntryDst | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallInternetservicecustomEntryDst | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}

export class FirewallInternetservicecustomEntryDstList extends cdktf.ComplexList {
  public internalValue? : FirewallInternetservicecustomEntryDst[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetservicecustomEntryDstOutputReference {
    return new FirewallInternetservicecustomEntryDstOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInternetservicecustomEntryDst6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#name FirewallInternetservicecustom#name}
  */
  readonly name?: string;
}

export function firewallInternetservicecustomEntryDst6ToTerraform(struct?: FirewallInternetservicecustomEntryDst6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallInternetservicecustomEntryDst6ToHclTerraform(struct?: FirewallInternetservicecustomEntryDst6 | cdktf.IResolvable): any {
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

export class FirewallInternetservicecustomEntryDst6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetservicecustomEntryDst6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallInternetservicecustomEntryDst6 | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}

export class FirewallInternetservicecustomEntryDst6List extends cdktf.ComplexList {
  public internalValue? : FirewallInternetservicecustomEntryDst6[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetservicecustomEntryDst6OutputReference {
    return new FirewallInternetservicecustomEntryDst6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInternetservicecustomEntryPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#end_port FirewallInternetservicecustom#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#id FirewallInternetservicecustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#start_port FirewallInternetservicecustom#start_port}
  */
  readonly startPort?: number;
}

export function firewallInternetservicecustomEntryPortRangeToTerraform(struct?: FirewallInternetservicecustomEntryPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    id: cdktf.numberToTerraform(struct!.id),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function firewallInternetservicecustomEntryPortRangeToHclTerraform(struct?: FirewallInternetservicecustomEntryPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallInternetservicecustomEntryPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetservicecustomEntryPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInternetservicecustomEntryPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._id = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._id = value.id;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class FirewallInternetservicecustomEntryPortRangeList extends cdktf.ComplexList {
  public internalValue? : FirewallInternetservicecustomEntryPortRange[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetservicecustomEntryPortRangeOutputReference {
    return new FirewallInternetservicecustomEntryPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInternetservicecustomEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#addr_mode FirewallInternetservicecustom#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#id FirewallInternetservicecustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#protocol FirewallInternetservicecustom#protocol}
  */
  readonly protocol?: number;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#dst FirewallInternetservicecustom#dst}
  */
  readonly dst?: FirewallInternetservicecustomEntryDst[] | cdktf.IResolvable;
  /**
  * dst6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#dst6 FirewallInternetservicecustom#dst6}
  */
  readonly dst6?: FirewallInternetservicecustomEntryDst6[] | cdktf.IResolvable;
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#port_range FirewallInternetservicecustom#port_range}
  */
  readonly portRange?: FirewallInternetservicecustomEntryPortRange[] | cdktf.IResolvable;
}

export function firewallInternetservicecustomEntryToTerraform(struct?: FirewallInternetservicecustomEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_mode: cdktf.stringToTerraform(struct!.addrMode),
    id: cdktf.numberToTerraform(struct!.id),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    dst: cdktf.listMapper(firewallInternetservicecustomEntryDstToTerraform, true)(struct!.dst),
    dst6: cdktf.listMapper(firewallInternetservicecustomEntryDst6ToTerraform, true)(struct!.dst6),
    port_range: cdktf.listMapper(firewallInternetservicecustomEntryPortRangeToTerraform, true)(struct!.portRange),
  }
}


export function firewallInternetservicecustomEntryToHclTerraform(struct?: FirewallInternetservicecustomEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_mode: {
      value: cdktf.stringToHclTerraform(struct!.addrMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst: {
      value: cdktf.listMapperHcl(firewallInternetservicecustomEntryDstToHclTerraform, true)(struct!.dst),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallInternetservicecustomEntryDstList",
    },
    dst6: {
      value: cdktf.listMapperHcl(firewallInternetservicecustomEntryDst6ToHclTerraform, true)(struct!.dst6),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallInternetservicecustomEntryDst6List",
    },
    port_range: {
      value: cdktf.listMapperHcl(firewallInternetservicecustomEntryPortRangeToHclTerraform, true)(struct!.portRange),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallInternetservicecustomEntryPortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallInternetservicecustomEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetservicecustomEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrMode = this._addrMode;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._dst?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst?.internalValue;
    }
    if (this._dst6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst6 = this._dst6?.internalValue;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInternetservicecustomEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrMode = undefined;
      this._id = undefined;
      this._protocol = undefined;
      this._dst.internalValue = undefined;
      this._dst6.internalValue = undefined;
      this._portRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrMode = value.addrMode;
      this._id = value.id;
      this._protocol = value.protocol;
      this._dst.internalValue = value.dst;
      this._dst6.internalValue = value.dst6;
      this._portRange.internalValue = value.portRange;
    }
  }

  // addr_mode - computed: true, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // dst - computed: false, optional: true, required: false
  private _dst = new FirewallInternetservicecustomEntryDstList(this, "dst", true);
  public get dst() {
    return this._dst;
  }
  public putDst(value: FirewallInternetservicecustomEntryDst[] | cdktf.IResolvable) {
    this._dst.internalValue = value;
  }
  public resetDst() {
    this._dst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst.internalValue;
  }

  // dst6 - computed: false, optional: true, required: false
  private _dst6 = new FirewallInternetservicecustomEntryDst6List(this, "dst6", true);
  public get dst6() {
    return this._dst6;
  }
  public putDst6(value: FirewallInternetservicecustomEntryDst6[] | cdktf.IResolvable) {
    this._dst6.internalValue = value;
  }
  public resetDst6() {
    this._dst6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dst6Input() {
    return this._dst6.internalValue;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new FirewallInternetservicecustomEntryPortRangeList(this, "port_range", false);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: FirewallInternetservicecustomEntryPortRange[] | cdktf.IResolvable) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}

export class FirewallInternetservicecustomEntryList extends cdktf.ComplexList {
  public internalValue? : FirewallInternetservicecustomEntry[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetservicecustomEntryOutputReference {
    return new FirewallInternetservicecustomEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom fortios_firewall_internetservicecustom}
*/
export class FirewallInternetservicecustom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_internetservicecustom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallInternetservicecustom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallInternetservicecustom to import
  * @param importFromId The id of the existing FirewallInternetservicecustom that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallInternetservicecustom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_internetservicecustom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservicecustom fortios_firewall_internetservicecustom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallInternetservicecustomConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallInternetservicecustomConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_internetservicecustom',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._reputation = config.reputation;
    this._vdomparam = config.vdomparam;
    this._entry.internalValue = config.entry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // name - computed: false, optional: true, required: false
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

  // reputation - computed: true, optional: true, required: false
  private _reputation?: number; 
  public get reputation() {
    return this.getNumberAttribute('reputation');
  }
  public set reputation(value: number) {
    this._reputation = value;
  }
  public resetReputation() {
    this._reputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationInput() {
    return this._reputation;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new FirewallInternetservicecustomEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: FirewallInternetservicecustomEntry[] | cdktf.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      reputation: cdktf.numberToTerraform(this._reputation),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      entry: cdktf.listMapper(firewallInternetservicecustomEntryToTerraform, true)(this._entry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      reputation: {
        value: cdktf.numberToHclTerraform(this._reputation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry: {
        value: cdktf.listMapperHcl(firewallInternetservicecustomEntryToHclTerraform, true)(this._entry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallInternetservicecustomEntryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
