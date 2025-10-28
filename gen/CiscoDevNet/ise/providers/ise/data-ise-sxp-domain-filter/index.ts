// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/sxp_domain_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIseSxpDomainFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/sxp_domain_filter#id DataIseSxpDomainFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/sxp_domain_filter#name DataIseSxpDomainFilter#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/sxp_domain_filter ise_sxp_domain_filter}
*/
export class DataIseSxpDomainFilter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_sxp_domain_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIseSxpDomainFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIseSxpDomainFilter to import
  * @param importFromId The id of the existing DataIseSxpDomainFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/sxp_domain_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIseSxpDomainFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_sxp_domain_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.11/docs/data-sources/sxp_domain_filter ise_sxp_domain_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIseSxpDomainFilterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIseSxpDomainFilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ise_sxp_domain_filter',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.11'
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

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return this.getStringAttribute('domains');
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

  // sgt - computed: true, optional: false, required: false
  public get sgt() {
    return this.getStringAttribute('sgt');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // vn - computed: true, optional: false, required: false
  public get vn() {
    return this.getStringAttribute('vn');
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
