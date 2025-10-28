// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/resources/router_prefix_list_child_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterPrefixListChildRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/resources/router_prefix_list_child_rule#action RouterPrefixListChildRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/resources/router_prefix_list_child_rule#ge RouterPrefixListChildRule#ge}
  */
  readonly ge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/resources/router_prefix_list_child_rule#id RouterPrefixListChildRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/resources/router_prefix_list_child_rule#le RouterPrefixListChildRule#le}
  */
  readonly le?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/resources/router_prefix_list_child_rule#mkey RouterPrefixListChildRule#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/resources/router_prefix_list_child_rule#pkey RouterPrefixListChildRule#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/resources/router_prefix_list_child_rule#prefix RouterPrefixListChildRule#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/resources/router_prefix_list_child_rule#vdom RouterPrefixListChildRule#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/resources/router_prefix_list_child_rule fortiadc_router_prefix_list_child_rule}
*/
export class RouterPrefixListChildRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_router_prefix_list_child_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterPrefixListChildRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterPrefixListChildRule to import
  * @param importFromId The id of the existing RouterPrefixListChildRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/resources/router_prefix_list_child_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterPrefixListChildRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_router_prefix_list_child_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.0/docs/resources/router_prefix_list_child_rule fortiadc_router_prefix_list_child_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterPrefixListChildRuleConfig
  */
  public constructor(scope: Construct, id: string, config: RouterPrefixListChildRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_router_prefix_list_child_rule',
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
    this._action = config.action;
    this._ge = config.ge;
    this._id = config.id;
    this._le = config.le;
    this._mkey = config.mkey;
    this._pkey = config.pkey;
    this._prefix = config.prefix;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ge - computed: true, optional: true, required: false
  private _ge?: string; 
  public get ge() {
    return this.getStringAttribute('ge');
  }
  public set ge(value: string) {
    this._ge = value;
  }
  public resetGe() {
    this._ge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geInput() {
    return this._ge;
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

  // le - computed: true, optional: true, required: false
  private _le?: string; 
  public get le() {
    return this.getStringAttribute('le');
  }
  public set le(value: string) {
    this._le = value;
  }
  public resetLe() {
    this._le = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leInput() {
    return this._le;
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
      action: cdktf.stringToTerraform(this._action),
      ge: cdktf.stringToTerraform(this._ge),
      id: cdktf.stringToTerraform(this._id),
      le: cdktf.stringToTerraform(this._le),
      mkey: cdktf.stringToTerraform(this._mkey),
      pkey: cdktf.stringToTerraform(this._pkey),
      prefix: cdktf.stringToTerraform(this._prefix),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ge: {
        value: cdktf.stringToHclTerraform(this._ge),
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
      le: {
        value: cdktf.stringToHclTerraform(this._le),
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
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
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
