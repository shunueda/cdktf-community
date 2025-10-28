// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volume_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapVolumeSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volume_snapshot#cx_profile_name DataNetappOntapVolumeSnapshot#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Snapshot name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volume_snapshot#name DataNetappOntapVolumeSnapshot#name}
  */
  readonly name: string;
  /**
  * SVM Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volume_snapshot#svm_name DataNetappOntapVolumeSnapshot#svm_name}
  */
  readonly svmName: string;
  /**
  * Volume Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volume_snapshot#volume_name DataNetappOntapVolumeSnapshot#volume_name}
  */
  readonly volumeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volume_snapshot netapp-ontap_volume_snapshot}
*/
export class DataNetappOntapVolumeSnapshot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_volume_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapVolumeSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapVolumeSnapshot to import
  * @param importFromId The id of the existing DataNetappOntapVolumeSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volume_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapVolumeSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_volume_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/volume_snapshot netapp-ontap_volume_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapVolumeSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapVolumeSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_volume_snapshot',
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
    this._svmName = config.svmName;
    this._volumeName = config.volumeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // expiry_time - computed: true, optional: false, required: false
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
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

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapmirror_label - computed: true, optional: false, required: false
  public get snapmirrorLabel() {
    return this.getStringAttribute('snapmirror_label');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      name: cdktf.stringToTerraform(this._name),
      svm_name: cdktf.stringToTerraform(this._svmName),
      volume_name: cdktf.stringToTerraform(this._volumeName),
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
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_name: {
        value: cdktf.stringToHclTerraform(this._volumeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
