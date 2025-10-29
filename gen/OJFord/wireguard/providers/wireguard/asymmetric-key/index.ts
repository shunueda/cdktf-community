// https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/resources/asymmetric_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsymmetricKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string to tie the lifecycle to, e.g. the terraform ID of another resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/resources/asymmetric_key#bind AsymmetricKey#bind}
  */
  readonly bind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/resources/asymmetric_key#id AsymmetricKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A supplied WireGuard private key. By default one is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/resources/asymmetric_key#private_key AsymmetricKey#private_key}
  */
  readonly privateKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/resources/asymmetric_key wireguard_asymmetric_key}
*/
export class AsymmetricKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wireguard_asymmetric_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsymmetricKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsymmetricKey to import
  * @param importFromId The id of the existing AsymmetricKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/resources/asymmetric_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsymmetricKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wireguard_asymmetric_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ojford/wireguard/0.4.0/docs/resources/asymmetric_key wireguard_asymmetric_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsymmetricKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AsymmetricKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'wireguard_asymmetric_key',
      terraformGeneratorMetadata: {
        providerName: 'wireguard',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bind = config.bind;
    this._id = config.id;
    this._privateKey = config.privateKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bind - computed: false, optional: true, required: false
  private _bind?: string; 
  public get bind() {
    return this.getStringAttribute('bind');
  }
  public set bind(value: string) {
    this._bind = value;
  }
  public resetBind() {
    this._bind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInput() {
    return this._bind;
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

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bind: cdktf.stringToTerraform(this._bind),
      id: cdktf.stringToTerraform(this._id),
      private_key: cdktf.stringToTerraform(this._privateKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bind: {
        value: cdktf.stringToHclTerraform(this._bind),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
