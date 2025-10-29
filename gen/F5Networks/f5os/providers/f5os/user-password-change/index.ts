// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user_password_change
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserPasswordChangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * New password for the specified user account. Must meet F5OS device password policy requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user_password_change#new_password UserPasswordChange#new_password}
  */
  readonly newPassword: string;
  /**
  * Current password for the specified user account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user_password_change#old_password UserPasswordChange#old_password}
  */
  readonly oldPassword: string;
  /**
  * Name of the F5OS user account for which to change the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user_password_change#user_name UserPasswordChange#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user_password_change f5os_user_password_change}
*/
export class UserPasswordChange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_user_password_change";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserPasswordChange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserPasswordChange to import
  * @param importFromId The id of the existing UserPasswordChange that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user_password_change#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserPasswordChange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_user_password_change", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user_password_change f5os_user_password_change} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserPasswordChangeConfig
  */
  public constructor(scope: Construct, id: string, config: UserPasswordChangeConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_user_password_change',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._newPassword = config.newPassword;
    this._oldPassword = config.oldPassword;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // new_password - computed: false, optional: false, required: true
  private _newPassword?: string; 
  public get newPassword() {
    return this.getStringAttribute('new_password');
  }
  public set newPassword(value: string) {
    this._newPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordInput() {
    return this._newPassword;
  }

  // old_password - computed: false, optional: false, required: true
  private _oldPassword?: string; 
  public get oldPassword() {
    return this.getStringAttribute('old_password');
  }
  public set oldPassword(value: string) {
    this._oldPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordInput() {
    return this._oldPassword;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      new_password: cdktf.stringToTerraform(this._newPassword),
      old_password: cdktf.stringToTerraform(this._oldPassword),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      new_password: {
        value: cdktf.stringToHclTerraform(this._newPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      old_password: {
        value: cdktf.stringToHclTerraform(this._oldPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
