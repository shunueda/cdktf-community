// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_cifs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementResourceCifsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_cifs#id DataCheckpointManagementResourceCifs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_cifs#name DataCheckpointManagementResourceCifs#name}
  */
  readonly name?: string;
  /**
  * Object uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_cifs#uid DataCheckpointManagementResourceCifs#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementResourceCifsAllowedDiskAndPrintShares {
}

export function dataCheckpointManagementResourceCifsAllowedDiskAndPrintSharesToTerraform(struct?: DataCheckpointManagementResourceCifsAllowedDiskAndPrintShares): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceCifsAllowedDiskAndPrintSharesToHclTerraform(struct?: DataCheckpointManagementResourceCifsAllowedDiskAndPrintShares): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceCifsAllowedDiskAndPrintSharesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceCifsAllowedDiskAndPrintShares | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceCifsAllowedDiskAndPrintShares | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // share_name - computed: true, optional: false, required: false
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
}

export class DataCheckpointManagementResourceCifsAllowedDiskAndPrintSharesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceCifsAllowedDiskAndPrintSharesOutputReference {
    return new DataCheckpointManagementResourceCifsAllowedDiskAndPrintSharesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_cifs checkpoint_management_resource_cifs}
*/
export class DataCheckpointManagementResourceCifs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_resource_cifs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementResourceCifs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementResourceCifs to import
  * @param importFromId The id of the existing DataCheckpointManagementResourceCifs that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_cifs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementResourceCifs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_resource_cifs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_resource_cifs checkpoint_management_resource_cifs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementResourceCifsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementResourceCifsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_resource_cifs',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_disk_and_print_shares - computed: true, optional: false, required: false
  private _allowedDiskAndPrintShares = new DataCheckpointManagementResourceCifsAllowedDiskAndPrintSharesList(this, "allowed_disk_and_print_shares", false);
  public get allowedDiskAndPrintShares() {
    return this._allowedDiskAndPrintShares;
  }

  // block_remote_registry_access - computed: true, optional: false, required: false
  public get blockRemoteRegistryAccess() {
    return this.getBooleanAttribute('block_remote_registry_access');
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
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

  // log_access_violation - computed: true, optional: false, required: false
  public get logAccessViolation() {
    return this.getBooleanAttribute('log_access_violation');
  }

  // log_mapped_shares - computed: true, optional: false, required: false
  public get logMappedShares() {
    return this.getBooleanAttribute('log_mapped_shares');
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
