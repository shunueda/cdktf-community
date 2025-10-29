// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/data-sources/address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the address object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/data-sources/address#id DataScmAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the address object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/data-sources/address#name DataScmAddress#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/data-sources/address scm_address}
*/
export class DataScmAddress extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmAddress to import
  * @param importFromId The id of the existing DataScmAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/data-sources/address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/data-sources/address scm_address} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmAddressConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_address',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.2'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_netmask - computed: true, optional: false, required: false
  public get ipNetmask() {
    return this.getStringAttribute('ip_netmask');
  }

  // ip_range - computed: true, optional: false, required: false
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }

  // ip_wildcard - computed: true, optional: false, required: false
  public get ipWildcard() {
    return this.getStringAttribute('ip_wildcard');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getListAttribute('tag');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
