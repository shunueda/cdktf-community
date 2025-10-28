// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlScriptProtocolMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper#client_id SamlScriptProtocolMapper#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper#client_scope_id SamlScriptProtocolMapper#client_scope_id}
  */
  readonly clientScopeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper#friendly_name SamlScriptProtocolMapper#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper#id SamlScriptProtocolMapper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper#name SamlScriptProtocolMapper#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper#realm_id SamlScriptProtocolMapper#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper#saml_attribute_name SamlScriptProtocolMapper#saml_attribute_name}
  */
  readonly samlAttributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper#saml_attribute_name_format SamlScriptProtocolMapper#saml_attribute_name_format}
  */
  readonly samlAttributeNameFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper#script SamlScriptProtocolMapper#script}
  */
  readonly script: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper#single_value_attribute SamlScriptProtocolMapper#single_value_attribute}
  */
  readonly singleValueAttribute?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper keycloak_saml_script_protocol_mapper}
*/
export class SamlScriptProtocolMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_saml_script_protocol_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlScriptProtocolMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlScriptProtocolMapper to import
  * @param importFromId The id of the existing SamlScriptProtocolMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlScriptProtocolMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_saml_script_protocol_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_script_protocol_mapper keycloak_saml_script_protocol_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlScriptProtocolMapperConfig
  */
  public constructor(scope: Construct, id: string, config: SamlScriptProtocolMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_saml_script_protocol_mapper',
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
    this._clientId = config.clientId;
    this._clientScopeId = config.clientScopeId;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._name = config.name;
    this._realmId = config.realmId;
    this._samlAttributeName = config.samlAttributeName;
    this._samlAttributeNameFormat = config.samlAttributeNameFormat;
    this._script = config.script;
    this._singleValueAttribute = config.singleValueAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_scope_id - computed: false, optional: true, required: false
  private _clientScopeId?: string; 
  public get clientScopeId() {
    return this.getStringAttribute('client_scope_id');
  }
  public set clientScopeId(value: string) {
    this._clientScopeId = value;
  }
  public resetClientScopeId() {
    this._clientScopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientScopeIdInput() {
    return this._clientScopeId;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // saml_attribute_name - computed: false, optional: false, required: true
  private _samlAttributeName?: string; 
  public get samlAttributeName() {
    return this.getStringAttribute('saml_attribute_name');
  }
  public set samlAttributeName(value: string) {
    this._samlAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAttributeNameInput() {
    return this._samlAttributeName;
  }

  // saml_attribute_name_format - computed: false, optional: false, required: true
  private _samlAttributeNameFormat?: string; 
  public get samlAttributeNameFormat() {
    return this.getStringAttribute('saml_attribute_name_format');
  }
  public set samlAttributeNameFormat(value: string) {
    this._samlAttributeNameFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAttributeNameFormatInput() {
    return this._samlAttributeNameFormat;
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // single_value_attribute - computed: false, optional: true, required: false
  private _singleValueAttribute?: boolean | cdktf.IResolvable; 
  public get singleValueAttribute() {
    return this.getBooleanAttribute('single_value_attribute');
  }
  public set singleValueAttribute(value: boolean | cdktf.IResolvable) {
    this._singleValueAttribute = value;
  }
  public resetSingleValueAttribute() {
    this._singleValueAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleValueAttributeInput() {
    return this._singleValueAttribute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_scope_id: cdktf.stringToTerraform(this._clientScopeId),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      realm_id: cdktf.stringToTerraform(this._realmId),
      saml_attribute_name: cdktf.stringToTerraform(this._samlAttributeName),
      saml_attribute_name_format: cdktf.stringToTerraform(this._samlAttributeNameFormat),
      script: cdktf.stringToTerraform(this._script),
      single_value_attribute: cdktf.booleanToTerraform(this._singleValueAttribute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_scope_id: {
        value: cdktf.stringToHclTerraform(this._clientScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_attribute_name: {
        value: cdktf.stringToHclTerraform(this._samlAttributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_attribute_name_format: {
        value: cdktf.stringToHclTerraform(this._samlAttributeNameFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_value_attribute: {
        value: cdktf.booleanToHclTerraform(this._singleValueAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
