// https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsFleetUncorrelatedPackageApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications#application_id DataOciJmsFleetUncorrelatedPackageApplications#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications#fleet_id DataOciJmsFleetUncorrelatedPackageApplications#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications#id DataOciJmsFleetUncorrelatedPackageApplications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications#managed_instance_id DataOciJmsFleetUncorrelatedPackageApplications#managed_instance_id}
  */
  readonly managedInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications#package_name DataOciJmsFleetUncorrelatedPackageApplications#package_name}
  */
  readonly packageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications#time_end DataOciJmsFleetUncorrelatedPackageApplications#time_end}
  */
  readonly timeEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications#time_start DataOciJmsFleetUncorrelatedPackageApplications#time_start}
  */
  readonly timeStart?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications#filter DataOciJmsFleetUncorrelatedPackageApplications#filter}
  */
  readonly filter?: DataOciJmsFleetUncorrelatedPackageApplicationsFilter[] | cdktf.IResolvable;
}
export interface DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionItems {
}

export function dataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionItemsToTerraform(struct?: DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionItemsToHclTerraform(struct?: DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_key - computed: true, optional: false, required: false
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // last_detected_dynamically - computed: true, optional: false, required: false
  public get lastDetectedDynamically() {
    return this.getStringAttribute('last_detected_dynamically');
  }

  // managed_instance_count - computed: true, optional: false, required: false
  public get managedInstanceCount() {
    return this.getNumberAttribute('managed_instance_count');
  }
}

export class DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionItemsOutputReference {
    return new DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollection {
}

export function dataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionToTerraform(struct?: DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionToHclTerraform(struct?: DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionOutputReference {
    return new DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsFleetUncorrelatedPackageApplicationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications#name DataOciJmsFleetUncorrelatedPackageApplications#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications#regex DataOciJmsFleetUncorrelatedPackageApplications#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications#values DataOciJmsFleetUncorrelatedPackageApplications#values}
  */
  readonly values: string[];
}

export function dataOciJmsFleetUncorrelatedPackageApplicationsFilterToTerraform(struct?: DataOciJmsFleetUncorrelatedPackageApplicationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciJmsFleetUncorrelatedPackageApplicationsFilterToHclTerraform(struct?: DataOciJmsFleetUncorrelatedPackageApplicationsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciJmsFleetUncorrelatedPackageApplicationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetUncorrelatedPackageApplicationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetUncorrelatedPackageApplicationsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciJmsFleetUncorrelatedPackageApplicationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciJmsFleetUncorrelatedPackageApplicationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciJmsFleetUncorrelatedPackageApplicationsFilterOutputReference {
    return new DataOciJmsFleetUncorrelatedPackageApplicationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications oci_jms_fleet_uncorrelated_package_applications}
*/
export class DataOciJmsFleetUncorrelatedPackageApplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_uncorrelated_package_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsFleetUncorrelatedPackageApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsFleetUncorrelatedPackageApplications to import
  * @param importFromId The id of the existing DataOciJmsFleetUncorrelatedPackageApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsFleetUncorrelatedPackageApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_uncorrelated_package_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.23.0/docs/data-sources/jms_fleet_uncorrelated_package_applications oci_jms_fleet_uncorrelated_package_applications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsFleetUncorrelatedPackageApplicationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsFleetUncorrelatedPackageApplicationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_uncorrelated_package_applications',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._fleetId = config.fleetId;
    this._id = config.id;
    this._managedInstanceId = config.managedInstanceId;
    this._packageName = config.packageName;
    this._timeEnd = config.timeEnd;
    this._timeStart = config.timeStart;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
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

  // managed_instance_id - computed: false, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // package_name - computed: false, optional: false, required: true
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // time_end - computed: false, optional: true, required: false
  private _timeEnd?: string; 
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }
  public set timeEnd(value: string) {
    this._timeEnd = value;
  }
  public resetTimeEnd() {
    this._timeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEndInput() {
    return this._timeEnd;
  }

  // time_start - computed: false, optional: true, required: false
  private _timeStart?: string; 
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
  public set timeStart(value: string) {
    this._timeStart = value;
  }
  public resetTimeStart() {
    this._timeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartInput() {
    return this._timeStart;
  }

  // uncorrelated_package_application_usage_collection - computed: true, optional: false, required: false
  private _uncorrelatedPackageApplicationUsageCollection = new DataOciJmsFleetUncorrelatedPackageApplicationsUncorrelatedPackageApplicationUsageCollectionList(this, "uncorrelated_package_application_usage_collection", false);
  public get uncorrelatedPackageApplicationUsageCollection() {
    return this._uncorrelatedPackageApplicationUsageCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciJmsFleetUncorrelatedPackageApplicationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciJmsFleetUncorrelatedPackageApplicationsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      package_name: cdktf.stringToTerraform(this._packageName),
      time_end: cdktf.stringToTerraform(this._timeEnd),
      time_start: cdktf.stringToTerraform(this._timeStart),
      filter: cdktf.listMapper(dataOciJmsFleetUncorrelatedPackageApplicationsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
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
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_name: {
        value: cdktf.stringToHclTerraform(this._packageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_end: {
        value: cdktf.stringToHclTerraform(this._timeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_start: {
        value: cdktf.stringToHclTerraform(this._timeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciJmsFleetUncorrelatedPackageApplicationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciJmsFleetUncorrelatedPackageApplicationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
