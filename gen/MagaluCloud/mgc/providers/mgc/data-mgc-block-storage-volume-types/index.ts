// https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/block_storage_volume_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMgcBlockStorageVolumeTypesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataMgcBlockStorageVolumeTypesVolumeTypes {
}

export function dataMgcBlockStorageVolumeTypesVolumeTypesToTerraform(struct?: DataMgcBlockStorageVolumeTypesVolumeTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMgcBlockStorageVolumeTypesVolumeTypesToHclTerraform(struct?: DataMgcBlockStorageVolumeTypesVolumeTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMgcBlockStorageVolumeTypesVolumeTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMgcBlockStorageVolumeTypesVolumeTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMgcBlockStorageVolumeTypesVolumeTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataMgcBlockStorageVolumeTypesVolumeTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataMgcBlockStorageVolumeTypesVolumeTypesOutputReference {
    return new DataMgcBlockStorageVolumeTypesVolumeTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/block_storage_volume_types mgc_block_storage_volume_types}
*/
export class DataMgcBlockStorageVolumeTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_block_storage_volume_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMgcBlockStorageVolumeTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMgcBlockStorageVolumeTypes to import
  * @param importFromId The id of the existing DataMgcBlockStorageVolumeTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/block_storage_volume_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMgcBlockStorageVolumeTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_block_storage_volume_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/block_storage_volume_types mgc_block_storage_volume_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMgcBlockStorageVolumeTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMgcBlockStorageVolumeTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mgc_block_storage_volume_types',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // volume_types - computed: true, optional: false, required: false
  private _volumeTypes = new DataMgcBlockStorageVolumeTypesVolumeTypesList(this, "volume_types", false);
  public get volumeTypes() {
    return this._volumeTypes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
