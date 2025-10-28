// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslcertkey_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslvserverSslcertkeyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslcertkey_binding#ca SslvserverSslcertkeyBinding#ca}
  */
  readonly ca?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslcertkey_binding#certkeyname SslvserverSslcertkeyBinding#certkeyname}
  */
  readonly certkeyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslcertkey_binding#crlcheck SslvserverSslcertkeyBinding#crlcheck}
  */
  readonly crlcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslcertkey_binding#id SslvserverSslcertkeyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslcertkey_binding#ocspcheck SslvserverSslcertkeyBinding#ocspcheck}
  */
  readonly ocspcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslcertkey_binding#skipcaname SslvserverSslcertkeyBinding#skipcaname}
  */
  readonly skipcaname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslcertkey_binding#snicert SslvserverSslcertkeyBinding#snicert}
  */
  readonly snicert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslcertkey_binding#vservername SslvserverSslcertkeyBinding#vservername}
  */
  readonly vservername: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslcertkey_binding citrixadc_sslvserver_sslcertkey_binding}
*/
export class SslvserverSslcertkeyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslvserver_sslcertkey_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslvserverSslcertkeyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslvserverSslcertkeyBinding to import
  * @param importFromId The id of the existing SslvserverSslcertkeyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslcertkey_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslvserverSslcertkeyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslvserver_sslcertkey_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslcertkey_binding citrixadc_sslvserver_sslcertkey_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslvserverSslcertkeyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: SslvserverSslcertkeyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslvserver_sslcertkey_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ca = config.ca;
    this._certkeyname = config.certkeyname;
    this._crlcheck = config.crlcheck;
    this._id = config.id;
    this._ocspcheck = config.ocspcheck;
    this._skipcaname = config.skipcaname;
    this._snicert = config.snicert;
    this._vservername = config.vservername;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca - computed: true, optional: true, required: false
  private _ca?: boolean | cdktf.IResolvable; 
  public get ca() {
    return this.getBooleanAttribute('ca');
  }
  public set ca(value: boolean | cdktf.IResolvable) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // certkeyname - computed: false, optional: false, required: true
  private _certkeyname?: string; 
  public get certkeyname() {
    return this.getStringAttribute('certkeyname');
  }
  public set certkeyname(value: string) {
    this._certkeyname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certkeynameInput() {
    return this._certkeyname;
  }

  // crlcheck - computed: true, optional: true, required: false
  private _crlcheck?: string; 
  public get crlcheck() {
    return this.getStringAttribute('crlcheck');
  }
  public set crlcheck(value: string) {
    this._crlcheck = value;
  }
  public resetCrlcheck() {
    this._crlcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlcheckInput() {
    return this._crlcheck;
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

  // ocspcheck - computed: true, optional: true, required: false
  private _ocspcheck?: string; 
  public get ocspcheck() {
    return this.getStringAttribute('ocspcheck');
  }
  public set ocspcheck(value: string) {
    this._ocspcheck = value;
  }
  public resetOcspcheck() {
    this._ocspcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspcheckInput() {
    return this._ocspcheck;
  }

  // skipcaname - computed: true, optional: true, required: false
  private _skipcaname?: boolean | cdktf.IResolvable; 
  public get skipcaname() {
    return this.getBooleanAttribute('skipcaname');
  }
  public set skipcaname(value: boolean | cdktf.IResolvable) {
    this._skipcaname = value;
  }
  public resetSkipcaname() {
    this._skipcaname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipcanameInput() {
    return this._skipcaname;
  }

  // snicert - computed: false, optional: true, required: false
  private _snicert?: boolean | cdktf.IResolvable; 
  public get snicert() {
    return this.getBooleanAttribute('snicert');
  }
  public set snicert(value: boolean | cdktf.IResolvable) {
    this._snicert = value;
  }
  public resetSnicert() {
    this._snicert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snicertInput() {
    return this._snicert;
  }

  // vservername - computed: false, optional: false, required: true
  private _vservername?: string; 
  public get vservername() {
    return this.getStringAttribute('vservername');
  }
  public set vservername(value: string) {
    this._vservername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vservernameInput() {
    return this._vservername;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca: cdktf.booleanToTerraform(this._ca),
      certkeyname: cdktf.stringToTerraform(this._certkeyname),
      crlcheck: cdktf.stringToTerraform(this._crlcheck),
      id: cdktf.stringToTerraform(this._id),
      ocspcheck: cdktf.stringToTerraform(this._ocspcheck),
      skipcaname: cdktf.booleanToTerraform(this._skipcaname),
      snicert: cdktf.booleanToTerraform(this._snicert),
      vservername: cdktf.stringToTerraform(this._vservername),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca: {
        value: cdktf.booleanToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certkeyname: {
        value: cdktf.stringToHclTerraform(this._certkeyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crlcheck: {
        value: cdktf.stringToHclTerraform(this._crlcheck),
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
      ocspcheck: {
        value: cdktf.stringToHclTerraform(this._ocspcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skipcaname: {
        value: cdktf.booleanToHclTerraform(this._skipcaname),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snicert: {
        value: cdktf.booleanToHclTerraform(this._snicert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vservername: {
        value: cdktf.stringToHclTerraform(this._vservername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
