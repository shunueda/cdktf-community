// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_certificate_certificate_verify_child_group_memberlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcSystemCertificateCertificateVerifyChildGroupMemberlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_certificate_certificate_verify_child_group_memberlist#filter DataFortiadcSystemCertificateCertificateVerifyChildGroupMemberlist#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_certificate_certificate_verify_child_group_memberlist#id DataFortiadcSystemCertificateCertificateVerifyChildGroupMemberlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_certificate_certificate_verify_child_group_memberlist#pkey DataFortiadcSystemCertificateCertificateVerifyChildGroupMemberlist#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_certificate_certificate_verify_child_group_memberlist#vdom DataFortiadcSystemCertificateCertificateVerifyChildGroupMemberlist#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_certificate_certificate_verify_child_group_memberlist fortiadc_system_certificate_certificate_verify_child_group_memberlist}
*/
export class DataFortiadcSystemCertificateCertificateVerifyChildGroupMemberlist extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_certificate_certificate_verify_child_group_memberlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcSystemCertificateCertificateVerifyChildGroupMemberlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcSystemCertificateCertificateVerifyChildGroupMemberlist to import
  * @param importFromId The id of the existing DataFortiadcSystemCertificateCertificateVerifyChildGroupMemberlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_certificate_certificate_verify_child_group_memberlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcSystemCertificateCertificateVerifyChildGroupMemberlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_certificate_certificate_verify_child_group_memberlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/data-sources/system_certificate_certificate_verify_child_group_memberlist fortiadc_system_certificate_certificate_verify_child_group_memberlist} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcSystemCertificateCertificateVerifyChildGroupMemberlistConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcSystemCertificateCertificateVerifyChildGroupMemberlistConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_certificate_certificate_verify_child_group_memberlist',
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
    this._filter = config.filter;
    this._id = config.id;
    this._pkey = config.pkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // mkey_list - computed: true, optional: false, required: false
  public get mkeyList() {
    return this.getListAttribute('mkey_list');
  }

  // pkey - computed: false, optional: false, required: true
  private _pkey?: string; 
  public get pkey() {
    return this.getStringAttribute('pkey');
  }
  public set pkey(value: string) {
    this._pkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkeyInput() {
    return this._pkey;
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
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      pkey: cdktf.stringToTerraform(this._pkey),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
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
