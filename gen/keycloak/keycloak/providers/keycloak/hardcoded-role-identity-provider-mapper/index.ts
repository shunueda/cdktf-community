// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/hardcoded_role_identity_provider_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HardcodedRoleIdentityProviderMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/hardcoded_role_identity_provider_mapper#extra_config HardcodedRoleIdentityProviderMapper#extra_config}
  */
  readonly extraConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/hardcoded_role_identity_provider_mapper#id HardcodedRoleIdentityProviderMapper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDP Alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/hardcoded_role_identity_provider_mapper#identity_provider_alias HardcodedRoleIdentityProviderMapper#identity_provider_alias}
  */
  readonly identityProviderAlias: string;
  /**
  * IDP Mapper Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/hardcoded_role_identity_provider_mapper#name HardcodedRoleIdentityProviderMapper#name}
  */
  readonly name: string;
  /**
  * Realm Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/hardcoded_role_identity_provider_mapper#realm HardcodedRoleIdentityProviderMapper#realm}
  */
  readonly realm: string;
  /**
  * Role Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/hardcoded_role_identity_provider_mapper#role HardcodedRoleIdentityProviderMapper#role}
  */
  readonly role?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/hardcoded_role_identity_provider_mapper keycloak_hardcoded_role_identity_provider_mapper}
*/
export class HardcodedRoleIdentityProviderMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_hardcoded_role_identity_provider_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HardcodedRoleIdentityProviderMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HardcodedRoleIdentityProviderMapper to import
  * @param importFromId The id of the existing HardcodedRoleIdentityProviderMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/hardcoded_role_identity_provider_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HardcodedRoleIdentityProviderMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_hardcoded_role_identity_provider_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/hardcoded_role_identity_provider_mapper keycloak_hardcoded_role_identity_provider_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HardcodedRoleIdentityProviderMapperConfig
  */
  public constructor(scope: Construct, id: string, config: HardcodedRoleIdentityProviderMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_hardcoded_role_identity_provider_mapper',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extraConfig = config.extraConfig;
    this._id = config.id;
    this._identityProviderAlias = config.identityProviderAlias;
    this._name = config.name;
    this._realm = config.realm;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extra_config - computed: false, optional: true, required: false
  private _extraConfig?: { [key: string]: string }; 
  public get extraConfig() {
    return this.getStringMapAttribute('extra_config');
  }
  public set extraConfig(value: { [key: string]: string }) {
    this._extraConfig = value;
  }
  public resetExtraConfig() {
    this._extraConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig;
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

  // identity_provider_alias - computed: false, optional: false, required: true
  private _identityProviderAlias?: string; 
  public get identityProviderAlias() {
    return this.getStringAttribute('identity_provider_alias');
  }
  public set identityProviderAlias(value: string) {
    this._identityProviderAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderAliasInput() {
    return this._identityProviderAlias;
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

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extra_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraConfig),
      id: cdktf.stringToTerraform(this._id),
      identity_provider_alias: cdktf.stringToTerraform(this._identityProviderAlias),
      name: cdktf.stringToTerraform(this._name),
      realm: cdktf.stringToTerraform(this._realm),
      role: cdktf.stringToTerraform(this._role),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extra_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider_alias: {
        value: cdktf.stringToHclTerraform(this._identityProviderAlias),
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
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
