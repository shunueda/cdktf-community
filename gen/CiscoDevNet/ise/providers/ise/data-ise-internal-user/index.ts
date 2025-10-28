// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/internal_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIseInternalUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/internal_user#id DataIseInternalUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the internal user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/internal_user#name DataIseInternalUser#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/internal_user ise_internal_user}
*/
export class DataIseInternalUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_internal_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIseInternalUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIseInternalUser to import
  * @param importFromId The id of the existing DataIseInternalUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/internal_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIseInternalUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_internal_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/internal_user ise_internal_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIseInternalUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIseInternalUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ise_internal_user',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.11'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name_alias - computed: true, optional: false, required: false
  public get accountNameAlias() {
    return this.getStringAttribute('account_name_alias');
  }

  // change_password - computed: true, optional: false, required: false
  public get changePassword() {
    return this.getBooleanAttribute('change_password');
  }

  // custom_attributes - computed: true, optional: false, required: false
  public get customAttributes() {
    return this.getStringAttribute('custom_attributes');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // enable_password - computed: true, optional: false, required: false
  public get enablePassword() {
    return this.getStringAttribute('enable_password');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
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

  // identity_groups - computed: true, optional: false, required: false
  public get identityGroups() {
    return this.getStringAttribute('identity_groups');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // name - computed: true, optional: true, required: false
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_id_store - computed: true, optional: false, required: false
  public get passwordIdStore() {
    return this.getStringAttribute('password_id_store');
  }

  // password_never_expires - computed: true, optional: false, required: false
  public get passwordNeverExpires() {
    return this.getBooleanAttribute('password_never_expires');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
