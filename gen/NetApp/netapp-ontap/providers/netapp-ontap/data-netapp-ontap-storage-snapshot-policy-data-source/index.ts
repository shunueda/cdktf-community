// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_snapshot_policy_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapStorageSnapshotPolicyDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_snapshot_policy_data_source#cx_profile_name DataNetappOntapStorageSnapshotPolicyDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * SnapshotPolicy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_snapshot_policy_data_source#name DataNetappOntapStorageSnapshotPolicyDataSource#name}
  */
  readonly name: string;
}
export interface DataNetappOntapStorageSnapshotPolicyDataSourceCopiesSchedule {
}

export function dataNetappOntapStorageSnapshotPolicyDataSourceCopiesScheduleToTerraform(struct?: DataNetappOntapStorageSnapshotPolicyDataSourceCopiesSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageSnapshotPolicyDataSourceCopiesScheduleToHclTerraform(struct?: DataNetappOntapStorageSnapshotPolicyDataSourceCopiesSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageSnapshotPolicyDataSourceCopiesScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageSnapshotPolicyDataSourceCopiesSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageSnapshotPolicyDataSourceCopiesSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataNetappOntapStorageSnapshotPolicyDataSourceCopies {
  /**
  * Schedule at which Snapshot copies are captured on the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_snapshot_policy_data_source#schedule DataNetappOntapStorageSnapshotPolicyDataSource#schedule}
  */
  readonly schedule: DataNetappOntapStorageSnapshotPolicyDataSourceCopiesSchedule;
}

export function dataNetappOntapStorageSnapshotPolicyDataSourceCopiesToTerraform(struct?: DataNetappOntapStorageSnapshotPolicyDataSourceCopies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: dataNetappOntapStorageSnapshotPolicyDataSourceCopiesScheduleToTerraform(struct!.schedule),
  }
}


export function dataNetappOntapStorageSnapshotPolicyDataSourceCopiesToHclTerraform(struct?: DataNetappOntapStorageSnapshotPolicyDataSourceCopies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: dataNetappOntapStorageSnapshotPolicyDataSourceCopiesScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapStorageSnapshotPolicyDataSourceCopiesSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapStorageSnapshotPolicyDataSourceCopiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapStorageSnapshotPolicyDataSourceCopies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageSnapshotPolicyDataSourceCopies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schedule.internalValue = value.schedule;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // retention_period - computed: true, optional: false, required: false
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }

  // schedule - computed: true, optional: false, required: true
  private _schedule = new DataNetappOntapStorageSnapshotPolicyDataSourceCopiesScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataNetappOntapStorageSnapshotPolicyDataSourceCopiesSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // snapmirror_label - computed: true, optional: false, required: false
  public get snapmirrorLabel() {
    return this.getStringAttribute('snapmirror_label');
  }
}

export class DataNetappOntapStorageSnapshotPolicyDataSourceCopiesList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapStorageSnapshotPolicyDataSourceCopies[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapStorageSnapshotPolicyDataSourceCopiesOutputReference {
    return new DataNetappOntapStorageSnapshotPolicyDataSourceCopiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_snapshot_policy_data_source netapp-ontap_storage_snapshot_policy_data_source}
*/
export class DataNetappOntapStorageSnapshotPolicyDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_storage_snapshot_policy_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapStorageSnapshotPolicyDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapStorageSnapshotPolicyDataSource to import
  * @param importFromId The id of the existing DataNetappOntapStorageSnapshotPolicyDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_snapshot_policy_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapStorageSnapshotPolicyDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_storage_snapshot_policy_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_snapshot_policy_data_source netapp-ontap_storage_snapshot_policy_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapStorageSnapshotPolicyDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapStorageSnapshotPolicyDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_storage_snapshot_policy_data_source',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // copies - computed: true, optional: false, required: false
  private _copies = new DataNetappOntapStorageSnapshotPolicyDataSourceCopiesList(this, "copies", false);
  public get copies() {
    return this._copies;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // svm_name - computed: true, optional: false, required: false
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
