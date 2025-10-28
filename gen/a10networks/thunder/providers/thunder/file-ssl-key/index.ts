// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileSslKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Remote site (IP or domain name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key#host FileSslKey#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key#id FileSslKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Local file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key#name FileSslKey#name}
  */
  readonly name: string;
  /**
  * Overwrite existing file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key#overwrite FileSslKey#overwrite}
  */
  readonly overwrite?: number;
  /**
  * Password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key#password FileSslKey#password}
  */
  readonly password?: string;
  /**
  * Remote path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key#path FileSslKey#path}
  */
  readonly path: string;
  /**
  * Transfer protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key#protocol FileSslKey#protocol}
  */
  readonly protocol: string;
  /**
  * Mark as non-exportable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key#secured FileSslKey#secured}
  */
  readonly secured?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key#use_mgmt_port FileSslKey#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * Username for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key#username FileSslKey#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key thunder_file_ssl_key}
*/
export class FileSslKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_file_ssl_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileSslKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileSslKey to import
  * @param importFromId The id of the existing FileSslKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileSslKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_file_ssl_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/file_ssl_key thunder_file_ssl_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileSslKeyConfig
  */
  public constructor(scope: Construct, id: string, config: FileSslKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_file_ssl_key',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._host = config.host;
    this._id = config.id;
    this._name = config.name;
    this._overwrite = config.overwrite;
    this._password = config.password;
    this._path = config.path;
    this._protocol = config.protocol;
    this._secured = config.secured;
    this._useMgmtPort = config.useMgmtPort;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: number; 
  public get overwrite() {
    return this.getNumberAttribute('overwrite');
  }
  public set overwrite(value: number) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // secured - computed: false, optional: true, required: false
  private _secured?: number; 
  public get secured() {
    return this.getNumberAttribute('secured');
  }
  public set secured(value: number) {
    this._secured = value;
  }
  public resetSecured() {
    this._secured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securedInput() {
    return this._secured;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      overwrite: cdktf.numberToTerraform(this._overwrite),
      password: cdktf.stringToTerraform(this._password),
      path: cdktf.stringToTerraform(this._path),
      protocol: cdktf.stringToTerraform(this._protocol),
      secured: cdktf.numberToTerraform(this._secured),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      overwrite: {
        value: cdktf.numberToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secured: {
        value: cdktf.numberToHclTerraform(this._secured),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
