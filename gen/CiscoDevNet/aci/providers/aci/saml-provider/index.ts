// https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#annotation SamlProvider#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#description SamlProvider#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#entity_id SamlProvider#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#gui_banner_message SamlProvider#gui_banner_message}
  */
  readonly guiBannerMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#https_proxy SamlProvider#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#id SamlProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#id_p SamlProvider#id_p}
  */
  readonly idP?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#key SamlProvider#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#metadata_url SamlProvider#metadata_url}
  */
  readonly metadataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#monitor_server SamlProvider#monitor_server}
  */
  readonly monitorServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#monitoring_password SamlProvider#monitoring_password}
  */
  readonly monitoringPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#monitoring_user SamlProvider#monitoring_user}
  */
  readonly monitoringUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#name SamlProvider#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#name_alias SamlProvider#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Create relation to fv:AREpP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#relation_aaa_rs_prov_to_epp SamlProvider#relation_aaa_rs_prov_to_epp}
  */
  readonly relationAaaRsProvToEpp?: string;
  /**
  * Create relation to fv:ATg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#relation_aaa_rs_sec_prov_to_epg SamlProvider#relation_aaa_rs_sec_prov_to_epg}
  */
  readonly relationAaaRsSecProvToEpg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#retries SamlProvider#retries}
  */
  readonly retries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#sig_alg SamlProvider#sig_alg}
  */
  readonly sigAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#timeout SamlProvider#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#tp SamlProvider#tp}
  */
  readonly tp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#want_assertions_encrypted SamlProvider#want_assertions_encrypted}
  */
  readonly wantAssertionsEncrypted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#want_assertions_signed SamlProvider#want_assertions_signed}
  */
  readonly wantAssertionsSigned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#want_requests_signed SamlProvider#want_requests_signed}
  */
  readonly wantRequestsSigned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#want_response_signed SamlProvider#want_response_signed}
  */
  readonly wantResponseSigned?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider aci_saml_provider}
*/
export class SamlProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_saml_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlProvider to import
  * @param importFromId The id of the existing SamlProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_saml_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/saml_provider aci_saml_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SamlProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_saml_provider',
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
    this._description = config.description;
    this._entityId = config.entityId;
    this._guiBannerMessage = config.guiBannerMessage;
    this._httpsProxy = config.httpsProxy;
    this._id = config.id;
    this._idP = config.idP;
    this._key = config.key;
    this._metadataUrl = config.metadataUrl;
    this._monitorServer = config.monitorServer;
    this._monitoringPassword = config.monitoringPassword;
    this._monitoringUser = config.monitoringUser;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationAaaRsProvToEpp = config.relationAaaRsProvToEpp;
    this._relationAaaRsSecProvToEpg = config.relationAaaRsSecProvToEpg;
    this._retries = config.retries;
    this._sigAlg = config.sigAlg;
    this._timeout = config.timeout;
    this._tp = config.tp;
    this._wantAssertionsEncrypted = config.wantAssertionsEncrypted;
    this._wantAssertionsSigned = config.wantAssertionsSigned;
    this._wantRequestsSigned = config.wantRequestsSigned;
    this._wantResponseSigned = config.wantResponseSigned;
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

  // entity_id - computed: true, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // gui_banner_message - computed: true, optional: true, required: false
  private _guiBannerMessage?: string; 
  public get guiBannerMessage() {
    return this.getStringAttribute('gui_banner_message');
  }
  public set guiBannerMessage(value: string) {
    this._guiBannerMessage = value;
  }
  public resetGuiBannerMessage() {
    this._guiBannerMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiBannerMessageInput() {
    return this._guiBannerMessage;
  }

  // https_proxy - computed: true, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
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

  // id_p - computed: true, optional: true, required: false
  private _idP?: string; 
  public get idP() {
    return this.getStringAttribute('id_p');
  }
  public set idP(value: string) {
    this._idP = value;
  }
  public resetIdP() {
    this._idP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idPInput() {
    return this._idP;
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

  // metadata_url - computed: true, optional: true, required: false
  private _metadataUrl?: string; 
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }
  public set metadataUrl(value: string) {
    this._metadataUrl = value;
  }
  public resetMetadataUrl() {
    this._metadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataUrlInput() {
    return this._metadataUrl;
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

  // sig_alg - computed: true, optional: true, required: false
  private _sigAlg?: string; 
  public get sigAlg() {
    return this.getStringAttribute('sig_alg');
  }
  public set sigAlg(value: string) {
    this._sigAlg = value;
  }
  public resetSigAlg() {
    this._sigAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigAlgInput() {
    return this._sigAlg;
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

  // tp - computed: true, optional: true, required: false
  private _tp?: string; 
  public get tp() {
    return this.getStringAttribute('tp');
  }
  public set tp(value: string) {
    this._tp = value;
  }
  public resetTp() {
    this._tp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpInput() {
    return this._tp;
  }

  // want_assertions_encrypted - computed: true, optional: true, required: false
  private _wantAssertionsEncrypted?: string; 
  public get wantAssertionsEncrypted() {
    return this.getStringAttribute('want_assertions_encrypted');
  }
  public set wantAssertionsEncrypted(value: string) {
    this._wantAssertionsEncrypted = value;
  }
  public resetWantAssertionsEncrypted() {
    this._wantAssertionsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wantAssertionsEncryptedInput() {
    return this._wantAssertionsEncrypted;
  }

  // want_assertions_signed - computed: true, optional: true, required: false
  private _wantAssertionsSigned?: string; 
  public get wantAssertionsSigned() {
    return this.getStringAttribute('want_assertions_signed');
  }
  public set wantAssertionsSigned(value: string) {
    this._wantAssertionsSigned = value;
  }
  public resetWantAssertionsSigned() {
    this._wantAssertionsSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wantAssertionsSignedInput() {
    return this._wantAssertionsSigned;
  }

  // want_requests_signed - computed: true, optional: true, required: false
  private _wantRequestsSigned?: string; 
  public get wantRequestsSigned() {
    return this.getStringAttribute('want_requests_signed');
  }
  public set wantRequestsSigned(value: string) {
    this._wantRequestsSigned = value;
  }
  public resetWantRequestsSigned() {
    this._wantRequestsSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wantRequestsSignedInput() {
    return this._wantRequestsSigned;
  }

  // want_response_signed - computed: true, optional: true, required: false
  private _wantResponseSigned?: string; 
  public get wantResponseSigned() {
    return this.getStringAttribute('want_response_signed');
  }
  public set wantResponseSigned(value: string) {
    this._wantResponseSigned = value;
  }
  public resetWantResponseSigned() {
    this._wantResponseSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wantResponseSignedInput() {
    return this._wantResponseSigned;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      entity_id: cdktf.stringToTerraform(this._entityId),
      gui_banner_message: cdktf.stringToTerraform(this._guiBannerMessage),
      https_proxy: cdktf.stringToTerraform(this._httpsProxy),
      id: cdktf.stringToTerraform(this._id),
      id_p: cdktf.stringToTerraform(this._idP),
      key: cdktf.stringToTerraform(this._key),
      metadata_url: cdktf.stringToTerraform(this._metadataUrl),
      monitor_server: cdktf.stringToTerraform(this._monitorServer),
      monitoring_password: cdktf.stringToTerraform(this._monitoringPassword),
      monitoring_user: cdktf.stringToTerraform(this._monitoringUser),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_aaa_rs_prov_to_epp: cdktf.stringToTerraform(this._relationAaaRsProvToEpp),
      relation_aaa_rs_sec_prov_to_epg: cdktf.stringToTerraform(this._relationAaaRsSecProvToEpg),
      retries: cdktf.stringToTerraform(this._retries),
      sig_alg: cdktf.stringToTerraform(this._sigAlg),
      timeout: cdktf.stringToTerraform(this._timeout),
      tp: cdktf.stringToTerraform(this._tp),
      want_assertions_encrypted: cdktf.stringToTerraform(this._wantAssertionsEncrypted),
      want_assertions_signed: cdktf.stringToTerraform(this._wantAssertionsSigned),
      want_requests_signed: cdktf.stringToTerraform(this._wantRequestsSigned),
      want_response_signed: cdktf.stringToTerraform(this._wantResponseSigned),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_banner_message: {
        value: cdktf.stringToHclTerraform(this._guiBannerMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_proxy: {
        value: cdktf.stringToHclTerraform(this._httpsProxy),
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
      id_p: {
        value: cdktf.stringToHclTerraform(this._idP),
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
      metadata_url: {
        value: cdktf.stringToHclTerraform(this._metadataUrl),
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
      sig_alg: {
        value: cdktf.stringToHclTerraform(this._sigAlg),
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
      tp: {
        value: cdktf.stringToHclTerraform(this._tp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      want_assertions_encrypted: {
        value: cdktf.stringToHclTerraform(this._wantAssertionsEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      want_assertions_signed: {
        value: cdktf.stringToHclTerraform(this._wantAssertionsSigned),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      want_requests_signed: {
        value: cdktf.stringToHclTerraform(this._wantRequestsSigned),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      want_response_signed: {
        value: cdktf.stringToHclTerraform(this._wantResponseSigned),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
