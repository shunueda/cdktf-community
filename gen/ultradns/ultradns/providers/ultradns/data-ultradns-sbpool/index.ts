// https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/sbpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUltradnsSbpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/sbpool#id DataUltradnsSbpool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/sbpool#owner_name DataUltradnsSbpool#owner_name}
  */
  readonly ownerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/sbpool#record_type DataUltradnsSbpool#record_type}
  */
  readonly recordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/sbpool#zone_name DataUltradnsSbpool#zone_name}
  */
  readonly zoneName: string;
}
export interface DataUltradnsSbpoolBackupRecord {
}

export function dataUltradnsSbpoolBackupRecordToTerraform(struct?: DataUltradnsSbpoolBackupRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsSbpoolBackupRecordToHclTerraform(struct?: DataUltradnsSbpoolBackupRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsSbpoolBackupRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsSbpoolBackupRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsSbpoolBackupRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_to_serve - computed: true, optional: false, required: false
  public get availableToServe() {
    return this.getBooleanAttribute('available_to_serve');
  }

  // failover_delay - computed: true, optional: false, required: false
  public get failoverDelay() {
    return this.getNumberAttribute('failover_delay');
  }

  // rdata - computed: true, optional: false, required: false
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
}

export class DataUltradnsSbpoolBackupRecordList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsSbpoolBackupRecordOutputReference {
    return new DataUltradnsSbpoolBackupRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsSbpoolRdataInfo {
}

export function dataUltradnsSbpoolRdataInfoToTerraform(struct?: DataUltradnsSbpoolRdataInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsSbpoolRdataInfoToHclTerraform(struct?: DataUltradnsSbpoolRdataInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsSbpoolRdataInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsSbpoolRdataInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsSbpoolRdataInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_to_serve - computed: true, optional: false, required: false
  public get availableToServe() {
    return this.getBooleanAttribute('available_to_serve');
  }

  // failover_delay - computed: true, optional: false, required: false
  public get failoverDelay() {
    return this.getNumberAttribute('failover_delay');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // rdata - computed: true, optional: false, required: false
  public get rdata() {
    return this.getStringAttribute('rdata');
  }

  // run_probes - computed: true, optional: false, required: false
  public get runProbes() {
    return this.getBooleanAttribute('run_probes');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}

export class DataUltradnsSbpoolRdataInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsSbpoolRdataInfoOutputReference {
    return new DataUltradnsSbpoolRdataInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/sbpool ultradns_sbpool}
*/
export class DataUltradnsSbpool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ultradns_sbpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUltradnsSbpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUltradnsSbpool to import
  * @param importFromId The id of the existing DataUltradnsSbpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/sbpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUltradnsSbpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ultradns_sbpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/sbpool ultradns_sbpool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUltradnsSbpoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataUltradnsSbpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'ultradns_sbpool',
      terraformGeneratorMetadata: {
        providerName: 'ultradns',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ownerName = config.ownerName;
    this._recordType = config.recordType;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // act_on_probes - computed: true, optional: false, required: false
  public get actOnProbes() {
    return this.getBooleanAttribute('act_on_probes');
  }

  // backup_record - computed: true, optional: false, required: false
  private _backupRecord = new DataUltradnsSbpoolBackupRecordList(this, "backup_record", true);
  public get backupRecord() {
    return this._backupRecord;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
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

  // max_active - computed: true, optional: false, required: false
  public get maxActive() {
    return this.getNumberAttribute('max_active');
  }

  // max_served - computed: true, optional: false, required: false
  public get maxServed() {
    return this.getNumberAttribute('max_served');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getStringAttribute('order');
  }

  // owner_name - computed: false, optional: false, required: true
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // pool_description - computed: true, optional: false, required: false
  public get poolDescription() {
    return this.getStringAttribute('pool_description');
  }

  // rdata_info - computed: true, optional: false, required: false
  private _rdataInfo = new DataUltradnsSbpoolRdataInfoList(this, "rdata_info", true);
  public get rdataInfo() {
    return this._rdataInfo;
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // run_probes - computed: true, optional: false, required: false
  public get runProbes() {
    return this.getBooleanAttribute('run_probes');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      record_type: cdktf.stringToTerraform(this._recordType),
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_name: {
        value: cdktf.stringToHclTerraform(this._ownerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
