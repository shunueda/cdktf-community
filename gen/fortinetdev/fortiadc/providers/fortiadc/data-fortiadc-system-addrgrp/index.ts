// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_addrgrp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcSystemAddrgrpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_addrgrp#id DataFortiadcSystemAddrgrp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_addrgrp#mkey DataFortiadcSystemAddrgrp#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_addrgrp#vdom DataFortiadcSystemAddrgrp#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_addrgrp fortiadc_system_addrgrp}
*/
export class DataFortiadcSystemAddrgrp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_addrgrp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcSystemAddrgrp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcSystemAddrgrp to import
  * @param importFromId The id of the existing DataFortiadcSystemAddrgrp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_addrgrp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcSystemAddrgrp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_addrgrp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_addrgrp fortiadc_system_addrgrp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcSystemAddrgrpConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcSystemAddrgrpConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_addrgrp',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.0'
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
    this._mkey = config.mkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // member_list - computed: true, optional: false, required: false
  public get memberList() {
    return this.getStringAttribute('member_list');
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      vdom: cdktf.stringToTerraform(this._vdom),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
