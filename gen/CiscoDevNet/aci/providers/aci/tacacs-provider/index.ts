// https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TacacsProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#annotation TacacsProvider#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#auth_protocol TacacsProvider#auth_protocol}
  */
  readonly authProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#description TacacsProvider#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#id TacacsProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#key TacacsProvider#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#monitor_server TacacsProvider#monitor_server}
  */
  readonly monitorServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#monitoring_password TacacsProvider#monitoring_password}
  */
  readonly monitoringPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#monitoring_user TacacsProvider#monitoring_user}
  */
  readonly monitoringUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#name TacacsProvider#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#name_alias TacacsProvider#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#port TacacsProvider#port}
  */
  readonly port?: string;
  /**
  * Create relation to fv:AREpP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#relation_aaa_rs_prov_to_epp TacacsProvider#relation_aaa_rs_prov_to_epp}
  */
  readonly relationAaaRsProvToEpp?: string;
  /**
  * Create relation to fv:ATg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#relation_aaa_rs_sec_prov_to_epg TacacsProvider#relation_aaa_rs_sec_prov_to_epg}
  */
  readonly relationAaaRsSecProvToEpg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#retries TacacsProvider#retries}
  */
  readonly retries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#timeout TacacsProvider#timeout}
  */
  readonly timeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider aci_tacacs_provider}
*/
export class TacacsProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_tacacs_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TacacsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TacacsProvider to import
  * @param importFromId The id of the existing TacacsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TacacsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_tacacs_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/tacacs_provider aci_tacacs_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TacacsProviderConfig
  */
  public constructor(scope: Construct, id: string, config: TacacsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_tacacs_provider',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._authProtocol = config.authProtocol;
    this._description = config.description;
    this._id = config.id;
    this._key = config.key;
    this._monitorServer = config.monitorServer;
    this._monitoringPassword = config.monitoringPassword;
    this._monitoringUser = config.monitoringUser;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._port = config.port;
    this._relationAaaRsProvToEpp = config.relationAaaRsProvToEpp;
    this._relationAaaRsSecProvToEpg = config.relationAaaRsSecProvToEpg;
    this._retries = config.retries;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // auth_protocol - computed: true, optional: true, required: false
  private _authProtocol?: string; 
  public get authProtocol() {
    return this.getStringAttribute('auth_protocol');
  }
  public set authProtocol(value: string) {
    this._authProtocol = value;
  }
  public resetAuthProtocol() {
    this._authProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // monitor_server - computed: true, optional: true, required: false
  private _monitorServer?: string; 
  public get monitorServer() {
    return this.getStringAttribute('monitor_server');
  }
  public set monitorServer(value: string) {
    this._monitorServer = value;
  }
  public resetMonitorServer() {
    this._monitorServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorServerInput() {
    return this._monitorServer;
  }

  // monitoring_password - computed: true, optional: true, required: false
  private _monitoringPassword?: string; 
  public get monitoringPassword() {
    return this.getStringAttribute('monitoring_password');
  }
  public set monitoringPassword(value: string) {
    this._monitoringPassword = value;
  }
  public resetMonitoringPassword() {
    this._monitoringPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringPasswordInput() {
    return this._monitoringPassword;
  }

  // monitoring_user - computed: true, optional: true, required: false
  private _monitoringUser?: string; 
  public get monitoringUser() {
    return this.getStringAttribute('monitoring_user');
  }
  public set monitoringUser(value: string) {
    this._monitoringUser = value;
  }
  public resetMonitoringUser() {
    this._monitoringUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringUserInput() {
    return this._monitoringUser;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // relation_aaa_rs_prov_to_epp - computed: false, optional: true, required: false
  private _relationAaaRsProvToEpp?: string; 
  public get relationAaaRsProvToEpp() {
    return this.getStringAttribute('relation_aaa_rs_prov_to_epp');
  }
  public set relationAaaRsProvToEpp(value: string) {
    this._relationAaaRsProvToEpp = value;
  }
  public resetRelationAaaRsProvToEpp() {
    this._relationAaaRsProvToEpp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationAaaRsProvToEppInput() {
    return this._relationAaaRsProvToEpp;
  }

  // relation_aaa_rs_sec_prov_to_epg - computed: false, optional: true, required: false
  private _relationAaaRsSecProvToEpg?: string; 
  public get relationAaaRsSecProvToEpg() {
    return this.getStringAttribute('relation_aaa_rs_sec_prov_to_epg');
  }
  public set relationAaaRsSecProvToEpg(value: string) {
    this._relationAaaRsSecProvToEpg = value;
  }
  public resetRelationAaaRsSecProvToEpg() {
    this._relationAaaRsSecProvToEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationAaaRsSecProvToEpgInput() {
    return this._relationAaaRsSecProvToEpg;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: string; 
  public get retries() {
    return this.getStringAttribute('retries');
  }
  public set retries(value: string) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      auth_protocol: cdktf.stringToTerraform(this._authProtocol),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      monitor_server: cdktf.stringToTerraform(this._monitorServer),
      monitoring_password: cdktf.stringToTerraform(this._monitoringPassword),
      monitoring_user: cdktf.stringToTerraform(this._monitoringUser),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      port: cdktf.stringToTerraform(this._port),
      relation_aaa_rs_prov_to_epp: cdktf.stringToTerraform(this._relationAaaRsProvToEpp),
      relation_aaa_rs_sec_prov_to_epg: cdktf.stringToTerraform(this._relationAaaRsSecProvToEpg),
      retries: cdktf.stringToTerraform(this._retries),
      timeout: cdktf.stringToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_protocol: {
        value: cdktf.stringToHclTerraform(this._authProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_server: {
        value: cdktf.stringToHclTerraform(this._monitorServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_password: {
        value: cdktf.stringToHclTerraform(this._monitoringPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_user: {
        value: cdktf.stringToHclTerraform(this._monitoringUser),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_aaa_rs_prov_to_epp: {
        value: cdktf.stringToHclTerraform(this._relationAaaRsProvToEpp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_aaa_rs_sec_prov_to_epg: {
        value: cdktf.stringToHclTerraform(this._relationAaaRsSecProvToEpg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.stringToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
