// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_policy#file ProxyPolicy#file}
  */
  readonly file: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_policy#file_hash ProxyPolicy#file_hash}
  */
  readonly fileHash: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_policy#id ProxyPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_policy#name ProxyPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_policy#proxy_name ProxyPolicy#proxy_name}
  */
  readonly proxyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_policy#revision ProxyPolicy#revision}
  */
  readonly revision: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_policy apigee_proxy_policy}
*/
export class ProxyPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee_proxy_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProxyPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProxyPolicy to import
  * @param importFromId The id of the existing ProxyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProxyPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee_proxy_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_policy apigee_proxy_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ProxyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee_proxy_policy',
      terraformGeneratorMetadata: {
        providerName: 'apigee',
        providerVersion: '0.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._file = config.file;
    this._fileHash = config.fileHash;
    this._id = config.id;
    this._name = config.name;
    this._proxyName = config.proxyName;
    this._revision = config.revision;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // file_hash - computed: false, optional: false, required: true
  private _fileHash?: string; 
  public get fileHash() {
    return this.getStringAttribute('file_hash');
  }
  public set fileHash(value: string) {
    this._fileHash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileHashInput() {
    return this._fileHash;
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

  // proxy_name - computed: false, optional: false, required: true
  private _proxyName?: string; 
  public get proxyName() {
    return this.getStringAttribute('proxy_name');
  }
  public set proxyName(value: string) {
    this._proxyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNameInput() {
    return this._proxyName;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file: cdktf.stringToTerraform(this._file),
      file_hash: cdktf.stringToTerraform(this._fileHash),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proxy_name: cdktf.stringToTerraform(this._proxyName),
      revision: cdktf.numberToTerraform(this._revision),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_hash: {
        value: cdktf.stringToHclTerraform(this._fileHash),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_name: {
        value: cdktf.stringToHclTerraform(this._proxyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision: {
        value: cdktf.numberToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
