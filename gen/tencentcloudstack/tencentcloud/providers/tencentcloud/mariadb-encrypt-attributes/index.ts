// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/mariadb_encrypt_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MariadbEncryptAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * whether to enable data encryption, it is not supported to turn it off after it is turned on. The optional values: 0-disable, 1-enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/mariadb_encrypt_attributes#encrypt_enabled MariadbEncryptAttributes#encrypt_enabled}
  */
  readonly encryptEnabled: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/mariadb_encrypt_attributes#id MariadbEncryptAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/mariadb_encrypt_attributes#instance_id MariadbEncryptAttributes#instance_id}
  */
  readonly instanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/mariadb_encrypt_attributes tencentcloud_mariadb_encrypt_attributes}
*/
export class MariadbEncryptAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mariadb_encrypt_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MariadbEncryptAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MariadbEncryptAttributes to import
  * @param importFromId The id of the existing MariadbEncryptAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/mariadb_encrypt_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MariadbEncryptAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mariadb_encrypt_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/mariadb_encrypt_attributes tencentcloud_mariadb_encrypt_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MariadbEncryptAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: MariadbEncryptAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mariadb_encrypt_attributes',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._encryptEnabled = config.encryptEnabled;
    this._id = config.id;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encrypt_enabled - computed: false, optional: false, required: true
  private _encryptEnabled?: number; 
  public get encryptEnabled() {
    return this.getNumberAttribute('encrypt_enabled');
  }
  public set encryptEnabled(value: number) {
    this._encryptEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptEnabledInput() {
    return this._encryptEnabled;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encrypt_enabled: cdktf.numberToTerraform(this._encryptEnabled),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encrypt_enabled: {
        value: cdktf.numberToHclTerraform(this._encryptEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
