// https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetboxIpamPrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_prefix#id DataNetboxIpamPrefix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The prefix (IP address/mask) used for this prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_prefix#prefix DataNetboxIpamPrefix#prefix}
  */
  readonly prefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_prefix netbox_ipam_prefix}
*/
export class DataNetboxIpamPrefix extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_ipam_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetboxIpamPrefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetboxIpamPrefix to import
  * @param importFromId The id of the existing DataNetboxIpamPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetboxIpamPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_ipam_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_prefix netbox_ipam_prefix} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetboxIpamPrefixConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetboxIpamPrefixConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netbox_ipam_prefix',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '8.0.2'
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
    this._prefix = config.prefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      prefix: cdktf.stringToTerraform(this._prefix),
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
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
