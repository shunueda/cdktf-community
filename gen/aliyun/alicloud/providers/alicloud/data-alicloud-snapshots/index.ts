// https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudSnapshotsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#category DataAlicloudSnapshots#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#dry_run DataAlicloudSnapshots#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#encrypted DataAlicloudSnapshots#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#id DataAlicloudSnapshots#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#ids DataAlicloudSnapshots#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#kms_key_id DataAlicloudSnapshots#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#name_regex DataAlicloudSnapshots#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#output_file DataAlicloudSnapshots#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#resource_group_id DataAlicloudSnapshots#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#snapshot_link_id DataAlicloudSnapshots#snapshot_link_id}
  */
  readonly snapshotLinkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#snapshot_name DataAlicloudSnapshots#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#snapshot_type DataAlicloudSnapshots#snapshot_type}
  */
  readonly snapshotType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#source_disk_type DataAlicloudSnapshots#source_disk_type}
  */
  readonly sourceDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#status DataAlicloudSnapshots#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#tags DataAlicloudSnapshots#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#type DataAlicloudSnapshots#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#usage DataAlicloudSnapshots#usage}
  */
  readonly usage?: string;
}
export interface DataAlicloudSnapshotsSnapshots {
}

export function dataAlicloudSnapshotsSnapshotsToTerraform(struct?: DataAlicloudSnapshotsSnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSnapshotsSnapshotsToHclTerraform(struct?: DataAlicloudSnapshotsSnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSnapshotsSnapshotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSnapshotsSnapshots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSnapshotsSnapshots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instant_access - computed: true, optional: false, required: false
  public get instantAccess() {
    return this.getBooleanAttribute('instant_access');
  }

  // instant_access_retention_days - computed: true, optional: false, required: false
  public get instantAccessRetentionDays() {
    return this.getNumberAttribute('instant_access_retention_days');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getStringAttribute('progress');
  }

  // remain_time - computed: true, optional: false, required: false
  public get remainTime() {
    return this.getNumberAttribute('remain_time');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }

  // snapshot_sn - computed: true, optional: false, required: false
  public get snapshotSn() {
    return this.getStringAttribute('snapshot_sn');
  }

  // snapshot_type - computed: true, optional: false, required: false
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }

  // source_disk_id - computed: true, optional: false, required: false
  public get sourceDiskId() {
    return this.getStringAttribute('source_disk_id');
  }

  // source_disk_size - computed: true, optional: false, required: false
  public get sourceDiskSize() {
    return this.getStringAttribute('source_disk_size');
  }

  // source_disk_type - computed: true, optional: false, required: false
  public get sourceDiskType() {
    return this.getStringAttribute('source_disk_type');
  }

  // source_storage_type - computed: true, optional: false, required: false
  public get sourceStorageType() {
    return this.getStringAttribute('source_storage_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

export class DataAlicloudSnapshotsSnapshotsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSnapshotsSnapshotsOutputReference {
    return new DataAlicloudSnapshotsSnapshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots alicloud_snapshots}
*/
export class DataAlicloudSnapshots extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_snapshots";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudSnapshots resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudSnapshots to import
  * @param importFromId The id of the existing DataAlicloudSnapshots that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudSnapshots to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_snapshots", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/snapshots alicloud_snapshots} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudSnapshotsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudSnapshotsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_snapshots',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.261.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._dryRun = config.dryRun;
    this._encrypted = config.encrypted;
    this._id = config.id;
    this._ids = config.ids;
    this._kmsKeyId = config.kmsKeyId;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._resourceGroupId = config.resourceGroupId;
    this._snapshotLinkId = config.snapshotLinkId;
    this._snapshotName = config.snapshotName;
    this._snapshotType = config.snapshotType;
    this._sourceDiskType = config.sourceDiskType;
    this._status = config.status;
    this._tags = config.tags;
    this._type = config.type;
    this._usage = config.usage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // snapshot_link_id - computed: false, optional: true, required: false
  private _snapshotLinkId?: string; 
  public get snapshotLinkId() {
    return this.getStringAttribute('snapshot_link_id');
  }
  public set snapshotLinkId(value: string) {
    this._snapshotLinkId = value;
  }
  public resetSnapshotLinkId() {
    this._snapshotLinkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotLinkIdInput() {
    return this._snapshotLinkId;
  }

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // snapshot_type - computed: false, optional: true, required: false
  private _snapshotType?: string; 
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }
  public set snapshotType(value: string) {
    this._snapshotType = value;
  }
  public resetSnapshotType() {
    this._snapshotType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTypeInput() {
    return this._snapshotType;
  }

  // snapshots - computed: true, optional: false, required: false
  private _snapshots = new DataAlicloudSnapshotsSnapshotsList(this, "snapshots", false);
  public get snapshots() {
    return this._snapshots;
  }

  // source_disk_type - computed: false, optional: true, required: false
  private _sourceDiskType?: string; 
  public get sourceDiskType() {
    return this.getStringAttribute('source_disk_type');
  }
  public set sourceDiskType(value: string) {
    this._sourceDiskType = value;
  }
  public resetSourceDiskType() {
    this._sourceDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDiskTypeInput() {
    return this._sourceDiskType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      snapshot_link_id: cdktf.stringToTerraform(this._snapshotLinkId),
      snapshot_name: cdktf.stringToTerraform(this._snapshotName),
      snapshot_type: cdktf.stringToTerraform(this._snapshotType),
      source_disk_type: cdktf.stringToTerraform(this._sourceDiskType),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      usage: cdktf.stringToTerraform(this._usage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_link_id: {
        value: cdktf.stringToHclTerraform(this._snapshotLinkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_name: {
        value: cdktf.stringToHclTerraform(this._snapshotName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_type: {
        value: cdktf.stringToHclTerraform(this._snapshotType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_disk_type: {
        value: cdktf.stringToHclTerraform(this._sourceDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage: {
        value: cdktf.stringToHclTerraform(this._usage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
