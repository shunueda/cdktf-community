// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_abort
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityconsoleAbortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_abort#fmgadom SecurityconsoleAbort#fmgadom}
  */
  readonly fmgadom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_abort#force_recreate SecurityconsoleAbort#force_recreate}
  */
  readonly forceRecreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_abort#id SecurityconsoleAbort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_abort fortimanager_securityconsole_abort}
*/
export class SecurityconsoleAbort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_securityconsole_abort";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityconsoleAbort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityconsoleAbort to import
  * @param importFromId The id of the existing SecurityconsoleAbort that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_abort#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityconsoleAbort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_securityconsole_abort", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_abort fortimanager_securityconsole_abort} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityconsoleAbortConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityconsoleAbortConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_securityconsole_abort',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fmgadom = config.fmgadom;
    this._forceRecreate = config.forceRecreate;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fmgadom - computed: true, optional: true, required: false
  private _fmgadom?: string; 
  public get fmgadom() {
    return this.getStringAttribute('fmgadom');
  }
  public set fmgadom(value: string) {
    this._fmgadom = value;
  }
  public resetFmgadom() {
    this._fmgadom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgadomInput() {
    return this._fmgadom;
  }

  // force_recreate - computed: true, optional: true, required: false
  private _forceRecreate?: string; 
  public get forceRecreate() {
    return this.getStringAttribute('force_recreate');
  }
  public set forceRecreate(value: string) {
    this._forceRecreate = value;
  }
  public resetForceRecreate() {
    this._forceRecreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRecreateInput() {
    return this._forceRecreate;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fmgadom: cdktf.stringToTerraform(this._fmgadom),
      force_recreate: cdktf.stringToTerraform(this._forceRecreate),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fmgadom: {
        value: cdktf.stringToHclTerraform(this._fmgadom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_recreate: {
        value: cdktf.stringToHclTerraform(this._forceRecreate),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
