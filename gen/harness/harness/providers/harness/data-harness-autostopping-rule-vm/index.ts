// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessAutostoppingRuleVmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the cloud connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#cloud_connector_id DataHarnessAutostoppingRuleVm#cloud_connector_id}
  */
  readonly cloudConnectorId: string;
  /**
  * Custom URLs used to access the instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#custom_domains DataHarnessAutostoppingRuleVm#custom_domains}
  */
  readonly customDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#id DataHarnessAutostoppingRuleVm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Idle time in minutes. This is the time that the AutoStopping rule waits before stopping the idle instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#idle_time_mins DataHarnessAutostoppingRuleVm#idle_time_mins}
  */
  readonly idleTimeMins?: number;
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#name DataHarnessAutostoppingRuleVm#name}
  */
  readonly name: string;
  /**
  * Boolean that indicates whether the selected instances should be converted to spot vm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#use_spot DataHarnessAutostoppingRuleVm#use_spot}
  */
  readonly useSpot?: boolean | cdktf.IResolvable;
  /**
  * depends block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#depends DataHarnessAutostoppingRuleVm#depends}
  */
  readonly depends?: DataHarnessAutostoppingRuleVmDepends[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#filter DataHarnessAutostoppingRuleVm#filter}
  */
  readonly filter: DataHarnessAutostoppingRuleVmFilter;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#http DataHarnessAutostoppingRuleVm#http}
  */
  readonly http?: DataHarnessAutostoppingRuleVmHttp[] | cdktf.IResolvable;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#tcp DataHarnessAutostoppingRuleVm#tcp}
  */
  readonly tcp?: DataHarnessAutostoppingRuleVmTcp[] | cdktf.IResolvable;
}
export interface DataHarnessAutostoppingRuleVmDepends {
  /**
  * Number of seconds the rule should wait after warming up the dependent rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#delay_in_sec DataHarnessAutostoppingRuleVm#delay_in_sec}
  */
  readonly delayInSec?: number;
  /**
  * Rule id of the dependent rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#rule_id DataHarnessAutostoppingRuleVm#rule_id}
  */
  readonly ruleId: number;
}

export function dataHarnessAutostoppingRuleVmDependsToTerraform(struct?: DataHarnessAutostoppingRuleVmDepends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_in_sec: cdktf.numberToTerraform(struct!.delayInSec),
    rule_id: cdktf.numberToTerraform(struct!.ruleId),
  }
}


export function dataHarnessAutostoppingRuleVmDependsToHclTerraform(struct?: DataHarnessAutostoppingRuleVmDepends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.delayInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_id: {
      value: cdktf.numberToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleVmDependsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleVmDepends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayInSec = this._delayInSec;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleVmDepends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayInSec = undefined;
      this._ruleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayInSec = value.delayInSec;
      this._ruleId = value.ruleId;
    }
  }

  // delay_in_sec - computed: false, optional: true, required: false
  private _delayInSec?: number; 
  public get delayInSec() {
    return this.getNumberAttribute('delay_in_sec');
  }
  public set delayInSec(value: number) {
    this._delayInSec = value;
  }
  public resetDelayInSec() {
    this._delayInSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInSecInput() {
    return this._delayInSec;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: number; 
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
  public set ruleId(value: number) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }
}

export class DataHarnessAutostoppingRuleVmDependsList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleVmDepends[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleVmDependsOutputReference {
    return new DataHarnessAutostoppingRuleVmDependsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessAutostoppingRuleVmFilterTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#key DataHarnessAutostoppingRuleVm#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#value DataHarnessAutostoppingRuleVm#value}
  */
  readonly value: string;
}

export function dataHarnessAutostoppingRuleVmFilterTagsToTerraform(struct?: DataHarnessAutostoppingRuleVmFilterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataHarnessAutostoppingRuleVmFilterTagsToHclTerraform(struct?: DataHarnessAutostoppingRuleVmFilterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleVmFilterTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleVmFilterTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleVmFilterTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataHarnessAutostoppingRuleVmFilterTagsList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleVmFilterTags[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleVmFilterTagsOutputReference {
    return new DataHarnessAutostoppingRuleVmFilterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessAutostoppingRuleVmFilter {
  /**
  * Regions of instances that needs to be managed using the AutoStopping rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#regions DataHarnessAutostoppingRuleVm#regions}
  */
  readonly regions?: string[];
  /**
  * Ids of instances that needs to be managed using the AutoStopping rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#vm_ids DataHarnessAutostoppingRuleVm#vm_ids}
  */
  readonly vmIds: string[];
  /**
  * Zones of instances that needs to be managed using the AutoStopping rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#zones DataHarnessAutostoppingRuleVm#zones}
  */
  readonly zones?: string[];
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#tags DataHarnessAutostoppingRuleVm#tags}
  */
  readonly tags?: DataHarnessAutostoppingRuleVmFilterTags[] | cdktf.IResolvable;
}

export function dataHarnessAutostoppingRuleVmFilterToTerraform(struct?: DataHarnessAutostoppingRuleVmFilterOutputReference | DataHarnessAutostoppingRuleVmFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    vm_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vmIds),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
    tags: cdktf.listMapper(dataHarnessAutostoppingRuleVmFilterTagsToTerraform, true)(struct!.tags),
  }
}


export function dataHarnessAutostoppingRuleVmFilterToHclTerraform(struct?: DataHarnessAutostoppingRuleVmFilterOutputReference | DataHarnessAutostoppingRuleVmFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vm_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vmIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleVmFilterTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessAutostoppingRuleVmFilterTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleVmFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHarnessAutostoppingRuleVmFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._vmIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmIds = this._vmIds;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleVmFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regions = undefined;
      this._vmIds = undefined;
      this._zones = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regions = value.regions;
      this._vmIds = value.vmIds;
      this._zones = value.zones;
      this._tags.internalValue = value.tags;
    }
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // vm_ids - computed: false, optional: false, required: true
  private _vmIds?: string[]; 
  public get vmIds() {
    return this.getListAttribute('vm_ids');
  }
  public set vmIds(value: string[]) {
    this._vmIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdsInput() {
    return this._vmIds;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataHarnessAutostoppingRuleVmFilterTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataHarnessAutostoppingRuleVmFilterTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface DataHarnessAutostoppingRuleVmHttpHealth {
  /**
  * API path to use for health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#path DataHarnessAutostoppingRuleVm#path}
  */
  readonly path?: string;
  /**
  * Health check port on the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#port DataHarnessAutostoppingRuleVm#port}
  */
  readonly port: number;
  /**
  * Protocol can be http or https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#protocol DataHarnessAutostoppingRuleVm#protocol}
  */
  readonly protocol: string;
  /**
  * Lower limit for acceptable status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#status_code_from DataHarnessAutostoppingRuleVm#status_code_from}
  */
  readonly statusCodeFrom?: number;
  /**
  * Upper limit for acceptable status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#status_code_to DataHarnessAutostoppingRuleVm#status_code_to}
  */
  readonly statusCodeTo?: number;
  /**
  * Health check timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#timeout DataHarnessAutostoppingRuleVm#timeout}
  */
  readonly timeout?: number;
}

export function dataHarnessAutostoppingRuleVmHttpHealthToTerraform(struct?: DataHarnessAutostoppingRuleVmHttpHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code_from: cdktf.numberToTerraform(struct!.statusCodeFrom),
    status_code_to: cdktf.numberToTerraform(struct!.statusCodeTo),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function dataHarnessAutostoppingRuleVmHttpHealthToHclTerraform(struct?: DataHarnessAutostoppingRuleVmHttpHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code_from: {
      value: cdktf.numberToHclTerraform(struct!.statusCodeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_code_to: {
      value: cdktf.numberToHclTerraform(struct!.statusCodeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleVmHttpHealthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleVmHttpHealth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCodeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeFrom = this._statusCodeFrom;
    }
    if (this._statusCodeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeTo = this._statusCodeTo;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleVmHttpHealth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCodeFrom = undefined;
      this._statusCodeTo = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCodeFrom = value.statusCodeFrom;
      this._statusCodeTo = value.statusCodeTo;
      this._timeout = value.timeout;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // status_code_from - computed: false, optional: true, required: false
  private _statusCodeFrom?: number; 
  public get statusCodeFrom() {
    return this.getNumberAttribute('status_code_from');
  }
  public set statusCodeFrom(value: number) {
    this._statusCodeFrom = value;
  }
  public resetStatusCodeFrom() {
    this._statusCodeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeFromInput() {
    return this._statusCodeFrom;
  }

  // status_code_to - computed: false, optional: true, required: false
  private _statusCodeTo?: number; 
  public get statusCodeTo() {
    return this.getNumberAttribute('status_code_to');
  }
  public set statusCodeTo(value: number) {
    this._statusCodeTo = value;
  }
  public resetStatusCodeTo() {
    this._statusCodeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeToInput() {
    return this._statusCodeTo;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class DataHarnessAutostoppingRuleVmHttpHealthList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleVmHttpHealth[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleVmHttpHealthOutputReference {
    return new DataHarnessAutostoppingRuleVmHttpHealthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessAutostoppingRuleVmHttpRouting {
  /**
  * Organization Identifier for the Entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#action DataHarnessAutostoppingRuleVm#action}
  */
  readonly action?: string;
  /**
  * Port on the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#source_port DataHarnessAutostoppingRuleVm#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Source protocol of the proxy can be http or https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#source_protocol DataHarnessAutostoppingRuleVm#source_protocol}
  */
  readonly sourceProtocol: string;
  /**
  * Port on the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#target_port DataHarnessAutostoppingRuleVm#target_port}
  */
  readonly targetPort?: number;
  /**
  * Target protocol of the instance can be http or https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#target_protocol DataHarnessAutostoppingRuleVm#target_protocol}
  */
  readonly targetProtocol: string;
}

export function dataHarnessAutostoppingRuleVmHttpRoutingToTerraform(struct?: DataHarnessAutostoppingRuleVmHttpRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    source_protocol: cdktf.stringToTerraform(struct!.sourceProtocol),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
    target_protocol: cdktf.stringToTerraform(struct!.targetProtocol),
  }
}


export function dataHarnessAutostoppingRuleVmHttpRoutingToHclTerraform(struct?: DataHarnessAutostoppingRuleVmHttpRouting | cdktf.IResolvable): any {
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
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_protocol: {
      value: cdktf.stringToHclTerraform(struct!.sourceProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_protocol: {
      value: cdktf.stringToHclTerraform(struct!.targetProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleVmHttpRoutingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleVmHttpRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourceProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceProtocol = this._sourceProtocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._targetProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProtocol = this._targetProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleVmHttpRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._sourcePort = undefined;
      this._sourceProtocol = undefined;
      this._targetPort = undefined;
      this._targetProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._sourcePort = value.sourcePort;
      this._sourceProtocol = value.sourceProtocol;
      this._targetPort = value.targetPort;
      this._targetProtocol = value.targetProtocol;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_protocol - computed: false, optional: false, required: true
  private _sourceProtocol?: string; 
  public get sourceProtocol() {
    return this.getStringAttribute('source_protocol');
  }
  public set sourceProtocol(value: string) {
    this._sourceProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceProtocolInput() {
    return this._sourceProtocol;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // target_protocol - computed: false, optional: false, required: true
  private _targetProtocol?: string; 
  public get targetProtocol() {
    return this.getStringAttribute('target_protocol');
  }
  public set targetProtocol(value: string) {
    this._targetProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProtocolInput() {
    return this._targetProtocol;
  }
}

export class DataHarnessAutostoppingRuleVmHttpRoutingList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleVmHttpRouting[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleVmHttpRoutingOutputReference {
    return new DataHarnessAutostoppingRuleVmHttpRoutingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessAutostoppingRuleVmHttp {
  /**
  * Id of the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#proxy_id DataHarnessAutostoppingRuleVm#proxy_id}
  */
  readonly proxyId: string;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#health DataHarnessAutostoppingRuleVm#health}
  */
  readonly health?: DataHarnessAutostoppingRuleVmHttpHealth[] | cdktf.IResolvable;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#routing DataHarnessAutostoppingRuleVm#routing}
  */
  readonly routing?: DataHarnessAutostoppingRuleVmHttpRouting[] | cdktf.IResolvable;
}

export function dataHarnessAutostoppingRuleVmHttpToTerraform(struct?: DataHarnessAutostoppingRuleVmHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_id: cdktf.stringToTerraform(struct!.proxyId),
    health: cdktf.listMapper(dataHarnessAutostoppingRuleVmHttpHealthToTerraform, true)(struct!.health),
    routing: cdktf.listMapper(dataHarnessAutostoppingRuleVmHttpRoutingToTerraform, true)(struct!.routing),
  }
}


export function dataHarnessAutostoppingRuleVmHttpToHclTerraform(struct?: DataHarnessAutostoppingRuleVmHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_id: {
      value: cdktf.stringToHclTerraform(struct!.proxyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health: {
      value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleVmHttpHealthToHclTerraform, true)(struct!.health),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessAutostoppingRuleVmHttpHealthList",
    },
    routing: {
      value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleVmHttpRoutingToHclTerraform, true)(struct!.routing),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessAutostoppingRuleVmHttpRoutingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleVmHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleVmHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyId = this._proxyId;
    }
    if (this._health?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health?.internalValue;
    }
    if (this._routing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleVmHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxyId = undefined;
      this._health.internalValue = undefined;
      this._routing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxyId = value.proxyId;
      this._health.internalValue = value.health;
      this._routing.internalValue = value.routing;
    }
  }

  // proxy_id - computed: false, optional: false, required: true
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataHarnessAutostoppingRuleVmHttpHealthList(this, "health", false);
  public get health() {
    return this._health;
  }
  public putHealth(value: DataHarnessAutostoppingRuleVmHttpHealth[] | cdktf.IResolvable) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new DataHarnessAutostoppingRuleVmHttpRoutingList(this, "routing", false);
  public get routing() {
    return this._routing;
  }
  public putRouting(value: DataHarnessAutostoppingRuleVmHttpRouting[] | cdktf.IResolvable) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }
}

export class DataHarnessAutostoppingRuleVmHttpList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleVmHttp[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleVmHttpOutputReference {
    return new DataHarnessAutostoppingRuleVmHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessAutostoppingRuleVmTcpForwardRule {
  /**
  * Port to listen on the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#connect_on DataHarnessAutostoppingRuleVm#connect_on}
  */
  readonly connectOn?: number;
  /**
  * Port to listen on the vm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#port DataHarnessAutostoppingRuleVm#port}
  */
  readonly port: number;
}

export function dataHarnessAutostoppingRuleVmTcpForwardRuleToTerraform(struct?: DataHarnessAutostoppingRuleVmTcpForwardRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_on: cdktf.numberToTerraform(struct!.connectOn),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataHarnessAutostoppingRuleVmTcpForwardRuleToHclTerraform(struct?: DataHarnessAutostoppingRuleVmTcpForwardRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_on: {
      value: cdktf.numberToHclTerraform(struct!.connectOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleVmTcpForwardRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleVmTcpForwardRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectOn = this._connectOn;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleVmTcpForwardRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectOn = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectOn = value.connectOn;
      this._port = value.port;
    }
  }

  // connect_on - computed: false, optional: true, required: false
  private _connectOn?: number; 
  public get connectOn() {
    return this.getNumberAttribute('connect_on');
  }
  public set connectOn(value: number) {
    this._connectOn = value;
  }
  public resetConnectOn() {
    this._connectOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectOnInput() {
    return this._connectOn;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class DataHarnessAutostoppingRuleVmTcpForwardRuleList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleVmTcpForwardRule[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleVmTcpForwardRuleOutputReference {
    return new DataHarnessAutostoppingRuleVmTcpForwardRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessAutostoppingRuleVmTcpRdp {
  /**
  * Port to listen on the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#connect_on DataHarnessAutostoppingRuleVm#connect_on}
  */
  readonly connectOn?: number;
  /**
  * Port to listen on the vm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#port DataHarnessAutostoppingRuleVm#port}
  */
  readonly port?: number;
}

export function dataHarnessAutostoppingRuleVmTcpRdpToTerraform(struct?: DataHarnessAutostoppingRuleVmTcpRdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_on: cdktf.numberToTerraform(struct!.connectOn),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataHarnessAutostoppingRuleVmTcpRdpToHclTerraform(struct?: DataHarnessAutostoppingRuleVmTcpRdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_on: {
      value: cdktf.numberToHclTerraform(struct!.connectOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleVmTcpRdpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleVmTcpRdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectOn = this._connectOn;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleVmTcpRdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectOn = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectOn = value.connectOn;
      this._port = value.port;
    }
  }

  // connect_on - computed: false, optional: true, required: false
  private _connectOn?: number; 
  public get connectOn() {
    return this.getNumberAttribute('connect_on');
  }
  public set connectOn(value: number) {
    this._connectOn = value;
  }
  public resetConnectOn() {
    this._connectOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectOnInput() {
    return this._connectOn;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class DataHarnessAutostoppingRuleVmTcpRdpList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleVmTcpRdp[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleVmTcpRdpOutputReference {
    return new DataHarnessAutostoppingRuleVmTcpRdpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessAutostoppingRuleVmTcpSsh {
  /**
  * Port to listen on the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#connect_on DataHarnessAutostoppingRuleVm#connect_on}
  */
  readonly connectOn?: number;
  /**
  * Port to listen on the vm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#port DataHarnessAutostoppingRuleVm#port}
  */
  readonly port?: number;
}

export function dataHarnessAutostoppingRuleVmTcpSshToTerraform(struct?: DataHarnessAutostoppingRuleVmTcpSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_on: cdktf.numberToTerraform(struct!.connectOn),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataHarnessAutostoppingRuleVmTcpSshToHclTerraform(struct?: DataHarnessAutostoppingRuleVmTcpSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_on: {
      value: cdktf.numberToHclTerraform(struct!.connectOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleVmTcpSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleVmTcpSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectOn = this._connectOn;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleVmTcpSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectOn = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectOn = value.connectOn;
      this._port = value.port;
    }
  }

  // connect_on - computed: false, optional: true, required: false
  private _connectOn?: number; 
  public get connectOn() {
    return this.getNumberAttribute('connect_on');
  }
  public set connectOn(value: number) {
    this._connectOn = value;
  }
  public resetConnectOn() {
    this._connectOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectOnInput() {
    return this._connectOn;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class DataHarnessAutostoppingRuleVmTcpSshList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleVmTcpSsh[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleVmTcpSshOutputReference {
    return new DataHarnessAutostoppingRuleVmTcpSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessAutostoppingRuleVmTcp {
  /**
  * Id of the Proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#proxy_id DataHarnessAutostoppingRuleVm#proxy_id}
  */
  readonly proxyId: string;
  /**
  * forward_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#forward_rule DataHarnessAutostoppingRuleVm#forward_rule}
  */
  readonly forwardRule?: DataHarnessAutostoppingRuleVmTcpForwardRule[] | cdktf.IResolvable;
  /**
  * rdp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#rdp DataHarnessAutostoppingRuleVm#rdp}
  */
  readonly rdp?: DataHarnessAutostoppingRuleVmTcpRdp[] | cdktf.IResolvable;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#ssh DataHarnessAutostoppingRuleVm#ssh}
  */
  readonly ssh?: DataHarnessAutostoppingRuleVmTcpSsh[] | cdktf.IResolvable;
}

export function dataHarnessAutostoppingRuleVmTcpToTerraform(struct?: DataHarnessAutostoppingRuleVmTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_id: cdktf.stringToTerraform(struct!.proxyId),
    forward_rule: cdktf.listMapper(dataHarnessAutostoppingRuleVmTcpForwardRuleToTerraform, true)(struct!.forwardRule),
    rdp: cdktf.listMapper(dataHarnessAutostoppingRuleVmTcpRdpToTerraform, true)(struct!.rdp),
    ssh: cdktf.listMapper(dataHarnessAutostoppingRuleVmTcpSshToTerraform, true)(struct!.ssh),
  }
}


export function dataHarnessAutostoppingRuleVmTcpToHclTerraform(struct?: DataHarnessAutostoppingRuleVmTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_id: {
      value: cdktf.stringToHclTerraform(struct!.proxyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_rule: {
      value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleVmTcpForwardRuleToHclTerraform, true)(struct!.forwardRule),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessAutostoppingRuleVmTcpForwardRuleList",
    },
    rdp: {
      value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleVmTcpRdpToHclTerraform, true)(struct!.rdp),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessAutostoppingRuleVmTcpRdpList",
    },
    ssh: {
      value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleVmTcpSshToHclTerraform, true)(struct!.ssh),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessAutostoppingRuleVmTcpSshList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleVmTcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleVmTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyId = this._proxyId;
    }
    if (this._forwardRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardRule = this._forwardRule?.internalValue;
    }
    if (this._rdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdp = this._rdp?.internalValue;
    }
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleVmTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxyId = undefined;
      this._forwardRule.internalValue = undefined;
      this._rdp.internalValue = undefined;
      this._ssh.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxyId = value.proxyId;
      this._forwardRule.internalValue = value.forwardRule;
      this._rdp.internalValue = value.rdp;
      this._ssh.internalValue = value.ssh;
    }
  }

  // proxy_id - computed: false, optional: false, required: true
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }

  // forward_rule - computed: false, optional: true, required: false
  private _forwardRule = new DataHarnessAutostoppingRuleVmTcpForwardRuleList(this, "forward_rule", false);
  public get forwardRule() {
    return this._forwardRule;
  }
  public putForwardRule(value: DataHarnessAutostoppingRuleVmTcpForwardRule[] | cdktf.IResolvable) {
    this._forwardRule.internalValue = value;
  }
  public resetForwardRule() {
    this._forwardRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardRuleInput() {
    return this._forwardRule.internalValue;
  }

  // rdp - computed: false, optional: true, required: false
  private _rdp = new DataHarnessAutostoppingRuleVmTcpRdpList(this, "rdp", false);
  public get rdp() {
    return this._rdp;
  }
  public putRdp(value: DataHarnessAutostoppingRuleVmTcpRdp[] | cdktf.IResolvable) {
    this._rdp.internalValue = value;
  }
  public resetRdp() {
    this._rdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpInput() {
    return this._rdp.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new DataHarnessAutostoppingRuleVmTcpSshList(this, "ssh", false);
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: DataHarnessAutostoppingRuleVmTcpSsh[] | cdktf.IResolvable) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }
}

export class DataHarnessAutostoppingRuleVmTcpList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleVmTcp[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleVmTcpOutputReference {
    return new DataHarnessAutostoppingRuleVmTcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm harness_autostopping_rule_vm}
*/
export class DataHarnessAutostoppingRuleVm extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_autostopping_rule_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessAutostoppingRuleVm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessAutostoppingRuleVm to import
  * @param importFromId The id of the existing DataHarnessAutostoppingRuleVm that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessAutostoppingRuleVm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_autostopping_rule_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_rule_vm harness_autostopping_rule_vm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessAutostoppingRuleVmConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessAutostoppingRuleVmConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_autostopping_rule_vm',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudConnectorId = config.cloudConnectorId;
    this._customDomains = config.customDomains;
    this._id = config.id;
    this._idleTimeMins = config.idleTimeMins;
    this._name = config.name;
    this._useSpot = config.useSpot;
    this._depends.internalValue = config.depends;
    this._filter.internalValue = config.filter;
    this._http.internalValue = config.http;
    this._tcp.internalValue = config.tcp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_connector_id - computed: false, optional: false, required: true
  private _cloudConnectorId?: string; 
  public get cloudConnectorId() {
    return this.getStringAttribute('cloud_connector_id');
  }
  public set cloudConnectorId(value: string) {
    this._cloudConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConnectorIdInput() {
    return this._cloudConnectorId;
  }

  // custom_domains - computed: false, optional: true, required: false
  private _customDomains?: string[]; 
  public get customDomains() {
    return this.getListAttribute('custom_domains');
  }
  public set customDomains(value: string[]) {
    this._customDomains = value;
  }
  public resetCustomDomains() {
    this._customDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainsInput() {
    return this._customDomains;
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getNumberAttribute('identifier');
  }

  // idle_time_mins - computed: false, optional: true, required: false
  private _idleTimeMins?: number; 
  public get idleTimeMins() {
    return this.getNumberAttribute('idle_time_mins');
  }
  public set idleTimeMins(value: number) {
    this._idleTimeMins = value;
  }
  public resetIdleTimeMins() {
    this._idleTimeMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeMinsInput() {
    return this._idleTimeMins;
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

  // use_spot - computed: false, optional: true, required: false
  private _useSpot?: boolean | cdktf.IResolvable; 
  public get useSpot() {
    return this.getBooleanAttribute('use_spot');
  }
  public set useSpot(value: boolean | cdktf.IResolvable) {
    this._useSpot = value;
  }
  public resetUseSpot() {
    this._useSpot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSpotInput() {
    return this._useSpot;
  }

  // depends - computed: false, optional: true, required: false
  private _depends = new DataHarnessAutostoppingRuleVmDependsList(this, "depends", false);
  public get depends() {
    return this._depends;
  }
  public putDepends(value: DataHarnessAutostoppingRuleVmDepends[] | cdktf.IResolvable) {
    this._depends.internalValue = value;
  }
  public resetDepends() {
    this._depends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsInput() {
    return this._depends.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new DataHarnessAutostoppingRuleVmFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataHarnessAutostoppingRuleVmFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataHarnessAutostoppingRuleVmHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: DataHarnessAutostoppingRuleVmHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataHarnessAutostoppingRuleVmTcpList(this, "tcp", false);
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataHarnessAutostoppingRuleVmTcp[] | cdktf.IResolvable) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_connector_id: cdktf.stringToTerraform(this._cloudConnectorId),
      custom_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customDomains),
      id: cdktf.stringToTerraform(this._id),
      idle_time_mins: cdktf.numberToTerraform(this._idleTimeMins),
      name: cdktf.stringToTerraform(this._name),
      use_spot: cdktf.booleanToTerraform(this._useSpot),
      depends: cdktf.listMapper(dataHarnessAutostoppingRuleVmDependsToTerraform, true)(this._depends.internalValue),
      filter: dataHarnessAutostoppingRuleVmFilterToTerraform(this._filter.internalValue),
      http: cdktf.listMapper(dataHarnessAutostoppingRuleVmHttpToTerraform, true)(this._http.internalValue),
      tcp: cdktf.listMapper(dataHarnessAutostoppingRuleVmTcpToTerraform, true)(this._tcp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_connector_id: {
        value: cdktf.stringToHclTerraform(this._cloudConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_time_mins: {
        value: cdktf.numberToHclTerraform(this._idleTimeMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_spot: {
        value: cdktf.booleanToHclTerraform(this._useSpot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      depends: {
        value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleVmDependsToHclTerraform, true)(this._depends.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessAutostoppingRuleVmDependsList",
      },
      filter: {
        value: dataHarnessAutostoppingRuleVmFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessAutostoppingRuleVmFilterList",
      },
      http: {
        value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleVmHttpToHclTerraform, true)(this._http.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessAutostoppingRuleVmHttpList",
      },
      tcp: {
        value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleVmTcpToHclTerraform, true)(this._tcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessAutostoppingRuleVmTcpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
