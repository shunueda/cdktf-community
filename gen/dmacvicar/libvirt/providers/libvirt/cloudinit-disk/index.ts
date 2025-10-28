// https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/cloudinit_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudinitDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/cloudinit_disk#id CloudinitDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/cloudinit_disk#meta_data CloudinitDisk#meta_data}
  */
  readonly metaData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/cloudinit_disk#name CloudinitDisk#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/cloudinit_disk#network_config CloudinitDisk#network_config}
  */
  readonly networkConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/cloudinit_disk#pool CloudinitDisk#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/cloudinit_disk#user_data CloudinitDisk#user_data}
  */
  readonly userData?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/cloudinit_disk libvirt_cloudinit_disk}
*/
export class CloudinitDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_cloudinit_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudinitDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudinitDisk to import
  * @param importFromId The id of the existing CloudinitDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/cloudinit_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudinitDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_cloudinit_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/resources/cloudinit_disk libvirt_cloudinit_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudinitDiskConfig
  */
  public constructor(scope: Construct, id: string, config: CloudinitDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'libvirt_cloudinit_disk',
      terraformGeneratorMetadata: {
        providerName: 'libvirt',
        providerVersion: '0.8.3'
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
    this._metaData = config.metaData;
    this._name = config.name;
    this._networkConfig = config.networkConfig;
    this._pool = config.pool;
    this._userData = config.userData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // meta_data - computed: false, optional: true, required: false
  private _metaData?: string; 
  public get metaData() {
    return this.getStringAttribute('meta_data');
  }
  public set metaData(value: string) {
    this._metaData = value;
  }
  public resetMetaData() {
    this._metaData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData;
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

  // network_config - computed: false, optional: true, required: false
  private _networkConfig?: string; 
  public get networkConfig() {
    return this.getStringAttribute('network_config');
  }
  public set networkConfig(value: string) {
    this._networkConfig = value;
  }
  public resetNetworkConfig() {
    this._networkConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      meta_data: cdktf.stringToTerraform(this._metaData),
      name: cdktf.stringToTerraform(this._name),
      network_config: cdktf.stringToTerraform(this._networkConfig),
      pool: cdktf.stringToTerraform(this._pool),
      user_data: cdktf.stringToTerraform(this._userData),
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
      meta_data: {
        value: cdktf.stringToHclTerraform(this._metaData),
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
      network_config: {
        value: cdktf.stringToHclTerraform(this._networkConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
