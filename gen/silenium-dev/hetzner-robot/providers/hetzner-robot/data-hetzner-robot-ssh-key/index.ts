// https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/data-sources/ssh_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHetznerRobotSshKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Key fingerprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/data-sources/ssh_key#fingerprint DataHetznerRobotSshKey#fingerprint}
  */
  readonly fingerprint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/data-sources/ssh_key#id DataHetznerRobotSshKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/data-sources/ssh_key hetzner-robot_ssh_key}
*/
export class DataHetznerRobotSshKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hetzner-robot_ssh_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHetznerRobotSshKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHetznerRobotSshKey to import
  * @param importFromId The id of the existing DataHetznerRobotSshKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/data-sources/ssh_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHetznerRobotSshKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hetzner-robot_ssh_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/data-sources/ssh_key hetzner-robot_ssh_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHetznerRobotSshKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataHetznerRobotSshKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'hetzner-robot_ssh_key',
      terraformGeneratorMetadata: {
        providerName: 'hetzner-robot',
        providerVersion: '3.5.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fingerprint = config.fingerprint;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // fingerprint - computed: false, optional: false, required: true
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fingerprint: cdktf.stringToTerraform(this._fingerprint),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fingerprint: {
        value: cdktf.stringToHclTerraform(this._fingerprint),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
